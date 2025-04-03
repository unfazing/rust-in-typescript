import { AbstractParseTreeVisitor, ParseTree } from "antlr4ng";
import { RustParserVisitor } from "./parser/src/RustParserVisitor";

export class RustTypeChecker {
    private root: ParseTree;
    private visitor: TypeCheckerVisitor;

    constructor() {
        this.visitor = new TypeCheckerVisitor();
    }

    check(tree: ParseTree): undefined {
        this.visitor.visit(tree);
    }
}

class TypeCheckerVisitor extends AbstractParseTreeVisitor<any> implements RustParserVisitor<any> {
    

    
    // Override the default result method from AbstractParseTreeVisitor
    protected defaultResult(): String {
        return ""
    }
    
    // Override the aggregate result method
    protected aggregateResult(aggregate: String, nextResult: String): String {
        return nextResult;
    }
}