import { ParseTree } from "antlr4ng";
import { RustEvaluatorVisitor } from "./RustEvaluatorVisitor";

export class RustCompiler {
    private visitor: RustEvaluatorVisitor;

    constructor() {
        this.visitor = new RustEvaluatorVisitor();
    }

    compile(tree: ParseTree): object[] {
        return this.visitor.visit(tree);
    }
}

