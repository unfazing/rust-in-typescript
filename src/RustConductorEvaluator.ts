import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from 'antlr4ng';
import { RustLexer } from './parser/src/RustLexer.js';
import { RustParser } from './parser/src/RustParser.js';
import { RustCompiler } from "./CompilerRust.js";
import { RustTypeChecker } from "./TypeCheckerRust.js";
import { RustVirtualMachine } from "./VirtualMachineRust.js";

export class RustConductorEvaluator extends BasicEvaluator {
    private executionCount: number;
    private compiler: RustCompiler;
    private typeChecker: RustTypeChecker;
    private VM: RustVirtualMachine

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
        this.typeChecker = new RustTypeChecker();
        this.compiler = new RustCompiler();
        this.VM = new RustVirtualMachine();
    }

    async evaluateChunk(chunk: string): Promise<void> {
        this.executionCount++;
        try {
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new RustLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new RustParser(tokenStream);
            
            // Parse the input
            const tree = parser.crate();

            // Typecheck
            this.typeChecker.check(tree);// throws error if type error found

            // Compile
            const instructions: object[] = this.compiler.compile(tree);
            
            // Execute instructions on VM
            // const result = this.VM.execute(instructions);
            
            // Send the result to the REPL
            // this.conductor.sendOutput(`Result of expression: ${result}`);

        }  catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}