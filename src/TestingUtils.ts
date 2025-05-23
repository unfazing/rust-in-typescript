import { CharStream, CommonTokenStream } from 'antlr4ng';
import { RustLexer } from './parser/src/RustLexer.js';
import { RustParser } from './parser/src/RustParser.js';
import { RustCompiler } from './CompilerRust.js';
import { RustTypeChecker, VisualisationPoints } from './TypeCheckerRust.js';
import { RustVirtualMachine } from './VirtualMachineRust.js';

export let LOGGING_ENABLED = false;
export const test_typechecker = (code: string, expected_error: string, testName?: string, enable_log?: boolean, vis_points?: VisualisationPoints) => {
    if (vis_points === undefined) {
        vis_points = VisualisationPoints.NONE
    }
    
    console.log(`\n=== Running Test: ${testName || 'Unnamed Test'} ===`);
    console.log(`Code: ${code}`);
    if (enable_log) {
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
        typeChecker.check(tree, enable_log);
        console.log(typeChecker.getVisualisation(vis_points))

        console.log(`...End of log.\n\n`)

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
        typeChecker.check(tree, false);
        console.log(typeChecker.getVisualisation(vis_points))

        // If we get here and expected_error is empty, test passes
        if (expected_error === "") {
            console.log(`✅ Test Pass. No error thrown.`);
        } else {
            console.error(`❌ Test Fail: \nExpected error: "${expected_error}"\nBut no error was thrown\n`);
        }

    } catch (error) {
        // If we catch an error but expected no error, test fails
        if (expected_error === "") {
            console.error(`❌ Test Fail: \nExpected no errors, but got:\n${error.message}\n`);
        } else if (error.message.includes(expected_error)) {
            // If we catch an error and it matches expected error, test passes
            console.log(`✅ Test Pass. Error thrown matches expected: \n${error.message}`);
        } else {
            // If we catch an error but it doesn't match expected error, test fails
            console.error(`❌ Test Fail: \nExpected error: "${expected_error}"\nActual error: "${error.message}\n"`);
        }
    } 
};


export const test_compiler = (code: string) => {
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

export const test_VM = (code: string, expectedResult: any, testName?: string, print_instrs?: boolean) => {
    console.log(`\n=== Running Test: ${testName || 'Unnamed Test'} ===`);
    console.log(`Code: ${code}`);
    
    try {
        const inputStream = CharStream.fromString(code);
        const lexer = new RustLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new RustParser(tokenStream);

        // Parse the input
        const tree = parser.crate();

        // Typecheck
        const typechecker = new RustTypeChecker();
        typechecker.check(tree, false);

        // Compile
        const compiler = new RustCompiler();
        const instructions = compiler.compile(tree);

        if (print_instrs) printInstructions(instructions);
    
        const VM = new RustVirtualMachine();
        const actualResult = VM.execute(instructions);
        
        console.log(`Expected: ${expectedResult}, Actual: ${actualResult}`);

        const compare = (actual: any, expected: any) => {
            if (actual === undefined || expected === undefined) {
                return actual === expected
            }

            if (typeof actual !== 'object' || typeof expected !== 'object') {
                return actual === expected
            }

            if (Array.isArray(actual) && Array.isArray(expected)) {
                return actual.length === expected.length
                    && actual.every((el, i) => compare(el, expected[i]))
            }

            return false;
        }
        
        if (compare(actualResult, expectedResult)) {
            console.log("✅ Test Passed");
            return true;
        } else {
            console.log(`❌ Test Failed - Result mismatch - Expected ${expectedResult} but got ${actualResult}`);
        }
    } catch (error) {

        if (error.message.includes(expectedResult)) {
            console.log(`✅ Test Pass. Error thrown matches expected: \n${error.message}`);
            return true
        }

        console.log(`❌ Test Failed - ${error.message}`);
        console.log(error.stack); // Include stack trace for debugging
        return false;
    }
};

