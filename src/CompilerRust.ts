import { ParseTree } from "antlr4ng";
import { AbstractParseTreeVisitor } from 'antlr4ng';
import { CrateContext, ExpressionContext } from "./parser/src/RustParser.js";
import { MacroInvocationContext } from "./parser/src/RustParser.js";
import { DelimTokenTreeContext } from "./parser/src/RustParser.js";
import { TokenTreeContext } from "./parser/src/RustParser.js";
import { TokenTreeTokenContext } from "./parser/src/RustParser.js";
import { MacroInvocationSemiContext } from "./parser/src/RustParser.js";
import { MacroRulesDefinitionContext } from "./parser/src/RustParser.js";
import { MacroRulesDefContext } from "./parser/src/RustParser.js";
import { MacroRulesContext } from "./parser/src/RustParser.js";
import { MacroRuleContext } from "./parser/src/RustParser.js";
import { MacroMatcherContext } from "./parser/src/RustParser.js";
import { MacroMatchContext } from "./parser/src/RustParser.js";
import { MacroMatchTokenContext } from "./parser/src/RustParser.js";
import { MacroFragSpecContext } from "./parser/src/RustParser.js";
import { MacroRepSepContext } from "./parser/src/RustParser.js";
import { MacroRepOpContext } from "./parser/src/RustParser.js";
import { MacroTranscriberContext } from "./parser/src/RustParser.js";
import { ItemContext } from "./parser/src/RustParser.js";
import { VisItemContext } from "./parser/src/RustParser.js";
import { MacroItemContext } from "./parser/src/RustParser.js";
import { ModuleContext } from "./parser/src/RustParser.js";
import { ExternCrateContext } from "./parser/src/RustParser.js";
import { CrateRefContext } from "./parser/src/RustParser.js";
import { AsClauseContext } from "./parser/src/RustParser.js";
import { UseDeclarationContext } from "./parser/src/RustParser.js";
import { UseTreeContext } from "./parser/src/RustParser.js";
import { Function_Context } from "./parser/src/RustParser.js";
import { FunctionQualifiersContext } from "./parser/src/RustParser.js";
import { AbiContext } from "./parser/src/RustParser.js";
import { FunctionParametersContext } from "./parser/src/RustParser.js";
import { SelfParamContext } from "./parser/src/RustParser.js";
import { ShorthandSelfContext } from "./parser/src/RustParser.js";
import { TypedSelfContext } from "./parser/src/RustParser.js";
import { FunctionParamContext } from "./parser/src/RustParser.js";
import { FunctionParamPatternContext } from "./parser/src/RustParser.js";
import { FunctionReturnTypeContext } from "./parser/src/RustParser.js";
import { TypeAliasContext } from "./parser/src/RustParser.js";
import { Struct_Context } from "./parser/src/RustParser.js";
import { StructStructContext } from "./parser/src/RustParser.js";
import { TupleStructContext } from "./parser/src/RustParser.js";
import { StructFieldsContext } from "./parser/src/RustParser.js";
import { StructFieldContext } from "./parser/src/RustParser.js";
import { TupleFieldsContext } from "./parser/src/RustParser.js";
import { TupleFieldContext } from "./parser/src/RustParser.js";
import { EnumerationContext } from "./parser/src/RustParser.js";
import { EnumItemsContext } from "./parser/src/RustParser.js";
import { EnumItemContext } from "./parser/src/RustParser.js";
import { EnumItemTupleContext } from "./parser/src/RustParser.js";
import { EnumItemStructContext } from "./parser/src/RustParser.js";
import { EnumItemDiscriminantContext } from "./parser/src/RustParser.js";
import { Union_Context } from "./parser/src/RustParser.js";
import { ConstantItemContext } from "./parser/src/RustParser.js";
import { StaticItemContext } from "./parser/src/RustParser.js";
import { Trait_Context } from "./parser/src/RustParser.js";
import { ImplementationContext } from "./parser/src/RustParser.js";
import { InherentImplContext } from "./parser/src/RustParser.js";
import { TraitImplContext } from "./parser/src/RustParser.js";
import { ExternBlockContext } from "./parser/src/RustParser.js";
import { ExternalItemContext } from "./parser/src/RustParser.js";
import { GenericParamsContext } from "./parser/src/RustParser.js";
import { GenericParamContext } from "./parser/src/RustParser.js";
import { LifetimeParamContext } from "./parser/src/RustParser.js";
import { TypeParamContext } from "./parser/src/RustParser.js";
import { ConstParamContext } from "./parser/src/RustParser.js";
import { WhereClauseContext } from "./parser/src/RustParser.js";
import { WhereClauseItemContext } from "./parser/src/RustParser.js";
import { LifetimeWhereClauseItemContext } from "./parser/src/RustParser.js";
import { TypeBoundWhereClauseItemContext } from "./parser/src/RustParser.js";
import { ForLifetimesContext } from "./parser/src/RustParser.js";
import { AssociatedItemContext } from "./parser/src/RustParser.js";
import { InnerAttributeContext } from "./parser/src/RustParser.js";
import { OuterAttributeContext } from "./parser/src/RustParser.js";
import { AttrContext } from "./parser/src/RustParser.js";
import { AttrInputContext } from "./parser/src/RustParser.js";
import { StatementContext } from "./parser/src/RustParser.js";
import { LetStatementContext } from "./parser/src/RustParser.js";
import { ExpressionStatementContext } from "./parser/src/RustParser.js";
import { TypeCastExpressionContext } from "./parser/src/RustParser.js";
import { PathExpression_Context } from "./parser/src/RustParser.js";
import { TupleExpressionContext } from "./parser/src/RustParser.js";
import { IndexExpressionContext } from "./parser/src/RustParser.js";
import { RangeExpressionContext } from "./parser/src/RustParser.js";
import { MacroInvocationAsExpressionContext } from "./parser/src/RustParser.js";
import { ReturnExpressionContext } from "./parser/src/RustParser.js";
import { AwaitExpressionContext } from "./parser/src/RustParser.js";
import { ErrorPropagationExpressionContext } from "./parser/src/RustParser.js";
import { ContinueExpressionContext } from "./parser/src/RustParser.js";
import { AssignmentExpressionContext } from "./parser/src/RustParser.js";
import { MethodCallExpressionContext } from "./parser/src/RustParser.js";
import { LiteralExpression_Context } from "./parser/src/RustParser.js";
import { StructExpression_Context } from "./parser/src/RustParser.js";
import { TupleIndexingExpressionContext } from "./parser/src/RustParser.js";
import { NegationExpressionContext } from "./parser/src/RustParser.js";
import { CallExpressionContext } from "./parser/src/RustParser.js";
import { LazyBooleanExpressionContext } from "./parser/src/RustParser.js";
import { DereferenceExpressionContext } from "./parser/src/RustParser.js";
import { ExpressionWithBlock_Context } from "./parser/src/RustParser.js";
import { GroupedExpressionContext } from "./parser/src/RustParser.js";
import { BreakExpressionContext } from "./parser/src/RustParser.js";
import { ArithmeticOrLogicalExpressionContext } from "./parser/src/RustParser.js";
import { FieldExpressionContext } from "./parser/src/RustParser.js";
import { EnumerationVariantExpression_Context } from "./parser/src/RustParser.js";
import { ComparisonExpressionContext } from "./parser/src/RustParser.js";
import { AttributedExpressionContext } from "./parser/src/RustParser.js";
import { BorrowExpressionContext } from "./parser/src/RustParser.js";
import { CompoundAssignmentExpressionContext } from "./parser/src/RustParser.js";
import { ClosureExpression_Context } from "./parser/src/RustParser.js";
import { ArrayExpressionContext } from "./parser/src/RustParser.js";
import { ComparisonOperatorContext } from "./parser/src/RustParser.js";
import { CompoundAssignOperatorContext } from "./parser/src/RustParser.js";
import { ExpressionWithBlockContext } from "./parser/src/RustParser.js";
import { LiteralExpressionContext } from "./parser/src/RustParser.js";
import { PathExpressionContext } from "./parser/src/RustParser.js";
import { BlockExpressionContext } from "./parser/src/RustParser.js";
import { StatementsContext } from "./parser/src/RustParser.js";
import { AsyncBlockExpressionContext } from "./parser/src/RustParser.js";
import { UnsafeBlockExpressionContext } from "./parser/src/RustParser.js";
import { ArrayElementsContext } from "./parser/src/RustParser.js";
import { TupleElementsContext } from "./parser/src/RustParser.js";
import { TupleIndexContext } from "./parser/src/RustParser.js";
import { StructExpressionContext } from "./parser/src/RustParser.js";
import { StructExprStructContext } from "./parser/src/RustParser.js";
import { StructExprFieldsContext } from "./parser/src/RustParser.js";
import { StructExprFieldContext } from "./parser/src/RustParser.js";
import { StructBaseContext } from "./parser/src/RustParser.js";
import { StructExprTupleContext } from "./parser/src/RustParser.js";
import { StructExprUnitContext } from "./parser/src/RustParser.js";
import { EnumerationVariantExpressionContext } from "./parser/src/RustParser.js";
import { EnumExprStructContext } from "./parser/src/RustParser.js";
import { EnumExprFieldsContext } from "./parser/src/RustParser.js";
import { EnumExprFieldContext } from "./parser/src/RustParser.js";
import { EnumExprTupleContext } from "./parser/src/RustParser.js";
import { EnumExprFieldlessContext } from "./parser/src/RustParser.js";
import { CallParamsContext } from "./parser/src/RustParser.js";
import { ClosureExpressionContext } from "./parser/src/RustParser.js";
import { ClosureParametersContext } from "./parser/src/RustParser.js";
import { ClosureParamContext } from "./parser/src/RustParser.js";
import { LoopExpressionContext } from "./parser/src/RustParser.js";
import { InfiniteLoopExpressionContext } from "./parser/src/RustParser.js";
import { PredicateLoopExpressionContext } from "./parser/src/RustParser.js";
import { PredicatePatternLoopExpressionContext } from "./parser/src/RustParser.js";
import { IteratorLoopExpressionContext } from "./parser/src/RustParser.js";
import { LoopLabelContext } from "./parser/src/RustParser.js";
import { IfExpressionContext } from "./parser/src/RustParser.js";
import { IfLetExpressionContext } from "./parser/src/RustParser.js";
import { MatchExpressionContext } from "./parser/src/RustParser.js";
import { MatchArmsContext } from "./parser/src/RustParser.js";
import { MatchArmExpressionContext } from "./parser/src/RustParser.js";
import { MatchArmContext } from "./parser/src/RustParser.js";
import { MatchArmGuardContext } from "./parser/src/RustParser.js";
import { PatternContext } from "./parser/src/RustParser.js";
import { PatternNoTopAltContext } from "./parser/src/RustParser.js";
import { PatternWithoutRangeContext } from "./parser/src/RustParser.js";
import { LiteralPatternContext } from "./parser/src/RustParser.js";
import { IdentifierPatternContext } from "./parser/src/RustParser.js";
import { WildcardPatternContext } from "./parser/src/RustParser.js";
import { RestPatternContext } from "./parser/src/RustParser.js";
import { InclusiveRangePatternContext } from "./parser/src/RustParser.js";
import { HalfOpenRangePatternContext } from "./parser/src/RustParser.js";
import { ObsoleteRangePatternContext } from "./parser/src/RustParser.js";
import { RangePatternBoundContext } from "./parser/src/RustParser.js";
import { ReferencePatternContext } from "./parser/src/RustParser.js";
import { StructPatternContext } from "./parser/src/RustParser.js";
import { StructPatternElementsContext } from "./parser/src/RustParser.js";
import { StructPatternFieldsContext } from "./parser/src/RustParser.js";
import { StructPatternFieldContext } from "./parser/src/RustParser.js";
import { StructPatternEtCeteraContext } from "./parser/src/RustParser.js";
import { TupleStructPatternContext } from "./parser/src/RustParser.js";
import { TupleStructItemsContext } from "./parser/src/RustParser.js";
import { TuplePatternContext } from "./parser/src/RustParser.js";
import { TuplePatternItemsContext } from "./parser/src/RustParser.js";
import { GroupedPatternContext } from "./parser/src/RustParser.js";
import { SlicePatternContext } from "./parser/src/RustParser.js";
import { SlicePatternItemsContext } from "./parser/src/RustParser.js";
import { PathPatternContext } from "./parser/src/RustParser.js";
import { Type_Context } from "./parser/src/RustParser.js";
import { TypeNoBoundsContext } from "./parser/src/RustParser.js";
import { ParenthesizedTypeContext } from "./parser/src/RustParser.js";
import { NeverTypeContext } from "./parser/src/RustParser.js";
import { TupleTypeContext } from "./parser/src/RustParser.js";
import { ArrayTypeContext } from "./parser/src/RustParser.js";
import { SliceTypeContext } from "./parser/src/RustParser.js";
import { ReferenceTypeContext } from "./parser/src/RustParser.js";
import { RawPointerTypeContext } from "./parser/src/RustParser.js";
import { BareFunctionTypeContext } from "./parser/src/RustParser.js";
import { FunctionTypeQualifiersContext } from "./parser/src/RustParser.js";
import { BareFunctionReturnTypeContext } from "./parser/src/RustParser.js";
import { FunctionParametersMaybeNamedVariadicContext } from "./parser/src/RustParser.js";
import { MaybeNamedFunctionParametersContext } from "./parser/src/RustParser.js";
import { MaybeNamedParamContext } from "./parser/src/RustParser.js";
import { MaybeNamedFunctionParametersVariadicContext } from "./parser/src/RustParser.js";
import { TraitObjectTypeContext } from "./parser/src/RustParser.js";
import { TraitObjectTypeOneBoundContext } from "./parser/src/RustParser.js";
import { ImplTraitTypeContext } from "./parser/src/RustParser.js";
import { ImplTraitTypeOneBoundContext } from "./parser/src/RustParser.js";
import { InferredTypeContext } from "./parser/src/RustParser.js";
import { TypeParamBoundsContext } from "./parser/src/RustParser.js";
import { TypeParamBoundContext } from "./parser/src/RustParser.js";
import { TraitBoundContext } from "./parser/src/RustParser.js";
import { LifetimeBoundsContext } from "./parser/src/RustParser.js";
import { LifetimeContext } from "./parser/src/RustParser.js";
import { SimplePathContext } from "./parser/src/RustParser.js";
import { SimplePathSegmentContext } from "./parser/src/RustParser.js";
import { PathInExpressionContext } from "./parser/src/RustParser.js";
import { PathExprSegmentContext } from "./parser/src/RustParser.js";
import { PathIdentSegmentContext } from "./parser/src/RustParser.js";
import { GenericArgsContext } from "./parser/src/RustParser.js";
import { GenericArgContext } from "./parser/src/RustParser.js";
import { GenericArgsConstContext } from "./parser/src/RustParser.js";
import { GenericArgsLifetimesContext } from "./parser/src/RustParser.js";
import { GenericArgsTypesContext } from "./parser/src/RustParser.js";
import { GenericArgsBindingsContext } from "./parser/src/RustParser.js";
import { GenericArgsBindingContext } from "./parser/src/RustParser.js";
import { QualifiedPathInExpressionContext } from "./parser/src/RustParser.js";
import { QualifiedPathTypeContext } from "./parser/src/RustParser.js";
import { QualifiedPathInTypeContext } from "./parser/src/RustParser.js";
import { TypePathContext } from "./parser/src/RustParser.js";
import { TypePathSegmentContext } from "./parser/src/RustParser.js";
import { TypePathFnContext } from "./parser/src/RustParser.js";
import { TypePathInputsContext } from "./parser/src/RustParser.js";
import { VisibilityContext } from "./parser/src/RustParser.js";
import { IdentifierContext } from "./parser/src/RustParser.js";
import { KeywordContext } from "./parser/src/RustParser.js";
import { MacroIdentifierLikeTokenContext } from "./parser/src/RustParser.js";
import { MacroLiteralTokenContext } from "./parser/src/RustParser.js";
import { MacroPunctuationTokenContext } from "./parser/src/RustParser.js";
import { ShlContext } from "./parser/src/RustParser.js";
import { ShrContext } from "./parser/src/RustParser.js";
import { RustParserVisitor } from "./parser/src/RustParserVisitor.js"
import { ArrayType, CompileTimeEnvFrame, CompileTimeEnvironment, CompileTimeType, CompileTimeTypeSentinels, global_compile_environment, SymbolAndType } from './CompileTimeEnvRust.js';
import { error } from 'console';
import { BooleanFalseRustValue, BooleanRustValue, BooleanTrueRustValue, CharRustValue, F64RustValue, I32RustValue, StringRustValue, UnitRustValue } from './Utils.js';
import { createContext } from "vm";

// wc: write counter
let wc;

// instrs: instruction array
let instrs;

let ce: CompileTimeEnvironment;

export class RustCompiler {
    private visitor: RustEvaluatorVisitor;

    constructor() {
        this.visitor = new RustEvaluatorVisitor();
    }

    compile(tree: ParseTree): object[] {
        // reset with every run
        wc = 0
        instrs = []
        ce = global_compile_environment

        return this.visitor.visit(tree);
    }
}

// const LOGGING_ENABLED = true; // Set to false to disable logging
const LOGGING_ENABLED = false; // Set to false to disable logging
function log(message: any, enclosing_function: string): void {
    if (LOGGING_ENABLED) {
        console.log(`[${enclosing_function}] --- ${message}`);
    }
}

export class RustEvaluatorVisitor extends AbstractParseTreeVisitor<any> implements RustParserVisitor<any> {
    // entry node
    visitCrate (ctx: CrateContext): object[] {
        // scan out local declarations in the global frame
        // in our Rust sublanguage, global frames only allow function declarations and constant declarations.
        let locals: SymbolAndType[] = [];
        ctx.item().forEach(item => {
            log(`SCANNING OUTER MOST BLOCK: ${item.getText()}`, "CRATE");
            
            const visItem = item.visItem();

            if (!visItem || !(visItem.function_() || visItem.constantItem()) ) {
                throw new Error("Compiler error; this item is not implemented;")
            }

            if (visItem.function_()) {
                const symbol: string = this.visit(visItem.function_().identifier());
                const retType: CompileTimeType = visItem.function_().functionReturnType()
                                                    ? this.visit(visItem.function_().functionReturnType())
                                                    : CompileTimeTypeSentinels.Unit
                log(`FOUND FUNCTION LOCAL SYMBOL: ${symbol}`, "CRATE");
                locals.push([symbol, retType]);
            }
            else if (visItem.constantItem()) {
                const symbol: string = this.visit(visItem.constantItem().identifier());
                const type: CompileTimeType = this.visit(visItem.constantItem().type_())
                log(`FOUND CONST LOCAL SYMBOL: ${symbol}`, "CRATE");
                locals.push([symbol, type]);
            }
        });

        instrs[wc++] = { tag: "ENTER_SCOPE", num: locals.length }
        ce.compile_time_environment_extend(new CompileTimeEnvFrame(locals))
        log(`ENVIRONMENT: ${ce}`, "CRATE")
        
        let is_first = true;
        ctx.item().forEach(item => {
            log(`VISITING ITEM: ${item}`, "CRATE")
            if (is_first) {
                is_first = false;
            } else {
                instrs[wc++] = { tag: "POP" } // pop Unit value from OS (due to evaluating assignments)
            }

            this.visit(item);            
        });

        // call main() function if it exists
        if (ce.symbol_exist_in_compile_time_env("main")) {
            instrs[wc++] = { tag: "POP" } // pop Unit value due to assignmnent of main

            instrs[wc++] = {
                tag: "LD",
                sym: "main",
                pos: ce.compile_time_environment_position("main")
            }

            instrs[wc++] = { tag: "CALL", arity: 0 } // TODO: disallow main from taking in arguments
        }

        instrs[wc++] = { tag: "EXIT_SCOPE" } 
        instrs[wc] = { tag: "DONE" }
        ce.compile_time_environment_restore()

        return instrs; // return the instructions list directly
    }

    // leaf node
    visitLiteralExpression(ctx: LiteralExpressionContext): string {
        const val = ctx.CHAR_LITERAL()
                    ? new CharRustValue(ctx.getText().slice(1, -1)) // remove ' ' characters
                    : ctx.INTEGER_LITERAL()
                    ? new I32RustValue(Number(ctx.getText()))
                    : ctx.FLOAT_LITERAL()
                    ? new F64RustValue(Number(ctx.getText()))
                    : ctx.STRING_LITERAL()
                    ? new StringRustValue(JSON.parse(ctx.getText()))
                    : ctx.KW_FALSE()
                    ? new BooleanFalseRustValue()
                    : ctx.KW_TRUE()
                    ? new BooleanTrueRustValue()
                    : error("Literal has format of an unknown type.");
        
        const primitiveTypes = [CharRustValue, I32RustValue, F64RustValue, BooleanRustValue]
        
        instrs[wc++] = { tag: "LDC", val: val } // whether constant is loaded on stack or heap depends on its RustValue

        log(`LOAD CONSTANT: ${ctx.getText()}`, "LITERAL_EXPRESSION")

        // if (primitiveTypes.some(type => val instanceof type)) {
        //     instrs[wc++] = { tag: "LDC_STACK", val: val }
        //     log(`LOAD CONSTANT ON STACK: ${ctx.getText()}`, "LITERAL_EXPRESSION")
        // } else {
        //     instrs[wc++] = { tag: "LDC", val: val }
        //     log(`LOAD CONSTANT ON HEAP: ${ctx.getText()}`, "LITERAL_EXPRESSION")
        // }

        return ctx.getText();
    }

    // leaf node
    visitPathExpression(ctx: PathExpressionContext): string {
        let symbol = this.visitChildren(ctx)
        instrs[wc++] = {
            tag: "LD",
            sym: symbol,
            pos: ce.compile_time_environment_position(symbol)
        }
        log(`LOAD VARIABLE: ${symbol}`, "PATH_EXPRESSION")
        return symbol
    }

    // (AND | ANDAND) KW_MUT? expression
    visitBorrowExpression(ctx: BorrowExpressionContext): undefined {
        this.visit(ctx.expression())
        const is_mut_borrow: boolean = (ctx.KW_MUT() !== null);

        instrs[wc++] = {
            tag: "REF",
            is_mutable: is_mut_borrow,
        }

        if (ctx.ANDAND()) {
            // a reference to a reference,
            // hence add one more ref instruction
            instrs[wc++] = {
                tag: "REF",
                is_mutable: false,
            }
        }
    }

    // STAR expression
    visitDereferenceExpression(ctx: DereferenceExpressionContext): undefined {
        this.visit(ctx.expression())
        instrs[wc++] = {
            tag: "DEREF",
        }
    }

    // blockExpression
    // : LCURLYBRACE innerAttribute* statements? RCURLYBRACE
    // ;
    visitBlockExpression(ctx: BlockExpressionContext): undefined {
        if (ctx.statements() == null) {
            instrs[wc++] = { tag: "LDC", val: new UnitRustValue() }
            return;
        }
        
        // scan out local declarations - TODO: there cant be nested sequences right?
        let locals: SymbolAndType[] = [];
        log(`<<< SCANNING OUT LOCAL DECLARATIONS >>>`, "BLOCK_EXPRESSION");

        const statements = ctx.statements().statement();
        statements.forEach(statement => {
            const stmt = statement.getChild(0) // each statement can only have 1 child
            // log(`SCANNING STATEMENT ${i}: ${stmt.getText()}`, "BLOCK_EXPRESSION");
            if (stmt instanceof LetStatementContext) {
                const symbol: string = this.visit(stmt.patternNoTopAlt())
                const type: CompileTimeType = this.visit(stmt.type_())
                log(`FOUND LET LOCAL SYMBOL: ${symbol}`, "BLOCK_EXPRESSION");
                locals.push([symbol, type])
            } else if (stmt instanceof ItemContext) {
                if (stmt.visItem() != null) {
                    if (stmt.visItem().function_() != null) {
                        const symbol: string = this.visit(stmt.visItem().function_().identifier())
                        const retType: CompileTimeType = stmt.visItem().function_().functionReturnType()
                                    ? this.visit(stmt.visItem().function_().functionReturnType())
                                    : CompileTimeTypeSentinels.Unit
                        log(`FOUND FUNCTION LOCAL SYMBOL: ${symbol}`, "BLOCK_EXPRESSION");
                        locals.push([symbol, retType]);
                    } else if (stmt.visItem().constantItem() != null) {
                        const symbol: string = this.visit(stmt.visItem().constantItem().identifier())
                        const type: CompileTimeType = this.visit(stmt.visItem().constantItem().type_())
                        log(`FOUND CONST LOCAL SYMBOL: ${symbol}`, "BLOCK_EXPRESSION");
                        locals.push([symbol, type]);
                    }
                }
            }
        })

        log(`<<< SCANNING COMPLETE >>>`, "BLOCK_EXPRESSION");
        
        instrs[wc++] = { tag: "ENTER_SCOPE", num: locals.length }; // TODO: dont create enter and exit scope ins during function call
        ce.compile_time_environment_extend(new CompileTimeEnvFrame(locals))

        log(`VISITING STATEMENTS`, "BLOCK_EXPRESSION");
        this.visit(ctx.statements());

		instrs[wc++] = { tag: "EXIT_SCOPE" };
        ce.compile_time_environment_restore();
    }

    //statements
    // : statement+ expression?
    // | expression
    visitStatements(ctx: StatementsContext) {

        // a single expression
        if (ctx.statement().length === 0 && ctx.expression()) {
            log(`Visiting the only expression: ${ctx.expression().getText()}`, "STATEMENTS")
            return this.visit(ctx.expression()); // terminate early
        }

        // else, statement+ expression?
        let first = true;
        ctx.statement().forEach(stmt => {
            if (first) {
                first = false
            } else {
                instrs[wc++] = { tag: "POP" }
            }
            
            log(`Visiting child statement ${stmt.getText()}`, "STATEMENTS")
            this.visit(stmt)
        })

        if (ctx.expression()) {
            instrs[wc++] = { tag: "POP" }

            log(`Visiting the last expression: ${ctx.expression().getText()}`, "STATEMENTS")
            this.visit(ctx.expression());
        }
    }

    // Used when getting a symbol from a borrow expression or path expression
    getSymbolFromExpression(expr_ctx: ExpressionContext): string {
        if (expr_ctx instanceof GroupedExpressionContext || expr_ctx instanceof BorrowExpressionContext || expr_ctx instanceof DereferenceExpressionContext) {
            return this.getSymbolFromExpression(expr_ctx.expression())
        }

        if (expr_ctx instanceof IndexExpressionContext) {
            return this.getSymbolFromExpression(expr_ctx.expression(0))
        }

        if (expr_ctx instanceof PathExpression_Context) {
            return this.visit(expr_ctx.pathExpression().getChild(0))
        }
        throw new Error(`Compiler Error in Assignment; [getSymbolFromExpression] The ExpressionContext provided (${expr_ctx.getText()}) does not have a PathExpressionContext on the path to leaf node.`)
    }
    

    // expression EQ expression
    visitAssignmentExpression(ctx: AssignmentExpressionContext): undefined {
        
        instrs[wc++] = {
            tag: "ASSIGN_MARKER", 
        };

        // evaluate/compile RHS 
        // push the address on the OS
        let RHS: ExpressionContext = ctx.expression(1)
        let expr = this.visit(RHS) 

        let LHS: ExpressionContext = ctx.expression(0);
        while (LHS instanceof GroupedExpressionContext) {
            LHS = LHS.expression()
        }
        
        if (LHS instanceof DereferenceExpressionContext) {
            log(`ASSIGNING A DEREF: ${LHS.getText()}`, "ASSIGNMENT_EXPRESSION")

            // dereference the LHS
            this.visit(LHS);

            // do a deref assignment
            instrs[wc++] = {
                tag: "ASSIGN_DEREF", 
            };

        } else if (LHS instanceof PathExpression_Context) {
            let symbol = this.getSymbolFromExpression(LHS) // visit children of pathExpression to avoid adding LD instr
            log(`SYMBOL: ${symbol}`, "ASSIGNMENT_EXPRESSION")

            log(`EXPR: ${expr}`, "ASSIGNMENT_EXPRESSION")
            instrs[wc++] = {
                tag: "ASSIGN", // immutable assign
                pos: ce.compile_time_environment_position(symbol),
            };
        
        } else if (LHS instanceof IndexExpressionContext) {
            // loads the address of the indexed element onto OS
            this.visit(LHS) 

            instrs[wc++] = {
                tag: "ASSIGN_DEREF", 
            };
        } else {
            throw new Error("Compilation error in Assignment; LHS does not support assignment")
        }
    }

    // KW_RETURN expression?
    visitReturnExpression(ctx: ReturnExpressionContext): undefined {
        log(`<<< VISITING CHILDREN OF RETURN EXPR >>>`, "RETURN_EXPRESSION")
        this.visitChildren(ctx)
        log(`<<< VISIT CHILDREN OF RETURN EXPR COMPLETE >>>`, "RETURN_EXPRESSION")
        if (ctx.expression() instanceof CallExpressionContext) {
            // turn call into tail call
            log(`FOUND TAIL CALL`, "RETURN_EXPRESSION")
            instrs[wc - 1].tag = "TAIL_CALL"
        } else {
            instrs[wc++] = { tag: "RESET"}
        }        
    }

    // expression LPAREN callParams? RPAREN
    visitCallExpression(ctx: CallExpressionContext): string {
        let symbol = this.visit(ctx.expression())
        let arity = ctx.callParams() == null || ctx.callParams().expression() == null ? 0 : ctx.callParams().expression().length
        log(`SYMBOL: ${symbol}`, "CALL_EXPRESSION")
        log(`ARITY: ${arity}`, "CALL_EXPRESSION")
        for (let i = 0; i < arity; i++) {
            this.visit(ctx.callParams().expression(i))
        }
        instrs[wc++] = { tag: "CALL", arity: arity}
        return symbol
    }

    // arrayExpression: 
    // LSQUAREBRACKET innerAttribute* arrayElements? RSQUAREBRACKET  
    visitArrayExpression(ctx: ArrayExpressionContext): any {
        if (ctx.arrayElements()) {
            this.visit(ctx.arrayElements())
        } else {
            instrs[wc++] = { tag: "ARRAY", length: 0 }
        }

    }

    getIntegerLiteral(ctx: LiteralExpressionContext): number {
        if (ctx.INTEGER_LITERAL()) {
            return Number(ctx.getText())
        }
        throw new Error(`Compiler error; [getIntegerLiteral] Array length/index literal is not an integer.`)
    }


    // Retrieve array size during compile time
    // arrayElements
    // : expression (COMMA expression)* COMMA?
    // | expression SEMI expression
    getExpressionSize(ctx: ExpressionContext): number {
        if (ctx instanceof LiteralExpression_Context) {
            const result: number = ctx.literalExpression().STRING_LITERAL()
                                    ? CompileTimeTypeSentinels.String.getSize()
                                    : ctx.literalExpression().CHAR_LITERAL()
                                    ? CompileTimeTypeSentinels.Char.getSize()
                                    : ctx.literalExpression().FLOAT_LITERAL()
                                    ? CompileTimeTypeSentinels.F64.getSize()
                                    : ctx.literalExpression().INTEGER_LITERAL()
                                    ? CompileTimeTypeSentinels.I32.getSize()
                                    : ctx.literalExpression().KW_FALSE() || ctx.literalExpression().KW_TRUE()
                                    ? CompileTimeTypeSentinels.Boolean.getSize()
                                    : -1

            if (result === -1) {
                throw new Error(`Compiler Error; Unknown type for literal expression: ${ctx.getText()}`)
            }
            return result
        }

        if (ctx instanceof BorrowExpressionContext) {
            return CompileTimeTypeSentinels.Ref.getSize()
        }

        if (ctx instanceof PathExpression_Context) {
            const symbol: string = this.getSymbolFromExpression(this.visit(ctx))
            return ce.get_compile_time_type(symbol).getSize()
        }

        if (ctx instanceof DereferenceExpressionContext) {
            const symbol: string = this.getSymbolFromExpression(ctx.expression())
            return ce.get_compile_time_type(symbol).getSize()
        }

        if (ctx instanceof GroupedExpressionContext) {
            return this.getExpressionSize(ctx.expression())
        }

        // [ arrayElements? ]
        if (ctx instanceof ArrayExpressionContext) {
            if (ctx.arrayElements()) {
                const elem_size: number = this.getExpressionSize(ctx.arrayElements().expression(0))
                const array_length: number = ctx.arrayElements().expression().length
                return elem_size * array_length + 2 // size of array node in vm is 2
            }
            return 0
        }
    }


    // arrayElements
    // : expression (COMMA expression)* COMMA?
    // | expression SEMI expression
    visitArrayElements(ctx: ArrayElementsContext) {
        // get the size required to allocate a placeholder block of contiguous memory for the array on the stack
        const array_element: ExpressionContext = ctx.expression(0)
        const array_length: number = ctx.SEMI() 
                                    ? this.getIntegerLiteral((ctx.expression(1).getChild(0) as LiteralExpressionContext)) 
                                    : ctx.expression().length
        const elementSize: number = this.getExpressionSize(array_element)
        instrs[wc++] = { tag: "ARRAY_PLACEHOLDER", length: array_length, elementSize: elementSize}
        
        // visit the expression to get the values on the OS
        if (ctx.SEMI()) { 
            this.visit(ctx.expression(0)); // push value on OS
            instrs[wc++] = { tag: "ARRAY_FILL", length: array_length, elementSize: elementSize } // VM: peeks on OS and makes `length - 1` copies of value to contiguous memory 
        } else {
            const expressionArray: ExpressionContext[] = ctx.expression()
            // push elements in reverse order onto OS
            for (let i = expressionArray.length - 1; i >= 0; i--) {
                this.visit(expressionArray[i]);
            }
            instrs[wc++] = { tag: "ARRAY", length: array_length, elementSize: elementSize } // VM: pops `length` elements from OS and copies to contiguous memory
        }
    }

    // expression LSQUAREBRACKET expression RSQUAREBRACKET
    visitIndexExpression(ctx: IndexExpressionContext) {
        const [array, index]: ExpressionContext[] = ctx.expression();
        
        this.visit(array) 
        // OS should have an array address by the end of this
        this.visit(index)

        instrs[wc++] = { tag: "ARRAY_INDEX" }
    }

    // TODO: implement for loop iterator:
    // for i in 0..5 { }

    visitArithmeticOrLogicalExpression (ctx: ArithmeticOrLogicalExpressionContext): undefined {
        this.visit(ctx.expression(0))
        this.visit(ctx.expression(1))
        let symbol = ctx.AND() != null
                        ? "&"
                        : ctx.OR() != null
                        ? "|"
                        : ctx.MINUS() != null
                        ? "-"
                        : ctx.PERCENT() != null
                        ? "%"
                        : ctx.PLUS() != null
                        ? "+"
                        : ctx.SLASH() != null
                        ? "/"
                        : ctx.STAR() != null
                        ? "*"
                        : ctx.CARET() != null
                        ? "^"
                        : error(`YET TO IMPLEMENT THIS ArithmeticOrLogicalExpression SYMBOL`) 

        instrs[wc++] = { tag: "BINOP", sym: symbol }

        log(`OP1: ${ctx.expression(0).getText()}`, "ARITHMETIC_OR_LOGICAL_EXPRESSION")
        log(`OP2: ${ctx.expression(1).getText()}`, "ARITHMETIC_OR_LOGICAL_EXPRESSION")
        log(`SYMBOL: ${symbol}`, "ARITHMETIC_OR_LOGICAL_EXPRESSION")
    }

    // | expression ANDAND expression
    // | expression OROR expression
    visitLazyBooleanExpression(ctx: LazyBooleanExpressionContext): any {
        const op1: string = this.visit(ctx.expression(0));
        const op2: string = this.visit(ctx.expression(1));
        const symbol = ctx.ANDAND() != null
                        ? "&&"
                        : ctx.OROR() != null
                        ? "||"
                        : error('Unknown boolean operator')
        instrs[wc++] = { tag: "BINOP", sym: symbol }

        log(`OP1: ${ctx.expression(0).getText()}`, "LAZY_BOOLEAN_EXPRESSION")
        log(`OP2: ${ctx.expression(1).getText()}`, "LAZY_BOOLEAN_EXPRESSION")
        log(`SYMBOL: ${symbol}`, "LAZY_BOOLEAN_EXPRESSION")
    }

    // expression comparisonOperator expression 
    visitComparisonExpression(ctx: ComparisonExpressionContext): undefined {
        const op1: string = this.visit(ctx.expression(0));
        const op2: string = this.visit(ctx.expression(1));

        const op: ComparisonOperatorContext = ctx.comparisonOperator(); 
        const symbol = op.EQEQ() 
                        ? "==="
                        : op.GE()
                        ? '>='
                        : op.GT()
                        ? ">"
                        : op.LE()
                        ? "<="
                        : op.LT()
                        ? "<"
                        : op.NE()
                        ? "!=="
                        : error('Unknown comparison operator')

        instrs[wc++] = { tag: "BINOP", sym: symbol }

        log(`OP1: ${op1}`, "COMPARISON_EXPRESSION")
        log(`OP2: ${op2}`, "COMPARISON_EXPRESSION")
        log(`SYMBOL: ${symbol}`, "COMPARISON_EXPRESSION")
    }

    // (MINUS | NOT) expression
    visitNegationExpression(ctx: NegationExpressionContext): undefined {
        this.visit(ctx.expression());
        const sym = ctx.MINUS() 
            ? "!"
            : ctx.NOT()
            ? "-unary"
            : error("Unknown unary operator")
                        
        instrs[wc++] = { tag: "UNOP", sym: sym }
    }

    // KW_IF expression blockExpression (KW_ELSE (blockExpression | ifExpression | ifLetExpression))?
    visitIfExpression(ctx: IfExpressionContext): undefined {
        // predicate
        const predicate: ExpressionContext = ctx.expression(); 
        this.visit(predicate); 

        const jump_on_false_instruction = { tag: "JOF", addr: -1 };
		instrs[wc++] = jump_on_false_instruction;

        // then block
        const cons: BlockExpressionContext = ctx.blockExpression(0); // then block, always exists
        this.visit(cons);

        // alternative branch
        if (ctx.KW_ELSE()) {
            // only add goto_instruction if else branch exists
            const goto_instruction = { tag: "GOTO" , addr: -1};
            instrs[wc++] = goto_instruction;
            jump_on_false_instruction.addr = wc;

            // this is an else block: else {}
            if (ctx.blockExpression().length > 1) {
                const alt: BlockExpressionContext = ctx.blockExpression(1);
                this.visit(alt)
            }
            // this is an else if block: else if (expression) {} 
            else if (ctx.ifExpression()) {
                this.visit(ctx.ifExpression());
            } else {
                // this is an if let expression: not within scope
                error("Error: If let expression is out of scope.")
            }

            goto_instruction.addr = wc;
        } else {
            jump_on_false_instruction.addr = wc;
        }
    }

    // KW_WHILE expression /*except structExpression*/ blockExpression
    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): undefined {
		const loop_start: number = wc;

        const predicate: ExpressionContext = ctx.expression();
        this.visit(predicate);

        const jump_on_false_instruction = { tag: "JOF", addr: -1 };
		instrs[wc++] = jump_on_false_instruction;        
        
        const body: BlockExpressionContext = ctx.blockExpression();
        this.visit(body)

        instrs[wc++] = { tag: "POP" };
		instrs[wc++] = { tag: "GOTO", addr: loop_start };
        jump_on_false_instruction.addr = wc;

		instrs[wc++] = { tag: "LDC", val: new UnitRustValue() }; // while loops always have the unit type () in Rust!!
    }

    // function_
    // : functionQualifiers KW_FN identifier genericParams? LPAREN functionParameters? RPAREN functionReturnType? whereClause? (
    //     blockExpression
    //     | SEMI
    // )
    // ;
    visitFunction_(ctx: Function_Context): undefined {
        let symbol = this.visit(ctx.identifier())
        let params = ctx.functionParameters()
        let body = ctx.blockExpression()
        log(`SYMBOL: ${symbol}`, "FUNCTION")

        this.insertClosure(params, body)

        instrs[wc++] = {
            tag: "ASSIGN_FN", 
            pos: ce.compile_time_environment_position(symbol),
        };
    }

    insertClosure(params_ctx: FunctionParametersContext, body_ctx: BlockExpressionContext): undefined {
        log(`<<< INSERTING CLOSURE >>>`, "FUNCTION->CLOSURE")
        let arity = params_ctx == null || params_ctx.functionParam() == null ? 0 : params_ctx.functionParam().length
        instrs[wc++] = { tag: "LDF", arity: arity, addr: wc + 1}

        const goto_instruction = { tag: "GOTO", addr: -1 }
        instrs[wc++] = goto_instruction
        
        let param_list: SymbolAndType[] =  []
        for (let i = 0; i < arity; i++) {
            const symbol: string = this.visit(params_ctx.functionParam(i).functionParamPattern().pattern())
            const type: CompileTimeType = this.visit(params_ctx.functionParam(i).functionParamPattern().type_())
            param_list.push([symbol, type])
        }
        log(`PARAM LIST: ${param_list}`, "FUNCTION->CLOSURE")

        ce.compile_time_environment_extend(new CompileTimeEnvFrame(param_list))

        // compile body into instructions
        this.visit(body_ctx) // the environment will be extended and restored once more => done twice
        
        ce.compile_time_environment_restore();

        // no need to insert unit type. The value of function call is on the top of the OS at the end
        // instrs[wc++] = { tag: "LDC", val: new UnitRustValue() } 
        
        instrs[wc++] = { tag: "RESET" }
        goto_instruction.addr = wc
        log(`<<< CLOSURE INSERT COMPLETE >>>`, "FUNCTION->CLOSURE")
    }

    // expressionStatement
    // : expression SEMI
    // | expressionWithBlock SEMI?
    // ;
    visitExpressionStatement(ctx: ExpressionStatementContext) {
        if (ctx.expression()) { // SEMI always exists
            this.visit(ctx.expression());
        
        } else if (ctx.expressionWithBlock()) {
            this.visit(ctx.expressionWithBlock())
        }

        // pop the value of the expression from OS, then load Unit value
        if (ctx.SEMI()) {
            instrs[wc++] = { tag: "POP" };
            instrs[wc++] = { tag: "LDC", val: new UnitRustValue() }
        }
    }

    // expressionWithBlock: blockExpression | ifExpression | loopExpression 
    // 
    // loopExpression: PredicateLoopExpression

    // TODO: MUST ASSIGN VALUE TO VARIABLE?
    // letStatement
    // : outerAttribute* KW_LET patternNoTopAlt (COLON type_)? (EQ expression)? SEMI
    // ;
    visitLetStatement(ctx: LetStatementContext): string {
        let symbol = this.visit(ctx.patternNoTopAlt()) // no instruction, just look up symbol

        const type: CompileTimeType = this.visit(ctx.type_());
        log(`SIZE: ${type.getSize()}`, "LET_STATEMENT")

        instrs[wc++] = {
            tag: "STACK_ALLOCATE", 
            pos: ce.compile_time_environment_position(symbol),
            size: type.getSize()
        };

        this.visit(ctx.expression()) // load expression address onto OS
        
        log(`SYMBOL: ${symbol}`, "LET_STATEMENT")
        log(`EXPR: ${ctx.expression()}`, "LET_STATEMENT")

        instrs[wc++] = {
            tag: "COPY_OR_MOVE", 
            pos: ce.compile_time_environment_position(symbol),
        };
        
        return symbol;
    }

    // constantItem
    // : KW_CONST (identifier | UNDERSCORE) COLON type_ (EQ expression)? SEMI
    // ;
    visitConstantItem(ctx: ConstantItemContext): undefined {
        let symbol = this.visit(ctx.identifier())

        const type: CompileTimeType = this.visit(ctx.type_());

        instrs[wc++] = {
            tag: "STACK_ALLOCATE", 
            pos: ce.compile_time_environment_position(symbol),
            size: type.getSize()
        };

        this.visit(ctx.expression()) // load expression address onto OS

        log(`SYMBOL: ${symbol}`, "CONSTANT_ITEM")
        log(`EXPR: ${ctx.expression()}`, "CONSTANT_ITEM")
        
        instrs[wc++] = {
            tag: "COPY_OR_MOVE", 
            pos: ce.compile_time_environment_position(symbol),
        };
    }

    // identifierPattern
    // : KW_REF? KW_MUT? identifier (AT pattern)?
    // ;
    visitIdentifierPattern(ctx: IdentifierPatternContext): string {
        return this.visit(ctx.identifier());
    }

    visitIdentifier(ctx: IdentifierContext): string {
        return ctx.getText();
    }

    visitWildcardPattern(ctx: WildcardPatternContext) {
        return "_"
    }

    // ------------------------------ TYPE ---------------------------------------------
    
    visitTypeNoBounds(ctx: TypeNoBoundsContext): CompileTimeType {
        if (ctx.traitObjectTypeOneBound()) { // primitive type
            const type_name: string = this.visitChildren(ctx)

            switch(type_name) {
                case "i32":
                    return CompileTimeTypeSentinels.I32;
                case "f64":
                    return CompileTimeTypeSentinels.F64;
                case "bool":
                    return CompileTimeTypeSentinels.Boolean;
                case "char":
                    return CompileTimeTypeSentinels.Char;
                case "string":
                    return CompileTimeTypeSentinels.String;
                default:
                    break;
            }
        }

        if (ctx.tupleType()) { 
            return CompileTimeTypeSentinels.Unit;
        }

        if (ctx.referenceType()) { // reference
            return CompileTimeTypeSentinels.Ref;
        }

        if (ctx.bareFunctionType()) {
            return this.visit(ctx.bareFunctionType())
        }

        // : LSQUAREBRACKET type_ SEMI expression RSQUAREBRACKET
        if (ctx.arrayType()) {
            const length: number = this.getIntegerLiteral((ctx.arrayType().expression().getChild(0) as LiteralExpressionContext))
            const containedType: CompileTimeType = this.visit(ctx.arrayType().type_())
            return new ArrayType(containedType, length)
        }

        throw new Error(`Compile Error; [CompilerRust::visitTypeNoBounds] Unsupported type. Found ${ctx.getText()}`);
    }

    visitBareFunctionType(ctx: BareFunctionTypeContext): CompileTimeType {
        return ctx.bareFunctionReturnType() 
                ? this.visit(ctx.bareFunctionReturnType())
                : CompileTimeTypeSentinels.Unit
    }

    visitBareFunctionReturnType(ctx: BareFunctionReturnTypeContext): CompileTimeType {
        return this.visit(ctx.typeNoBounds())
    }

    // this default result should NEVER be used
    protected defaultResult(): string {
        return "SHOULD NOT USE THIS RESULT";
    }
    
    // Override the aggregate result method
    protected aggregateResult(aggregate: string, nextResult: string): string {
        return nextResult;
    }
}
