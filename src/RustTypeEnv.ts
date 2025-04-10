/* *****************
 * type environments
 * *****************/

import { assert } from "console";
import { print_error } from "./Utils.js"

/* **********************
 * using arrays as stacks
 * **********************/

// add values destructively to the end of
// given array; return the array
export const push = (array, ...items) => {
	for (let item of items) {
		array.push(item);
	}
	return array;
};

export const pop = (array) => {
	array.pop();
	return array;
}

// return the last element of given array
// without changing the array
export const peek = (array, address) => array.slice(-1 - address)[0];


export class TypeEnvironment {
    type_environment: TypeFrame[]
    private global_type_frame: TypeFrame
    constructor() {
        this.type_environment = empty_type_environment
        this.global_type_frame = new GlobalTypeFrame()
    }

    // push new frames to the type environment
    private push(...frames: TypeFrame[]) {
        for (let frame of frames) {
            this.type_environment.push(frame)
        }
    }
    
    // pop the last frame from the type environment
    private pop() {
        this.type_environment.pop()
    }

    // get the last frame from the type environment
    peek() {
        return this.type_environment[this.type_environment.length - 1]
    }

    mark_moved(x: string) {
        for (let i = this.type_environment.length - 1; i >= 0; i--) { 
            if (this.type_environment[i].frame.hasOwnProperty(x) ) {
                assert(!(this.type_environment[i].frame[x] instanceof MovedType), 
                        `ASSERT FAILED: Trying to move a moved value: ${x}`)
                assert(this.type_environment[i].frame[x].ImmutableBorrowCount || 
                        this.type_environment[i].frame[x].MutableBorrowExists,
                        `ASSERT FAILED: Trying to move a borrowed value: ${x}`)
                this.type_environment[i].frame[x] = new MovedType(this.type_environment[i].frame[x])
                return
            }

            if (this.type_environment[i] instanceof FunctionTypeFrame) {
                // once encountered nearest function frame, cannot be moved
                break
            }
        }
        print_error(`[mark_moved] Type Environment: ${JSON.stringify(this.type_environment, null, 4)}`)
        print_error("[mark_moved] Unable to find this symbol within nearest function scope: " + x)
    }

    // lookup all environment frames, starting from the most recent
    lookup_type(x: string): Type {
        let must_be_closure: boolean = false;
        for (let i = this.type_environment.length - 1; i >= 0; i--) { 
            if (this.type_environment[i].frame.hasOwnProperty(x) ) {
                const type_found: Type = this.type_environment[i].frame[x] 
                if (must_be_closure && !(type_found instanceof ClosureType)) {
                    print_error("[lookup_type] Variable from outer scope: " + x)
                }
                return type_found
            }

            if (this.type_environment[i] instanceof FunctionTypeFrame) {
                // once encountered nearest function frame, can only return closure
                must_be_closure = true 
            }
        }

        // If not found, check the global type environment
        if (this.global_type_frame.frame.hasOwnProperty(x)) {
            return this.global_type_frame.frame[x]
        }
        print_error("[lookup_type] Unbound name: " + x)
    }

    // extend the environment destructively 
    extend_type_environment = (xs: string[], ts: Type[], is_blocktypeframe: boolean) => {
        if (ts.length > xs.length) 
            print_error('too few parameters in function declaration')
        if (ts.length < xs.length) 
            print_error('too many parameters in function declaration')

        const new_frame: TypeFrame = is_blocktypeframe 
                                    ? new BlockTypeFrame()
                                    : new FunctionTypeFrame()
        for (let i = 0; i < xs.length; i++) 
            new_frame.add_variable(xs[i], ts[i])
        this.push(new_frame)
    }

    // pop the last (most recent) frame
    restore_type_environment() {
        // TODO: add logic to update borrow status before popping
        this.pop() 
    }
}


export abstract class TypeFrame {
    frame: {[key:string]: Type}
    constructor() {
        this.frame = {}
    }

    // add a new variable to the frame
    add_variable = (x: string, t: Type) => {
        if (this.frame.hasOwnProperty(x)) {
            print_error(`[add_variable] Variable ${x} already exists in the frame`)
        }
        this.frame[x] = t
    }
}

export class GlobalTypeFrame extends TypeFrame {
    constructor() {
        super()
        // TODO: add global constants/builtins here
    }
}

export class FunctionTypeFrame extends TypeFrame {
    constructor() {
        super()
    }
}

export class BlockTypeFrame extends TypeFrame {
    constructor() {
        super()
    }
}



// Type frames are JavaScript objects that map 
// symbols (strings) to types.

// Type environment is a stack implemented with array 
const empty_type_environment = []
export const global_type_environment: TypeEnvironment = new TypeEnvironment()

export type ScalarTypeName = "i32" | "f64" | "bool" | "char" | "UNKNOWN"
export type TypeName = "closure" | "refType" | ScalarTypeName | "unit" | "returnType" | "moved"

// Type is a class
// TypeName is a string. 
// In closures and references, the typename is automatically set to "closure"/"refType" on construction.
// In scalars, the typename is the rust type, e.g. "i32"
// t.Mutable is only meaningful for declared variables. e.g. let mut x: &i32; --> <ImmutableRefType>.Mutable = True
// Otherwise, t.Mutable can be 'undefined' e.g. 3; --> <ScalarType>.Mutable = undefined
export abstract class Type {
    Mutable: boolean
    TypeName: TypeName
    MutableBorrowExists: boolean
    ImmutableBorrowCount: number
    constructor() {
        this.MutableBorrowExists = false
        this.ImmutableBorrowCount = 0
    }
}

// NOT A REAL TYPE - used to indicate that a variable has been moved
export class MovedType extends Type {
    OriginalType: Type
    constructor(originalType: Type) {
        super()
        this.TypeName = "moved"
        this.OriginalType = originalType
    }
}

export class ScalarType extends Type {
    constructor(typeName: ScalarTypeName, is_mut?: boolean) {
        super()
        this.Mutable = is_mut
        this.TypeName = typeName
    }
}

export class UnitType extends Type {
    constructor(is_mut?: boolean) {
        super();
        this.Mutable = is_mut;
        this.TypeName = "unit";
    }
}

export class ClosureType extends Type {
    ParamTypes: Type[]
    ReturnType: Type
    constructor(paramTypes: Type[], returnTypes: Type) { // function is never mutable in Rust.
        super()
        this.ParamTypes = paramTypes
        this.ReturnType = returnTypes
        this.TypeName = "closure"
    }
}

export abstract class RefType extends Type {
    InnerType: Type
    OriginalSymbol: string
    constructor() {
        super()
        this.TypeName = "refType"
    }
}

export class ImmutableRefType extends RefType {
    constructor(innerType: Type, originalSymbol?: string, is_mut?: boolean, ) {
        super()
        this.InnerType = innerType
        this.OriginalSymbol = originalSymbol
        this.Mutable = is_mut
    }
}

export class MutableRefType extends RefType {
    constructor(innerType: Type, originalSymbol?: string, is_mut?: boolean, ) {
        super()
        this.InnerType = innerType
        this.OriginalSymbol = originalSymbol
        this.Mutable = is_mut
    }
}

export class ReturnType extends Type {
    ReturnedType: Type
    constructor(returnedType: Type, is_mut?: boolean) {
        super()
        this.ReturnedType = returnedType
        this.Mutable = is_mut
        this.TypeName = "returnType"
    }  
}

export const compare_type = (t1: Type, t2: Type): boolean => {
    // typeof only returns primitive types and objects...
    if (!(t1 instanceof Type) || !(t2 instanceof Type)) {
        print_error(`[compare_type] arguments are not of class Type: ${unparse_type(t1)} and ${unparse_type(t2)}`);
        return false;
    }

    // Compare the class type at runtime
    // If different types, return false
    if (t1.constructor !== t2.constructor) {
        return false;
    }

    // Compare ReturnTypes
    if (t1 instanceof ReturnType) {
        return compare_type(t1.ReturnedType, (t2 as ReturnType).ReturnedType)
    }

    // Compare Closures
    if (t1 instanceof ClosureType) {
        return compare_types(t1.ParamTypes, (t2 as ClosureType).ParamTypes) && compare_type(t1.ReturnType, (t2 as ClosureType).ReturnType);
    }

    // Compare References
    if (t1 instanceof ImmutableRefType) {
        return compare_type(t1.InnerType, (t2 as ImmutableRefType).InnerType);
    }

    if (t1 instanceof MutableRefType) {
        return compare_type(t1.InnerType, (t2 as MutableRefType).InnerType);
    }

    // Compare Scalars
    if (t1 instanceof ScalarType) {
        return t1.TypeName === t2.TypeName;
    }

    if (t1 instanceof UnitType) {
        return true;
    }

    if (t1 instanceof MovedType) {
        print_error(`[compare_type] Should not encounter a MovedType during type comparison: ${unparse_type(t1)}`);
    }

    return false;
};

export const compare_types = (ts1: Type[], ts2: Type[]): boolean => {
    // First compare array lengths
    if (ts1.length !== ts2.length) {
        return false;
    }

    // Then compare each corresponding type
    for (let i = 0; i < ts1.length; i++) {
        if (!compare_type(ts1[i], ts2[i])) {  
            return false;
        }
    }

    return true;
};

export const unparse_type = (t: Type): string => {
    // Get borrow status
    // Returns "_&mut" if mutable borrow exists
    // Returns "_&_<n>" where n is the number of immutable borrows if immutable borrow exists
    let borrow_str: string = "";
    if (t.MutableBorrowExists) {
        borrow_str = "___&mut";
    }  
    
    if (t.ImmutableBorrowCount > 0) {
        borrow_str += "___&_" + t.ImmutableBorrowCount;
    }

    assert(!(t.MutableBorrowExists && t.ImmutableBorrowCount), `ASSERT FAILED: Cannot have both mutable and immutable borrows at the same time: ${JSON.stringify(t)}`)

    // Handle primitive types (string case)
    if (t instanceof ScalarType) {
        return t.TypeName + borrow_str;
    }

    // Handle reference type
    if (t instanceof RefType) {
        const ref_str = t instanceof MutableRefType ? "&mut " : "&";
        return `${ref_str}${unparse_type(t.InnerType)}${borrow_str}`;
    }
    
    // Handle closure types
    if (t instanceof ClosureType) {
        const params = t.ParamTypes.map(unparse_type).join(', ');
        const return_type = unparse_type(t.ReturnType);
        return `fn(${params}) -> ${return_type}${borrow_str}`;
    }

    if (t instanceof UnitType) {
        return "()";
    }

    if (t instanceof ReturnType) {
        return `retType<${unparse_type(t.ReturnedType)}>${borrow_str}`
    }

    if (t instanceof MovedType) {
        return `MOVED<${unparse_type(t.OriginalType)}>${borrow_str}`
    }
    
    if (t === undefined) {
        print_error(`[unparse_type] Cannot unparse undefined value: ${JSON.stringify(t)}`)
    }

    print_error(`[unparse_type] Unknown type of ${JSON.stringify(t)}`);
};