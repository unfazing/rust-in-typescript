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
export const global_type_environment = [global_type_frame]

export const lookup_type = (x, e) => {
    for (let i = e.length - 1; i >= 0; i--) {
        if (e[i].hasOwnProperty(x) ) {
            return e[i][x]
        }
    }
    return error("unbound name: " + x)
}

export const extend_type_environment = (xs, ts, e) => {
    if (ts.length > xs.length) 
        error('too few parameters in function declaration')
    if (ts.length < xs.length) 
        error('too many parameters in function declaration')
    const new_frame = {}
    for (let i = 0; i < xs.length; i++) 
        new_frame[xs[i]] = ts[i]
    return push([...e], new_frame)
}
