
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

const chunk = `
fn main() {
    // fn pass1() -> i32 {
    //     if (true) {
    //         6
    //     } else {
    //         7
    //     }
    // }

    // fn pass2() -> i32 {
    //     if (true) {
    //         6;
    //     } else {
    //         7;
    //     }
    //     return 1;
    // }

    // fn pass3() -> i32 {
    //     if (true) {
    //         return 6;
    //     } else {
    //         return 7;
    //     }
    // }

    // fn pass3_1() -> i32 {
    //     let mut x: i32 = pass3();
    //     x = pass3() + 1;
    //     x = pass3() + pass3() + x;
    //     let mut y: i32 = pass3() + pass3();
    //     y = y + x;
    //     let TEST: i32 = 100;
    //     {
    //         // y = TEST;
    //         let z: i32 = TEST;
    //     }
    //     // x = TEST;
    //     return y;
    // }

    // fn pass4() -> i32 {
    //     fn f8() -> bool {
    //         return false;
    //     }
    //     if (true) {
    //         if (true) {
    //             return 4;
    //         } else {
    //             return 5;
    //         }
    //     } else if (true) {
    //         return 6;
    //     } else {
    //         return 7;
    //     }
    //     return 111111;
    // }
    

    // fn pass5() -> i32 {
    //     let mut x: i32 = if (true) { 6 } else { 7 };
    //     return x;
    // }

    // SHOULD ERROR
    // fn fail1() -> i32 {
    //     if (true) {
    //         return 6;
    //     } else {
    //         7
    //     }
    // }

    // SHOULD ERROR
    // fn fail2() -> i32 {
    //     if (true) {
    //         6;
    //     } else {
    //         return 7;
    //     }
    //     return 1;
    // }

    // SHOULD ERROR
    // fn fail3() -> i32 {
    //     if (true) {
    //         return false;
    //     } else {
    //         return 7;
    //     }
    //     return 1;
    // }

    // SHOULD ERROR
    // fn fail4() -> i32 {
    //     if (true) {
    //         return false
    //     } else {
    //         7;
    //     }
    //     return 1;
    // }

    // SHOULD ERROR
    // fn fail5() -> i32 {
    //     let mut y: i32 = return 6;
    // }
    
    // fn pass_ref_1() -> () {
    //     let x : i32 = 42;
    //     let x_ref : &i32 = &x; // borrow
    //     let x_ref_2 : &i32 = x_ref; // move a borrow
    //     *x_ref_2; 
    // }

    // fn fail_ref_1() -> () {
    //     let x : i32 = 2;
    //     let x_ref : &i32 = &x;
    //     let x_ref_2 : &i32 = x_ref;
    //     *x_ref; // cannot deref a moved var
    // }

    fn pass_deref_assign() {
        let mut x: i32 = 42;
        let x_ref: &mut i32 = &mut x;
        *x_ref = 69;
        ((*x_ref)) = 69;
    }

    fn fail_deref_assign() {
        let mut x: i32 = 42;
        let x_ref: &i32 = &x;
        *x_ref = 69;
        ((*x_ref)) = 69;
    }
}
`

const conditionals_test = `
fn main() {

    if (true) {
        1;
    } // no else branch

    fn validate(x: i32) -> bool {
        return x >= 2;
    }

    const x : i32 = 5;
    if (x < 2) { // comparisonExpression
        return x;
    } else if (validate(x)) { // functionCall + another if expression after else
        return x;
    } else {
        return x;
    }
}
`

const while_test = `
fn main() {
    let mut x : i32 = 0;
    while x < 5 {
        x = x + 1;
    }
}
`

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
            console.log(`✅ Test Pass: ${code}\n`);
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
`, "", true); // enable log for this specific test case

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
let x : i32 = 2;
let x_ref : &i32 = &x;
let x_ref_2 : &i32 = x_ref;
*x_ref;
}
`, "Type error in pathExpression; use of a moved value: x_ref");

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
`, "Cannot find symbol")

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

const compiler_code = `
fn main() {
    // const TEST_CONST: i32 = 1;
    // let mut test_mut_let: i32 = 2;
    // fn test_closure(p1: i32, p2: i32) {
    //     const FILLER: i32 = 11;
    //     return 3;
    // }
    // test_mut_let = test_mut_let + 6;
    // test_closure(4, 5);

    // let mut x : i32 = 0;
    // while x < 5 {
    //     x = x + 1;
    // }

    // if (true) {
    //     1;
    // } // no else branch

    // fn validate(z: i32) -> bool {
    //     return z >= 2;
    // }

    // const y : i32 = 5;
    // if (y < 2) { // comparisonExpression
    //     return y;
    // } else if (validate(y)) { // functionCall + another if expression after else
    //     return y;
    // } else {
    //     return y;
    // }

    let x : i32 = 42;
    let mut y : bool = true;
}
`

test_compiler(compiler_code)

const test_VM = (code: string) => {
    const inputStream = CharStream.fromString(code);
    const lexer = new RustLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new RustParser(tokenStream);

    // Parse the input
    const tree = parser.crate();

    const compiler = new RustCompiler();
    const instructions = compiler.compile(tree);

    // const VM = new RustVirtualMachine();
    // const result = VM.execute(instructions);

    // console.log(result);
}

// const VM_code = `
// fn funk() -> i32 {
//     let x : i32 = 42;
//     let x_ref : &i32 = &x;
//     return *x_ref + 1; // 43
// }

// funk();
// `

// test_VM(VM_code);







/*
function main() {
    const TEST_CONST = 1;
    let test_mut_let = 2;
    function test_closure(p1, p2) {
        const filler = 11;
        return 3;
    }
    test_mut_let = test_mut_let + 6;
    test_closure(4, 5);

    let x = 0;
    while (x < 5) {
        x = x + 1;
    }

    if (true) {
        1;
    }

    function validate(z) {
        return z >= 2;
    }

    const y = 5;
    if (y < 2) { // comparisonExpression
        return y;
    } else if (validate(y)) { // functionCall + another if expression after else
        return y;
    } else {
        return y;
    }
}


0: ENTER_SCOPE 1 ""
1: LDF  ""
2: GOTO 86 ""
3: ENTER_SCOPE 6 ""
4: LDC 1 ""
5: ASSIGN [3, 0] ""
6: POP  ""
7: LDC 2 ""
8: ASSIGN [3, 1] ""
9: POP  ""
10: LDF  ""
11: GOTO 21 ""
12: ENTER_SCOPE 1 ""
13: LDC 11 ""
14: ASSIGN [5, 0] ""
15: POP  ""
16: LDC 3 ""
17: RESET  ""
18: EXIT_SCOPE  ""
19: LDC undefined ""
20: RESET  ""
21: ASSIGN [3, 2] ""
22: POP  ""
23: LD [3, 1] ""
24: LDC 6 ""
25: BINOP "+" ""
26: ASSIGN [3, 1] ""
27: POP  ""
28: LD [3, 2] ""
29: LDC 4 ""
30: LDC 5 ""
31: CALL  ""
32: POP  ""
33: LDC 0 ""
34: ASSIGN [3, 3] ""
35: POP  ""
36: LD [3, 3] ""
37: LDC 5 ""
38: BINOP "<" ""
39: JOF  ""
enter
40: LD [3, 3] ""
41: LDC 1 ""
42: BINOP "+" ""
43: ASSIGN [3, 3] ""
exit
44: POP  ""
45: GOTO 36 ""
46: LDC undefined ""
47: POP  ""
48: LDC true ""
49: JOF  ""
ENTER
50: LDC 1 ""
EXIT 54
51: GOTO 53 ""
52: LDC undefined ""
53: POP  ""



54: LDF  ""
55: GOTO 62 ""
ENTER
56: LD [4, 0] ""
57: LDC 2 ""
58: BINOP ">=" ""
59: RESET  ""
EXIT
60: LDC undefined ""
61: RESET  ""
62: ASSIGN [3, 4] ""
63: POP  ""
64: LDC 5 ""
65: ASSIGN [3, 5] ""
66: POP  ""
67: LD [3, 5] ""
68: LDC 2 ""
69: BINOP "<" ""
70: JOF  ""
ENTER
71: LD [3, 5] ""
72: RESET  ""
EXIT
73: GOTO 83 ""
74: LD [3, 4] ""
75: LD [3, 5] ""
76: CALL  ""
77: JOF  ""
ENTER
78: LD [3, 5] ""
79: RESET  ""
EXIT
80: GOTO 83 ""
ENTER
81: LD [3, 5] ""
82: RESET  ""
Exit
83: EXIT_SCOPE  ""
84: LDC undefined ""
85: RESET  ""
86: ASSIGN [1, 0] ""
87: EXIT_SCOPE  ""
88: DONE  ""

{ "tag": "blk",
  "body":
  { "tag": "fun",
    "sym": "main",
    "prms": [],
    "body":
    { "tag": "blk",
      "body":
      { "tag": "seq",
        "stmts":
        [ {"tag": "const", "sym": "TEST_CONST", "expr": {"tag": "lit", "val": 1}},
          {"tag": "let", "sym": "test_mut_let", "expr": {"tag": "lit", "val": 2}},
          {"tag": "fun", "sym": "test_closure", "prms": ["p1", "p2"], "body": {"tag": "blk", "body": {"tag": "seq", "stmts": [{"tag": "const", "sym": "filler", "expr": {"tag": "lit", "val": 11}}, {"tag": "ret", "expr": {"tag": "lit", "val": 3}}]}}},
          {"tag": "assmt", "sym": "test_mut_let", "expr": {"tag": "binop", "sym": "+", "frst": {"tag": "nam", "sym": "test_mut_let"}, "scnd": {"tag": "lit", "val": 6}}},
          {"tag": "app", "fun": {"tag": "nam", "sym": "test_closure"}, "args": [{"tag": "lit", "val": 4}, {"tag": "lit", "val": 5}]},
          {"tag": "let", "sym": "x", "expr": {"tag": "lit", "val": 0}},
          {"tag": "while", "pred": {"tag": "binop", "sym": "<", "frst": {"tag": "nam", "sym": "x"}, "scnd": {"tag": "lit", "val": 5}}, "body": {"tag": "assmt", "sym": "x", "expr": {"tag": "binop", "sym": "+", "frst": {"tag": "nam", "sym": "x"}, "scnd": {"tag": "lit", "val": 1}}}},
          {"tag": "cond", "pred": {"tag": "lit", "val": true}, "cons": {"tag": "lit", "val": 1}, "alt": {"tag": "seq", "stmts": []}},
          {"tag": "fun", "sym": "validate", "prms": ["z"], "body": {"tag": "ret", "expr": {"tag": "binop", "sym": ">=", "frst": {"tag": "nam", "sym": "z"}, "scnd": {"tag": "lit", "val": 2}}}},
          {"tag": "const", "sym": "y", "expr": {"tag": "lit", "val": 5}},
          {"tag": "cond", "pred": {"tag": "binop", "sym": "<", "frst": {"tag": "nam", "sym": "y"}, "scnd": {"tag": "lit", "val": 2}}, "cons": {"tag": "ret", "expr": {"tag": "nam", "sym": "y"}}, "alt": {"tag": "cond", "pred": {"tag": "app", "fun": {"tag": "nam", "sym": "validate"}, "args": [{"tag": "nam", "sym": "y"}]}, "cons": {"tag": "ret", "expr": {"tag": "nam", "sym": "y"}}, "alt": {"tag": "ret", "expr": {"tag": "nam", "sym": "y"}}}}]}}}}

fn main() {
    const TEST_CONST: i32 = 1;
    let mut test_mut_let: i32 = 2;
    fn test_closure(p1: i32, p2: i32) {
        const FILLER: i32 = 11;
        return 3;
    }
    test_mut_let = test_mut_let + 6;
    test_closure(4, 5);

    let mut x : i32 = 0;
    while x < 5 {
        x = x + 1;
    }

    if (true) {
        1;
    } // no else branch

    fn validate(z: i32) -> bool {
        return z >= 2;
    }

    const y : i32 = 5;
    if (y < 2) { // comparisonExpression
        return y;
    } else if (validate(y)) { // functionCall + another if expression after else
        return y;
    } else {
        return y;
    }
}


0: {"tag":"ENTER_SCOPE","num":1}
1: {"tag":"LDF","arity":0,"addr":3}
2: {"tag":"GOTO","addr":96}
3: {"tag":"ENTER_SCOPE","num":6}
4: {"tag":"LDC","val":"1"}
5: {"tag":"ASSIGN","pos":[3,0]}
6: {"tag":"POP"}
7: {"tag":"LDC","val":"2"}
8: {"tag":"MUT_ASSIGN","pos":[3,1]}
9: {"tag":"POP"}
10: {"tag":"LDF","arity":2,"addr":12}
11: {"tag":"GOTO","addr":21}
12: {"tag":"ENTER_SCOPE","num":1}
13: {"tag":"LDC","val":"11"}
14: {"tag":"ASSIGN","pos":[5,0]}
15: {"tag":"POP"}
16: {"tag":"LDC","val":"3"}
17: {"tag":"RESET"}
18: {"tag":"EXIT_SCOPE"}
19: {"tag":"LDC"}
20: {"tag":"RESET"}
21: {"tag":"ASSIGN","pos":[3,2]}
22: {"tag":"POP"}
23: {"tag":"LD","sym":"test_mut_let","pos":[3,1]}
24: {"tag":"LDC","val":"6"}
25: {"tag":"BINOP","sym":"+"}
26: {"tag":"ASSIGN","pos":[3,1]}
27: {"tag":"POP"}
28: {"tag":"LD","sym":"test_closure","pos":[3,2]}
29: {"tag":"LDC","val":"4"}
30: {"tag":"LDC","val":"5"}
31: {"tag":"CALL","arity":2}
32: {"tag":"POP"}
33: {"tag":"LDC","val":"0"}
34: {"tag":"MUT_ASSIGN","pos":[3,3]}
35: {"tag":"POP"}
36: {"tag":"LD","sym":"x","pos":[3,3]}
37: {"tag":"LDC","val":"5"}
38: {"tag":"BINOP","sym":"<"}
39: {"tag":"JOF","addr":48}
40: {"tag":"ENTER_SCOPE","num":0} <<<
41: {"tag":"LD","sym":"x","pos":[3,3]}
42: {"tag":"LDC","val":"1"}
43: {"tag":"BINOP","sym":"+"}
44: {"tag":"ASSIGN","pos":[3,3]}
45: {"tag":"EXIT_SCOPE"} <<<
46: {"tag":"POP"}
47: {"tag":"GOTO","addr":36}
48: {"tag":"LDC"}
49: {"tag":"POP"}
50: {"tag":"LDC","val":"true"}
51: {"tag":"JOF","addr":55}
52: {"tag":"ENTER_SCOPE","num":0} <<<
53: {"tag":"LDC","val":"1"}
54: {"tag":"EXIT_SCOPE"} <<<
55: {"tag":"POP"} <<<



56: {"tag":"LDF","arity":1,"addr":58}
57: {"tag":"GOTO","addr":66}
58: {"tag":"ENTER_SCOPE","num":0}
59: {"tag":"LD","sym":"z","pos":[8,0]}
60: {"tag":"LDC","val":"2"}
61: {"tag":"BINOP","sym":">="}
62: {"tag":"RESET"}
63: {"tag":"EXIT_SCOPE"}
64: {"tag":"LDC"}
65: {"tag":"RESET"}
66: {"tag":"ASSIGN","pos":[3,4]}
67: {"tag":"POP"}
68: {"tag":"LDC","val":"5"}
69: {"tag":"ASSIGN","pos":[3,5]}
70: {"tag":"POP"}
71: {"tag":"LD","sym":"y","pos":[3,5]}
72: {"tag":"LDC","val":"2"}
73: {"tag":"BINOP","sym":"<"}
74: {"tag":"JOF","addr":80}
75: {"tag":"ENTER_SCOPE","num":0}
76: {"tag":"LD","sym":"y","pos":[3,5]}
77: {"tag":"RESET"}
78: {"tag":"EXIT_SCOPE"}
79: {"tag":"GOTO","addr":93}
80: {"tag":"LD","sym":"validate","pos":[3,4]}
81: {"tag":"LD","sym":"y","pos":[3,5]}
82: {"tag":"CALL","arity":1}
83: {"tag":"JOF","addr":89}
84: {"tag":"ENTER_SCOPE","num":0}
85: {"tag":"LD","sym":"y","pos":[3,5]}
86: {"tag":"RESET"}
87: {"tag":"EXIT_SCOPE"}
88: {"tag":"GOTO","addr":93}
89: {"tag":"ENTER_SCOPE","num":0}
90: {"tag":"LD","sym":"y","pos":[3,5]}
91: {"tag":"RESET"}
92: {"tag":"EXIT_SCOPE"}
93: {"tag":"EXIT_SCOPE"}
94: {"tag":"LDC"}
95: {"tag":"RESET"}
96: {"tag":"ASSIGN","pos":[1,0]}
97: {"tag":"EXIT_SCOPE"}
98: {"tag":"DONE"}
*/