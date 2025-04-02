
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
    if (x < 2) { // comparisionExpression
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

const visitor = new RustEvaluatorVisitor();
const instrs : object[] = visitor.visit(tree);

console.log(`The result of evaluating code is: ${instrs.map(obj => JSON.stringify(obj)).join("\n ")}`);

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

{"tag":"ENTER_SCOPE","num":1}
 {"tag":"LDF","arity":0,"addr":3}
 {"tag":"GOTO","addr":30}
 {"tag":"ENTER_SCOPE","num":3}
 {"tag":"LDC","val":"1"}
 {"tag":"ASSIGN","pos":[3,0]}
 POP
 {"tag":"LDC","val":"2"}
 {"tag":"MUT_ASSIGN","pos":[3,1]}
 POP
 {"tag":"LDF","arity":2,"addr":10}
 {"tag":"GOTO","addr":18}
 {"tag":"ENTER_SCOPE","num":1}
 {"tag":"LDC","val":"11"}
 {"tag":"ASSIGN","pos":[5,0]}
 POP
 {"tag":"LDC","val":"3"}
 {"tag":"RESET"}
 {"tag":"EXIT_SCOPE"}
 {"tag":"LDC"}
 {"tag":"RESET"}
 {"tag":"ASSIGN","pos":[3,2]}
 POP
 {"tag":"LD","sym":"test_mut_let","pos":[3,1]}
 {"tag":"LDC","val":"6"}
 {"tag":"BINOP","sym":"+"}
 {"tag":"ASSIGN","pos":[3,1]}
 POP
 {"tag":"LD","sym":"test_closure","pos":[3,2]}
 {"tag":"LDC","val":"4"}
 {"tag":"LDC","val":"5"}
 {"tag":"CALL","arity":2}
 {"tag":"EXIT_SCOPE"}
 {"tag":"LDC"}
 {"tag":"RESET"}
 {"tag":"ASSIGN","pos":[1,0]}
 {"tag":"EXIT_SCOPE"}
 {"tag":"DONE"}

*/