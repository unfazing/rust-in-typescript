
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


const chunk = `
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: String, age: u32) -> Person {
        Person { name, age }
    }

    fn greet(&self) {
        println!("Hello, my name is {} and I am {} years old.", self.name, self.age);
    }
}

fn main() {
    let person = Person::new(String::from("Alice"), 30);
    person.greet();
}
`
const inputStream = CharStream.fromString(chunk);
const lexer = new RustLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new RustParser(tokenStream);

// Parse the input
const tree = parser.crate();
console.log(tree.toStringTree(parser));
