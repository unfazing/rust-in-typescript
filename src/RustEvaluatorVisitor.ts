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
import { RustParserVisitor } from "./parser/src/RustParserVisitor"
import { compile_time_environment_extend, compile_time_environment_position, global_compile_environment } from './RustCompileTimeEnv.js';
import { error } from 'console';
// wc: write counter
let wc = 0;
// instrs: instruction array
let instrs = [];
let ce = global_compile_environment;

const LOGGING_ENABLED = true; // Set to false to disable logging

const FUNCTIONS_LOGGING = {
    "CRATE": true,
    "LITERAL_EXPRESSION": true,
    "PATH_EXPRESSION": true,
    "LET_STATEMENT": true,
    "CONSTANT_ITEM": true,
    "ASSIGNMENT_EXPRESSION": true,
    "IDENTIFIER_PATTERN": true,
    "BLOCK_EXPRESSION": true,
    "FUNCTION": true,
    "FUNCTION->CLOSURE": true,
    "RETURN_EXPRESSION": true,
    "CALL_EXPRESSION": true,
    "ARITHMETIC_OR_LOGICAL_EXPRESSION": true,
    "COMPARISON_EXPRESSION": true

}

function log(message: any, enclosing_function: string): void {
    if (LOGGING_ENABLED) {
        if (FUNCTIONS_LOGGING[enclosing_function]) {
            console.log(`[${enclosing_function}] --- ${message}`);
        }
    }
}

export class RustEvaluatorVisitor extends AbstractParseTreeVisitor<any> implements RustParserVisitor<any> {
    // entry node
    visitCrate (ctx: CrateContext): object[] {
        // scan out local declarations in the global frame
        // in our Rust sublanguage, global frames only allow function declarations and constant declarations.
        let locals = [];
        ctx.item().forEach(item => {
            log(`SCANNING OUTER MOST BLOCK: ${item.getText()}`, "CRATE");
            
            if (item.visItem()) {
                const visItem = item.visItem();
                
                if (visItem.function_()) {
                    const symbol = this.visit(visItem.function_().identifier());
                    log(`FOUND FUNCTION LOCAL SYMBOL: ${symbol}`, "CRATE");
                    locals.push(symbol);
                }
                else if (visItem.constantItem()) {
                    const symbol = this.visit(visItem.constantItem().identifier());
                    log(`FOUND CONST LOCAL SYMBOL: ${symbol}`, "CRATE");
                    locals.push(symbol);
                } else {
                    // throw error
                }
            }
        });

        instrs[wc++] = { tag: "ENTER_SCOPE", num: locals.length }
        ce = compile_time_environment_extend(locals, ce)
        log(`ENVIRONMENT: ${ce}`, "CRATE")
        this.visitChildren(ctx);
        instrs[wc++] = { tag: "EXIT_SCOPE" }
        instrs[wc] = { tag: "DONE" }

        return instrs; // return the instructions list directly
    }

    // leaf node
    visitLiteralExpression(ctx: LiteralExpressionContext): String {
        instrs[wc++] = { tag: "LDC", val: ctx.getText() } // TODO: cast the val to the actual type in typescript instead of string
        log(`LOAD CONSTANT: ${ctx.getText()}`, "LITERAL_EXPRESSION")
        return ctx.getText();
    }

    // leaf node
    visitPathExpression(ctx: PathExpressionContext): String {
        let symbol = this.visitChildren(ctx)
        instrs[wc++] = {
            tag: "LD",
            sym: symbol,
            pos: compile_time_environment_position(ce, symbol)
        }
        log(`LOAD VARIABLE: ${symbol}`, "PATH_EXPRESSION")
        return symbol
    }

    // TODO: MUST ASSIGN VALUE TO VARIABLE?
    // letStatement
    // : outerAttribute* KW_LET patternNoTopAlt (COLON type_)? (EQ expression)? SEMI
    // ;
    visitLetStatement (ctx: LetStatementContext): String {
        let symbol = this.visit(ctx.patternNoTopAlt())
        let expr = this.visit(ctx.expression())
        log(`SYMBOL: ${symbol}`, "LET_STATEMENT")
        log(`EXPR: ${expr}`, "LET_STATEMENT")
        
        if (symbol.startsWith("mut ")) {
            instrs[wc++] = {
                tag: "MUT_ASSIGN", // mutable assign
                pos: compile_time_environment_position(ce, symbol.substring(4)),
            };
        } else {
            instrs[wc++] = {
                tag: "ASSIGN", // immutable assign
                pos: compile_time_environment_position(ce, symbol),
            };
        }
        return symbol;
    }

    // constantItem
    // : KW_CONST (identifier | UNDERSCORE) COLON type_ (EQ expression)? SEMI
    // ;
    visitConstantItem(ctx: ConstantItemContext): undefined {
        let symbol = this.visit(ctx.identifier())
        let expr = this.visit(ctx.expression())
        log(`SYMBOL: ${symbol}`, "CONSTANT_ITEM")
        log(`EXPR: ${expr}`, "CONSTANT_ITEM")
        
        instrs[wc++] = {
            tag: "ASSIGN", // immutable assign
            pos: compile_time_environment_position(ce, symbol),
        };
    }


    // expression EQ expression
    visitAssignmentExpression(ctx: AssignmentExpressionContext): undefined {
        let symbol = this.visitChildren(ctx.expression(0).getChild(0)) // visit children of pathExpression to avoid adding LD instr
        log(`SYMBOL: ${symbol}`, "ASSIGNMENT_EXPRESSION")
        let expr = this.visit(ctx.expression(1)) // TODO: !!! this should somehow save the evaluated value to OP stack
        
        log(`EXPR: ${expr}`, "ASSIGNMENT_EXPRESSION")
        
        instrs[wc++] = {
            tag: "ASSIGN", // immutable assign
            pos: compile_time_environment_position(ce, symbol),
        };
    }

    // identifierPattern
    // : KW_REF? KW_MUT? identifier (AT pattern)?
    // ;
    visitIdentifierPattern(ctx: IdentifierPatternContext): String {
        if (ctx.KW_MUT() != null) {
            // pass mutability information up to LetStatement
            log(`FOUND MUT ${ctx.identifier().getText()}`, "IDENTIFIER_PATTERN")
            return "mut " + ctx.identifier().getText(); // append "mut" + whitespace to identifier
        } else {
            return ctx.identifier().getText();
        }
    }

    visitIdentifier(ctx: IdentifierContext): String {
        return ctx.getText();
    }

    // blockExpression
    // : LCURLYBRACE innerAttribute* statements? RCURLYBRACE
    // ;
    visitBlockExpression (ctx: BlockExpressionContext): undefined {
        if (ctx.statements() == null) {
            return;
        }
        
        // scan out local declarations - TODO: there cant be nested sequences right?
        let locals = [];
        log(`<<< SCANNING OUT LOCAL DECLARATIONS >>>`, "BLOCK_EXPRESSION");

        const statements = ctx.statements().statement();
        for (let i = 0; i < statements.length; i++) {
            const stmt = ctx.statements().statement(i).getChild(0); // each statement can only have 1 child
            // log(`SCANNING STATEMENT ${i}: ${stmt.getText()}`, "BLOCK_EXPRESSION");
            if (stmt instanceof LetStatementContext) {
                let symbol = this.visit(stmt.patternNoTopAlt())
                symbol = symbol.startsWith("mut ") ? symbol.substring(4) : symbol;
                log(`FOUND LET LOCAL SYMBOL: ${symbol}`, "BLOCK_EXPRESSION");
                locals.push(symbol);
            } else if (stmt instanceof ItemContext) {
                if (stmt.visItem() != null) {
                    if (stmt.visItem().function_() != null) {
                        let symbol = this.visit(stmt.visItem().function_().identifier())
                        log(`FOUND FUNCTION LOCAL SYMBOL: ${symbol}`, "BLOCK_EXPRESSION");
                        locals.push(symbol);
                    } else if (stmt.visItem().constantItem() != null) {
                        let symbol = this.visit(stmt.visItem().constantItem().identifier())
                        log(`FOUND CONST LOCAL SYMBOL: ${symbol}`, "BLOCK_EXPRESSION");
                        locals.push(symbol);
                    }
                }
            }
        }
        log(`<<< SCANNING COMPLETE >>>`, "BLOCK_EXPRESSION");
        instrs[wc++] = { tag: "ENTER_SCOPE", num: locals.length };
        ce = compile_time_environment_extend(locals, ce)
		this.visitChildren(ctx);
		instrs[wc++] = { tag: "EXIT_SCOPE" };
    }

    // function_
    // : functionQualifiers KW_FN identifier genericParams? LPAREN functionParameters? RPAREN functionReturnType? whereClause? (
    //     blockExpression
    //     | SEMI
    // )
    // ;
    visitFunction_ (ctx: Function_Context): undefined {
        let symbol = this.visit(ctx.identifier())
        let params = ctx.functionParameters()
        let body = ctx.blockExpression()
        log(`SYMBOL: ${symbol}`, "FUNCTION")
        this.insertClosure(params, body)
        instrs[wc++] = {
            tag: "ASSIGN", // immutable assign
            pos: compile_time_environment_position(ce, symbol),
        };
    }

    insertClosure(params_ctx: FunctionParametersContext, body_ctx: BlockExpressionContext): undefined {
        log(`<<< INSERTING CLOSURE >>>`, "FUNCTION->CLOSURE")
        let arity = params_ctx == null || params_ctx.functionParam() == null ? 0 : params_ctx.functionParam().length
        instrs[wc++] = { tag: "LDF", arity: arity, addr: wc + 1}
        const goto_instruction = { tag: "GOTO", addr: -1 }
        instrs[wc++] = goto_instruction
        let param_list =  []
        for (let i = 0; i < arity; i++) {
            param_list.push(this.visit(params_ctx.functionParam(i)))
        }
        log(`PARAM LIST: ${param_list}`, "FUNCTION->CLOSURE")
        ce = compile_time_environment_extend(param_list, ce)
        this.visit(body_ctx)
        instrs[wc++] = { tag: "LDC", val: undefined}
        instrs[wc++] = { tag: "RESET" }
        goto_instruction.addr = wc
        log(`<<< CLOSURE INSERT COMPLETE >>>`, "FUNCTION->CLOSURE")
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
    visitCallExpression(ctx: CallExpressionContext): String {
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

    visitArithmeticOrLogicalExpression (ctx: ArithmeticOrLogicalExpressionContext): undefined {
        this.visit(ctx.expression(0))
        this.visit(ctx.expression(1))
        let symbol = ctx.AND() != null
                        ? "&&"
                        : ctx.OR() != null
                        ? "||"
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

    // expression comparisonOperator expression 
    visitComparisonExpression(ctx: ComparisonExpressionContext): undefined {
        const op1: String = this.visit(ctx.expression(0));
        const op2: String = this.visit(ctx.expression(1));

        const op: ComparisonOperatorContext = ctx.comparisonOperator(); 
        const symbol = op.EQEQ() 
                        ? "==="
                        : op.GE()
                        ? '>='
                        : op.GT
                        ? ">"
                        : op.LE
                        ? "<="
                        : op.LT
                        ? "<"
                        : op.NE()
                        ? "!=="
                        : error('Unknown comparison operator')

        instrs[wc++] = { tag: "BINOP", sym: symbol }

        log(`OP1: ${op1}`, "COMPARISON_EXPRESSION")
        log(`OP2: ${op2}`, "COMPARISON_EXPRESSION")
        log(`SYMBOL: ${symbol}`, "COMPARISON_EXPRESSION")
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
                error("Error: Undefined expression")
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

		instrs[wc++] = { tag: "LDC", val: undefined }; // while loops always have the unit type () in Rust!!
    }

    // Override the default result method from AbstractParseTreeVisitor
    protected defaultResult(): String {
        return instrs.map(obj => JSON.stringify(obj)).join("\n ");
    }
    
    // Override the aggregate result method
    protected aggregateResult(aggregate: String, nextResult: String): String {
        return nextResult;
    }
}

