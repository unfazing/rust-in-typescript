/* *****************
 * type environments
 * *****************/

import { error } from "console"

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
export const global_type_environment: object[] = empty_type_environment

export const lookup_type = (x: string, e: object[]) => {
    for (let i = e.length - 1; i >= 0; i--) { // TODO: currently O(N). Perhaps use compile environment implementation to reduce to O(1)
        if (e[i].hasOwnProperty(x) ) {
            return e[i][x]
        }
    }
    return error("unbound name: " + x)
}

export type ScalarTypeName = "i32" | "f64" | "bool" | "char" | "UNKNOWN"
export type TypeName = "closure" | "refType" | ScalarTypeName

// Type is a class
// TypeName is a string. 
// In closures and references, the typename is automatically set to "closure"/"refType" on construction.
// In scalars, the typename is the rust type, e.g. "i32"
export abstract class Type {
    Mutable: boolean
    TypeName: TypeName
}

// t.Mutable is undefined in a ScalarType class as all scalars will be copied.
export class ScalarType extends Type {
    constructor(typeName: ScalarTypeName) {
        super()
        this.Mutable = undefined
        this.TypeName = typeName
    }
}

// t.Mutable is undefined in a ClosureType class.
export class ClosureType extends Type {
    ParamTypes: Type[]
    ReturnType: Type
    constructor(paramTypes: Type[], returnTypes: Type) {
        super()
        this.ParamTypes = paramTypes
        this.ReturnType = returnTypes
        this.TypeName = "closure"
        this.Mutable = undefined
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
    constructor(innerType: Type) {
        super()
        this.Mutable = false
        this.InnerType = innerType
    }
}

export class MutableRefType extends RefType {
    constructor(innerType: Type) {
        super()
        this.Mutable = true
        this.InnerType = innerType
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
export const extend_type_environment = (xs: string[], ts: Type[], e: object[]) => {
    if (ts.length > xs.length) 
        error('too few parameters in function declaration')
    if (ts.length < xs.length) 
        error('too many parameters in function declaration')

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
export const restore_type_environment = (e: object[]): object[] => {
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
    return t1.TypeName === t2.TypeName;
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
        const ref_str = t.Mutable ? "&mut " : "&";
        return `${ref_str}${unparse_type(t.InnerType)}`;
    }
    
    // Handle closure types
    if (t instanceof ClosureType) {
        const params = t.ParamTypes.map(unparse_type).join(', ');
        const return_type = unparse_type(t.ReturnType);
        return `fn(${params}) -> ${return_type}`;
    }
    
    error("Unknown type");
};