## 1. Setup and Run

The project’s repository can be found at [https://github.com/unfazing/rust-in-typescript](https://github.com/unfazing/rust-in-typescript).

### 1.1 Versioning and Tools

- **Yarn**: 4.6.0  
- **Node.js**: 20.9.0  
- **antlr4ng**: 3.0.16  
- **TypeScript**: 5.5.3  
- **Rollup**: 4.34.1  
- **Conductor**: [`source-academy/conductor@0.2.1`](https://github.com/source-academy/conductor.git#0.2.1)

### 1.2 Generating ANTLR Lexer and Parser Files

The definitions for grammar rules are located in the `src/parser/src/` directory. Specifically:

- `RustLexer.g4` – Lexer rules  
- `RustParser.g4` – Parser rules  

These files are derived from the [official ANTLR4 repository for Rust grammar](https://github.com/antlr/grammars-v4/tree/master/rust).

To regenerate the lexer and parser files after modifying the grammar rules, follow these steps:

1. Make desired changes to `RustLexer.g4` and `RustParser.g4`
2. Generate the lexer with: `yarn generate-lexer-rust`
3. Generate the parser with: `yarn generate-parser-rust`

### 1.3 Connect to Source Academy Conductor

On the feature settings page of SourceAcademy.org:

- Enable the conductor.enable flag
- Set the conductor.evaluator.url field to: `https://unfazing.github.io/rust-in-typescript/index.js`
