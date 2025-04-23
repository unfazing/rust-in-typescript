import { AbstractParseTreeVisitor, ParserRuleContext, ParseTree, TerminalNode } from "antlr4ng";
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
import { ArrayType, FunctionType, compare_type, compare_types, ImmutableRefType, MutableRefType, peek, pop, push, RefType, ReturnType, ScalarType, ScalarTypeName, StringType, Type, TypeEnvironment, UnitType, unparse_type } from "./TypeEnvRust.js";


export class RustTypeChecker {
    typechecker: TypeCheckerVisitor
    check(tree: ParseTree, logging_enabled: boolean): undefined {
        this.typechecker = new TypeCheckerVisitor(logging_enabled)
        this.typechecker.visit(tree);
    }

    getVisualisation(vis_point: VisualisationPoints): string {
        return this.typechecker.get_visualisation(vis_point)
    }
}

const IS_BLOCKTYPEFRAME = true
const IS_FUNCTIONTYPEFRAME = false

export enum VisualisationPoints {
    NONE = 0,
    MOVES = 1,
    BORROWS = 2,
    BORROWS_AND_MOVES = 3,
}

// [#borrowchecking]
// [#ownershipchecking]
// [#DESIGN]
// QUIRK

/**
 * Usually, visiting all the way to leaf nodes returns Type object (Tyoe defined in RustTypeEnv.ts)
 * The only leaf nodes that return non-Type object is 'Identifier' and 'IdentifierPattern'
 *  - 'Identifier' node will return a string, representing the symbol name
 *  - 'IdentifierPattern' node will return a [boolean, string] tuple, representing is_mut and symbol name.
*/
export class TypeCheckerVisitor extends AbstractParseTreeVisitor<any> implements RustParserVisitor<any> {
    te: TypeEnvironment // an array of frame objects that map symbol to type
    returnTypeStack: Type[] // stack of return types. Peeking it will be used to check if the return type of current scope function is correct
    logging_enabled: boolean
    te_visualisation: [number, string, string, VisualisationPoints][] = [] // array of [line number, info, te.stringify(), point]
    constructor(logging_enabled: boolean) {
        super();
        this.te = new TypeEnvironment()
        this.returnTypeStack = []
        this.logging_enabled = logging_enabled
    }

    // -------------- LOGGING AND ERROR ----------------
    log(message: any, enclosing_function: string): void {
        if (this.logging_enabled) {
            console.log(`[${enclosing_function}] --- ${message}`)
        } 
    }

    print_or_throw_error(msg: string, ctx: ParserRuleContext) {
        const line_info = `[Line: ${ctx.start.line}] ` // this line appears to be +1 when run locally, but is correct when using conductor
        if (this.logging_enabled) {
            console.error("[!!!!!ERROR] " + msg)
        } else {
            throw new Error(line_info + msg);
        }
    }

    // ---------------- VISUALISATION ------------------
    get_visualisation(point: VisualisationPoints): string {
        
        let filtered_vis: [number, string, string, VisualisationPoints][]
        switch (point) {
            case VisualisationPoints.NONE:
                return ""
                
            case VisualisationPoints.BORROWS_AND_MOVES:
                filtered_vis = this.te_visualisation
                break
                
            case VisualisationPoints.BORROWS:
                filtered_vis = this.te_visualisation.filter(([line_no, info_str, te_stringify, vis_point]) => vis_point === VisualisationPoints.BORROWS)
                break
                
            case VisualisationPoints.MOVES:
                filtered_vis = this.te_visualisation.filter(([line_no, info_str, te_stringify, vis_point]) => vis_point === VisualisationPoints.MOVES)
                break
            }
                        
        let result = ""
        for (let i = 0; i < filtered_vis.length; i++) {
            let [line_no, info_str, te_stringify, vis_point] = filtered_vis[i]
            if (i === filtered_vis.length - 1 || filtered_vis[i][0] !== filtered_vis[i + 1][0]) {
                result += (info_str + te_stringify + "\n")
            } else {
                // don't reprint `te_stringify` if same line
                result += info_str
            }
        }
        return result
    }


    add_to_type_env_visualisation(ctx: ParserRuleContext, point: VisualisationPoints, info: string) {
        const line_no: number = ctx.start.line
        const line_str: string = `[Line: ${line_no}] `
        let info_str: string = ""
        info_str += line_str
        info_str += info + "\n"
        this.te_visualisation.push([line_no, info_str, this.te.stringify() + "\n", point])
    }
    
    // ------ HELPER FUNCTIONS FOR VISITOR FUNCTIONS -----

    /**
     * Used in creation of function FunctionTypes.
     * QUIRK: In rust, when a function returns a borrow, it must have taken in that borrow as an argument. 
     * Furthermore, if the function takes in multiple borrows, then lifetime annotation is required.
     * Since out sublanguage does not support lifetime annotation, we disallow functions that return a borrow
     * to take in more than 1 borrow as argument. This is the basic lifetime elision case in rust.
     * Ensures that lifetime of borrows are valid. [#DESIGN]
     */
    checkValidParamAndReturnTypes(paramTypes: Type[], returnType: Type, ctx: ParserRuleContext) {
        // Only allow function to take in at most a single param type if returnType is RefType
        if (returnType instanceof RefType) {
            let found: boolean = false
            for (const type of paramTypes) {
                if (type instanceof RefType) {
                    if (found) {
                        this.print_or_throw_error("Type error in FunctionType construction; Function parameter can only have one reference type as lifetime annotation not supplied/supported.", ctx)
                    }

                    if (!compare_type(type, returnType)) {
                        this.print_or_throw_error("Type error in FunctionType construction; Returned ref must have same type as argument ref.", ctx)
                    }
                    found = true
                }
            }
            if (!found) {
                this.print_or_throw_error("Type error in FunctionType construction; Function must have at least one reference type as lifetime annotation not supplied/supported.", ctx)
            }
        }
    }

    /**
     * Used when we need to get the integer value from a LiteralExpressionContext (instead of returning type)
     * Presently, only used when acquiring array length/index in `visitArrayElements`, `visitArrayType`, `visitIndexExpression`
     */
    getIntegerLiteral(ctx: LiteralExpressionContext): number {
        if (ctx.INTEGER_LITERAL()) {
            return Number(ctx.getText())
        }
        this.print_or_throw_error(`Type error; [getIntegerLiteral] Array length/index literal is not a non-zero integer.`, ctx)
    }

    /**
     * Semantically, "canBeMoved" <=> "doesNotImplementCopyTrait".
     * ImmutableRefTypes and ScalarTypes have copy trait, thus ownership is not moved. Closur-es have no owners.
     * Array types are implement copy trait only if element type implements copy trait.
     */
    canBeMoved(type: Type): boolean {
        if (type instanceof ArrayType) {
            return this.canBeMoved(type.BaseType)
        }
        return !(type instanceof FunctionType) && !(type instanceof ScalarType) && !(type instanceof ImmutableRefType)
    }

    /**
     * Used when getting a symbol from a `BorrowExpression`, `PathExpression`, `IndexExpression`, `DereferenceExpression`
     * Returns a string instead of type.
     */
    getSymbolFromExpression(expr_ctx: ExpressionContext): string {
        if (expr_ctx instanceof GroupedExpressionContext || expr_ctx instanceof BorrowExpressionContext || expr_ctx instanceof DereferenceExpressionContext) {
            return this.getSymbolFromExpression(expr_ctx.expression())
        }

        if (expr_ctx instanceof IndexExpressionContext) {
            return this.getSymbolFromExpression(expr_ctx.expression(0))
        }

        if (expr_ctx instanceof PathExpression_Context) {
            this.log(`[getSymbolFromExpression] Found symbol in expression: ${expr_ctx.getText()}`, "getSymbolFromExpression")
            return this.visit(expr_ctx.pathExpression().getChild(0))
        }
        this.print_or_throw_error(`[getSymbolFromExpression] The ExpressionContext provided (${expr_ctx.getText()}) does not have a PathExpressionContext on the path to leaf node.`, expr_ctx)
    }

    // ------------ START OF VISITOR FUNCTIONS ----------------
    // ENTRY NODE
    visitCrate(ctx: CrateContext) {
        
        // log("[extend_type_environment] BEFORE: " + JSON.stringify(te.type_environment, null, 4), "CRATE");
        this.te.extend_type_environment(IS_BLOCKTYPEFRAME, "VISIT CRATE")
        // log("[extend_type_environment] AFTER: " + JSON.stringify(te.type_environment, null, 4), "CRATE");

        // Scan out only local function declarations and their types
        for (const item of ctx.item()) {
            if (item.visItem() === null) {
                this.print_or_throw_error(`Parsing error; Unknown item ${item.getText()}`, item)
            }
            if (item.visItem().function_()) {
                const fun: Function_Context = item.visItem().function_()
                const symbol: string = this.visit(fun.identifier());
                const expected_param_types: Type[] = fun.functionParameters() ? this.visit(fun.functionParameters()) : [];
                const expected_return_type: Type = fun.functionReturnType() ? this.visit(fun.functionReturnType()) : new UnitType();
                this.checkValidParamAndReturnTypes(expected_param_types, expected_return_type, fun)
                const fun_type: FunctionType = new FunctionType(expected_param_types, expected_return_type);
                
                // add symbol binding to type environment
                this.te.add_symbol_to_current_frame(symbol, fun_type);
            }
        }

        this.log(`TYPE ENVIRONMENT: ${JSON.stringify(this.te, null, 4)}`, "CRATE")
        this.visitChildren(ctx)

        this.te.restore_type_environment();
    }

    // ------------------------------ EXPRESSION ---------------------------------------------

    // leaf node: returns the Type of a literal value
    visitLiteralExpression(ctx: LiteralExpressionContext): Type {
        if (ctx.STRING_LITERAL()) {
            return new StringType()
        }

        const type: ScalarTypeName = ctx.CHAR_LITERAL()
                                        ? "char"
                                        : ctx.FLOAT_LITERAL()
                                        ? "f64"
                                        : ctx.INTEGER_LITERAL()
                                        ? "i32"
                                        : ctx.KW_FALSE() || ctx.KW_TRUE()
                                        ? "bool"
                                        : "UNKNOWN"
        if (type === "UNKNOWN") {
            this.print_or_throw_error(`Unknown type for literal expression: ${ctx.getText()}`, ctx)
        }
        this.log(`EXPRESSION: ${ctx.getText()}, HAS TYPE: ${type}`, "LITERAL_EXPRESSION")
        return new ScalarType(type) // default IsMutable === true
    }

    // leaf node: returns the Type of the symbol (by looking up Type Env)
    visitPathExpression(ctx: PathExpressionContext): Type {
        const symbol = this.visitChildren(ctx)
        let type: Type

        // `lookup_type` throws error if symbol does not exist, or looking up a variable name from outer scope
        try {type = this.te.lookup_type(symbol)} catch (e) {this.print_or_throw_error(e, ctx)}

        // Disallow any usage of a Moved variable.
        // QUIRK: this is overly strict compared to the rust typechecker. 
        // For example, we don't allow reassignment to a variable that has been moved but rust does.
        // e.g. {let x: string = "123";
        //       let mover: string = x;
        //       x = "456"; // cannot use a moved variable 'x'}
        if (type.IsMoved) {
            this.print_or_throw_error(`Type error in pathExpression; use of a moved variable '${symbol}'`, ctx)
        }

        // Disallow any usage of a Mutably Borrowed  variable.
        if (type.MutableBorrowExists) {
            this.print_or_throw_error(`Type error in pathExpression; use of a mutably borrowed variable '${symbol}'`, ctx)
        }

        this.log(`SYMBOL: ${symbol}, HAS TYPE: ${unparse_type(type)}`, "PATH_EXPRESSION")
        return type;
    }


    // (AND | ANDAND) KW_MUT? expression
    visitBorrowExpression(ctx: BorrowExpressionContext): Type {

        const is_mut_borrow: boolean = (ctx.KW_MUT() != null)
        const inner_type: Type = this.visit(ctx.expression());

        this.log(`${is_mut_borrow ? "MUTABLE" : "IMMUTABLE"} BORROW HAS INNER_TYPE: ${unparse_type(inner_type)}`, "BORROW_EXPRESSION");

        // QUIRK: Our sublanguage disallows borrowing of temporary values e.g. let x:&i32 = &42; 
        // The value being borrowed must be declared in a variable. e.g. let num: i32 = 42; let x: &i32 = &num;
        // This allows us to support stack memory optimisation on the compiler side. [#DESIGN]
        if (inner_type.IsTemporary) {
            this.print_or_throw_error(`Type error in borrow expression; cannot borrow a temporary value`, ctx);            
        }
        
        if (inner_type instanceof FunctionType) {
            this.print_or_throw_error(`Type error in borrow expression; cannot borrow a function: ${unparse_type(inner_type)}`, ctx);            
        }
            
        this.log(`AN ${is_mut_borrow ? "MUTABLE" : "IMMUTABLE"} BORROW IS BEING CREATED.`, "BORROW_EXPRESSION");
        
        // A borrow of a variable is being attempted! e.g. let y = &x;
        // [#borrowchecking]
        if (is_mut_borrow && !inner_type.IsMutable) {
            this.print_or_throw_error(`Type error in borrow expression; cannot create a mutable borrow to an immutable variable.`, ctx);
        
        } else if (inner_type.MutableBorrowExists) {
            this.print_or_throw_error(`Type error in borrow expression; cannot borrow because owner already has a mutable borrow.`, ctx);

        } else if (inner_type.ImmutableBorrowCount > 0 && is_mut_borrow) {
            this.print_or_throw_error(`Type error in borrow expression; cannot create a mutable borrow because owner already has an immutable borrow.`, ctx);
        
        } else {
            // The attempted borrow is valid! 

            // Update borrow state of inner type
            if (is_mut_borrow) {
                inner_type.MutableBorrowExists = true;
            } else {
                inner_type.ImmutableBorrowCount++;
            }

            // Save current state to type environment visualisation
            this.add_to_type_env_visualisation(
                ctx, 
                VisualisationPoints.BORROWS,
                `'${ctx.expression().getText()}' is being ${is_mut_borrow ? "mutably" : "immutably"} borrowed. Borrow Status: ${inner_type.ImmutableBorrowCount} immutable borrow(s), ${inner_type.MutableBorrowExists ? 1 : 0} mutable borrow.`
            )
        }

        if (ctx.AND()) {
            return is_mut_borrow ? new MutableRefType(inner_type) : new ImmutableRefType(inner_type)
        }

        // Ignore nestedness in updating variable's borrow status
        // e.g. on the type environment, let y = &x; vs let y = &&x; both simply adds an immutable borrow x. 
        if (ctx.ANDAND()) {
            let inner_ref_type: RefType = is_mut_borrow ? new MutableRefType(inner_type) : new ImmutableRefType(inner_type)
            let outer_ref_type: RefType = new ImmutableRefType(inner_ref_type);
            return outer_ref_type;
        }
    }

    // STAR expression
    visitDereferenceExpression(ctx: DereferenceExpressionContext): Type {
        const expr_type: Type = this.visit(ctx.expression()) // this must be a ref type
        this.log(`TRYING TO DEREFERENCE AN EXPRESSION WITH TYPE: ${unparse_type(expr_type)}`, "DEREFERENCE_EXPRESSION");

        if (!(expr_type instanceof RefType)) {
            this.print_or_throw_error(`Type error in deferencing; attempting to dereference a non-reference type '${unparse_type(expr_type)}'`, ctx);
            return new UnitType(); // prevent TS lint from throwing runtime type error when logging in `print_or_throw_error`
        }

        this.log(`FOUND INNER TYPE: ${unparse_type(expr_type.InnerType)}`, "DEREFERENCE_EXPRESSION");
        return expr_type.InnerType;
    }

    // LPAREN innerAttribute* tupleElements? RPAREN
    // TupleExpression is semantically overloaded to represent actual Tuple representations e.g. '(a, b, c)' and the unit type e.g '()'.
    visitTupleExpression(ctx: TupleExpressionContext): UnitType {
        if (ctx.tupleElements()) {
            this.print_or_throw_error("Parsing error; Tuple expression not supported", ctx);
        }

        return new UnitType();
    }

    // blockExpression
    // : LCURLYBRACE innerAttribute* statements? RCURLYBRACE
    // ;
    visitBlockExpression(ctx: BlockExpressionContext): Type {
        if (!ctx.statements()) {
            return new UnitType();
        }

        // 1. Extend the type env with a new block frame.
        this.te.extend_type_environment(IS_BLOCKTYPEFRAME, "");
        // log("[extend_type_environment] AFTER: " + JSON.stringify(te.type_environment, null, 4), "BLOCK_EXPRESSION");

        // 2. Hoist functions by scanning out function declarations and their types [#DESIGN]
        const statements = ctx.statements().statement()
        for (const stmt of statements) {
            const is_function_declaration = stmt.item()
                                            ? stmt.item().visItem()
                                                ? stmt.item().visItem().function_()
                                                : true
                                            : false
            if (is_function_declaration) {
                const fun: Function_Context = stmt.item().visItem().function_()
                const symbol: string = this.visit(fun.identifier());
                const expected_param_types: Type[] = fun.functionParameters() ? this.visit(fun.functionParameters()) : [];
                const expected_return_type: Type = fun.functionReturnType() ? this.visit(fun.functionReturnType()) : new UnitType();
                this.checkValidParamAndReturnTypes(expected_param_types, expected_return_type, fun)
                const fun_type: FunctionType = new FunctionType(expected_param_types, expected_return_type);
                
                this.te.add_symbol_to_current_frame(symbol, fun_type);
            }
        }

        // 3. Type check each statement in the block.
        // In general, the resulting type of the block is the type of the first return expression OR the last statement/expression in the block.
        // A block only evaluates to a non-Unit type by return expression or a final expression. All other statements evaluate to Unit type.
        // Example of final expression { x } as opposed to a statement { x; }
        let blockType: Type = new UnitType();
        let returned: boolean = false

        for (const statement of statements) {
            this.log(`Visiting child statement ${statement.getText()}`, "BLOCK_EXPRESSION");
            blockType = this.visit(statement)
            if (blockType instanceof ReturnType) {
                this.log(`RETURN STATEMENT ENCOUNTERED: ${statement.getText()}, BLOCK TYPE: ${unparse_type(blockType)}`, "BLOCK_EXPRESSION")
                returned = true
                break
            }
        }

        // Case: block has a final expression and no return expression before
        // Type of the block is set to the type of the final expression.
        if (!returned && ctx.statements().expression()) {
            blockType = this.visit(ctx.statements().expression())
            this.log(`FINAL EXPRESSION ENCOUNTERED: ${ctx.statements().expression().getText()}, BLOCK TYPE: ${unparse_type(blockType)}`, "BLOCK_EXPRESSION")
        }

        this.log(`FINAL EVALUATED BLOCK TYPE: ${unparse_type(blockType)}`, "BLOCK_EXPRESSION")

        // 4. Restore type environemnt by popping latest block frame and freeing borrows.
        this.te.restore_type_environment();

        return blockType;
    }

    // expression EQ expression
    visitAssignmentExpression(ctx: AssignmentExpressionContext): Type {
        
        let LHS: ExpressionContext = ctx.expression(0);
        let RHS: ExpressionContext = ctx.expression(1);

        const LHS_type: Type = this.visit(LHS); 
        const RHS_type: Type = this.visit(RHS);

        if (!LHS_type.IsMutable) {
            this.print_or_throw_error('Type error in assignment; tried to assign when variable is immutable.', ctx)
        }

        // blockExpression and ifExpression may have ReturnType
        // e.g, let x : i32 = { return 2; }
        if (RHS_type instanceof ReturnType) {
            // allows block expression to terminate early
            return RHS_type; 
        }

        // Case: LHS is a dereference expression e.g. *x = y;
        // Assignment only legal if the dereferenced borrow is a `&mut`.
        if (LHS instanceof DereferenceExpressionContext) {
            const reftype: Type = this.visit(LHS.expression());
            if (!(reftype instanceof MutableRefType)) {
                this.print_or_throw_error("Type error in assignment; cannot assign to a dereference of an immutable reference", ctx);
            } 
        } 

        // Case: LHS is a index expression e.g. arr[0] = y;
        // Assignment only legal if the array is mutable.
        if (LHS instanceof IndexExpressionContext) {
            const arrayType: Type = this.visit(LHS.expression(0))
            if (!arrayType.IsMutable) {
                this.print_or_throw_error("Type error in assignment; cannot assign to an element in an immutable array", ctx);
            }
        }

        // Case: LHS has existing borrows.
        // Cannot assign to a borrowed value
        if (LHS_type.ImmutableBorrowCount > 0 || LHS_type.MutableBorrowExists) {
            this.print_or_throw_error(`Type error in assignment; cannot assign to a borrowed value: ${unparse_type(LHS_type)}`, ctx);
        }
        
        
        if (RHS_type.IsMoved) {
            this.print_or_throw_error(`Type error in assignment; Cannot assign to a moved value.`, ctx);
        }

        this.log(`EXPECTED_TYPE: ${unparse_type(LHS_type)}, ACTUAL TYPE: ${unparse_type(RHS_type)}`, "ASSIGNMENT_EXPRESSION");

        if (!compare_type(LHS_type, RHS_type)) {
            this.print_or_throw_error(`Type error in assignment; Expected type: ${unparse_type(LHS_type)}, actual type: ${unparse_type(RHS_type)}.`, ctx);
        }

        // Case: LHS and RHS are both borrow types
        // Possible issue: dangling reference created during ref assignment
        // e.g. 
        // let mut x: &mut i32 = &mut 1;
        // {
        //     let mut y: i32 = 2;
        //     x = &mut y; // or x = &10;
        // }
        // Disallow this by comparing the scope depth of the LHS and RHS expressions.
        // RHS must be in the same or outer scope to LHS to ensure lifetime of RHS >= lifetime of LHS [#DESIGN]
        if (LHS_type instanceof RefType) {
            const lhs_symbol: string = this.getSymbolFromExpression(LHS)
            let rhs_symbol: string
            let rhs_scope_depth: number
            let lhs_scope_depth: number

            try {lhs_scope_depth = this.te.get_scope_depth(lhs_symbol);} catch (e) {this.print_or_throw_error(e, ctx)}

            if (RHS_type.IsTemporary) {
                rhs_scope_depth = this.te.get_current_environment_depth()
            } else {
                rhs_symbol = this.getSymbolFromExpression(RHS)
                try {rhs_scope_depth = this.te.get_scope_depth(rhs_symbol);} catch (e) {this.print_or_throw_error(e, ctx)}
            }

            if (lhs_scope_depth < rhs_scope_depth) {
                this.print_or_throw_error(`Type error in assignment; Lifetime of locally assigned reference shorter than variable ${lhs_symbol}.`, ctx)
            }
        }

        // An assignment that moves ownership of a variable is happening!
        if (this.canBeMoved(RHS_type)) {
            // [#ownershipchecking]
            if (RHS_type.ImmutableBorrowCount > 0 || RHS_type.MutableBorrowExists) {
                this.print_or_throw_error(`Type error in assignment; cannot move a borrowed value.`, ctx);
            } 

            if (RHS instanceof IndexExpressionContext) {
                this.print_or_throw_error(`Type error in assignment; cannot move out of a non-copy array`, ctx)
            }
            
            // The ownership movement is legal!
            RHS_type.mark_moved()
            this.log(`MARKING RHS ${RHS.getText()} AS MOVED`, "ASSIGNMENT_EXPRESSION");

            // Visualise the movement in ownership
            this.add_to_type_env_visualisation(
                ctx, 
                VisualisationPoints.MOVES, 
                `'${RHS.getText()}' is being moved to '${this.getSymbolFromExpression(LHS)}' by assignment`
            )
        }

        return new UnitType() // assignment expression in Rust produces Unit type
    }

    // KW_RETURN expression?
    visitReturnExpression(ctx: ReturnExpressionContext): ReturnType {
        const returnedType: Type = ctx.expression() ? this.visit(ctx.expression()) : new UnitType()

        if (!compare_type(returnedType, peek(this.returnTypeStack, 0))) {
            this.print_or_throw_error(`Type error in return statement; expected type: ${unparse_type(peek(this.returnTypeStack, 0))}, actual type: ${unparse_type(returnedType)}`, ctx);
        }

        const return_type = new ReturnType(returnedType)
        this.log(`RETURN TYPE: ${unparse_type(return_type)}`, "RETURN_EXPRESSION")
        return return_type
    }

    // expression (COMMA expression)* COMMA?
    visitCallParams(ctx: CallParamsContext): Type[] {
        return ctx.expression().map(expression => this.visit(expression));
    }

    // expression LPAREN callParams? RPAREN
    visitCallExpression(ctx: CallExpressionContext): Type {

        // Lookup function's Type in type environment by visiting pathExpression node
        const fun_type: Type = this.visit(ctx.expression()) 

        this.log(`EXPECTED FUNCTION TYPE: ${unparse_type(fun_type)}`, "CALL_EXPRESSION");
        
        if (!(fun_type instanceof FunctionType)) {
            this.print_or_throw_error("Type error in application; function application must have function type.", ctx)
            return new FunctionType([], new UnitType()); // let typescript knows expected_type must be function
        }

        
        // Type check arguments
        const expected_arg_types: Type[] = fun_type.ParamTypes;
        const actual_arg_types: Type[] = ctx.callParams() ? this.visit(ctx.callParams()) : [];
        this.log(`EXPECTED ARGUMENT TYPES: ${expected_arg_types.map(unparse_type)}, ACTUAL ARGUMENT TYPES: ${actual_arg_types.map(unparse_type)}`, "CALL_EXPRESSION");
        if (!compare_types(expected_arg_types, actual_arg_types)) {
            this.print_or_throw_error("Type error in application; argument types unmatched.", ctx)
        }

        // Check if any argument types can be moved.
        if (actual_arg_types.length > 0) {
            let expressions = ctx.callParams().expression();
            for (let i = 0; i < actual_arg_types.length; i++) {
                const arg_expr = expressions[i]
                const arg_type = actual_arg_types[i]
                // Variables passed to function argument moves ownership!
                if (this.canBeMoved(arg_type)) {
                    // [#ownershipchecking]
                    if (arg_type.ImmutableBorrowCount > 0 || arg_type.MutableBorrowExists) {
                        this.print_or_throw_error(`Type error in application; cannot move a borrowed value into function.`, ctx);
                    }
                    if (arg_expr instanceof IndexExpressionContext) {
                        this.print_or_throw_error(`Type error in application; cannot move out of a non-copy array`, ctx)
                    }
                    
                    // The ownership movement is legal!
                    arg_type.mark_moved();
                    this.log(`MARKING ARGUMENT AT POSITION ${i} AS MOVED`, "CALL_EXPRESSION");

                    // Visualise the movement in ownership
                    this.add_to_type_env_visualisation(
                        ctx, 
                        VisualisationPoints.MOVES,
                        `'${ctx.callParams().expression(i).getText()}' is being moved to function call of '${ctx.expression().getText()}'`
                    )
                }
            }
        }

        // Case: Function return type is a reference type.
        // We can simply return the first reference type we see in the argument list
        // invariant 1: function must have take in at most a single reftype
        // invariant 2: function must return the same reftype object taken in as argument
        if (fun_type.ReturnType instanceof RefType) {
            for (let i = 0; i < actual_arg_types.length; i++) {
                const type: Type = actual_arg_types[i]
                if (type instanceof RefType) {
                    // update borrow status of mutable ref type that was initially moved/freed
                    // QUIRK: in our sublanguage if the returned reference is not captured by the
                    // calling scope, the borrow status is not updated to free again. This results
                    // in stricter borrow checking than rust.
                    if (type instanceof MutableRefType) {
                        type.InnerType.MutableBorrowExists = true
                        this.log(`Updating inner type mutable borrow status`, "CALL_EXPRESSION")
                        this.log(`Type: ${unparse_type(type)}`, "CALL_EXPRESSION")
                        this.add_to_type_env_visualisation(
                            ctx, 
                            VisualisationPoints.BORROWS,
                            `'${ctx.callParams().expression(i).getText()}' is being returned as a mutable borrow from a call of '${ctx.expression().getText()}'. Borrow Status: ${type.InnerType.ImmutableBorrowCount} immutable borrow(s), ${type.InnerType.MutableBorrowExists ? 1 : 0} mutable borrow.`
                        )
                    }

                    return type.clone()
                }
            }
            this.print_or_throw_error(`Type error in application; function returns a local borrow (should not reach here, checked in visitFunction_).`, ctx)
        } 
        

        // Clone the object return type so the ReturnType of the FunctionType 
        // saved in environment is not destructively modified during ownership moving.
        // e.g. x = f(), y = x;
        const return_type_original = fun_type.ReturnType
        const return_type_clone = return_type_original.clone()
        return return_type_clone; 

    }

    visitArithmeticOrLogicalExpression(ctx: ArithmeticOrLogicalExpressionContext): Type {
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
                        : this.print_or_throw_error(`Type error; Unkown operator symbol`, ctx)

        this.log(`LEFT OPERAND TYPE: ${unparse_type(t1)}, RIGHT OPERAND TYPE: ${unparse_type(t2)}, SYMBOL: ${symbol}`, "ARITHMETIC_OR_LOGICAL_EXPRESSION");

        // log(JSON.stringify(te.type_environment, null, 4), "arith");

        // bitwise operation
        if ((symbol === '&') || (symbol === '|') || (symbol === '^')) {
            if (compare_type(t1, t2) && (t1.TypeName === 'i32')) return new ScalarType('i32') 
            this.print_or_throw_error(`Type error in bitwise operation; Bitwise operator '${symbol}' requires matching i32 operand types, found ${unparse_type(t1)} and ${unparse_type(t2)}`, ctx);
        }

        // MODULO operation
        if (symbol === '%') {
            if (compare_type(t1, t2) && (t1.TypeName === 'i32')) return new ScalarType('i32')
            this.print_or_throw_error(`Type error in modulo operation; Modulo operator '${symbol}' requires matching i32 operand types, found ${unparse_type(t1)} and ${unparse_type(t2)}`, ctx);
        }

        // overload "+" for strings
        if (symbol === '+') {
            if (t1.TypeName === 'string' && compare_type(t1, t2)) return new StringType()
            if ((t1.TypeName === 'i32' || t1.TypeName === 'f64') && compare_type(t1, t2)) return new ScalarType(t1.TypeName)
            this.print_or_throw_error(`Type error in addition operation; Add operator '${symbol}' requires matching i32/f64/string operand types, found ${unparse_type(t1)} and ${unparse_type(t2)}`, ctx);

        }

        // else, other arithmetic operation
        if (compare_type(t1, t2) && (t1.TypeName === 'i32' || t1.TypeName === 'f64')) { // no typecasting in our language
            return new ScalarType(t1.TypeName)
        } 
        
        this.print_or_throw_error(`Type error in arithmetic operation; Operator '${symbol}' requires matching numeric operand types, found ${unparse_type(t1)} and ${unparse_type(t2)}`, ctx);

        return new UnitType(); // prevent runtime error (return undefined)
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
                        : this.print_or_throw_error('Type error; Unknown boolean operator', ctx)

        this.log(`LEFT OPERAND TYPE: ${unparse_type(t1)}, RIGHT OPERAND TYPE: ${unparse_type(t2)}, SYMBOL: ${symbol}`, "LAZY_BOOLEAN_EXPRESSION");
        // Both operands must be boolean
        if (t1.TypeName !== "bool" || t2.TypeName !== "bool") {
            this.print_or_throw_error(`Type error in boolean operation; Boolean operator '${symbol}' requires boolean operands, found ${unparse_type(t1)} and ${unparse_type(t2)}`, ctx);
        }

        return new ScalarType("bool")
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
                        : this.print_or_throw_error('Type error; Unknown comparison operator', ctx);

        this.log(`LEFT OPERAND TYPE: ${unparse_type(t1)}, RIGHT OPERAND TYPE: ${unparse_type(t2)}, SYMBOL: ${symbol}`, "COMPARISON_EXPRESSION");

        switch (symbol) {
            case ">=":
            case "<=":
            case "<":
            case ">":
                const valid_type1 = (t1.TypeName === 'i32' || t1.TypeName === 'f64');
                const valid_type2 = (t2.TypeName === 'i32' || t2.TypeName === 'f64');
                if (!valid_type1 || !valid_type2) {
                    this.print_or_throw_error(`Type error in comparison expression; Operator '${symbol}' requires matching numeric operands, found ${unparse_type(t1)} and ${unparse_type(t2)}`, ctx);
                } 
                break;

            case "===": 
            case "!==": 
                // All types are allowed for equality comparison
                break;

            default:
                this.print_or_throw_error(`Type error; Unsupported operator: '${symbol}'`, ctx);
        }

        return new ScalarType("bool");
    }

    // (MINUS | NOT) expression
    visitNegationExpression(ctx: NegationExpressionContext): Type {
        const t1: Type = this.visit(ctx.expression());
        const sym = ctx.MINUS()
            ? "!"
            : ctx.NOT()
                ? "-unary"
                : this.print_or_throw_error("Type error; Unknown unary operator", ctx);

        this.log(`OPERAND TYPE: ${unparse_type(t1)}, SYMBOL: ${sym}`, "NEGATION_EXPRESSION");

        switch (sym) {
            case '!':
                if (t1.TypeName !== "bool") {
                    this.print_or_throw_error(`Type error; Logical NOT operator '!' requires boolean operand, found ${unparse_type(t1)}`, ctx);
                }
                break;

            case "-unary":
                if (t1.TypeName !== "i32" && t1.TypeName !== 'f64') {
                    this.print_or_throw_error(`Type error; Negation operator '-' requires numeric operand (i32 or f64), found ${unparse_type(t1)}`, ctx);
                }
                break;
        }

        return new ScalarType(t1.TypeName as ScalarTypeName); // Will be either bool or numeric
    }

    // Test cases for if else:
    // let mut x = if true { 1 } else { 0 } => ALLOWED, treated as ternary expression.
    // let mut x = if true { 42 }; => NOT ALLOWED, i32 !== undefined.
    // let mut x = if true { 42; }; => ALLOWED, undefined === undefined .
    //
    // KW_IF expression blockExpression (KW_ELSE (blockExpression | ifExpression | ifLetExpression))?
    //
    // QUIRK: Our implementation is STRICTER than rust's: require all branching blocks to evaluate to the exact same types.
    // All IfExpressions must have both if-else block, if there are else-if blocks, they also must have the same type.
    // i.e. the branching blocks are all UnitType, all ReturnType, or all same Type (as evaluated by last expression in block)
    // An implication is that during LetStatement or AssignmentExpression, ifExpression evaluates to ReturnType, then we throw type error where Rust wouldn't
    // Originally, we designed the returnTypeStack to allow different branching return types. However, this would break situations where
    // and IfExpression is used as a ternary --> in the ternary, both if-else blocks must evaluate to a Type by a final expression.
    // Additionally, we do not allow if-let expressions.
    visitIfExpression(ctx: IfExpressionContext): Type {
        const predicate: ExpressionContext = ctx.expression();
        const pred_type: Type = this.visit(predicate);

        if (pred_type.TypeName !== "bool") {
            this.print_or_throw_error(`Type error; expected predicate type: bool, actual predicate type: ${unparse_type(pred_type)}` , ctx)
        }

        const then_type: Type = this.visit(ctx.blockExpression(0));

        let else_type: Type = new UnitType();
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
                this.print_or_throw_error("Type error; If-Let expression is not supported.", ctx)
            }
        }

        this.log(`CONSEQUENT BRANCH TYPE: ${unparse_type(then_type)}, ALTERNATIVE BRANCH TYPE: ${unparse_type(else_type)}`, "IF_EXPRESSION");

        if (!compare_type(then_type, else_type)) {
            this.print_or_throw_error("Type error; Types of branches not matching; " +
                "consequent type: " + unparse_type(then_type) + ", " +
                "alternative type: " + unparse_type(else_type),
                ctx
            )
            return new UnitType(); // Prevent runtime exception
        }

        return then_type;
    }

    // KW_WHILE expression /*except structExpression*/ blockExpression
    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): Type {
        const predicate: ExpressionContext = ctx.expression();
        const pred_type: Type = this.visit(predicate); // this is a group expression: "(expression)"

        this.log(`PREDICATE_TYPE: ${unparse_type(pred_type)}`, "PREDICATE_LOOP_EXPRESSION");

        if (pred_type.TypeName !== "bool") {
            this.print_or_throw_error("Type error; expected predicate type: bool, " +
                "actual predicate type: " + unparse_type(pred_type),
                ctx
            )
        }

        // typecheck the body
        let body_type = this.visit(ctx.blockExpression()); 

        // while loops usually have the unit type () in Rust, unless a value is returned
        return body_type instanceof ReturnType ? body_type : new UnitType() 
    }

    visitBreakExpression(ctx: BreakExpressionContext) {
        return new UnitType()
    }

    visitContinueExpression(ctx: ContinueExpressionContext) {
        return new UnitType()
    }

    // LPAREN innerAttribute* expression RPAREN
    visitGroupedExpression(ctx: GroupedExpressionContext): Type {
        return this.visit(ctx.expression());
    }

    // LSQUAREBRACKET innerAttribute* arrayElements? RSQUAREBRACKET
    visitArrayExpression(ctx: ArrayExpressionContext): Type {
        return ctx.arrayElements() ? this.visit(ctx.arrayElements()) : new ArrayType([], new UnitType())
    }

    // arrayElements
    //     : expression (COMMA expression)* COMMA?
    //     | expression SEMI expression // [0; 5] == [0, 0, 0, 0, 0]
    // QUIRK: our implementation limits the value of array elements to literals, borrows, variables, arrays, or dereference expressions.
    // Disallow cases where array element is initialised like this: [f()]; 
    // Does not reduce the expressiveness of the language. User wilk simply have to create a variable with the value returned by the function call.
    visitArrayElements(ctx: ArrayElementsContext): Type {
        // SEMICOLON SYNTAX e.g. arr = [0; 5]
        if (ctx.SEMI()) {
            
            const value: ExpressionContext = ctx.expression(0)
            const type: Type = this.visit(value)
            
            if (!(value instanceof LiteralExpression_Context || 
                value instanceof PathExpression_Context || 
                value instanceof BorrowExpressionContext ||  
                value instanceof ArrayExpressionContext || 
                value instanceof DereferenceExpressionContext)
            ) this.print_or_throw_error(`Type error in array elements; Element must be a literal, variable name, or an array. Found ${value.getText()}`, ctx)
            
            // When using semicolon syntax, only copy types are allowed.
            if (this.canBeMoved(type)) {
                this.print_or_throw_error(`Type error in array elements; ${unparse_type(type)} does not have copy trait, unable to make copies into elements of the array`, ctx)
            }

            const size: number = this.getIntegerLiteral((ctx.expression(1).getChild(0) as LiteralExpressionContext))
            const copies: Type[] = [];
            for (let i = 0; i < size; i++) {
                copies.push(type.clone()); // creates a new copy of the object so that they can be dereferenced and moved
            }
            return new ArrayType(copies, type.clone())
        }

        // NORMAL SYNTAX e.g. arr = [0, 0, 0, 0, 0]
        let type: Type
        let types: Type[] = []
        for (const expr_ctx of ctx.expression()) {
            if (!(expr_ctx instanceof LiteralExpression_Context || 
                expr_ctx instanceof PathExpression_Context || 
                expr_ctx instanceof BorrowExpressionContext ||  
                expr_ctx instanceof ArrayExpressionContext || 
                expr_ctx instanceof DereferenceExpressionContext ||
                expr_ctx instanceof IndexExpressionContext)
            ) this.print_or_throw_error(`Type error in array elements; Element must be a literal, variable name, or an array. Found ${expr_ctx.getText()}`, ctx)

            const next_elem_type: Type = this.visit(expr_ctx)

            // Ownership and borrow rule checking similar to an assignment
            if (this.canBeMoved(next_elem_type)) {
                if (next_elem_type.ImmutableBorrowCount > 0 || next_elem_type.MutableBorrowExists) {
                    this.print_or_throw_error(`Type error in assignment; cannot move a borrowed value into array.`, ctx);
                } 

                if (expr_ctx instanceof IndexExpressionContext) {
                    this.print_or_throw_error(`Type error in assignment; cannot move out of a non-copy array`, ctx)
                }

                next_elem_type.mark_moved();

                // Visualise the movement in ownership
                this.add_to_type_env_visualisation(
                    ctx, 
                    VisualisationPoints.MOVES, 
                    `'${expr_ctx.getText()}' is being moved into an array by assignment`
                )
            }

            types.push(next_elem_type.clone())
            if (type === undefined) {
                type = next_elem_type
                continue
            } 

            // Check that every array element's type is the same
            if (!compare_type(type.clone(), next_elem_type.clone())) {
                this.print_or_throw_error(`Type error in array elements; elements of an array must all have same type. Found ${unparse_type(type)} and ${unparse_type(next_elem_type)}`, ctx)
            }
        }
        return new ArrayType(types, type.clone())
    }

    // expression
    // | expression LSQUAREBRACKET expression RSQUAREBRACKET
    visitIndexExpression(ctx: IndexExpressionContext): Type {
        const index: number = this.getIntegerLiteral((ctx.expression(1).getChild(0) as LiteralExpressionContext))
        const array_type: Type = this.visit(ctx.expression(0))
        const array_size: number = (array_type as ArrayType).ContainedTypes.length
        if (!(array_type instanceof ArrayType)) {
            this.print_or_throw_error(`Type error in index expression; Attempting to index a variable of type ${unparse_type(array_type)}`, ctx)
        }

        if (index < 0 || index >= array_size) {
            this.print_or_throw_error(`Type error in index expression; Invalid index for array of size ${array_size}.`, ctx)
        }

        return (array_type as ArrayType).ContainedTypes[index]
    }

    // ------------------------------ TYPE ---------------------------------------------

    // leaf node: returns the type declared in the declaration statement
    visitType_(ctx: Type_Context): Type {
        if (!ctx.typeNoBounds()) {
            this.print_or_throw_error("Type error; Unsupported type.", ctx);
        }

        return this.visitChildren(ctx);
    }

    visitTypeNoBounds(ctx: TypeNoBoundsContext): Type {
        // Scalar type
        if (ctx.traitObjectTypeOneBound()) { 
            const type_name: string = this.visitChildren(ctx)
            if (type_name === "string") {
                return new StringType()
            }
            return new ScalarType((type_name as ScalarTypeName))
        }

        // unitType
        if (ctx.tupleType()) {
            return this.visit(ctx.tupleType())
        }

        if (ctx.referenceType()) {
            return this.visit(ctx.referenceType());
        }

        if (ctx.bareFunctionType()) {
            return this.visit(ctx.bareFunctionType())
        }

        if (ctx.arrayType()) {
            return this.visit(ctx.arrayType())
        }

        this.print_or_throw_error("Type error; Unsupported type.", ctx);
    };

    // arrayType
    // : LSQUAREBRACKET type_ SEMI expression RSQUAREBRACKET
    visitArrayType(ctx: ArrayTypeContext): Type {
        const containedType: Type = this.visit(ctx.type_())
        const size: number = this.getIntegerLiteral((ctx.expression().getChild(0) as LiteralExpressionContext))

        let types: Type[] = []
        for (let i =0; i < size; i++) {
            types.push(containedType.clone())
        }
        return new ArrayType(types, containedType)
    }

    // referenceType
    // : AND lifetime? KW_MUT? typeNoBounds
    visitReferenceType(ctx: ReferenceTypeContext): Type {
        const is_mut: boolean = (ctx.KW_MUT() != null);
        const inner_type: Type = this.visit(ctx.typeNoBounds());

        // CRUCIAL: if mutable reference type, the inner type must be mutable as well.
        // This invariant will be checked again in visitBorrowExpression()
        inner_type.IsMutable = is_mut; 

        this.log(`REFERENCE HAS INNER_TYPE: ${unparse_type(inner_type)}, AND IS_MUTABLE: ${is_mut}`, "REFERENCE_EXPRESSION");

        let ref_type: RefType = is_mut ? new MutableRefType(inner_type) : new ImmutableRefType(inner_type);
        return ref_type;
    }

    // forLifetimes? functionTypeQualifiers KW_FN LPAREN functionParametersMaybeNamedVariadic? RPAREN bareFunctionReturnType?    
    visitBareFunctionType(ctx: BareFunctionTypeContext): Type {
        const paramTypes: Type[] = ctx.functionParametersMaybeNamedVariadic() 
            ? this.visit(ctx.functionParametersMaybeNamedVariadic()) 
            : [];

        const returnType: Type = ctx.bareFunctionReturnType() 
            ? this.visit(ctx.bareFunctionReturnType())
            : new UnitType() 

        this.checkValidParamAndReturnTypes(paramTypes, returnType, ctx)
        let fun_type: FunctionType = new FunctionType(paramTypes, returnType);

        this.log(`BARE FUNCTION HAS TYPE ${unparse_type(fun_type)}`, "BARE_FUNCTION_TYPE");

        return fun_type;
    }

    // maybeNamedFunctionParameters: maybeNamedParam (COMMA maybeNamedParam)* COMMA?
    // maybeNamedParam: outerAttribute* ((identifier | UNDERSCORE) COLON)? type_
    // 
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

    // tupleType
    // : LPAREN ((type_ COMMA)+ type_?)? RPAREN
    // ;
    // Returns unit type "()". This is the equivalent of "undefined" in js.
    visitTupleType(ctx: TupleTypeContext): UnitType {
        if (ctx.type_().length > 0) {
            this.print_or_throw_error("Type error; Tuple type not supported.", ctx)
        }
        return new UnitType();
    }

    // ------------------------------ FUNCTION ---------------------------------------------

    // function_
    // : functionQualifiers KW_FN identifier genericParams? LPAREN functionParameters? RPAREN functionReturnType? whereClause? (
    //     blockExpression
    //     | SEMI
    // )
    // ;
    visitFunction_(ctx: Function_Context): Type {
        // Helper function that returns the first occurrence of a borrow type in a list of function parameter types
        // Throws error if more than one borrow type in list of function parameter types (should never trigger as this error is caught by FunctionType constructor)
        function findBorrowParam(expected_param_types: Type[]): Type {
            let borrow_param: Type
            for (const type of expected_param_types) {
                if (!(type instanceof RefType)) {
                    continue
                }
                if (borrow_param) {
                    this.print_or_throw_error("Type error in function declaration; Function parameter can only have one reference type as lifetime annotation not supplied/supported.", ctx)
                }
                borrow_param = type
            }
            return borrow_param
        }

        // 1. Extend the environment with a Function frame to store type mapping for parameters
        const symbol: string = this.visit(ctx.identifier());
        this.te.extend_type_environment(IS_FUNCTIONTYPEFRAME, `PARAMETERS OF FUNCTION '${symbol}'`)

        // 2. Look up the type environment to get the function's type (previously scanned out)
        let fun_type: Type 
        try {fun_type = this.te.lookup_type(symbol)} catch (e) {this.print_or_throw_error(e, ctx)}

        if (!(fun_type instanceof FunctionType)) {
            this.print_or_throw_error(`Type error in function declaration; looked up symbol scanned '${symbol}' declaration and did not find a function type.`, ctx)
        } 

        const expected_param_types: Type[] = (fun_type as FunctionType).ParamTypes
        const expected_return_type: Type = (fun_type as FunctionType).ReturnType

        // 3. Push the expected return type of the function to the `returnTypeStack`
        this.returnTypeStack = push(this.returnTypeStack, expected_return_type); 
        
        // 4. Add the type mapping of parameters to the type environment.
        let arity = expected_param_types.length;
        this.log(`ARITY: ${arity}`, "FUNCTION_")
        for (let i = 0; i < arity; i++) {
            const function_param = ctx.functionParameters().functionParam(i);

            if (!function_param.functionParamPattern()) {
                this.print_or_throw_error("Type error in function declaration; Function parameters must have their types declared.", ctx)
                return new UnitType();
            }

            // enters visitIdentifierPattern(), returns a pair 
            const [_, parameter_sym]: [boolean, string] = this.visit(function_param.functionParamPattern().pattern()); 
            
            // add symbol mapping to current function frame
            this.te.add_symbol_to_current_frame(parameter_sym, expected_param_types[i]);

            // the actual assignment of arguments to parameters is done in visitCallExpression
        }
        this.log(`PARAM TYPES: ${expected_param_types.map(x => unparse_type(x))}`, "FUNCTION_")

        if (ctx.blockExpression() === null) {
            this.print_or_throw_error("Type error in function declaration; Function must have body.", ctx)
        }

        // 5. Type check the function body to get returned Type
        let body_type = this.visit(ctx.blockExpression())
        body_type = body_type instanceof ReturnType ? body_type.ReturnedType : body_type // unwrap return type
        this.log(`FUNCTION BODY EVALUATES TO: ${unparse_type(body_type)}`, "FUNCTION_")

        // Case: Function returns a borrow 
        // Check that the returned borrow is the exact same one that it took in as argument
        if (expected_return_type instanceof RefType) {
            const borrow_param = findBorrowParam(expected_param_types)
            if ((borrow_param as RefType).InnerType != body_type.InnerType) {
                this.print_or_throw_error(`Type error in function declaration; Function returns a locally declared reference.`, ctx)
            }
        }

        if (!compare_type(expected_return_type, body_type)) {
            this.print_or_throw_error(`Type error in function declaration; Function body returns ${unparse_type(body_type)} instead of the expected ${unparse_type(expected_return_type)}`, ctx)
        }

        // 6. Restore type environment by popping Function frame
        this.te.restore_type_environment()

        // 7. Pop the returnTypeStack
        this.returnTypeStack = pop(this.returnTypeStack) // pop the return type of the function from the stack

        return new UnitType()
    }

    // (selfParam COMMA)? functionParam (COMMA functionParam)* COMMA?
    visitFunctionParameters(ctx: FunctionParametersContext): Type[] {
        let result: Type[] = [];

        for (let i = 0; i < ctx.functionParam().length; i++) {
            const param_type: Type = this.visit(ctx.functionParam(i));
            result.push(param_type);
        }

        return result;
    }

    // functionParam: outerAttribute* (functionParamPattern | DOTDOTDOT | type_)
    // functionParamPattern: pattern COLON (type_ | DOTDOTDOT)
    visitFunctionParam(ctx: FunctionParamContext): Type {
        if (!ctx.functionParamPattern() || !ctx.functionParamPattern().type_()) {
            this.print_or_throw_error("Type error in function param; Function parameter must have parameter name and type.", ctx);
            return new UnitType(); // Assume undeclared types as unit type for now to prevent runtime exception
        }

        // Add mutability info 
        const [is_mut, parameter_name]: [boolean, string] = this.visit(ctx.functionParamPattern().pattern()); // enters visitIdentifierPattern()!!
        const type: Type = this.visit(ctx.functionParamPattern().type_());
        type.IsMutable = is_mut;

        return type;
    }

    // RARROW type_
    visitFunctionReturnType(ctx: FunctionReturnTypeContext): Type {        
        return this.visit(ctx.type_());
    }

    // ------------------------------ STATEMENTS ---------------------------------------------

    // expressionStatement
    // : expression SEMI
    // | expressionWithBlock SEMI?
    // ;
    // Expression Statement evaluates into
    // ReturnType -> [expression SEMI] when the expression is a return statement, 
    //            or [expressionWithBlock SEMI?] when expressionWithBlock evaluates to a ReturnType
    // UnitType -> [expression SEMI] when the expression is not a return statement
    // Any Type -> [expressionWithBlock SEMI?] when expressionWithBlock evaluates to a non-ReturnType
    visitExpressionStatement(ctx: ExpressionStatementContext): Type {
        this.log(`TEXT: ${ctx.getText()}`, "EXPRESSION_STATEMENT");
        if (ctx.expressionWithBlock()) {
            const expr_type: Type = this.visit(ctx.expressionWithBlock());
            this.log(`FOUND EXPRESSIONWITHBLOCK: ${ctx.expressionWithBlock().getText()}, TYPE: ${unparse_type(expr_type)}`, "EXPRESSION_STATEMENT");
            return expr_type;
        }

        if (ctx.expression()) {
            const expr_type: Type = this.visit(ctx.expression());
            this.log(`FOUND EXPRESSION SEMI: ${ctx.expression().getText()}, TYPE: ${unparse_type(expr_type)}`, "EXPRESSION_STATEMENT");
            return expr_type instanceof ReturnType ? expr_type : new UnitType()
        }
    }

    // letStatement
    // : outerAttribute* KW_LET patternNoTopAlt (COLON type_)? (EQ expression)? SEMI
    // ;
    // QUIRK: All let statements must have assignment as well. Not allowed to declare an unassigned variable.
    visitLetStatement(ctx: LetStatementContext): Type { 
        const [is_mut, symbol]: [boolean, string] = this.visit(ctx.patternNoTopAlt());
        
        if (!ctx.type_()) {
            this.print_or_throw_error(`Type error in let statement; Missing type declaration for '${symbol}'.`, ctx);
        }

        if (!ctx.expression()) {
            this.print_or_throw_error(`Type error in let statement; Missing assignment in let statement for '${symbol}'.`, ctx);
        }
    
        let expected_type: Type = this.visit(ctx.type_());
        expected_type.IsMutable = is_mut;
        // note: we do not need to copy over the borrow status for `expected_type` as there is no move allowed if a borrow exists 

        // allow variable shadowing (reassignment of symbol) [#DESIGN]
        this.te.add_symbol_to_current_frame(symbol, expected_type);

        let actual_type: Type = this.visit(ctx.expression()); 

        // blockExpression and ifExpression may have ReturnType
        // e.g, let x : i32 = { return 2; } 
        if (actual_type instanceof ReturnType) {
            // allows block expression to terminate early [#DESIGN]
            return actual_type; 
        }
        
        this.log(`SYMBOL: ${symbol}, EXPECTED_TYPE: ${unparse_type(expected_type)}, ACTUAL TYPE: ${unparse_type(actual_type)}`, "LET_STATEMENT");

        if (actual_type.IsMoved) {
            this.print_or_throw_error(`Type error in let statement; Cannot assign to a moved value.`, ctx);
        }

        if (!compare_type(expected_type, actual_type)) {
            this.print_or_throw_error(`Type error in let statement; Expected type: ${unparse_type(expected_type)}, actual type: ${unparse_type(actual_type)}.`, ctx);
        }
        
        // Case: Create variable with Reference Type
        // do a shallow copy of the Inner Type [#DESIGN]
        if (expected_type instanceof RefType) {
            expected_type.InnerType = (actual_type as RefType).InnerType; 
        }

        // Case: Create variable with Array Type
        // do a shallow copy of the contained types [#DESIGN]
        if (expected_type instanceof ArrayType) {
            expected_type.ContainedTypes = (actual_type as ArrayType).ContainedTypes
        }

        // A let assignment that moves ownership is happening!
        if (this.canBeMoved(actual_type)) {
            // [#ownershipchecking]
            if (actual_type.ImmutableBorrowCount > 0 || actual_type.MutableBorrowExists) {
                this.print_or_throw_error(`Type error in let statement; cannot move a borrowed value: '${symbol}'`, ctx);
            }

            if (ctx.expression() instanceof IndexExpressionContext) {
                this.print_or_throw_error(`Type error in let statement; cannot move out of a non-copy array`, ctx)
            }
            
            // The ownership movement is legal!
            actual_type.mark_moved()
            this.log(`Moved ownership into variable '${symbol}'`, "LET_STATEMENT");

            // Visualise the movement in ownership
            this.add_to_type_env_visualisation(
                ctx, 
                VisualisationPoints.MOVES,
                `'${ctx.expression().getText()}' is being moved to '${symbol}' by let declaration`
            ) 
        }

        
        return new UnitType(); // statements produce undefined
    }

    // constantItem
    // : KW_CONST (identifier | UNDERSCORE) COLON type_ (EQ expression)? SEMI
    // ;
    // QUIRK: In rust, constants can be assigned to borrows if they are static borrows.
    // Our implementation does not support static variables, hence constants are not allowed to be borrows.
    visitConstantItem(ctx: ConstantItemContext): Type {
        const symbol: string = this.visit(ctx.identifier());

        if (!ctx.type_()) {
            this.print_or_throw_error(`Type error in constant declaration; Missing type declaration for constant '${symbol}'.`, ctx);
        }

        if (!ctx.expression()) {
            this.print_or_throw_error(`Type error in constant declaration; Missing assignment for constant '${symbol}'.`, ctx);
        }

        const expected_type: Type = this.visit(ctx.type_());
        const actual_type: Type = this.visit(ctx.expression());
        this.log(`SYMBOL: ${symbol}, EXPECTED_TYPE: ${unparse_type(expected_type)}, ACTUAL TYPE: ${unparse_type(actual_type)}`, "CONSTANT_ITEM");

        // Constants not allowed to have reference type
        let unpack_array_type: Type = expected_type
        while (unpack_array_type instanceof ArrayType) {
            unpack_array_type = unpack_array_type.BaseType
        }
        if (unpack_array_type instanceof RefType) {
            this.print_or_throw_error(`Type error in constant declaration; constant '${symbol}' cannot have a reference type.`, ctx);
        }

        if (!compare_type(expected_type, actual_type)) {
            this.print_or_throw_error(`Type error in constant declaration; Expected type: ${unparse_type(expected_type)}, actual type: ${unparse_type(actual_type)}.`, ctx);
        }

        expected_type.IsMutable = false
        this.te.add_symbol_to_current_frame(symbol, expected_type);

        return new UnitType() // statements produce undefined
    }

    // ------------------------------ IDENTIFIER ---------------------------------------------

    // identifierPattern
    // : KW_REF? KW_MUT? identifier (AT pattern)?
    // ;
    // 
    // Returns a tuple, where first element is whether the variable is mutable and the second element is the variable name
    visitIdentifierPattern(ctx: IdentifierPatternContext): [boolean, string] {
        return [ctx.KW_MUT() != null, this.visit(ctx.identifier())]
    }

    // Return the string representation of the identifier
    visitIdentifier(ctx: IdentifierContext): string {
        return ctx.getText();
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