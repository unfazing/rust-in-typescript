import { AbstractParseTreeVisitor, ParseTree, TerminalNode } from "antlr4ng";
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
import { ClosureType, compare_type, compare_types, global_type_environment, ImmutableRefType, MutableRefType, peek, pop, push, RefType, ReturnType, ScalarType, ScalarTypeName, Type, TypeEnvironment, TypeFrame, UnitType, unparse_type } from "./RustTypeEnv.js";
import { print_error } from "./Utils.js";
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

// SIMPLE IMPLEMENTATION OF TYPE CHECKING OWNERSHIP 
// - without considering existence of structs/loops/nested data structures

// --- OWNERSHIP ---
// A variable is owned by the scope it is declared in.
// Nested inner scopes can borrow or move variables owned by outer scope.

// -- FREEING --
// After a scope ends, everything owned by the scope is freed.

// Type Environment
// A scope is represented by a frame object in the type environment.
// The type environment is extended on visitCrate, visitFunction_ and visitBlockExpression 
// upon scanning out the local declarations.
// The type environment is restored upon returning from the above functions.
// Lookup of a variable's type is done from inner most type frame to outermost.
// In a single scope, there cannot be reassignment of a variable to a different type.

// --- MOVING OWNERSHIP ---
// CASE 1: Assignment/Let.
// E.g. let x: i32 = 3; let y = x;
// Note: we cannot move ownership of an outer variable inside a function body block. e.g. let x: i32 = 3; fn f() {let y = x};
// ---> "error[E0434]: can't capture dynamic environment in a fn item"
// Thus lookup of a declared variable can only be up till the nearest function frame and the global frame.

// Up to 2 type frames might need to be manipulated - the frames where x and y are declared may be different.
// The case where x and y are declared in nested block scope (could be if or while scope also), let x: i32 = 3; {let y = x;}
// The variable that is assigned as x (ie. y) will have the same type as x.
// The variable moved (ie. x) will be marked as no longer owned in the outer scope's type frame by being set to MovedType. 
// Using the moved variable will throw an error. ---> "error[E0382]: borrow of moved value: `x`", "error[E0382]: use of moved value: `TEST`"
// However, reassigning the moved variable is allowed in rust if the new assignment follows the original type of the variable
// e.g. fn main() {
//          let mut x: String = String::from("1");
//          if true {
//              let y = x;
//          }
//          x = String::from("2");
//      }
// We might want to disallow reassigning of a moved variable altogether.

// CASE 2: Passing Arguments to Function call.
// E.g. let x: i32 = 3; let y = f(x);
// The variable passed into the function will be marked as no longer owned in the outer scope's type frame.
// Calling a function does not extend the type environment. Type checking for the function body is done during declaration.

// Case 3: Assigning a variable to Returned value of Function Call. 
// E.g. let y = f();
// No real change is required to the type environment in this case.
// The variable that is assigned will have the same type as the return type of f().

// TODO!!!!!: DONT SCAN OUT BLOCKS, ADD TO FRAME WHEN ENCOUNTER ASSIGN, LET, FUNCTION_, CONSTANT ITEM
// TODO: cannot move by dereferencing a borrow. y1 = *y2; 
// TODO: must check if deferencing a mutable or immutable borrow. *y1 = y2;
// (consider implementing dereference type, or mapping inner type of a ref to actual type of variable)


// SIMPLE IMPLEMENTATION OF BORROW CHECKING
// In the simple implementation, a borrow is considered alive if it's scope has not ended
// In rust, the liveness of a borrow is determined if it is going to be used again later.

// If there is a &mut on a var that is still alive
// - owner cannot read or write to the var (basically any usage or look up shld error out)
// - cannot create another reference to the var
// - cannot move the ownership of the var 

// If there is a & on a var that is still alive
// - Owner cannot write to the var (assign or call methods on the var)
// - Cannot create a &mut reference to the var that will write to it
// - Cannot move the ownership of the var 

// Type Environment
// Augment the current type environment with borrow information.
// e.g. let y: &i32 = &x;
// Every refType must be associated with the symbol of the borrowed variable
// This way, when y is out of scope, we can lookup x again on the Type Environment to release the borrow
// At the same time, x's Type information must have a borrow status on whether
// a. there exists a mutable borrow
// b. the number of immutable borrows
// When y is out of scope, x's Type borrow status will be updated to reflect the change.
// During creation of borrows, check the target variable's borrow status to see if the borrow is valid.
// However, if a borrow is created directly from a literalExpression, then we do not need to check anything
// Because the lifetime of the literalExpression is the same as the borrow.


let te: TypeEnvironment = global_type_environment // an array of frame objects that map symbol to type
let returnTypeStack: Type[] = [] // stack of return types. Peeking it will be used to check if the return type of current scope function is correct
const IS_BLOCKTYPEFRAME = true
const IS_FUNCTIONTYPEFRAME = false


// Notes:
// Usually, visiting all the way to leaf nodes returns Type object (Tyoe defined in RustTypeEnv.ts)
// The only leaf node that returns string is 'Identifier'
// The 'IdentifierPattern' node will return a [boolean, string] tuple, representing is_mut and symbol name.
class TypeCheckerVisitor extends AbstractParseTreeVisitor<any> implements RustParserVisitor<any> {
    // entry node
    visitCrate(ctx: CrateContext): Type {
        
        // log("[extend_type_environment] BEFORE: " + JSON.stringify(te.type_environment, null, 4), "CRATE");
        te.extend_type_environment(IS_BLOCKTYPEFRAME)
        // log("[extend_type_environment] AFTER: " + JSON.stringify(te.type_environment, null, 4), "CRATE");

        log(`TYPE ENVIRONMENT: ${JSON.stringify(te, null, 4)}`, "CRATE")
        return this.visitChildren(ctx)
    }

    // ------------------------------ EXPRESSION ---------------------------------------------

    // leaf node: returns the type of literal value
    visitLiteralExpression(ctx: LiteralExpressionContext): Type {
        const type: ScalarTypeName = ctx.CHAR_LITERAL()
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
            print_error(`Unknown type for literal expression: ${ctx.getText()}`)
        }
        log(`EXPRESSION: ${ctx.getText()}, HAS TYPE: ${type}`, "LITERAL_EXPRESSION")
        return new ScalarType(type, undefined) // mutability does not apply to literals, only variables
    }

    // leaf node: returns the type of the symbol (by looking up type env)
    visitPathExpression(ctx: PathExpressionContext): Type {
        const symbol = this.visitChildren(ctx)
        const type: Type = te.lookup_type(symbol)
        if (type.IsMoved) {
            print_error(`Type error in pathExpression; use of a moved value: ${symbol}`)
        }

        if (type.MutableBorrowExists) {
            print_error(`Type error in pathExpression; use (read/write) of a mutably borrowed value: ${symbol}`)
        }

        log(`SYMBOL: ${symbol}, HAS TYPE: ${unparse_type(type)}`, "PATH_EXPRESSION")
        return type;
    }

    // (AND | ANDAND) KW_MUT? expression
    visitBorrowExpression(ctx: BorrowExpressionContext): Type {
        const is_mut: boolean = (ctx.KW_MUT() != null)
        const inner_type: Type = this.visit(ctx.expression());
        let symbol: string
        log(`BORROW HAS INNER_TYPE: ${unparse_type(inner_type)}, AND IS_MUTABLE: ${is_mut}`, "BORROW_EXPRESSION");
        
        if (inner_type instanceof ClosureType) {
            print_error(`Type error in borrow expression; cannot borrow a closure: ${unparse_type(inner_type)}`);            
        }
    
        // A borrow of a variable is happening. e.g. let y = &x; (as opposed to let y = &String::from("1");)
        if (ctx.expression() instanceof PathExpression_Context) {
            symbol = this.visitChildren(ctx.expression().getChild(0)) // skip PathExpression node to get identifier (no identifierPattern)
            log(`AN ${is_mut ? "MUTABLE" : "IMMUTABLE"} BORROW IS BEING CREATED ON: ${symbol}`, "BORROW_EXPRESSION");
            if (is_mut && !inner_type.Mutable) {
                print_error(`Type error in borrow expression; cannot borrow ${symbol} as mutable, as it is not declared as mutable.`);
            }
            let borrowedType: Type = te.lookup_type(symbol)

            if (borrowedType.MutableBorrowExists) {
                print_error(`Type error in borrow expression; cannot borrow ${symbol}, as it already has a mutable borrow.`);
            }

            if (borrowedType.ImmutableBorrowCount > 0 && is_mut) {
                print_error(`Type error in borrow expression; cannot borrow ${symbol} as mutable, as it already has an immutable borrow.`);
            }

            if (is_mut) {
                borrowedType.MutableBorrowExists = true;
            } else {
                borrowedType.ImmutableBorrowCount++;
            }
        }

        if (ctx.AND()) {
            return is_mut ? new MutableRefType(inner_type, symbol) : new ImmutableRefType(inner_type, symbol)
        }

        // TODO: Check if it is okay to ignore nestedness in updating variable's borrow status
        // e.g. on the type environment, let y = &x; vs let y = &&x; both simply adds an immutable borrow x. 
        if (ctx.ANDAND()) {
            let inner_ref_type: RefType = is_mut ? new MutableRefType(inner_type, symbol) : new ImmutableRefType(inner_type, symbol)
            let outer_ref_type: RefType = new ImmutableRefType(inner_ref_type, symbol);
            return outer_ref_type;
        }
    }

    // STAR expression
    visitDereferenceExpression(ctx: DereferenceExpressionContext): Type {
        const expr_type: Type = this.visit(ctx.expression()) // this must be a ref type
        log(`TRYING TO DEREFERENCE AN EXPRESSION WITH TYPE: ${unparse_type(expr_type)}`, "DEREFERENCE_EXPRESSION");

        if (!(expr_type instanceof RefType)) {
            print_error(`Type error; dereferencing a non-reference type: ${unparse_type(expr_type)}`);
            return new UnitType(); // prevent TS lint from throwing type error + prevent runtime error
        }

        log(`FOUND INNER TYPE: ${unparse_type(expr_type.InnerType)}`, "DEREFERENCE_EXPRESSION");
        return expr_type.InnerType; // question: do we miss any info about the type mutability?
    }

    // LPAREN innerAttribute* tupleElements? RPAREN
    visitTupleExpression(ctx: TupleExpressionContext): UnitType {
        if (ctx.tupleElements()) {
            print_error("Tuple expression not supported");
        }

        return new UnitType();
    }

    // blockExpression
    // : LCURLYBRACE innerAttribute* statements? RCURLYBRACE
    // ;
    visitBlockExpression(ctx: BlockExpressionContext): Type {
        // Scan out all local declarations and their types
        // Declarations are:
        // 1. let statement
        // 2. constant item
        // 3. function declaration (function_)

        if (!ctx.statements()) {
            return new UnitType();
        }

        // log("[extend_type_environment] BEFORE: " + JSON.stringify(te.type_environment, null, 4), "BLOCK_EXPRESSION");
        te.extend_type_environment(IS_BLOCKTYPEFRAME);
        // log("[extend_type_environment] AFTER: " + JSON.stringify(te.type_environment, null, 4), "BLOCK_EXPRESSION");

        // type check each statement in the block.
        // the type of the block is the type of the 
        // LAST statement/expression in the block.
        let blockType: Type = new UnitType();
        let returned: boolean = false

        const statements = ctx.statements().statement();
        for (const statement of statements) {
            log(`Visiting child statement ${statement.getText()}`, "BLOCK_EXPRESSION");
            blockType = this.visit(statement)
            if (blockType instanceof ReturnType) {
                log(`RETURN STATEMENT ENCOUNTERED: ${statement.getText()}, BLOCK TYPE: ${unparse_type(blockType)}`, "BLOCK_EXPRESSION")
                returned = true
                break
            }
        }

        // if the block has a final expression and no return statement before
        // the type of the block is the type of the final expression
        if (!returned && ctx.statements().expression()) {
            blockType = this.visit(ctx.statements().expression())
            log(`FINAL EXPRESSION ENCOUNTERED: ${ctx.statements().expression().getText()}, BLOCK TYPE: ${unparse_type(blockType)}`, "BLOCK_EXPRESSION")
        }

        log(`FINAL EVALUATED BLOCK TYPE: ${unparse_type(blockType)}`, "BLOCK_EXPRESSION")

        te.restore_type_environment();

        return blockType;
    }

    // expression EQ expression
    // Snippet that Rust allows but we don't:     
    // fn f()-> i32 { let z = return 7;} // encounter mismatch types in assignment
    visitAssignmentExpression(ctx: AssignmentExpressionContext): Type {
        
        // unwrapping parentheses in group expression
        let LHS: ExpressionContext = ctx.expression(0);
        while (LHS instanceof GroupedExpressionContext) {
            LHS = LHS.expression();
        }

        let RHS: ExpressionContext = ctx.expression(1);
        while (RHS instanceof GroupedExpressionContext) {
            RHS = RHS.expression();
        }

        const expected_type: Type = this.visit(LHS); 
        const actual_type: Type = this.visit(RHS);

        if (!expected_type.Mutable) {
            print_error('Type error in assignment; tried to assign when variable is immutable.')
        }
        
        // if assigning to a deref, check if the ref is a mut&
        // e.g. *x = y;
        if (LHS instanceof DereferenceExpressionContext) {

            // DereferenceExpression: STAR expression
            const reftype: Type = this.visit(LHS.expression());

            if (!(reftype instanceof MutableRefType)) {
                print_error("Type error in assignment; cannot assign to a dereference of an immutable reference");
            } 

            // at this point, there must be a single mutable reference for this object. 
            // no need to check if Immutable borrow exists.
        
        } else {
            // LHS is not a deref expresssion; Hence LHS cannot have any live references before assignment
            if (expected_type.ImmutableBorrowCount > 0 || expected_type.MutableBorrowExists) {
                print_error(`Type error in assignment; cannot assign to a borrowed value: ${unparse_type(expected_type)}`);
            }
        }
        
        log(`EXPECTED_TYPE: ${unparse_type(expected_type)}, ACTUAL TYPE: ${unparse_type(actual_type)}`, "ASSIGNMENT_EXPRESSION");

        if (!compare_type(expected_type, actual_type)) {
            print_error(`Type error in assignment; Expected type: ${unparse_type(expected_type)}, actual type: ${unparse_type(actual_type)}.`);
        }

        // An assignment that moves ownership of a variable is happening.
        // Function types cannot be moved.
        if (!(expected_type instanceof ClosureType)) {
            
            if (actual_type.ImmutableBorrowCount > 0 || actual_type.MutableBorrowExists) {
                print_error(`Type error in assignment; cannot move a borrowed value.`);
            }
            
            actual_type.IsMoved = true;
            log(`MARKING RHS AS MOVED`, "ASSIGNMENT_EXPRESSION");
        }

        return new UnitType() // assignment expression in Rust produce undefined! DIFFERENT FROM OTHER LANGUAGES
    }

    // KW_RETURN expression?
    visitReturnExpression(ctx: ReturnExpressionContext): ReturnType {
        let returnedType: Type = new UnitType()
        
        if (ctx.expression()) {
            returnedType = this.visit(ctx.expression())
        }

        if (!compare_type(returnedType, peek(returnTypeStack, 0))) {
            print_error(`Type error in return statement; expected type: ${unparse_type(peek(returnTypeStack, 0))}, actual type: ${unparse_type(returnedType)}`);
        }

        const return_type = new ReturnType(returnedType)
        log(`RETURN TYPE: ${unparse_type(return_type)}`, "RETURN_EXPRESSION")
        return return_type
    }

    // expression (COMMA expression)* COMMA?
    visitCallParams(ctx: CallParamsContext): Type[] {
        return ctx.expression().map(expression => this.visit(expression));
    }

    // expression LPAREN callParams? RPAREN
    visitCallExpression(ctx: CallExpressionContext): Type {
        const expected_type: Type = this.visit(ctx.expression()) // lookup type in pathExpression node
        log(`EXPECTED CLOSURE TYPE: ${unparse_type(expected_type)}`, "CALL_EXPRESSION");
        if (!(expected_type instanceof ClosureType)) {
            print_error("Type error in application; function application must have function type.")
            return; // let typescript knows expected_type must be closure
        }

        const expected_arg_types: Type[] = expected_type.ParamTypes;
        const actual_arg_types: Type[] = ctx.callParams() ? this.visit(ctx.callParams()) : [];
        log(`EXPECTED ARGUMENT TYPES: ${expected_arg_types.map(unparse_type)}, ACTUAL ARGUMENT TYPES: ${actual_arg_types.map(unparse_type)}`, "CALL_EXPRESSION");
        // typecheck arguments
        if (!compare_types(expected_arg_types, actual_arg_types)) {
            print_error("Type error in application; argument types unmatched.")
        }

        if (actual_arg_types.length > 0) {
            let expressions = ctx.callParams().expression();
            for (let i = 0; i < actual_arg_types.length; i++) {
                const expr = expressions[i]
                const type = actual_arg_types[i]
                // Case where variables passed to function argument leads to moving ownership
                if (!(type instanceof ClosureType)) {
                    if (type.ImmutableBorrowCount > 0 || type.MutableBorrowExists) {
                        print_error(`Type error in application; cannot move a borrowed value into function.`);
                    }
                    
                    type.IsMoved = true;
                    log(`MARKING ARGUMENT AT POSITION ${i} AS MOVED`, "CALL_EXPRESSION");
                }
            }
        }

        // clone the object return type so the ReturnType of the ClosureType 
        // saved in environment is not destructively modified during ownership moving.
        const return_type_original = expected_type.ReturnType
        const return_type_clone = Object.assign(Object.create(Object.getPrototypeOf(return_type_original)), return_type_original)
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
                                        : print_error(`YET TO IMPLEMENT THIS ArithmeticOrLogicalExpression SYMBOL`)
        log(`LEFT OPERAND TYPE: ${unparse_type(t1)}, RIGHT OPERAND TYPE: ${unparse_type(t2)}, SYMBOL: ${symbol}`, "ARITHMETIC_OR_LOGICAL_EXPRESSION");

        // log(JSON.stringify(te.type_environment, null, 4), "arith");

        if (compare_type(t1, t2) && (t1.TypeName === 'i32' || t1.TypeName === 'f64')) {
            return new ScalarType(t1.TypeName)
        } else {
            print_error(`Type error; Operator '${symbol}' requires matching numeric operands, found ${unparse_type(t1)} and ${unparse_type(t2)}`);
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
                : print_error('Unknown boolean operator')

        log(`LEFT OPERAND TYPE: ${unparse_type(t1)}, RIGHT OPERAND TYPE: ${unparse_type(t2)}, SYMBOL: ${symbol}`, "LAZY_BOOLEAN_EXPRESSION");
        // Both operands must be boolean
        if (t1.TypeName !== "bool" || t2.TypeName !== "bool") {
            print_error(`Type error; Boolean operator ${symbol} requires boolean operands, found ${unparse_type(t1)} and ${unparse_type(t2)}`);
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
                                : print_error('Unknown comparison operator');

        log(`LEFT OPERAND TYPE: ${unparse_type(t1)}, RIGHT OPERAND TYPE: ${unparse_type(t2)}, SYMBOL: ${symbol}`, "COMPARISON_EXPRESSION");
        if (compare_type(t1, t2) && (t1.TypeName === 'i32' || t1.TypeName === 'f64')) {
            return new ScalarType("bool")
        } else {
            print_error(`Type error; Operator '${symbol}' requires matching numeric operands, found ${unparse_type(t1)} and ${unparse_type(t2)}`);
        }
    }

    // (MINUS | NOT) expression
    visitNegationExpression(ctx: NegationExpressionContext): Type {
        const t1: Type = this.visit(ctx.expression());
        const sym = ctx.MINUS()
            ? "!"
            : ctx.NOT()
                ? "-unary"
                : print_error("Unknown unary operator");

        log(`OPERAND TYPE: ${unparse_type(t1)}, SYMBOL: ${sym}`, "NEGATION_EXPRESSION");

        switch (sym) {
            case '!':
                if (t1.TypeName !== "bool") {
                    print_error(`Type error; Logical NOT operator '!' requires boolean operand, found ${unparse_type(t1)}`);
                }
                break;

            case "-unary":
                if (t1.TypeName !== "i32" && t1.TypeName !== 'f64') {
                    print_error(`Type error; Negation operator '-' requires numeric operand (i32 or f64), found ${unparse_type(t1)}`);
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
    // Our implementation is STRICTER than rust's: require all branching blocks to evaluate to the exact same types 
    // All if expressions must have both if-else block, if there are else-if blocks, they also must have the same type.
    // i.e. the branching blocks are all UnitType, all ReturnType, or all same Type (as evaluated by last expression in block)
    // An implication is that during letStatement or Assignment, ifExpression evaluates to ReturnType, then we throw type error where Rust wouldn't
    visitIfExpression(ctx: IfExpressionContext): Type {
        const predicate: ExpressionContext = ctx.expression();
        const pred_type: Type = this.visit(predicate);

        if (pred_type.TypeName !== "bool") {
            print_error("Type error; expected predicate type: bool, " +
                "actual predicate type: " +
                unparse_type(pred_type))
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
                print_error("If let expression is out of scope.")
            }
        }

        log(`CONSEQUENT BRANCH TYPE: ${unparse_type(then_type)}, ALTERNATIVE BRANCH TYPE: ${unparse_type(else_type)}`, "IF_EXPRESSION");

        if (compare_type(then_type, else_type)) {
            return then_type;
        } else {
            print_error("Type error; Types of branches not matching; " +
                "consequent type: " +
                unparse_type(then_type) + ", " +
                "alternative type: " +
                unparse_type(else_type))

            return new UnitType(); // Prevent runtime exception
        }
    }

    // KW_WHILE expression /*except structExpression*/ blockExpression
    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): Type {
        const predicate: ExpressionContext = ctx.expression();
        const pred_type: Type = this.visit(predicate); // this is a group expression: "(expression)"

        log(`PREDICATE_TYPE: ${unparse_type(pred_type)}`, "PREDICATE_LOOP_EXPRESSION");

        if (pred_type.TypeName !== "bool") {
            print_error("Type error; expected predicate type: bool, " +
                "actual predicate type: " +
                unparse_type(pred_type))
        }

        let body_type = this.visit(ctx.blockExpression()); // typecheck the body

        // while loops usually have the unit type () in Rust, unless a value is returned
        return body_type instanceof ReturnType ? body_type : new UnitType() 
    }

    // LPAREN innerAttribute* expression RPAREN
    visitGroupedExpression(ctx: GroupedExpressionContext): Type {
        return this.visit(ctx.expression());
    }

    // ------------------------------ TYPE ---------------------------------------------

    // leaf node: returns the type declared in the declaration statement
    visitType_(ctx: Type_Context): Type {
        if (!ctx.typeNoBounds()) {
            print_error("Unsupported type.");
        }

        return this.visitChildren(ctx);
    }

    visitTypeNoBounds(ctx: TypeNoBoundsContext): Type {
        if (ctx.traitObjectTypeOneBound()) { // primitive type
            return new ScalarType(this.visitChildren(ctx));
        }

        if (ctx.tupleType()) { // unit type "()"
            return this.visit(ctx.tupleType())
        }

        if (ctx.referenceType()) { // reference
            return this.visit(ctx.referenceType());
        }

        if (ctx.bareFunctionType()) { // function
            return this.visit(ctx.bareFunctionType())
        }

        print_error("Unsupported type.");
    };

    // referenceType
    // : AND lifetime? KW_MUT? typeNoBounds
    visitReferenceType(ctx: ReferenceTypeContext): Type {
        const is_mut: boolean = (ctx.KW_MUT() != null);
        const inner_type: Type = this.visit(ctx.typeNoBounds());

        // CRUCIAL: if mutable reference type, the inner type must be mutable as well.
        // This invariant will be checked again in visitBorrowExpression() 
        inner_type.Mutable = is_mut; 

        log(`REFERENCE HAS INNER_TYPE: ${unparse_type(inner_type)}, AND IS_MUTABLE: ${is_mut}`, "REFERENCE_EXPRESSION");

        let ref_type: RefType = is_mut ? new MutableRefType(inner_type) : new ImmutableRefType(inner_type);
        return ref_type;
    }

    // forLifetimes? functionTypeQualifiers KW_FN LPAREN functionParametersMaybeNamedVariadic? RPAREN bareFunctionReturnType?    
    visitBareFunctionType(ctx: BareFunctionTypeContext): Type {
        const paramTypes: Type[] = ctx.functionParametersMaybeNamedVariadic() 
            ? this.visit(ctx.functionParametersMaybeNamedVariadic()) 
            : [];

        const returnType: Type = ctx.bareFunctionReturnType() 
            ? new UnitType() 
            : this.visit(ctx.bareFunctionReturnType())

        const closure: ClosureType = new ClosureType(paramTypes, returnType);

        log(`BARE FUNCTION HAS TYPE ${unparse_type(closure)}`, "BARE_FUNCTION_TYPE");

        return closure;
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
        if (ctx.type_().length == 0) {
            return new UnitType();
        } else {
            print_error("Tuple type not supported.")
        }
    }

    // ------------------------------ FUNCTION ---------------------------------------------

    // function_
    // : functionQualifiers KW_FN identifier genericParams? LPAREN functionParameters? RPAREN functionReturnType? whereClause? (
    //     blockExpression
    //     | SEMI
    // )
    // ;

    // TODO: a function that returns a reference must return a reference that it took as a param (compare inner)
    // TODO: a function can only take up to one reference as a param (avoid needing to annotate lifetime)
    visitFunction_(ctx: Function_Context): Type {

        // read type declarations for the function
        const symbol: string = this.visit(ctx.identifier());
        const expected_param_types: Type[] = ctx.functionParameters() ? this.visit(ctx.functionParameters()) : [];
        const expected_return_type: Type = ctx.functionReturnType() ? this.visit(ctx.functionReturnType()) : new UnitType();
        const fun_type: ClosureType = new ClosureType(expected_param_types, expected_return_type);
        
        // add symbol binding to type environment
        te.add_symbol_to_current_frame(symbol, fun_type);

        // extend the environment to store type mapping for parameters
        te.extend_type_environment(IS_FUNCTIONTYPEFRAME)

        // push the return type of the function to the stack
        returnTypeStack = push(returnTypeStack, expected_return_type); 
        
        let arity = expected_param_types.length;
        log(`ARITY: ${arity}`, "FUNCTION_")
        for (let i = 0; i < arity; i++) {
            const function_param = ctx.functionParameters().functionParam(i);

            if (!function_param.functionParamPattern()) {
                print_error("Function parameters must have their types declared.")
                return new UnitType();
            }

            // enters visitIdentifierPattern()! returns a pair 
            const [_, parameter_sym]: [boolean, string] = this.visit(function_param.functionParamPattern().pattern()); 
            
            // add symbol mapping to current function frame
            te.add_symbol_to_current_frame(parameter_sym, expected_param_types[i]);

            // the actual assignment of arguments to parameters is done in visitCallExpression
        }
        log(`PARAM TYPES: ${expected_param_types.map(x => unparse_type(x))}`, "FUNCTION_")

        if (ctx.blockExpression() === null) {
            print_error("Function without body!")
        }
        let body_type = this.visit(ctx.blockExpression())
        body_type = body_type instanceof ReturnType ? body_type.ReturnedType : body_type // unwrap return type
        log(`FUNCTION BODY EVALUATES TO: ${unparse_type(body_type)}`, "FUNCTION_")

        te.restore_type_environment()

        if (!compare_type(expected_return_type, body_type)) {
            print_error(`Function body returns ${unparse_type(body_type)} instead of the expected ${unparse_type(expected_return_type)}`)
        }

        returnTypeStack = pop(returnTypeStack) // pop the return type of the function from the stack

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
            print_error("Function parameter must have parameter name and type.");
            return new UnitType(); // Assume undeclared types as unit type for now to prevent runtime exception
        }

        // Add mutability info 
        const [is_mut, parameter_name]: [boolean, string] = this.visit(ctx.functionParamPattern().pattern()); // enters visitIdentifierPattern()!!
        const type: Type = this.visit(ctx.functionParamPattern().type_());
        type.Mutable = is_mut;

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
        log(`TEXT: ${ctx.getText()}`, "EXPRESSION_STATEMENT");
        if (ctx.expressionWithBlock()) {
            const expr_type: Type = this.visit(ctx.expressionWithBlock());
            log(`FOUND EXPRESSIONWITHBLOCK: ${ctx.expressionWithBlock().getText()}, TYPE: ${unparse_type(expr_type)}`, "EXPRESSION_STATEMENT");
            return expr_type;
        }

        if (ctx.expression()) {
            const expr_type: Type = this.visit(ctx.expression());
            log(`FOUND EXPRESSION SEMI: ${ctx.expression().getText()}, TYPE: ${unparse_type(expr_type)}`, "EXPRESSION_STATEMENT");
            return expr_type instanceof ReturnType ? expr_type : new UnitType()
        }
    }

    // letStatement
    // : outerAttribute* KW_LET patternNoTopAlt (COLON type_)? (EQ expression)? SEMI
    // ;
    // IN OUR SIMPLE IMPLEMENTATION -> ALL LET STATEMENT MUST HAVE ASSIGNMENT ALSO
    visitLetStatement(ctx: LetStatementContext): Type { 
        const [is_mut, symbol]: [boolean, string] = this.visit(ctx.patternNoTopAlt());
        
        if (!ctx.type_()) {
            print_error(`Missing type declaration for ${symbol}.`);
        }

        if (!ctx.expression()) {
            print_error(`Missing assignment in let statement for ${symbol}.`);
        }
    
        let expected_type: Type = this.visit(ctx.type_());
        expected_type.Mutable = is_mut;

        // either  
        // 1. literal expression, arithmeticExpression, comparisonExpression...
        // 2. pathExpression, 
        // 3. callExpression, 
        // 4. IfExpression (ternary)
        // 5. borrowExpression (e.g. &x)
        // 6. blockExpression ({ } in Rust produces value)
        let actual_type: Type = this.visit(ctx.expression()); 

        // blockExpression and ifExpression may have ReturnType
        // e.g, let x : i32 = { return 2; }
        if (actual_type instanceof ReturnType) {
            return actual_type; // allows block expression to terminate early 
        }
        
        log(`SYMBOL: ${symbol}, EXPECTED_TYPE: ${unparse_type(expected_type)}, ACTUAL TYPE: ${unparse_type(actual_type)}`, "LET_STATEMENT");

        if (!compare_type(expected_type, actual_type)) {
            print_error(`Type error in let statement; Expected type: ${unparse_type(expected_type)}, actual type: ${unparse_type(actual_type)}.`);
        }

        // Ownership moving. Do not allow moving ownership of closure(fn) type.
        if (!(expected_type instanceof ClosureType)) {

            if (actual_type.ImmutableBorrowCount > 0 || actual_type.MutableBorrowExists) {
                print_error(`Type error in assignment; cannot move a borrowed value: ${symbol}`);
            }
            
            actual_type.IsMoved = true;
            log(`Moved ownership into variable ${symbol}`, "LET_STATEMENT");
        }

        // do a shalow copy of the inner type during borrowing
        if (expected_type instanceof RefType) {
            expected_type.InnerType = (actual_type as RefType).InnerType; 
        }

        // allow variable shadowing (reassignment of symbol)
        te.add_symbol_to_current_frame(symbol, expected_type);
        
        return new UnitType(); // statements produce undefined
    }

    // constantItem
    // : KW_CONST (identifier | UNDERSCORE) COLON type_ (EQ expression)? SEMI
    // ;
    // In rust, constants can be assigned to borrows if they are static borrows.
    // Our implementation does not support static variables, hence constants are not allowed to be borrows.
    visitConstantItem(ctx: ConstantItemContext): Type {
        const symbol: string = this.visit(ctx.identifier());

        if (!ctx.type_()) {
            print_error(`Missing type declaration for constant ${symbol}.`);
        }

        if (!ctx.expression()) {
            print_error(`Missing assignment for constant ${symbol}.`);
        }

        const expected_type: Type = this.visit(ctx.type_());
        const actual_type: Type = this.visit(ctx.expression());
        log(`SYMBOL: ${symbol}, EXPECTED_TYPE: ${unparse_type(expected_type)}, ACTUAL TYPE: ${unparse_type(actual_type)}`, "CONSTANT_ITEM");

        if (expected_type instanceof RefType) {
            print_error(`Type error in constant declaration; constant ${symbol} cannot be a reference type.`);
        }

        if (!compare_type(expected_type, actual_type)) {
            print_error(`Type error in constant declaration; Expected type: ${unparse_type(expected_type)}, actual type: ${unparse_type(actual_type)}.`);
        }

        te.add_symbol_to_current_frame(symbol, expected_type); // expected_type is not mutable by default

        return new UnitType() // statements produce undefined
    }

    // ------------------------------ IDENTIFIER ---------------------------------------------

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
        return [ctx.KW_MUT() != null, this.visit(ctx.identifier())]
    }

    // Return the string representation of the identifier
    // the identifier is overloaded! It can either be:
    // 1. the symbol of a variable (e.g. x)
    // 2. the type of the variable (e.g. i32)
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