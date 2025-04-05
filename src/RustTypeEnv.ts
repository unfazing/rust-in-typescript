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
const unary_arith_type =
    { tag: "fun", args: ["number"], 
      res: "number" }
    
const binary_arith_type =
    { tag: "fun", args: ["number", "number"], 
      res: "number" }

const number_comparison_type =
    { tag: "fun", args: ["number", "number"], 
      res: "bool" }

const binary_bool_type =
    { tag: "fun", args: ["bool"], 
      res: "bool" }
      
const unary_bool_type =
    { tag: "fun", args: ["bool"], 
      res: "bool" }
      
const global_type_frame = {
    "None": "undefined",
    // math_E: "number",
    // math_PI: "number",
    // math_sin: unary_arith_type,
    "+": binary_arith_type, // TODO: overload with string concat
    "-": binary_arith_type,
    "*": binary_arith_type,
    "/": binary_arith_type,
    "%": binary_arith_type,
    "&": binary_arith_type,
    "|": binary_arith_type,
    "^": binary_arith_type,
    "<": number_comparison_type,
    ">": number_comparison_type,
    "<=": number_comparison_type,
    ">=": number_comparison_type,
    "===": number_comparison_type, // TODO: to take any and return bool
    "!==": number_comparison_type, // TODO: to take any and return bool
    "&&": binary_bool_type,
    "||": binary_bool_type,
    "-unary": unary_arith_type,
    "!": unary_bool_type
}

// Type environment is a stack implemented with array 
const empty_type_environment = null
export const global_type_environment: object[] = [global_type_frame]

export const lookup_type = (x: string, e: object[]) => {
    for (let i = e.length - 1; i >= 0; i--) { // TODO: currently O(N). Perhaps use compile environment implementation to reduce to O(1)
        if (e[i].hasOwnProperty(x) ) {
            return e[i][x]
        }
    }
    return error("unbound name: " + x)
}

export interface TypeInfo {
    Type: string | Closure,
    Mutable?: boolean,
}

export interface Closure {
    Params: TypeInfo[],
    Return: TypeInfo,
}


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

    if (typeof t1.Type !== 'string' && typeof t2.Type !== 'string') {
        // Both are Closures - compare them recursively
        const c1 = t1.Type as Closure;
        const c2 = t2.Type as Closure;

        // Compare return types
        return compare_types(c1.Params, c2.Params) && compare_type(c1.Return, c2.Return);
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
    
    // Handle closure types
    const closure = t.Type;
    const params = closure.Params.map(unparse_type).join(', ');
    const return_type = unparse_type(closure.Return);
    
    return `fn(${params}) -> ${return_type}`;
};