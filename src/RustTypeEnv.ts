/* *****************
 * type environments
 * *****************/

import { print_error } from "./Utils.js"

/* **********************
 * using arrays as stacks
 * **********************/

// add values destructively to the end of
// given array; return the array
const push = (array, ...items) => {
	for (let item of items) {
		array.push(item);
	}
	return array;
};

// Type frames are JavaScript objects that map 
// symbols (strings) to types.

// Type environment is a stack implemented with array 
const empty_type_environment = [{}]
export const global_type_environment: {[key:string]: Type}[] = empty_type_environment

export const lookup_type = (x: string, e: {[key:string]: Type}[]) => {
    for (let i = e.length - 1; i >= 0; i--) { // TODO: currently O(N). Perhaps use compile environment implementation to reduce to O(1)
        if (e[i].hasOwnProperty(x) ) {
            return e[i][x]
        }
    }
    print_error("[lookup_type] Unbound name: " + x)
}

export type ScalarTypeName = "i32" | "f64" | "bool" | "char" | "UNKNOWN"
export type TypeName = "closure" | "refType" | ScalarTypeName | "undefined"

// Type is a class
// TypeName is a string. 
// In closures and references, the typename is automatically set to "closure"/"refType" on construction.
// In scalars, the typename is the rust type, e.g. "i32"
// t.Mutable is only meaningful for declared variables. e.g. let mut x: &i32; --> <ImmutableRefType>.Mutable = True
// Otherwise, t.Mutable can be 'undefined' e.g. 3; --> <ScalarType>.Mutable = undefined
export abstract class Type {
    Mutable: boolean
    TypeName: TypeName
}

export class ScalarType extends Type {
    constructor(typeName: ScalarTypeName, is_mut?: boolean) {
        super()
        this.Mutable = is_mut
        this.TypeName = typeName
    }
}

export const UndefinedType: Type = {
    TypeName: "undefined",
    Mutable: false,
};

export class ClosureType extends Type {
    ParamTypes: Type[]
    ReturnType: Type
    constructor(paramTypes: Type[], returnTypes: Type, is_mut?: boolean) {
        super()
        this.ParamTypes = paramTypes
        this.ReturnType = returnTypes
        this.TypeName = "closure"
        this.Mutable = is_mut
    }
}

export abstract class RefType extends Type {
    InnerType: Type
    constructor() {
        super()
        this.TypeName = "refType"
    }
}

export class ImmutableRefType extends RefType {
    constructor(innerType: Type, is_mut?: boolean) {
        super()
        this.InnerType = innerType
        this.Mutable = is_mut
    }
}

export class MutableRefType extends RefType {
    constructor(innerType: Type, is_mut?: boolean) {
        super()
        this.InnerType = innerType
        this.Mutable = is_mut
    }
}

// export interface TypeInfo {
//     Type: string | ClosureType | RefType,
//     Mutable?: boolean, // optional: mutability is not a type, but a property of a type.
// }

// export interface ClosureType {
//     Params: TypeInfo[],
//     Return: TypeInfo,
// }

// export interface RefType {
//     Inner: TypeInfo
//     Mutable: boolean // compulsory: mutable reference and immutable reference are concrete types.
// }

// export const isClosureType = (t: unknown): t is ClosureType => {
//     return t instanceof ClosureType
// };

// export const isRefType = (t: unknown): t is RefType => {
//     return t instanceof RefType
// };

// extend the environment destructively 
export const extend_type_environment = (xs: string[], ts: Type[], e: {[key:string]: Type}[]) => {
    if (ts.length > xs.length) 
        print_error('too few parameters in function declaration')
    if (ts.length < xs.length) 
        print_error('too many parameters in function declaration')

    if (xs.length == 0) {
        return e
    } 

    const new_frame = {}
    for (let i = 0; i < xs.length; i++) 
        new_frame[xs[i]] = ts[i]
    // return push([...e], new_frame)
    e.push(new_frame)
    return e;
}

// extend the environment destructively 
export const restore_type_environment = (e: {[key:string]: Type}[]): {[key:string]: Type}[] => {
    e.pop(); // pop the last (most recent) frame
    return e;
}

export const compare_type = (t1: Type, t2: Type): boolean => {
    // Return false if Types of t1 and t2 are different
    if (typeof t1 !== typeof t2) {
        return false;
    }

    // Compare Closures
    if (t1 instanceof ClosureType) {
        return compare_types(t1.ParamTypes, (t2 as ClosureType).ParamTypes) && compare_type(t1.ReturnType, (t2 as ClosureType).ReturnType);
    }

    // Compare References
    if (t1 instanceof RefType) {
        return compare_type(t1.InnerType, (t2 as RefType).InnerType);
    }
    // Compare Scalars
    if (t1 instanceof ScalarType) {
        return t1.TypeName === t2.TypeName;
    }

    return t1 === UndefinedType && t2 === UndefinedType;
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
    // Handle primitive types (string case)
    if (t instanceof ScalarType) {
        return t.TypeName;
    }

    // Handle reference type
    if (t instanceof RefType) {
        const ref_str = t instanceof MutableRefType ? "&mut " : "&";
        return `${ref_str}${unparse_type(t.InnerType)}`;
    }
    
    // Handle closure types
    if (t instanceof ClosureType) {
        const params = t.ParamTypes.map(unparse_type).join(', ');
        const return_type = unparse_type(t.ReturnType);
        return `fn(${params}) -> ${return_type}`;
    }

    if (t === UndefinedType) {
        return "UndefinedType"
    }
    
    if (t === undefined) {
        print_error(`[unparse_type] Cannot unparse undefined value: ${JSON.stringify(t)}`)
    }

    print_error(`[unparse_type] Unknown type of ${JSON.stringify(t)}`);
};