import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "../src/parser/src/RustLexer";
import { RustCompiler } from "../src/CompilerRust";
import { RustParser } from "../src/parser/src/RustParser";
import { RustTypeChecker } from "../src/TypeCheckerRust";
import { RustVirtualMachine } from "../src/VirtualMachineRust";

function execute(code) {
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
    
        // if (print_instrs) printInstructions(instructions);
    
        const VM = new RustVirtualMachine();
        const result = VM.execute(instructions);
    
        console.log("Result: " + result);

    } catch (error) {
        console.log(error.stack); 
    }
}

async function start() {
    const fs = await import("fs");
    const readline = await import("readline");
  
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> ",
    });
  
    console.log(`Type the path of the text file to run code in it (e.g, "input.txt")`);
    console.log("Type 'exit' to quit.");
    rl.prompt();
  
    rl.on("line", (line: string) => {
      const trimmed = line.trim();
  
      if (trimmed === "exit") {
        rl.close();
        return;
      }
  
      try {
        const code = fs.readFileSync(trimmed, "utf8");
        execute(code);
      } catch (err: any) {
        console.error("Could not read 'input.txt':", err.message);
      }
  
      rl.prompt();
    });
  
    rl.on("close", () => {
      console.log("Goodbye!");
      process.exit(0);
    });
}

start();