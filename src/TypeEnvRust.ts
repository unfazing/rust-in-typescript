/* *****************
 * type environments
 * *****************/

import { assert } from "console";

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
        this.type_environment = []
        this.global_type_frame = new GlobalTypeFrame()
    }

    // push new frames to the type environment
    private push(...frames: TypeFrame[]) {
        for (let frame of frames) {
            this.type_environment.push(frame)
        }
    }
    
    // pop the last frame from the type environment
    private pop(): TypeFrame {
        return this.type_environment.pop()
    }

    // get the last frame from the type environment
    peek() {
        return this.type_environment[this.type_environment.length - 1]
    }

    // lookup all environment frames, starting from the most recent
    // returns the type of the symbol if it exists, else return undefined
    lookup_type(x: string): Type {
        let must_be_fn: boolean = false;
        for (let i = this.type_environment.length - 1; i >= 0; i--) { 

            // found symbol in current frame, terminate early
            if (this.type_environment[i].frame.hasOwnProperty(x) ) {
                const type_found: Type = this.type_environment[i].frame[x] 
                if (must_be_fn && !(type_found instanceof FunctionType)) {
                    throw new Error(`Type error; [lookup_type] Variable '${x}' is from an outer scope.`)
                }
                return type_found
            }

            if (this.type_environment[i] instanceof FunctionTypeFrame) {
                // once encountered nearest function frame, can only return function
                must_be_fn = true 
            }
        }

        // If not found, check the global type environment
        if (this.global_type_frame.frame.hasOwnProperty(x)) {
            return this.global_type_frame.frame[x]
        }

        throw new Error(`Type error; [lookup_type] Unbound variable '${x}'.`)
    }

    // extend the environment destructively 
    extend_type_environment = (is_blocktypeframe: boolean, annotation: string) => {

        const new_frame: TypeFrame = is_blocktypeframe 
            ? new BlockTypeFrame(annotation) 
            : new FunctionTypeFrame(annotation)

        this.push(new_frame)
    }

    // pop the last (most recent) frame
    restore_type_environment() {
        let removed_frame: TypeFrame = this.pop()
        
        for (let x in removed_frame.frame) {
            // log(`[restore_type_environment] checking ${x}`, "Type Environment")
            const type: Type = removed_frame.frame[x]
            if (type instanceof RefType && !type.IsMoved) {
                type.freeRef()
            }
        }
    }

    add_symbol_to_current_frame(symbol: string, type: Type) {
        const current_frame = this.peek();
        current_frame.add_variable(symbol, type);

        // once a type is added to the environment, it is no longer temporary
        type.IsTemporary = false;
    }

    // zero-th scope is global type env
    get_scope_depth(symbol: string): number { 
        for (let i = this.type_environment.length - 1; i >= 0; i--) { 
            // found symbol in current frame, terminate early
            if (this.type_environment[i].frame.hasOwnProperty(symbol) ) {
                return i + 1
            }
        }

        // If not found, check the global type environment
        if (this.global_type_frame.frame.hasOwnProperty(symbol)) {
            return 0
        }
        throw new Error(`Type error; [get_scope_depth] Unbound variable '${symbol}'.`)
    }

    get_current_environment_depth(): number {
        return this.type_environment.length
    }

    stringify(): string {
        let output = "Type Environment:\n";
        output += "====================\n";

        // Local frames (from most recent to oldest)
        for (let i = this.type_environment.length - 1; i >= 0; i--) {
            const frame = this.type_environment[i];
            const frameType = frame instanceof FunctionTypeFrame ? "Function Frame" : "Block Frame";
            output += `[Depth ${i + 1}] ${frameType}: ${frame.annotation}\n`;
            if (Object.keys(frame.frame).length === 0) {
                output += "  (empty)\n";
            } else {
                for (const symbol in frame.frame) {
                    output += `  ${symbol}: ${this.stringifyType(frame.frame[symbol])}\n`;
                }
            }
            output += "-------------------\n";
        }


        // Global frame
        output += "[Depth: 0] Global Frame:\n";
        if (Object.keys(this.global_type_frame.frame).length === 0) {
            output += "  (empty)\n";
        } else {
            for (const symbol in this.global_type_frame.frame) {
                output += `  ${symbol}: ${this.stringifyType(this.global_type_frame.frame[symbol])}\n`;
            }
        }
        output += "-------------------\n";


        return output;
    }

    private stringifyType(type: Type): string {
        let details = `${type.TypeName}`;
        const flags: string[] = [];
        if (type.IsMutable) flags.push("Mutable");
        if (type.IsMoved) flags.push("Moved");
        if (type.IsTemporary) flags.push("Temporary");
        if (type.MutableBorrowExists) flags.push("Mutably Borrowed");
        if (type.ImmutableBorrowCount > 0) flags.push(`Immutable Borrows: ${type.ImmutableBorrowCount}`);

        if (flags.length > 0) {
            details += ` (${flags.join(', ')})`;
        }

        if (type instanceof RefType) {
            details += ` (Points to: ${type.InnerType ? this.stringifyType(type.InnerType) : 'null'})`;
        } else if (type instanceof ArrayType) {
            details += ` (Element Type: ${this.stringifyType(type.BaseType)}, Size: ${type.ContainedTypes.length})`;
        }

        return details;
    }
}

// Type frames are JavaScript objects that map symbols (strings) to Types.
export abstract class TypeFrame {
    frame: {[key:string]: Type}
    annotation: string
    constructor(annotation) {
        this.frame = {}
        this.annotation = annotation
    }

    // add a new variable to the frame
    add_variable = (x: string, t: Type) => {
        this.frame[x] = t
    }
}

export class GlobalTypeFrame extends TypeFrame {
    constructor() {
        super("Global constants/builtins")
        // TODO: add global constants/builtins here
    }
}

export class FunctionTypeFrame extends TypeFrame {
    constructor(annotation: string) {
        super(annotation)
    }
}

export class BlockTypeFrame extends TypeFrame {
    constructor(annotation: string) {
        super(annotation)
    }
}



export type ScalarTypeName = "i32" | "f64" | "bool" | "char" | "UNKNOWN"
export type TypeName = ScalarTypeName | "function" | "refType" | "unit" | "returnType" | "string" | "array" | "immutableRefType" | "mutableRefType"

export abstract class Type {
    TypeName: TypeName
    IsMutable: boolean
    IsMoved: boolean
    IsTemporary: boolean
    MutableBorrowExists: boolean
    ImmutableBorrowCount: number

    constructor() {
        this.IsMutable = true // default to true to handle temp variables
        this.IsMoved = false
        this.IsTemporary = true
        this.MutableBorrowExists = false
        this.ImmutableBorrowCount = 0
    }

    mark_moved() {
        this.IsMoved = true
    }

    abstract clone(): Type

    clone_types(types: Type[]): Type[] {
        let cloned_types: Type[] = []
        for (let i = 0; i < types.length; i++) {
            cloned_types.push(types[i].clone())
        }
        return cloned_types
    }
}

export class ScalarType extends Type {
    constructor(typeName: ScalarTypeName) {
        super()
        this.TypeName = typeName
    }
    clone(): Type {
        return new ScalarType(this.TypeName as ScalarTypeName)
    }
}

export class ArrayType extends Type {
    ContainedTypes: Type[]
    BaseType: Type // store type information for empty type
    constructor(containedTypes: Type[], baseType: Type) {
        super()
        this.TypeName = "array"
        this.ContainedTypes = containedTypes // empty types have []
        this.BaseType = baseType
    }

    clone() {
        return new ArrayType(this.clone_types(this.ContainedTypes), this.BaseType)
    }
}


export class UnitType extends Type {
    constructor() {
        super();
        this.TypeName = "unit";
    }

    clone() {
        return this
    }
}

export class FunctionType extends Type {
    ParamTypes: Type[]
    ReturnType: Type
    constructor(paramTypes: Type[], returnType: Type) { // function is never mutable, and never moved.
        super()
        this.ParamTypes = paramTypes
        this.ReturnType = returnType
        this.TypeName = "function"
    }

    clone() {
        return new FunctionType(this.clone_types(this.ParamTypes), this.ReturnType.clone())
    }
}

export class StringType extends Type {
    constructor() {
        super()
        this.TypeName = "string"
    }

    clone() {
        return new StringType()
    }
}

export abstract class RefType extends Type {
    InnerType: Type
    constructor() {
        super()
        this.TypeName = "refType"
    }

    freeRef() {
        if (this instanceof ImmutableRefType) {
            this.InnerType.ImmutableBorrowCount--
        }

        if (this instanceof MutableRefType) {
            this.InnerType.MutableBorrowExists = false
        }
    }

}

export class ImmutableRefType extends RefType {
    constructor(innerType: Type) {
        super()
        this.InnerType = innerType
        this.TypeName = "immutableRefType"
    }

    clone() {
        return new ImmutableRefType(this.InnerType)
    }
}

export class MutableRefType extends RefType {
    constructor(innerType: Type,) {
        super()
        this.InnerType = innerType
        this.TypeName = "mutableRefType"

    }
    mark_moved() {
        super.mark_moved()
        this.InnerType.MutableBorrowExists = false
    }
    clone() {
        return new MutableRefType(this.InnerType)
    }
}

export class ReturnType extends Type {
    ReturnedType: Type
    constructor(returnedType: Type) {
        super()
        this.ReturnedType = returnedType
        this.TypeName = "returnType"
    }
    clone() {
        return new ReturnType(this.ReturnedType.clone())
    }
}

export const compare_type = (t1: Type, t2: Type): boolean => {

    if (!(t1 instanceof Type) || !(t2 instanceof Type)) {
        throw new Error(`[compare_type] arguments are not of class Type: ${unparse_type(t1)} and ${unparse_type(t2)}`);
    }

    assert(!(t1.IsMoved || t2.IsMoved), `[compare_type] Should not encounter a moved type during type comparison.`);
    
    // Compare the class type at runtime
    // If different types, return false
    if (t1.constructor !== t2.constructor) {
        return false;
    }

    // Compare ReturnTypes
    if (t1 instanceof ReturnType) {
        return compare_type(t1.ReturnedType, (t2 as ReturnType).ReturnedType)
    }

    // Compare Functions
    if (t1 instanceof FunctionType) {
        return compare_types(t1.ParamTypes, (t2 as FunctionType).ParamTypes) 
            && compare_type(t1.ReturnType, (t2 as FunctionType).ReturnType);
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

    // Compare strings
    if (t1 instanceof StringType && t2 instanceof StringType) {
        return true
    }

    // Compare arrays
    if (t1 instanceof ArrayType && t2 instanceof ArrayType) {
        return compare_types(t1.ContainedTypes, t2.ContainedTypes)
    }

    if (t1 instanceof UnitType) {
        return true;
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

    if (t === undefined) {
        throw new Error(`[unparse_type] Cannot unparse undefined value.`)
    }

    if (!(t instanceof Type)) {
        throw new Error(`[unparse_type] ${JSON.stringify(t)} is not an instance of Type. }`);
    }

    // Get IsTemporary status
    // const temp_str: string = t.IsTemporary ? "___temp" : ""

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

    assert(
        !(t.MutableBorrowExists && t.ImmutableBorrowCount), 
        `[unparse_type] Cannot have both mutable and immutable borrows at the same time: ${JSON.stringify(t)}`
    )

    let moved_str = ""
    if (t.IsMoved) {
        moved_str = "Moved "
    }

    // Handle primitive types (string case)
    if (t instanceof ScalarType || t instanceof StringType) {
        return moved_str + t.TypeName + borrow_str;
    }

    // Handle reference type
    if (t instanceof RefType) {
        const ref_str = t instanceof MutableRefType ? "&mut " : "&";
        return moved_str + `${ref_str}${unparse_type(t.InnerType)}${borrow_str}`;
    }
    
    // Handle Function types
    if (t instanceof FunctionType) {
        const params = t.ParamTypes.map(unparse_type).join(', ');
        const return_type = unparse_type(t.ReturnType);
        return moved_str + `fn(${params}) -> ${return_type}${borrow_str}`;
    }

    if (t instanceof UnitType) {
        return moved_str + "()";
    }

    if (t instanceof ReturnType) {
        return moved_str + `retType<${unparse_type(t.ReturnedType)}>${borrow_str}`
    }

    if (t instanceof ArrayType) {
        return moved_str + `[${unparse_type(t.BaseType)} ; size ${t.ContainedTypes.length}]${borrow_str}`
    }

    throw new Error(`[unparse_type] Unknown type of ${JSON.stringify(t)}`);
};