import { AbstractParseTreeVisitor, ParseTree } from "antlr4ng";
import { CrateContext, ExpressionContext, FunctionBlockExpressionContext } from "./parser/src/RustParser.js";
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
import { ClosureType, compare_type, compare_types, extend_type_environment, global_type_environment, ImmutableRefType, lookup_type, MutableRefType, RefType, restore_type_environment, ScalarType, ScalarTypeName, Type, UndefinedType, unparse_type } from "./RustTypeEnv.js";
import { error } from "console";
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
    "COMPARISON_EXPRESSION": true,
    "LAZY_BOOLEAN_EXPRESSION": true,
    "FUNCTION_": true
}

function log(message: any, enclosing_function: string): void {
    if (LOGGING_ENABLED) {
        console.log(`[${enclosing_function}] --- ${message}`)
    } else if (FUNCTIONS_LOGGING[enclosing_function]) {
        console.log(`[${enclosing_function}] --- ${message}`)
    }

}

let te: {[key:string]: Type}[] = global_type_environment // an array of frame objects that map symbol to type

// Notes:
// Usually, visiting all the way to leaf nodes returns Type object (Tyoe defined in RustTypeEnv.ts)
// The only leaf node that returns string is 'Identifier'
// The 'IdentifierPattern' node will return a [boolean, string] tuple, representing is_mut and symbol name.
class TypeCheckerVisitor extends AbstractParseTreeVisitor<any> implements RustParserVisitor<any> {
        // entry node
        visitCrate (ctx: CrateContext): Type {
            let locals: string[] = []
            let typelist: Type[] = []
            ctx.item().forEach(item => {
                log(`SCANNING OUTER MOST BLOCK: ${item.getText()}`, "CRATE");
                
                if (item.visItem()) {
                    const visItem = item.visItem();
                    
                    if (visItem.function_()) {
                        const fun_ctx: Function_Context = visItem.function_()
                        const symbol = this.visit(fun_ctx.identifier());
                        const paramTypes: Type[] = fun_ctx.functionParameters() ? this.visit(fun_ctx.functionParameters()) : []         
                        const returnType: Type = fun_ctx.functionReturnType() ? this.visit(fun_ctx.functionReturnType()) : UndefinedType 
                        const type: ClosureType = new ClosureType(paramTypes, returnType)
                        
                        log(`FOUND FUNCTION LOCAL SYMBOL: ${symbol} WITH TYPE ${unparse_type(type)}`, "CRATE");
                        locals.push(symbol);
                        typelist.push(type)
                    }
                    else if (visItem.constantItem()) {
                        const symbol = this.visit(visItem.constantItem().identifier());

                        if (!visItem.constantItem().type_()) {
                            error(`Missing type for constant ${symbol}.`);
                        }

                        const type: Type = this.visit(visItem.constantItem().type_());

                        log(`FOUND CONST LOCAL SYMBOL: ${symbol} WITH TYPE ${unparse_type(type)}`, "CRATE");
                        locals.push(symbol);
                        typelist.push(type)
                    } else {
                        error("Unsupported Item type found in outermost scope. Only function and constant declaration allowed.")
                    }
                }
            });
            te = extend_type_environment(locals, typelist, te)
            log(`TYPE ENVIRONMENT: ${JSON.stringify(te)}`, "CRATE")
            return this.visitChildren(ctx)
        }
    
        // leaf node: returns the type of literal value
        visitLiteralExpression(ctx: LiteralExpressionContext): Type {
            const type: ScalarTypeName =  ctx.CHAR_LITERAL()
                                        ? "char"
                                        // : ctx.STRING_LITERAL()
                                        // ? "str" // TODO: which one are we implementing? String:: vs &str
                                        : ctx.FLOAT_LITERAL()
                                        ? "f64"
                                        : ctx.INTEGER_LITERAL()
                                        ? "i32"
                                        : ctx.KW_FALSE() || ctx.KW_TRUE()
                                        ? "bool"
                                        : "UNKNOWN"
            if (type === "UNKNOWN") {
                error(`Unknown type for literal expression: ${ctx.getText()}`)
            }
            log(`EXPRESSION: ${ctx.getText()}, HAS TYPE: ${type}`, "LITERAL_EXPRESSION")
            return new ScalarType(type, undefined) // mutability does not apply to literals, only variables
        }

        // leaf node: returns the type of the symbol (by looking up type env)
        visitPathExpression(ctx: PathExpressionContext): Type {
            const symbol = this.visitChildren(ctx)
            const type: Type = lookup_type(symbol, te)
            log(`SYMBOL: ${symbol}, HAS TYPE: ${type}`, "PATH_EXPRESSION")
            return type;
        }

        // (AND | ANDAND) KW_MUT? expression
        visitBorrowExpression(ctx: BorrowExpressionContext): Type {
            const is_mut: boolean = (ctx.KW_MUT() != null)
            const inner_type: Type = this.visit(ctx.expression());
            log(`BORROW HAS INNER_TYPE: ${unparse_type(inner_type)}, AND IS_MUTABLE: ${is_mut}`, "BORROW_EXPRESSION");

            if (ctx.AND()) {
                let ref_type: RefType = is_mut ? new MutableRefType(inner_type) : new ImmutableRefType(inner_type)
                return ref_type;
            }

            if (ctx.ANDAND()) {
                let inner_ref_type: RefType = is_mut ? new MutableRefType(inner_type) : new ImmutableRefType(inner_type)
                let outer_ref_type: RefType = new ImmutableRefType(inner_ref_type);
                return outer_ref_type;
            }
        }

        // STAR expression
        visitDereferenceExpression(ctx: DereferenceExpressionContext): Type {
            const expr_type: Type = this.visit(ctx.expression()) // this must be a ref type
            log(`TRYING TO DEREFERENCE AN EXPRESSION WITH TYPE: ${unparse_type(expr_type)}`, "DEREFERENCE_EXPRESSION");

            if (!(expr_type instanceof RefType)) {
                error(`Type error; dereferencing a non-reference type: ${unparse_type(expr_type)}`);
                return; // prevent TS lint from throwing type error
            }
            log(`FOUND INNER TYPE: ${unparse_type(expr_type.InnerType)}`, "DEREFERENCE_EXPRESSION");
            return expr_type.InnerType; // question: do we miss any info about the type mutability?
        }

        // leaf node: returns the type declared in the declaration statement
        visitType_(ctx: Type_Context): Type {
            if (!ctx.typeNoBounds()) {
                error("Unsupported type.");
            }

            return this.visitChildren(ctx);
        }

        visitTypeNoBounds(ctx: TypeNoBoundsContext): Type {
            if (ctx.traitObjectTypeOneBound()) { // primitive type
                return new ScalarType(this.visitChildren(ctx));
            } 
            
            if (ctx.tupleType()) { // undefined type "()"
                return this.visit(ctx.tupleType())
            }

            if (ctx.referenceType()) { // reference
                return this.visit(ctx.referenceType());
            }

            if (ctx.bareFunctionType()) { // function
                return this.visit(ctx.bareFunctionType())
            } 
            
            error("Unsupported type.");
        };

        // referenceType
        // : AND lifetime? KW_MUT? typeNoBounds
        visitReferenceType(ctx: ReferenceTypeContext): Type {
            const is_mut: boolean = (ctx.KW_MUT() != null)
            const inner_type: Type = this.visit(ctx.typeNoBounds());
            log(`REFERENCE HAS INNER_TYPE: ${unparse_type(inner_type)}, AND IS_MUTABLE: ${is_mut}`, "REFERENCE_EXPRESSION");
            
            let ref_type: RefType = is_mut ? new MutableRefType(inner_type) : new ImmutableRefType(inner_type);
            return ref_type;
        }

        visitBareFunctionType(ctx: BareFunctionTypeContext): Type {
            const closure: ClosureType = new ClosureType(
                this.visit(ctx.functionParametersMaybeNamedVariadic()),
                ctx.bareFunctionReturnType() ? UndefinedType : this.visit(ctx.bareFunctionReturnType())
            )
            log(`BARE FUNCTION HAS TYPE ${unparse_type(closure)}`, "BARE_FUNCTION_TYPE");

            return closure;
        }

        visitMaybeNamedFunctionParameters(ctx: MaybeNamedFunctionParametersContext): Type[] {
            let result: Type[] = [];

            for (let i = 0; i < ctx.maybeNamedParam().length; i++) {
                const param_type: Type = this.visit(ctx.maybeNamedParam(i).type_());
                result.push(param_type);
            }
            return result;
        }

        visitBareFunctionReturnType(ctx: BareFunctionReturnTypeContext): Type {
            return this.visit(ctx.typeNoBounds())
        }

        visitFunctionParameters(ctx: FunctionParametersContext): Type[] {
            let result: Type[] = [];

            for (let i = 0; i < ctx.functionParam().length; i++) {
                const param_type: Type = this.visit(ctx.functionParam(i).functionParamPattern().type_());
                result.push(param_type);
            }
            
            return result;
        }

        visitFunctionReturnType(ctx: FunctionReturnTypeContext): Type {
            if (!ctx.type_()) {
                return UndefinedType;
            } else {
                return this.visit(ctx.type_());
            }
        }

        // tupleType
        // : LPAREN ((type_ COMMA)+ type_?)? RPAREN
        // ;
        // Returns unit type "()". This is the equivalent of "undefined" in js.
        visitTupleType(ctx: TupleTypeContext): Type {
            if (ctx.type_().length == 0) {
                return UndefinedType;
            } else {
                error("Tuple type not supported.")
            }
        }
    
        // letStatement
        // : outerAttribute* KW_LET patternNoTopAlt (COLON type_)? (EQ expression)? SEMI
        // ;
        visitLetStatement (ctx: LetStatementContext): Type {
            // Question: why look up type in environment when the type is declared?
            // Not sure if scanning out into type environment works correctly now, would serve as a sanity check when we run
            // Can directly access type when confident.
            const [_, symbol]: [boolean, string] = this.visit(ctx.patternNoTopAlt());
            const expected_type: Type = lookup_type(symbol, te);
            const actual_type: Type = this.visit(ctx.expression()); // either a literal expression, a pathExpression or a callExpression
            log(`SYMBOL: ${symbol}, EXPECTED_TYPE: ${unparse_type(expected_type)}, ACTUAL TYPE: ${unparse_type(actual_type)}`, "LET_STATEMENT");

            if (!compare_type(expected_type, actual_type)) {
                error(`Type error in let statement; Expected type: ${unparse_type(expected_type)}, actual type: ${unparse_type(actual_type)}.`);
            }

            // TODO: implement ownership transfer (move)

            return UndefinedType // statements produce undefined
        }
    
        // constantItem
        // : KW_CONST (identifier | UNDERSCORE) COLON type_ (EQ expression)? SEMI
        // ;
        visitConstantItem(ctx: ConstantItemContext): Type {
            const [_is_mut, symbol]: [boolean, string] = this.visit(ctx.identifier());
            const expected_type: Type = lookup_type(symbol, te);
            const actual_type: Type = this.visit(ctx.expression());
            log(`SYMBOL: ${symbol}, EXPECTED_TYPE: ${unparse_type(expected_type)}, ACTUAL TYPE: ${unparse_type(actual_type)}`, "CONSTANT_ITEM");


            if (!compare_type(expected_type, actual_type)) {
                error(`Type error in constant declaration; Expected type: ${unparse_type(expected_type)}, actual type: ${unparse_type(actual_type)}.`);
            }

            return UndefinedType // statements produce undefined
        }
    
        // expression EQ expression
        visitAssignmentExpression(ctx: AssignmentExpressionContext): Type {
            const expected_type: Type = this.visit(ctx.expression(0)); // type lookup done in pathExpression node
            const actual_type: Type = this.visit(ctx.expression(1));
            log(`EXPECTED_TYPE: ${expected_type}, ACTUAL TYPE: ${actual_type}`, "ASSIGNMENT_EXPRESSION");

            if (!compare_type(expected_type, actual_type)) {
                error(`Type error in assignment; Expected type: ${unparse_type(expected_type)}, actual type: ${unparse_type(actual_type)}.`);
            }

            if (!expected_type.Mutable) {
                error('Tried to assign when variable is immutable!')
            }
            // TODO: implement ownership transfer (move)

            return UndefinedType // assigment/expression in Rust produce undefined! DIFFERENT FROM OTHER LANGUAGES
        }
        
        // identifierPattern
        // : KW_REF? KW_MUT? identifier (AT pattern)?
        // ;
        // 
        // An identifierPattern is the name/symbol of a newly declared variable.
        // 
        // Return a tuple, where first element is 
        // whether the variable is mutable and
        // the second element is the variable name
        visitIdentifierPattern(ctx: IdentifierPatternContext): [boolean, string] {
            return (ctx.KW_MUT() != null, this.visit(ctx.identifier()))
        }

        // Return the string representation of the identifier
        // the identifier is overloaded! It can either be:
        // 1. the symbol of a variable (e.g. x)
        // 2. the type of the variable (e.g. i32)
        visitIdentifier(ctx: IdentifierContext): string {
            return ctx.getText();
        }

        // blockExpression
        // : LCURLYBRACE innerAttribute* statements? RCURLYBRACE
        // ;
        visitBlockExpression (ctx: BlockExpressionContext): Type {
            // Scan out all local declarations and their types
            // Declarations are:
            // 1. let statement
            // 2. constant item
            // 3. function declaration (function_)

            let syms: string[] = [];
            let types: Type[] = [];

            const statements = ctx.statements().statement();
            statements.forEach(statement => {
                
                const stmt = statement.getChild(0) // each statement can only have 1 child
                
                // log(`SCANNING STATEMENT ${i}: ${stmt.getText()}`, "BLOCK_EXPRESSION");

                if (stmt instanceof LetStatementContext) {
                    let [is_mut, symbol]: [boolean, string] = this.visit(stmt.patternNoTopAlt());

                    if (!stmt.type_()) {
                        error(`Missing type declaration for ${symbol}.`);
                    }

                    let type: Type = this.visit(stmt.type_());
                    type.Mutable = is_mut;

                    log(`FOUND LET LOCAL SYMBOL: ${symbol} WITH TYPE ${unparse_type(type)}`, "BLOCK_EXPRESSION");
                    syms.push(symbol);
                    types.push(type);

                } else if (stmt instanceof ItemContext) {
                    if (stmt.visItem()) {
                        if (stmt.visItem().function_()) {
                            const fun_ctx = stmt.visItem().function_()
                            let symbol: string = this.visit(fun_ctx.identifier())
                            let paramTypes: Type[] = fun_ctx.functionParameters() ? this.visit(fun_ctx.functionParameters()) : []
                            let returnType: Type = fun_ctx.functionReturnType() ? this.visit(fun_ctx.functionReturnType()) : UndefinedType
                            const closure: ClosureType = new ClosureType(paramTypes, returnType)

                           
                            log(`FOUND FUNCTION LOCAL SYMBOL: ${symbol} WITH TYPE ${unparse_type(closure)}`, "BLOCK_EXPRESSION");
                            syms.push(symbol);
                            types.push(closure);

                        } else if (stmt.visItem().constantItem()) {
                            let symbol: string = this.visit(stmt.visItem().constantItem().identifier())

                            if (!stmt.visItem().constantItem().type_()) {
                                error(`Missing type declaration for constant ${symbol}.`);
                            }

                            let type: Type = this.visit(stmt.visItem().constantItem().type_());

                            log(`FOUND CONST LOCAL SYMBOL: ${symbol} WITH TYPE ${symbol}`, "BLOCK_EXPRESSION");
                            syms.push(symbol);
                            types.push(type);
                        }
                    }
                }
            })

            te = extend_type_environment(syms, types, te);

            // type check each statement in the block.
            // the type of the block is the type of the LAST statement/expression in the block.
            let blockType: Type = UndefinedType;
            statements.forEach(statement => {
                log(`Visiting child statement ${statement.getText()}`, "BLOCK_EXPRESSION");
                blockType = this.visit(statement);
            });

            te = restore_type_environment(te);

            return blockType;
        }
    
        // function_
        // : functionQualifiers KW_FN identifier genericParams? LPAREN functionParameters? RPAREN functionReturnType? whereClause? (
        //     blockExpression
        //     | SEMI
        // )
        // ;
        visitFunction_ (ctx: Function_Context): Type {
            const expected_return_type: Type = ctx.functionReturnType() ? this.visit(ctx.functionReturnType()) : UndefinedType
            const param_types: Type[] = ctx.functionParameters() ? this.visit(ctx.functionParameters()) : []
            const param_names: string[] = []
            let arity = ctx.functionParameters() == null || ctx.functionParameters().functionParam() == null 
                        ? 0
                        : ctx.functionParameters().functionParam().length
            log(`ARITY: ${arity}`, "FUNCTION_")
            for (let i = 0; i < arity; i++) {
                param_names.push(this.visit(ctx.functionParameters().functionParam(i).functionParamPattern().pattern())) // enters identifier()
            }
            log(`PARAM LIST: ${param_names}, PARAM TYPES: ${param_types.map(x => unparse_type(x))}`, "FUNCTION")

            te = extend_type_environment(param_names, param_types, te)
            const body_type  = this.visit(ctx.functionBlockExpression())
            te = restore_type_environment(te)

            if (!compare_type(expected_return_type, body_type)) {
                error(`Function body returns ${unparse_type(body_type)} instead of the expected ${unparse_type(expected_return_type)}`)
            }

            return UndefinedType
        }

        // visitFunctionBlockExpression(ctx: FunctionBlockExpressionContext): Type {

        // }
    
    
        // KW_RETURN expression?
        visitReturnExpression(ctx: ReturnExpressionContext): Type {
            if (ctx.expression() != null) {
                return this.visit(ctx.expression())
            }
            return UndefinedType
        }
    
        // expression LPAREN callParams? RPAREN
        visitCallExpression(ctx: CallExpressionContext): Type {
            const expected_type: Type = this.visit(ctx.expression())
            log(`EXPECTED CLOSURE TYPE: ${unparse_type(expected_type)}`, "CALL_EXPRESSION");
            if (!(expected_type instanceof ClosureType)) {
                error("Type error in application; function application must have function type.")
                return; // let typescript knows fun_type must be closure
            }

            const expected_arg_types: Type[] = expected_type.ParamTypes;
            const actual_arg_types: Type[] = ctx.callParams() ? [] : this.visit(ctx.callParams());
            log(`EXPECTED ARGUMENT TYPES: ${expected_arg_types.map(x => unparse_type(x))}, ACTUAL ARGUMENT TYPES: ${actual_arg_types.map(x => unparse_type(x))}`, "CALL_EXPRESSION");
            // typecheck arguments
            if (!compare_types(expected_arg_types, actual_arg_types)) {
                error("Type error in application; argument types unmatched.")
            }
            
            return expected_type.ReturnType; 
        }
    
        visitArithmeticOrLogicalExpression (ctx: ArithmeticOrLogicalExpressionContext): Type {
            const t1: Type = this.visit(ctx.expression(0));
            const t2: Type = this.visit(ctx.expression(1));
            let symbol = ctx.PLUS()
                            ? "+"
                            : ctx.MINUS()
                            ? "-"
                            : ctx.STAR()
                            ? "*"
                            : ctx.SLASH()
                            ? "/"
                            : ctx.PERCENT()
                            ? "%"
                            : ctx.AND()
                            ? "&"
                            : ctx.OR()
                            ? "|"
                            : ctx.CARET()
                            ? "^"
                            : error(`YET TO IMPLEMENT THIS ArithmeticOrLogicalExpression SYMBOL`) 
            log(`LEFT OPERAND TYPE: ${unparse_type(t1)}, RIGHT OPERAND TYPE: ${unparse_type(t2)}, SYMBOL: ${symbol}`, "ARITHMETIC_OR_LOGICAL_EXPRESSION");
            if (compare_type(t1, t2) && (t1.TypeName === 'i32' || t1.TypeName === 'f64')) {
                return new ScalarType(t1.TypeName) // TODO: check if can just return t1 here?
            } else {
                error(`Type error; Operator '${symbol}' requires matching numeric operands, found ${unparse_type(t1)} and ${unparse_type(t2)}`);
            }
        }
                
        // | expression ANDAND expression
        // | expression OROR expression
        visitLazyBooleanExpression(ctx: LazyBooleanExpressionContext): Type {
            const t1: Type = this.visit(ctx.expression(0));
            const t2: Type = this.visit(ctx.expression(1));

            const symbol = ctx.ANDAND() != null
                ? "&&"
                : ctx.OROR() != null
                    ? "||"
                    : error('Unknown boolean operator')
        
            log(`LEFT OPERAND TYPE: ${unparse_type(t1)}, RIGHT OPERAND TYPE: ${unparse_type(t2)}, SYMBOL: ${symbol}`, "LAZY_BOOLEAN_EXPRESSION");
            // Both operands must be boolean
            if (t1.TypeName !== "bool" || t2.TypeName !== "bool") {
                error(`Type error; Boolean operator ${symbol} requires boolean operands, found ${unparse_type(t1)} and ${unparse_type(t2)}`);
            }

            return new ScalarType("bool") // TODO: check if can just return t1 here?
        }
    
        // expression comparisonOperator expression 
        visitComparisonExpression(ctx: ComparisonExpressionContext): Type {
            const t1: Type = this.visit(ctx.expression(0));
            const t2: Type = this.visit(ctx.expression(1));
    
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
                            : error('Unknown comparison operator');

            log(`LEFT OPERAND TYPE: ${unparse_type(t1)}, RIGHT OPERAND TYPE: ${unparse_type(t2)}, SYMBOL: ${symbol}`, "COMPARISON_EXPRESSION");
            if (compare_type(t1, t2) && (t1.TypeName === 'i32' || t1.TypeName === 'f64')) {
                return new ScalarType(t1.TypeName)
            } else {
                error(`Type error; Operator '${symbol}' requires matching numeric operands, found ${unparse_type(t1)} and ${unparse_type(t2)}`);
            }
        }
    
        // (MINUS | NOT) expression
        visitNegationExpression(ctx: NegationExpressionContext): Type {
            const t1: Type = this.visit(ctx.expression());
            const sym = ctx.MINUS()
                        ? "!"
                        : ctx.NOT()
                        ? "-unary"
                        : error("Unknown unary operator");

            log(`OPERAND TYPE: ${unparse_type(t1)}, SYMBOL: ${sym}`, "NEGATION_EXPRESSION");

            switch (sym) {
                case '!':
                    if (t1.TypeName !== "bool") {
                        error(`Type error; Logical NOT operator '!' requires boolean operand, found ${unparse_type(t1)}`);
                    }
                    break;

                case "-unary":
                    if (t1.TypeName !== "i32" && t1.TypeName !== 'f64') {
                        error(`Type error; Negation operator '-' requires numeric operand (i32 or f64), found ${unparse_type(t1)}`);
                    }
                    break;
            }

            return new ScalarType(t1.TypeName as ScalarTypeName); // Will be either bool or numeric
        }
    
        // test case for if else:
        // let mut x = if true { 1 } else { 0 } => ALLOWED, treated as ternary expression.
        // let mut x = if true { 42 }; => NOT ALLOWED, i32 !== undefined.
        // let mut x = if true { 42; }; => ALLOWED, undefined === undefined .
        //
        // KW_IF expression blockExpression (KW_ELSE (blockExpression | ifExpression | ifLetExpression))?
        visitIfExpression(ctx: IfExpressionContext): Type {
            const predicate: ExpressionContext = ctx.expression(); 
            const pred_type: Type = this.visit(predicate);

            if (pred_type.TypeName !== "bool") {
                error("Type error; expected predicate type: bool, " +
                    "actual predicate type: " +
                    unparse_type(pred_type))
            }

            const then_type: Type = this.visit(ctx.blockExpression(0));
            
            let else_type: Type = UndefinedType;
            if (ctx.KW_ELSE()) {
                // this is an else block: else {}
                if (ctx.blockExpression().length > 1) {
                    else_type = this.visit(ctx.blockExpression(1))
                }
                // this is an else if block: else if (expression) {} 
                else if (ctx.ifExpression()) {
                    else_type = this.visit(ctx.ifExpression());
                } else {
                    // this is an if let expression: not within scope
                    error("If let expression is out of scope.")
                }
            }

            log(`CONSEQUENT BRANCH TYPE: ${then_type}, ALTERNATIVE BRANCH TYPE: ${else_type}`, "ARITHMETIC_OR_LOGICAL_EXPRESSION");

            if (else_type === UndefinedType || compare_type(then_type, else_type)) {
                return then_type;
            } else {
                error("Type error; Types of branches not matching; " +
                    "consequent type: " + 
                    unparse_type(then_type) + ", " +
                    "alternative type: " + 
                    unparse_type(else_type))
            }
        }
    
        // KW_WHILE expression /*except structExpression*/ blockExpression
        visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): Type {
            const predicate: ExpressionContext = ctx.expression();
            const pred_type: Type = this.visit(predicate);

            log(`PREDICATE_TYPE: ${unparse_type(pred_type)}`, "PREDICATE_LOOP_EXPRESSION");

            if (pred_type.TypeName !== "bool") {
                error("Type error; expected predicate type: bool, " +
                    "actual predicate type: " +
                    unparse_type(pred_type))
            }

            this.visit(ctx.blockExpression()); // typecheck the body

            return UndefinedType // while loops always have the unit type () in Rust
        }
    
    // Override the default result method from AbstractParseTreeVisitor
    protected defaultResult(): any {
        return ""
    }
    
    // Override the aggregate result method
    protected aggregateResult(aggregate: any, nextResult: any): any {
        return nextResult;
    }
}