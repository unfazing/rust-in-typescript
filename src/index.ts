/*
Original Code:

import { initialise } from "conductor/dist/conductor/runner/util/";
const {runnerPlugin, conduit} = initialise(SimpleLangEvaluator);
*/

/*
import { CharStream, CommonTokenStream } from 'antlr4ng';
import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
import { SimpleLangParser } from './parser/src/SimpleLangParser';
// import { SimpleLangEvaluatorVisitor } from './SimpleLangEvaluator'


console.log("TEST")
const chunk = "1 + 2"
const inputStream = CharStream.fromString(chunk);
const lexer = new SimpleLangLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new SimpleLangParser(tokenStream);

// Parse the input
const tree = parser.prog();
console.log(tree.toStringTree(parser));

Evaluate the parsed tree
const visitor = new SimpleLangEvaluatorVisitor();
const result = visitor.visit(tree);
console.log(result)
*/


import { CharStream, CommonTokenStream } from 'antlr4ng';
import { RustLexer } from './parser/src/RustLexer.js';
import { RustParser } from './parser/src/RustParser.js';
import { RustCompiler } from './CompilerRust.js';
import { RustTypeChecker } from './TypeCheckerRust.js';
import { RustVirtualMachine } from './VirtualMachineRust.js';

export let LOGGING_ENABLED = false;
const test_typechecker = (code: string, expected_error: string, enable_log?: boolean) => {

    if (enable_log) {
        LOGGING_ENABLED = true;
        console.log(`Enable logging for test case: ${code}`)

        console.log(`Start of log....`)

        const inputStream = CharStream.fromString(code);
        const lexer = new RustLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new RustParser(tokenStream);

        // Parse the input
        const tree = parser.crate();
        
        // Typechecker
        const typeChecker = new RustTypeChecker();
        typeChecker.check(tree);

        console.log(`...End of log.\n\n`)

        LOGGING_ENABLED = false;
        return; // terminate 
    }

    try {
        const inputStream = CharStream.fromString(code);
        const lexer = new RustLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new RustParser(tokenStream);

        // Parse the input
        const tree = parser.crate();
        
        // Typechecker
        const typeChecker = new RustTypeChecker();
        typeChecker.check(tree);

        // If we get here and expected_error is empty, test passes
        if (expected_error === "") {
            console.log(`✅ Test Pass: ${code}`);
        } else {
            console.error(`❌ Test Fail: ${code}\nExpected error: "${expected_error}"\nBut no error was thrown\n`);
        }

    } catch (error) {
        // If we catch an error but expected no error, test fails
        if (expected_error === "") {
            console.error(`❌ Test Fail: ${code}\nExpected no errors, but got:\n${error.message}\n`);
        } else if (error.message.includes(expected_error)) {
            // If we catch an error and it matches expected error, test passes
            console.log(`✅ Test Pass: ${code}`);
        } else {
            // If we catch an error but it doesn't match expected error, test fails
            console.error(`❌ Test Fail: ${code}\nExpected error: "${expected_error}"\nActual error: "${error.message}\n"`);
        }
    } 
};


// Test cases for functions that should pass type checking
test_typechecker(`
fn pass1() -> i32 {
    if (true) {
        6
    } else {
        7
    }
}
`, "")

test_typechecker(`
fn pass2() -> i32 {
    if (true) {
        6;
    } else {
        7;
    }
    return 1;
}
`, "");

test_typechecker(`
fn pass3() -> i32 {
    if (true) {
        return 6;
    } else {
        return 7;
    }
}

fn pass3_1() -> i32 {
    let mut x: i32 = pass3();
    x = pass3() + 1;
    x = pass3() + pass3() + x;
    let mut y: i32 = pass3() + pass3();
    y = y + x;
    let TEST: i32 = 100;
    {
        let z: i32 = TEST;
    }
    return y;
}
`, "");

test_typechecker(`
fn pass4() -> i32 {
    fn f8() -> bool {
        return false;
    }
    if (true) {
        if (true) {
            return 4;
        } else {
            return 5;
        }
    } else if (true) {
        return 6;
    } else {
        return 7;
    }
    return 111111;
}
`, "");

test_typechecker(`
fn pass5() -> i32 {
    let mut x: i32 = if (true) { 6 } else { 7 };
    return x;
}
`, "");

test_typechecker(`
fn pass6() -> i32 {
    let mut y: i32 = return 6; // allow due to early termination
}
`, "");

test_typechecker(`
fn pass_ref_1() -> () {
    let x : i32 = 42;
    let x_ref : &i32 = &x;
    let x_ref_2 : &i32 = x_ref;
    *x_ref_2; 
}
`, "");

test_typechecker(`
fn pass_deref_assign() {
    let mut x: i32 = 42;
    let x_ref: &mut i32 = &mut x;
    *x_ref = 69;
    ((*x_ref)) = 69;
}
`, "");

// Test cases for functions that should fail type checking
test_typechecker(`
fn fail1() -> i32 {
    if (true) {
        return 6;
    } else {
        7
    }
}
`, "Type error; Types of branches not matching; consequent type: retType<i32>, alternative type: i32");

// Mismatched branch types (unit vs return)
test_typechecker(`
fn fail2() -> i32 {
    if (true) {
        6;
    } else {
        return 7;
    }
    return 1;
}
`, "Type error; Types of branches not matching; consequent type: (), alternative type: retType<i32>");

// Return type mismatch (bool vs i32)
test_typechecker(`
fn fail3() -> i32 {
    if (true) {
        return false;
    } else {
        return 7;
    }
    return 1;
}
`, "Type error in return statement; expected type: i32, actual type: bool");

// Return type mismatch with implicit unit
test_typechecker(`
fn fail4() -> i32 {
    if (true) {
        return false
    } else {
        7;
    }
    return 1;
}
`, "Type error in return statement; expected type: i32, actual type: bool");

// Use of moved reference
test_typechecker(`
fn fail_ref_1() -> () {
    let mut x : string = "2";
    let x_ref : &mut string = &mut x;
    let x_ref_2 : &mut string = x_ref;
    *x_ref;
}
`, "Type error in pathExpression; use of a moved value: x_ref");

// Immutable reference is not moved
test_typechecker(`
    fn pass_ref_1() -> () {
        let x : string = "2";
        let x_ref : & string = & x;
        let x_ref_2 : & string = x_ref;
        *x_ref;
    }
    `, "");

// Assignment to immutable reference
test_typechecker(`
fn fail_deref_assign() {
    let mut x: i32 = 42;
    let x_ref: &i32 = &x;
    *x_ref = 69;
    ((*x_ref)) = 69;
}
`, "Type error in assignment; cannot assign to a dereference of an immutable reference");


test_typechecker(`
fn fail_lookup_scope() {
    let x: i32 = 42;

    fn funky() -> i32 {
        return x; // cannot access dynamic variable outside of fn scope
    }

    funky();
}
`, "Type error in pathExpression; [lookup_type] Variable x is from an outer scope.")

test_typechecker(`
fn pass_lookup_scope() {
    let x: i32 = 42;

    fn filthy() {}

    fn funky() {
        filthy(); // can access function names outside of scope
    }

    funky();
}
`, "")

test_typechecker(`
fn pass_create_borrow_using_deref() {
    let x: i32 = 42;
    let x_ref: &i32 = &x;
    let x_ref_2: &i32 = &(*x_ref); 
}
`, "")

test_typechecker(`
fn pass_create_immutable_borrow_to_temp_var() {
    let x_ref: &i32 = &42;
    let x_ref_2: &i32 = &(*x_ref); // allowed in Rust
}
`, "")

test_typechecker(`
fn fail_create_mutable_borrow_to_temp_var() {
    let x_ref: &i32 = &42;
    let x_ref_2: &mut i32 = &mut (*x_ref); // another immutable borrow alr exists, throw error

    // mfking Rust allows this due to some reborrowing bs (https://haibane-tenshi.github.io/rust-reborrowing/)
}
`, "cannot create a mutable borrow because owner already has an immutable borrow") 

test_typechecker(`
fn pass_deref_then_assign_to_temp_var() {
    let x_ref: &mut i32 = &mut 42; // notice temp 42 is not mutable
    *x_ref = 69;
}
`, "") 


test_typechecker(`
fn pass_compare_i32() {
    let x: i32 = 2; 
    let y: i32 = 1;
    x < y;
}
`, "") 

test_typechecker(`
fn pass_compare_i32_with_f64() {
    let x: i32 = 2; 
    let y: f64 = 1.5;
    (x > y) || (y < x);
}
`, "") 

test_typechecker(`
fn pass_compare_i32_with_f64_raw() {
    let x: i32 = 2; 
    x <= 9.99;
}
`, "") 

test_typechecker(`
fn fail_compare_i32_with_bool_or_char() {
    let x: i32 = 2; 
    x < true && x >= 'a';
}
`, "Type error in comparison expression") 


test_typechecker(`
    fn pass_nested_borrows() {
        let mut x: string = "123";
        {
            {
                let x_ref_1: &mut string = &mut x;
            }
            let x_ref_2: &mut string = &mut x;
        }
        let x_ref_3: &mut string = &mut x;
    }
    `, "") 

test_typechecker(`
    fn pass_function_ref_param() {
        fn test(a: &mut string) -> &mut string {
            return a;
        }        
    }
    `, "") 


test_typechecker(`
    fn fail_fn_no_return_ref() {
        fn test(a: &mut string) -> &mut string {
            let new_ref: &mut string = &mut"123";
            return new_ref;
        }
    }
    `, "Type error in function declaration; Function returns a locally declared reference.") 


test_typechecker(`
    fn fail_fn_too_many_ref_param() {
        fn test(a: &mut string, b: &mut string) -> &mut string {
            return a;
        }
    }
    `, "Type error in ClosureType construction; Function parameter can only have one reference type as lifetime annotation not supplied/supported.") 

test_typechecker(`
    fn pass_ref_inner_type_consistent() {
        fn test(a: &mut string) {
            return;
        }        
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        test(x_ref); // move x_ref into function
        let mut x_ref_2: &mut string = &mut x; // allowed to create new &mut x
    }
    `, "")


test_typechecker(`
    fn fail_ref_inner_type_consistent() {
        fn test(a: &mut string) -> &mut string {
            return a;
        }        
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        test(x_ref); // returns x_ref, so x considered to still have existing mutableborrow
        let mut x_ref_2: &mut string = &mut x; 
    }
    `, "Type error in pathExpression; use (read/write) of a mutably borrowed value")
        

test_typechecker(`
    fn fail_move_ref_in_fn_reassign() {
        fn test(a: &mut string) -> &mut string {
            return a;
        }        
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        x_ref = test(x_ref); // cannot assign to moved value
    }
    `, "Type error in let statement; Cannot assign to a moved value.")

test_typechecker(`
    fn fail_move_ref_in_fn() {
        fn test(a: &mut string) -> &mut string {
            return a;
        }        
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        test(x_ref); // move x_ref
        x_ref = &mut "test"; // use moved value
    }
    `, "Type error in pathExpression; use of a moved value")


test_typechecker(`
    fn pass_no_move_immutable_ref() {
        fn test(a: & string) -> & string {
            return a;
        }        
        let x: string = "123";
        let x_ref: & string = & x;
        test(x_ref); // no move x_ref since immutable ref
        test(x_ref);
    }
    `, "")

test_typechecker(`
    fn pass_higher_order_fn() {
        fn apply_function(func: fn(i32) -> i32, value: i32) -> i32 {
            func(value) + value
        }

        fn double(x: i32) -> i32 {
            x * 2
        }
        let result: i32 = apply_function(double, 5);
    }
    `, "")

test_typechecker(`
    fn pass_higher_order_fn_with_refs() {
        fn apply_function(func: fn(& i32) -> i32, value: & i32) -> i32 {
            func(value) + *value
        }

        fn double(x: &i32) -> i32 {
            *x * 2
        }
        let result: i32 = apply_function(double, &5);
    }
    `, "")

test_typechecker(`
    fn fail_closure_check_bare_fn() {
        // function cant take in more than one ref if return ref
        fn apply_function(func: fn(&i32, &i32) -> &i32) {}
    }
    `, "Type error in ClosureType construction; Function parameter can only have one reference type as lifetime annotation not supplied/supported.")

test_typechecker(`
    fn fail_closure_check_ret_type_bare_fn() {
        fn apply_function(func: fn(&i32) -> &mut i32) {}
    }
    `, "Type error in ClosureType construction; Returned ref must have same type as argument ref.")


test_typechecker(`
    fn fail_lookup_unbound_var() {
        abc = 10;
    }
    `, "Type error in pathExpression; [lookup_type] Unbound variable abc.")

test_typechecker(`
    fn fail_deref_non_ref_type() {
        let x: i32 = 123;
        *x;
    }
    `, "Type error; dereferencing a non-reference type: i32")
        
    

const test_compiler = (code: string) => {
    const inputStream = CharStream.fromString(code);
    const lexer = new RustLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new RustParser(tokenStream);

    // Parse the input
    const tree = parser.crate();

    const compiler = new RustCompiler();
    const instructions = compiler.compile(tree);
    printInstructions(instructions);
}

// Helper function to print out the instructions
function printInstructions(instrs: object[]): undefined {
    const formattedInstructions = instrs
        .map((obj, index) => `${index}: ${JSON.stringify(obj)}`)
        .join("\n");

    console.log("Printing instructions:");
    console.log(formattedInstructions);
}

// test_compiler(`
//     fn main() -> i32 {
//         let mut x = 0;
//         x = 1;
//         while x < 2 {
//             1;
//             x = x + 1;
//         }
//         x
//     }`)

const test_VM = (code: string, expectedResult: any, testName?: string) => {
    console.log(`\n=== Running Test: ${testName || 'Unnamed Test'} ===`);
    console.log(`Code: ${code}`);
    
    try {
        const inputStream = CharStream.fromString(code);
        const lexer = new RustLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new RustParser(tokenStream);

        // Parse the input
        const tree = parser.crate();

        const compiler = new RustCompiler();
        const instructions = compiler.compile(tree);
        // printInstructions(instructions);
    
        const VM = new RustVirtualMachine();
        const actualResult = VM.execute(instructions);
        
        console.log(`Expected: ${expectedResult}, Actual: ${actualResult}`);
        
        if (actualResult === expectedResult) {
            console.log("✅ Test Passed");
            return true;
        } else {
            console.log("❌ Test Failed - Result mismatch");
            throw new Error(`Expected ${expectedResult} but got ${actualResult}`);
        }
    } catch (error) {
        console.log(`❌ Test Failed - ${error.message}`);
        console.log(error.stack); // Include stack trace for debugging
        return false;
    }
};

// Basic expressions
test_VM("fn main() -> i32 { 1 }", 1);
test_VM("fn main() -> i32 { 2 + 3 }", 5);
test_VM("fn main() -> i32 { 1; 2; 3 }", 3);
test_VM("fn main() -> i32 { if false { 2 } else { 3 } }", 3);
test_VM("fn main() -> i32 { 8 + 34; if true { 1 + 2 } else { 17 } }", 3);

// Blocks and variables
test_VM(
    `
    fn main() -> i32 {
        let y = 4; 
        {
            let x = y + 7; 
            x * 2
        }
    }
    `, 22,
);

// Functions
test_VM(
    `
    fn f() -> i32 { 1 }
    fn main() -> i32 { f() }
    `, 1,
);

test_VM(
    `
    fn f(x: i32) -> i32 { x }
    fn main() -> i32 { f(33) }`,
    33,
);

test_VM(
    `
    fn f(x: i32, y: i32) -> i32 { x - y }
    fn main() -> i32 { f(33, 22) }`,
    11,
);

// Recursive functions
test_VM(
    `
    fn fact(n: i32) -> i32 {
        if n == 1 { 1 } else { n * fact(n - 1) }
    }
    fn main() -> i32 { fact(10) }`,
    3628800,
);

test_VM(
    `
    fn fact(n: i32) -> i32 { fact_iter(n, 1, 1) }
    fn fact_iter(n: i32, i: i32, acc: i32) -> i32 {
        if i > n {
            acc
        } else {
            fact_iter(n, i + 1, acc * i)
        }
    }
    fn main() -> i32 { fact(4) }`,
    24,
);

// Loops
test_VM(
    `
    fn main() -> () {
        while false { 1; }
    }`,
    undefined,
);

test_VM(
    `
    fn main() -> i32 {
        let mut x = 0;
        x = 1;
        while x < 2 {
            1;
            x = x + 1;
        }
        x
    }`,
    2,
);

test_VM(
    `
    fn main() -> i32 {
        let mut x = 0;
        while x < 10 {
            x = x + 1;
        }
        x
    }`,
    10, "Max depth??"
);

test_VM(
    `
    fn main() -> i32 {
        let mut x = 0;
        let mut i = 0;
        while i < 100 {
            let mut j = 0;
            while j < 100 {
                x = x + i + j;
                j = j + 1;
            }
            i = i + 1;
        }
        x
    }`,
    990000,
);

test_VM(
    `
    fn main() -> i32 {
        let mut x = 0;
        let mut i = 0;
        while i < 1000 {
            let y = 1;
            i = i + 1;
        }
        i
    }`,
    1000,
);

