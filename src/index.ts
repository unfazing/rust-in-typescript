
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
import { RustEvaluatorVisitor } from './RustEvaluatorVisitor.js'
import { RustCompiler } from './RustCompiler.js';


const chunk = `
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

const inputStream = CharStream.fromString(chunk);
const lexer = new RustLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new RustParser(tokenStream);

// Parse the input
const tree = parser.crate();
console.log(tree.toStringTree(parser));

// Typechecker

// Compile
const compiler = new RustCompiler();
const instructions = compiler.compile(tree);

// console.log(instructions);

function printInstructions(instrs: object[]): undefined {
    const formattedInstructions = instrs
        .map((obj, index) => `${index}: ${JSON.stringify(obj)}`)
        .join("\n");

    console.log("Printing instructions:");
    console.log(formattedInstructions);
}

printInstructions(instructions);

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
}
0: ENTER_SCOPE 1 ""
1: LDF  ""
2: GOTO 35 ""
3: ENTER_SCOPE 3 ""
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
32: EXIT_SCOPE  ""
33: LDC undefined ""
34: RESET  ""
35: ASSIGN [1, 0] ""
36: EXIT_SCOPE  ""
37: DONE  ""

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
          {"tag": "app", "fun": {"tag": "nam", "sym": "test_closure"}, "args": [{"tag": "lit", "val": 4}, {"tag": "lit", "val": 5}]}]}}}}

fn main() {
    const TEST_CONST: i32 = 1;
    let mut test_mut_let: i32 = 2;
    fn test_closure(p1: i32, p2: i32) {
        const FILLER: i32 = 11;
        return 3;
    }
    test_mut_let = test_mut_let + 6;
    test_closure(4, 5);
}
0: {"tag":"ENTER_SCOPE","num":1}
1: {"tag":"LDF","arity":0,"addr":3}
2: {"tag":"GOTO","addr":35}
3: {"tag":"ENTER_SCOPE","num":3}
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
32: {"tag":"EXIT_SCOPE"}
33: {"tag":"LDC"}
34: {"tag":"RESET"}
35: {"tag":"ASSIGN","pos":[1,0]}
36: {"tag":"EXIT_SCOPE"}
37: {"tag":"DONE"}
*/