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

export interface TypeInfo {
    Type: string | Closure | RefType,
    Mutable?: boolean, // optional: mutability is not a type, but a property of a type.
}

export interface Closure {
    Params: TypeInfo[],
    Return: TypeInfo,
}

export interface RefType {
    Inner: TypeInfo
    Mutable: boolean // compulsory: mutable reference and immutable reference are concrete types.
}

export const isClosure = (t: unknown): t is Closure => {
    return typeof t === 'object' && t !== null && 'Params' in t && 'Return' in t;
};

export const isRefType = (t: unknown): t is RefType => {
    return typeof t === 'object' && t !== null && 'Inner' in t && 'Mutable' in t;
};

// extend the environment destructively 
export const extend_type_environment = (xs: string[], ts: TypeInfo[], e: object[]) => {
    if (ts.length > xs.length) 
        error('too few parameters in function declaration')
    if (ts.length < xs.length) 
        error('too many parameters in function declaration')

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

export const compare_type = (t1: TypeInfo, t2: TypeInfo): boolean => {
    // Compare the Type property
    if (typeof t1.Type !== typeof t2.Type) {
        return false;
    }

    if (typeof t1.Type === 'string' && typeof t2.Type === 'string') {
        return t1.Type === t2.Type;
    }

    if (isClosure(t1.Type) && isClosure(t2.Type)) {
        const c1 = t1.Type;
        const c2 = t2.Type;

        return compare_types(c1.Params, c2.Params) && compare_type(c1.Return, c2.Return);
    }

    if (isRefType(t1.Type) && isRefType(t2.Type)) {
        const r1 = t1.Type;
        const r2 = t2.Type;

        return r1.Mutable === r2.Mutable && compare_type(r1.Inner, r2.Inner);
    }

    return false;
};

export const compare_types = (ts1: TypeInfo[], ts2: TypeInfo[]): boolean => {
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

export const unparse_type = (t: TypeInfo): string => {
    // Handle primitive types (string case)
    if (typeof t.Type === 'string') {
        return t.Type;
    }

    // Handle reference type
    if (isRefType(t.Type)) {
        const ref_str = t.Type.Mutable ? "&mut " : "&";
        return `${ref_str}${unparse_type(t.Type.Inner)}`;
    }
    
    // Handle closure types
    if (isClosure(t.Type)) {
        const closure = t.Type;
        const params = closure.Params.map(unparse_type).join(', ');
        const return_type = unparse_type(closure.Return);
        return `fn(${params}) -> ${return_type}`;
    }
    
    error("Unknown type");
};