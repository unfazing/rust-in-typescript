// Generated from src/RustParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { RustParserListener } from "./RustParserListener.js";
import { RustParserVisitor } from "./RustParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class RustParser extends RustParserBase {
    public static readonly KW_AS = 1;
    public static readonly KW_BREAK = 2;
    public static readonly KW_CONST = 3;
    public static readonly KW_CONTINUE = 4;
    public static readonly KW_CRATE = 5;
    public static readonly KW_ELSE = 6;
    public static readonly KW_ENUM = 7;
    public static readonly KW_EXTERN = 8;
    public static readonly KW_FALSE = 9;
    public static readonly KW_FN = 10;
    public static readonly KW_FOR = 11;
    public static readonly KW_IF = 12;
    public static readonly KW_IMPL = 13;
    public static readonly KW_IN = 14;
    public static readonly KW_LET = 15;
    public static readonly KW_LOOP = 16;
    public static readonly KW_MATCH = 17;
    public static readonly KW_MOD = 18;
    public static readonly KW_MOVE = 19;
    public static readonly KW_MUT = 20;
    public static readonly KW_PUB = 21;
    public static readonly KW_REF = 22;
    public static readonly KW_RETURN = 23;
    public static readonly KW_SELFVALUE = 24;
    public static readonly KW_SELFTYPE = 25;
    public static readonly KW_STATIC = 26;
    public static readonly KW_STRUCT = 27;
    public static readonly KW_SUPER = 28;
    public static readonly KW_TRAIT = 29;
    public static readonly KW_TRUE = 30;
    public static readonly KW_TYPE = 31;
    public static readonly KW_UNSAFE = 32;
    public static readonly KW_USE = 33;
    public static readonly KW_WHERE = 34;
    public static readonly KW_WHILE = 35;
    public static readonly KW_ASYNC = 36;
    public static readonly KW_AWAIT = 37;
    public static readonly KW_DYN = 38;
    public static readonly KW_ABSTRACT = 39;
    public static readonly KW_BECOME = 40;
    public static readonly KW_BOX = 41;
    public static readonly KW_DO = 42;
    public static readonly KW_FINAL = 43;
    public static readonly KW_MACRO = 44;
    public static readonly KW_OVERRIDE = 45;
    public static readonly KW_PRIV = 46;
    public static readonly KW_TYPEOF = 47;
    public static readonly KW_UNSIZED = 48;
    public static readonly KW_VIRTUAL = 49;
    public static readonly KW_YIELD = 50;
    public static readonly KW_TRY = 51;
    public static readonly KW_UNION = 52;
    public static readonly KW_STATICLIFETIME = 53;
    public static readonly KW_MACRORULES = 54;
    public static readonly KW_UNDERLINELIFETIME = 55;
    public static readonly KW_DOLLARCRATE = 56;
    public static readonly NON_KEYWORD_IDENTIFIER = 57;
    public static readonly RAW_IDENTIFIER = 58;
    public static readonly LINE_COMMENT = 59;
    public static readonly BLOCK_COMMENT = 60;
    public static readonly INNER_LINE_DOC = 61;
    public static readonly INNER_BLOCK_DOC = 62;
    public static readonly OUTER_LINE_DOC = 63;
    public static readonly OUTER_BLOCK_DOC = 64;
    public static readonly BLOCK_COMMENT_OR_DOC = 65;
    public static readonly SHEBANG = 66;
    public static readonly WHITESPACE = 67;
    public static readonly NEWLINE = 68;
    public static readonly CHAR_LITERAL = 69;
    public static readonly STRING_LITERAL = 70;
    public static readonly RAW_STRING_LITERAL = 71;
    public static readonly BYTE_LITERAL = 72;
    public static readonly BYTE_STRING_LITERAL = 73;
    public static readonly RAW_BYTE_STRING_LITERAL = 74;
    public static readonly INTEGER_LITERAL = 75;
    public static readonly DEC_LITERAL = 76;
    public static readonly HEX_LITERAL = 77;
    public static readonly OCT_LITERAL = 78;
    public static readonly BIN_LITERAL = 79;
    public static readonly FLOAT_LITERAL = 80;
    public static readonly LIFETIME_OR_LABEL = 81;
    public static readonly PLUS = 82;
    public static readonly MINUS = 83;
    public static readonly STAR = 84;
    public static readonly SLASH = 85;
    public static readonly PERCENT = 86;
    public static readonly CARET = 87;
    public static readonly NOT = 88;
    public static readonly AND = 89;
    public static readonly OR = 90;
    public static readonly ANDAND = 91;
    public static readonly OROR = 92;
    public static readonly PLUSEQ = 93;
    public static readonly MINUSEQ = 94;
    public static readonly STAREQ = 95;
    public static readonly SLASHEQ = 96;
    public static readonly PERCENTEQ = 97;
    public static readonly CARETEQ = 98;
    public static readonly ANDEQ = 99;
    public static readonly OREQ = 100;
    public static readonly SHLEQ = 101;
    public static readonly SHREQ = 102;
    public static readonly EQ = 103;
    public static readonly EQEQ = 104;
    public static readonly NE = 105;
    public static readonly GT = 106;
    public static readonly LT = 107;
    public static readonly GE = 108;
    public static readonly LE = 109;
    public static readonly AT = 110;
    public static readonly UNDERSCORE = 111;
    public static readonly DOT = 112;
    public static readonly DOTDOT = 113;
    public static readonly DOTDOTDOT = 114;
    public static readonly DOTDOTEQ = 115;
    public static readonly COMMA = 116;
    public static readonly SEMI = 117;
    public static readonly COLON = 118;
    public static readonly PATHSEP = 119;
    public static readonly RARROW = 120;
    public static readonly FATARROW = 121;
    public static readonly POUND = 122;
    public static readonly DOLLAR = 123;
    public static readonly QUESTION = 124;
    public static readonly LCURLYBRACE = 125;
    public static readonly RCURLYBRACE = 126;
    public static readonly LSQUAREBRACKET = 127;
    public static readonly RSQUAREBRACKET = 128;
    public static readonly LPAREN = 129;
    public static readonly RPAREN = 130;
    public static readonly RULE_crate = 0;
    public static readonly RULE_macroInvocation = 1;
    public static readonly RULE_delimTokenTree = 2;
    public static readonly RULE_tokenTree = 3;
    public static readonly RULE_tokenTreeToken = 4;
    public static readonly RULE_macroInvocationSemi = 5;
    public static readonly RULE_macroRulesDefinition = 6;
    public static readonly RULE_macroRulesDef = 7;
    public static readonly RULE_macroRules = 8;
    public static readonly RULE_macroRule = 9;
    public static readonly RULE_macroMatcher = 10;
    public static readonly RULE_macroMatch = 11;
    public static readonly RULE_macroMatchToken = 12;
    public static readonly RULE_macroFragSpec = 13;
    public static readonly RULE_macroRepSep = 14;
    public static readonly RULE_macroRepOp = 15;
    public static readonly RULE_macroTranscriber = 16;
    public static readonly RULE_item = 17;
    public static readonly RULE_visItem = 18;
    public static readonly RULE_macroItem = 19;
    public static readonly RULE_module = 20;
    public static readonly RULE_externCrate = 21;
    public static readonly RULE_crateRef = 22;
    public static readonly RULE_asClause = 23;
    public static readonly RULE_useDeclaration = 24;
    public static readonly RULE_useTree = 25;
    public static readonly RULE_functionBlockExpression = 26;
    public static readonly RULE_function_ = 27;
    public static readonly RULE_functionQualifiers = 28;
    public static readonly RULE_abi = 29;
    public static readonly RULE_functionParameters = 30;
    public static readonly RULE_selfParam = 31;
    public static readonly RULE_shorthandSelf = 32;
    public static readonly RULE_typedSelf = 33;
    public static readonly RULE_functionParam = 34;
    public static readonly RULE_functionParamPattern = 35;
    public static readonly RULE_functionReturnType = 36;
    public static readonly RULE_typeAlias = 37;
    public static readonly RULE_struct_ = 38;
    public static readonly RULE_structStruct = 39;
    public static readonly RULE_tupleStruct = 40;
    public static readonly RULE_structFields = 41;
    public static readonly RULE_structField = 42;
    public static readonly RULE_tupleFields = 43;
    public static readonly RULE_tupleField = 44;
    public static readonly RULE_enumeration = 45;
    public static readonly RULE_enumItems = 46;
    public static readonly RULE_enumItem = 47;
    public static readonly RULE_enumItemTuple = 48;
    public static readonly RULE_enumItemStruct = 49;
    public static readonly RULE_enumItemDiscriminant = 50;
    public static readonly RULE_union_ = 51;
    public static readonly RULE_constantItem = 52;
    public static readonly RULE_staticItem = 53;
    public static readonly RULE_trait_ = 54;
    public static readonly RULE_implementation = 55;
    public static readonly RULE_inherentImpl = 56;
    public static readonly RULE_traitImpl = 57;
    public static readonly RULE_externBlock = 58;
    public static readonly RULE_externalItem = 59;
    public static readonly RULE_genericParams = 60;
    public static readonly RULE_genericParam = 61;
    public static readonly RULE_lifetimeParam = 62;
    public static readonly RULE_typeParam = 63;
    public static readonly RULE_constParam = 64;
    public static readonly RULE_whereClause = 65;
    public static readonly RULE_whereClauseItem = 66;
    public static readonly RULE_lifetimeWhereClauseItem = 67;
    public static readonly RULE_typeBoundWhereClauseItem = 68;
    public static readonly RULE_forLifetimes = 69;
    public static readonly RULE_associatedItem = 70;
    public static readonly RULE_innerAttribute = 71;
    public static readonly RULE_outerAttribute = 72;
    public static readonly RULE_attr = 73;
    public static readonly RULE_attrInput = 74;
    public static readonly RULE_statement = 75;
    public static readonly RULE_letStatement = 76;
    public static readonly RULE_expressionStatement = 77;
    public static readonly RULE_expression = 78;
    public static readonly RULE_comparisonOperator = 79;
    public static readonly RULE_compoundAssignOperator = 80;
    public static readonly RULE_expressionWithBlock = 81;
    public static readonly RULE_literalExpression = 82;
    public static readonly RULE_pathExpression = 83;
    public static readonly RULE_blockExpression = 84;
    public static readonly RULE_statements = 85;
    public static readonly RULE_asyncBlockExpression = 86;
    public static readonly RULE_unsafeBlockExpression = 87;
    public static readonly RULE_arrayElements = 88;
    public static readonly RULE_tupleElements = 89;
    public static readonly RULE_tupleIndex = 90;
    public static readonly RULE_structExpression = 91;
    public static readonly RULE_structExprStruct = 92;
    public static readonly RULE_structExprFields = 93;
    public static readonly RULE_structExprField = 94;
    public static readonly RULE_structBase = 95;
    public static readonly RULE_structExprTuple = 96;
    public static readonly RULE_structExprUnit = 97;
    public static readonly RULE_enumerationVariantExpression = 98;
    public static readonly RULE_enumExprStruct = 99;
    public static readonly RULE_enumExprFields = 100;
    public static readonly RULE_enumExprField = 101;
    public static readonly RULE_enumExprTuple = 102;
    public static readonly RULE_enumExprFieldless = 103;
    public static readonly RULE_callParams = 104;
    public static readonly RULE_closureExpression = 105;
    public static readonly RULE_closureParameters = 106;
    public static readonly RULE_closureParam = 107;
    public static readonly RULE_loopExpression = 108;
    public static readonly RULE_infiniteLoopExpression = 109;
    public static readonly RULE_whileBlockExpression = 110;
    public static readonly RULE_predicateLoopExpression = 111;
    public static readonly RULE_predicatePatternLoopExpression = 112;
    public static readonly RULE_iteratorLoopExpression = 113;
    public static readonly RULE_loopLabel = 114;
    public static readonly RULE_ifExpression = 115;
    public static readonly RULE_ifLetExpression = 116;
    public static readonly RULE_matchExpression = 117;
    public static readonly RULE_matchArms = 118;
    public static readonly RULE_matchArmExpression = 119;
    public static readonly RULE_matchArm = 120;
    public static readonly RULE_matchArmGuard = 121;
    public static readonly RULE_pattern = 122;
    public static readonly RULE_patternNoTopAlt = 123;
    public static readonly RULE_patternWithoutRange = 124;
    public static readonly RULE_literalPattern = 125;
    public static readonly RULE_identifierPattern = 126;
    public static readonly RULE_wildcardPattern = 127;
    public static readonly RULE_restPattern = 128;
    public static readonly RULE_rangePattern = 129;
    public static readonly RULE_rangePatternBound = 130;
    public static readonly RULE_referencePattern = 131;
    public static readonly RULE_structPattern = 132;
    public static readonly RULE_structPatternElements = 133;
    public static readonly RULE_structPatternFields = 134;
    public static readonly RULE_structPatternField = 135;
    public static readonly RULE_structPatternEtCetera = 136;
    public static readonly RULE_tupleStructPattern = 137;
    public static readonly RULE_tupleStructItems = 138;
    public static readonly RULE_tuplePattern = 139;
    public static readonly RULE_tuplePatternItems = 140;
    public static readonly RULE_groupedPattern = 141;
    public static readonly RULE_slicePattern = 142;
    public static readonly RULE_slicePatternItems = 143;
    public static readonly RULE_pathPattern = 144;
    public static readonly RULE_type_ = 145;
    public static readonly RULE_typeNoBounds = 146;
    public static readonly RULE_parenthesizedType = 147;
    public static readonly RULE_neverType = 148;
    public static readonly RULE_tupleType = 149;
    public static readonly RULE_arrayType = 150;
    public static readonly RULE_sliceType = 151;
    public static readonly RULE_referenceType = 152;
    public static readonly RULE_rawPointerType = 153;
    public static readonly RULE_bareFunctionType = 154;
    public static readonly RULE_functionTypeQualifiers = 155;
    public static readonly RULE_bareFunctionReturnType = 156;
    public static readonly RULE_functionParametersMaybeNamedVariadic = 157;
    public static readonly RULE_maybeNamedFunctionParameters = 158;
    public static readonly RULE_maybeNamedParam = 159;
    public static readonly RULE_maybeNamedFunctionParametersVariadic = 160;
    public static readonly RULE_traitObjectType = 161;
    public static readonly RULE_traitObjectTypeOneBound = 162;
    public static readonly RULE_implTraitType = 163;
    public static readonly RULE_implTraitTypeOneBound = 164;
    public static readonly RULE_inferredType = 165;
    public static readonly RULE_typeParamBounds = 166;
    public static readonly RULE_typeParamBound = 167;
    public static readonly RULE_traitBound = 168;
    public static readonly RULE_lifetimeBounds = 169;
    public static readonly RULE_lifetime = 170;
    public static readonly RULE_simplePath = 171;
    public static readonly RULE_simplePathSegment = 172;
    public static readonly RULE_pathInExpression = 173;
    public static readonly RULE_pathExprSegment = 174;
    public static readonly RULE_pathIdentSegment = 175;
    public static readonly RULE_genericArgs = 176;
    public static readonly RULE_genericArg = 177;
    public static readonly RULE_genericArgsConst = 178;
    public static readonly RULE_genericArgsLifetimes = 179;
    public static readonly RULE_genericArgsTypes = 180;
    public static readonly RULE_genericArgsBindings = 181;
    public static readonly RULE_genericArgsBinding = 182;
    public static readonly RULE_qualifiedPathInExpression = 183;
    public static readonly RULE_qualifiedPathType = 184;
    public static readonly RULE_qualifiedPathInType = 185;
    public static readonly RULE_typePath = 186;
    public static readonly RULE_typePathSegment = 187;
    public static readonly RULE_typePathFn = 188;
    public static readonly RULE_typePathInputs = 189;
    public static readonly RULE_visibility = 190;
    public static readonly RULE_identifier = 191;
    public static readonly RULE_keyword = 192;
    public static readonly RULE_macroIdentifierLikeToken = 193;
    public static readonly RULE_macroLiteralToken = 194;
    public static readonly RULE_macroPunctuationToken = 195;
    public static readonly RULE_shl = 196;
    public static readonly RULE_shr = 197;

    public static readonly literalNames = [
        null, "'as'", "'break'", "'const'", "'continue'", "'crate'", "'else'", 
        "'enum'", "'extern'", "'false'", "'fn'", "'for'", "'if'", "'impl'", 
        "'in'", "'let'", "'loop'", "'match'", "'mod'", "'move'", "'mut'", 
        "'pub'", "'ref'", "'return'", "'self'", "'Self'", "'static'", "'struct'", 
        "'super'", "'trait'", "'true'", "'type'", "'unsafe'", "'use'", "'where'", 
        "'while'", "'async'", "'await'", "'dyn'", "'abstract'", "'become'", 
        "'box'", "'do'", "'final'", "'macro'", "'override'", "'priv'", "'typeof'", 
        "'unsized'", "'virtual'", "'yield'", "'try'", "'union'", "''static'", 
        "'macro_rules'", "''_'", "'$crate'", null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "'+'", "'-'", 
        "'*'", "'/'", "'%'", "'^'", "'!'", "'&'", "'|'", "'&&'", "'||'", 
        "'+='", "'-='", "'*='", "'/='", "'%='", "'^='", "'&='", "'|='", 
        "'<<='", "'>>='", "'='", "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", 
        "'@'", "'_'", "'.'", "'..'", "'...'", "'..='", "','", "';'", "':'", 
        "'::'", "'->'", "'=>'", "'#'", "'$'", "'?'", "'{'", "'}'", "'['", 
        "']'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, "KW_AS", "KW_BREAK", "KW_CONST", "KW_CONTINUE", "KW_CRATE", 
        "KW_ELSE", "KW_ENUM", "KW_EXTERN", "KW_FALSE", "KW_FN", "KW_FOR", 
        "KW_IF", "KW_IMPL", "KW_IN", "KW_LET", "KW_LOOP", "KW_MATCH", "KW_MOD", 
        "KW_MOVE", "KW_MUT", "KW_PUB", "KW_REF", "KW_RETURN", "KW_SELFVALUE", 
        "KW_SELFTYPE", "KW_STATIC", "KW_STRUCT", "KW_SUPER", "KW_TRAIT", 
        "KW_TRUE", "KW_TYPE", "KW_UNSAFE", "KW_USE", "KW_WHERE", "KW_WHILE", 
        "KW_ASYNC", "KW_AWAIT", "KW_DYN", "KW_ABSTRACT", "KW_BECOME", "KW_BOX", 
        "KW_DO", "KW_FINAL", "KW_MACRO", "KW_OVERRIDE", "KW_PRIV", "KW_TYPEOF", 
        "KW_UNSIZED", "KW_VIRTUAL", "KW_YIELD", "KW_TRY", "KW_UNION", "KW_STATICLIFETIME", 
        "KW_MACRORULES", "KW_UNDERLINELIFETIME", "KW_DOLLARCRATE", "NON_KEYWORD_IDENTIFIER", 
        "RAW_IDENTIFIER", "LINE_COMMENT", "BLOCK_COMMENT", "INNER_LINE_DOC", 
        "INNER_BLOCK_DOC", "OUTER_LINE_DOC", "OUTER_BLOCK_DOC", "BLOCK_COMMENT_OR_DOC", 
        "SHEBANG", "WHITESPACE", "NEWLINE", "CHAR_LITERAL", "STRING_LITERAL", 
        "RAW_STRING_LITERAL", "BYTE_LITERAL", "BYTE_STRING_LITERAL", "RAW_BYTE_STRING_LITERAL", 
        "INTEGER_LITERAL", "DEC_LITERAL", "HEX_LITERAL", "OCT_LITERAL", 
        "BIN_LITERAL", "FLOAT_LITERAL", "LIFETIME_OR_LABEL", "PLUS", "MINUS", 
        "STAR", "SLASH", "PERCENT", "CARET", "NOT", "AND", "OR", "ANDAND", 
        "OROR", "PLUSEQ", "MINUSEQ", "STAREQ", "SLASHEQ", "PERCENTEQ", "CARETEQ", 
        "ANDEQ", "OREQ", "SHLEQ", "SHREQ", "EQ", "EQEQ", "NE", "GT", "LT", 
        "GE", "LE", "AT", "UNDERSCORE", "DOT", "DOTDOT", "DOTDOTDOT", "DOTDOTEQ", 
        "COMMA", "SEMI", "COLON", "PATHSEP", "RARROW", "FATARROW", "POUND", 
        "DOLLAR", "QUESTION", "LCURLYBRACE", "RCURLYBRACE", "LSQUAREBRACKET", 
        "RSQUAREBRACKET", "LPAREN", "RPAREN"
    ];
    public static readonly ruleNames = [
        "crate", "macroInvocation", "delimTokenTree", "tokenTree", "tokenTreeToken", 
        "macroInvocationSemi", "macroRulesDefinition", "macroRulesDef", 
        "macroRules", "macroRule", "macroMatcher", "macroMatch", "macroMatchToken", 
        "macroFragSpec", "macroRepSep", "macroRepOp", "macroTranscriber", 
        "item", "visItem", "macroItem", "module", "externCrate", "crateRef", 
        "asClause", "useDeclaration", "useTree", "functionBlockExpression", 
        "function_", "functionQualifiers", "abi", "functionParameters", 
        "selfParam", "shorthandSelf", "typedSelf", "functionParam", "functionParamPattern", 
        "functionReturnType", "typeAlias", "struct_", "structStruct", "tupleStruct", 
        "structFields", "structField", "tupleFields", "tupleField", "enumeration", 
        "enumItems", "enumItem", "enumItemTuple", "enumItemStruct", "enumItemDiscriminant", 
        "union_", "constantItem", "staticItem", "trait_", "implementation", 
        "inherentImpl", "traitImpl", "externBlock", "externalItem", "genericParams", 
        "genericParam", "lifetimeParam", "typeParam", "constParam", "whereClause", 
        "whereClauseItem", "lifetimeWhereClauseItem", "typeBoundWhereClauseItem", 
        "forLifetimes", "associatedItem", "innerAttribute", "outerAttribute", 
        "attr", "attrInput", "statement", "letStatement", "expressionStatement", 
        "expression", "comparisonOperator", "compoundAssignOperator", "expressionWithBlock", 
        "literalExpression", "pathExpression", "blockExpression", "statements", 
        "asyncBlockExpression", "unsafeBlockExpression", "arrayElements", 
        "tupleElements", "tupleIndex", "structExpression", "structExprStruct", 
        "structExprFields", "structExprField", "structBase", "structExprTuple", 
        "structExprUnit", "enumerationVariantExpression", "enumExprStruct", 
        "enumExprFields", "enumExprField", "enumExprTuple", "enumExprFieldless", 
        "callParams", "closureExpression", "closureParameters", "closureParam", 
        "loopExpression", "infiniteLoopExpression", "whileBlockExpression", 
        "predicateLoopExpression", "predicatePatternLoopExpression", "iteratorLoopExpression", 
        "loopLabel", "ifExpression", "ifLetExpression", "matchExpression", 
        "matchArms", "matchArmExpression", "matchArm", "matchArmGuard", 
        "pattern", "patternNoTopAlt", "patternWithoutRange", "literalPattern", 
        "identifierPattern", "wildcardPattern", "restPattern", "rangePattern", 
        "rangePatternBound", "referencePattern", "structPattern", "structPatternElements", 
        "structPatternFields", "structPatternField", "structPatternEtCetera", 
        "tupleStructPattern", "tupleStructItems", "tuplePattern", "tuplePatternItems", 
        "groupedPattern", "slicePattern", "slicePatternItems", "pathPattern", 
        "type_", "typeNoBounds", "parenthesizedType", "neverType", "tupleType", 
        "arrayType", "sliceType", "referenceType", "rawPointerType", "bareFunctionType", 
        "functionTypeQualifiers", "bareFunctionReturnType", "functionParametersMaybeNamedVariadic", 
        "maybeNamedFunctionParameters", "maybeNamedParam", "maybeNamedFunctionParametersVariadic", 
        "traitObjectType", "traitObjectTypeOneBound", "implTraitType", "implTraitTypeOneBound", 
        "inferredType", "typeParamBounds", "typeParamBound", "traitBound", 
        "lifetimeBounds", "lifetime", "simplePath", "simplePathSegment", 
        "pathInExpression", "pathExprSegment", "pathIdentSegment", "genericArgs", 
        "genericArg", "genericArgsConst", "genericArgsLifetimes", "genericArgsTypes", 
        "genericArgsBindings", "genericArgsBinding", "qualifiedPathInExpression", 
        "qualifiedPathType", "qualifiedPathInType", "typePath", "typePathSegment", 
        "typePathFn", "typePathInputs", "visibility", "identifier", "keyword", 
        "macroIdentifierLikeToken", "macroLiteralToken", "macroPunctuationToken", 
        "shl", "shr",
    ];

    public get grammarFileName(): string { return "RustParser.g4"; }
    public get literalNames(): (string | null)[] { return RustParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return RustParser.symbolicNames; }
    public get ruleNames(): string[] { return RustParser.ruleNames; }
    public get serializedATN(): number[] { return RustParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, RustParser._ATN, RustParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public crate(): CrateContext {
        let localContext = new CrateContext(this.context, this.state);
        this.enterRule(localContext, 0, RustParser.RULE_crate);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 399;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 396;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 401;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            }
            this.state = 405;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3173262760) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 122683411) !== 0) || _la === 119 || _la === 122) {
                {
                {
                this.state = 402;
                this.item();
                }
                }
                this.state = 407;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 408;
            this.match(RustParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroInvocation(): MacroInvocationContext {
        let localContext = new MacroInvocationContext(this.context, this.state);
        this.enterRule(localContext, 2, RustParser.RULE_macroInvocation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 410;
            this.simplePath();
            this.state = 411;
            this.match(RustParser.NOT);
            this.state = 412;
            this.delimTokenTree();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public delimTokenTree(): DelimTokenTreeContext {
        let localContext = new DelimTokenTreeContext(this.context, this.state);
        this.enterRule(localContext, 4, RustParser.RULE_delimTokenTree);
        let _la: number;
        try {
            this.state = 438;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 414;
                this.match(RustParser.LPAREN);
                this.state = 418;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 369098751) !== 0)) {
                    {
                    {
                    this.state = 415;
                    this.tokenTree();
                    }
                    }
                    this.state = 420;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 421;
                this.match(RustParser.RPAREN);
                }
                break;
            case RustParser.LSQUAREBRACKET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 422;
                this.match(RustParser.LSQUAREBRACKET);
                this.state = 426;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 369098751) !== 0)) {
                    {
                    {
                    this.state = 423;
                    this.tokenTree();
                    }
                    }
                    this.state = 428;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 429;
                this.match(RustParser.RSQUAREBRACKET);
                }
                break;
            case RustParser.LCURLYBRACE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 430;
                this.match(RustParser.LCURLYBRACE);
                this.state = 434;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 369098751) !== 0)) {
                    {
                    {
                    this.state = 431;
                    this.tokenTree();
                    }
                    }
                    this.state = 436;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 437;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tokenTree(): TokenTreeContext {
        let localContext = new TokenTreeContext(this.context, this.state);
        this.enterRule(localContext, 6, RustParser.RULE_tokenTree);
        try {
            let alternative: number;
            this.state = 446;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_AS:
            case RustParser.KW_BREAK:
            case RustParser.KW_CONST:
            case RustParser.KW_CONTINUE:
            case RustParser.KW_CRATE:
            case RustParser.KW_ELSE:
            case RustParser.KW_ENUM:
            case RustParser.KW_EXTERN:
            case RustParser.KW_FALSE:
            case RustParser.KW_FN:
            case RustParser.KW_FOR:
            case RustParser.KW_IF:
            case RustParser.KW_IMPL:
            case RustParser.KW_IN:
            case RustParser.KW_LET:
            case RustParser.KW_LOOP:
            case RustParser.KW_MATCH:
            case RustParser.KW_MOD:
            case RustParser.KW_MOVE:
            case RustParser.KW_MUT:
            case RustParser.KW_PUB:
            case RustParser.KW_REF:
            case RustParser.KW_RETURN:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_STATIC:
            case RustParser.KW_STRUCT:
            case RustParser.KW_SUPER:
            case RustParser.KW_TRAIT:
            case RustParser.KW_TRUE:
            case RustParser.KW_TYPE:
            case RustParser.KW_UNSAFE:
            case RustParser.KW_USE:
            case RustParser.KW_WHERE:
            case RustParser.KW_WHILE:
            case RustParser.KW_ASYNC:
            case RustParser.KW_AWAIT:
            case RustParser.KW_DYN:
            case RustParser.KW_ABSTRACT:
            case RustParser.KW_BECOME:
            case RustParser.KW_BOX:
            case RustParser.KW_DO:
            case RustParser.KW_FINAL:
            case RustParser.KW_MACRO:
            case RustParser.KW_OVERRIDE:
            case RustParser.KW_PRIV:
            case RustParser.KW_TYPEOF:
            case RustParser.KW_UNSIZED:
            case RustParser.KW_VIRTUAL:
            case RustParser.KW_YIELD:
            case RustParser.KW_TRY:
            case RustParser.KW_UNION:
            case RustParser.KW_STATICLIFETIME:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_UNDERLINELIFETIME:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.CHAR_LITERAL:
            case RustParser.STRING_LITERAL:
            case RustParser.RAW_STRING_LITERAL:
            case RustParser.BYTE_LITERAL:
            case RustParser.BYTE_STRING_LITERAL:
            case RustParser.RAW_BYTE_STRING_LITERAL:
            case RustParser.INTEGER_LITERAL:
            case RustParser.FLOAT_LITERAL:
            case RustParser.LIFETIME_OR_LABEL:
            case RustParser.PLUS:
            case RustParser.MINUS:
            case RustParser.STAR:
            case RustParser.SLASH:
            case RustParser.PERCENT:
            case RustParser.CARET:
            case RustParser.NOT:
            case RustParser.AND:
            case RustParser.OR:
            case RustParser.ANDAND:
            case RustParser.OROR:
            case RustParser.PLUSEQ:
            case RustParser.MINUSEQ:
            case RustParser.STAREQ:
            case RustParser.SLASHEQ:
            case RustParser.PERCENTEQ:
            case RustParser.CARETEQ:
            case RustParser.ANDEQ:
            case RustParser.OREQ:
            case RustParser.SHLEQ:
            case RustParser.SHREQ:
            case RustParser.EQ:
            case RustParser.EQEQ:
            case RustParser.NE:
            case RustParser.GT:
            case RustParser.LT:
            case RustParser.GE:
            case RustParser.LE:
            case RustParser.AT:
            case RustParser.UNDERSCORE:
            case RustParser.DOT:
            case RustParser.DOTDOT:
            case RustParser.DOTDOTDOT:
            case RustParser.DOTDOTEQ:
            case RustParser.COMMA:
            case RustParser.SEMI:
            case RustParser.COLON:
            case RustParser.PATHSEP:
            case RustParser.RARROW:
            case RustParser.FATARROW:
            case RustParser.POUND:
            case RustParser.DOLLAR:
            case RustParser.QUESTION:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 441;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 440;
                        this.tokenTreeToken();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 443;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case RustParser.LCURLYBRACE:
            case RustParser.LSQUAREBRACKET:
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 445;
                this.delimTokenTree();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tokenTreeToken(): TokenTreeTokenContext {
        let localContext = new TokenTreeTokenContext(this.context, this.state);
        this.enterRule(localContext, 8, RustParser.RULE_tokenTreeToken);
        try {
            this.state = 453;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 448;
                this.macroIdentifierLikeToken();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 449;
                this.macroLiteralToken();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 450;
                this.macroPunctuationToken();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 451;
                this.macroRepOp();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 452;
                this.match(RustParser.DOLLAR);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroInvocationSemi(): MacroInvocationSemiContext {
        let localContext = new MacroInvocationSemiContext(this.context, this.state);
        this.enterRule(localContext, 10, RustParser.RULE_macroInvocationSemi);
        let _la: number;
        try {
            this.state = 490;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 455;
                this.simplePath();
                this.state = 456;
                this.match(RustParser.NOT);
                this.state = 457;
                this.match(RustParser.LPAREN);
                this.state = 461;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 369098751) !== 0)) {
                    {
                    {
                    this.state = 458;
                    this.tokenTree();
                    }
                    }
                    this.state = 463;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 464;
                this.match(RustParser.RPAREN);
                this.state = 465;
                this.match(RustParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 467;
                this.simplePath();
                this.state = 468;
                this.match(RustParser.NOT);
                this.state = 469;
                this.match(RustParser.LSQUAREBRACKET);
                this.state = 473;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 369098751) !== 0)) {
                    {
                    {
                    this.state = 470;
                    this.tokenTree();
                    }
                    }
                    this.state = 475;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 476;
                this.match(RustParser.RSQUAREBRACKET);
                this.state = 477;
                this.match(RustParser.SEMI);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 479;
                this.simplePath();
                this.state = 480;
                this.match(RustParser.NOT);
                this.state = 481;
                this.match(RustParser.LCURLYBRACE);
                this.state = 485;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 369098751) !== 0)) {
                    {
                    {
                    this.state = 482;
                    this.tokenTree();
                    }
                    }
                    this.state = 487;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 488;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRulesDefinition(): MacroRulesDefinitionContext {
        let localContext = new MacroRulesDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 12, RustParser.RULE_macroRulesDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 492;
            this.match(RustParser.KW_MACRORULES);
            this.state = 493;
            this.match(RustParser.NOT);
            this.state = 494;
            this.identifier();
            this.state = 495;
            this.macroRulesDef();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRulesDef(): MacroRulesDefContext {
        let localContext = new MacroRulesDefContext(this.context, this.state);
        this.enterRule(localContext, 14, RustParser.RULE_macroRulesDef);
        try {
            this.state = 511;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 497;
                this.match(RustParser.LPAREN);
                this.state = 498;
                this.macroRules();
                this.state = 499;
                this.match(RustParser.RPAREN);
                this.state = 500;
                this.match(RustParser.SEMI);
                }
                break;
            case RustParser.LSQUAREBRACKET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 502;
                this.match(RustParser.LSQUAREBRACKET);
                this.state = 503;
                this.macroRules();
                this.state = 504;
                this.match(RustParser.RSQUAREBRACKET);
                this.state = 505;
                this.match(RustParser.SEMI);
                }
                break;
            case RustParser.LCURLYBRACE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 507;
                this.match(RustParser.LCURLYBRACE);
                this.state = 508;
                this.macroRules();
                this.state = 509;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRules(): MacroRulesContext {
        let localContext = new MacroRulesContext(this.context, this.state);
        this.enterRule(localContext, 16, RustParser.RULE_macroRules);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 513;
            this.macroRule();
            this.state = 518;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 514;
                    this.match(RustParser.SEMI);
                    this.state = 515;
                    this.macroRule();
                    }
                    }
                }
                this.state = 520;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            }
            this.state = 522;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 117) {
                {
                this.state = 521;
                this.match(RustParser.SEMI);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRule(): MacroRuleContext {
        let localContext = new MacroRuleContext(this.context, this.state);
        this.enterRule(localContext, 18, RustParser.RULE_macroRule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 524;
            this.macroMatcher();
            this.state = 525;
            this.match(RustParser.FATARROW);
            this.state = 526;
            this.macroTranscriber();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroMatcher(): MacroMatcherContext {
        let localContext = new MacroMatcherContext(this.context, this.state);
        this.enterRule(localContext, 20, RustParser.RULE_macroMatcher);
        let _la: number;
        try {
            this.state = 552;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 528;
                this.match(RustParser.LPAREN);
                this.state = 532;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 369098751) !== 0)) {
                    {
                    {
                    this.state = 529;
                    this.macroMatch();
                    }
                    }
                    this.state = 534;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 535;
                this.match(RustParser.RPAREN);
                }
                break;
            case RustParser.LSQUAREBRACKET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 536;
                this.match(RustParser.LSQUAREBRACKET);
                this.state = 540;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 369098751) !== 0)) {
                    {
                    {
                    this.state = 537;
                    this.macroMatch();
                    }
                    }
                    this.state = 542;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 543;
                this.match(RustParser.RSQUAREBRACKET);
                }
                break;
            case RustParser.LCURLYBRACE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 544;
                this.match(RustParser.LCURLYBRACE);
                this.state = 548;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 369098751) !== 0)) {
                    {
                    {
                    this.state = 545;
                    this.macroMatch();
                    }
                    }
                    this.state = 550;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 551;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroMatch(): MacroMatchContext {
        let localContext = new MacroMatchContext(this.context, this.state);
        this.enterRule(localContext, 22, RustParser.RULE_macroMatch);
        let _la: number;
        try {
            let alternative: number;
            this.state = 580;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 555;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 554;
                        this.macroMatchToken();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 557;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 559;
                this.macroMatcher();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 560;
                this.match(RustParser.DOLLAR);
                this.state = 563;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_MACRORULES:
                case RustParser.NON_KEYWORD_IDENTIFIER:
                case RustParser.RAW_IDENTIFIER:
                    {
                    this.state = 561;
                    this.identifier();
                    }
                    break;
                case RustParser.KW_SELFVALUE:
                    {
                    this.state = 562;
                    this.match(RustParser.KW_SELFVALUE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 565;
                this.match(RustParser.COLON);
                this.state = 566;
                this.macroFragSpec();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 567;
                this.match(RustParser.DOLLAR);
                this.state = 568;
                this.match(RustParser.LPAREN);
                this.state = 570;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 569;
                    this.macroMatch();
                    }
                    }
                    this.state = 572;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 369098751) !== 0));
                this.state = 574;
                this.match(RustParser.RPAREN);
                this.state = 576;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294924415) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 8388607) !== 0)) {
                    {
                    this.state = 575;
                    this.macroRepSep();
                    }
                }

                this.state = 578;
                this.macroRepOp();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroMatchToken(): MacroMatchTokenContext {
        let localContext = new MacroMatchTokenContext(this.context, this.state);
        this.enterRule(localContext, 24, RustParser.RULE_macroMatchToken);
        try {
            this.state = 586;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 582;
                this.macroIdentifierLikeToken();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 583;
                this.macroLiteralToken();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 584;
                this.macroPunctuationToken();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 585;
                this.macroRepOp();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroFragSpec(): MacroFragSpecContext {
        let localContext = new MacroFragSpecContext(this.context, this.state);
        this.enterRule(localContext, 26, RustParser.RULE_macroFragSpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 588;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRepSep(): MacroRepSepContext {
        let localContext = new MacroRepSepContext(this.context, this.state);
        this.enterRule(localContext, 28, RustParser.RULE_macroRepSep);
        try {
            this.state = 594;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 590;
                this.macroIdentifierLikeToken();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 591;
                this.macroLiteralToken();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 592;
                this.macroPunctuationToken();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 593;
                this.match(RustParser.DOLLAR);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRepOp(): MacroRepOpContext {
        let localContext = new MacroRepOpContext(this.context, this.state);
        this.enterRule(localContext, 30, RustParser.RULE_macroRepOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 596;
            _la = this.tokenStream.LA(1);
            if(!(_la === 82 || _la === 84 || _la === 124)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroTranscriber(): MacroTranscriberContext {
        let localContext = new MacroTranscriberContext(this.context, this.state);
        this.enterRule(localContext, 32, RustParser.RULE_macroTranscriber);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 598;
            this.delimTokenTree();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public item(): ItemContext {
        let localContext = new ItemContext(this.context, this.state);
        this.enterRule(localContext, 34, RustParser.RULE_item);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 603;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 600;
                this.outerAttribute();
                }
                }
                this.state = 605;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 608;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CONST:
            case RustParser.KW_ENUM:
            case RustParser.KW_EXTERN:
            case RustParser.KW_FN:
            case RustParser.KW_IMPL:
            case RustParser.KW_MOD:
            case RustParser.KW_PUB:
            case RustParser.KW_STATIC:
            case RustParser.KW_STRUCT:
            case RustParser.KW_TRAIT:
            case RustParser.KW_TYPE:
            case RustParser.KW_UNSAFE:
            case RustParser.KW_USE:
            case RustParser.KW_ASYNC:
            case RustParser.KW_UNION:
                {
                this.state = 606;
                this.visItem();
                }
                break;
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
                {
                this.state = 607;
                this.macroItem();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public visItem(): VisItemContext {
        let localContext = new VisItemContext(this.context, this.state);
        this.enterRule(localContext, 36, RustParser.RULE_visItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 611;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 610;
                this.visibility();
                }
            }

            this.state = 626;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                {
                this.state = 613;
                this.module_();
                }
                break;
            case 2:
                {
                this.state = 614;
                this.externCrate();
                }
                break;
            case 3:
                {
                this.state = 615;
                this.useDeclaration();
                }
                break;
            case 4:
                {
                this.state = 616;
                this.function_();
                }
                break;
            case 5:
                {
                this.state = 617;
                this.typeAlias();
                }
                break;
            case 6:
                {
                this.state = 618;
                this.struct_();
                }
                break;
            case 7:
                {
                this.state = 619;
                this.enumeration();
                }
                break;
            case 8:
                {
                this.state = 620;
                this.union_();
                }
                break;
            case 9:
                {
                this.state = 621;
                this.constantItem();
                }
                break;
            case 10:
                {
                this.state = 622;
                this.staticItem();
                }
                break;
            case 11:
                {
                this.state = 623;
                this.trait_();
                }
                break;
            case 12:
                {
                this.state = 624;
                this.implementation();
                }
                break;
            case 13:
                {
                this.state = 625;
                this.externBlock();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroItem(): MacroItemContext {
        let localContext = new MacroItemContext(this.context, this.state);
        this.enterRule(localContext, 38, RustParser.RULE_macroItem);
        try {
            this.state = 630;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 628;
                this.macroInvocationSemi();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 629;
                this.macroRulesDefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_(): ModuleContext {
        let localContext = new ModuleContext(this.context, this.state);
        this.enterRule(localContext, 40, RustParser.RULE_module);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 633;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 632;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 635;
            this.match(RustParser.KW_MOD);
            this.state = 636;
            this.identifier();
            this.state = 652;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.SEMI:
                {
                this.state = 637;
                this.match(RustParser.SEMI);
                }
                break;
            case RustParser.LCURLYBRACE:
                {
                this.state = 638;
                this.match(RustParser.LCURLYBRACE);
                this.state = 642;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 639;
                        this.innerAttribute();
                        }
                        }
                    }
                    this.state = 644;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
                }
                this.state = 648;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3173262760) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 122683411) !== 0) || _la === 119 || _la === 122) {
                    {
                    {
                    this.state = 645;
                    this.item();
                    }
                    }
                    this.state = 650;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 651;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public externCrate(): ExternCrateContext {
        let localContext = new ExternCrateContext(this.context, this.state);
        this.enterRule(localContext, 42, RustParser.RULE_externCrate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 654;
            this.match(RustParser.KW_EXTERN);
            this.state = 655;
            this.match(RustParser.KW_CRATE);
            this.state = 656;
            this.crateRef();
            this.state = 658;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 657;
                this.asClause();
                }
            }

            this.state = 660;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public crateRef(): CrateRefContext {
        let localContext = new CrateRefContext(this.context, this.state);
        this.enterRule(localContext, 44, RustParser.RULE_crateRef);
        try {
            this.state = 664;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 662;
                this.identifier();
                }
                break;
            case RustParser.KW_SELFVALUE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 663;
                this.match(RustParser.KW_SELFVALUE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public asClause(): AsClauseContext {
        let localContext = new AsClauseContext(this.context, this.state);
        this.enterRule(localContext, 46, RustParser.RULE_asClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 666;
            this.match(RustParser.KW_AS);
            this.state = 669;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                {
                this.state = 667;
                this.identifier();
                }
                break;
            case RustParser.UNDERSCORE:
                {
                this.state = 668;
                this.match(RustParser.UNDERSCORE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public useDeclaration(): UseDeclarationContext {
        let localContext = new UseDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 48, RustParser.RULE_useDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 671;
            this.match(RustParser.KW_USE);
            this.state = 672;
            this.useTree();
            this.state = 673;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public useTree(): UseTreeContext {
        let localContext = new UseTreeContext(this.context, this.state);
        this.enterRule(localContext, 50, RustParser.RULE_useTree);
        let _la: number;
        try {
            let alternative: number;
            this.state = 707;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 679;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 285212704) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 29) !== 0) || _la === 119) {
                    {
                    this.state = 676;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
                    case 1:
                        {
                        this.state = 675;
                        this.simplePath();
                        }
                        break;
                    }
                    this.state = 678;
                    this.match(RustParser.PATHSEP);
                    }
                }

                this.state = 697;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.STAR:
                    {
                    this.state = 681;
                    this.match(RustParser.STAR);
                    }
                    break;
                case RustParser.LCURLYBRACE:
                    {
                    this.state = 682;
                    this.match(RustParser.LCURLYBRACE);
                    this.state = 694;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 285212704) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 1073741853) !== 0) || _la === 119 || _la === 125) {
                        {
                        this.state = 683;
                        this.useTree();
                        this.state = 688;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                {
                                this.state = 684;
                                this.match(RustParser.COMMA);
                                this.state = 685;
                                this.useTree();
                                }
                                }
                            }
                            this.state = 690;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
                        }
                        this.state = 692;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 116) {
                            {
                            this.state = 691;
                            this.match(RustParser.COMMA);
                            }
                        }

                        }
                    }

                    this.state = 696;
                    this.match(RustParser.RCURLYBRACE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 699;
                this.simplePath();
                this.state = 705;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 700;
                    this.match(RustParser.KW_AS);
                    this.state = 703;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case RustParser.KW_MACRORULES:
                    case RustParser.NON_KEYWORD_IDENTIFIER:
                    case RustParser.RAW_IDENTIFIER:
                        {
                        this.state = 701;
                        this.identifier();
                        }
                        break;
                    case RustParser.UNDERSCORE:
                        {
                        this.state = 702;
                        this.match(RustParser.UNDERSCORE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionBlockExpression(): FunctionBlockExpressionContext {
        let localContext = new FunctionBlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 52, RustParser.RULE_functionBlockExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 709;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public function_(): Function_Context {
        let localContext = new Function_Context(this.context, this.state);
        this.enterRule(localContext, 54, RustParser.RULE_function_);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 711;
            this.functionQualifiers();
            this.state = 712;
            this.match(RustParser.KW_FN);
            this.state = 713;
            this.identifier();
            this.state = 715;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 714;
                this.genericParams();
                }
            }

            this.state = 717;
            this.match(RustParser.LPAREN);
            this.state = 719;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1397763872) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 132120641) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 7919743) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 5411025) !== 0)) {
                {
                this.state = 718;
                this.functionParameters();
                }
            }

            this.state = 721;
            this.match(RustParser.RPAREN);
            this.state = 723;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 120) {
                {
                this.state = 722;
                this.functionReturnType();
                }
            }

            this.state = 726;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 725;
                this.whereClause();
                }
            }

            this.state = 730;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LCURLYBRACE:
                {
                this.state = 728;
                this.functionBlockExpression();
                }
                break;
            case RustParser.SEMI:
                {
                this.state = 729;
                this.match(RustParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionQualifiers(): FunctionQualifiersContext {
        let localContext = new FunctionQualifiersContext(this.context, this.state);
        this.enterRule(localContext, 56, RustParser.RULE_functionQualifiers);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 733;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 732;
                this.match(RustParser.KW_CONST);
                }
            }

            this.state = 736;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 735;
                this.match(RustParser.KW_ASYNC);
                }
            }

            this.state = 739;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 738;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 745;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8) {
                {
                this.state = 741;
                this.match(RustParser.KW_EXTERN);
                this.state = 743;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70 || _la === 71) {
                    {
                    this.state = 742;
                    this.abi();
                    }
                }

                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public abi(): AbiContext {
        let localContext = new AbiContext(this.context, this.state);
        this.enterRule(localContext, 58, RustParser.RULE_abi);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 747;
            _la = this.tokenStream.LA(1);
            if(!(_la === 70 || _la === 71)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParameters(): FunctionParametersContext {
        let localContext = new FunctionParametersContext(this.context, this.state);
        this.enterRule(localContext, 60, RustParser.RULE_functionParameters);
        let _la: number;
        try {
            let alternative: number;
            this.state = 769;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 749;
                this.selfParam();
                this.state = 751;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 750;
                    this.match(RustParser.COMMA);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 756;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
                case 1:
                    {
                    this.state = 753;
                    this.selfParam();
                    this.state = 754;
                    this.match(RustParser.COMMA);
                    }
                    break;
                }
                this.state = 758;
                this.functionParam();
                this.state = 763;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 759;
                        this.match(RustParser.COMMA);
                        this.state = 760;
                        this.functionParam();
                        }
                        }
                    }
                    this.state = 765;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
                }
                this.state = 767;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 766;
                    this.match(RustParser.COMMA);
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selfParam(): SelfParamContext {
        let localContext = new SelfParamContext(this.context, this.state);
        this.enterRule(localContext, 62, RustParser.RULE_selfParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 774;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 771;
                this.outerAttribute();
                }
                }
                this.state = 776;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 779;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
            case 1:
                {
                this.state = 777;
                this.shorthandSelf();
                }
                break;
            case 2:
                {
                this.state = 778;
                this.typedSelf();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public shorthandSelf(): ShorthandSelfContext {
        let localContext = new ShorthandSelfContext(this.context, this.state);
        this.enterRule(localContext, 64, RustParser.RULE_shorthandSelf);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 785;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 89) {
                {
                this.state = 781;
                this.match(RustParser.AND);
                this.state = 783;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435461) !== 0)) {
                    {
                    this.state = 782;
                    this.lifetime();
                    }
                }

                }
            }

            this.state = 788;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 787;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 790;
            this.match(RustParser.KW_SELFVALUE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typedSelf(): TypedSelfContext {
        let localContext = new TypedSelfContext(this.context, this.state);
        this.enterRule(localContext, 66, RustParser.RULE_typedSelf);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 793;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 792;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 795;
            this.match(RustParser.KW_SELFVALUE);
            this.state = 796;
            this.match(RustParser.COLON);
            this.state = 797;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParam(): FunctionParamContext {
        let localContext = new FunctionParamContext(this.context, this.state);
        this.enterRule(localContext, 68, RustParser.RULE_functionParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 802;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 799;
                this.outerAttribute();
                }
                }
                this.state = 804;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 808;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
            case 1:
                {
                this.state = 805;
                this.functionParamPattern();
                }
                break;
            case 2:
                {
                this.state = 806;
                this.match(RustParser.DOTDOTDOT);
                }
                break;
            case 3:
                {
                this.state = 807;
                this.type_();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParamPattern(): FunctionParamPatternContext {
        let localContext = new FunctionParamPatternContext(this.context, this.state);
        this.enterRule(localContext, 70, RustParser.RULE_functionParamPattern);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 810;
            this.pattern();
            this.state = 811;
            this.match(RustParser.COLON);
            this.state = 814;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CRATE:
            case RustParser.KW_EXTERN:
            case RustParser.KW_FN:
            case RustParser.KW_FOR:
            case RustParser.KW_IMPL:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_UNSAFE:
            case RustParser.KW_DYN:
            case RustParser.KW_STATICLIFETIME:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_UNDERLINELIFETIME:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.LIFETIME_OR_LABEL:
            case RustParser.STAR:
            case RustParser.NOT:
            case RustParser.AND:
            case RustParser.LT:
            case RustParser.UNDERSCORE:
            case RustParser.PATHSEP:
            case RustParser.QUESTION:
            case RustParser.LSQUAREBRACKET:
            case RustParser.LPAREN:
                {
                this.state = 812;
                this.type_();
                }
                break;
            case RustParser.DOTDOTDOT:
                {
                this.state = 813;
                this.match(RustParser.DOTDOTDOT);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionReturnType(): FunctionReturnTypeContext {
        let localContext = new FunctionReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 72, RustParser.RULE_functionReturnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 816;
            this.match(RustParser.RARROW);
            this.state = 817;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeAlias(): TypeAliasContext {
        let localContext = new TypeAliasContext(this.context, this.state);
        this.enterRule(localContext, 74, RustParser.RULE_typeAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 819;
            this.match(RustParser.KW_TYPE);
            this.state = 820;
            this.identifier();
            this.state = 822;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 821;
                this.genericParams();
                }
            }

            this.state = 825;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 824;
                this.whereClause();
                }
            }

            this.state = 829;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 103) {
                {
                this.state = 827;
                this.match(RustParser.EQ);
                this.state = 828;
                this.type_();
                }
            }

            this.state = 831;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public struct_(): Struct_Context {
        let localContext = new Struct_Context(this.context, this.state);
        this.enterRule(localContext, 76, RustParser.RULE_struct_);
        try {
            this.state = 835;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 833;
                this.structStruct();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 834;
                this.tupleStruct();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structStruct(): StructStructContext {
        let localContext = new StructStructContext(this.context, this.state);
        this.enterRule(localContext, 78, RustParser.RULE_structStruct);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 837;
            this.match(RustParser.KW_STRUCT);
            this.state = 838;
            this.identifier();
            this.state = 840;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 839;
                this.genericParams();
                }
            }

            this.state = 843;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 842;
                this.whereClause();
                }
            }

            this.state = 851;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LCURLYBRACE:
                {
                this.state = 845;
                this.match(RustParser.LCURLYBRACE);
                this.state = 847;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 122) {
                    {
                    this.state = 846;
                    this.structFields();
                    }
                }

                this.state = 849;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            case RustParser.SEMI:
                {
                this.state = 850;
                this.match(RustParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleStruct(): TupleStructContext {
        let localContext = new TupleStructContext(this.context, this.state);
        this.enterRule(localContext, 80, RustParser.RULE_tupleStruct);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 853;
            this.match(RustParser.KW_STRUCT);
            this.state = 854;
            this.identifier();
            this.state = 856;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 855;
                this.genericParams();
                }
            }

            this.state = 858;
            this.match(RustParser.LPAREN);
            this.state = 860;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 320875808) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 132120641) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 1140851081) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 1321) !== 0)) {
                {
                this.state = 859;
                this.tupleFields();
                }
            }

            this.state = 862;
            this.match(RustParser.RPAREN);
            this.state = 864;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 863;
                this.whereClause();
                }
            }

            this.state = 866;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structFields(): StructFieldsContext {
        let localContext = new StructFieldsContext(this.context, this.state);
        this.enterRule(localContext, 82, RustParser.RULE_structFields);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 868;
            this.structField();
            this.state = 873;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 83, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 869;
                    this.match(RustParser.COMMA);
                    this.state = 870;
                    this.structField();
                    }
                    }
                }
                this.state = 875;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 83, this.context);
            }
            this.state = 877;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 876;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structField(): StructFieldContext {
        let localContext = new StructFieldContext(this.context, this.state);
        this.enterRule(localContext, 84, RustParser.RULE_structField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 882;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 879;
                this.outerAttribute();
                }
                }
                this.state = 884;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 886;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 885;
                this.visibility();
                }
            }

            this.state = 888;
            this.identifier();
            this.state = 889;
            this.match(RustParser.COLON);
            this.state = 890;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleFields(): TupleFieldsContext {
        let localContext = new TupleFieldsContext(this.context, this.state);
        this.enterRule(localContext, 86, RustParser.RULE_tupleFields);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 892;
            this.tupleField();
            this.state = 897;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 893;
                    this.match(RustParser.COMMA);
                    this.state = 894;
                    this.tupleField();
                    }
                    }
                }
                this.state = 899;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context);
            }
            this.state = 901;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 900;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleField(): TupleFieldContext {
        let localContext = new TupleFieldContext(this.context, this.state);
        this.enterRule(localContext, 88, RustParser.RULE_tupleField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 906;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 903;
                this.outerAttribute();
                }
                }
                this.state = 908;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 910;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 909;
                this.visibility();
                }
            }

            this.state = 912;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumeration(): EnumerationContext {
        let localContext = new EnumerationContext(this.context, this.state);
        this.enterRule(localContext, 90, RustParser.RULE_enumeration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 914;
            this.match(RustParser.KW_ENUM);
            this.state = 915;
            this.identifier();
            this.state = 917;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 916;
                this.genericParams();
                }
            }

            this.state = 920;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 919;
                this.whereClause();
                }
            }

            this.state = 922;
            this.match(RustParser.LCURLYBRACE);
            this.state = 924;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 122) {
                {
                this.state = 923;
                this.enumItems();
                }
            }

            this.state = 926;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumItems(): EnumItemsContext {
        let localContext = new EnumItemsContext(this.context, this.state);
        this.enterRule(localContext, 92, RustParser.RULE_enumItems);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 928;
            this.enumItem();
            this.state = 933;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 94, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 929;
                    this.match(RustParser.COMMA);
                    this.state = 930;
                    this.enumItem();
                    }
                    }
                }
                this.state = 935;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 94, this.context);
            }
            this.state = 937;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 936;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumItem(): EnumItemContext {
        let localContext = new EnumItemContext(this.context, this.state);
        this.enterRule(localContext, 94, RustParser.RULE_enumItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 942;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 939;
                this.outerAttribute();
                }
                }
                this.state = 944;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 946;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 945;
                this.visibility();
                }
            }

            this.state = 948;
            this.identifier();
            this.state = 952;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LPAREN:
                {
                this.state = 949;
                this.enumItemTuple();
                }
                break;
            case RustParser.LCURLYBRACE:
                {
                this.state = 950;
                this.enumItemStruct();
                }
                break;
            case RustParser.EQ:
                {
                this.state = 951;
                this.enumItemDiscriminant();
                }
                break;
            case RustParser.COMMA:
            case RustParser.RCURLYBRACE:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumItemTuple(): EnumItemTupleContext {
        let localContext = new EnumItemTupleContext(this.context, this.state);
        this.enterRule(localContext, 96, RustParser.RULE_enumItemTuple);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 954;
            this.match(RustParser.LPAREN);
            this.state = 956;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 320875808) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 132120641) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 1140851081) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 1321) !== 0)) {
                {
                this.state = 955;
                this.tupleFields();
                }
            }

            this.state = 958;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumItemStruct(): EnumItemStructContext {
        let localContext = new EnumItemStructContext(this.context, this.state);
        this.enterRule(localContext, 98, RustParser.RULE_enumItemStruct);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 960;
            this.match(RustParser.LCURLYBRACE);
            this.state = 962;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 122) {
                {
                this.state = 961;
                this.structFields();
                }
            }

            this.state = 964;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumItemDiscriminant(): EnumItemDiscriminantContext {
        let localContext = new EnumItemDiscriminantContext(this.context, this.state);
        this.enterRule(localContext, 100, RustParser.RULE_enumItemDiscriminant);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 966;
            this.match(RustParser.EQ);
            this.state = 967;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public union_(): Union_Context {
        let localContext = new Union_Context(this.context, this.state);
        this.enterRule(localContext, 102, RustParser.RULE_union_);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 969;
            this.match(RustParser.KW_UNION);
            this.state = 970;
            this.identifier();
            this.state = 972;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 971;
                this.genericParams();
                }
            }

            this.state = 975;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 974;
                this.whereClause();
                }
            }

            this.state = 977;
            this.match(RustParser.LCURLYBRACE);
            this.state = 978;
            this.structFields();
            this.state = 979;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constantItem(): ConstantItemContext {
        let localContext = new ConstantItemContext(this.context, this.state);
        this.enterRule(localContext, 104, RustParser.RULE_constantItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 981;
            this.match(RustParser.KW_CONST);
            this.state = 984;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                {
                this.state = 982;
                this.identifier();
                }
                break;
            case RustParser.UNDERSCORE:
                {
                this.state = 983;
                this.match(RustParser.UNDERSCORE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 986;
            this.match(RustParser.COLON);
            this.state = 987;
            this.type_();
            this.state = 990;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 103) {
                {
                this.state = 988;
                this.match(RustParser.EQ);
                this.state = 989;
                this.expression(0);
                }
            }

            this.state = 992;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public staticItem(): StaticItemContext {
        let localContext = new StaticItemContext(this.context, this.state);
        this.enterRule(localContext, 106, RustParser.RULE_staticItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 994;
            this.match(RustParser.KW_STATIC);
            this.state = 996;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 995;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 998;
            this.identifier();
            this.state = 999;
            this.match(RustParser.COLON);
            this.state = 1000;
            this.type_();
            this.state = 1003;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 103) {
                {
                this.state = 1001;
                this.match(RustParser.EQ);
                this.state = 1002;
                this.expression(0);
                }
            }

            this.state = 1005;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public trait_(): Trait_Context {
        let localContext = new Trait_Context(this.context, this.state);
        this.enterRule(localContext, 108, RustParser.RULE_trait_);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1008;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 1007;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 1010;
            this.match(RustParser.KW_TRAIT);
            this.state = 1011;
            this.identifier();
            this.state = 1013;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 1012;
                this.genericParams();
                }
            }

            this.state = 1019;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 1015;
                this.match(RustParser.COLON);
                this.state = 1017;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 318769184) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435519) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 1057) !== 0)) {
                    {
                    this.state = 1016;
                    this.typeParamBounds();
                    }
                }

                }
            }

            this.state = 1022;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1021;
                this.whereClause();
                }
            }

            this.state = 1024;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1028;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 112, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1025;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1030;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 112, this.context);
            }
            this.state = 1034;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2434794792) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634833) !== 0) || _la === 119 || _la === 122) {
                {
                {
                this.state = 1031;
                this.associatedItem();
                }
                }
                this.state = 1036;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1037;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public implementation(): ImplementationContext {
        let localContext = new ImplementationContext(this.context, this.state);
        this.enterRule(localContext, 110, RustParser.RULE_implementation);
        try {
            this.state = 1041;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1039;
                this.inherentImpl();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1040;
                this.traitImpl();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inherentImpl(): InherentImplContext {
        let localContext = new InherentImplContext(this.context, this.state);
        this.enterRule(localContext, 112, RustParser.RULE_inherentImpl);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1043;
            this.match(RustParser.KW_IMPL);
            this.state = 1045;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context) ) {
            case 1:
                {
                this.state = 1044;
                this.genericParams();
                }
                break;
            }
            this.state = 1047;
            this.type_();
            this.state = 1049;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1048;
                this.whereClause();
                }
            }

            this.state = 1051;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1055;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 117, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1052;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1057;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 117, this.context);
            }
            this.state = 1061;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2434794792) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634833) !== 0) || _la === 119 || _la === 122) {
                {
                {
                this.state = 1058;
                this.associatedItem();
                }
                }
                this.state = 1063;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1064;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traitImpl(): TraitImplContext {
        let localContext = new TraitImplContext(this.context, this.state);
        this.enterRule(localContext, 114, RustParser.RULE_traitImpl);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1067;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 1066;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 1069;
            this.match(RustParser.KW_IMPL);
            this.state = 1071;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 1070;
                this.genericParams();
                }
            }

            this.state = 1074;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 88) {
                {
                this.state = 1073;
                this.match(RustParser.NOT);
                }
            }

            this.state = 1076;
            this.typePath();
            this.state = 1077;
            this.match(RustParser.KW_FOR);
            this.state = 1078;
            this.type_();
            this.state = 1080;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1079;
                this.whereClause();
                }
            }

            this.state = 1082;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1086;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 123, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1083;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1088;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 123, this.context);
            }
            this.state = 1092;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2434794792) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634833) !== 0) || _la === 119 || _la === 122) {
                {
                {
                this.state = 1089;
                this.associatedItem();
                }
                }
                this.state = 1094;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1095;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public externBlock(): ExternBlockContext {
        let localContext = new ExternBlockContext(this.context, this.state);
        this.enterRule(localContext, 116, RustParser.RULE_externBlock);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1098;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 1097;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 1100;
            this.match(RustParser.KW_EXTERN);
            this.state = 1102;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70 || _la === 71) {
                {
                this.state = 1101;
                this.abi();
                }
            }

            this.state = 1104;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1108;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 127, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1105;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1110;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 127, this.context);
            }
            this.state = 1114;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 354420008) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634833) !== 0) || _la === 119 || _la === 122) {
                {
                {
                this.state = 1111;
                this.externalItem();
                }
                }
                this.state = 1116;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1117;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public externalItem(): ExternalItemContext {
        let localContext = new ExternalItemContext(this.context, this.state);
        this.enterRule(localContext, 118, RustParser.RULE_externalItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1122;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 1119;
                this.outerAttribute();
                }
                }
                this.state = 1124;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1133;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
                {
                this.state = 1125;
                this.macroInvocationSemi();
                }
                break;
            case RustParser.KW_CONST:
            case RustParser.KW_EXTERN:
            case RustParser.KW_FN:
            case RustParser.KW_PUB:
            case RustParser.KW_STATIC:
            case RustParser.KW_UNSAFE:
            case RustParser.KW_ASYNC:
                {
                this.state = 1127;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 1126;
                    this.visibility();
                    }
                }

                this.state = 1131;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_STATIC:
                    {
                    this.state = 1129;
                    this.staticItem();
                    }
                    break;
                case RustParser.KW_CONST:
                case RustParser.KW_EXTERN:
                case RustParser.KW_FN:
                case RustParser.KW_UNSAFE:
                case RustParser.KW_ASYNC:
                    {
                    this.state = 1130;
                    this.function_();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericParams(): GenericParamsContext {
        let localContext = new GenericParamsContext(this.context, this.state);
        this.enterRule(localContext, 120, RustParser.RULE_genericParams);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1135;
            this.match(RustParser.LT);
            this.state = 1148;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 134217753) !== 0) || _la === 122) {
                {
                this.state = 1141;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 133, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1136;
                        this.genericParam();
                        this.state = 1137;
                        this.match(RustParser.COMMA);
                        }
                        }
                    }
                    this.state = 1143;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 133, this.context);
                }
                this.state = 1144;
                this.genericParam();
                this.state = 1146;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 1145;
                    this.match(RustParser.COMMA);
                    }
                }

                }
            }

            this.state = 1150;
            this.match(RustParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericParam(): GenericParamContext {
        let localContext = new GenericParamContext(this.context, this.state);
        this.enterRule(localContext, 122, RustParser.RULE_genericParam);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1155;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 136, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1152;
                    this.outerAttribute();
                    }
                    }
                }
                this.state = 1157;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 136, this.context);
            }
            this.state = 1161;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 137, this.context) ) {
            case 1:
                {
                this.state = 1158;
                this.lifetimeParam();
                }
                break;
            case 2:
                {
                this.state = 1159;
                this.typeParam();
                }
                break;
            case 3:
                {
                this.state = 1160;
                this.constParam();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lifetimeParam(): LifetimeParamContext {
        let localContext = new LifetimeParamContext(this.context, this.state);
        this.enterRule(localContext, 124, RustParser.RULE_lifetimeParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1164;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 122) {
                {
                this.state = 1163;
                this.outerAttribute();
                }
            }

            this.state = 1166;
            this.match(RustParser.LIFETIME_OR_LABEL);
            this.state = 1169;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 1167;
                this.match(RustParser.COLON);
                this.state = 1168;
                this.lifetimeBounds();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParam(): TypeParamContext {
        let localContext = new TypeParamContext(this.context, this.state);
        this.enterRule(localContext, 126, RustParser.RULE_typeParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1172;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 122) {
                {
                this.state = 1171;
                this.outerAttribute();
                }
            }

            this.state = 1174;
            this.identifier();
            this.state = 1179;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 1175;
                this.match(RustParser.COLON);
                this.state = 1177;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 318769184) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435519) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 1057) !== 0)) {
                    {
                    this.state = 1176;
                    this.typeParamBounds();
                    }
                }

                }
            }

            this.state = 1183;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 103) {
                {
                this.state = 1181;
                this.match(RustParser.EQ);
                this.state = 1182;
                this.type_();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constParam(): ConstParamContext {
        let localContext = new ConstParamContext(this.context, this.state);
        this.enterRule(localContext, 128, RustParser.RULE_constParam);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1185;
            this.match(RustParser.KW_CONST);
            this.state = 1186;
            this.identifier();
            this.state = 1187;
            this.match(RustParser.COLON);
            this.state = 1188;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereClause(): WhereClauseContext {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 130, RustParser.RULE_whereClause);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1190;
            this.match(RustParser.KW_WHERE);
            this.state = 1196;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 144, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1191;
                    this.whereClauseItem();
                    this.state = 1192;
                    this.match(RustParser.COMMA);
                    }
                    }
                }
                this.state = 1198;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 144, this.context);
            }
            this.state = 1200;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 318778656) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 132120641) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 1140851081) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 1313) !== 0)) {
                {
                this.state = 1199;
                this.whereClauseItem();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereClauseItem(): WhereClauseItemContext {
        let localContext = new WhereClauseItemContext(this.context, this.state);
        this.enterRule(localContext, 132, RustParser.RULE_whereClauseItem);
        try {
            this.state = 1204;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 146, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1202;
                this.lifetimeWhereClauseItem();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1203;
                this.typeBoundWhereClauseItem();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lifetimeWhereClauseItem(): LifetimeWhereClauseItemContext {
        let localContext = new LifetimeWhereClauseItemContext(this.context, this.state);
        this.enterRule(localContext, 134, RustParser.RULE_lifetimeWhereClauseItem);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1206;
            this.lifetime();
            this.state = 1207;
            this.match(RustParser.COLON);
            this.state = 1208;
            this.lifetimeBounds();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeBoundWhereClauseItem(): TypeBoundWhereClauseItemContext {
        let localContext = new TypeBoundWhereClauseItemContext(this.context, this.state);
        this.enterRule(localContext, 136, RustParser.RULE_typeBoundWhereClauseItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1211;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 147, this.context) ) {
            case 1:
                {
                this.state = 1210;
                this.forLifetimes();
                }
                break;
            }
            this.state = 1213;
            this.type_();
            this.state = 1214;
            this.match(RustParser.COLON);
            this.state = 1216;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 318769184) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435519) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 1057) !== 0)) {
                {
                this.state = 1215;
                this.typeParamBounds();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forLifetimes(): ForLifetimesContext {
        let localContext = new ForLifetimesContext(this.context, this.state);
        this.enterRule(localContext, 138, RustParser.RULE_forLifetimes);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1218;
            this.match(RustParser.KW_FOR);
            this.state = 1219;
            this.genericParams();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public associatedItem(): AssociatedItemContext {
        let localContext = new AssociatedItemContext(this.context, this.state);
        this.enterRule(localContext, 140, RustParser.RULE_associatedItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1224;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 1221;
                this.outerAttribute();
                }
                }
                this.state = 1226;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1236;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
                {
                this.state = 1227;
                this.macroInvocationSemi();
                }
                break;
            case RustParser.KW_CONST:
            case RustParser.KW_EXTERN:
            case RustParser.KW_FN:
            case RustParser.KW_PUB:
            case RustParser.KW_TYPE:
            case RustParser.KW_UNSAFE:
            case RustParser.KW_ASYNC:
                {
                this.state = 1229;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 1228;
                    this.visibility();
                    }
                }

                this.state = 1234;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 151, this.context) ) {
                case 1:
                    {
                    this.state = 1231;
                    this.typeAlias();
                    }
                    break;
                case 2:
                    {
                    this.state = 1232;
                    this.constantItem();
                    }
                    break;
                case 3:
                    {
                    this.state = 1233;
                    this.function_();
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public innerAttribute(): InnerAttributeContext {
        let localContext = new InnerAttributeContext(this.context, this.state);
        this.enterRule(localContext, 142, RustParser.RULE_innerAttribute);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1238;
            this.match(RustParser.POUND);
            this.state = 1239;
            this.match(RustParser.NOT);
            this.state = 1240;
            this.match(RustParser.LSQUAREBRACKET);
            this.state = 1241;
            this.attr();
            this.state = 1242;
            this.match(RustParser.RSQUAREBRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public outerAttribute(): OuterAttributeContext {
        let localContext = new OuterAttributeContext(this.context, this.state);
        this.enterRule(localContext, 144, RustParser.RULE_outerAttribute);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1244;
            this.match(RustParser.POUND);
            this.state = 1245;
            this.match(RustParser.LSQUAREBRACKET);
            this.state = 1246;
            this.attr();
            this.state = 1247;
            this.match(RustParser.RSQUAREBRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attr(): AttrContext {
        let localContext = new AttrContext(this.context, this.state);
        this.enterRule(localContext, 146, RustParser.RULE_attr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1249;
            this.simplePath();
            this.state = 1251;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 88080385) !== 0)) {
                {
                this.state = 1250;
                this.attrInput();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attrInput(): AttrInputContext {
        let localContext = new AttrInputContext(this.context, this.state);
        this.enterRule(localContext, 148, RustParser.RULE_attrInput);
        try {
            this.state = 1256;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LCURLYBRACE:
            case RustParser.LSQUAREBRACKET:
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1253;
                this.delimTokenTree();
                }
                break;
            case RustParser.EQ:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1254;
                this.match(RustParser.EQ);
                this.state = 1255;
                this.literalExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 150, RustParser.RULE_statement);
        try {
            this.state = 1263;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 155, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1258;
                this.match(RustParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1259;
                this.item();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1260;
                this.letStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1261;
                this.expressionStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1262;
                this.macroInvocationSemi();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public letStatement(): LetStatementContext {
        let localContext = new LetStatementContext(this.context, this.state);
        this.enterRule(localContext, 152, RustParser.RULE_letStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1268;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 1265;
                this.outerAttribute();
                }
                }
                this.state = 1270;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1271;
            this.match(RustParser.KW_LET);
            this.state = 1272;
            this.patternNoTopAlt();
            this.state = 1275;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 1273;
                this.match(RustParser.COLON);
                this.state = 1274;
                this.type_();
                }
            }

            this.state = 1279;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 103) {
                {
                this.state = 1277;
                this.match(RustParser.EQ);
                this.state = 1278;
                this.expression(0);
                }
            }

            this.state = 1281;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 154, RustParser.RULE_expressionStatement);
        try {
            this.state = 1290;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 160, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1283;
                this.expression(0);
                this.state = 1284;
                this.match(RustParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1286;
                this.expressionWithBlock();
                this.state = 1288;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 159, this.context) ) {
                case 1:
                    {
                    this.state = 1287;
                    this.match(RustParser.SEMI);
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 156;
        this.enterRecursionRule(localContext, 156, RustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1372;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 174, this.context) ) {
            case 1:
                {
                localContext = new AttributedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1294;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 1293;
                        this.outerAttribute();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1296;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1298;
                this.expression(40);
                }
                break;
            case 2:
                {
                localContext = new LiteralExpression_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1300;
                this.literalExpression();
                }
                break;
            case 3:
                {
                localContext = new PathExpression_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1301;
                this.pathExpression();
                }
                break;
            case 4:
                {
                localContext = new BorrowExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1302;
                _la = this.tokenStream.LA(1);
                if(!(_la === 89 || _la === 91)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1304;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 1303;
                    this.match(RustParser.KW_MUT);
                    }
                }

                this.state = 1306;
                this.expression(30);
                }
                break;
            case 5:
                {
                localContext = new DereferenceExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1307;
                this.match(RustParser.STAR);
                this.state = 1308;
                this.expression(29);
                }
                break;
            case 6:
                {
                localContext = new NegationExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1309;
                _la = this.tokenStream.LA(1);
                if(!(_la === 83 || _la === 88)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1310;
                this.expression(28);
                }
                break;
            case 7:
                {
                localContext = new RangeExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1311;
                this.match(RustParser.DOTDOT);
                this.state = 1313;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
                case 1:
                    {
                    this.state = 1312;
                    this.expression(0);
                    }
                    break;
                }
                }
                break;
            case 8:
                {
                localContext = new RangeExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1315;
                this.match(RustParser.DOTDOTEQ);
                this.state = 1316;
                this.expression(15);
                }
                break;
            case 9:
                {
                localContext = new ContinueExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1317;
                this.match(RustParser.KW_CONTINUE);
                this.state = 1319;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context) ) {
                case 1:
                    {
                    this.state = 1318;
                    this.match(RustParser.LIFETIME_OR_LABEL);
                    }
                    break;
                }
                this.state = 1322;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 165, this.context) ) {
                case 1:
                    {
                    this.state = 1321;
                    this.expression(0);
                    }
                    break;
                }
                }
                break;
            case 10:
                {
                localContext = new BreakExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1324;
                this.match(RustParser.KW_BREAK);
                this.state = 1326;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context) ) {
                case 1:
                    {
                    this.state = 1325;
                    this.match(RustParser.LIFETIME_OR_LABEL);
                    }
                    break;
                }
                this.state = 1329;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 167, this.context) ) {
                case 1:
                    {
                    this.state = 1328;
                    this.expression(0);
                    }
                    break;
                }
                }
                break;
            case 11:
                {
                localContext = new ReturnExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1331;
                this.match(RustParser.KW_RETURN);
                this.state = 1333;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 168, this.context) ) {
                case 1:
                    {
                    this.state = 1332;
                    this.expression(0);
                    }
                    break;
                }
                }
                break;
            case 12:
                {
                localContext = new GroupedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1335;
                this.match(RustParser.LPAREN);
                this.state = 1339;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 169, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1336;
                        this.innerAttribute();
                        }
                        }
                    }
                    this.state = 1341;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 169, this.context);
                }
                this.state = 1342;
                this.expression(0);
                this.state = 1343;
                this.match(RustParser.RPAREN);
                }
                break;
            case 13:
                {
                localContext = new ArrayExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1345;
                this.match(RustParser.LSQUAREBRACKET);
                this.state = 1349;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 170, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1346;
                        this.innerAttribute();
                        }
                        }
                    }
                    this.state = 1351;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 170, this.context);
                }
                this.state = 1353;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 16308351) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 5542209) !== 0)) {
                    {
                    this.state = 1352;
                    this.arrayElements();
                    }
                }

                this.state = 1355;
                this.match(RustParser.RSQUAREBRACKET);
                }
                break;
            case 14:
                {
                localContext = new TupleExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1356;
                this.match(RustParser.LPAREN);
                this.state = 1360;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 172, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1357;
                        this.innerAttribute();
                        }
                        }
                    }
                    this.state = 1362;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 172, this.context);
                }
                this.state = 1364;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 16308351) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 5542209) !== 0)) {
                    {
                    this.state = 1363;
                    this.tupleElements();
                    }
                }

                this.state = 1366;
                this.match(RustParser.RPAREN);
                }
                break;
            case 15:
                {
                localContext = new StructExpression_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1367;
                this.structExpression();
                }
                break;
            case 16:
                {
                localContext = new EnumerationVariantExpression_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1368;
                this.enumerationVariantExpression();
                }
                break;
            case 17:
                {
                localContext = new ClosureExpression_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1369;
                this.closureExpression();
                }
                break;
            case 18:
                {
                localContext = new ExpressionWithBlock_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1370;
                this.expressionWithBlock();
                }
                break;
            case 19:
                {
                localContext = new MacroInvocationAsExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1371;
                this.macroInvocation();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1457;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 180, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1455;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 179, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1374;
                        if (!(this.precpred(this.context, 26))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 26)");
                        }
                        this.state = 1375;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 7) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1376;
                        this.expression(27);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1377;
                        if (!(this.precpred(this.context, 25))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 25)");
                        }
                        this.state = 1378;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 82 || _la === 83)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1379;
                        this.expression(26);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1380;
                        if (!(this.precpred(this.context, 24))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 24)");
                        }
                        this.state = 1383;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case RustParser.LT:
                            {
                            this.state = 1381;
                            this.shl();
                            }
                            break;
                        case RustParser.GT:
                            {
                            this.state = 1382;
                            this.shr();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 1385;
                        this.expression(25);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1387;
                        if (!(this.precpred(this.context, 23))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 23)");
                        }
                        this.state = 1388;
                        this.match(RustParser.AND);
                        this.state = 1389;
                        this.expression(24);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1390;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 1391;
                        this.match(RustParser.CARET);
                        this.state = 1392;
                        this.expression(23);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1393;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 1394;
                        this.match(RustParser.OR);
                        this.state = 1395;
                        this.expression(22);
                        }
                        break;
                    case 7:
                        {
                        localContext = new ComparisonExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1396;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 1397;
                        this.comparisonOperator();
                        this.state = 1398;
                        this.expression(21);
                        }
                        break;
                    case 8:
                        {
                        localContext = new LazyBooleanExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1400;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 1401;
                        this.match(RustParser.ANDAND);
                        this.state = 1402;
                        this.expression(20);
                        }
                        break;
                    case 9:
                        {
                        localContext = new LazyBooleanExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1403;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 1404;
                        this.match(RustParser.OROR);
                        this.state = 1405;
                        this.expression(19);
                        }
                        break;
                    case 10:
                        {
                        localContext = new RangeExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1406;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 1407;
                        this.match(RustParser.DOTDOTEQ);
                        this.state = 1408;
                        this.expression(15);
                        }
                        break;
                    case 11:
                        {
                        localContext = new AssignmentExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1409;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 1410;
                        this.match(RustParser.EQ);
                        this.state = 1411;
                        this.expression(14);
                        }
                        break;
                    case 12:
                        {
                        localContext = new CompoundAssignmentExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1412;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 1413;
                        this.compoundAssignOperator();
                        this.state = 1414;
                        this.expression(13);
                        }
                        break;
                    case 13:
                        {
                        localContext = new MethodCallExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1416;
                        if (!(this.precpred(this.context, 37))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 37)");
                        }
                        this.state = 1417;
                        this.match(RustParser.DOT);
                        this.state = 1418;
                        this.pathExprSegment();
                        this.state = 1419;
                        this.match(RustParser.LPAREN);
                        this.state = 1421;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 16308351) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 5542209) !== 0)) {
                            {
                            this.state = 1420;
                            this.callParams();
                            }
                        }

                        this.state = 1423;
                        this.match(RustParser.RPAREN);
                        }
                        break;
                    case 14:
                        {
                        localContext = new FieldExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1425;
                        if (!(this.precpred(this.context, 36))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 36)");
                        }
                        this.state = 1426;
                        this.match(RustParser.DOT);
                        this.state = 1427;
                        this.identifier();
                        }
                        break;
                    case 15:
                        {
                        localContext = new TupleIndexingExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1428;
                        if (!(this.precpred(this.context, 35))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 35)");
                        }
                        this.state = 1429;
                        this.match(RustParser.DOT);
                        this.state = 1430;
                        this.tupleIndex();
                        }
                        break;
                    case 16:
                        {
                        localContext = new AwaitExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1431;
                        if (!(this.precpred(this.context, 34))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 34)");
                        }
                        this.state = 1432;
                        this.match(RustParser.DOT);
                        this.state = 1433;
                        this.match(RustParser.KW_AWAIT);
                        }
                        break;
                    case 17:
                        {
                        localContext = new CallExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1434;
                        if (!(this.precpred(this.context, 33))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 33)");
                        }
                        this.state = 1435;
                        this.match(RustParser.LPAREN);
                        this.state = 1437;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 16308351) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 5542209) !== 0)) {
                            {
                            this.state = 1436;
                            this.callParams();
                            }
                        }

                        this.state = 1439;
                        this.match(RustParser.RPAREN);
                        }
                        break;
                    case 18:
                        {
                        localContext = new IndexExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1440;
                        if (!(this.precpred(this.context, 32))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 32)");
                        }
                        this.state = 1441;
                        this.match(RustParser.LSQUAREBRACKET);
                        this.state = 1442;
                        this.expression(0);
                        this.state = 1443;
                        this.match(RustParser.RSQUAREBRACKET);
                        }
                        break;
                    case 19:
                        {
                        localContext = new ErrorPropagationExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1445;
                        if (!(this.precpred(this.context, 31))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 31)");
                        }
                        this.state = 1446;
                        this.match(RustParser.QUESTION);
                        }
                        break;
                    case 20:
                        {
                        localContext = new TypeCastExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1447;
                        if (!(this.precpred(this.context, 27))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 27)");
                        }
                        this.state = 1448;
                        this.match(RustParser.KW_AS);
                        this.state = 1449;
                        this.typeNoBounds();
                        }
                        break;
                    case 21:
                        {
                        localContext = new RangeExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1450;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 1451;
                        this.match(RustParser.DOTDOT);
                        this.state = 1453;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 178, this.context) ) {
                        case 1:
                            {
                            this.state = 1452;
                            this.expression(0);
                            }
                            break;
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 1459;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 180, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public comparisonOperator(): ComparisonOperatorContext {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 158, RustParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1460;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 63) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compoundAssignOperator(): CompoundAssignOperatorContext {
        let localContext = new CompoundAssignOperatorContext(this.context, this.state);
        this.enterRule(localContext, 160, RustParser.RULE_compoundAssignOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1462;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & 1023) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionWithBlock(): ExpressionWithBlockContext {
        let localContext = new ExpressionWithBlockContext(this.context, this.state);
        this.enterRule(localContext, 162, RustParser.RULE_expressionWithBlock);
        try {
            let alternative: number;
            this.state = 1478;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1465;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 1464;
                        this.outerAttribute();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1467;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 181, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1469;
                this.expressionWithBlock();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1471;
                this.blockExpression();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1472;
                this.asyncBlockExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1473;
                this.unsafeBlockExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1474;
                this.loopExpression();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1475;
                this.ifExpression();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1476;
                this.ifLetExpression();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1477;
                this.matchExpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literalExpression(): LiteralExpressionContext {
        let localContext = new LiteralExpressionContext(this.context, this.state);
        this.enterRule(localContext, 164, RustParser.RULE_literalExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1480;
            _la = this.tokenStream.LA(1);
            if(!(_la === 9 || _la === 30 || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2175) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathExpression(): PathExpressionContext {
        let localContext = new PathExpressionContext(this.context, this.state);
        this.enterRule(localContext, 166, RustParser.RULE_pathExpression);
        try {
            this.state = 1484;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1482;
                this.pathInExpression();
                }
                break;
            case RustParser.LT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1483;
                this.qualifiedPathInExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockExpression(): BlockExpressionContext {
        let localContext = new BlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 168, RustParser.RULE_blockExpression);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1486;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1490;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 184, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1487;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1492;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 184, this.context);
            }
            this.state = 1494;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4289707964) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 122683419) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 16308351) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 5543233) !== 0)) {
                {
                this.state = 1493;
                this.statements();
                }
            }

            this.state = 1496;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statements(): StatementsContext {
        let localContext = new StatementsContext(this.context, this.state);
        this.enterRule(localContext, 170, RustParser.RULE_statements);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1507;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 188, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1499;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 1498;
                        this.statement();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1501;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 186, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1504;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 16308351) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 5542209) !== 0)) {
                    {
                    this.state = 1503;
                    this.expression(0);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1506;
                this.expression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public asyncBlockExpression(): AsyncBlockExpressionContext {
        let localContext = new AsyncBlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 172, RustParser.RULE_asyncBlockExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1509;
            this.match(RustParser.KW_ASYNC);
            this.state = 1511;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 1510;
                this.match(RustParser.KW_MOVE);
                }
            }

            this.state = 1513;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unsafeBlockExpression(): UnsafeBlockExpressionContext {
        let localContext = new UnsafeBlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 174, RustParser.RULE_unsafeBlockExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1515;
            this.match(RustParser.KW_UNSAFE);
            this.state = 1516;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayElements(): ArrayElementsContext {
        let localContext = new ArrayElementsContext(this.context, this.state);
        this.enterRule(localContext, 176, RustParser.RULE_arrayElements);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1533;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 192, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1518;
                this.expression(0);
                this.state = 1523;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 190, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1519;
                        this.match(RustParser.COMMA);
                        this.state = 1520;
                        this.expression(0);
                        }
                        }
                    }
                    this.state = 1525;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 190, this.context);
                }
                this.state = 1527;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 1526;
                    this.match(RustParser.COMMA);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1529;
                this.expression(0);
                this.state = 1530;
                this.match(RustParser.SEMI);
                this.state = 1531;
                this.expression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleElements(): TupleElementsContext {
        let localContext = new TupleElementsContext(this.context, this.state);
        this.enterRule(localContext, 178, RustParser.RULE_tupleElements);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1538;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 1535;
                    this.expression(0);
                    this.state = 1536;
                    this.match(RustParser.COMMA);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1540;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 193, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1543;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 16308351) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 5542209) !== 0)) {
                {
                this.state = 1542;
                this.expression(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleIndex(): TupleIndexContext {
        let localContext = new TupleIndexContext(this.context, this.state);
        this.enterRule(localContext, 180, RustParser.RULE_tupleIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1545;
            this.match(RustParser.INTEGER_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExpression(): StructExpressionContext {
        let localContext = new StructExpressionContext(this.context, this.state);
        this.enterRule(localContext, 182, RustParser.RULE_structExpression);
        try {
            this.state = 1550;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 195, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1547;
                this.structExprStruct();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1548;
                this.structExprTuple();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1549;
                this.structExprUnit();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExprStruct(): StructExprStructContext {
        let localContext = new StructExprStructContext(this.context, this.state);
        this.enterRule(localContext, 184, RustParser.RULE_structExprStruct);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1552;
            this.pathInExpression();
            this.state = 1553;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1557;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1554;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1559;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
            }
            this.state = 1562;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.INTEGER_LITERAL:
            case RustParser.POUND:
                {
                this.state = 1560;
                this.structExprFields();
                }
                break;
            case RustParser.DOTDOT:
                {
                this.state = 1561;
                this.structBase();
                }
                break;
            case RustParser.RCURLYBRACE:
                break;
            default:
                break;
            }
            this.state = 1564;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExprFields(): StructExprFieldsContext {
        let localContext = new StructExprFieldsContext(this.context, this.state);
        this.enterRule(localContext, 186, RustParser.RULE_structExprFields);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1566;
            this.structExprField();
            this.state = 1571;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 198, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1567;
                    this.match(RustParser.COMMA);
                    this.state = 1568;
                    this.structExprField();
                    }
                    }
                }
                this.state = 1573;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 198, this.context);
            }
            this.state = 1579;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 200, this.context) ) {
            case 1:
                {
                this.state = 1574;
                this.match(RustParser.COMMA);
                this.state = 1575;
                this.structBase();
                }
                break;
            case 2:
                {
                this.state = 1577;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 1576;
                    this.match(RustParser.COMMA);
                    }
                }

                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExprField(): StructExprFieldContext {
        let localContext = new StructExprFieldContext(this.context, this.state);
        this.enterRule(localContext, 188, RustParser.RULE_structExprField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1584;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 1581;
                this.outerAttribute();
                }
                }
                this.state = 1586;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1595;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 203, this.context) ) {
            case 1:
                {
                this.state = 1587;
                this.identifier();
                }
                break;
            case 2:
                {
                this.state = 1590;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_MACRORULES:
                case RustParser.NON_KEYWORD_IDENTIFIER:
                case RustParser.RAW_IDENTIFIER:
                    {
                    this.state = 1588;
                    this.identifier();
                    }
                    break;
                case RustParser.INTEGER_LITERAL:
                    {
                    this.state = 1589;
                    this.tupleIndex();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1592;
                this.match(RustParser.COLON);
                this.state = 1593;
                this.expression(0);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structBase(): StructBaseContext {
        let localContext = new StructBaseContext(this.context, this.state);
        this.enterRule(localContext, 190, RustParser.RULE_structBase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1597;
            this.match(RustParser.DOTDOT);
            this.state = 1598;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExprTuple(): StructExprTupleContext {
        let localContext = new StructExprTupleContext(this.context, this.state);
        this.enterRule(localContext, 192, RustParser.RULE_structExprTuple);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1600;
            this.pathInExpression();
            this.state = 1601;
            this.match(RustParser.LPAREN);
            this.state = 1605;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 204, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1602;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1607;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 204, this.context);
            }
            this.state = 1619;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 16308351) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 5542209) !== 0)) {
                {
                this.state = 1608;
                this.expression(0);
                this.state = 1613;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 205, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1609;
                        this.match(RustParser.COMMA);
                        this.state = 1610;
                        this.expression(0);
                        }
                        }
                    }
                    this.state = 1615;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 205, this.context);
                }
                this.state = 1617;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 1616;
                    this.match(RustParser.COMMA);
                    }
                }

                }
            }

            this.state = 1621;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExprUnit(): StructExprUnitContext {
        let localContext = new StructExprUnitContext(this.context, this.state);
        this.enterRule(localContext, 194, RustParser.RULE_structExprUnit);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1623;
            this.pathInExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumerationVariantExpression(): EnumerationVariantExpressionContext {
        let localContext = new EnumerationVariantExpressionContext(this.context, this.state);
        this.enterRule(localContext, 196, RustParser.RULE_enumerationVariantExpression);
        try {
            this.state = 1628;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1625;
                this.enumExprStruct();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1626;
                this.enumExprTuple();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1627;
                this.enumExprFieldless();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumExprStruct(): EnumExprStructContext {
        let localContext = new EnumExprStructContext(this.context, this.state);
        this.enterRule(localContext, 198, RustParser.RULE_enumExprStruct);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1630;
            this.pathInExpression();
            this.state = 1631;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1633;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 2097177) !== 0)) {
                {
                this.state = 1632;
                this.enumExprFields();
                }
            }

            this.state = 1635;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumExprFields(): EnumExprFieldsContext {
        let localContext = new EnumExprFieldsContext(this.context, this.state);
        this.enterRule(localContext, 200, RustParser.RULE_enumExprFields);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1637;
            this.enumExprField();
            this.state = 1642;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 210, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1638;
                    this.match(RustParser.COMMA);
                    this.state = 1639;
                    this.enumExprField();
                    }
                    }
                }
                this.state = 1644;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 210, this.context);
            }
            this.state = 1646;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 1645;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumExprField(): EnumExprFieldContext {
        let localContext = new EnumExprFieldContext(this.context, this.state);
        this.enterRule(localContext, 202, RustParser.RULE_enumExprField);
        try {
            this.state = 1656;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 213, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1648;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1651;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_MACRORULES:
                case RustParser.NON_KEYWORD_IDENTIFIER:
                case RustParser.RAW_IDENTIFIER:
                    {
                    this.state = 1649;
                    this.identifier();
                    }
                    break;
                case RustParser.INTEGER_LITERAL:
                    {
                    this.state = 1650;
                    this.tupleIndex();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1653;
                this.match(RustParser.COLON);
                this.state = 1654;
                this.expression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumExprTuple(): EnumExprTupleContext {
        let localContext = new EnumExprTupleContext(this.context, this.state);
        this.enterRule(localContext, 204, RustParser.RULE_enumExprTuple);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1658;
            this.pathInExpression();
            this.state = 1659;
            this.match(RustParser.LPAREN);
            this.state = 1671;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 16308351) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 5542209) !== 0)) {
                {
                this.state = 1660;
                this.expression(0);
                this.state = 1665;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 214, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1661;
                        this.match(RustParser.COMMA);
                        this.state = 1662;
                        this.expression(0);
                        }
                        }
                    }
                    this.state = 1667;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 214, this.context);
                }
                this.state = 1669;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 1668;
                    this.match(RustParser.COMMA);
                    }
                }

                }
            }

            this.state = 1673;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumExprFieldless(): EnumExprFieldlessContext {
        let localContext = new EnumExprFieldlessContext(this.context, this.state);
        this.enterRule(localContext, 206, RustParser.RULE_enumExprFieldless);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1675;
            this.pathInExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public callParams(): CallParamsContext {
        let localContext = new CallParamsContext(this.context, this.state);
        this.enterRule(localContext, 208, RustParser.RULE_callParams);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1677;
            this.expression(0);
            this.state = 1682;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 217, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1678;
                    this.match(RustParser.COMMA);
                    this.state = 1679;
                    this.expression(0);
                    }
                    }
                }
                this.state = 1684;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 217, this.context);
            }
            this.state = 1686;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 1685;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public closureExpression(): ClosureExpressionContext {
        let localContext = new ClosureExpressionContext(this.context, this.state);
        this.enterRule(localContext, 210, RustParser.RULE_closureExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1689;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 1688;
                this.match(RustParser.KW_MOVE);
                }
            }

            this.state = 1697;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.OROR:
                {
                this.state = 1691;
                this.match(RustParser.OROR);
                }
                break;
            case RustParser.OR:
                {
                this.state = 1692;
                this.match(RustParser.OR);
                this.state = 1694;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 220, this.context) ) {
                case 1:
                    {
                    this.state = 1693;
                    this.closureParameters();
                    }
                    break;
                }
                this.state = 1696;
                this.match(RustParser.OR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1704;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_BREAK:
            case RustParser.KW_CONTINUE:
            case RustParser.KW_CRATE:
            case RustParser.KW_FALSE:
            case RustParser.KW_FOR:
            case RustParser.KW_IF:
            case RustParser.KW_LOOP:
            case RustParser.KW_MATCH:
            case RustParser.KW_MOVE:
            case RustParser.KW_RETURN:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_TRUE:
            case RustParser.KW_UNSAFE:
            case RustParser.KW_WHILE:
            case RustParser.KW_ASYNC:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.CHAR_LITERAL:
            case RustParser.STRING_LITERAL:
            case RustParser.RAW_STRING_LITERAL:
            case RustParser.BYTE_LITERAL:
            case RustParser.BYTE_STRING_LITERAL:
            case RustParser.RAW_BYTE_STRING_LITERAL:
            case RustParser.INTEGER_LITERAL:
            case RustParser.FLOAT_LITERAL:
            case RustParser.LIFETIME_OR_LABEL:
            case RustParser.MINUS:
            case RustParser.STAR:
            case RustParser.NOT:
            case RustParser.AND:
            case RustParser.OR:
            case RustParser.ANDAND:
            case RustParser.OROR:
            case RustParser.LT:
            case RustParser.DOTDOT:
            case RustParser.DOTDOTEQ:
            case RustParser.PATHSEP:
            case RustParser.POUND:
            case RustParser.LCURLYBRACE:
            case RustParser.LSQUAREBRACKET:
            case RustParser.LPAREN:
                {
                this.state = 1699;
                this.expression(0);
                }
                break;
            case RustParser.RARROW:
                {
                this.state = 1700;
                this.match(RustParser.RARROW);
                this.state = 1701;
                this.typeNoBounds();
                this.state = 1702;
                this.blockExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public closureParameters(): ClosureParametersContext {
        let localContext = new ClosureParametersContext(this.context, this.state);
        this.enterRule(localContext, 212, RustParser.RULE_closureParameters);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1706;
            this.closureParam();
            this.state = 1711;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 223, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1707;
                    this.match(RustParser.COMMA);
                    this.state = 1708;
                    this.closureParam();
                    }
                    }
                }
                this.state = 1713;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 223, this.context);
            }
            this.state = 1715;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 1714;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public closureParam(): ClosureParamContext {
        let localContext = new ClosureParamContext(this.context, this.state);
        this.enterRule(localContext, 214, RustParser.RULE_closureParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1720;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 1717;
                this.outerAttribute();
                }
                }
                this.state = 1722;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1723;
            this.pattern();
            this.state = 1726;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 1724;
                this.match(RustParser.COLON);
                this.state = 1725;
                this.type_();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopExpression(): LoopExpressionContext {
        let localContext = new LoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 216, RustParser.RULE_loopExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1729;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 81) {
                {
                this.state = 1728;
                this.loopLabel();
                }
            }

            this.state = 1735;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 228, this.context) ) {
            case 1:
                {
                this.state = 1731;
                this.infiniteLoopExpression();
                }
                break;
            case 2:
                {
                this.state = 1732;
                this.predicateLoopExpression();
                }
                break;
            case 3:
                {
                this.state = 1733;
                this.predicatePatternLoopExpression();
                }
                break;
            case 4:
                {
                this.state = 1734;
                this.iteratorLoopExpression();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public infiniteLoopExpression(): InfiniteLoopExpressionContext {
        let localContext = new InfiniteLoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 218, RustParser.RULE_infiniteLoopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1737;
            this.match(RustParser.KW_LOOP);
            this.state = 1738;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileBlockExpression(): WhileBlockExpressionContext {
        let localContext = new WhileBlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 220, RustParser.RULE_whileBlockExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1740;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public predicateLoopExpression(): PredicateLoopExpressionContext {
        let localContext = new PredicateLoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 222, RustParser.RULE_predicateLoopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1742;
            this.match(RustParser.KW_WHILE);
            this.state = 1743;
            this.expression(0);
            this.state = 1744;
            this.whileBlockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public predicatePatternLoopExpression(): PredicatePatternLoopExpressionContext {
        let localContext = new PredicatePatternLoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 224, RustParser.RULE_predicatePatternLoopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1746;
            this.match(RustParser.KW_WHILE);
            this.state = 1747;
            this.match(RustParser.KW_LET);
            this.state = 1748;
            this.pattern();
            this.state = 1749;
            this.match(RustParser.EQ);
            this.state = 1750;
            this.expression(0);
            this.state = 1751;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public iteratorLoopExpression(): IteratorLoopExpressionContext {
        let localContext = new IteratorLoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 226, RustParser.RULE_iteratorLoopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1753;
            this.match(RustParser.KW_FOR);
            this.state = 1754;
            this.pattern();
            this.state = 1755;
            this.match(RustParser.KW_IN);
            this.state = 1756;
            this.expression(0);
            this.state = 1757;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopLabel(): LoopLabelContext {
        let localContext = new LoopLabelContext(this.context, this.state);
        this.enterRule(localContext, 228, RustParser.RULE_loopLabel);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1759;
            this.match(RustParser.LIFETIME_OR_LABEL);
            this.state = 1760;
            this.match(RustParser.COLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifExpression(): IfExpressionContext {
        let localContext = new IfExpressionContext(this.context, this.state);
        this.enterRule(localContext, 230, RustParser.RULE_ifExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1762;
            this.match(RustParser.KW_IF);
            this.state = 1763;
            this.expression(0);
            this.state = 1764;
            this.blockExpression();
            this.state = 1771;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 230, this.context) ) {
            case 1:
                {
                this.state = 1765;
                this.match(RustParser.KW_ELSE);
                this.state = 1769;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 229, this.context) ) {
                case 1:
                    {
                    this.state = 1766;
                    this.blockExpression();
                    }
                    break;
                case 2:
                    {
                    this.state = 1767;
                    this.ifExpression();
                    }
                    break;
                case 3:
                    {
                    this.state = 1768;
                    this.ifLetExpression();
                    }
                    break;
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifLetExpression(): IfLetExpressionContext {
        let localContext = new IfLetExpressionContext(this.context, this.state);
        this.enterRule(localContext, 232, RustParser.RULE_ifLetExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1773;
            this.match(RustParser.KW_IF);
            this.state = 1774;
            this.match(RustParser.KW_LET);
            this.state = 1775;
            this.pattern();
            this.state = 1776;
            this.match(RustParser.EQ);
            this.state = 1777;
            this.expression(0);
            this.state = 1778;
            this.blockExpression();
            this.state = 1785;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 232, this.context) ) {
            case 1:
                {
                this.state = 1779;
                this.match(RustParser.KW_ELSE);
                this.state = 1783;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 231, this.context) ) {
                case 1:
                    {
                    this.state = 1780;
                    this.blockExpression();
                    }
                    break;
                case 2:
                    {
                    this.state = 1781;
                    this.ifExpression();
                    }
                    break;
                case 3:
                    {
                    this.state = 1782;
                    this.ifLetExpression();
                    }
                    break;
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchExpression(): MatchExpressionContext {
        let localContext = new MatchExpressionContext(this.context, this.state);
        this.enterRule(localContext, 234, RustParser.RULE_matchExpression);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1787;
            this.match(RustParser.KW_MATCH);
            this.state = 1788;
            this.expression(0);
            this.state = 1789;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1793;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1790;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1795;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
            }
            this.state = 1797;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1397752352) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 608141341) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 1094975495) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 161) !== 0)) {
                {
                this.state = 1796;
                this.matchArms();
                }
            }

            this.state = 1799;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchArms(): MatchArmsContext {
        let localContext = new MatchArmsContext(this.context, this.state);
        this.enterRule(localContext, 236, RustParser.RULE_matchArms);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1807;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 235, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1801;
                    this.matchArm();
                    this.state = 1802;
                    this.match(RustParser.FATARROW);
                    this.state = 1803;
                    this.matchArmExpression();
                    }
                    }
                }
                this.state = 1809;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 235, this.context);
            }
            this.state = 1810;
            this.matchArm();
            this.state = 1811;
            this.match(RustParser.FATARROW);
            this.state = 1812;
            this.expression(0);
            this.state = 1814;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 1813;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchArmExpression(): MatchArmExpressionContext {
        let localContext = new MatchArmExpressionContext(this.context, this.state);
        this.enterRule(localContext, 238, RustParser.RULE_matchArmExpression);
        let _la: number;
        try {
            this.state = 1823;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1816;
                this.expression(0);
                this.state = 1817;
                this.match(RustParser.COMMA);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1819;
                this.expressionWithBlock();
                this.state = 1821;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 1820;
                    this.match(RustParser.COMMA);
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchArm(): MatchArmContext {
        let localContext = new MatchArmContext(this.context, this.state);
        this.enterRule(localContext, 240, RustParser.RULE_matchArm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1828;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 1825;
                this.outerAttribute();
                }
                }
                this.state = 1830;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1831;
            this.pattern();
            this.state = 1833;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 1832;
                this.matchArmGuard();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchArmGuard(): MatchArmGuardContext {
        let localContext = new MatchArmGuardContext(this.context, this.state);
        this.enterRule(localContext, 242, RustParser.RULE_matchArmGuard);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1835;
            this.match(RustParser.KW_IF);
            this.state = 1836;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pattern(): PatternContext {
        let localContext = new PatternContext(this.context, this.state);
        this.enterRule(localContext, 244, RustParser.RULE_pattern);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1839;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 90) {
                {
                this.state = 1838;
                this.match(RustParser.OR);
                }
            }

            this.state = 1841;
            this.patternNoTopAlt();
            this.state = 1846;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 242, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1842;
                    this.match(RustParser.OR);
                    this.state = 1843;
                    this.patternNoTopAlt();
                    }
                    }
                }
                this.state = 1848;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 242, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternNoTopAlt(): PatternNoTopAltContext {
        let localContext = new PatternNoTopAltContext(this.context, this.state);
        this.enterRule(localContext, 246, RustParser.RULE_patternNoTopAlt);
        try {
            this.state = 1851;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 243, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1849;
                this.patternWithoutRange();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1850;
                this.rangePattern();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternWithoutRange(): PatternWithoutRangeContext {
        let localContext = new PatternWithoutRangeContext(this.context, this.state);
        this.enterRule(localContext, 248, RustParser.RULE_patternWithoutRange);
        try {
            this.state = 1865;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1853;
                this.literalPattern();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1854;
                this.identifierPattern();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1855;
                this.wildcardPattern();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1856;
                this.restPattern();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1857;
                this.referencePattern();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1858;
                this.structPattern();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1859;
                this.tupleStructPattern();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1860;
                this.tuplePattern();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1861;
                this.groupedPattern();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1862;
                this.slicePattern();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1863;
                this.pathPattern();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1864;
                this.macroInvocation();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literalPattern(): LiteralPatternContext {
        let localContext = new LiteralPatternContext(this.context, this.state);
        this.enterRule(localContext, 250, RustParser.RULE_literalPattern);
        let _la: number;
        try {
            this.state = 1883;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 247, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1867;
                this.match(RustParser.KW_TRUE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1868;
                this.match(RustParser.KW_FALSE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1869;
                this.match(RustParser.CHAR_LITERAL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1870;
                this.match(RustParser.BYTE_LITERAL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1871;
                this.match(RustParser.STRING_LITERAL);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1872;
                this.match(RustParser.RAW_STRING_LITERAL);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1873;
                this.match(RustParser.BYTE_STRING_LITERAL);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1874;
                this.match(RustParser.RAW_BYTE_STRING_LITERAL);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1876;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 1875;
                    this.match(RustParser.MINUS);
                    }
                }

                this.state = 1878;
                this.match(RustParser.INTEGER_LITERAL);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1880;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 1879;
                    this.match(RustParser.MINUS);
                    }
                }

                this.state = 1882;
                this.match(RustParser.FLOAT_LITERAL);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierPattern(): IdentifierPatternContext {
        let localContext = new IdentifierPatternContext(this.context, this.state);
        this.enterRule(localContext, 252, RustParser.RULE_identifierPattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1886;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 22) {
                {
                this.state = 1885;
                this.match(RustParser.KW_REF);
                }
            }

            this.state = 1889;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 1888;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 1891;
            this.identifier();
            this.state = 1894;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 110) {
                {
                this.state = 1892;
                this.match(RustParser.AT);
                this.state = 1893;
                this.pattern();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public wildcardPattern(): WildcardPatternContext {
        let localContext = new WildcardPatternContext(this.context, this.state);
        this.enterRule(localContext, 254, RustParser.RULE_wildcardPattern);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1896;
            this.match(RustParser.UNDERSCORE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public restPattern(): RestPatternContext {
        let localContext = new RestPatternContext(this.context, this.state);
        this.enterRule(localContext, 256, RustParser.RULE_restPattern);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1898;
            this.match(RustParser.DOTDOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rangePattern(): RangePatternContext {
        let localContext = new RangePatternContext(this.context, this.state);
        this.enterRule(localContext, 258, RustParser.RULE_rangePattern);
        try {
            this.state = 1911;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 251, this.context) ) {
            case 1:
                localContext = new InclusiveRangePatternContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1900;
                this.rangePatternBound();
                this.state = 1901;
                this.match(RustParser.DOTDOTEQ);
                this.state = 1902;
                this.rangePatternBound();
                }
                break;
            case 2:
                localContext = new HalfOpenRangePatternContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1904;
                this.rangePatternBound();
                this.state = 1905;
                this.match(RustParser.DOTDOT);
                }
                break;
            case 3:
                localContext = new ObsoleteRangePatternContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1907;
                this.rangePatternBound();
                this.state = 1908;
                this.match(RustParser.DOTDOTDOT);
                this.state = 1909;
                this.rangePatternBound();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rangePatternBound(): RangePatternBoundContext {
        let localContext = new RangePatternBoundContext(this.context, this.state);
        this.enterRule(localContext, 260, RustParser.RULE_rangePatternBound);
        let _la: number;
        try {
            this.state = 1924;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 254, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1913;
                this.match(RustParser.CHAR_LITERAL);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1914;
                this.match(RustParser.BYTE_LITERAL);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1916;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 1915;
                    this.match(RustParser.MINUS);
                    }
                }

                this.state = 1918;
                this.match(RustParser.INTEGER_LITERAL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1920;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 1919;
                    this.match(RustParser.MINUS);
                    }
                }

                this.state = 1922;
                this.match(RustParser.FLOAT_LITERAL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1923;
                this.pathPattern();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public referencePattern(): ReferencePatternContext {
        let localContext = new ReferencePatternContext(this.context, this.state);
        this.enterRule(localContext, 262, RustParser.RULE_referencePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1926;
            _la = this.tokenStream.LA(1);
            if(!(_la === 89 || _la === 91)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1928;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 255, this.context) ) {
            case 1:
                {
                this.state = 1927;
                this.match(RustParser.KW_MUT);
                }
                break;
            }
            this.state = 1930;
            this.patternWithoutRange();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structPattern(): StructPatternContext {
        let localContext = new StructPatternContext(this.context, this.state);
        this.enterRule(localContext, 264, RustParser.RULE_structPattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1932;
            this.pathInExpression();
            this.state = 1933;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1935;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20 || _la === 22 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 2097177) !== 0) || _la === 113 || _la === 122) {
                {
                this.state = 1934;
                this.structPatternElements();
                }
            }

            this.state = 1937;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structPatternElements(): StructPatternElementsContext {
        let localContext = new StructPatternElementsContext(this.context, this.state);
        this.enterRule(localContext, 266, RustParser.RULE_structPatternElements);
        let _la: number;
        try {
            this.state = 1947;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 259, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1939;
                this.structPatternFields();
                this.state = 1944;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 1940;
                    this.match(RustParser.COMMA);
                    this.state = 1942;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 113 || _la === 122) {
                        {
                        this.state = 1941;
                        this.structPatternEtCetera();
                        }
                    }

                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1946;
                this.structPatternEtCetera();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structPatternFields(): StructPatternFieldsContext {
        let localContext = new StructPatternFieldsContext(this.context, this.state);
        this.enterRule(localContext, 268, RustParser.RULE_structPatternFields);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1949;
            this.structPatternField();
            this.state = 1954;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 260, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1950;
                    this.match(RustParser.COMMA);
                    this.state = 1951;
                    this.structPatternField();
                    }
                    }
                }
                this.state = 1956;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 260, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structPatternField(): StructPatternFieldContext {
        let localContext = new StructPatternFieldContext(this.context, this.state);
        this.enterRule(localContext, 270, RustParser.RULE_structPatternField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1960;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 1957;
                this.outerAttribute();
                }
                }
                this.state = 1962;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1978;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 264, this.context) ) {
            case 1:
                {
                this.state = 1963;
                this.tupleIndex();
                this.state = 1964;
                this.match(RustParser.COLON);
                this.state = 1965;
                this.pattern();
                }
                break;
            case 2:
                {
                this.state = 1967;
                this.identifier();
                this.state = 1968;
                this.match(RustParser.COLON);
                this.state = 1969;
                this.pattern();
                }
                break;
            case 3:
                {
                this.state = 1972;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                    this.state = 1971;
                    this.match(RustParser.KW_REF);
                    }
                }

                this.state = 1975;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 1974;
                    this.match(RustParser.KW_MUT);
                    }
                }

                this.state = 1977;
                this.identifier();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structPatternEtCetera(): StructPatternEtCeteraContext {
        let localContext = new StructPatternEtCeteraContext(this.context, this.state);
        this.enterRule(localContext, 272, RustParser.RULE_structPatternEtCetera);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1983;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 1980;
                this.outerAttribute();
                }
                }
                this.state = 1985;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1986;
            this.match(RustParser.DOTDOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleStructPattern(): TupleStructPatternContext {
        let localContext = new TupleStructPatternContext(this.context, this.state);
        this.enterRule(localContext, 274, RustParser.RULE_tupleStructPattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1988;
            this.pathInExpression();
            this.state = 1989;
            this.match(RustParser.LPAREN);
            this.state = 1991;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1397752352) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 608141341) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 1094975495) !== 0) || _la === 127 || _la === 129) {
                {
                this.state = 1990;
                this.tupleStructItems();
                }
            }

            this.state = 1993;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleStructItems(): TupleStructItemsContext {
        let localContext = new TupleStructItemsContext(this.context, this.state);
        this.enterRule(localContext, 276, RustParser.RULE_tupleStructItems);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1995;
            this.pattern();
            this.state = 2000;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 267, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1996;
                    this.match(RustParser.COMMA);
                    this.state = 1997;
                    this.pattern();
                    }
                    }
                }
                this.state = 2002;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 267, this.context);
            }
            this.state = 2004;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 2003;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tuplePattern(): TuplePatternContext {
        let localContext = new TuplePatternContext(this.context, this.state);
        this.enterRule(localContext, 278, RustParser.RULE_tuplePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2006;
            this.match(RustParser.LPAREN);
            this.state = 2008;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1397752352) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 608141341) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 1094975495) !== 0) || _la === 127 || _la === 129) {
                {
                this.state = 2007;
                this.tuplePatternItems();
                }
            }

            this.state = 2010;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tuplePatternItems(): TuplePatternItemsContext {
        let localContext = new TuplePatternItemsContext(this.context, this.state);
        this.enterRule(localContext, 280, RustParser.RULE_tuplePatternItems);
        let _la: number;
        try {
            let alternative: number;
            this.state = 2026;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 272, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2012;
                this.pattern();
                this.state = 2013;
                this.match(RustParser.COMMA);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2015;
                this.restPattern();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2016;
                this.pattern();
                this.state = 2019;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 2017;
                        this.match(RustParser.COMMA);
                        this.state = 2018;
                        this.pattern();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2021;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 270, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 2024;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 2023;
                    this.match(RustParser.COMMA);
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupedPattern(): GroupedPatternContext {
        let localContext = new GroupedPatternContext(this.context, this.state);
        this.enterRule(localContext, 282, RustParser.RULE_groupedPattern);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2028;
            this.match(RustParser.LPAREN);
            this.state = 2029;
            this.pattern();
            this.state = 2030;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public slicePattern(): SlicePatternContext {
        let localContext = new SlicePatternContext(this.context, this.state);
        this.enterRule(localContext, 284, RustParser.RULE_slicePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2032;
            this.match(RustParser.LSQUAREBRACKET);
            this.state = 2034;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1397752352) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 608141341) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 1094975495) !== 0) || _la === 127 || _la === 129) {
                {
                this.state = 2033;
                this.slicePatternItems();
                }
            }

            this.state = 2036;
            this.match(RustParser.RSQUAREBRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public slicePatternItems(): SlicePatternItemsContext {
        let localContext = new SlicePatternItemsContext(this.context, this.state);
        this.enterRule(localContext, 286, RustParser.RULE_slicePatternItems);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2038;
            this.pattern();
            this.state = 2043;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 274, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2039;
                    this.match(RustParser.COMMA);
                    this.state = 2040;
                    this.pattern();
                    }
                    }
                }
                this.state = 2045;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 274, this.context);
            }
            this.state = 2047;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 2046;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathPattern(): PathPatternContext {
        let localContext = new PathPatternContext(this.context, this.state);
        this.enterRule(localContext, 288, RustParser.RULE_pathPattern);
        try {
            this.state = 2051;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2049;
                this.pathInExpression();
                }
                break;
            case RustParser.LT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2050;
                this.qualifiedPathInExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_(): Type_Context {
        let localContext = new Type_Context(this.context, this.state);
        this.enterRule(localContext, 290, RustParser.RULE_type_);
        try {
            this.state = 2056;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 277, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2053;
                this.typeNoBounds();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2054;
                this.implTraitType();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2055;
                this.traitObjectType();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeNoBounds(): TypeNoBoundsContext {
        let localContext = new TypeNoBoundsContext(this.context, this.state);
        this.enterRule(localContext, 292, RustParser.RULE_typeNoBounds);
        try {
            this.state = 2072;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 278, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2058;
                this.parenthesizedType();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2059;
                this.implTraitTypeOneBound();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2060;
                this.traitObjectTypeOneBound();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2061;
                this.typePath();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2062;
                this.tupleType();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2063;
                this.neverType();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2064;
                this.rawPointerType();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2065;
                this.referenceType();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 2066;
                this.arrayType();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 2067;
                this.sliceType();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 2068;
                this.inferredType();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 2069;
                this.qualifiedPathInType();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 2070;
                this.bareFunctionType();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 2071;
                this.macroInvocation();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parenthesizedType(): ParenthesizedTypeContext {
        let localContext = new ParenthesizedTypeContext(this.context, this.state);
        this.enterRule(localContext, 294, RustParser.RULE_parenthesizedType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2074;
            this.match(RustParser.LPAREN);
            this.state = 2075;
            this.type_();
            this.state = 2076;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public neverType(): NeverTypeContext {
        let localContext = new NeverTypeContext(this.context, this.state);
        this.enterRule(localContext, 296, RustParser.RULE_neverType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2078;
            this.match(RustParser.NOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleType(): TupleTypeContext {
        let localContext = new TupleTypeContext(this.context, this.state);
        this.enterRule(localContext, 298, RustParser.RULE_tupleType);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2080;
            this.match(RustParser.LPAREN);
            this.state = 2091;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 318778656) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 132120641) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 1140851081) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 1313) !== 0)) {
                {
                this.state = 2084;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 2081;
                        this.type_();
                        this.state = 2082;
                        this.match(RustParser.COMMA);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2086;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 279, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 2089;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 318778656) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 132120641) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 1140851081) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 1313) !== 0)) {
                    {
                    this.state = 2088;
                    this.type_();
                    }
                }

                }
            }

            this.state = 2093;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayType(): ArrayTypeContext {
        let localContext = new ArrayTypeContext(this.context, this.state);
        this.enterRule(localContext, 300, RustParser.RULE_arrayType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2095;
            this.match(RustParser.LSQUAREBRACKET);
            this.state = 2096;
            this.type_();
            this.state = 2097;
            this.match(RustParser.SEMI);
            this.state = 2098;
            this.expression(0);
            this.state = 2099;
            this.match(RustParser.RSQUAREBRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sliceType(): SliceTypeContext {
        let localContext = new SliceTypeContext(this.context, this.state);
        this.enterRule(localContext, 302, RustParser.RULE_sliceType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2101;
            this.match(RustParser.LSQUAREBRACKET);
            this.state = 2102;
            this.type_();
            this.state = 2103;
            this.match(RustParser.RSQUAREBRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public referenceType(): ReferenceTypeContext {
        let localContext = new ReferenceTypeContext(this.context, this.state);
        this.enterRule(localContext, 304, RustParser.RULE_referenceType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2105;
            this.match(RustParser.AND);
            this.state = 2107;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435461) !== 0)) {
                {
                this.state = 2106;
                this.lifetime();
                }
            }

            this.state = 2110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 2109;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 2112;
            this.typeNoBounds();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rawPointerType(): RawPointerTypeContext {
        let localContext = new RawPointerTypeContext(this.context, this.state);
        this.enterRule(localContext, 306, RustParser.RULE_rawPointerType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2114;
            this.match(RustParser.STAR);
            this.state = 2115;
            _la = this.tokenStream.LA(1);
            if(!(_la === 3 || _la === 20)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 2116;
            this.typeNoBounds();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bareFunctionType(): BareFunctionTypeContext {
        let localContext = new BareFunctionTypeContext(this.context, this.state);
        this.enterRule(localContext, 308, RustParser.RULE_bareFunctionType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2119;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 2118;
                this.forLifetimes();
                }
            }

            this.state = 2121;
            this.functionTypeQualifiers();
            this.state = 2122;
            this.match(RustParser.KW_FN);
            this.state = 2123;
            this.match(RustParser.LPAREN);
            this.state = 2125;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 318778656) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 132120641) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 1140851081) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 1321) !== 0)) {
                {
                this.state = 2124;
                this.functionParametersMaybeNamedVariadic();
                }
            }

            this.state = 2127;
            this.match(RustParser.RPAREN);
            this.state = 2129;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 286, this.context) ) {
            case 1:
                {
                this.state = 2128;
                this.bareFunctionReturnType();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionTypeQualifiers(): FunctionTypeQualifiersContext {
        let localContext = new FunctionTypeQualifiersContext(this.context, this.state);
        this.enterRule(localContext, 310, RustParser.RULE_functionTypeQualifiers);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2132;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 2131;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 2138;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8) {
                {
                this.state = 2134;
                this.match(RustParser.KW_EXTERN);
                this.state = 2136;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70 || _la === 71) {
                    {
                    this.state = 2135;
                    this.abi();
                    }
                }

                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bareFunctionReturnType(): BareFunctionReturnTypeContext {
        let localContext = new BareFunctionReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 312, RustParser.RULE_bareFunctionReturnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2140;
            this.match(RustParser.RARROW);
            this.state = 2141;
            this.typeNoBounds();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParametersMaybeNamedVariadic(): FunctionParametersMaybeNamedVariadicContext {
        let localContext = new FunctionParametersMaybeNamedVariadicContext(this.context, this.state);
        this.enterRule(localContext, 314, RustParser.RULE_functionParametersMaybeNamedVariadic);
        try {
            this.state = 2145;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 290, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2143;
                this.maybeNamedFunctionParameters();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2144;
                this.maybeNamedFunctionParametersVariadic();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public maybeNamedFunctionParameters(): MaybeNamedFunctionParametersContext {
        let localContext = new MaybeNamedFunctionParametersContext(this.context, this.state);
        this.enterRule(localContext, 316, RustParser.RULE_maybeNamedFunctionParameters);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2147;
            this.maybeNamedParam();
            this.state = 2152;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 291, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2148;
                    this.match(RustParser.COMMA);
                    this.state = 2149;
                    this.maybeNamedParam();
                    }
                    }
                }
                this.state = 2154;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 291, this.context);
            }
            this.state = 2156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 2155;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public maybeNamedParam(): MaybeNamedParamContext {
        let localContext = new MaybeNamedParamContext(this.context, this.state);
        this.enterRule(localContext, 318, RustParser.RULE_maybeNamedParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 2158;
                this.outerAttribute();
                }
                }
                this.state = 2163;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2169;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 295, this.context) ) {
            case 1:
                {
                this.state = 2166;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_MACRORULES:
                case RustParser.NON_KEYWORD_IDENTIFIER:
                case RustParser.RAW_IDENTIFIER:
                    {
                    this.state = 2164;
                    this.identifier();
                    }
                    break;
                case RustParser.UNDERSCORE:
                    {
                    this.state = 2165;
                    this.match(RustParser.UNDERSCORE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2168;
                this.match(RustParser.COLON);
                }
                break;
            }
            this.state = 2171;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public maybeNamedFunctionParametersVariadic(): MaybeNamedFunctionParametersVariadicContext {
        let localContext = new MaybeNamedFunctionParametersVariadicContext(this.context, this.state);
        this.enterRule(localContext, 320, RustParser.RULE_maybeNamedFunctionParametersVariadic);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2178;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 296, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2173;
                    this.maybeNamedParam();
                    this.state = 2174;
                    this.match(RustParser.COMMA);
                    }
                    }
                }
                this.state = 2180;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 296, this.context);
            }
            this.state = 2181;
            this.maybeNamedParam();
            this.state = 2182;
            this.match(RustParser.COMMA);
            this.state = 2186;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122) {
                {
                {
                this.state = 2183;
                this.outerAttribute();
                }
                }
                this.state = 2188;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2189;
            this.match(RustParser.DOTDOTDOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traitObjectType(): TraitObjectTypeContext {
        let localContext = new TraitObjectTypeContext(this.context, this.state);
        this.enterRule(localContext, 322, RustParser.RULE_traitObjectType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2192;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 2191;
                this.match(RustParser.KW_DYN);
                }
            }

            this.state = 2194;
            this.typeParamBounds();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traitObjectTypeOneBound(): TraitObjectTypeOneBoundContext {
        let localContext = new TraitObjectTypeOneBoundContext(this.context, this.state);
        this.enterRule(localContext, 324, RustParser.RULE_traitObjectTypeOneBound);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2197;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 2196;
                this.match(RustParser.KW_DYN);
                }
            }

            this.state = 2199;
            this.traitBound();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public implTraitType(): ImplTraitTypeContext {
        let localContext = new ImplTraitTypeContext(this.context, this.state);
        this.enterRule(localContext, 326, RustParser.RULE_implTraitType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2201;
            this.match(RustParser.KW_IMPL);
            this.state = 2202;
            this.typeParamBounds();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public implTraitTypeOneBound(): ImplTraitTypeOneBoundContext {
        let localContext = new ImplTraitTypeOneBoundContext(this.context, this.state);
        this.enterRule(localContext, 328, RustParser.RULE_implTraitTypeOneBound);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2204;
            this.match(RustParser.KW_IMPL);
            this.state = 2205;
            this.traitBound();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inferredType(): InferredTypeContext {
        let localContext = new InferredTypeContext(this.context, this.state);
        this.enterRule(localContext, 330, RustParser.RULE_inferredType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2207;
            this.match(RustParser.UNDERSCORE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParamBounds(): TypeParamBoundsContext {
        let localContext = new TypeParamBoundsContext(this.context, this.state);
        this.enterRule(localContext, 332, RustParser.RULE_typeParamBounds);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2209;
            this.typeParamBound();
            this.state = 2214;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 300, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2210;
                    this.match(RustParser.PLUS);
                    this.state = 2211;
                    this.typeParamBound();
                    }
                    }
                }
                this.state = 2216;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 300, this.context);
            }
            this.state = 2218;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 301, this.context) ) {
            case 1:
                {
                this.state = 2217;
                this.match(RustParser.PLUS);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParamBound(): TypeParamBoundContext {
        let localContext = new TypeParamBoundContext(this.context, this.state);
        this.enterRule(localContext, 334, RustParser.RULE_typeParamBound);
        try {
            this.state = 2222;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_STATICLIFETIME:
            case RustParser.KW_UNDERLINELIFETIME:
            case RustParser.LIFETIME_OR_LABEL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2220;
                this.lifetime();
                }
                break;
            case RustParser.KW_CRATE:
            case RustParser.KW_FOR:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
            case RustParser.QUESTION:
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2221;
                this.traitBound();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traitBound(): TraitBoundContext {
        let localContext = new TraitBoundContext(this.context, this.state);
        this.enterRule(localContext, 336, RustParser.RULE_traitBound);
        let _la: number;
        try {
            this.state = 2241;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CRATE:
            case RustParser.KW_FOR:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
            case RustParser.QUESTION:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2225;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
                    {
                    this.state = 2224;
                    this.match(RustParser.QUESTION);
                    }
                }

                this.state = 2228;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 11) {
                    {
                    this.state = 2227;
                    this.forLifetimes();
                    }
                }

                this.state = 2230;
                this.typePath();
                }
                break;
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2231;
                this.match(RustParser.LPAREN);
                this.state = 2233;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
                    {
                    this.state = 2232;
                    this.match(RustParser.QUESTION);
                    }
                }

                this.state = 2236;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 11) {
                    {
                    this.state = 2235;
                    this.forLifetimes();
                    }
                }

                this.state = 2238;
                this.typePath();
                this.state = 2239;
                this.match(RustParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lifetimeBounds(): LifetimeBoundsContext {
        let localContext = new LifetimeBoundsContext(this.context, this.state);
        this.enterRule(localContext, 338, RustParser.RULE_lifetimeBounds);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2248;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 308, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2243;
                    this.lifetime();
                    this.state = 2244;
                    this.match(RustParser.PLUS);
                    }
                    }
                }
                this.state = 2250;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 308, this.context);
            }
            this.state = 2252;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435461) !== 0)) {
                {
                this.state = 2251;
                this.lifetime();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lifetime(): LifetimeContext {
        let localContext = new LifetimeContext(this.context, this.state);
        this.enterRule(localContext, 340, RustParser.RULE_lifetime);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2254;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435461) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simplePath(): SimplePathContext {
        let localContext = new SimplePathContext(this.context, this.state);
        this.enterRule(localContext, 342, RustParser.RULE_simplePath);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2257;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 119) {
                {
                this.state = 2256;
                this.match(RustParser.PATHSEP);
                }
            }

            this.state = 2259;
            this.simplePathSegment();
            this.state = 2264;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 311, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2260;
                    this.match(RustParser.PATHSEP);
                    this.state = 2261;
                    this.simplePathSegment();
                    }
                    }
                }
                this.state = 2266;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 311, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simplePathSegment(): SimplePathSegmentContext {
        let localContext = new SimplePathSegmentContext(this.context, this.state);
        this.enterRule(localContext, 344, RustParser.RULE_simplePathSegment);
        try {
            this.state = 2272;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2267;
                this.identifier();
                }
                break;
            case RustParser.KW_SUPER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2268;
                this.match(RustParser.KW_SUPER);
                }
                break;
            case RustParser.KW_SELFVALUE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2269;
                this.match(RustParser.KW_SELFVALUE);
                }
                break;
            case RustParser.KW_CRATE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2270;
                this.match(RustParser.KW_CRATE);
                }
                break;
            case RustParser.KW_DOLLARCRATE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2271;
                this.match(RustParser.KW_DOLLARCRATE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathInExpression(): PathInExpressionContext {
        let localContext = new PathInExpressionContext(this.context, this.state);
        this.enterRule(localContext, 346, RustParser.RULE_pathInExpression);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2275;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 119) {
                {
                this.state = 2274;
                this.match(RustParser.PATHSEP);
                }
            }

            this.state = 2277;
            this.pathExprSegment();
            this.state = 2282;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 314, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2278;
                    this.match(RustParser.PATHSEP);
                    this.state = 2279;
                    this.pathExprSegment();
                    }
                    }
                }
                this.state = 2284;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 314, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathExprSegment(): PathExprSegmentContext {
        let localContext = new PathExprSegmentContext(this.context, this.state);
        this.enterRule(localContext, 348, RustParser.RULE_pathExprSegment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2285;
            this.pathIdentSegment();
            this.state = 2288;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 315, this.context) ) {
            case 1:
                {
                this.state = 2286;
                this.match(RustParser.PATHSEP);
                this.state = 2287;
                this.genericArgs();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathIdentSegment(): PathIdentSegmentContext {
        let localContext = new PathIdentSegmentContext(this.context, this.state);
        this.enterRule(localContext, 350, RustParser.RULE_pathIdentSegment);
        try {
            this.state = 2296;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2290;
                this.identifier();
                }
                break;
            case RustParser.KW_SUPER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2291;
                this.match(RustParser.KW_SUPER);
                }
                break;
            case RustParser.KW_SELFVALUE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2292;
                this.match(RustParser.KW_SELFVALUE);
                }
                break;
            case RustParser.KW_SELFTYPE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2293;
                this.match(RustParser.KW_SELFTYPE);
                }
                break;
            case RustParser.KW_CRATE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2294;
                this.match(RustParser.KW_CRATE);
                }
                break;
            case RustParser.KW_DOLLARCRATE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2295;
                this.match(RustParser.KW_DOLLARCRATE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgs(): GenericArgsContext {
        let localContext = new GenericArgsContext(this.context, this.state);
        this.enterRule(localContext, 352, RustParser.RULE_genericArgs);
        let _la: number;
        try {
            let alternative: number;
            this.state = 2341;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 324, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2298;
                this.match(RustParser.LT);
                this.state = 2299;
                this.match(RustParser.GT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2300;
                this.match(RustParser.LT);
                this.state = 2301;
                this.genericArgsLifetimes();
                this.state = 2304;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 317, this.context) ) {
                case 1:
                    {
                    this.state = 2302;
                    this.match(RustParser.COMMA);
                    this.state = 2303;
                    this.genericArgsTypes();
                    }
                    break;
                }
                this.state = 2308;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 318, this.context) ) {
                case 1:
                    {
                    this.state = 2306;
                    this.match(RustParser.COMMA);
                    this.state = 2307;
                    this.genericArgsBindings();
                    }
                    break;
                }
                this.state = 2311;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 2310;
                    this.match(RustParser.COMMA);
                    }
                }

                this.state = 2313;
                this.match(RustParser.GT);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2315;
                this.match(RustParser.LT);
                this.state = 2316;
                this.genericArgsTypes();
                this.state = 2319;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 320, this.context) ) {
                case 1:
                    {
                    this.state = 2317;
                    this.match(RustParser.COMMA);
                    this.state = 2318;
                    this.genericArgsBindings();
                    }
                    break;
                }
                this.state = 2322;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 2321;
                    this.match(RustParser.COMMA);
                    }
                }

                this.state = 2324;
                this.match(RustParser.GT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2326;
                this.match(RustParser.LT);
                this.state = 2332;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 322, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 2327;
                        this.genericArg();
                        this.state = 2328;
                        this.match(RustParser.COMMA);
                        }
                        }
                    }
                    this.state = 2334;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 322, this.context);
                }
                this.state = 2335;
                this.genericArg();
                this.state = 2337;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 2336;
                    this.match(RustParser.COMMA);
                    }
                }

                this.state = 2339;
                this.match(RustParser.GT);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArg(): GenericArgContext {
        let localContext = new GenericArgContext(this.context, this.state);
        this.enterRule(localContext, 354, RustParser.RULE_genericArg);
        try {
            this.state = 2347;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 325, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2343;
                this.lifetime();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2344;
                this.type_();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2345;
                this.genericArgsConst();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2346;
                this.genericArgsBinding();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgsConst(): GenericArgsConstContext {
        let localContext = new GenericArgsConstContext(this.context, this.state);
        this.enterRule(localContext, 356, RustParser.RULE_genericArgsConst);
        let _la: number;
        try {
            this.state = 2355;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LCURLYBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2349;
                this.blockExpression();
                }
                break;
            case RustParser.KW_FALSE:
            case RustParser.KW_TRUE:
            case RustParser.CHAR_LITERAL:
            case RustParser.STRING_LITERAL:
            case RustParser.RAW_STRING_LITERAL:
            case RustParser.BYTE_LITERAL:
            case RustParser.BYTE_STRING_LITERAL:
            case RustParser.RAW_BYTE_STRING_LITERAL:
            case RustParser.INTEGER_LITERAL:
            case RustParser.FLOAT_LITERAL:
            case RustParser.MINUS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2351;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 2350;
                    this.match(RustParser.MINUS);
                    }
                }

                this.state = 2353;
                this.literalExpression();
                }
                break;
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2354;
                this.simplePathSegment();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgsLifetimes(): GenericArgsLifetimesContext {
        let localContext = new GenericArgsLifetimesContext(this.context, this.state);
        this.enterRule(localContext, 358, RustParser.RULE_genericArgsLifetimes);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2357;
            this.lifetime();
            this.state = 2362;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 328, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2358;
                    this.match(RustParser.COMMA);
                    this.state = 2359;
                    this.lifetime();
                    }
                    }
                }
                this.state = 2364;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 328, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgsTypes(): GenericArgsTypesContext {
        let localContext = new GenericArgsTypesContext(this.context, this.state);
        this.enterRule(localContext, 360, RustParser.RULE_genericArgsTypes);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2365;
            this.type_();
            this.state = 2370;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 329, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2366;
                    this.match(RustParser.COMMA);
                    this.state = 2367;
                    this.type_();
                    }
                    }
                }
                this.state = 2372;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 329, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgsBindings(): GenericArgsBindingsContext {
        let localContext = new GenericArgsBindingsContext(this.context, this.state);
        this.enterRule(localContext, 362, RustParser.RULE_genericArgsBindings);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2373;
            this.genericArgsBinding();
            this.state = 2378;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 330, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2374;
                    this.match(RustParser.COMMA);
                    this.state = 2375;
                    this.genericArgsBinding();
                    }
                    }
                }
                this.state = 2380;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 330, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgsBinding(): GenericArgsBindingContext {
        let localContext = new GenericArgsBindingContext(this.context, this.state);
        this.enterRule(localContext, 364, RustParser.RULE_genericArgsBinding);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2381;
            this.identifier();
            this.state = 2382;
            this.match(RustParser.EQ);
            this.state = 2383;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedPathInExpression(): QualifiedPathInExpressionContext {
        let localContext = new QualifiedPathInExpressionContext(this.context, this.state);
        this.enterRule(localContext, 366, RustParser.RULE_qualifiedPathInExpression);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2385;
            this.qualifiedPathType();
            this.state = 2388;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 2386;
                    this.match(RustParser.PATHSEP);
                    this.state = 2387;
                    this.pathExprSegment();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2390;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 331, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedPathType(): QualifiedPathTypeContext {
        let localContext = new QualifiedPathTypeContext(this.context, this.state);
        this.enterRule(localContext, 368, RustParser.RULE_qualifiedPathType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2392;
            this.match(RustParser.LT);
            this.state = 2393;
            this.type_();
            this.state = 2396;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 2394;
                this.match(RustParser.KW_AS);
                this.state = 2395;
                this.typePath();
                }
            }

            this.state = 2398;
            this.match(RustParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedPathInType(): QualifiedPathInTypeContext {
        let localContext = new QualifiedPathInTypeContext(this.context, this.state);
        this.enterRule(localContext, 370, RustParser.RULE_qualifiedPathInType);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2400;
            this.qualifiedPathType();
            this.state = 2403;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 2401;
                    this.match(RustParser.PATHSEP);
                    this.state = 2402;
                    this.typePathSegment();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2405;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 333, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typePath(): TypePathContext {
        let localContext = new TypePathContext(this.context, this.state);
        this.enterRule(localContext, 372, RustParser.RULE_typePath);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2408;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 119) {
                {
                this.state = 2407;
                this.match(RustParser.PATHSEP);
                }
            }

            this.state = 2410;
            this.typePathSegment();
            this.state = 2415;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 335, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2411;
                    this.match(RustParser.PATHSEP);
                    this.state = 2412;
                    this.typePathSegment();
                    }
                    }
                }
                this.state = 2417;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 335, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typePathSegment(): TypePathSegmentContext {
        let localContext = new TypePathSegmentContext(this.context, this.state);
        this.enterRule(localContext, 374, RustParser.RULE_typePathSegment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2418;
            this.pathIdentSegment();
            this.state = 2420;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 336, this.context) ) {
            case 1:
                {
                this.state = 2419;
                this.match(RustParser.PATHSEP);
                }
                break;
            }
            this.state = 2424;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 337, this.context) ) {
            case 1:
                {
                this.state = 2422;
                this.genericArgs();
                }
                break;
            case 2:
                {
                this.state = 2423;
                this.typePathFn();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typePathFn(): TypePathFnContext {
        let localContext = new TypePathFnContext(this.context, this.state);
        this.enterRule(localContext, 376, RustParser.RULE_typePathFn);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2426;
            this.match(RustParser.LPAREN);
            this.state = 2428;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 318778656) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 132120641) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 1140851081) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 1313) !== 0)) {
                {
                this.state = 2427;
                this.typePathInputs();
                }
            }

            this.state = 2430;
            this.match(RustParser.RPAREN);
            this.state = 2433;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 339, this.context) ) {
            case 1:
                {
                this.state = 2431;
                this.match(RustParser.RARROW);
                this.state = 2432;
                this.type_();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typePathInputs(): TypePathInputsContext {
        let localContext = new TypePathInputsContext(this.context, this.state);
        this.enterRule(localContext, 378, RustParser.RULE_typePathInputs);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2435;
            this.type_();
            this.state = 2440;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 340, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2436;
                    this.match(RustParser.COMMA);
                    this.state = 2437;
                    this.type_();
                    }
                    }
                }
                this.state = 2442;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 340, this.context);
            }
            this.state = 2444;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 2443;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public visibility(): VisibilityContext {
        let localContext = new VisibilityContext(this.context, this.state);
        this.enterRule(localContext, 380, RustParser.RULE_visibility);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2446;
            this.match(RustParser.KW_PUB);
            this.state = 2456;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 343, this.context) ) {
            case 1:
                {
                this.state = 2447;
                this.match(RustParser.LPAREN);
                this.state = 2453;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_CRATE:
                    {
                    this.state = 2448;
                    this.match(RustParser.KW_CRATE);
                    }
                    break;
                case RustParser.KW_SELFVALUE:
                    {
                    this.state = 2449;
                    this.match(RustParser.KW_SELFVALUE);
                    }
                    break;
                case RustParser.KW_SUPER:
                    {
                    this.state = 2450;
                    this.match(RustParser.KW_SUPER);
                    }
                    break;
                case RustParser.KW_IN:
                    {
                    this.state = 2451;
                    this.match(RustParser.KW_IN);
                    this.state = 2452;
                    this.simplePath();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2455;
                this.match(RustParser.RPAREN);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 382, RustParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2458;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keyword(): KeywordContext {
        let localContext = new KeywordContext(this.context, this.state);
        this.enterRule(localContext, 384, RustParser.RULE_keyword);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2460;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4194303) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext {
        let localContext = new MacroIdentifierLikeTokenContext(this.context, this.state);
        this.enterRule(localContext, 386, RustParser.RULE_macroIdentifierLikeToken);
        try {
            this.state = 2468;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 344, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2462;
                this.keyword();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2463;
                this.identifier();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2464;
                this.match(RustParser.KW_MACRORULES);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2465;
                this.match(RustParser.KW_UNDERLINELIFETIME);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2466;
                this.match(RustParser.KW_DOLLARCRATE);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2467;
                this.match(RustParser.LIFETIME_OR_LABEL);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroLiteralToken(): MacroLiteralTokenContext {
        let localContext = new MacroLiteralTokenContext(this.context, this.state);
        this.enterRule(localContext, 388, RustParser.RULE_macroLiteralToken);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2470;
            this.literalExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroPunctuationToken(): MacroPunctuationTokenContext {
        let localContext = new MacroPunctuationTokenContext(this.context, this.state);
        this.enterRule(localContext, 390, RustParser.RULE_macroPunctuationToken);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2472;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 4294967293) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 255) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public shl(): ShlContext {
        let localContext = new ShlContext(this.context, this.state);
        this.enterRule(localContext, 392, RustParser.RULE_shl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2474;
            this.match(RustParser.LT);
            this.state = 2475;
            if (!(this.next('<'))) {
                throw this.createFailedPredicateException("this.next('<')");
            }
            this.state = 2476;
            this.match(RustParser.LT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public shr(): ShrContext {
        let localContext = new ShrContext(this.context, this.state);
        this.enterRule(localContext, 394, RustParser.RULE_shr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2478;
            this.match(RustParser.GT);
            this.state = 2479;
            if (!(this.next('>'))) {
                throw this.createFailedPredicateException("this.next('>')");
            }
            this.state = 2480;
            this.match(RustParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 78:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        case 196:
            return this.shl_sempred(localContext as ShlContext, predIndex);
        case 197:
            return this.shr_sempred(localContext as ShrContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 26);
        case 1:
            return this.precpred(this.context, 25);
        case 2:
            return this.precpred(this.context, 24);
        case 3:
            return this.precpred(this.context, 23);
        case 4:
            return this.precpred(this.context, 22);
        case 5:
            return this.precpred(this.context, 21);
        case 6:
            return this.precpred(this.context, 20);
        case 7:
            return this.precpred(this.context, 19);
        case 8:
            return this.precpred(this.context, 18);
        case 9:
            return this.precpred(this.context, 14);
        case 10:
            return this.precpred(this.context, 13);
        case 11:
            return this.precpred(this.context, 12);
        case 12:
            return this.precpred(this.context, 37);
        case 13:
            return this.precpred(this.context, 36);
        case 14:
            return this.precpred(this.context, 35);
        case 15:
            return this.precpred(this.context, 34);
        case 16:
            return this.precpred(this.context, 33);
        case 17:
            return this.precpred(this.context, 32);
        case 18:
            return this.precpred(this.context, 31);
        case 19:
            return this.precpred(this.context, 27);
        case 20:
            return this.precpred(this.context, 17);
        }
        return true;
    }
    private shl_sempred(localContext: ShlContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 21:
            return this.next('<');
        }
        return true;
    }
    private shr_sempred(localContext: ShrContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 22:
            return this.next('>');
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,130,2483,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
        2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,
        7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,
        2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,
        7,197,1,0,5,0,398,8,0,10,0,12,0,401,9,0,1,0,5,0,404,8,0,10,0,12,
        0,407,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,5,2,417,8,2,10,2,12,2,
        420,9,2,1,2,1,2,1,2,5,2,425,8,2,10,2,12,2,428,9,2,1,2,1,2,1,2,5,
        2,433,8,2,10,2,12,2,436,9,2,1,2,3,2,439,8,2,1,3,4,3,442,8,3,11,3,
        12,3,443,1,3,3,3,447,8,3,1,4,1,4,1,4,1,4,1,4,3,4,454,8,4,1,5,1,5,
        1,5,1,5,5,5,460,8,5,10,5,12,5,463,9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
        5,5,5,472,8,5,10,5,12,5,475,9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,
        484,8,5,10,5,12,5,487,9,5,1,5,1,5,3,5,491,8,5,1,6,1,6,1,6,1,6,1,
        6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,512,
        8,7,1,8,1,8,1,8,5,8,517,8,8,10,8,12,8,520,9,8,1,8,3,8,523,8,8,1,
        9,1,9,1,9,1,9,1,10,1,10,5,10,531,8,10,10,10,12,10,534,9,10,1,10,
        1,10,1,10,5,10,539,8,10,10,10,12,10,542,9,10,1,10,1,10,1,10,5,10,
        547,8,10,10,10,12,10,550,9,10,1,10,3,10,553,8,10,1,11,4,11,556,8,
        11,11,11,12,11,557,1,11,1,11,1,11,1,11,3,11,564,8,11,1,11,1,11,1,
        11,1,11,1,11,4,11,571,8,11,11,11,12,11,572,1,11,1,11,3,11,577,8,
        11,1,11,1,11,3,11,581,8,11,1,12,1,12,1,12,1,12,3,12,587,8,12,1,13,
        1,13,1,14,1,14,1,14,1,14,3,14,595,8,14,1,15,1,15,1,16,1,16,1,17,
        5,17,602,8,17,10,17,12,17,605,9,17,1,17,1,17,3,17,609,8,17,1,18,
        3,18,612,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,3,18,627,8,18,1,19,1,19,3,19,631,8,19,1,20,3,20,634,
        8,20,1,20,1,20,1,20,1,20,1,20,5,20,641,8,20,10,20,12,20,644,9,20,
        1,20,5,20,647,8,20,10,20,12,20,650,9,20,1,20,3,20,653,8,20,1,21,
        1,21,1,21,1,21,3,21,659,8,21,1,21,1,21,1,22,1,22,3,22,665,8,22,1,
        23,1,23,1,23,3,23,670,8,23,1,24,1,24,1,24,1,24,1,25,3,25,677,8,25,
        1,25,3,25,680,8,25,1,25,1,25,1,25,1,25,1,25,5,25,687,8,25,10,25,
        12,25,690,9,25,1,25,3,25,693,8,25,3,25,695,8,25,1,25,3,25,698,8,
        25,1,25,1,25,1,25,1,25,3,25,704,8,25,3,25,706,8,25,3,25,708,8,25,
        1,26,1,26,1,27,1,27,1,27,1,27,3,27,716,8,27,1,27,1,27,3,27,720,8,
        27,1,27,1,27,3,27,724,8,27,1,27,3,27,727,8,27,1,27,1,27,3,27,731,
        8,27,1,28,3,28,734,8,28,1,28,3,28,737,8,28,1,28,3,28,740,8,28,1,
        28,1,28,3,28,744,8,28,3,28,746,8,28,1,29,1,29,1,30,1,30,3,30,752,
        8,30,1,30,1,30,1,30,3,30,757,8,30,1,30,1,30,1,30,5,30,762,8,30,10,
        30,12,30,765,9,30,1,30,3,30,768,8,30,3,30,770,8,30,1,31,5,31,773,
        8,31,10,31,12,31,776,9,31,1,31,1,31,3,31,780,8,31,1,32,1,32,3,32,
        784,8,32,3,32,786,8,32,1,32,3,32,789,8,32,1,32,1,32,1,33,3,33,794,
        8,33,1,33,1,33,1,33,1,33,1,34,5,34,801,8,34,10,34,12,34,804,9,34,
        1,34,1,34,1,34,3,34,809,8,34,1,35,1,35,1,35,1,35,3,35,815,8,35,1,
        36,1,36,1,36,1,37,1,37,1,37,3,37,823,8,37,1,37,3,37,826,8,37,1,37,
        1,37,3,37,830,8,37,1,37,1,37,1,38,1,38,3,38,836,8,38,1,39,1,39,1,
        39,3,39,841,8,39,1,39,3,39,844,8,39,1,39,1,39,3,39,848,8,39,1,39,
        1,39,3,39,852,8,39,1,40,1,40,1,40,3,40,857,8,40,1,40,1,40,3,40,861,
        8,40,1,40,1,40,3,40,865,8,40,1,40,1,40,1,41,1,41,1,41,5,41,872,8,
        41,10,41,12,41,875,9,41,1,41,3,41,878,8,41,1,42,5,42,881,8,42,10,
        42,12,42,884,9,42,1,42,3,42,887,8,42,1,42,1,42,1,42,1,42,1,43,1,
        43,1,43,5,43,896,8,43,10,43,12,43,899,9,43,1,43,3,43,902,8,43,1,
        44,5,44,905,8,44,10,44,12,44,908,9,44,1,44,3,44,911,8,44,1,44,1,
        44,1,45,1,45,1,45,3,45,918,8,45,1,45,3,45,921,8,45,1,45,1,45,3,45,
        925,8,45,1,45,1,45,1,46,1,46,1,46,5,46,932,8,46,10,46,12,46,935,
        9,46,1,46,3,46,938,8,46,1,47,5,47,941,8,47,10,47,12,47,944,9,47,
        1,47,3,47,947,8,47,1,47,1,47,1,47,1,47,3,47,953,8,47,1,48,1,48,3,
        48,957,8,48,1,48,1,48,1,49,1,49,3,49,963,8,49,1,49,1,49,1,50,1,50,
        1,50,1,51,1,51,1,51,3,51,973,8,51,1,51,3,51,976,8,51,1,51,1,51,1,
        51,1,51,1,52,1,52,1,52,3,52,985,8,52,1,52,1,52,1,52,1,52,3,52,991,
        8,52,1,52,1,52,1,53,1,53,3,53,997,8,53,1,53,1,53,1,53,1,53,1,53,
        3,53,1004,8,53,1,53,1,53,1,54,3,54,1009,8,54,1,54,1,54,1,54,3,54,
        1014,8,54,1,54,1,54,3,54,1018,8,54,3,54,1020,8,54,1,54,3,54,1023,
        8,54,1,54,1,54,5,54,1027,8,54,10,54,12,54,1030,9,54,1,54,5,54,1033,
        8,54,10,54,12,54,1036,9,54,1,54,1,54,1,55,1,55,3,55,1042,8,55,1,
        56,1,56,3,56,1046,8,56,1,56,1,56,3,56,1050,8,56,1,56,1,56,5,56,1054,
        8,56,10,56,12,56,1057,9,56,1,56,5,56,1060,8,56,10,56,12,56,1063,
        9,56,1,56,1,56,1,57,3,57,1068,8,57,1,57,1,57,3,57,1072,8,57,1,57,
        3,57,1075,8,57,1,57,1,57,1,57,1,57,3,57,1081,8,57,1,57,1,57,5,57,
        1085,8,57,10,57,12,57,1088,9,57,1,57,5,57,1091,8,57,10,57,12,57,
        1094,9,57,1,57,1,57,1,58,3,58,1099,8,58,1,58,1,58,3,58,1103,8,58,
        1,58,1,58,5,58,1107,8,58,10,58,12,58,1110,9,58,1,58,5,58,1113,8,
        58,10,58,12,58,1116,9,58,1,58,1,58,1,59,5,59,1121,8,59,10,59,12,
        59,1124,9,59,1,59,1,59,3,59,1128,8,59,1,59,1,59,3,59,1132,8,59,3,
        59,1134,8,59,1,60,1,60,1,60,1,60,5,60,1140,8,60,10,60,12,60,1143,
        9,60,1,60,1,60,3,60,1147,8,60,3,60,1149,8,60,1,60,1,60,1,61,5,61,
        1154,8,61,10,61,12,61,1157,9,61,1,61,1,61,1,61,3,61,1162,8,61,1,
        62,3,62,1165,8,62,1,62,1,62,1,62,3,62,1170,8,62,1,63,3,63,1173,8,
        63,1,63,1,63,1,63,3,63,1178,8,63,3,63,1180,8,63,1,63,1,63,3,63,1184,
        8,63,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,5,65,1195,8,65,
        10,65,12,65,1198,9,65,1,65,3,65,1201,8,65,1,66,1,66,3,66,1205,8,
        66,1,67,1,67,1,67,1,67,1,68,3,68,1212,8,68,1,68,1,68,1,68,3,68,1217,
        8,68,1,69,1,69,1,69,1,70,5,70,1223,8,70,10,70,12,70,1226,9,70,1,
        70,1,70,3,70,1230,8,70,1,70,1,70,1,70,3,70,1235,8,70,3,70,1237,8,
        70,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,73,1,
        73,3,73,1252,8,73,1,74,1,74,1,74,3,74,1257,8,74,1,75,1,75,1,75,1,
        75,1,75,3,75,1264,8,75,1,76,5,76,1267,8,76,10,76,12,76,1270,9,76,
        1,76,1,76,1,76,1,76,3,76,1276,8,76,1,76,1,76,3,76,1280,8,76,1,76,
        1,76,1,77,1,77,1,77,1,77,1,77,3,77,1289,8,77,3,77,1291,8,77,1,78,
        1,78,4,78,1295,8,78,11,78,12,78,1296,1,78,1,78,1,78,1,78,1,78,1,
        78,3,78,1305,8,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,3,78,1314,8,
        78,1,78,1,78,1,78,1,78,3,78,1320,8,78,1,78,3,78,1323,8,78,1,78,1,
        78,3,78,1327,8,78,1,78,3,78,1330,8,78,1,78,1,78,3,78,1334,8,78,1,
        78,1,78,5,78,1338,8,78,10,78,12,78,1341,9,78,1,78,1,78,1,78,1,78,
        1,78,5,78,1348,8,78,10,78,12,78,1351,9,78,1,78,3,78,1354,8,78,1,
        78,1,78,1,78,5,78,1359,8,78,10,78,12,78,1362,9,78,1,78,3,78,1365,
        8,78,1,78,1,78,1,78,1,78,1,78,1,78,3,78,1373,8,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,3,78,1384,8,78,1,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,3,78,1422,8,78,1,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,3,78,1438,8,78,
        1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
        1,78,3,78,1454,8,78,5,78,1456,8,78,10,78,12,78,1459,9,78,1,79,1,
        79,1,80,1,80,1,81,4,81,1466,8,81,11,81,12,81,1467,1,81,1,81,1,81,
        1,81,1,81,1,81,1,81,1,81,1,81,3,81,1479,8,81,1,82,1,82,1,83,1,83,
        3,83,1485,8,83,1,84,1,84,5,84,1489,8,84,10,84,12,84,1492,9,84,1,
        84,3,84,1495,8,84,1,84,1,84,1,85,4,85,1500,8,85,11,85,12,85,1501,
        1,85,3,85,1505,8,85,1,85,3,85,1508,8,85,1,86,1,86,3,86,1512,8,86,
        1,86,1,86,1,87,1,87,1,87,1,88,1,88,1,88,5,88,1522,8,88,10,88,12,
        88,1525,9,88,1,88,3,88,1528,8,88,1,88,1,88,1,88,1,88,3,88,1534,8,
        88,1,89,1,89,1,89,4,89,1539,8,89,11,89,12,89,1540,1,89,3,89,1544,
        8,89,1,90,1,90,1,91,1,91,1,91,3,91,1551,8,91,1,92,1,92,1,92,5,92,
        1556,8,92,10,92,12,92,1559,9,92,1,92,1,92,3,92,1563,8,92,1,92,1,
        92,1,93,1,93,1,93,5,93,1570,8,93,10,93,12,93,1573,9,93,1,93,1,93,
        1,93,3,93,1578,8,93,3,93,1580,8,93,1,94,5,94,1583,8,94,10,94,12,
        94,1586,9,94,1,94,1,94,1,94,3,94,1591,8,94,1,94,1,94,1,94,3,94,1596,
        8,94,1,95,1,95,1,95,1,96,1,96,1,96,5,96,1604,8,96,10,96,12,96,1607,
        9,96,1,96,1,96,1,96,5,96,1612,8,96,10,96,12,96,1615,9,96,1,96,3,
        96,1618,8,96,3,96,1620,8,96,1,96,1,96,1,97,1,97,1,98,1,98,1,98,3,
        98,1629,8,98,1,99,1,99,1,99,3,99,1634,8,99,1,99,1,99,1,100,1,100,
        1,100,5,100,1641,8,100,10,100,12,100,1644,9,100,1,100,3,100,1647,
        8,100,1,101,1,101,1,101,3,101,1652,8,101,1,101,1,101,1,101,3,101,
        1657,8,101,1,102,1,102,1,102,1,102,1,102,5,102,1664,8,102,10,102,
        12,102,1667,9,102,1,102,3,102,1670,8,102,3,102,1672,8,102,1,102,
        1,102,1,103,1,103,1,104,1,104,1,104,5,104,1681,8,104,10,104,12,104,
        1684,9,104,1,104,3,104,1687,8,104,1,105,3,105,1690,8,105,1,105,1,
        105,1,105,3,105,1695,8,105,1,105,3,105,1698,8,105,1,105,1,105,1,
        105,1,105,1,105,3,105,1705,8,105,1,106,1,106,1,106,5,106,1710,8,
        106,10,106,12,106,1713,9,106,1,106,3,106,1716,8,106,1,107,5,107,
        1719,8,107,10,107,12,107,1722,9,107,1,107,1,107,1,107,3,107,1727,
        8,107,1,108,3,108,1730,8,108,1,108,1,108,1,108,1,108,3,108,1736,
        8,108,1,109,1,109,1,109,1,110,1,110,1,111,1,111,1,111,1,111,1,112,
        1,112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,
        1,113,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,115,1,115,
        3,115,1770,8,115,3,115,1772,8,115,1,116,1,116,1,116,1,116,1,116,
        1,116,1,116,1,116,1,116,1,116,3,116,1784,8,116,3,116,1786,8,116,
        1,117,1,117,1,117,1,117,5,117,1792,8,117,10,117,12,117,1795,9,117,
        1,117,3,117,1798,8,117,1,117,1,117,1,118,1,118,1,118,1,118,5,118,
        1806,8,118,10,118,12,118,1809,9,118,1,118,1,118,1,118,1,118,3,118,
        1815,8,118,1,119,1,119,1,119,1,119,1,119,3,119,1822,8,119,3,119,
        1824,8,119,1,120,5,120,1827,8,120,10,120,12,120,1830,9,120,1,120,
        1,120,3,120,1834,8,120,1,121,1,121,1,121,1,122,3,122,1840,8,122,
        1,122,1,122,1,122,5,122,1845,8,122,10,122,12,122,1848,9,122,1,123,
        1,123,3,123,1852,8,123,1,124,1,124,1,124,1,124,1,124,1,124,1,124,
        1,124,1,124,1,124,1,124,1,124,3,124,1866,8,124,1,125,1,125,1,125,
        1,125,1,125,1,125,1,125,1,125,1,125,3,125,1877,8,125,1,125,1,125,
        3,125,1881,8,125,1,125,3,125,1884,8,125,1,126,3,126,1887,8,126,1,
        126,3,126,1890,8,126,1,126,1,126,1,126,3,126,1895,8,126,1,127,1,
        127,1,128,1,128,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,
        1,129,1,129,1,129,3,129,1912,8,129,1,130,1,130,1,130,3,130,1917,
        8,130,1,130,1,130,3,130,1921,8,130,1,130,1,130,3,130,1925,8,130,
        1,131,1,131,3,131,1929,8,131,1,131,1,131,1,132,1,132,1,132,3,132,
        1936,8,132,1,132,1,132,1,133,1,133,1,133,3,133,1943,8,133,3,133,
        1945,8,133,1,133,3,133,1948,8,133,1,134,1,134,1,134,5,134,1953,8,
        134,10,134,12,134,1956,9,134,1,135,5,135,1959,8,135,10,135,12,135,
        1962,9,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
        3,135,1973,8,135,1,135,3,135,1976,8,135,1,135,3,135,1979,8,135,1,
        136,5,136,1982,8,136,10,136,12,136,1985,9,136,1,136,1,136,1,137,
        1,137,1,137,3,137,1992,8,137,1,137,1,137,1,138,1,138,1,138,5,138,
        1999,8,138,10,138,12,138,2002,9,138,1,138,3,138,2005,8,138,1,139,
        1,139,3,139,2009,8,139,1,139,1,139,1,140,1,140,1,140,1,140,1,140,
        1,140,1,140,4,140,2020,8,140,11,140,12,140,2021,1,140,3,140,2025,
        8,140,3,140,2027,8,140,1,141,1,141,1,141,1,141,1,142,1,142,3,142,
        2035,8,142,1,142,1,142,1,143,1,143,1,143,5,143,2042,8,143,10,143,
        12,143,2045,9,143,1,143,3,143,2048,8,143,1,144,1,144,3,144,2052,
        8,144,1,145,1,145,1,145,3,145,2057,8,145,1,146,1,146,1,146,1,146,
        1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,3,146,
        2073,8,146,1,147,1,147,1,147,1,147,1,148,1,148,1,149,1,149,1,149,
        1,149,4,149,2085,8,149,11,149,12,149,2086,1,149,3,149,2090,8,149,
        3,149,2092,8,149,1,149,1,149,1,150,1,150,1,150,1,150,1,150,1,150,
        1,151,1,151,1,151,1,151,1,152,1,152,3,152,2108,8,152,1,152,3,152,
        2111,8,152,1,152,1,152,1,153,1,153,1,153,1,153,1,154,3,154,2120,
        8,154,1,154,1,154,1,154,1,154,3,154,2126,8,154,1,154,1,154,3,154,
        2130,8,154,1,155,3,155,2133,8,155,1,155,1,155,3,155,2137,8,155,3,
        155,2139,8,155,1,156,1,156,1,156,1,157,1,157,3,157,2146,8,157,1,
        158,1,158,1,158,5,158,2151,8,158,10,158,12,158,2154,9,158,1,158,
        3,158,2157,8,158,1,159,5,159,2160,8,159,10,159,12,159,2163,9,159,
        1,159,1,159,3,159,2167,8,159,1,159,3,159,2170,8,159,1,159,1,159,
        1,160,1,160,1,160,5,160,2177,8,160,10,160,12,160,2180,9,160,1,160,
        1,160,1,160,5,160,2185,8,160,10,160,12,160,2188,9,160,1,160,1,160,
        1,161,3,161,2193,8,161,1,161,1,161,1,162,3,162,2198,8,162,1,162,
        1,162,1,163,1,163,1,163,1,164,1,164,1,164,1,165,1,165,1,166,1,166,
        1,166,5,166,2213,8,166,10,166,12,166,2216,9,166,1,166,3,166,2219,
        8,166,1,167,1,167,3,167,2223,8,167,1,168,3,168,2226,8,168,1,168,
        3,168,2229,8,168,1,168,1,168,1,168,3,168,2234,8,168,1,168,3,168,
        2237,8,168,1,168,1,168,1,168,3,168,2242,8,168,1,169,1,169,1,169,
        5,169,2247,8,169,10,169,12,169,2250,9,169,1,169,3,169,2253,8,169,
        1,170,1,170,1,171,3,171,2258,8,171,1,171,1,171,1,171,5,171,2263,
        8,171,10,171,12,171,2266,9,171,1,172,1,172,1,172,1,172,1,172,3,172,
        2273,8,172,1,173,3,173,2276,8,173,1,173,1,173,1,173,5,173,2281,8,
        173,10,173,12,173,2284,9,173,1,174,1,174,1,174,3,174,2289,8,174,
        1,175,1,175,1,175,1,175,1,175,1,175,3,175,2297,8,175,1,176,1,176,
        1,176,1,176,1,176,1,176,3,176,2305,8,176,1,176,1,176,3,176,2309,
        8,176,1,176,3,176,2312,8,176,1,176,1,176,1,176,1,176,1,176,1,176,
        3,176,2320,8,176,1,176,3,176,2323,8,176,1,176,1,176,1,176,1,176,
        1,176,1,176,5,176,2331,8,176,10,176,12,176,2334,9,176,1,176,1,176,
        3,176,2338,8,176,1,176,1,176,3,176,2342,8,176,1,177,1,177,1,177,
        1,177,3,177,2348,8,177,1,178,1,178,3,178,2352,8,178,1,178,1,178,
        3,178,2356,8,178,1,179,1,179,1,179,5,179,2361,8,179,10,179,12,179,
        2364,9,179,1,180,1,180,1,180,5,180,2369,8,180,10,180,12,180,2372,
        9,180,1,181,1,181,1,181,5,181,2377,8,181,10,181,12,181,2380,9,181,
        1,182,1,182,1,182,1,182,1,183,1,183,1,183,4,183,2389,8,183,11,183,
        12,183,2390,1,184,1,184,1,184,1,184,3,184,2397,8,184,1,184,1,184,
        1,185,1,185,1,185,4,185,2404,8,185,11,185,12,185,2405,1,186,3,186,
        2409,8,186,1,186,1,186,1,186,5,186,2414,8,186,10,186,12,186,2417,
        9,186,1,187,1,187,3,187,2421,8,187,1,187,1,187,3,187,2425,8,187,
        1,188,1,188,3,188,2429,8,188,1,188,1,188,1,188,3,188,2434,8,188,
        1,189,1,189,1,189,5,189,2439,8,189,10,189,12,189,2442,9,189,1,189,
        3,189,2445,8,189,1,190,1,190,1,190,1,190,1,190,1,190,1,190,3,190,
        2454,8,190,1,190,3,190,2457,8,190,1,191,1,191,1,192,1,192,1,193,
        1,193,1,193,1,193,1,193,1,193,3,193,2469,8,193,1,194,1,194,1,195,
        1,195,1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,197,1,197,0,1,
        156,198,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
        42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
        86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
        122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,
        154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,
        186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,
        218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,
        250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,
        282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,
        314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,
        346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,
        378,380,382,384,386,388,390,392,394,0,14,3,0,82,82,84,84,124,124,
        1,0,70,71,2,0,89,89,91,91,2,0,83,83,88,88,1,0,84,86,1,0,82,83,1,
        0,104,109,1,0,93,102,4,0,9,9,30,30,69,75,80,80,2,0,3,3,20,20,3,0,
        53,53,55,55,81,81,2,0,54,54,57,58,1,0,1,53,2,0,83,83,85,122,2766,
        0,399,1,0,0,0,2,410,1,0,0,0,4,438,1,0,0,0,6,446,1,0,0,0,8,453,1,
        0,0,0,10,490,1,0,0,0,12,492,1,0,0,0,14,511,1,0,0,0,16,513,1,0,0,
        0,18,524,1,0,0,0,20,552,1,0,0,0,22,580,1,0,0,0,24,586,1,0,0,0,26,
        588,1,0,0,0,28,594,1,0,0,0,30,596,1,0,0,0,32,598,1,0,0,0,34,603,
        1,0,0,0,36,611,1,0,0,0,38,630,1,0,0,0,40,633,1,0,0,0,42,654,1,0,
        0,0,44,664,1,0,0,0,46,666,1,0,0,0,48,671,1,0,0,0,50,707,1,0,0,0,
        52,709,1,0,0,0,54,711,1,0,0,0,56,733,1,0,0,0,58,747,1,0,0,0,60,769,
        1,0,0,0,62,774,1,0,0,0,64,785,1,0,0,0,66,793,1,0,0,0,68,802,1,0,
        0,0,70,810,1,0,0,0,72,816,1,0,0,0,74,819,1,0,0,0,76,835,1,0,0,0,
        78,837,1,0,0,0,80,853,1,0,0,0,82,868,1,0,0,0,84,882,1,0,0,0,86,892,
        1,0,0,0,88,906,1,0,0,0,90,914,1,0,0,0,92,928,1,0,0,0,94,942,1,0,
        0,0,96,954,1,0,0,0,98,960,1,0,0,0,100,966,1,0,0,0,102,969,1,0,0,
        0,104,981,1,0,0,0,106,994,1,0,0,0,108,1008,1,0,0,0,110,1041,1,0,
        0,0,112,1043,1,0,0,0,114,1067,1,0,0,0,116,1098,1,0,0,0,118,1122,
        1,0,0,0,120,1135,1,0,0,0,122,1155,1,0,0,0,124,1164,1,0,0,0,126,1172,
        1,0,0,0,128,1185,1,0,0,0,130,1190,1,0,0,0,132,1204,1,0,0,0,134,1206,
        1,0,0,0,136,1211,1,0,0,0,138,1218,1,0,0,0,140,1224,1,0,0,0,142,1238,
        1,0,0,0,144,1244,1,0,0,0,146,1249,1,0,0,0,148,1256,1,0,0,0,150,1263,
        1,0,0,0,152,1268,1,0,0,0,154,1290,1,0,0,0,156,1372,1,0,0,0,158,1460,
        1,0,0,0,160,1462,1,0,0,0,162,1478,1,0,0,0,164,1480,1,0,0,0,166,1484,
        1,0,0,0,168,1486,1,0,0,0,170,1507,1,0,0,0,172,1509,1,0,0,0,174,1515,
        1,0,0,0,176,1533,1,0,0,0,178,1538,1,0,0,0,180,1545,1,0,0,0,182,1550,
        1,0,0,0,184,1552,1,0,0,0,186,1566,1,0,0,0,188,1584,1,0,0,0,190,1597,
        1,0,0,0,192,1600,1,0,0,0,194,1623,1,0,0,0,196,1628,1,0,0,0,198,1630,
        1,0,0,0,200,1637,1,0,0,0,202,1656,1,0,0,0,204,1658,1,0,0,0,206,1675,
        1,0,0,0,208,1677,1,0,0,0,210,1689,1,0,0,0,212,1706,1,0,0,0,214,1720,
        1,0,0,0,216,1729,1,0,0,0,218,1737,1,0,0,0,220,1740,1,0,0,0,222,1742,
        1,0,0,0,224,1746,1,0,0,0,226,1753,1,0,0,0,228,1759,1,0,0,0,230,1762,
        1,0,0,0,232,1773,1,0,0,0,234,1787,1,0,0,0,236,1807,1,0,0,0,238,1823,
        1,0,0,0,240,1828,1,0,0,0,242,1835,1,0,0,0,244,1839,1,0,0,0,246,1851,
        1,0,0,0,248,1865,1,0,0,0,250,1883,1,0,0,0,252,1886,1,0,0,0,254,1896,
        1,0,0,0,256,1898,1,0,0,0,258,1911,1,0,0,0,260,1924,1,0,0,0,262,1926,
        1,0,0,0,264,1932,1,0,0,0,266,1947,1,0,0,0,268,1949,1,0,0,0,270,1960,
        1,0,0,0,272,1983,1,0,0,0,274,1988,1,0,0,0,276,1995,1,0,0,0,278,2006,
        1,0,0,0,280,2026,1,0,0,0,282,2028,1,0,0,0,284,2032,1,0,0,0,286,2038,
        1,0,0,0,288,2051,1,0,0,0,290,2056,1,0,0,0,292,2072,1,0,0,0,294,2074,
        1,0,0,0,296,2078,1,0,0,0,298,2080,1,0,0,0,300,2095,1,0,0,0,302,2101,
        1,0,0,0,304,2105,1,0,0,0,306,2114,1,0,0,0,308,2119,1,0,0,0,310,2132,
        1,0,0,0,312,2140,1,0,0,0,314,2145,1,0,0,0,316,2147,1,0,0,0,318,2161,
        1,0,0,0,320,2178,1,0,0,0,322,2192,1,0,0,0,324,2197,1,0,0,0,326,2201,
        1,0,0,0,328,2204,1,0,0,0,330,2207,1,0,0,0,332,2209,1,0,0,0,334,2222,
        1,0,0,0,336,2241,1,0,0,0,338,2248,1,0,0,0,340,2254,1,0,0,0,342,2257,
        1,0,0,0,344,2272,1,0,0,0,346,2275,1,0,0,0,348,2285,1,0,0,0,350,2296,
        1,0,0,0,352,2341,1,0,0,0,354,2347,1,0,0,0,356,2355,1,0,0,0,358,2357,
        1,0,0,0,360,2365,1,0,0,0,362,2373,1,0,0,0,364,2381,1,0,0,0,366,2385,
        1,0,0,0,368,2392,1,0,0,0,370,2400,1,0,0,0,372,2408,1,0,0,0,374,2418,
        1,0,0,0,376,2426,1,0,0,0,378,2435,1,0,0,0,380,2446,1,0,0,0,382,2458,
        1,0,0,0,384,2460,1,0,0,0,386,2468,1,0,0,0,388,2470,1,0,0,0,390,2472,
        1,0,0,0,392,2474,1,0,0,0,394,2478,1,0,0,0,396,398,3,142,71,0,397,
        396,1,0,0,0,398,401,1,0,0,0,399,397,1,0,0,0,399,400,1,0,0,0,400,
        405,1,0,0,0,401,399,1,0,0,0,402,404,3,34,17,0,403,402,1,0,0,0,404,
        407,1,0,0,0,405,403,1,0,0,0,405,406,1,0,0,0,406,408,1,0,0,0,407,
        405,1,0,0,0,408,409,5,0,0,1,409,1,1,0,0,0,410,411,3,342,171,0,411,
        412,5,88,0,0,412,413,3,4,2,0,413,3,1,0,0,0,414,418,5,129,0,0,415,
        417,3,6,3,0,416,415,1,0,0,0,417,420,1,0,0,0,418,416,1,0,0,0,418,
        419,1,0,0,0,419,421,1,0,0,0,420,418,1,0,0,0,421,439,5,130,0,0,422,
        426,5,127,0,0,423,425,3,6,3,0,424,423,1,0,0,0,425,428,1,0,0,0,426,
        424,1,0,0,0,426,427,1,0,0,0,427,429,1,0,0,0,428,426,1,0,0,0,429,
        439,5,128,0,0,430,434,5,125,0,0,431,433,3,6,3,0,432,431,1,0,0,0,
        433,436,1,0,0,0,434,432,1,0,0,0,434,435,1,0,0,0,435,437,1,0,0,0,
        436,434,1,0,0,0,437,439,5,126,0,0,438,414,1,0,0,0,438,422,1,0,0,
        0,438,430,1,0,0,0,439,5,1,0,0,0,440,442,3,8,4,0,441,440,1,0,0,0,
        442,443,1,0,0,0,443,441,1,0,0,0,443,444,1,0,0,0,444,447,1,0,0,0,
        445,447,3,4,2,0,446,441,1,0,0,0,446,445,1,0,0,0,447,7,1,0,0,0,448,
        454,3,386,193,0,449,454,3,388,194,0,450,454,3,390,195,0,451,454,
        3,30,15,0,452,454,5,123,0,0,453,448,1,0,0,0,453,449,1,0,0,0,453,
        450,1,0,0,0,453,451,1,0,0,0,453,452,1,0,0,0,454,9,1,0,0,0,455,456,
        3,342,171,0,456,457,5,88,0,0,457,461,5,129,0,0,458,460,3,6,3,0,459,
        458,1,0,0,0,460,463,1,0,0,0,461,459,1,0,0,0,461,462,1,0,0,0,462,
        464,1,0,0,0,463,461,1,0,0,0,464,465,5,130,0,0,465,466,5,117,0,0,
        466,491,1,0,0,0,467,468,3,342,171,0,468,469,5,88,0,0,469,473,5,127,
        0,0,470,472,3,6,3,0,471,470,1,0,0,0,472,475,1,0,0,0,473,471,1,0,
        0,0,473,474,1,0,0,0,474,476,1,0,0,0,475,473,1,0,0,0,476,477,5,128,
        0,0,477,478,5,117,0,0,478,491,1,0,0,0,479,480,3,342,171,0,480,481,
        5,88,0,0,481,485,5,125,0,0,482,484,3,6,3,0,483,482,1,0,0,0,484,487,
        1,0,0,0,485,483,1,0,0,0,485,486,1,0,0,0,486,488,1,0,0,0,487,485,
        1,0,0,0,488,489,5,126,0,0,489,491,1,0,0,0,490,455,1,0,0,0,490,467,
        1,0,0,0,490,479,1,0,0,0,491,11,1,0,0,0,492,493,5,54,0,0,493,494,
        5,88,0,0,494,495,3,382,191,0,495,496,3,14,7,0,496,13,1,0,0,0,497,
        498,5,129,0,0,498,499,3,16,8,0,499,500,5,130,0,0,500,501,5,117,0,
        0,501,512,1,0,0,0,502,503,5,127,0,0,503,504,3,16,8,0,504,505,5,128,
        0,0,505,506,5,117,0,0,506,512,1,0,0,0,507,508,5,125,0,0,508,509,
        3,16,8,0,509,510,5,126,0,0,510,512,1,0,0,0,511,497,1,0,0,0,511,502,
        1,0,0,0,511,507,1,0,0,0,512,15,1,0,0,0,513,518,3,18,9,0,514,515,
        5,117,0,0,515,517,3,18,9,0,516,514,1,0,0,0,517,520,1,0,0,0,518,516,
        1,0,0,0,518,519,1,0,0,0,519,522,1,0,0,0,520,518,1,0,0,0,521,523,
        5,117,0,0,522,521,1,0,0,0,522,523,1,0,0,0,523,17,1,0,0,0,524,525,
        3,20,10,0,525,526,5,121,0,0,526,527,3,32,16,0,527,19,1,0,0,0,528,
        532,5,129,0,0,529,531,3,22,11,0,530,529,1,0,0,0,531,534,1,0,0,0,
        532,530,1,0,0,0,532,533,1,0,0,0,533,535,1,0,0,0,534,532,1,0,0,0,
        535,553,5,130,0,0,536,540,5,127,0,0,537,539,3,22,11,0,538,537,1,
        0,0,0,539,542,1,0,0,0,540,538,1,0,0,0,540,541,1,0,0,0,541,543,1,
        0,0,0,542,540,1,0,0,0,543,553,5,128,0,0,544,548,5,125,0,0,545,547,
        3,22,11,0,546,545,1,0,0,0,547,550,1,0,0,0,548,546,1,0,0,0,548,549,
        1,0,0,0,549,551,1,0,0,0,550,548,1,0,0,0,551,553,5,126,0,0,552,528,
        1,0,0,0,552,536,1,0,0,0,552,544,1,0,0,0,553,21,1,0,0,0,554,556,3,
        24,12,0,555,554,1,0,0,0,556,557,1,0,0,0,557,555,1,0,0,0,557,558,
        1,0,0,0,558,581,1,0,0,0,559,581,3,20,10,0,560,563,5,123,0,0,561,
        564,3,382,191,0,562,564,5,24,0,0,563,561,1,0,0,0,563,562,1,0,0,0,
        564,565,1,0,0,0,565,566,5,118,0,0,566,581,3,26,13,0,567,568,5,123,
        0,0,568,570,5,129,0,0,569,571,3,22,11,0,570,569,1,0,0,0,571,572,
        1,0,0,0,572,570,1,0,0,0,572,573,1,0,0,0,573,574,1,0,0,0,574,576,
        5,130,0,0,575,577,3,28,14,0,576,575,1,0,0,0,576,577,1,0,0,0,577,
        578,1,0,0,0,578,579,3,30,15,0,579,581,1,0,0,0,580,555,1,0,0,0,580,
        559,1,0,0,0,580,560,1,0,0,0,580,567,1,0,0,0,581,23,1,0,0,0,582,587,
        3,386,193,0,583,587,3,388,194,0,584,587,3,390,195,0,585,587,3,30,
        15,0,586,582,1,0,0,0,586,583,1,0,0,0,586,584,1,0,0,0,586,585,1,0,
        0,0,587,25,1,0,0,0,588,589,3,382,191,0,589,27,1,0,0,0,590,595,3,
        386,193,0,591,595,3,388,194,0,592,595,3,390,195,0,593,595,5,123,
        0,0,594,590,1,0,0,0,594,591,1,0,0,0,594,592,1,0,0,0,594,593,1,0,
        0,0,595,29,1,0,0,0,596,597,7,0,0,0,597,31,1,0,0,0,598,599,3,4,2,
        0,599,33,1,0,0,0,600,602,3,144,72,0,601,600,1,0,0,0,602,605,1,0,
        0,0,603,601,1,0,0,0,603,604,1,0,0,0,604,608,1,0,0,0,605,603,1,0,
        0,0,606,609,3,36,18,0,607,609,3,38,19,0,608,606,1,0,0,0,608,607,
        1,0,0,0,609,35,1,0,0,0,610,612,3,380,190,0,611,610,1,0,0,0,611,612,
        1,0,0,0,612,626,1,0,0,0,613,627,3,40,20,0,614,627,3,42,21,0,615,
        627,3,48,24,0,616,627,3,54,27,0,617,627,3,74,37,0,618,627,3,76,38,
        0,619,627,3,90,45,0,620,627,3,102,51,0,621,627,3,104,52,0,622,627,
        3,106,53,0,623,627,3,108,54,0,624,627,3,110,55,0,625,627,3,116,58,
        0,626,613,1,0,0,0,626,614,1,0,0,0,626,615,1,0,0,0,626,616,1,0,0,
        0,626,617,1,0,0,0,626,618,1,0,0,0,626,619,1,0,0,0,626,620,1,0,0,
        0,626,621,1,0,0,0,626,622,1,0,0,0,626,623,1,0,0,0,626,624,1,0,0,
        0,626,625,1,0,0,0,627,37,1,0,0,0,628,631,3,10,5,0,629,631,3,12,6,
        0,630,628,1,0,0,0,630,629,1,0,0,0,631,39,1,0,0,0,632,634,5,32,0,
        0,633,632,1,0,0,0,633,634,1,0,0,0,634,635,1,0,0,0,635,636,5,18,0,
        0,636,652,3,382,191,0,637,653,5,117,0,0,638,642,5,125,0,0,639,641,
        3,142,71,0,640,639,1,0,0,0,641,644,1,0,0,0,642,640,1,0,0,0,642,643,
        1,0,0,0,643,648,1,0,0,0,644,642,1,0,0,0,645,647,3,34,17,0,646,645,
        1,0,0,0,647,650,1,0,0,0,648,646,1,0,0,0,648,649,1,0,0,0,649,651,
        1,0,0,0,650,648,1,0,0,0,651,653,5,126,0,0,652,637,1,0,0,0,652,638,
        1,0,0,0,653,41,1,0,0,0,654,655,5,8,0,0,655,656,5,5,0,0,656,658,3,
        44,22,0,657,659,3,46,23,0,658,657,1,0,0,0,658,659,1,0,0,0,659,660,
        1,0,0,0,660,661,5,117,0,0,661,43,1,0,0,0,662,665,3,382,191,0,663,
        665,5,24,0,0,664,662,1,0,0,0,664,663,1,0,0,0,665,45,1,0,0,0,666,
        669,5,1,0,0,667,670,3,382,191,0,668,670,5,111,0,0,669,667,1,0,0,
        0,669,668,1,0,0,0,670,47,1,0,0,0,671,672,5,33,0,0,672,673,3,50,25,
        0,673,674,5,117,0,0,674,49,1,0,0,0,675,677,3,342,171,0,676,675,1,
        0,0,0,676,677,1,0,0,0,677,678,1,0,0,0,678,680,5,119,0,0,679,676,
        1,0,0,0,679,680,1,0,0,0,680,697,1,0,0,0,681,698,5,84,0,0,682,694,
        5,125,0,0,683,688,3,50,25,0,684,685,5,116,0,0,685,687,3,50,25,0,
        686,684,1,0,0,0,687,690,1,0,0,0,688,686,1,0,0,0,688,689,1,0,0,0,
        689,692,1,0,0,0,690,688,1,0,0,0,691,693,5,116,0,0,692,691,1,0,0,
        0,692,693,1,0,0,0,693,695,1,0,0,0,694,683,1,0,0,0,694,695,1,0,0,
        0,695,696,1,0,0,0,696,698,5,126,0,0,697,681,1,0,0,0,697,682,1,0,
        0,0,698,708,1,0,0,0,699,705,3,342,171,0,700,703,5,1,0,0,701,704,
        3,382,191,0,702,704,5,111,0,0,703,701,1,0,0,0,703,702,1,0,0,0,704,
        706,1,0,0,0,705,700,1,0,0,0,705,706,1,0,0,0,706,708,1,0,0,0,707,
        679,1,0,0,0,707,699,1,0,0,0,708,51,1,0,0,0,709,710,3,168,84,0,710,
        53,1,0,0,0,711,712,3,56,28,0,712,713,5,10,0,0,713,715,3,382,191,
        0,714,716,3,120,60,0,715,714,1,0,0,0,715,716,1,0,0,0,716,717,1,0,
        0,0,717,719,5,129,0,0,718,720,3,60,30,0,719,718,1,0,0,0,719,720,
        1,0,0,0,720,721,1,0,0,0,721,723,5,130,0,0,722,724,3,72,36,0,723,
        722,1,0,0,0,723,724,1,0,0,0,724,726,1,0,0,0,725,727,3,130,65,0,726,
        725,1,0,0,0,726,727,1,0,0,0,727,730,1,0,0,0,728,731,3,52,26,0,729,
        731,5,117,0,0,730,728,1,0,0,0,730,729,1,0,0,0,731,55,1,0,0,0,732,
        734,5,3,0,0,733,732,1,0,0,0,733,734,1,0,0,0,734,736,1,0,0,0,735,
        737,5,36,0,0,736,735,1,0,0,0,736,737,1,0,0,0,737,739,1,0,0,0,738,
        740,5,32,0,0,739,738,1,0,0,0,739,740,1,0,0,0,740,745,1,0,0,0,741,
        743,5,8,0,0,742,744,3,58,29,0,743,742,1,0,0,0,743,744,1,0,0,0,744,
        746,1,0,0,0,745,741,1,0,0,0,745,746,1,0,0,0,746,57,1,0,0,0,747,748,
        7,1,0,0,748,59,1,0,0,0,749,751,3,62,31,0,750,752,5,116,0,0,751,750,
        1,0,0,0,751,752,1,0,0,0,752,770,1,0,0,0,753,754,3,62,31,0,754,755,
        5,116,0,0,755,757,1,0,0,0,756,753,1,0,0,0,756,757,1,0,0,0,757,758,
        1,0,0,0,758,763,3,68,34,0,759,760,5,116,0,0,760,762,3,68,34,0,761,
        759,1,0,0,0,762,765,1,0,0,0,763,761,1,0,0,0,763,764,1,0,0,0,764,
        767,1,0,0,0,765,763,1,0,0,0,766,768,5,116,0,0,767,766,1,0,0,0,767,
        768,1,0,0,0,768,770,1,0,0,0,769,749,1,0,0,0,769,756,1,0,0,0,770,
        61,1,0,0,0,771,773,3,144,72,0,772,771,1,0,0,0,773,776,1,0,0,0,774,
        772,1,0,0,0,774,775,1,0,0,0,775,779,1,0,0,0,776,774,1,0,0,0,777,
        780,3,64,32,0,778,780,3,66,33,0,779,777,1,0,0,0,779,778,1,0,0,0,
        780,63,1,0,0,0,781,783,5,89,0,0,782,784,3,340,170,0,783,782,1,0,
        0,0,783,784,1,0,0,0,784,786,1,0,0,0,785,781,1,0,0,0,785,786,1,0,
        0,0,786,788,1,0,0,0,787,789,5,20,0,0,788,787,1,0,0,0,788,789,1,0,
        0,0,789,790,1,0,0,0,790,791,5,24,0,0,791,65,1,0,0,0,792,794,5,20,
        0,0,793,792,1,0,0,0,793,794,1,0,0,0,794,795,1,0,0,0,795,796,5,24,
        0,0,796,797,5,118,0,0,797,798,3,290,145,0,798,67,1,0,0,0,799,801,
        3,144,72,0,800,799,1,0,0,0,801,804,1,0,0,0,802,800,1,0,0,0,802,803,
        1,0,0,0,803,808,1,0,0,0,804,802,1,0,0,0,805,809,3,70,35,0,806,809,
        5,114,0,0,807,809,3,290,145,0,808,805,1,0,0,0,808,806,1,0,0,0,808,
        807,1,0,0,0,809,69,1,0,0,0,810,811,3,244,122,0,811,814,5,118,0,0,
        812,815,3,290,145,0,813,815,5,114,0,0,814,812,1,0,0,0,814,813,1,
        0,0,0,815,71,1,0,0,0,816,817,5,120,0,0,817,818,3,290,145,0,818,73,
        1,0,0,0,819,820,5,31,0,0,820,822,3,382,191,0,821,823,3,120,60,0,
        822,821,1,0,0,0,822,823,1,0,0,0,823,825,1,0,0,0,824,826,3,130,65,
        0,825,824,1,0,0,0,825,826,1,0,0,0,826,829,1,0,0,0,827,828,5,103,
        0,0,828,830,3,290,145,0,829,827,1,0,0,0,829,830,1,0,0,0,830,831,
        1,0,0,0,831,832,5,117,0,0,832,75,1,0,0,0,833,836,3,78,39,0,834,836,
        3,80,40,0,835,833,1,0,0,0,835,834,1,0,0,0,836,77,1,0,0,0,837,838,
        5,27,0,0,838,840,3,382,191,0,839,841,3,120,60,0,840,839,1,0,0,0,
        840,841,1,0,0,0,841,843,1,0,0,0,842,844,3,130,65,0,843,842,1,0,0,
        0,843,844,1,0,0,0,844,851,1,0,0,0,845,847,5,125,0,0,846,848,3,82,
        41,0,847,846,1,0,0,0,847,848,1,0,0,0,848,849,1,0,0,0,849,852,5,126,
        0,0,850,852,5,117,0,0,851,845,1,0,0,0,851,850,1,0,0,0,852,79,1,0,
        0,0,853,854,5,27,0,0,854,856,3,382,191,0,855,857,3,120,60,0,856,
        855,1,0,0,0,856,857,1,0,0,0,857,858,1,0,0,0,858,860,5,129,0,0,859,
        861,3,86,43,0,860,859,1,0,0,0,860,861,1,0,0,0,861,862,1,0,0,0,862,
        864,5,130,0,0,863,865,3,130,65,0,864,863,1,0,0,0,864,865,1,0,0,0,
        865,866,1,0,0,0,866,867,5,117,0,0,867,81,1,0,0,0,868,873,3,84,42,
        0,869,870,5,116,0,0,870,872,3,84,42,0,871,869,1,0,0,0,872,875,1,
        0,0,0,873,871,1,0,0,0,873,874,1,0,0,0,874,877,1,0,0,0,875,873,1,
        0,0,0,876,878,5,116,0,0,877,876,1,0,0,0,877,878,1,0,0,0,878,83,1,
        0,0,0,879,881,3,144,72,0,880,879,1,0,0,0,881,884,1,0,0,0,882,880,
        1,0,0,0,882,883,1,0,0,0,883,886,1,0,0,0,884,882,1,0,0,0,885,887,
        3,380,190,0,886,885,1,0,0,0,886,887,1,0,0,0,887,888,1,0,0,0,888,
        889,3,382,191,0,889,890,5,118,0,0,890,891,3,290,145,0,891,85,1,0,
        0,0,892,897,3,88,44,0,893,894,5,116,0,0,894,896,3,88,44,0,895,893,
        1,0,0,0,896,899,1,0,0,0,897,895,1,0,0,0,897,898,1,0,0,0,898,901,
        1,0,0,0,899,897,1,0,0,0,900,902,5,116,0,0,901,900,1,0,0,0,901,902,
        1,0,0,0,902,87,1,0,0,0,903,905,3,144,72,0,904,903,1,0,0,0,905,908,
        1,0,0,0,906,904,1,0,0,0,906,907,1,0,0,0,907,910,1,0,0,0,908,906,
        1,0,0,0,909,911,3,380,190,0,910,909,1,0,0,0,910,911,1,0,0,0,911,
        912,1,0,0,0,912,913,3,290,145,0,913,89,1,0,0,0,914,915,5,7,0,0,915,
        917,3,382,191,0,916,918,3,120,60,0,917,916,1,0,0,0,917,918,1,0,0,
        0,918,920,1,0,0,0,919,921,3,130,65,0,920,919,1,0,0,0,920,921,1,0,
        0,0,921,922,1,0,0,0,922,924,5,125,0,0,923,925,3,92,46,0,924,923,
        1,0,0,0,924,925,1,0,0,0,925,926,1,0,0,0,926,927,5,126,0,0,927,91,
        1,0,0,0,928,933,3,94,47,0,929,930,5,116,0,0,930,932,3,94,47,0,931,
        929,1,0,0,0,932,935,1,0,0,0,933,931,1,0,0,0,933,934,1,0,0,0,934,
        937,1,0,0,0,935,933,1,0,0,0,936,938,5,116,0,0,937,936,1,0,0,0,937,
        938,1,0,0,0,938,93,1,0,0,0,939,941,3,144,72,0,940,939,1,0,0,0,941,
        944,1,0,0,0,942,940,1,0,0,0,942,943,1,0,0,0,943,946,1,0,0,0,944,
        942,1,0,0,0,945,947,3,380,190,0,946,945,1,0,0,0,946,947,1,0,0,0,
        947,948,1,0,0,0,948,952,3,382,191,0,949,953,3,96,48,0,950,953,3,
        98,49,0,951,953,3,100,50,0,952,949,1,0,0,0,952,950,1,0,0,0,952,951,
        1,0,0,0,952,953,1,0,0,0,953,95,1,0,0,0,954,956,5,129,0,0,955,957,
        3,86,43,0,956,955,1,0,0,0,956,957,1,0,0,0,957,958,1,0,0,0,958,959,
        5,130,0,0,959,97,1,0,0,0,960,962,5,125,0,0,961,963,3,82,41,0,962,
        961,1,0,0,0,962,963,1,0,0,0,963,964,1,0,0,0,964,965,5,126,0,0,965,
        99,1,0,0,0,966,967,5,103,0,0,967,968,3,156,78,0,968,101,1,0,0,0,
        969,970,5,52,0,0,970,972,3,382,191,0,971,973,3,120,60,0,972,971,
        1,0,0,0,972,973,1,0,0,0,973,975,1,0,0,0,974,976,3,130,65,0,975,974,
        1,0,0,0,975,976,1,0,0,0,976,977,1,0,0,0,977,978,5,125,0,0,978,979,
        3,82,41,0,979,980,5,126,0,0,980,103,1,0,0,0,981,984,5,3,0,0,982,
        985,3,382,191,0,983,985,5,111,0,0,984,982,1,0,0,0,984,983,1,0,0,
        0,985,986,1,0,0,0,986,987,5,118,0,0,987,990,3,290,145,0,988,989,
        5,103,0,0,989,991,3,156,78,0,990,988,1,0,0,0,990,991,1,0,0,0,991,
        992,1,0,0,0,992,993,5,117,0,0,993,105,1,0,0,0,994,996,5,26,0,0,995,
        997,5,20,0,0,996,995,1,0,0,0,996,997,1,0,0,0,997,998,1,0,0,0,998,
        999,3,382,191,0,999,1000,5,118,0,0,1000,1003,3,290,145,0,1001,1002,
        5,103,0,0,1002,1004,3,156,78,0,1003,1001,1,0,0,0,1003,1004,1,0,0,
        0,1004,1005,1,0,0,0,1005,1006,5,117,0,0,1006,107,1,0,0,0,1007,1009,
        5,32,0,0,1008,1007,1,0,0,0,1008,1009,1,0,0,0,1009,1010,1,0,0,0,1010,
        1011,5,29,0,0,1011,1013,3,382,191,0,1012,1014,3,120,60,0,1013,1012,
        1,0,0,0,1013,1014,1,0,0,0,1014,1019,1,0,0,0,1015,1017,5,118,0,0,
        1016,1018,3,332,166,0,1017,1016,1,0,0,0,1017,1018,1,0,0,0,1018,1020,
        1,0,0,0,1019,1015,1,0,0,0,1019,1020,1,0,0,0,1020,1022,1,0,0,0,1021,
        1023,3,130,65,0,1022,1021,1,0,0,0,1022,1023,1,0,0,0,1023,1024,1,
        0,0,0,1024,1028,5,125,0,0,1025,1027,3,142,71,0,1026,1025,1,0,0,0,
        1027,1030,1,0,0,0,1028,1026,1,0,0,0,1028,1029,1,0,0,0,1029,1034,
        1,0,0,0,1030,1028,1,0,0,0,1031,1033,3,140,70,0,1032,1031,1,0,0,0,
        1033,1036,1,0,0,0,1034,1032,1,0,0,0,1034,1035,1,0,0,0,1035,1037,
        1,0,0,0,1036,1034,1,0,0,0,1037,1038,5,126,0,0,1038,109,1,0,0,0,1039,
        1042,3,112,56,0,1040,1042,3,114,57,0,1041,1039,1,0,0,0,1041,1040,
        1,0,0,0,1042,111,1,0,0,0,1043,1045,5,13,0,0,1044,1046,3,120,60,0,
        1045,1044,1,0,0,0,1045,1046,1,0,0,0,1046,1047,1,0,0,0,1047,1049,
        3,290,145,0,1048,1050,3,130,65,0,1049,1048,1,0,0,0,1049,1050,1,0,
        0,0,1050,1051,1,0,0,0,1051,1055,5,125,0,0,1052,1054,3,142,71,0,1053,
        1052,1,0,0,0,1054,1057,1,0,0,0,1055,1053,1,0,0,0,1055,1056,1,0,0,
        0,1056,1061,1,0,0,0,1057,1055,1,0,0,0,1058,1060,3,140,70,0,1059,
        1058,1,0,0,0,1060,1063,1,0,0,0,1061,1059,1,0,0,0,1061,1062,1,0,0,
        0,1062,1064,1,0,0,0,1063,1061,1,0,0,0,1064,1065,5,126,0,0,1065,113,
        1,0,0,0,1066,1068,5,32,0,0,1067,1066,1,0,0,0,1067,1068,1,0,0,0,1068,
        1069,1,0,0,0,1069,1071,5,13,0,0,1070,1072,3,120,60,0,1071,1070,1,
        0,0,0,1071,1072,1,0,0,0,1072,1074,1,0,0,0,1073,1075,5,88,0,0,1074,
        1073,1,0,0,0,1074,1075,1,0,0,0,1075,1076,1,0,0,0,1076,1077,3,372,
        186,0,1077,1078,5,11,0,0,1078,1080,3,290,145,0,1079,1081,3,130,65,
        0,1080,1079,1,0,0,0,1080,1081,1,0,0,0,1081,1082,1,0,0,0,1082,1086,
        5,125,0,0,1083,1085,3,142,71,0,1084,1083,1,0,0,0,1085,1088,1,0,0,
        0,1086,1084,1,0,0,0,1086,1087,1,0,0,0,1087,1092,1,0,0,0,1088,1086,
        1,0,0,0,1089,1091,3,140,70,0,1090,1089,1,0,0,0,1091,1094,1,0,0,0,
        1092,1090,1,0,0,0,1092,1093,1,0,0,0,1093,1095,1,0,0,0,1094,1092,
        1,0,0,0,1095,1096,5,126,0,0,1096,115,1,0,0,0,1097,1099,5,32,0,0,
        1098,1097,1,0,0,0,1098,1099,1,0,0,0,1099,1100,1,0,0,0,1100,1102,
        5,8,0,0,1101,1103,3,58,29,0,1102,1101,1,0,0,0,1102,1103,1,0,0,0,
        1103,1104,1,0,0,0,1104,1108,5,125,0,0,1105,1107,3,142,71,0,1106,
        1105,1,0,0,0,1107,1110,1,0,0,0,1108,1106,1,0,0,0,1108,1109,1,0,0,
        0,1109,1114,1,0,0,0,1110,1108,1,0,0,0,1111,1113,3,118,59,0,1112,
        1111,1,0,0,0,1113,1116,1,0,0,0,1114,1112,1,0,0,0,1114,1115,1,0,0,
        0,1115,1117,1,0,0,0,1116,1114,1,0,0,0,1117,1118,5,126,0,0,1118,117,
        1,0,0,0,1119,1121,3,144,72,0,1120,1119,1,0,0,0,1121,1124,1,0,0,0,
        1122,1120,1,0,0,0,1122,1123,1,0,0,0,1123,1133,1,0,0,0,1124,1122,
        1,0,0,0,1125,1134,3,10,5,0,1126,1128,3,380,190,0,1127,1126,1,0,0,
        0,1127,1128,1,0,0,0,1128,1131,1,0,0,0,1129,1132,3,106,53,0,1130,
        1132,3,54,27,0,1131,1129,1,0,0,0,1131,1130,1,0,0,0,1132,1134,1,0,
        0,0,1133,1125,1,0,0,0,1133,1127,1,0,0,0,1134,119,1,0,0,0,1135,1148,
        5,107,0,0,1136,1137,3,122,61,0,1137,1138,5,116,0,0,1138,1140,1,0,
        0,0,1139,1136,1,0,0,0,1140,1143,1,0,0,0,1141,1139,1,0,0,0,1141,1142,
        1,0,0,0,1142,1144,1,0,0,0,1143,1141,1,0,0,0,1144,1146,3,122,61,0,
        1145,1147,5,116,0,0,1146,1145,1,0,0,0,1146,1147,1,0,0,0,1147,1149,
        1,0,0,0,1148,1141,1,0,0,0,1148,1149,1,0,0,0,1149,1150,1,0,0,0,1150,
        1151,5,106,0,0,1151,121,1,0,0,0,1152,1154,3,144,72,0,1153,1152,1,
        0,0,0,1154,1157,1,0,0,0,1155,1153,1,0,0,0,1155,1156,1,0,0,0,1156,
        1161,1,0,0,0,1157,1155,1,0,0,0,1158,1162,3,124,62,0,1159,1162,3,
        126,63,0,1160,1162,3,128,64,0,1161,1158,1,0,0,0,1161,1159,1,0,0,
        0,1161,1160,1,0,0,0,1162,123,1,0,0,0,1163,1165,3,144,72,0,1164,1163,
        1,0,0,0,1164,1165,1,0,0,0,1165,1166,1,0,0,0,1166,1169,5,81,0,0,1167,
        1168,5,118,0,0,1168,1170,3,338,169,0,1169,1167,1,0,0,0,1169,1170,
        1,0,0,0,1170,125,1,0,0,0,1171,1173,3,144,72,0,1172,1171,1,0,0,0,
        1172,1173,1,0,0,0,1173,1174,1,0,0,0,1174,1179,3,382,191,0,1175,1177,
        5,118,0,0,1176,1178,3,332,166,0,1177,1176,1,0,0,0,1177,1178,1,0,
        0,0,1178,1180,1,0,0,0,1179,1175,1,0,0,0,1179,1180,1,0,0,0,1180,1183,
        1,0,0,0,1181,1182,5,103,0,0,1182,1184,3,290,145,0,1183,1181,1,0,
        0,0,1183,1184,1,0,0,0,1184,127,1,0,0,0,1185,1186,5,3,0,0,1186,1187,
        3,382,191,0,1187,1188,5,118,0,0,1188,1189,3,290,145,0,1189,129,1,
        0,0,0,1190,1196,5,34,0,0,1191,1192,3,132,66,0,1192,1193,5,116,0,
        0,1193,1195,1,0,0,0,1194,1191,1,0,0,0,1195,1198,1,0,0,0,1196,1194,
        1,0,0,0,1196,1197,1,0,0,0,1197,1200,1,0,0,0,1198,1196,1,0,0,0,1199,
        1201,3,132,66,0,1200,1199,1,0,0,0,1200,1201,1,0,0,0,1201,131,1,0,
        0,0,1202,1205,3,134,67,0,1203,1205,3,136,68,0,1204,1202,1,0,0,0,
        1204,1203,1,0,0,0,1205,133,1,0,0,0,1206,1207,3,340,170,0,1207,1208,
        5,118,0,0,1208,1209,3,338,169,0,1209,135,1,0,0,0,1210,1212,3,138,
        69,0,1211,1210,1,0,0,0,1211,1212,1,0,0,0,1212,1213,1,0,0,0,1213,
        1214,3,290,145,0,1214,1216,5,118,0,0,1215,1217,3,332,166,0,1216,
        1215,1,0,0,0,1216,1217,1,0,0,0,1217,137,1,0,0,0,1218,1219,5,11,0,
        0,1219,1220,3,120,60,0,1220,139,1,0,0,0,1221,1223,3,144,72,0,1222,
        1221,1,0,0,0,1223,1226,1,0,0,0,1224,1222,1,0,0,0,1224,1225,1,0,0,
        0,1225,1236,1,0,0,0,1226,1224,1,0,0,0,1227,1237,3,10,5,0,1228,1230,
        3,380,190,0,1229,1228,1,0,0,0,1229,1230,1,0,0,0,1230,1234,1,0,0,
        0,1231,1235,3,74,37,0,1232,1235,3,104,52,0,1233,1235,3,54,27,0,1234,
        1231,1,0,0,0,1234,1232,1,0,0,0,1234,1233,1,0,0,0,1235,1237,1,0,0,
        0,1236,1227,1,0,0,0,1236,1229,1,0,0,0,1237,141,1,0,0,0,1238,1239,
        5,122,0,0,1239,1240,5,88,0,0,1240,1241,5,127,0,0,1241,1242,3,146,
        73,0,1242,1243,5,128,0,0,1243,143,1,0,0,0,1244,1245,5,122,0,0,1245,
        1246,5,127,0,0,1246,1247,3,146,73,0,1247,1248,5,128,0,0,1248,145,
        1,0,0,0,1249,1251,3,342,171,0,1250,1252,3,148,74,0,1251,1250,1,0,
        0,0,1251,1252,1,0,0,0,1252,147,1,0,0,0,1253,1257,3,4,2,0,1254,1255,
        5,103,0,0,1255,1257,3,164,82,0,1256,1253,1,0,0,0,1256,1254,1,0,0,
        0,1257,149,1,0,0,0,1258,1264,5,117,0,0,1259,1264,3,34,17,0,1260,
        1264,3,152,76,0,1261,1264,3,154,77,0,1262,1264,3,10,5,0,1263,1258,
        1,0,0,0,1263,1259,1,0,0,0,1263,1260,1,0,0,0,1263,1261,1,0,0,0,1263,
        1262,1,0,0,0,1264,151,1,0,0,0,1265,1267,3,144,72,0,1266,1265,1,0,
        0,0,1267,1270,1,0,0,0,1268,1266,1,0,0,0,1268,1269,1,0,0,0,1269,1271,
        1,0,0,0,1270,1268,1,0,0,0,1271,1272,5,15,0,0,1272,1275,3,246,123,
        0,1273,1274,5,118,0,0,1274,1276,3,290,145,0,1275,1273,1,0,0,0,1275,
        1276,1,0,0,0,1276,1279,1,0,0,0,1277,1278,5,103,0,0,1278,1280,3,156,
        78,0,1279,1277,1,0,0,0,1279,1280,1,0,0,0,1280,1281,1,0,0,0,1281,
        1282,5,117,0,0,1282,153,1,0,0,0,1283,1284,3,156,78,0,1284,1285,5,
        117,0,0,1285,1291,1,0,0,0,1286,1288,3,162,81,0,1287,1289,5,117,0,
        0,1288,1287,1,0,0,0,1288,1289,1,0,0,0,1289,1291,1,0,0,0,1290,1283,
        1,0,0,0,1290,1286,1,0,0,0,1291,155,1,0,0,0,1292,1294,6,78,-1,0,1293,
        1295,3,144,72,0,1294,1293,1,0,0,0,1295,1296,1,0,0,0,1296,1294,1,
        0,0,0,1296,1297,1,0,0,0,1297,1298,1,0,0,0,1298,1299,3,156,78,40,
        1299,1373,1,0,0,0,1300,1373,3,164,82,0,1301,1373,3,166,83,0,1302,
        1304,7,2,0,0,1303,1305,5,20,0,0,1304,1303,1,0,0,0,1304,1305,1,0,
        0,0,1305,1306,1,0,0,0,1306,1373,3,156,78,30,1307,1308,5,84,0,0,1308,
        1373,3,156,78,29,1309,1310,7,3,0,0,1310,1373,3,156,78,28,1311,1313,
        5,113,0,0,1312,1314,3,156,78,0,1313,1312,1,0,0,0,1313,1314,1,0,0,
        0,1314,1373,1,0,0,0,1315,1316,5,115,0,0,1316,1373,3,156,78,15,1317,
        1319,5,4,0,0,1318,1320,5,81,0,0,1319,1318,1,0,0,0,1319,1320,1,0,
        0,0,1320,1322,1,0,0,0,1321,1323,3,156,78,0,1322,1321,1,0,0,0,1322,
        1323,1,0,0,0,1323,1373,1,0,0,0,1324,1326,5,2,0,0,1325,1327,5,81,
        0,0,1326,1325,1,0,0,0,1326,1327,1,0,0,0,1327,1329,1,0,0,0,1328,1330,
        3,156,78,0,1329,1328,1,0,0,0,1329,1330,1,0,0,0,1330,1373,1,0,0,0,
        1331,1333,5,23,0,0,1332,1334,3,156,78,0,1333,1332,1,0,0,0,1333,1334,
        1,0,0,0,1334,1373,1,0,0,0,1335,1339,5,129,0,0,1336,1338,3,142,71,
        0,1337,1336,1,0,0,0,1338,1341,1,0,0,0,1339,1337,1,0,0,0,1339,1340,
        1,0,0,0,1340,1342,1,0,0,0,1341,1339,1,0,0,0,1342,1343,3,156,78,0,
        1343,1344,5,130,0,0,1344,1373,1,0,0,0,1345,1349,5,127,0,0,1346,1348,
        3,142,71,0,1347,1346,1,0,0,0,1348,1351,1,0,0,0,1349,1347,1,0,0,0,
        1349,1350,1,0,0,0,1350,1353,1,0,0,0,1351,1349,1,0,0,0,1352,1354,
        3,176,88,0,1353,1352,1,0,0,0,1353,1354,1,0,0,0,1354,1355,1,0,0,0,
        1355,1373,5,128,0,0,1356,1360,5,129,0,0,1357,1359,3,142,71,0,1358,
        1357,1,0,0,0,1359,1362,1,0,0,0,1360,1358,1,0,0,0,1360,1361,1,0,0,
        0,1361,1364,1,0,0,0,1362,1360,1,0,0,0,1363,1365,3,178,89,0,1364,
        1363,1,0,0,0,1364,1365,1,0,0,0,1365,1366,1,0,0,0,1366,1373,5,130,
        0,0,1367,1373,3,182,91,0,1368,1373,3,196,98,0,1369,1373,3,210,105,
        0,1370,1373,3,162,81,0,1371,1373,3,2,1,0,1372,1292,1,0,0,0,1372,
        1300,1,0,0,0,1372,1301,1,0,0,0,1372,1302,1,0,0,0,1372,1307,1,0,0,
        0,1372,1309,1,0,0,0,1372,1311,1,0,0,0,1372,1315,1,0,0,0,1372,1317,
        1,0,0,0,1372,1324,1,0,0,0,1372,1331,1,0,0,0,1372,1335,1,0,0,0,1372,
        1345,1,0,0,0,1372,1356,1,0,0,0,1372,1367,1,0,0,0,1372,1368,1,0,0,
        0,1372,1369,1,0,0,0,1372,1370,1,0,0,0,1372,1371,1,0,0,0,1373,1457,
        1,0,0,0,1374,1375,10,26,0,0,1375,1376,7,4,0,0,1376,1456,3,156,78,
        27,1377,1378,10,25,0,0,1378,1379,7,5,0,0,1379,1456,3,156,78,26,1380,
        1383,10,24,0,0,1381,1384,3,392,196,0,1382,1384,3,394,197,0,1383,
        1381,1,0,0,0,1383,1382,1,0,0,0,1384,1385,1,0,0,0,1385,1386,3,156,
        78,25,1386,1456,1,0,0,0,1387,1388,10,23,0,0,1388,1389,5,89,0,0,1389,
        1456,3,156,78,24,1390,1391,10,22,0,0,1391,1392,5,87,0,0,1392,1456,
        3,156,78,23,1393,1394,10,21,0,0,1394,1395,5,90,0,0,1395,1456,3,156,
        78,22,1396,1397,10,20,0,0,1397,1398,3,158,79,0,1398,1399,3,156,78,
        21,1399,1456,1,0,0,0,1400,1401,10,19,0,0,1401,1402,5,91,0,0,1402,
        1456,3,156,78,20,1403,1404,10,18,0,0,1404,1405,5,92,0,0,1405,1456,
        3,156,78,19,1406,1407,10,14,0,0,1407,1408,5,115,0,0,1408,1456,3,
        156,78,15,1409,1410,10,13,0,0,1410,1411,5,103,0,0,1411,1456,3,156,
        78,14,1412,1413,10,12,0,0,1413,1414,3,160,80,0,1414,1415,3,156,78,
        13,1415,1456,1,0,0,0,1416,1417,10,37,0,0,1417,1418,5,112,0,0,1418,
        1419,3,348,174,0,1419,1421,5,129,0,0,1420,1422,3,208,104,0,1421,
        1420,1,0,0,0,1421,1422,1,0,0,0,1422,1423,1,0,0,0,1423,1424,5,130,
        0,0,1424,1456,1,0,0,0,1425,1426,10,36,0,0,1426,1427,5,112,0,0,1427,
        1456,3,382,191,0,1428,1429,10,35,0,0,1429,1430,5,112,0,0,1430,1456,
        3,180,90,0,1431,1432,10,34,0,0,1432,1433,5,112,0,0,1433,1456,5,37,
        0,0,1434,1435,10,33,0,0,1435,1437,5,129,0,0,1436,1438,3,208,104,
        0,1437,1436,1,0,0,0,1437,1438,1,0,0,0,1438,1439,1,0,0,0,1439,1456,
        5,130,0,0,1440,1441,10,32,0,0,1441,1442,5,127,0,0,1442,1443,3,156,
        78,0,1443,1444,5,128,0,0,1444,1456,1,0,0,0,1445,1446,10,31,0,0,1446,
        1456,5,124,0,0,1447,1448,10,27,0,0,1448,1449,5,1,0,0,1449,1456,3,
        292,146,0,1450,1451,10,17,0,0,1451,1453,5,113,0,0,1452,1454,3,156,
        78,0,1453,1452,1,0,0,0,1453,1454,1,0,0,0,1454,1456,1,0,0,0,1455,
        1374,1,0,0,0,1455,1377,1,0,0,0,1455,1380,1,0,0,0,1455,1387,1,0,0,
        0,1455,1390,1,0,0,0,1455,1393,1,0,0,0,1455,1396,1,0,0,0,1455,1400,
        1,0,0,0,1455,1403,1,0,0,0,1455,1406,1,0,0,0,1455,1409,1,0,0,0,1455,
        1412,1,0,0,0,1455,1416,1,0,0,0,1455,1425,1,0,0,0,1455,1428,1,0,0,
        0,1455,1431,1,0,0,0,1455,1434,1,0,0,0,1455,1440,1,0,0,0,1455,1445,
        1,0,0,0,1455,1447,1,0,0,0,1455,1450,1,0,0,0,1456,1459,1,0,0,0,1457,
        1455,1,0,0,0,1457,1458,1,0,0,0,1458,157,1,0,0,0,1459,1457,1,0,0,
        0,1460,1461,7,6,0,0,1461,159,1,0,0,0,1462,1463,7,7,0,0,1463,161,
        1,0,0,0,1464,1466,3,144,72,0,1465,1464,1,0,0,0,1466,1467,1,0,0,0,
        1467,1465,1,0,0,0,1467,1468,1,0,0,0,1468,1469,1,0,0,0,1469,1470,
        3,162,81,0,1470,1479,1,0,0,0,1471,1479,3,168,84,0,1472,1479,3,172,
        86,0,1473,1479,3,174,87,0,1474,1479,3,216,108,0,1475,1479,3,230,
        115,0,1476,1479,3,232,116,0,1477,1479,3,234,117,0,1478,1465,1,0,
        0,0,1478,1471,1,0,0,0,1478,1472,1,0,0,0,1478,1473,1,0,0,0,1478,1474,
        1,0,0,0,1478,1475,1,0,0,0,1478,1476,1,0,0,0,1478,1477,1,0,0,0,1479,
        163,1,0,0,0,1480,1481,7,8,0,0,1481,165,1,0,0,0,1482,1485,3,346,173,
        0,1483,1485,3,366,183,0,1484,1482,1,0,0,0,1484,1483,1,0,0,0,1485,
        167,1,0,0,0,1486,1490,5,125,0,0,1487,1489,3,142,71,0,1488,1487,1,
        0,0,0,1489,1492,1,0,0,0,1490,1488,1,0,0,0,1490,1491,1,0,0,0,1491,
        1494,1,0,0,0,1492,1490,1,0,0,0,1493,1495,3,170,85,0,1494,1493,1,
        0,0,0,1494,1495,1,0,0,0,1495,1496,1,0,0,0,1496,1497,5,126,0,0,1497,
        169,1,0,0,0,1498,1500,3,150,75,0,1499,1498,1,0,0,0,1500,1501,1,0,
        0,0,1501,1499,1,0,0,0,1501,1502,1,0,0,0,1502,1504,1,0,0,0,1503,1505,
        3,156,78,0,1504,1503,1,0,0,0,1504,1505,1,0,0,0,1505,1508,1,0,0,0,
        1506,1508,3,156,78,0,1507,1499,1,0,0,0,1507,1506,1,0,0,0,1508,171,
        1,0,0,0,1509,1511,5,36,0,0,1510,1512,5,19,0,0,1511,1510,1,0,0,0,
        1511,1512,1,0,0,0,1512,1513,1,0,0,0,1513,1514,3,168,84,0,1514,173,
        1,0,0,0,1515,1516,5,32,0,0,1516,1517,3,168,84,0,1517,175,1,0,0,0,
        1518,1523,3,156,78,0,1519,1520,5,116,0,0,1520,1522,3,156,78,0,1521,
        1519,1,0,0,0,1522,1525,1,0,0,0,1523,1521,1,0,0,0,1523,1524,1,0,0,
        0,1524,1527,1,0,0,0,1525,1523,1,0,0,0,1526,1528,5,116,0,0,1527,1526,
        1,0,0,0,1527,1528,1,0,0,0,1528,1534,1,0,0,0,1529,1530,3,156,78,0,
        1530,1531,5,117,0,0,1531,1532,3,156,78,0,1532,1534,1,0,0,0,1533,
        1518,1,0,0,0,1533,1529,1,0,0,0,1534,177,1,0,0,0,1535,1536,3,156,
        78,0,1536,1537,5,116,0,0,1537,1539,1,0,0,0,1538,1535,1,0,0,0,1539,
        1540,1,0,0,0,1540,1538,1,0,0,0,1540,1541,1,0,0,0,1541,1543,1,0,0,
        0,1542,1544,3,156,78,0,1543,1542,1,0,0,0,1543,1544,1,0,0,0,1544,
        179,1,0,0,0,1545,1546,5,75,0,0,1546,181,1,0,0,0,1547,1551,3,184,
        92,0,1548,1551,3,192,96,0,1549,1551,3,194,97,0,1550,1547,1,0,0,0,
        1550,1548,1,0,0,0,1550,1549,1,0,0,0,1551,183,1,0,0,0,1552,1553,3,
        346,173,0,1553,1557,5,125,0,0,1554,1556,3,142,71,0,1555,1554,1,0,
        0,0,1556,1559,1,0,0,0,1557,1555,1,0,0,0,1557,1558,1,0,0,0,1558,1562,
        1,0,0,0,1559,1557,1,0,0,0,1560,1563,3,186,93,0,1561,1563,3,190,95,
        0,1562,1560,1,0,0,0,1562,1561,1,0,0,0,1562,1563,1,0,0,0,1563,1564,
        1,0,0,0,1564,1565,5,126,0,0,1565,185,1,0,0,0,1566,1571,3,188,94,
        0,1567,1568,5,116,0,0,1568,1570,3,188,94,0,1569,1567,1,0,0,0,1570,
        1573,1,0,0,0,1571,1569,1,0,0,0,1571,1572,1,0,0,0,1572,1579,1,0,0,
        0,1573,1571,1,0,0,0,1574,1575,5,116,0,0,1575,1580,3,190,95,0,1576,
        1578,5,116,0,0,1577,1576,1,0,0,0,1577,1578,1,0,0,0,1578,1580,1,0,
        0,0,1579,1574,1,0,0,0,1579,1577,1,0,0,0,1580,187,1,0,0,0,1581,1583,
        3,144,72,0,1582,1581,1,0,0,0,1583,1586,1,0,0,0,1584,1582,1,0,0,0,
        1584,1585,1,0,0,0,1585,1595,1,0,0,0,1586,1584,1,0,0,0,1587,1596,
        3,382,191,0,1588,1591,3,382,191,0,1589,1591,3,180,90,0,1590,1588,
        1,0,0,0,1590,1589,1,0,0,0,1591,1592,1,0,0,0,1592,1593,5,118,0,0,
        1593,1594,3,156,78,0,1594,1596,1,0,0,0,1595,1587,1,0,0,0,1595,1590,
        1,0,0,0,1596,189,1,0,0,0,1597,1598,5,113,0,0,1598,1599,3,156,78,
        0,1599,191,1,0,0,0,1600,1601,3,346,173,0,1601,1605,5,129,0,0,1602,
        1604,3,142,71,0,1603,1602,1,0,0,0,1604,1607,1,0,0,0,1605,1603,1,
        0,0,0,1605,1606,1,0,0,0,1606,1619,1,0,0,0,1607,1605,1,0,0,0,1608,
        1613,3,156,78,0,1609,1610,5,116,0,0,1610,1612,3,156,78,0,1611,1609,
        1,0,0,0,1612,1615,1,0,0,0,1613,1611,1,0,0,0,1613,1614,1,0,0,0,1614,
        1617,1,0,0,0,1615,1613,1,0,0,0,1616,1618,5,116,0,0,1617,1616,1,0,
        0,0,1617,1618,1,0,0,0,1618,1620,1,0,0,0,1619,1608,1,0,0,0,1619,1620,
        1,0,0,0,1620,1621,1,0,0,0,1621,1622,5,130,0,0,1622,193,1,0,0,0,1623,
        1624,3,346,173,0,1624,195,1,0,0,0,1625,1629,3,198,99,0,1626,1629,
        3,204,102,0,1627,1629,3,206,103,0,1628,1625,1,0,0,0,1628,1626,1,
        0,0,0,1628,1627,1,0,0,0,1629,197,1,0,0,0,1630,1631,3,346,173,0,1631,
        1633,5,125,0,0,1632,1634,3,200,100,0,1633,1632,1,0,0,0,1633,1634,
        1,0,0,0,1634,1635,1,0,0,0,1635,1636,5,126,0,0,1636,199,1,0,0,0,1637,
        1642,3,202,101,0,1638,1639,5,116,0,0,1639,1641,3,202,101,0,1640,
        1638,1,0,0,0,1641,1644,1,0,0,0,1642,1640,1,0,0,0,1642,1643,1,0,0,
        0,1643,1646,1,0,0,0,1644,1642,1,0,0,0,1645,1647,5,116,0,0,1646,1645,
        1,0,0,0,1646,1647,1,0,0,0,1647,201,1,0,0,0,1648,1657,3,382,191,0,
        1649,1652,3,382,191,0,1650,1652,3,180,90,0,1651,1649,1,0,0,0,1651,
        1650,1,0,0,0,1652,1653,1,0,0,0,1653,1654,5,118,0,0,1654,1655,3,156,
        78,0,1655,1657,1,0,0,0,1656,1648,1,0,0,0,1656,1651,1,0,0,0,1657,
        203,1,0,0,0,1658,1659,3,346,173,0,1659,1671,5,129,0,0,1660,1665,
        3,156,78,0,1661,1662,5,116,0,0,1662,1664,3,156,78,0,1663,1661,1,
        0,0,0,1664,1667,1,0,0,0,1665,1663,1,0,0,0,1665,1666,1,0,0,0,1666,
        1669,1,0,0,0,1667,1665,1,0,0,0,1668,1670,5,116,0,0,1669,1668,1,0,
        0,0,1669,1670,1,0,0,0,1670,1672,1,0,0,0,1671,1660,1,0,0,0,1671,1672,
        1,0,0,0,1672,1673,1,0,0,0,1673,1674,5,130,0,0,1674,205,1,0,0,0,1675,
        1676,3,346,173,0,1676,207,1,0,0,0,1677,1682,3,156,78,0,1678,1679,
        5,116,0,0,1679,1681,3,156,78,0,1680,1678,1,0,0,0,1681,1684,1,0,0,
        0,1682,1680,1,0,0,0,1682,1683,1,0,0,0,1683,1686,1,0,0,0,1684,1682,
        1,0,0,0,1685,1687,5,116,0,0,1686,1685,1,0,0,0,1686,1687,1,0,0,0,
        1687,209,1,0,0,0,1688,1690,5,19,0,0,1689,1688,1,0,0,0,1689,1690,
        1,0,0,0,1690,1697,1,0,0,0,1691,1698,5,92,0,0,1692,1694,5,90,0,0,
        1693,1695,3,212,106,0,1694,1693,1,0,0,0,1694,1695,1,0,0,0,1695,1696,
        1,0,0,0,1696,1698,5,90,0,0,1697,1691,1,0,0,0,1697,1692,1,0,0,0,1698,
        1704,1,0,0,0,1699,1705,3,156,78,0,1700,1701,5,120,0,0,1701,1702,
        3,292,146,0,1702,1703,3,168,84,0,1703,1705,1,0,0,0,1704,1699,1,0,
        0,0,1704,1700,1,0,0,0,1705,211,1,0,0,0,1706,1711,3,214,107,0,1707,
        1708,5,116,0,0,1708,1710,3,214,107,0,1709,1707,1,0,0,0,1710,1713,
        1,0,0,0,1711,1709,1,0,0,0,1711,1712,1,0,0,0,1712,1715,1,0,0,0,1713,
        1711,1,0,0,0,1714,1716,5,116,0,0,1715,1714,1,0,0,0,1715,1716,1,0,
        0,0,1716,213,1,0,0,0,1717,1719,3,144,72,0,1718,1717,1,0,0,0,1719,
        1722,1,0,0,0,1720,1718,1,0,0,0,1720,1721,1,0,0,0,1721,1723,1,0,0,
        0,1722,1720,1,0,0,0,1723,1726,3,244,122,0,1724,1725,5,118,0,0,1725,
        1727,3,290,145,0,1726,1724,1,0,0,0,1726,1727,1,0,0,0,1727,215,1,
        0,0,0,1728,1730,3,228,114,0,1729,1728,1,0,0,0,1729,1730,1,0,0,0,
        1730,1735,1,0,0,0,1731,1736,3,218,109,0,1732,1736,3,222,111,0,1733,
        1736,3,224,112,0,1734,1736,3,226,113,0,1735,1731,1,0,0,0,1735,1732,
        1,0,0,0,1735,1733,1,0,0,0,1735,1734,1,0,0,0,1736,217,1,0,0,0,1737,
        1738,5,16,0,0,1738,1739,3,168,84,0,1739,219,1,0,0,0,1740,1741,3,
        168,84,0,1741,221,1,0,0,0,1742,1743,5,35,0,0,1743,1744,3,156,78,
        0,1744,1745,3,220,110,0,1745,223,1,0,0,0,1746,1747,5,35,0,0,1747,
        1748,5,15,0,0,1748,1749,3,244,122,0,1749,1750,5,103,0,0,1750,1751,
        3,156,78,0,1751,1752,3,168,84,0,1752,225,1,0,0,0,1753,1754,5,11,
        0,0,1754,1755,3,244,122,0,1755,1756,5,14,0,0,1756,1757,3,156,78,
        0,1757,1758,3,168,84,0,1758,227,1,0,0,0,1759,1760,5,81,0,0,1760,
        1761,5,118,0,0,1761,229,1,0,0,0,1762,1763,5,12,0,0,1763,1764,3,156,
        78,0,1764,1771,3,168,84,0,1765,1769,5,6,0,0,1766,1770,3,168,84,0,
        1767,1770,3,230,115,0,1768,1770,3,232,116,0,1769,1766,1,0,0,0,1769,
        1767,1,0,0,0,1769,1768,1,0,0,0,1770,1772,1,0,0,0,1771,1765,1,0,0,
        0,1771,1772,1,0,0,0,1772,231,1,0,0,0,1773,1774,5,12,0,0,1774,1775,
        5,15,0,0,1775,1776,3,244,122,0,1776,1777,5,103,0,0,1777,1778,3,156,
        78,0,1778,1785,3,168,84,0,1779,1783,5,6,0,0,1780,1784,3,168,84,0,
        1781,1784,3,230,115,0,1782,1784,3,232,116,0,1783,1780,1,0,0,0,1783,
        1781,1,0,0,0,1783,1782,1,0,0,0,1784,1786,1,0,0,0,1785,1779,1,0,0,
        0,1785,1786,1,0,0,0,1786,233,1,0,0,0,1787,1788,5,17,0,0,1788,1789,
        3,156,78,0,1789,1793,5,125,0,0,1790,1792,3,142,71,0,1791,1790,1,
        0,0,0,1792,1795,1,0,0,0,1793,1791,1,0,0,0,1793,1794,1,0,0,0,1794,
        1797,1,0,0,0,1795,1793,1,0,0,0,1796,1798,3,236,118,0,1797,1796,1,
        0,0,0,1797,1798,1,0,0,0,1798,1799,1,0,0,0,1799,1800,5,126,0,0,1800,
        235,1,0,0,0,1801,1802,3,240,120,0,1802,1803,5,121,0,0,1803,1804,
        3,238,119,0,1804,1806,1,0,0,0,1805,1801,1,0,0,0,1806,1809,1,0,0,
        0,1807,1805,1,0,0,0,1807,1808,1,0,0,0,1808,1810,1,0,0,0,1809,1807,
        1,0,0,0,1810,1811,3,240,120,0,1811,1812,5,121,0,0,1812,1814,3,156,
        78,0,1813,1815,5,116,0,0,1814,1813,1,0,0,0,1814,1815,1,0,0,0,1815,
        237,1,0,0,0,1816,1817,3,156,78,0,1817,1818,5,116,0,0,1818,1824,1,
        0,0,0,1819,1821,3,162,81,0,1820,1822,5,116,0,0,1821,1820,1,0,0,0,
        1821,1822,1,0,0,0,1822,1824,1,0,0,0,1823,1816,1,0,0,0,1823,1819,
        1,0,0,0,1824,239,1,0,0,0,1825,1827,3,144,72,0,1826,1825,1,0,0,0,
        1827,1830,1,0,0,0,1828,1826,1,0,0,0,1828,1829,1,0,0,0,1829,1831,
        1,0,0,0,1830,1828,1,0,0,0,1831,1833,3,244,122,0,1832,1834,3,242,
        121,0,1833,1832,1,0,0,0,1833,1834,1,0,0,0,1834,241,1,0,0,0,1835,
        1836,5,12,0,0,1836,1837,3,156,78,0,1837,243,1,0,0,0,1838,1840,5,
        90,0,0,1839,1838,1,0,0,0,1839,1840,1,0,0,0,1840,1841,1,0,0,0,1841,
        1846,3,246,123,0,1842,1843,5,90,0,0,1843,1845,3,246,123,0,1844,1842,
        1,0,0,0,1845,1848,1,0,0,0,1846,1844,1,0,0,0,1846,1847,1,0,0,0,1847,
        245,1,0,0,0,1848,1846,1,0,0,0,1849,1852,3,248,124,0,1850,1852,3,
        258,129,0,1851,1849,1,0,0,0,1851,1850,1,0,0,0,1852,247,1,0,0,0,1853,
        1866,3,250,125,0,1854,1866,3,252,126,0,1855,1866,3,254,127,0,1856,
        1866,3,256,128,0,1857,1866,3,262,131,0,1858,1866,3,264,132,0,1859,
        1866,3,274,137,0,1860,1866,3,278,139,0,1861,1866,3,282,141,0,1862,
        1866,3,284,142,0,1863,1866,3,288,144,0,1864,1866,3,2,1,0,1865,1853,
        1,0,0,0,1865,1854,1,0,0,0,1865,1855,1,0,0,0,1865,1856,1,0,0,0,1865,
        1857,1,0,0,0,1865,1858,1,0,0,0,1865,1859,1,0,0,0,1865,1860,1,0,0,
        0,1865,1861,1,0,0,0,1865,1862,1,0,0,0,1865,1863,1,0,0,0,1865,1864,
        1,0,0,0,1866,249,1,0,0,0,1867,1884,5,30,0,0,1868,1884,5,9,0,0,1869,
        1884,5,69,0,0,1870,1884,5,72,0,0,1871,1884,5,70,0,0,1872,1884,5,
        71,0,0,1873,1884,5,73,0,0,1874,1884,5,74,0,0,1875,1877,5,83,0,0,
        1876,1875,1,0,0,0,1876,1877,1,0,0,0,1877,1878,1,0,0,0,1878,1884,
        5,75,0,0,1879,1881,5,83,0,0,1880,1879,1,0,0,0,1880,1881,1,0,0,0,
        1881,1882,1,0,0,0,1882,1884,5,80,0,0,1883,1867,1,0,0,0,1883,1868,
        1,0,0,0,1883,1869,1,0,0,0,1883,1870,1,0,0,0,1883,1871,1,0,0,0,1883,
        1872,1,0,0,0,1883,1873,1,0,0,0,1883,1874,1,0,0,0,1883,1876,1,0,0,
        0,1883,1880,1,0,0,0,1884,251,1,0,0,0,1885,1887,5,22,0,0,1886,1885,
        1,0,0,0,1886,1887,1,0,0,0,1887,1889,1,0,0,0,1888,1890,5,20,0,0,1889,
        1888,1,0,0,0,1889,1890,1,0,0,0,1890,1891,1,0,0,0,1891,1894,3,382,
        191,0,1892,1893,5,110,0,0,1893,1895,3,244,122,0,1894,1892,1,0,0,
        0,1894,1895,1,0,0,0,1895,253,1,0,0,0,1896,1897,5,111,0,0,1897,255,
        1,0,0,0,1898,1899,5,113,0,0,1899,257,1,0,0,0,1900,1901,3,260,130,
        0,1901,1902,5,115,0,0,1902,1903,3,260,130,0,1903,1912,1,0,0,0,1904,
        1905,3,260,130,0,1905,1906,5,113,0,0,1906,1912,1,0,0,0,1907,1908,
        3,260,130,0,1908,1909,5,114,0,0,1909,1910,3,260,130,0,1910,1912,
        1,0,0,0,1911,1900,1,0,0,0,1911,1904,1,0,0,0,1911,1907,1,0,0,0,1912,
        259,1,0,0,0,1913,1925,5,69,0,0,1914,1925,5,72,0,0,1915,1917,5,83,
        0,0,1916,1915,1,0,0,0,1916,1917,1,0,0,0,1917,1918,1,0,0,0,1918,1925,
        5,75,0,0,1919,1921,5,83,0,0,1920,1919,1,0,0,0,1920,1921,1,0,0,0,
        1921,1922,1,0,0,0,1922,1925,5,80,0,0,1923,1925,3,288,144,0,1924,
        1913,1,0,0,0,1924,1914,1,0,0,0,1924,1916,1,0,0,0,1924,1920,1,0,0,
        0,1924,1923,1,0,0,0,1925,261,1,0,0,0,1926,1928,7,2,0,0,1927,1929,
        5,20,0,0,1928,1927,1,0,0,0,1928,1929,1,0,0,0,1929,1930,1,0,0,0,1930,
        1931,3,248,124,0,1931,263,1,0,0,0,1932,1933,3,346,173,0,1933,1935,
        5,125,0,0,1934,1936,3,266,133,0,1935,1934,1,0,0,0,1935,1936,1,0,
        0,0,1936,1937,1,0,0,0,1937,1938,5,126,0,0,1938,265,1,0,0,0,1939,
        1944,3,268,134,0,1940,1942,5,116,0,0,1941,1943,3,272,136,0,1942,
        1941,1,0,0,0,1942,1943,1,0,0,0,1943,1945,1,0,0,0,1944,1940,1,0,0,
        0,1944,1945,1,0,0,0,1945,1948,1,0,0,0,1946,1948,3,272,136,0,1947,
        1939,1,0,0,0,1947,1946,1,0,0,0,1948,267,1,0,0,0,1949,1954,3,270,
        135,0,1950,1951,5,116,0,0,1951,1953,3,270,135,0,1952,1950,1,0,0,
        0,1953,1956,1,0,0,0,1954,1952,1,0,0,0,1954,1955,1,0,0,0,1955,269,
        1,0,0,0,1956,1954,1,0,0,0,1957,1959,3,144,72,0,1958,1957,1,0,0,0,
        1959,1962,1,0,0,0,1960,1958,1,0,0,0,1960,1961,1,0,0,0,1961,1978,
        1,0,0,0,1962,1960,1,0,0,0,1963,1964,3,180,90,0,1964,1965,5,118,0,
        0,1965,1966,3,244,122,0,1966,1979,1,0,0,0,1967,1968,3,382,191,0,
        1968,1969,5,118,0,0,1969,1970,3,244,122,0,1970,1979,1,0,0,0,1971,
        1973,5,22,0,0,1972,1971,1,0,0,0,1972,1973,1,0,0,0,1973,1975,1,0,
        0,0,1974,1976,5,20,0,0,1975,1974,1,0,0,0,1975,1976,1,0,0,0,1976,
        1977,1,0,0,0,1977,1979,3,382,191,0,1978,1963,1,0,0,0,1978,1967,1,
        0,0,0,1978,1972,1,0,0,0,1979,271,1,0,0,0,1980,1982,3,144,72,0,1981,
        1980,1,0,0,0,1982,1985,1,0,0,0,1983,1981,1,0,0,0,1983,1984,1,0,0,
        0,1984,1986,1,0,0,0,1985,1983,1,0,0,0,1986,1987,5,113,0,0,1987,273,
        1,0,0,0,1988,1989,3,346,173,0,1989,1991,5,129,0,0,1990,1992,3,276,
        138,0,1991,1990,1,0,0,0,1991,1992,1,0,0,0,1992,1993,1,0,0,0,1993,
        1994,5,130,0,0,1994,275,1,0,0,0,1995,2000,3,244,122,0,1996,1997,
        5,116,0,0,1997,1999,3,244,122,0,1998,1996,1,0,0,0,1999,2002,1,0,
        0,0,2000,1998,1,0,0,0,2000,2001,1,0,0,0,2001,2004,1,0,0,0,2002,2000,
        1,0,0,0,2003,2005,5,116,0,0,2004,2003,1,0,0,0,2004,2005,1,0,0,0,
        2005,277,1,0,0,0,2006,2008,5,129,0,0,2007,2009,3,280,140,0,2008,
        2007,1,0,0,0,2008,2009,1,0,0,0,2009,2010,1,0,0,0,2010,2011,5,130,
        0,0,2011,279,1,0,0,0,2012,2013,3,244,122,0,2013,2014,5,116,0,0,2014,
        2027,1,0,0,0,2015,2027,3,256,128,0,2016,2019,3,244,122,0,2017,2018,
        5,116,0,0,2018,2020,3,244,122,0,2019,2017,1,0,0,0,2020,2021,1,0,
        0,0,2021,2019,1,0,0,0,2021,2022,1,0,0,0,2022,2024,1,0,0,0,2023,2025,
        5,116,0,0,2024,2023,1,0,0,0,2024,2025,1,0,0,0,2025,2027,1,0,0,0,
        2026,2012,1,0,0,0,2026,2015,1,0,0,0,2026,2016,1,0,0,0,2027,281,1,
        0,0,0,2028,2029,5,129,0,0,2029,2030,3,244,122,0,2030,2031,5,130,
        0,0,2031,283,1,0,0,0,2032,2034,5,127,0,0,2033,2035,3,286,143,0,2034,
        2033,1,0,0,0,2034,2035,1,0,0,0,2035,2036,1,0,0,0,2036,2037,5,128,
        0,0,2037,285,1,0,0,0,2038,2043,3,244,122,0,2039,2040,5,116,0,0,2040,
        2042,3,244,122,0,2041,2039,1,0,0,0,2042,2045,1,0,0,0,2043,2041,1,
        0,0,0,2043,2044,1,0,0,0,2044,2047,1,0,0,0,2045,2043,1,0,0,0,2046,
        2048,5,116,0,0,2047,2046,1,0,0,0,2047,2048,1,0,0,0,2048,287,1,0,
        0,0,2049,2052,3,346,173,0,2050,2052,3,366,183,0,2051,2049,1,0,0,
        0,2051,2050,1,0,0,0,2052,289,1,0,0,0,2053,2057,3,292,146,0,2054,
        2057,3,326,163,0,2055,2057,3,322,161,0,2056,2053,1,0,0,0,2056,2054,
        1,0,0,0,2056,2055,1,0,0,0,2057,291,1,0,0,0,2058,2073,3,294,147,0,
        2059,2073,3,328,164,0,2060,2073,3,324,162,0,2061,2073,3,372,186,
        0,2062,2073,3,298,149,0,2063,2073,3,296,148,0,2064,2073,3,306,153,
        0,2065,2073,3,304,152,0,2066,2073,3,300,150,0,2067,2073,3,302,151,
        0,2068,2073,3,330,165,0,2069,2073,3,370,185,0,2070,2073,3,308,154,
        0,2071,2073,3,2,1,0,2072,2058,1,0,0,0,2072,2059,1,0,0,0,2072,2060,
        1,0,0,0,2072,2061,1,0,0,0,2072,2062,1,0,0,0,2072,2063,1,0,0,0,2072,
        2064,1,0,0,0,2072,2065,1,0,0,0,2072,2066,1,0,0,0,2072,2067,1,0,0,
        0,2072,2068,1,0,0,0,2072,2069,1,0,0,0,2072,2070,1,0,0,0,2072,2071,
        1,0,0,0,2073,293,1,0,0,0,2074,2075,5,129,0,0,2075,2076,3,290,145,
        0,2076,2077,5,130,0,0,2077,295,1,0,0,0,2078,2079,5,88,0,0,2079,297,
        1,0,0,0,2080,2091,5,129,0,0,2081,2082,3,290,145,0,2082,2083,5,116,
        0,0,2083,2085,1,0,0,0,2084,2081,1,0,0,0,2085,2086,1,0,0,0,2086,2084,
        1,0,0,0,2086,2087,1,0,0,0,2087,2089,1,0,0,0,2088,2090,3,290,145,
        0,2089,2088,1,0,0,0,2089,2090,1,0,0,0,2090,2092,1,0,0,0,2091,2084,
        1,0,0,0,2091,2092,1,0,0,0,2092,2093,1,0,0,0,2093,2094,5,130,0,0,
        2094,299,1,0,0,0,2095,2096,5,127,0,0,2096,2097,3,290,145,0,2097,
        2098,5,117,0,0,2098,2099,3,156,78,0,2099,2100,5,128,0,0,2100,301,
        1,0,0,0,2101,2102,5,127,0,0,2102,2103,3,290,145,0,2103,2104,5,128,
        0,0,2104,303,1,0,0,0,2105,2107,5,89,0,0,2106,2108,3,340,170,0,2107,
        2106,1,0,0,0,2107,2108,1,0,0,0,2108,2110,1,0,0,0,2109,2111,5,20,
        0,0,2110,2109,1,0,0,0,2110,2111,1,0,0,0,2111,2112,1,0,0,0,2112,2113,
        3,292,146,0,2113,305,1,0,0,0,2114,2115,5,84,0,0,2115,2116,7,9,0,
        0,2116,2117,3,292,146,0,2117,307,1,0,0,0,2118,2120,3,138,69,0,2119,
        2118,1,0,0,0,2119,2120,1,0,0,0,2120,2121,1,0,0,0,2121,2122,3,310,
        155,0,2122,2123,5,10,0,0,2123,2125,5,129,0,0,2124,2126,3,314,157,
        0,2125,2124,1,0,0,0,2125,2126,1,0,0,0,2126,2127,1,0,0,0,2127,2129,
        5,130,0,0,2128,2130,3,312,156,0,2129,2128,1,0,0,0,2129,2130,1,0,
        0,0,2130,309,1,0,0,0,2131,2133,5,32,0,0,2132,2131,1,0,0,0,2132,2133,
        1,0,0,0,2133,2138,1,0,0,0,2134,2136,5,8,0,0,2135,2137,3,58,29,0,
        2136,2135,1,0,0,0,2136,2137,1,0,0,0,2137,2139,1,0,0,0,2138,2134,
        1,0,0,0,2138,2139,1,0,0,0,2139,311,1,0,0,0,2140,2141,5,120,0,0,2141,
        2142,3,292,146,0,2142,313,1,0,0,0,2143,2146,3,316,158,0,2144,2146,
        3,320,160,0,2145,2143,1,0,0,0,2145,2144,1,0,0,0,2146,315,1,0,0,0,
        2147,2152,3,318,159,0,2148,2149,5,116,0,0,2149,2151,3,318,159,0,
        2150,2148,1,0,0,0,2151,2154,1,0,0,0,2152,2150,1,0,0,0,2152,2153,
        1,0,0,0,2153,2156,1,0,0,0,2154,2152,1,0,0,0,2155,2157,5,116,0,0,
        2156,2155,1,0,0,0,2156,2157,1,0,0,0,2157,317,1,0,0,0,2158,2160,3,
        144,72,0,2159,2158,1,0,0,0,2160,2163,1,0,0,0,2161,2159,1,0,0,0,2161,
        2162,1,0,0,0,2162,2169,1,0,0,0,2163,2161,1,0,0,0,2164,2167,3,382,
        191,0,2165,2167,5,111,0,0,2166,2164,1,0,0,0,2166,2165,1,0,0,0,2167,
        2168,1,0,0,0,2168,2170,5,118,0,0,2169,2166,1,0,0,0,2169,2170,1,0,
        0,0,2170,2171,1,0,0,0,2171,2172,3,290,145,0,2172,319,1,0,0,0,2173,
        2174,3,318,159,0,2174,2175,5,116,0,0,2175,2177,1,0,0,0,2176,2173,
        1,0,0,0,2177,2180,1,0,0,0,2178,2176,1,0,0,0,2178,2179,1,0,0,0,2179,
        2181,1,0,0,0,2180,2178,1,0,0,0,2181,2182,3,318,159,0,2182,2186,5,
        116,0,0,2183,2185,3,144,72,0,2184,2183,1,0,0,0,2185,2188,1,0,0,0,
        2186,2184,1,0,0,0,2186,2187,1,0,0,0,2187,2189,1,0,0,0,2188,2186,
        1,0,0,0,2189,2190,5,114,0,0,2190,321,1,0,0,0,2191,2193,5,38,0,0,
        2192,2191,1,0,0,0,2192,2193,1,0,0,0,2193,2194,1,0,0,0,2194,2195,
        3,332,166,0,2195,323,1,0,0,0,2196,2198,5,38,0,0,2197,2196,1,0,0,
        0,2197,2198,1,0,0,0,2198,2199,1,0,0,0,2199,2200,3,336,168,0,2200,
        325,1,0,0,0,2201,2202,5,13,0,0,2202,2203,3,332,166,0,2203,327,1,
        0,0,0,2204,2205,5,13,0,0,2205,2206,3,336,168,0,2206,329,1,0,0,0,
        2207,2208,5,111,0,0,2208,331,1,0,0,0,2209,2214,3,334,167,0,2210,
        2211,5,82,0,0,2211,2213,3,334,167,0,2212,2210,1,0,0,0,2213,2216,
        1,0,0,0,2214,2212,1,0,0,0,2214,2215,1,0,0,0,2215,2218,1,0,0,0,2216,
        2214,1,0,0,0,2217,2219,5,82,0,0,2218,2217,1,0,0,0,2218,2219,1,0,
        0,0,2219,333,1,0,0,0,2220,2223,3,340,170,0,2221,2223,3,336,168,0,
        2222,2220,1,0,0,0,2222,2221,1,0,0,0,2223,335,1,0,0,0,2224,2226,5,
        124,0,0,2225,2224,1,0,0,0,2225,2226,1,0,0,0,2226,2228,1,0,0,0,2227,
        2229,3,138,69,0,2228,2227,1,0,0,0,2228,2229,1,0,0,0,2229,2230,1,
        0,0,0,2230,2242,3,372,186,0,2231,2233,5,129,0,0,2232,2234,5,124,
        0,0,2233,2232,1,0,0,0,2233,2234,1,0,0,0,2234,2236,1,0,0,0,2235,2237,
        3,138,69,0,2236,2235,1,0,0,0,2236,2237,1,0,0,0,2237,2238,1,0,0,0,
        2238,2239,3,372,186,0,2239,2240,5,130,0,0,2240,2242,1,0,0,0,2241,
        2225,1,0,0,0,2241,2231,1,0,0,0,2242,337,1,0,0,0,2243,2244,3,340,
        170,0,2244,2245,5,82,0,0,2245,2247,1,0,0,0,2246,2243,1,0,0,0,2247,
        2250,1,0,0,0,2248,2246,1,0,0,0,2248,2249,1,0,0,0,2249,2252,1,0,0,
        0,2250,2248,1,0,0,0,2251,2253,3,340,170,0,2252,2251,1,0,0,0,2252,
        2253,1,0,0,0,2253,339,1,0,0,0,2254,2255,7,10,0,0,2255,341,1,0,0,
        0,2256,2258,5,119,0,0,2257,2256,1,0,0,0,2257,2258,1,0,0,0,2258,2259,
        1,0,0,0,2259,2264,3,344,172,0,2260,2261,5,119,0,0,2261,2263,3,344,
        172,0,2262,2260,1,0,0,0,2263,2266,1,0,0,0,2264,2262,1,0,0,0,2264,
        2265,1,0,0,0,2265,343,1,0,0,0,2266,2264,1,0,0,0,2267,2273,3,382,
        191,0,2268,2273,5,28,0,0,2269,2273,5,24,0,0,2270,2273,5,5,0,0,2271,
        2273,5,56,0,0,2272,2267,1,0,0,0,2272,2268,1,0,0,0,2272,2269,1,0,
        0,0,2272,2270,1,0,0,0,2272,2271,1,0,0,0,2273,345,1,0,0,0,2274,2276,
        5,119,0,0,2275,2274,1,0,0,0,2275,2276,1,0,0,0,2276,2277,1,0,0,0,
        2277,2282,3,348,174,0,2278,2279,5,119,0,0,2279,2281,3,348,174,0,
        2280,2278,1,0,0,0,2281,2284,1,0,0,0,2282,2280,1,0,0,0,2282,2283,
        1,0,0,0,2283,347,1,0,0,0,2284,2282,1,0,0,0,2285,2288,3,350,175,0,
        2286,2287,5,119,0,0,2287,2289,3,352,176,0,2288,2286,1,0,0,0,2288,
        2289,1,0,0,0,2289,349,1,0,0,0,2290,2297,3,382,191,0,2291,2297,5,
        28,0,0,2292,2297,5,24,0,0,2293,2297,5,25,0,0,2294,2297,5,5,0,0,2295,
        2297,5,56,0,0,2296,2290,1,0,0,0,2296,2291,1,0,0,0,2296,2292,1,0,
        0,0,2296,2293,1,0,0,0,2296,2294,1,0,0,0,2296,2295,1,0,0,0,2297,351,
        1,0,0,0,2298,2299,5,107,0,0,2299,2342,5,106,0,0,2300,2301,5,107,
        0,0,2301,2304,3,358,179,0,2302,2303,5,116,0,0,2303,2305,3,360,180,
        0,2304,2302,1,0,0,0,2304,2305,1,0,0,0,2305,2308,1,0,0,0,2306,2307,
        5,116,0,0,2307,2309,3,362,181,0,2308,2306,1,0,0,0,2308,2309,1,0,
        0,0,2309,2311,1,0,0,0,2310,2312,5,116,0,0,2311,2310,1,0,0,0,2311,
        2312,1,0,0,0,2312,2313,1,0,0,0,2313,2314,5,106,0,0,2314,2342,1,0,
        0,0,2315,2316,5,107,0,0,2316,2319,3,360,180,0,2317,2318,5,116,0,
        0,2318,2320,3,362,181,0,2319,2317,1,0,0,0,2319,2320,1,0,0,0,2320,
        2322,1,0,0,0,2321,2323,5,116,0,0,2322,2321,1,0,0,0,2322,2323,1,0,
        0,0,2323,2324,1,0,0,0,2324,2325,5,106,0,0,2325,2342,1,0,0,0,2326,
        2332,5,107,0,0,2327,2328,3,354,177,0,2328,2329,5,116,0,0,2329,2331,
        1,0,0,0,2330,2327,1,0,0,0,2331,2334,1,0,0,0,2332,2330,1,0,0,0,2332,
        2333,1,0,0,0,2333,2335,1,0,0,0,2334,2332,1,0,0,0,2335,2337,3,354,
        177,0,2336,2338,5,116,0,0,2337,2336,1,0,0,0,2337,2338,1,0,0,0,2338,
        2339,1,0,0,0,2339,2340,5,106,0,0,2340,2342,1,0,0,0,2341,2298,1,0,
        0,0,2341,2300,1,0,0,0,2341,2315,1,0,0,0,2341,2326,1,0,0,0,2342,353,
        1,0,0,0,2343,2348,3,340,170,0,2344,2348,3,290,145,0,2345,2348,3,
        356,178,0,2346,2348,3,364,182,0,2347,2343,1,0,0,0,2347,2344,1,0,
        0,0,2347,2345,1,0,0,0,2347,2346,1,0,0,0,2348,355,1,0,0,0,2349,2356,
        3,168,84,0,2350,2352,5,83,0,0,2351,2350,1,0,0,0,2351,2352,1,0,0,
        0,2352,2353,1,0,0,0,2353,2356,3,164,82,0,2354,2356,3,344,172,0,2355,
        2349,1,0,0,0,2355,2351,1,0,0,0,2355,2354,1,0,0,0,2356,357,1,0,0,
        0,2357,2362,3,340,170,0,2358,2359,5,116,0,0,2359,2361,3,340,170,
        0,2360,2358,1,0,0,0,2361,2364,1,0,0,0,2362,2360,1,0,0,0,2362,2363,
        1,0,0,0,2363,359,1,0,0,0,2364,2362,1,0,0,0,2365,2370,3,290,145,0,
        2366,2367,5,116,0,0,2367,2369,3,290,145,0,2368,2366,1,0,0,0,2369,
        2372,1,0,0,0,2370,2368,1,0,0,0,2370,2371,1,0,0,0,2371,361,1,0,0,
        0,2372,2370,1,0,0,0,2373,2378,3,364,182,0,2374,2375,5,116,0,0,2375,
        2377,3,364,182,0,2376,2374,1,0,0,0,2377,2380,1,0,0,0,2378,2376,1,
        0,0,0,2378,2379,1,0,0,0,2379,363,1,0,0,0,2380,2378,1,0,0,0,2381,
        2382,3,382,191,0,2382,2383,5,103,0,0,2383,2384,3,290,145,0,2384,
        365,1,0,0,0,2385,2388,3,368,184,0,2386,2387,5,119,0,0,2387,2389,
        3,348,174,0,2388,2386,1,0,0,0,2389,2390,1,0,0,0,2390,2388,1,0,0,
        0,2390,2391,1,0,0,0,2391,367,1,0,0,0,2392,2393,5,107,0,0,2393,2396,
        3,290,145,0,2394,2395,5,1,0,0,2395,2397,3,372,186,0,2396,2394,1,
        0,0,0,2396,2397,1,0,0,0,2397,2398,1,0,0,0,2398,2399,5,106,0,0,2399,
        369,1,0,0,0,2400,2403,3,368,184,0,2401,2402,5,119,0,0,2402,2404,
        3,374,187,0,2403,2401,1,0,0,0,2404,2405,1,0,0,0,2405,2403,1,0,0,
        0,2405,2406,1,0,0,0,2406,371,1,0,0,0,2407,2409,5,119,0,0,2408,2407,
        1,0,0,0,2408,2409,1,0,0,0,2409,2410,1,0,0,0,2410,2415,3,374,187,
        0,2411,2412,5,119,0,0,2412,2414,3,374,187,0,2413,2411,1,0,0,0,2414,
        2417,1,0,0,0,2415,2413,1,0,0,0,2415,2416,1,0,0,0,2416,373,1,0,0,
        0,2417,2415,1,0,0,0,2418,2420,3,350,175,0,2419,2421,5,119,0,0,2420,
        2419,1,0,0,0,2420,2421,1,0,0,0,2421,2424,1,0,0,0,2422,2425,3,352,
        176,0,2423,2425,3,376,188,0,2424,2422,1,0,0,0,2424,2423,1,0,0,0,
        2424,2425,1,0,0,0,2425,375,1,0,0,0,2426,2428,5,129,0,0,2427,2429,
        3,378,189,0,2428,2427,1,0,0,0,2428,2429,1,0,0,0,2429,2430,1,0,0,
        0,2430,2433,5,130,0,0,2431,2432,5,120,0,0,2432,2434,3,290,145,0,
        2433,2431,1,0,0,0,2433,2434,1,0,0,0,2434,377,1,0,0,0,2435,2440,3,
        290,145,0,2436,2437,5,116,0,0,2437,2439,3,290,145,0,2438,2436,1,
        0,0,0,2439,2442,1,0,0,0,2440,2438,1,0,0,0,2440,2441,1,0,0,0,2441,
        2444,1,0,0,0,2442,2440,1,0,0,0,2443,2445,5,116,0,0,2444,2443,1,0,
        0,0,2444,2445,1,0,0,0,2445,379,1,0,0,0,2446,2456,5,21,0,0,2447,2453,
        5,129,0,0,2448,2454,5,5,0,0,2449,2454,5,24,0,0,2450,2454,5,28,0,
        0,2451,2452,5,14,0,0,2452,2454,3,342,171,0,2453,2448,1,0,0,0,2453,
        2449,1,0,0,0,2453,2450,1,0,0,0,2453,2451,1,0,0,0,2454,2455,1,0,0,
        0,2455,2457,5,130,0,0,2456,2447,1,0,0,0,2456,2457,1,0,0,0,2457,381,
        1,0,0,0,2458,2459,7,11,0,0,2459,383,1,0,0,0,2460,2461,7,12,0,0,2461,
        385,1,0,0,0,2462,2469,3,384,192,0,2463,2469,3,382,191,0,2464,2469,
        5,54,0,0,2465,2469,5,55,0,0,2466,2469,5,56,0,0,2467,2469,5,81,0,
        0,2468,2462,1,0,0,0,2468,2463,1,0,0,0,2468,2464,1,0,0,0,2468,2465,
        1,0,0,0,2468,2466,1,0,0,0,2468,2467,1,0,0,0,2469,387,1,0,0,0,2470,
        2471,3,164,82,0,2471,389,1,0,0,0,2472,2473,7,13,0,0,2473,391,1,0,
        0,0,2474,2475,5,107,0,0,2475,2476,4,196,21,0,2476,2477,5,107,0,0,
        2477,393,1,0,0,0,2478,2479,5,106,0,0,2479,2480,4,197,22,0,2480,2481,
        5,106,0,0,2481,395,1,0,0,0,345,399,405,418,426,434,438,443,446,453,
        461,473,485,490,511,518,522,532,540,548,552,557,563,572,576,580,
        586,594,603,608,611,626,630,633,642,648,652,658,664,669,676,679,
        688,692,694,697,703,705,707,715,719,723,726,730,733,736,739,743,
        745,751,756,763,767,769,774,779,783,785,788,793,802,808,814,822,
        825,829,835,840,843,847,851,856,860,864,873,877,882,886,897,901,
        906,910,917,920,924,933,937,942,946,952,956,962,972,975,984,990,
        996,1003,1008,1013,1017,1019,1022,1028,1034,1041,1045,1049,1055,
        1061,1067,1071,1074,1080,1086,1092,1098,1102,1108,1114,1122,1127,
        1131,1133,1141,1146,1148,1155,1161,1164,1169,1172,1177,1179,1183,
        1196,1200,1204,1211,1216,1224,1229,1234,1236,1251,1256,1263,1268,
        1275,1279,1288,1290,1296,1304,1313,1319,1322,1326,1329,1333,1339,
        1349,1353,1360,1364,1372,1383,1421,1437,1453,1455,1457,1467,1478,
        1484,1490,1494,1501,1504,1507,1511,1523,1527,1533,1540,1543,1550,
        1557,1562,1571,1577,1579,1584,1590,1595,1605,1613,1617,1619,1628,
        1633,1642,1646,1651,1656,1665,1669,1671,1682,1686,1689,1694,1697,
        1704,1711,1715,1720,1726,1729,1735,1769,1771,1783,1785,1793,1797,
        1807,1814,1821,1823,1828,1833,1839,1846,1851,1865,1876,1880,1883,
        1886,1889,1894,1911,1916,1920,1924,1928,1935,1942,1944,1947,1954,
        1960,1972,1975,1978,1983,1991,2000,2004,2008,2021,2024,2026,2034,
        2043,2047,2051,2056,2072,2086,2089,2091,2107,2110,2119,2125,2129,
        2132,2136,2138,2145,2152,2156,2161,2166,2169,2178,2186,2192,2197,
        2214,2218,2222,2225,2228,2233,2236,2241,2248,2252,2257,2264,2272,
        2275,2282,2288,2296,2304,2308,2311,2319,2322,2332,2337,2341,2347,
        2351,2355,2362,2370,2378,2390,2396,2405,2408,2415,2420,2424,2428,
        2433,2440,2444,2453,2456,2468
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RustParser.__ATN) {
            RustParser.__ATN = new antlr.ATNDeserializer().deserialize(RustParser._serializedATN);
        }

        return RustParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RustParser.literalNames, RustParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RustParser.vocabulary;
    }

    private static readonly decisionsToDFA = RustParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class CrateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(RustParser.EOF, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public item(): ItemContext[];
    public item(i: number): ItemContext | null;
    public item(i?: number): ItemContext[] | ItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }

        return this.getRuleContext(i, ItemContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_crate;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCrate) {
             listener.enterCrate(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCrate) {
             listener.exitCrate(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCrate) {
            return visitor.visitCrate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroInvocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simplePath(): SimplePathContext {
        return this.getRuleContext(0, SimplePathContext)!;
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(RustParser.NOT, 0)!;
    }
    public delimTokenTree(): DelimTokenTreeContext {
        return this.getRuleContext(0, DelimTokenTreeContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroInvocation;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroInvocation) {
             listener.enterMacroInvocation(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroInvocation) {
             listener.exitMacroInvocation(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroInvocation) {
            return visitor.visitMacroInvocation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DelimTokenTreeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public tokenTree(): TokenTreeContext[];
    public tokenTree(i: number): TokenTreeContext | null;
    public tokenTree(i?: number): TokenTreeContext[] | TokenTreeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TokenTreeContext);
        }

        return this.getRuleContext(i, TokenTreeContext);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LSQUAREBRACKET, 0);
    }
    public RSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RSQUAREBRACKET, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_delimTokenTree;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterDelimTokenTree) {
             listener.enterDelimTokenTree(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitDelimTokenTree) {
             listener.exitDelimTokenTree(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitDelimTokenTree) {
            return visitor.visitDelimTokenTree(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TokenTreeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tokenTreeToken(): TokenTreeTokenContext[];
    public tokenTreeToken(i: number): TokenTreeTokenContext | null;
    public tokenTreeToken(i?: number): TokenTreeTokenContext[] | TokenTreeTokenContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TokenTreeTokenContext);
        }

        return this.getRuleContext(i, TokenTreeTokenContext);
    }
    public delimTokenTree(): DelimTokenTreeContext | null {
        return this.getRuleContext(0, DelimTokenTreeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tokenTree;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTokenTree) {
             listener.enterTokenTree(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTokenTree) {
             listener.exitTokenTree(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTokenTree) {
            return visitor.visitTokenTree(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TokenTreeTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext | null {
        return this.getRuleContext(0, MacroIdentifierLikeTokenContext);
    }
    public macroLiteralToken(): MacroLiteralTokenContext | null {
        return this.getRuleContext(0, MacroLiteralTokenContext);
    }
    public macroPunctuationToken(): MacroPunctuationTokenContext | null {
        return this.getRuleContext(0, MacroPunctuationTokenContext);
    }
    public macroRepOp(): MacroRepOpContext | null {
        return this.getRuleContext(0, MacroRepOpContext);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOLLAR, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tokenTreeToken;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTokenTreeToken) {
             listener.enterTokenTreeToken(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTokenTreeToken) {
             listener.exitTokenTreeToken(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTokenTreeToken) {
            return visitor.visitTokenTreeToken(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroInvocationSemiContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simplePath(): SimplePathContext {
        return this.getRuleContext(0, SimplePathContext)!;
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(RustParser.NOT, 0)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public tokenTree(): TokenTreeContext[];
    public tokenTree(i: number): TokenTreeContext | null;
    public tokenTree(i?: number): TokenTreeContext[] | TokenTreeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TokenTreeContext);
        }

        return this.getRuleContext(i, TokenTreeContext);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LSQUAREBRACKET, 0);
    }
    public RSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RSQUAREBRACKET, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroInvocationSemi;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroInvocationSemi) {
             listener.enterMacroInvocationSemi(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroInvocationSemi) {
             listener.exitMacroInvocationSemi(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroInvocationSemi) {
            return visitor.visitMacroInvocationSemi(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRulesDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MACRORULES(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_MACRORULES, 0)!;
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(RustParser.NOT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public macroRulesDef(): MacroRulesDefContext {
        return this.getRuleContext(0, MacroRulesDefContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRulesDefinition;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRulesDefinition) {
             listener.enterMacroRulesDefinition(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRulesDefinition) {
             listener.exitMacroRulesDefinition(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRulesDefinition) {
            return visitor.visitMacroRulesDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRulesDefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public macroRules(): MacroRulesContext {
        return this.getRuleContext(0, MacroRulesContext)!;
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LSQUAREBRACKET, 0);
    }
    public RSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RSQUAREBRACKET, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRulesDef;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRulesDef) {
             listener.enterMacroRulesDef(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRulesDef) {
             listener.exitMacroRulesDef(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRulesDef) {
            return visitor.visitMacroRulesDef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRulesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroRule(): MacroRuleContext[];
    public macroRule(i: number): MacroRuleContext | null;
    public macroRule(i?: number): MacroRuleContext[] | MacroRuleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MacroRuleContext);
        }

        return this.getRuleContext(i, MacroRuleContext);
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.SEMI);
    	} else {
    		return this.getToken(RustParser.SEMI, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRules;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRules) {
             listener.enterMacroRules(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRules) {
             listener.exitMacroRules(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRules) {
            return visitor.visitMacroRules(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroMatcher(): MacroMatcherContext {
        return this.getRuleContext(0, MacroMatcherContext)!;
    }
    public FATARROW(): antlr.TerminalNode {
        return this.getToken(RustParser.FATARROW, 0)!;
    }
    public macroTranscriber(): MacroTranscriberContext {
        return this.getRuleContext(0, MacroTranscriberContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRule;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRule) {
             listener.enterMacroRule(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRule) {
             listener.exitMacroRule(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRule) {
            return visitor.visitMacroRule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroMatcherContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public macroMatch(): MacroMatchContext[];
    public macroMatch(i: number): MacroMatchContext | null;
    public macroMatch(i?: number): MacroMatchContext[] | MacroMatchContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MacroMatchContext);
        }

        return this.getRuleContext(i, MacroMatchContext);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LSQUAREBRACKET, 0);
    }
    public RSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RSQUAREBRACKET, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroMatcher;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroMatcher) {
             listener.enterMacroMatcher(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroMatcher) {
             listener.exitMacroMatcher(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroMatcher) {
            return visitor.visitMacroMatcher(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroMatchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroMatchToken(): MacroMatchTokenContext[];
    public macroMatchToken(i: number): MacroMatchTokenContext | null;
    public macroMatchToken(i?: number): MacroMatchTokenContext[] | MacroMatchTokenContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MacroMatchTokenContext);
        }

        return this.getRuleContext(i, MacroMatchTokenContext);
    }
    public macroMatcher(): MacroMatcherContext | null {
        return this.getRuleContext(0, MacroMatcherContext);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOLLAR, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public macroFragSpec(): MacroFragSpecContext | null {
        return this.getRuleContext(0, MacroFragSpecContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public macroRepOp(): MacroRepOpContext | null {
        return this.getRuleContext(0, MacroRepOpContext);
    }
    public macroMatch(): MacroMatchContext[];
    public macroMatch(i: number): MacroMatchContext | null;
    public macroMatch(i?: number): MacroMatchContext[] | MacroMatchContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MacroMatchContext);
        }

        return this.getRuleContext(i, MacroMatchContext);
    }
    public macroRepSep(): MacroRepSepContext | null {
        return this.getRuleContext(0, MacroRepSepContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroMatch;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroMatch) {
             listener.enterMacroMatch(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroMatch) {
             listener.exitMacroMatch(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroMatch) {
            return visitor.visitMacroMatch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroMatchTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext | null {
        return this.getRuleContext(0, MacroIdentifierLikeTokenContext);
    }
    public macroLiteralToken(): MacroLiteralTokenContext | null {
        return this.getRuleContext(0, MacroLiteralTokenContext);
    }
    public macroPunctuationToken(): MacroPunctuationTokenContext | null {
        return this.getRuleContext(0, MacroPunctuationTokenContext);
    }
    public macroRepOp(): MacroRepOpContext | null {
        return this.getRuleContext(0, MacroRepOpContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroMatchToken;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroMatchToken) {
             listener.enterMacroMatchToken(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroMatchToken) {
             listener.exitMacroMatchToken(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroMatchToken) {
            return visitor.visitMacroMatchToken(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroFragSpecContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroFragSpec;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroFragSpec) {
             listener.enterMacroFragSpec(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroFragSpec) {
             listener.exitMacroFragSpec(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroFragSpec) {
            return visitor.visitMacroFragSpec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRepSepContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext | null {
        return this.getRuleContext(0, MacroIdentifierLikeTokenContext);
    }
    public macroLiteralToken(): MacroLiteralTokenContext | null {
        return this.getRuleContext(0, MacroLiteralTokenContext);
    }
    public macroPunctuationToken(): MacroPunctuationTokenContext | null {
        return this.getRuleContext(0, MacroPunctuationTokenContext);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOLLAR, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRepSep;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRepSep) {
             listener.enterMacroRepSep(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRepSep) {
             listener.exitMacroRepSep(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRepSep) {
            return visitor.visitMacroRepSep(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRepOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAR, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PLUS, 0);
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(RustParser.QUESTION, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRepOp;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRepOp) {
             listener.enterMacroRepOp(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRepOp) {
             listener.exitMacroRepOp(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRepOp) {
            return visitor.visitMacroRepOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroTranscriberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public delimTokenTree(): DelimTokenTreeContext {
        return this.getRuleContext(0, DelimTokenTreeContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroTranscriber;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroTranscriber) {
             listener.enterMacroTranscriber(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroTranscriber) {
             listener.exitMacroTranscriber(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroTranscriber) {
            return visitor.visitMacroTranscriber(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public visItem(): VisItemContext | null {
        return this.getRuleContext(0, VisItemContext);
    }
    public macroItem(): MacroItemContext | null {
        return this.getRuleContext(0, MacroItemContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_item;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterItem) {
             listener.enterItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitItem) {
             listener.exitItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitItem) {
            return visitor.visitItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VisItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public module(): ModuleContext | null {
        return this.getRuleContext(0, ModuleContext);
    }
    public externCrate(): ExternCrateContext | null {
        return this.getRuleContext(0, ExternCrateContext);
    }
    public useDeclaration(): UseDeclarationContext | null {
        return this.getRuleContext(0, UseDeclarationContext);
    }
    public function_(): Function_Context | null {
        return this.getRuleContext(0, Function_Context);
    }
    public typeAlias(): TypeAliasContext | null {
        return this.getRuleContext(0, TypeAliasContext);
    }
    public struct_(): Struct_Context | null {
        return this.getRuleContext(0, Struct_Context);
    }
    public enumeration(): EnumerationContext | null {
        return this.getRuleContext(0, EnumerationContext);
    }
    public union_(): Union_Context | null {
        return this.getRuleContext(0, Union_Context);
    }
    public constantItem(): ConstantItemContext | null {
        return this.getRuleContext(0, ConstantItemContext);
    }
    public staticItem(): StaticItemContext | null {
        return this.getRuleContext(0, StaticItemContext);
    }
    public trait_(): Trait_Context | null {
        return this.getRuleContext(0, Trait_Context);
    }
    public implementation(): ImplementationContext | null {
        return this.getRuleContext(0, ImplementationContext);
    }
    public externBlock(): ExternBlockContext | null {
        return this.getRuleContext(0, ExternBlockContext);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_visItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterVisItem) {
             listener.enterVisItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitVisItem) {
             listener.exitVisItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitVisItem) {
            return visitor.visitVisItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroInvocationSemi(): MacroInvocationSemiContext | null {
        return this.getRuleContext(0, MacroInvocationSemiContext);
    }
    public macroRulesDefinition(): MacroRulesDefinitionContext | null {
        return this.getRuleContext(0, MacroRulesDefinitionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroItem) {
             listener.enterMacroItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroItem) {
             listener.exitMacroItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroItem) {
            return visitor.visitMacroItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MOD(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_MOD, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public item(): ItemContext[];
    public item(i: number): ItemContext | null;
    public item(i?: number): ItemContext[] | ItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }

        return this.getRuleContext(i, ItemContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_module;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterModule) {
             listener.enterModule(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitModule) {
             listener.exitModule(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitModule) {
            return visitor.visitModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExternCrateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_EXTERN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_EXTERN, 0)!;
    }
    public KW_CRATE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_CRATE, 0)!;
    }
    public crateRef(): CrateRefContext {
        return this.getRuleContext(0, CrateRefContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public asClause(): AsClauseContext | null {
        return this.getRuleContext(0, AsClauseContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_externCrate;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExternCrate) {
             listener.enterExternCrate(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExternCrate) {
             listener.exitExternCrate(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExternCrate) {
            return visitor.visitExternCrate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CrateRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_crateRef;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCrateRef) {
             listener.enterCrateRef(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCrateRef) {
             listener.exitCrateRef(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCrateRef) {
            return visitor.visitCrateRef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AsClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_AS, 0)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.UNDERSCORE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_asClause;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAsClause) {
             listener.enterAsClause(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAsClause) {
             listener.exitAsClause(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAsClause) {
            return visitor.visitAsClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UseDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_USE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_USE, 0)!;
    }
    public useTree(): UseTreeContext {
        return this.getRuleContext(0, UseTreeContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_useDeclaration;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterUseDeclaration) {
             listener.enterUseDeclaration(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitUseDeclaration) {
             listener.exitUseDeclaration(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitUseDeclaration) {
            return visitor.visitUseDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UseTreeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAR, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public PATHSEP(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PATHSEP, 0);
    }
    public useTree(): UseTreeContext[];
    public useTree(i: number): UseTreeContext | null;
    public useTree(i?: number): UseTreeContext[] | UseTreeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UseTreeContext);
        }

        return this.getRuleContext(i, UseTreeContext);
    }
    public simplePath(): SimplePathContext | null {
        return this.getRuleContext(0, SimplePathContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_AS, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.UNDERSCORE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_useTree;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterUseTree) {
             listener.enterUseTree(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitUseTree) {
             listener.exitUseTree(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitUseTree) {
            return visitor.visitUseTree(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionBlockExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionBlockExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionBlockExpression) {
             listener.enterFunctionBlockExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionBlockExpression) {
             listener.exitFunctionBlockExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionBlockExpression) {
            return visitor.visitFunctionBlockExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Function_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionQualifiers(): FunctionQualifiersContext {
        return this.getRuleContext(0, FunctionQualifiersContext)!;
    }
    public KW_FN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_FN, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public functionBlockExpression(): FunctionBlockExpressionContext | null {
        return this.getRuleContext(0, FunctionBlockExpressionContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public functionParameters(): FunctionParametersContext | null {
        return this.getRuleContext(0, FunctionParametersContext);
    }
    public functionReturnType(): FunctionReturnTypeContext | null {
        return this.getRuleContext(0, FunctionReturnTypeContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_function_;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunction_) {
             listener.enterFunction_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunction_) {
             listener.exitFunction_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunction_) {
            return visitor.visitFunction_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionQualifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CONST(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CONST, 0);
    }
    public KW_ASYNC(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ASYNC, 0);
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public KW_EXTERN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_EXTERN, 0);
    }
    public abi(): AbiContext | null {
        return this.getRuleContext(0, AbiContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionQualifiers;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionQualifiers) {
             listener.enterFunctionQualifiers(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionQualifiers) {
             listener.exitFunctionQualifiers(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionQualifiers) {
            return visitor.visitFunctionQualifiers(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AbiContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STRING_LITERAL, 0);
    }
    public RAW_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_abi;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAbi) {
             listener.enterAbi(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAbi) {
             listener.exitAbi(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAbi) {
            return visitor.visitAbi(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selfParam(): SelfParamContext | null {
        return this.getRuleContext(0, SelfParamContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public functionParam(): FunctionParamContext[];
    public functionParam(i: number): FunctionParamContext | null;
    public functionParam(i?: number): FunctionParamContext[] | FunctionParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionParamContext);
        }

        return this.getRuleContext(i, FunctionParamContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionParameters;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionParameters) {
             listener.enterFunctionParameters(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionParameters) {
             listener.exitFunctionParameters(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionParameters) {
            return visitor.visitFunctionParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelfParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public shorthandSelf(): ShorthandSelfContext | null {
        return this.getRuleContext(0, ShorthandSelfContext);
    }
    public typedSelf(): TypedSelfContext | null {
        return this.getRuleContext(0, TypedSelfContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_selfParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSelfParam) {
             listener.enterSelfParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSelfParam) {
             listener.exitSelfParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSelfParam) {
            return visitor.visitSelfParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShorthandSelfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SELFVALUE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_SELFVALUE, 0)!;
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AND, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public lifetime(): LifetimeContext | null {
        return this.getRuleContext(0, LifetimeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_shorthandSelf;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterShorthandSelf) {
             listener.enterShorthandSelf(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitShorthandSelf) {
             listener.exitShorthandSelf(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitShorthandSelf) {
            return visitor.visitShorthandSelf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypedSelfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SELFVALUE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_SELFVALUE, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typedSelf;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypedSelf) {
             listener.enterTypedSelf(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypedSelf) {
             listener.exitTypedSelf(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypedSelf) {
            return visitor.visitTypedSelf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionParamPattern(): FunctionParamPatternContext | null {
        return this.getRuleContext(0, FunctionParamPatternContext);
    }
    public DOTDOTDOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOTDOT, 0);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionParam) {
             listener.enterFunctionParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionParam) {
             listener.exitFunctionParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionParam) {
            return visitor.visitFunctionParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParamPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public DOTDOTDOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOTDOT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionParamPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionParamPattern) {
             listener.enterFunctionParamPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionParamPattern) {
             listener.exitFunctionParamPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionParamPattern) {
            return visitor.visitFunctionParamPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionReturnTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RARROW(): antlr.TerminalNode {
        return this.getToken(RustParser.RARROW, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionReturnType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionReturnType) {
             listener.enterFunctionReturnType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionReturnType) {
             listener.exitFunctionReturnType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionReturnType) {
            return visitor.visitFunctionReturnType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeAliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TYPE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_TYPE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeAlias;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeAlias) {
             listener.enterTypeAlias(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeAlias) {
             listener.exitTypeAlias(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeAlias) {
            return visitor.visitTypeAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Struct_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structStruct(): StructStructContext | null {
        return this.getRuleContext(0, StructStructContext);
    }
    public tupleStruct(): TupleStructContext | null {
        return this.getRuleContext(0, TupleStructContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_struct_;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStruct_) {
             listener.enterStruct_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStruct_) {
             listener.exitStruct_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStruct_) {
            return visitor.visitStruct_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructStructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_STRUCT(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_STRUCT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public structFields(): StructFieldsContext | null {
        return this.getRuleContext(0, StructFieldsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structStruct;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructStruct) {
             listener.enterStructStruct(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructStruct) {
             listener.exitStructStruct(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructStruct) {
            return visitor.visitStructStruct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleStructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_STRUCT(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_STRUCT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public tupleFields(): TupleFieldsContext | null {
        return this.getRuleContext(0, TupleFieldsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleStruct;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleStruct) {
             listener.enterTupleStruct(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleStruct) {
             listener.exitTupleStruct(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleStruct) {
            return visitor.visitTupleStruct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structField(): StructFieldContext[];
    public structField(i: number): StructFieldContext | null;
    public structField(i?: number): StructFieldContext[] | StructFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructFieldContext);
        }

        return this.getRuleContext(i, StructFieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structFields;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructFields) {
             listener.enterStructFields(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructFields) {
             listener.exitStructFields(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructFields) {
            return visitor.visitStructFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structField;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructField) {
             listener.enterStructField(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructField) {
             listener.exitStructField(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructField) {
            return visitor.visitStructField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tupleField(): TupleFieldContext[];
    public tupleField(i: number): TupleFieldContext | null;
    public tupleField(i?: number): TupleFieldContext[] | TupleFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TupleFieldContext);
        }

        return this.getRuleContext(i, TupleFieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleFields;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleFields) {
             listener.enterTupleFields(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleFields) {
             listener.exitTupleFields(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleFields) {
            return visitor.visitTupleFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleField;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleField) {
             listener.enterTupleField(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleField) {
             listener.exitTupleField(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleField) {
            return visitor.visitTupleField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumerationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ENUM(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_ENUM, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public enumItems(): EnumItemsContext | null {
        return this.getRuleContext(0, EnumItemsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumeration;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumeration) {
             listener.enterEnumeration(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumeration) {
             listener.exitEnumeration(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumeration) {
            return visitor.visitEnumeration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumItem(): EnumItemContext[];
    public enumItem(i: number): EnumItemContext | null;
    public enumItem(i?: number): EnumItemContext[] | EnumItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumItemContext);
        }

        return this.getRuleContext(i, EnumItemContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumItems;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumItems) {
             listener.enterEnumItems(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumItems) {
             listener.exitEnumItems(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumItems) {
            return visitor.visitEnumItems(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public enumItemTuple(): EnumItemTupleContext | null {
        return this.getRuleContext(0, EnumItemTupleContext);
    }
    public enumItemStruct(): EnumItemStructContext | null {
        return this.getRuleContext(0, EnumItemStructContext);
    }
    public enumItemDiscriminant(): EnumItemDiscriminantContext | null {
        return this.getRuleContext(0, EnumItemDiscriminantContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumItem) {
             listener.enterEnumItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumItem) {
             listener.exitEnumItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumItem) {
            return visitor.visitEnumItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumItemTupleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public tupleFields(): TupleFieldsContext | null {
        return this.getRuleContext(0, TupleFieldsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumItemTuple;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumItemTuple) {
             listener.enterEnumItemTuple(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumItemTuple) {
             listener.exitEnumItemTuple(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumItemTuple) {
            return visitor.visitEnumItemTuple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumItemStructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public structFields(): StructFieldsContext | null {
        return this.getRuleContext(0, StructFieldsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumItemStruct;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumItemStruct) {
             listener.enterEnumItemStruct(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumItemStruct) {
             listener.exitEnumItemStruct(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumItemStruct) {
            return visitor.visitEnumItemStruct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumItemDiscriminantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(RustParser.EQ, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumItemDiscriminant;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumItemDiscriminant) {
             listener.enterEnumItemDiscriminant(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumItemDiscriminant) {
             listener.exitEnumItemDiscriminant(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumItemDiscriminant) {
            return visitor.visitEnumItemDiscriminant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Union_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UNION(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_UNION, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public structFields(): StructFieldsContext {
        return this.getRuleContext(0, StructFieldsContext)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_union_;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterUnion_) {
             listener.enterUnion_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitUnion_) {
             listener.exitUnion_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitUnion_) {
            return visitor.visitUnion_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstantItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CONST(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_CONST, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.UNDERSCORE, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_constantItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterConstantItem) {
             listener.enterConstantItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitConstantItem) {
             listener.exitConstantItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitConstantItem) {
            return visitor.visitConstantItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StaticItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_STATIC(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_STATIC, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_staticItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStaticItem) {
             listener.enterStaticItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStaticItem) {
             listener.exitStaticItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStaticItem) {
            return visitor.visitStaticItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Trait_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TRAIT(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_TRAIT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public associatedItem(): AssociatedItemContext[];
    public associatedItem(i: number): AssociatedItemContext | null;
    public associatedItem(i?: number): AssociatedItemContext[] | AssociatedItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssociatedItemContext);
        }

        return this.getRuleContext(i, AssociatedItemContext);
    }
    public typeParamBounds(): TypeParamBoundsContext | null {
        return this.getRuleContext(0, TypeParamBoundsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_trait_;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTrait_) {
             listener.enterTrait_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTrait_) {
             listener.exitTrait_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTrait_) {
            return visitor.visitTrait_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImplementationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public inherentImpl(): InherentImplContext | null {
        return this.getRuleContext(0, InherentImplContext);
    }
    public traitImpl(): TraitImplContext | null {
        return this.getRuleContext(0, TraitImplContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_implementation;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterImplementation) {
             listener.enterImplementation(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitImplementation) {
             listener.exitImplementation(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitImplementation) {
            return visitor.visitImplementation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InherentImplContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IMPL(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IMPL, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public associatedItem(): AssociatedItemContext[];
    public associatedItem(i: number): AssociatedItemContext | null;
    public associatedItem(i?: number): AssociatedItemContext[] | AssociatedItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssociatedItemContext);
        }

        return this.getRuleContext(i, AssociatedItemContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_inherentImpl;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterInherentImpl) {
             listener.enterInherentImpl(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitInherentImpl) {
             listener.exitInherentImpl(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitInherentImpl) {
            return visitor.visitInherentImpl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraitImplContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IMPL(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IMPL, 0)!;
    }
    public typePath(): TypePathContext {
        return this.getRuleContext(0, TypePathContext)!;
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_FOR, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NOT, 0);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public associatedItem(): AssociatedItemContext[];
    public associatedItem(i: number): AssociatedItemContext | null;
    public associatedItem(i?: number): AssociatedItemContext[] | AssociatedItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssociatedItemContext);
        }

        return this.getRuleContext(i, AssociatedItemContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_traitImpl;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTraitImpl) {
             listener.enterTraitImpl(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTraitImpl) {
             listener.exitTraitImpl(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTraitImpl) {
            return visitor.visitTraitImpl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExternBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_EXTERN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_EXTERN, 0)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public abi(): AbiContext | null {
        return this.getRuleContext(0, AbiContext);
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public externalItem(): ExternalItemContext[];
    public externalItem(i: number): ExternalItemContext | null;
    public externalItem(i?: number): ExternalItemContext[] | ExternalItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExternalItemContext);
        }

        return this.getRuleContext(i, ExternalItemContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_externBlock;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExternBlock) {
             listener.enterExternBlock(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExternBlock) {
             listener.exitExternBlock(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExternBlock) {
            return visitor.visitExternBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExternalItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroInvocationSemi(): MacroInvocationSemiContext | null {
        return this.getRuleContext(0, MacroInvocationSemiContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public staticItem(): StaticItemContext | null {
        return this.getRuleContext(0, StaticItemContext);
    }
    public function_(): Function_Context | null {
        return this.getRuleContext(0, Function_Context);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_externalItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExternalItem) {
             listener.enterExternalItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExternalItem) {
             listener.exitExternalItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExternalItem) {
            return visitor.visitExternalItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(RustParser.LT, 0)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(RustParser.GT, 0)!;
    }
    public genericParam(): GenericParamContext[];
    public genericParam(i: number): GenericParamContext | null;
    public genericParam(i?: number): GenericParamContext[] | GenericParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GenericParamContext);
        }

        return this.getRuleContext(i, GenericParamContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericParams;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericParams) {
             listener.enterGenericParams(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericParams) {
             listener.exitGenericParams(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericParams) {
            return visitor.visitGenericParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetimeParam(): LifetimeParamContext | null {
        return this.getRuleContext(0, LifetimeParamContext);
    }
    public typeParam(): TypeParamContext | null {
        return this.getRuleContext(0, TypeParamContext);
    }
    public constParam(): ConstParamContext | null {
        return this.getRuleContext(0, ConstParamContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericParam) {
             listener.enterGenericParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericParam) {
             listener.exitGenericParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericParam) {
            return visitor.visitGenericParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LifetimeParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0)!;
    }
    public outerAttribute(): OuterAttributeContext | null {
        return this.getRuleContext(0, OuterAttributeContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public lifetimeBounds(): LifetimeBoundsContext | null {
        return this.getRuleContext(0, LifetimeBoundsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_lifetimeParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLifetimeParam) {
             listener.enterLifetimeParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLifetimeParam) {
             listener.exitLifetimeParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLifetimeParam) {
            return visitor.visitLifetimeParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public outerAttribute(): OuterAttributeContext | null {
        return this.getRuleContext(0, OuterAttributeContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public typeParamBounds(): TypeParamBoundsContext | null {
        return this.getRuleContext(0, TypeParamBoundsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeParam) {
             listener.enterTypeParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeParam) {
             listener.exitTypeParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParam) {
            return visitor.visitTypeParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CONST(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_CONST, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_constParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterConstParam) {
             listener.enterConstParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitConstParam) {
             listener.exitConstParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitConstParam) {
            return visitor.visitConstParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHERE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_WHERE, 0)!;
    }
    public whereClauseItem(): WhereClauseItemContext[];
    public whereClauseItem(i: number): WhereClauseItemContext | null;
    public whereClauseItem(i?: number): WhereClauseItemContext[] | WhereClauseItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhereClauseItemContext);
        }

        return this.getRuleContext(i, WhereClauseItemContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_whereClause;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterWhereClause) {
             listener.enterWhereClause(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitWhereClause) {
             listener.exitWhereClause(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereClauseItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetimeWhereClauseItem(): LifetimeWhereClauseItemContext | null {
        return this.getRuleContext(0, LifetimeWhereClauseItemContext);
    }
    public typeBoundWhereClauseItem(): TypeBoundWhereClauseItemContext | null {
        return this.getRuleContext(0, TypeBoundWhereClauseItemContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_whereClauseItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterWhereClauseItem) {
             listener.enterWhereClauseItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitWhereClauseItem) {
             listener.exitWhereClauseItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitWhereClauseItem) {
            return visitor.visitWhereClauseItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LifetimeWhereClauseItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetime(): LifetimeContext {
        return this.getRuleContext(0, LifetimeContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public lifetimeBounds(): LifetimeBoundsContext {
        return this.getRuleContext(0, LifetimeBoundsContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_lifetimeWhereClauseItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLifetimeWhereClauseItem) {
             listener.enterLifetimeWhereClauseItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLifetimeWhereClauseItem) {
             listener.exitLifetimeWhereClauseItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLifetimeWhereClauseItem) {
            return visitor.visitLifetimeWhereClauseItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeBoundWhereClauseItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public forLifetimes(): ForLifetimesContext | null {
        return this.getRuleContext(0, ForLifetimesContext);
    }
    public typeParamBounds(): TypeParamBoundsContext | null {
        return this.getRuleContext(0, TypeParamBoundsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeBoundWhereClauseItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeBoundWhereClauseItem) {
             listener.enterTypeBoundWhereClauseItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeBoundWhereClauseItem) {
             listener.exitTypeBoundWhereClauseItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeBoundWhereClauseItem) {
            return visitor.visitTypeBoundWhereClauseItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForLifetimesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_FOR, 0)!;
    }
    public genericParams(): GenericParamsContext {
        return this.getRuleContext(0, GenericParamsContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_forLifetimes;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterForLifetimes) {
             listener.enterForLifetimes(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitForLifetimes) {
             listener.exitForLifetimes(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitForLifetimes) {
            return visitor.visitForLifetimes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssociatedItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroInvocationSemi(): MacroInvocationSemiContext | null {
        return this.getRuleContext(0, MacroInvocationSemiContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public typeAlias(): TypeAliasContext | null {
        return this.getRuleContext(0, TypeAliasContext);
    }
    public constantItem(): ConstantItemContext | null {
        return this.getRuleContext(0, ConstantItemContext);
    }
    public function_(): Function_Context | null {
        return this.getRuleContext(0, Function_Context);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_associatedItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAssociatedItem) {
             listener.enterAssociatedItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAssociatedItem) {
             listener.exitAssociatedItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAssociatedItem) {
            return visitor.visitAssociatedItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InnerAttributeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public POUND(): antlr.TerminalNode {
        return this.getToken(RustParser.POUND, 0)!;
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(RustParser.NOT, 0)!;
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public attr(): AttrContext {
        return this.getRuleContext(0, AttrContext)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_innerAttribute;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterInnerAttribute) {
             listener.enterInnerAttribute(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitInnerAttribute) {
             listener.exitInnerAttribute(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitInnerAttribute) {
            return visitor.visitInnerAttribute(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OuterAttributeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public POUND(): antlr.TerminalNode {
        return this.getToken(RustParser.POUND, 0)!;
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public attr(): AttrContext {
        return this.getRuleContext(0, AttrContext)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_outerAttribute;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterOuterAttribute) {
             listener.enterOuterAttribute(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitOuterAttribute) {
             listener.exitOuterAttribute(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitOuterAttribute) {
            return visitor.visitOuterAttribute(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AttrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simplePath(): SimplePathContext {
        return this.getRuleContext(0, SimplePathContext)!;
    }
    public attrInput(): AttrInputContext | null {
        return this.getRuleContext(0, AttrInputContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_attr;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAttr) {
             listener.enterAttr(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAttr) {
             listener.exitAttr(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAttr) {
            return visitor.visitAttr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AttrInputContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public delimTokenTree(): DelimTokenTreeContext | null {
        return this.getRuleContext(0, DelimTokenTreeContext);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public literalExpression(): LiteralExpressionContext | null {
        return this.getRuleContext(0, LiteralExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_attrInput;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAttrInput) {
             listener.enterAttrInput(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAttrInput) {
             listener.exitAttrInput(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAttrInput) {
            return visitor.visitAttrInput(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public item(): ItemContext | null {
        return this.getRuleContext(0, ItemContext);
    }
    public letStatement(): LetStatementContext | null {
        return this.getRuleContext(0, LetStatementContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public macroInvocationSemi(): MacroInvocationSemiContext | null {
        return this.getRuleContext(0, MacroInvocationSemiContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_statement;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LET(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_LET, 0)!;
    }
    public patternNoTopAlt(): PatternNoTopAltContext {
        return this.getRuleContext(0, PatternNoTopAltContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_letStatement;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLetStatement) {
             listener.enterLetStatement(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLetStatement) {
             listener.exitLetStatement(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLetStatement) {
            return visitor.visitLetStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expressionStatement;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExpressionStatement) {
             listener.exitExpressionStatement(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class TypeCastExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_AS, 0)!;
    }
    public typeNoBounds(): TypeNoBoundsContext {
        return this.getRuleContext(0, TypeNoBoundsContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeCastExpression) {
             listener.enterTypeCastExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeCastExpression) {
             listener.exitTypeCastExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeCastExpression) {
            return visitor.visitTypeCastExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathExpression_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public pathExpression(): PathExpressionContext {
        return this.getRuleContext(0, PathExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathExpression_) {
             listener.enterPathExpression_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathExpression_) {
             listener.exitPathExpression_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathExpression_) {
            return visitor.visitPathExpression_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TupleExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public tupleElements(): TupleElementsContext | null {
        return this.getRuleContext(0, TupleElementsContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleExpression) {
             listener.enterTupleExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleExpression) {
             listener.exitTupleExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleExpression) {
            return visitor.visitTupleExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IndexExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIndexExpression) {
             listener.enterIndexExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIndexExpression) {
             listener.exitIndexExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIndexExpression) {
            return visitor.visitIndexExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RangeExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DOTDOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOT, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public DOTDOTEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOTEQ, 0);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterRangeExpression) {
             listener.enterRangeExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitRangeExpression) {
             listener.exitRangeExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitRangeExpression) {
            return visitor.visitRangeExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MacroInvocationAsExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public macroInvocation(): MacroInvocationContext {
        return this.getRuleContext(0, MacroInvocationContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroInvocationAsExpression) {
             listener.enterMacroInvocationAsExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroInvocationAsExpression) {
             listener.exitMacroInvocationAsExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroInvocationAsExpression) {
            return visitor.visitMacroInvocationAsExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReturnExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_RETURN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_RETURN, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterReturnExpression) {
             listener.enterReturnExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitReturnExpression) {
             listener.exitReturnExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitReturnExpression) {
            return visitor.visitReturnExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AwaitExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOT, 0)!;
    }
    public KW_AWAIT(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_AWAIT, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAwaitExpression) {
             listener.enterAwaitExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAwaitExpression) {
             listener.exitAwaitExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAwaitExpression) {
            return visitor.visitAwaitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ErrorPropagationExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public QUESTION(): antlr.TerminalNode {
        return this.getToken(RustParser.QUESTION, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterErrorPropagationExpression) {
             listener.enterErrorPropagationExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitErrorPropagationExpression) {
             listener.exitErrorPropagationExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitErrorPropagationExpression) {
            return visitor.visitErrorPropagationExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ContinueExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CONTINUE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_CONTINUE, 0)!;
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterContinueExpression) {
             listener.enterContinueExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitContinueExpression) {
             listener.exitContinueExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitContinueExpression) {
            return visitor.visitContinueExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignmentExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(RustParser.EQ, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAssignmentExpression) {
             listener.enterAssignmentExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAssignmentExpression) {
             listener.exitAssignmentExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentExpression) {
            return visitor.visitAssignmentExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MethodCallExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOT, 0)!;
    }
    public pathExprSegment(): PathExprSegmentContext {
        return this.getRuleContext(0, PathExprSegmentContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public callParams(): CallParamsContext | null {
        return this.getRuleContext(0, CallParamsContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMethodCallExpression) {
             listener.enterMethodCallExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMethodCallExpression) {
             listener.exitMethodCallExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMethodCallExpression) {
            return visitor.visitMethodCallExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralExpression_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literalExpression(): LiteralExpressionContext {
        return this.getRuleContext(0, LiteralExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLiteralExpression_) {
             listener.enterLiteralExpression_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLiteralExpression_) {
             listener.exitLiteralExpression_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralExpression_) {
            return visitor.visitLiteralExpression_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StructExpression_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public structExpression(): StructExpressionContext {
        return this.getRuleContext(0, StructExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExpression_) {
             listener.enterStructExpression_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExpression_) {
             listener.exitStructExpression_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExpression_) {
            return visitor.visitStructExpression_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TupleIndexingExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOT, 0)!;
    }
    public tupleIndex(): TupleIndexContext {
        return this.getRuleContext(0, TupleIndexContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleIndexingExpression) {
             listener.enterTupleIndexingExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleIndexingExpression) {
             listener.exitTupleIndexingExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleIndexingExpression) {
            return visitor.visitTupleIndexingExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NegationExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NOT, 0);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterNegationExpression) {
             listener.enterNegationExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitNegationExpression) {
             listener.exitNegationExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitNegationExpression) {
            return visitor.visitNegationExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CallExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public callParams(): CallParamsContext | null {
        return this.getRuleContext(0, CallParamsContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCallExpression) {
             listener.enterCallExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCallExpression) {
             listener.exitCallExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCallExpression) {
            return visitor.visitCallExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LazyBooleanExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public ANDAND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ANDAND, 0);
    }
    public OROR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OROR, 0);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLazyBooleanExpression) {
             listener.enterLazyBooleanExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLazyBooleanExpression) {
             listener.exitLazyBooleanExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLazyBooleanExpression) {
            return visitor.visitLazyBooleanExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DereferenceExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(RustParser.STAR, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterDereferenceExpression) {
             listener.enterDereferenceExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitDereferenceExpression) {
             listener.exitDereferenceExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitDereferenceExpression) {
            return visitor.visitDereferenceExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpressionWithBlock_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressionWithBlock(): ExpressionWithBlockContext {
        return this.getRuleContext(0, ExpressionWithBlockContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExpressionWithBlock_) {
             listener.enterExpressionWithBlock_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExpressionWithBlock_) {
             listener.exitExpressionWithBlock_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionWithBlock_) {
            return visitor.visitExpressionWithBlock_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupedExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGroupedExpression) {
             listener.enterGroupedExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGroupedExpression) {
             listener.exitGroupedExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGroupedExpression) {
            return visitor.visitGroupedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BreakExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_BREAK(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_BREAK, 0)!;
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterBreakExpression) {
             listener.enterBreakExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitBreakExpression) {
             listener.exitBreakExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitBreakExpression) {
            return visitor.visitBreakExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticOrLogicalExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAR, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SLASH, 0);
    }
    public PERCENT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PERCENT, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public shl(): ShlContext | null {
        return this.getRuleContext(0, ShlContext);
    }
    public shr(): ShrContext | null {
        return this.getRuleContext(0, ShrContext);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AND, 0);
    }
    public CARET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CARET, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OR, 0);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterArithmeticOrLogicalExpression) {
             listener.enterArithmeticOrLogicalExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitArithmeticOrLogicalExpression) {
             listener.exitArithmeticOrLogicalExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitArithmeticOrLogicalExpression) {
            return visitor.visitArithmeticOrLogicalExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FieldExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFieldExpression) {
             listener.enterFieldExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFieldExpression) {
             listener.exitFieldExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFieldExpression) {
            return visitor.visitFieldExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EnumerationVariantExpression_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public enumerationVariantExpression(): EnumerationVariantExpressionContext {
        return this.getRuleContext(0, EnumerationVariantExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumerationVariantExpression_) {
             listener.enterEnumerationVariantExpression_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumerationVariantExpression_) {
             listener.exitEnumerationVariantExpression_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumerationVariantExpression_) {
            return visitor.visitEnumerationVariantExpression_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterComparisonExpression) {
             listener.enterComparisonExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitComparisonExpression) {
             listener.exitComparisonExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitComparisonExpression) {
            return visitor.visitComparisonExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AttributedExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAttributedExpression) {
             listener.enterAttributedExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAttributedExpression) {
             listener.exitAttributedExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAttributedExpression) {
            return visitor.visitAttributedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BorrowExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AND, 0);
    }
    public ANDAND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ANDAND, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterBorrowExpression) {
             listener.enterBorrowExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitBorrowExpression) {
             listener.exitBorrowExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitBorrowExpression) {
            return visitor.visitBorrowExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CompoundAssignmentExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public compoundAssignOperator(): CompoundAssignOperatorContext {
        return this.getRuleContext(0, CompoundAssignOperatorContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCompoundAssignmentExpression) {
             listener.enterCompoundAssignmentExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCompoundAssignmentExpression) {
             listener.exitCompoundAssignmentExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCompoundAssignmentExpression) {
            return visitor.visitCompoundAssignmentExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ClosureExpression_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public closureExpression(): ClosureExpressionContext {
        return this.getRuleContext(0, ClosureExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterClosureExpression_) {
             listener.enterClosureExpression_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitClosureExpression_) {
             listener.exitClosureExpression_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitClosureExpression_) {
            return visitor.visitClosureExpression_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public arrayElements(): ArrayElementsContext | null {
        return this.getRuleContext(0, ArrayElementsContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterArrayExpression) {
             listener.enterArrayExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitArrayExpression) {
             listener.exitArrayExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitArrayExpression) {
            return visitor.visitArrayExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQEQ, 0);
    }
    public NE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GT, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LT, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GE, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_comparisonOperator;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterComparisonOperator) {
             listener.enterComparisonOperator(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitComparisonOperator) {
             listener.exitComparisonOperator(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CompoundAssignOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PLUSEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PLUSEQ, 0);
    }
    public MINUSEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUSEQ, 0);
    }
    public STAREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAREQ, 0);
    }
    public SLASHEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SLASHEQ, 0);
    }
    public PERCENTEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PERCENTEQ, 0);
    }
    public ANDEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ANDEQ, 0);
    }
    public OREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OREQ, 0);
    }
    public CARETEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CARETEQ, 0);
    }
    public SHLEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SHLEQ, 0);
    }
    public SHREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SHREQ, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_compoundAssignOperator;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCompoundAssignOperator) {
             listener.enterCompoundAssignOperator(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCompoundAssignOperator) {
             listener.exitCompoundAssignOperator(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCompoundAssignOperator) {
            return visitor.visitCompoundAssignOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionWithBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public asyncBlockExpression(): AsyncBlockExpressionContext | null {
        return this.getRuleContext(0, AsyncBlockExpressionContext);
    }
    public unsafeBlockExpression(): UnsafeBlockExpressionContext | null {
        return this.getRuleContext(0, UnsafeBlockExpressionContext);
    }
    public loopExpression(): LoopExpressionContext | null {
        return this.getRuleContext(0, LoopExpressionContext);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public ifLetExpression(): IfLetExpressionContext | null {
        return this.getRuleContext(0, IfLetExpressionContext);
    }
    public matchExpression(): MatchExpressionContext | null {
        return this.getRuleContext(0, MatchExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expressionWithBlock;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExpressionWithBlock) {
             listener.enterExpressionWithBlock(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExpressionWithBlock) {
             listener.exitExpressionWithBlock(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionWithBlock) {
            return visitor.visitExpressionWithBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CHAR_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CHAR_LITERAL, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STRING_LITERAL, 0);
    }
    public RAW_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_STRING_LITERAL, 0);
    }
    public BYTE_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BYTE_LITERAL, 0);
    }
    public BYTE_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BYTE_STRING_LITERAL, 0);
    }
    public RAW_BYTE_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_BYTE_STRING_LITERAL, 0);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.INTEGER_LITERAL, 0);
    }
    public FLOAT_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.FLOAT_LITERAL, 0);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FALSE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_literalExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLiteralExpression) {
             listener.enterLiteralExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLiteralExpression) {
             listener.exitLiteralExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext | null {
        return this.getRuleContext(0, PathInExpressionContext);
    }
    public qualifiedPathInExpression(): QualifiedPathInExpressionContext | null {
        return this.getRuleContext(0, QualifiedPathInExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pathExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathExpression) {
             listener.enterPathExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathExpression) {
             listener.exitPathExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathExpression) {
            return visitor.visitPathExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public statements(): StatementsContext | null {
        return this.getRuleContext(0, StatementsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_blockExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterBlockExpression) {
             listener.enterBlockExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitBlockExpression) {
             listener.exitBlockExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitBlockExpression) {
            return visitor.visitBlockExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_statements;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStatements) {
             listener.enterStatements(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStatements) {
             listener.exitStatements(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AsyncBlockExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ASYNC(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_ASYNC, 0)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public KW_MOVE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MOVE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_asyncBlockExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAsyncBlockExpression) {
             listener.enterAsyncBlockExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAsyncBlockExpression) {
             listener.exitAsyncBlockExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAsyncBlockExpression) {
            return visitor.visitAsyncBlockExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnsafeBlockExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UNSAFE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_UNSAFE, 0)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_unsafeBlockExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterUnsafeBlockExpression) {
             listener.enterUnsafeBlockExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitUnsafeBlockExpression) {
             listener.exitUnsafeBlockExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitUnsafeBlockExpression) {
            return visitor.visitUnsafeBlockExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayElementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_arrayElements;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterArrayElements) {
             listener.enterArrayElements(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitArrayElements) {
             listener.exitArrayElements(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitArrayElements) {
            return visitor.visitArrayElements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleElementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleElements;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleElements) {
             listener.enterTupleElements(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleElements) {
             listener.exitTupleElements(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleElements) {
            return visitor.visitTupleElements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleIndexContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode {
        return this.getToken(RustParser.INTEGER_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleIndex;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleIndex) {
             listener.enterTupleIndex(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleIndex) {
             listener.exitTupleIndex(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleIndex) {
            return visitor.visitTupleIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structExprStruct(): StructExprStructContext | null {
        return this.getRuleContext(0, StructExprStructContext);
    }
    public structExprTuple(): StructExprTupleContext | null {
        return this.getRuleContext(0, StructExprTupleContext);
    }
    public structExprUnit(): StructExprUnitContext | null {
        return this.getRuleContext(0, StructExprUnitContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExpression) {
             listener.enterStructExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExpression) {
             listener.exitStructExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExpression) {
            return visitor.visitStructExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExprStructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public structExprFields(): StructExprFieldsContext | null {
        return this.getRuleContext(0, StructExprFieldsContext);
    }
    public structBase(): StructBaseContext | null {
        return this.getRuleContext(0, StructBaseContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExprStruct;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExprStruct) {
             listener.enterStructExprStruct(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExprStruct) {
             listener.exitStructExprStruct(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExprStruct) {
            return visitor.visitStructExprStruct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExprFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structExprField(): StructExprFieldContext[];
    public structExprField(i: number): StructExprFieldContext | null;
    public structExprField(i?: number): StructExprFieldContext[] | StructExprFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructExprFieldContext);
        }

        return this.getRuleContext(i, StructExprFieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public structBase(): StructBaseContext | null {
        return this.getRuleContext(0, StructBaseContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExprFields;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExprFields) {
             listener.enterStructExprFields(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExprFields) {
             listener.exitStructExprFields(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExprFields) {
            return visitor.visitStructExprFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExprFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public tupleIndex(): TupleIndexContext | null {
        return this.getRuleContext(0, TupleIndexContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExprField;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExprField) {
             listener.enterStructExprField(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExprField) {
             listener.exitStructExprField(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExprField) {
            return visitor.visitStructExprField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructBaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOT, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structBase;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructBase) {
             listener.enterStructBase(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructBase) {
             listener.exitStructBase(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructBase) {
            return visitor.visitStructBase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExprTupleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExprTuple;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExprTuple) {
             listener.enterStructExprTuple(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExprTuple) {
             listener.exitStructExprTuple(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExprTuple) {
            return visitor.visitStructExprTuple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExprUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExprUnit;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExprUnit) {
             listener.enterStructExprUnit(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExprUnit) {
             listener.exitStructExprUnit(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExprUnit) {
            return visitor.visitStructExprUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumerationVariantExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumExprStruct(): EnumExprStructContext | null {
        return this.getRuleContext(0, EnumExprStructContext);
    }
    public enumExprTuple(): EnumExprTupleContext | null {
        return this.getRuleContext(0, EnumExprTupleContext);
    }
    public enumExprFieldless(): EnumExprFieldlessContext | null {
        return this.getRuleContext(0, EnumExprFieldlessContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumerationVariantExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumerationVariantExpression) {
             listener.enterEnumerationVariantExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumerationVariantExpression) {
             listener.exitEnumerationVariantExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumerationVariantExpression) {
            return visitor.visitEnumerationVariantExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumExprStructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public enumExprFields(): EnumExprFieldsContext | null {
        return this.getRuleContext(0, EnumExprFieldsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumExprStruct;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumExprStruct) {
             listener.enterEnumExprStruct(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumExprStruct) {
             listener.exitEnumExprStruct(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumExprStruct) {
            return visitor.visitEnumExprStruct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumExprFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumExprField(): EnumExprFieldContext[];
    public enumExprField(i: number): EnumExprFieldContext | null;
    public enumExprField(i?: number): EnumExprFieldContext[] | EnumExprFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumExprFieldContext);
        }

        return this.getRuleContext(i, EnumExprFieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumExprFields;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumExprFields) {
             listener.enterEnumExprFields(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumExprFields) {
             listener.exitEnumExprFields(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumExprFields) {
            return visitor.visitEnumExprFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumExprFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public tupleIndex(): TupleIndexContext | null {
        return this.getRuleContext(0, TupleIndexContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumExprField;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumExprField) {
             listener.enterEnumExprField(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumExprField) {
             listener.exitEnumExprField(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumExprField) {
            return visitor.visitEnumExprField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumExprTupleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumExprTuple;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumExprTuple) {
             listener.enterEnumExprTuple(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumExprTuple) {
             listener.exitEnumExprTuple(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumExprTuple) {
            return visitor.visitEnumExprTuple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumExprFieldlessContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumExprFieldless;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumExprFieldless) {
             listener.enterEnumExprFieldless(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumExprFieldless) {
             listener.exitEnumExprFieldless(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumExprFieldless) {
            return visitor.visitEnumExprFieldless(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_callParams;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCallParams) {
             listener.enterCallParams(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCallParams) {
             listener.exitCallParams(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCallParams) {
            return visitor.visitCallParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClosureExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OROR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OROR, 0);
    }
    public OR(): antlr.TerminalNode[];
    public OR(i: number): antlr.TerminalNode | null;
    public OR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.OR);
    	} else {
    		return this.getToken(RustParser.OR, i);
    	}
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RARROW(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RARROW, 0);
    }
    public typeNoBounds(): TypeNoBoundsContext | null {
        return this.getRuleContext(0, TypeNoBoundsContext);
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public KW_MOVE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MOVE, 0);
    }
    public closureParameters(): ClosureParametersContext | null {
        return this.getRuleContext(0, ClosureParametersContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_closureExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterClosureExpression) {
             listener.enterClosureExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitClosureExpression) {
             listener.exitClosureExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitClosureExpression) {
            return visitor.visitClosureExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClosureParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public closureParam(): ClosureParamContext[];
    public closureParam(i: number): ClosureParamContext | null;
    public closureParam(i?: number): ClosureParamContext[] | ClosureParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClosureParamContext);
        }

        return this.getRuleContext(i, ClosureParamContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_closureParameters;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterClosureParameters) {
             listener.enterClosureParameters(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitClosureParameters) {
             listener.exitClosureParameters(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitClosureParameters) {
            return visitor.visitClosureParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClosureParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_closureParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterClosureParam) {
             listener.enterClosureParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitClosureParam) {
             listener.exitClosureParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitClosureParam) {
            return visitor.visitClosureParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public infiniteLoopExpression(): InfiniteLoopExpressionContext | null {
        return this.getRuleContext(0, InfiniteLoopExpressionContext);
    }
    public predicateLoopExpression(): PredicateLoopExpressionContext | null {
        return this.getRuleContext(0, PredicateLoopExpressionContext);
    }
    public predicatePatternLoopExpression(): PredicatePatternLoopExpressionContext | null {
        return this.getRuleContext(0, PredicatePatternLoopExpressionContext);
    }
    public iteratorLoopExpression(): IteratorLoopExpressionContext | null {
        return this.getRuleContext(0, IteratorLoopExpressionContext);
    }
    public loopLabel(): LoopLabelContext | null {
        return this.getRuleContext(0, LoopLabelContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_loopExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLoopExpression) {
             listener.enterLoopExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLoopExpression) {
             listener.exitLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLoopExpression) {
            return visitor.visitLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InfiniteLoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LOOP(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_LOOP, 0)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_infiniteLoopExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterInfiniteLoopExpression) {
             listener.enterInfiniteLoopExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitInfiniteLoopExpression) {
             listener.exitInfiniteLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitInfiniteLoopExpression) {
            return visitor.visitInfiniteLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileBlockExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_whileBlockExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterWhileBlockExpression) {
             listener.enterWhileBlockExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitWhileBlockExpression) {
             listener.exitWhileBlockExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitWhileBlockExpression) {
            return visitor.visitWhileBlockExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicateLoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHILE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_WHILE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public whileBlockExpression(): WhileBlockExpressionContext {
        return this.getRuleContext(0, WhileBlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_predicateLoopExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPredicateLoopExpression) {
             listener.enterPredicateLoopExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPredicateLoopExpression) {
             listener.exitPredicateLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPredicateLoopExpression) {
            return visitor.visitPredicateLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicatePatternLoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHILE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_WHILE, 0)!;
    }
    public KW_LET(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_LET, 0)!;
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(RustParser.EQ, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_predicatePatternLoopExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPredicatePatternLoopExpression) {
             listener.enterPredicatePatternLoopExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPredicatePatternLoopExpression) {
             listener.exitPredicatePatternLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPredicatePatternLoopExpression) {
            return visitor.visitPredicatePatternLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IteratorLoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_FOR, 0)!;
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_iteratorLoopExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIteratorLoopExpression) {
             listener.enterIteratorLoopExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIteratorLoopExpression) {
             listener.exitIteratorLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIteratorLoopExpression) {
            return visitor.visitIteratorLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopLabelContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_loopLabel;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLoopLabel) {
             listener.enterLoopLabel(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLoopLabel) {
             listener.exitLoopLabel(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLoopLabel) {
            return visitor.visitLoopLabel(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext[];
    public blockExpression(i: number): BlockExpressionContext | null;
    public blockExpression(i?: number): BlockExpressionContext[] | BlockExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockExpressionContext);
        }

        return this.getRuleContext(i, BlockExpressionContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ELSE, 0);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public ifLetExpression(): IfLetExpressionContext | null {
        return this.getRuleContext(0, IfLetExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_ifExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIfExpression) {
             listener.enterIfExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIfExpression) {
             listener.exitIfExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIfExpression) {
            return visitor.visitIfExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfLetExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IF, 0)!;
    }
    public KW_LET(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_LET, 0)!;
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(RustParser.EQ, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext[];
    public blockExpression(i: number): BlockExpressionContext | null;
    public blockExpression(i?: number): BlockExpressionContext[] | BlockExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockExpressionContext);
        }

        return this.getRuleContext(i, BlockExpressionContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ELSE, 0);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public ifLetExpression(): IfLetExpressionContext | null {
        return this.getRuleContext(0, IfLetExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_ifLetExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIfLetExpression) {
             listener.enterIfLetExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIfLetExpression) {
             listener.exitIfLetExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIfLetExpression) {
            return visitor.visitIfLetExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MATCH(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_MATCH, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public matchArms(): MatchArmsContext | null {
        return this.getRuleContext(0, MatchArmsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_matchExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMatchExpression) {
             listener.enterMatchExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMatchExpression) {
             listener.exitMatchExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMatchExpression) {
            return visitor.visitMatchExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchArmsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public matchArm(): MatchArmContext[];
    public matchArm(i: number): MatchArmContext | null;
    public matchArm(i?: number): MatchArmContext[] | MatchArmContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MatchArmContext);
        }

        return this.getRuleContext(i, MatchArmContext);
    }
    public FATARROW(): antlr.TerminalNode[];
    public FATARROW(i: number): antlr.TerminalNode | null;
    public FATARROW(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.FATARROW);
    	} else {
    		return this.getToken(RustParser.FATARROW, i);
    	}
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public matchArmExpression(): MatchArmExpressionContext[];
    public matchArmExpression(i: number): MatchArmExpressionContext | null;
    public matchArmExpression(i?: number): MatchArmExpressionContext[] | MatchArmExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MatchArmExpressionContext);
        }

        return this.getRuleContext(i, MatchArmExpressionContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_matchArms;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMatchArms) {
             listener.enterMatchArms(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMatchArms) {
             listener.exitMatchArms(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMatchArms) {
            return visitor.visitMatchArms(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchArmExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COMMA, 0);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_matchArmExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMatchArmExpression) {
             listener.enterMatchArmExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMatchArmExpression) {
             listener.exitMatchArmExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMatchArmExpression) {
            return visitor.visitMatchArmExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchArmContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public matchArmGuard(): MatchArmGuardContext | null {
        return this.getRuleContext(0, MatchArmGuardContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_matchArm;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMatchArm) {
             listener.enterMatchArm(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMatchArm) {
             listener.exitMatchArm(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMatchArm) {
            return visitor.visitMatchArm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchArmGuardContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_matchArmGuard;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMatchArmGuard) {
             listener.enterMatchArmGuard(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMatchArmGuard) {
             listener.exitMatchArmGuard(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMatchArmGuard) {
            return visitor.visitMatchArmGuard(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public patternNoTopAlt(): PatternNoTopAltContext[];
    public patternNoTopAlt(i: number): PatternNoTopAltContext | null;
    public patternNoTopAlt(i?: number): PatternNoTopAltContext[] | PatternNoTopAltContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PatternNoTopAltContext);
        }

        return this.getRuleContext(i, PatternNoTopAltContext);
    }
    public OR(): antlr.TerminalNode[];
    public OR(i: number): antlr.TerminalNode | null;
    public OR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.OR);
    	} else {
    		return this.getToken(RustParser.OR, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPattern) {
             listener.enterPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPattern) {
             listener.exitPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPattern) {
            return visitor.visitPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternNoTopAltContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public patternWithoutRange(): PatternWithoutRangeContext | null {
        return this.getRuleContext(0, PatternWithoutRangeContext);
    }
    public rangePattern(): RangePatternContext | null {
        return this.getRuleContext(0, RangePatternContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_patternNoTopAlt;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPatternNoTopAlt) {
             listener.enterPatternNoTopAlt(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPatternNoTopAlt) {
             listener.exitPatternNoTopAlt(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPatternNoTopAlt) {
            return visitor.visitPatternNoTopAlt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternWithoutRangeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literalPattern(): LiteralPatternContext | null {
        return this.getRuleContext(0, LiteralPatternContext);
    }
    public identifierPattern(): IdentifierPatternContext | null {
        return this.getRuleContext(0, IdentifierPatternContext);
    }
    public wildcardPattern(): WildcardPatternContext | null {
        return this.getRuleContext(0, WildcardPatternContext);
    }
    public restPattern(): RestPatternContext | null {
        return this.getRuleContext(0, RestPatternContext);
    }
    public referencePattern(): ReferencePatternContext | null {
        return this.getRuleContext(0, ReferencePatternContext);
    }
    public structPattern(): StructPatternContext | null {
        return this.getRuleContext(0, StructPatternContext);
    }
    public tupleStructPattern(): TupleStructPatternContext | null {
        return this.getRuleContext(0, TupleStructPatternContext);
    }
    public tuplePattern(): TuplePatternContext | null {
        return this.getRuleContext(0, TuplePatternContext);
    }
    public groupedPattern(): GroupedPatternContext | null {
        return this.getRuleContext(0, GroupedPatternContext);
    }
    public slicePattern(): SlicePatternContext | null {
        return this.getRuleContext(0, SlicePatternContext);
    }
    public pathPattern(): PathPatternContext | null {
        return this.getRuleContext(0, PathPatternContext);
    }
    public macroInvocation(): MacroInvocationContext | null {
        return this.getRuleContext(0, MacroInvocationContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_patternWithoutRange;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPatternWithoutRange) {
             listener.enterPatternWithoutRange(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPatternWithoutRange) {
             listener.exitPatternWithoutRange(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPatternWithoutRange) {
            return visitor.visitPatternWithoutRange(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FALSE, 0);
    }
    public CHAR_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CHAR_LITERAL, 0);
    }
    public BYTE_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BYTE_LITERAL, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STRING_LITERAL, 0);
    }
    public RAW_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_STRING_LITERAL, 0);
    }
    public BYTE_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BYTE_STRING_LITERAL, 0);
    }
    public RAW_BYTE_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_BYTE_STRING_LITERAL, 0);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.INTEGER_LITERAL, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public FLOAT_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.FLOAT_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_literalPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLiteralPattern) {
             listener.enterLiteralPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLiteralPattern) {
             listener.exitLiteralPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralPattern) {
            return visitor.visitLiteralPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_REF(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_REF, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public AT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AT, 0);
    }
    public pattern(): PatternContext | null {
        return this.getRuleContext(0, PatternContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_identifierPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIdentifierPattern) {
             listener.enterIdentifierPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIdentifierPattern) {
             listener.exitIdentifierPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierPattern) {
            return visitor.visitIdentifierPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WildcardPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNDERSCORE(): antlr.TerminalNode {
        return this.getToken(RustParser.UNDERSCORE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_wildcardPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterWildcardPattern) {
             listener.enterWildcardPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitWildcardPattern) {
             listener.exitWildcardPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitWildcardPattern) {
            return visitor.visitWildcardPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RestPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOT, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_restPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterRestPattern) {
             listener.enterRestPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitRestPattern) {
             listener.exitRestPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitRestPattern) {
            return visitor.visitRestPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RangePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_rangePattern;
    }
    public override copyFrom(ctx: RangePatternContext): void {
        super.copyFrom(ctx);
    }
}
export class InclusiveRangePatternContext extends RangePatternContext {
    public constructor(ctx: RangePatternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public rangePatternBound(): RangePatternBoundContext[];
    public rangePatternBound(i: number): RangePatternBoundContext | null;
    public rangePatternBound(i?: number): RangePatternBoundContext[] | RangePatternBoundContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RangePatternBoundContext);
        }

        return this.getRuleContext(i, RangePatternBoundContext);
    }
    public DOTDOTEQ(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOTEQ, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterInclusiveRangePattern) {
             listener.enterInclusiveRangePattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitInclusiveRangePattern) {
             listener.exitInclusiveRangePattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitInclusiveRangePattern) {
            return visitor.visitInclusiveRangePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObsoleteRangePatternContext extends RangePatternContext {
    public constructor(ctx: RangePatternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public rangePatternBound(): RangePatternBoundContext[];
    public rangePatternBound(i: number): RangePatternBoundContext | null;
    public rangePatternBound(i?: number): RangePatternBoundContext[] | RangePatternBoundContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RangePatternBoundContext);
        }

        return this.getRuleContext(i, RangePatternBoundContext);
    }
    public DOTDOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOTDOT, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterObsoleteRangePattern) {
             listener.enterObsoleteRangePattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitObsoleteRangePattern) {
             listener.exitObsoleteRangePattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitObsoleteRangePattern) {
            return visitor.visitObsoleteRangePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class HalfOpenRangePatternContext extends RangePatternContext {
    public constructor(ctx: RangePatternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public rangePatternBound(): RangePatternBoundContext {
        return this.getRuleContext(0, RangePatternBoundContext)!;
    }
    public DOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOT, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterHalfOpenRangePattern) {
             listener.enterHalfOpenRangePattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitHalfOpenRangePattern) {
             listener.exitHalfOpenRangePattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitHalfOpenRangePattern) {
            return visitor.visitHalfOpenRangePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RangePatternBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CHAR_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CHAR_LITERAL, 0);
    }
    public BYTE_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BYTE_LITERAL, 0);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.INTEGER_LITERAL, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public FLOAT_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.FLOAT_LITERAL, 0);
    }
    public pathPattern(): PathPatternContext | null {
        return this.getRuleContext(0, PathPatternContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_rangePatternBound;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterRangePatternBound) {
             listener.enterRangePatternBound(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitRangePatternBound) {
             listener.exitRangePatternBound(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitRangePatternBound) {
            return visitor.visitRangePatternBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReferencePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public patternWithoutRange(): PatternWithoutRangeContext {
        return this.getRuleContext(0, PatternWithoutRangeContext)!;
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AND, 0);
    }
    public ANDAND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ANDAND, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_referencePattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterReferencePattern) {
             listener.enterReferencePattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitReferencePattern) {
             listener.exitReferencePattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitReferencePattern) {
            return visitor.visitReferencePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public structPatternElements(): StructPatternElementsContext | null {
        return this.getRuleContext(0, StructPatternElementsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructPattern) {
             listener.enterStructPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructPattern) {
             listener.exitStructPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructPattern) {
            return visitor.visitStructPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructPatternElementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structPatternFields(): StructPatternFieldsContext | null {
        return this.getRuleContext(0, StructPatternFieldsContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COMMA, 0);
    }
    public structPatternEtCetera(): StructPatternEtCeteraContext | null {
        return this.getRuleContext(0, StructPatternEtCeteraContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structPatternElements;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructPatternElements) {
             listener.enterStructPatternElements(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructPatternElements) {
             listener.exitStructPatternElements(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructPatternElements) {
            return visitor.visitStructPatternElements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructPatternFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structPatternField(): StructPatternFieldContext[];
    public structPatternField(i: number): StructPatternFieldContext | null;
    public structPatternField(i?: number): StructPatternFieldContext[] | StructPatternFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructPatternFieldContext);
        }

        return this.getRuleContext(i, StructPatternFieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structPatternFields;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructPatternFields) {
             listener.enterStructPatternFields(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructPatternFields) {
             listener.exitStructPatternFields(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructPatternFields) {
            return visitor.visitStructPatternFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructPatternFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tupleIndex(): TupleIndexContext | null {
        return this.getRuleContext(0, TupleIndexContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public pattern(): PatternContext | null {
        return this.getRuleContext(0, PatternContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public KW_REF(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_REF, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structPatternField;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructPatternField) {
             listener.enterStructPatternField(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructPatternField) {
             listener.exitStructPatternField(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructPatternField) {
            return visitor.visitStructPatternField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructPatternEtCeteraContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOT, 0)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structPatternEtCetera;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructPatternEtCetera) {
             listener.enterStructPatternEtCetera(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructPatternEtCetera) {
             listener.exitStructPatternEtCetera(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructPatternEtCetera) {
            return visitor.visitStructPatternEtCetera(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleStructPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public tupleStructItems(): TupleStructItemsContext | null {
        return this.getRuleContext(0, TupleStructItemsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleStructPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleStructPattern) {
             listener.enterTupleStructPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleStructPattern) {
             listener.exitTupleStructPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleStructPattern) {
            return visitor.visitTupleStructPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleStructItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext[];
    public pattern(i: number): PatternContext | null;
    public pattern(i?: number): PatternContext[] | PatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PatternContext);
        }

        return this.getRuleContext(i, PatternContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleStructItems;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleStructItems) {
             listener.enterTupleStructItems(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleStructItems) {
             listener.exitTupleStructItems(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleStructItems) {
            return visitor.visitTupleStructItems(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TuplePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public tuplePatternItems(): TuplePatternItemsContext | null {
        return this.getRuleContext(0, TuplePatternItemsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tuplePattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTuplePattern) {
             listener.enterTuplePattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTuplePattern) {
             listener.exitTuplePattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTuplePattern) {
            return visitor.visitTuplePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TuplePatternItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext[];
    public pattern(i: number): PatternContext | null;
    public pattern(i?: number): PatternContext[] | PatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PatternContext);
        }

        return this.getRuleContext(i, PatternContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public restPattern(): RestPatternContext | null {
        return this.getRuleContext(0, RestPatternContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tuplePatternItems;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTuplePatternItems) {
             listener.enterTuplePatternItems(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTuplePatternItems) {
             listener.exitTuplePatternItems(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTuplePatternItems) {
            return visitor.visitTuplePatternItems(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupedPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_groupedPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGroupedPattern) {
             listener.enterGroupedPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGroupedPattern) {
             listener.exitGroupedPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGroupedPattern) {
            return visitor.visitGroupedPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SlicePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public slicePatternItems(): SlicePatternItemsContext | null {
        return this.getRuleContext(0, SlicePatternItemsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_slicePattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSlicePattern) {
             listener.enterSlicePattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSlicePattern) {
             listener.exitSlicePattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSlicePattern) {
            return visitor.visitSlicePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SlicePatternItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext[];
    public pattern(i: number): PatternContext | null;
    public pattern(i?: number): PatternContext[] | PatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PatternContext);
        }

        return this.getRuleContext(i, PatternContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_slicePatternItems;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSlicePatternItems) {
             listener.enterSlicePatternItems(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSlicePatternItems) {
             listener.exitSlicePatternItems(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSlicePatternItems) {
            return visitor.visitSlicePatternItems(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext | null {
        return this.getRuleContext(0, PathInExpressionContext);
    }
    public qualifiedPathInExpression(): QualifiedPathInExpressionContext | null {
        return this.getRuleContext(0, QualifiedPathInExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pathPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathPattern) {
             listener.enterPathPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathPattern) {
             listener.exitPathPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathPattern) {
            return visitor.visitPathPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Type_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeNoBounds(): TypeNoBoundsContext | null {
        return this.getRuleContext(0, TypeNoBoundsContext);
    }
    public implTraitType(): ImplTraitTypeContext | null {
        return this.getRuleContext(0, ImplTraitTypeContext);
    }
    public traitObjectType(): TraitObjectTypeContext | null {
        return this.getRuleContext(0, TraitObjectTypeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_type_;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterType_) {
             listener.enterType_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitType_) {
             listener.exitType_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitType_) {
            return visitor.visitType_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeNoBoundsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parenthesizedType(): ParenthesizedTypeContext | null {
        return this.getRuleContext(0, ParenthesizedTypeContext);
    }
    public implTraitTypeOneBound(): ImplTraitTypeOneBoundContext | null {
        return this.getRuleContext(0, ImplTraitTypeOneBoundContext);
    }
    public traitObjectTypeOneBound(): TraitObjectTypeOneBoundContext | null {
        return this.getRuleContext(0, TraitObjectTypeOneBoundContext);
    }
    public typePath(): TypePathContext | null {
        return this.getRuleContext(0, TypePathContext);
    }
    public tupleType(): TupleTypeContext | null {
        return this.getRuleContext(0, TupleTypeContext);
    }
    public neverType(): NeverTypeContext | null {
        return this.getRuleContext(0, NeverTypeContext);
    }
    public rawPointerType(): RawPointerTypeContext | null {
        return this.getRuleContext(0, RawPointerTypeContext);
    }
    public referenceType(): ReferenceTypeContext | null {
        return this.getRuleContext(0, ReferenceTypeContext);
    }
    public arrayType(): ArrayTypeContext | null {
        return this.getRuleContext(0, ArrayTypeContext);
    }
    public sliceType(): SliceTypeContext | null {
        return this.getRuleContext(0, SliceTypeContext);
    }
    public inferredType(): InferredTypeContext | null {
        return this.getRuleContext(0, InferredTypeContext);
    }
    public qualifiedPathInType(): QualifiedPathInTypeContext | null {
        return this.getRuleContext(0, QualifiedPathInTypeContext);
    }
    public bareFunctionType(): BareFunctionTypeContext | null {
        return this.getRuleContext(0, BareFunctionTypeContext);
    }
    public macroInvocation(): MacroInvocationContext | null {
        return this.getRuleContext(0, MacroInvocationContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeNoBounds;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeNoBounds) {
             listener.enterTypeNoBounds(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeNoBounds) {
             listener.exitTypeNoBounds(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeNoBounds) {
            return visitor.visitTypeNoBounds(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParenthesizedTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_parenthesizedType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterParenthesizedType) {
             listener.enterParenthesizedType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitParenthesizedType) {
             listener.exitParenthesizedType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedType) {
            return visitor.visitParenthesizedType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NeverTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(RustParser.NOT, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_neverType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterNeverType) {
             listener.enterNeverType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitNeverType) {
             listener.exitNeverType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitNeverType) {
            return visitor.visitNeverType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public type_(): Type_Context[];
    public type_(i: number): Type_Context | null;
    public type_(i?: number): Type_Context[] | Type_Context | null {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }

        return this.getRuleContext(i, Type_Context);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleType) {
             listener.enterTupleType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleType) {
             listener.exitTupleType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleType) {
            return visitor.visitTupleType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_arrayType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterArrayType) {
             listener.enterArrayType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitArrayType) {
             listener.exitArrayType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitArrayType) {
            return visitor.visitArrayType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SliceTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_sliceType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSliceType) {
             listener.enterSliceType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSliceType) {
             listener.exitSliceType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSliceType) {
            return visitor.visitSliceType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReferenceTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(RustParser.AND, 0)!;
    }
    public typeNoBounds(): TypeNoBoundsContext {
        return this.getRuleContext(0, TypeNoBoundsContext)!;
    }
    public lifetime(): LifetimeContext | null {
        return this.getRuleContext(0, LifetimeContext);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_referenceType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterReferenceType) {
             listener.enterReferenceType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitReferenceType) {
             listener.exitReferenceType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitReferenceType) {
            return visitor.visitReferenceType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RawPointerTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(RustParser.STAR, 0)!;
    }
    public typeNoBounds(): TypeNoBoundsContext {
        return this.getRuleContext(0, TypeNoBoundsContext)!;
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public KW_CONST(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CONST, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_rawPointerType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterRawPointerType) {
             listener.enterRawPointerType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitRawPointerType) {
             listener.exitRawPointerType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitRawPointerType) {
            return visitor.visitRawPointerType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BareFunctionTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionTypeQualifiers(): FunctionTypeQualifiersContext {
        return this.getRuleContext(0, FunctionTypeQualifiersContext)!;
    }
    public KW_FN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_FN, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public forLifetimes(): ForLifetimesContext | null {
        return this.getRuleContext(0, ForLifetimesContext);
    }
    public functionParametersMaybeNamedVariadic(): FunctionParametersMaybeNamedVariadicContext | null {
        return this.getRuleContext(0, FunctionParametersMaybeNamedVariadicContext);
    }
    public bareFunctionReturnType(): BareFunctionReturnTypeContext | null {
        return this.getRuleContext(0, BareFunctionReturnTypeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_bareFunctionType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterBareFunctionType) {
             listener.enterBareFunctionType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitBareFunctionType) {
             listener.exitBareFunctionType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitBareFunctionType) {
            return visitor.visitBareFunctionType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionTypeQualifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public KW_EXTERN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_EXTERN, 0);
    }
    public abi(): AbiContext | null {
        return this.getRuleContext(0, AbiContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionTypeQualifiers;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionTypeQualifiers) {
             listener.enterFunctionTypeQualifiers(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionTypeQualifiers) {
             listener.exitFunctionTypeQualifiers(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionTypeQualifiers) {
            return visitor.visitFunctionTypeQualifiers(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BareFunctionReturnTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RARROW(): antlr.TerminalNode {
        return this.getToken(RustParser.RARROW, 0)!;
    }
    public typeNoBounds(): TypeNoBoundsContext {
        return this.getRuleContext(0, TypeNoBoundsContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_bareFunctionReturnType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterBareFunctionReturnType) {
             listener.enterBareFunctionReturnType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitBareFunctionReturnType) {
             listener.exitBareFunctionReturnType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitBareFunctionReturnType) {
            return visitor.visitBareFunctionReturnType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParametersMaybeNamedVariadicContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public maybeNamedFunctionParameters(): MaybeNamedFunctionParametersContext | null {
        return this.getRuleContext(0, MaybeNamedFunctionParametersContext);
    }
    public maybeNamedFunctionParametersVariadic(): MaybeNamedFunctionParametersVariadicContext | null {
        return this.getRuleContext(0, MaybeNamedFunctionParametersVariadicContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionParametersMaybeNamedVariadic;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionParametersMaybeNamedVariadic) {
             listener.enterFunctionParametersMaybeNamedVariadic(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionParametersMaybeNamedVariadic) {
             listener.exitFunctionParametersMaybeNamedVariadic(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionParametersMaybeNamedVariadic) {
            return visitor.visitFunctionParametersMaybeNamedVariadic(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MaybeNamedFunctionParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public maybeNamedParam(): MaybeNamedParamContext[];
    public maybeNamedParam(i: number): MaybeNamedParamContext | null;
    public maybeNamedParam(i?: number): MaybeNamedParamContext[] | MaybeNamedParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MaybeNamedParamContext);
        }

        return this.getRuleContext(i, MaybeNamedParamContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_maybeNamedFunctionParameters;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMaybeNamedFunctionParameters) {
             listener.enterMaybeNamedFunctionParameters(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMaybeNamedFunctionParameters) {
             listener.exitMaybeNamedFunctionParameters(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMaybeNamedFunctionParameters) {
            return visitor.visitMaybeNamedFunctionParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MaybeNamedParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.UNDERSCORE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_maybeNamedParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMaybeNamedParam) {
             listener.enterMaybeNamedParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMaybeNamedParam) {
             listener.exitMaybeNamedParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMaybeNamedParam) {
            return visitor.visitMaybeNamedParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MaybeNamedFunctionParametersVariadicContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public maybeNamedParam(): MaybeNamedParamContext[];
    public maybeNamedParam(i: number): MaybeNamedParamContext | null;
    public maybeNamedParam(i?: number): MaybeNamedParamContext[] | MaybeNamedParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MaybeNamedParamContext);
        }

        return this.getRuleContext(i, MaybeNamedParamContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public DOTDOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOTDOT, 0)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_maybeNamedFunctionParametersVariadic;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMaybeNamedFunctionParametersVariadic) {
             listener.enterMaybeNamedFunctionParametersVariadic(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMaybeNamedFunctionParametersVariadic) {
             listener.exitMaybeNamedFunctionParametersVariadic(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMaybeNamedFunctionParametersVariadic) {
            return visitor.visitMaybeNamedFunctionParametersVariadic(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraitObjectTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeParamBounds(): TypeParamBoundsContext {
        return this.getRuleContext(0, TypeParamBoundsContext)!;
    }
    public KW_DYN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DYN, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_traitObjectType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTraitObjectType) {
             listener.enterTraitObjectType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTraitObjectType) {
             listener.exitTraitObjectType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTraitObjectType) {
            return visitor.visitTraitObjectType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraitObjectTypeOneBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public traitBound(): TraitBoundContext {
        return this.getRuleContext(0, TraitBoundContext)!;
    }
    public KW_DYN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DYN, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_traitObjectTypeOneBound;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTraitObjectTypeOneBound) {
             listener.enterTraitObjectTypeOneBound(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTraitObjectTypeOneBound) {
             listener.exitTraitObjectTypeOneBound(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTraitObjectTypeOneBound) {
            return visitor.visitTraitObjectTypeOneBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImplTraitTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IMPL(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IMPL, 0)!;
    }
    public typeParamBounds(): TypeParamBoundsContext {
        return this.getRuleContext(0, TypeParamBoundsContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_implTraitType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterImplTraitType) {
             listener.enterImplTraitType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitImplTraitType) {
             listener.exitImplTraitType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitImplTraitType) {
            return visitor.visitImplTraitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImplTraitTypeOneBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IMPL(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IMPL, 0)!;
    }
    public traitBound(): TraitBoundContext {
        return this.getRuleContext(0, TraitBoundContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_implTraitTypeOneBound;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterImplTraitTypeOneBound) {
             listener.enterImplTraitTypeOneBound(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitImplTraitTypeOneBound) {
             listener.exitImplTraitTypeOneBound(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitImplTraitTypeOneBound) {
            return visitor.visitImplTraitTypeOneBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InferredTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNDERSCORE(): antlr.TerminalNode {
        return this.getToken(RustParser.UNDERSCORE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_inferredType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterInferredType) {
             listener.enterInferredType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitInferredType) {
             listener.exitInferredType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitInferredType) {
            return visitor.visitInferredType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParamBoundsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeParamBound(): TypeParamBoundContext[];
    public typeParamBound(i: number): TypeParamBoundContext | null;
    public typeParamBound(i?: number): TypeParamBoundContext[] | TypeParamBoundContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeParamBoundContext);
        }

        return this.getRuleContext(i, TypeParamBoundContext);
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PLUS);
    	} else {
    		return this.getToken(RustParser.PLUS, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeParamBounds;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeParamBounds) {
             listener.enterTypeParamBounds(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeParamBounds) {
             listener.exitTypeParamBounds(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParamBounds) {
            return visitor.visitTypeParamBounds(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParamBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetime(): LifetimeContext | null {
        return this.getRuleContext(0, LifetimeContext);
    }
    public traitBound(): TraitBoundContext | null {
        return this.getRuleContext(0, TraitBoundContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeParamBound;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeParamBound) {
             listener.enterTypeParamBound(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeParamBound) {
             listener.exitTypeParamBound(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParamBound) {
            return visitor.visitTypeParamBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraitBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typePath(): TypePathContext {
        return this.getRuleContext(0, TypePathContext)!;
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(RustParser.QUESTION, 0);
    }
    public forLifetimes(): ForLifetimesContext | null {
        return this.getRuleContext(0, ForLifetimesContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_traitBound;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTraitBound) {
             listener.enterTraitBound(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTraitBound) {
             listener.exitTraitBound(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTraitBound) {
            return visitor.visitTraitBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LifetimeBoundsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetime(): LifetimeContext[];
    public lifetime(i: number): LifetimeContext | null;
    public lifetime(i?: number): LifetimeContext[] | LifetimeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LifetimeContext);
        }

        return this.getRuleContext(i, LifetimeContext);
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PLUS);
    	} else {
    		return this.getToken(RustParser.PLUS, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_lifetimeBounds;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLifetimeBounds) {
             listener.enterLifetimeBounds(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLifetimeBounds) {
             listener.exitLifetimeBounds(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLifetimeBounds) {
            return visitor.visitLifetimeBounds(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LifetimeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0);
    }
    public KW_STATICLIFETIME(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_STATICLIFETIME, 0);
    }
    public KW_UNDERLINELIFETIME(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNDERLINELIFETIME, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_lifetime;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLifetime) {
             listener.enterLifetime(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLifetime) {
             listener.exitLifetime(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLifetime) {
            return visitor.visitLifetime(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SimplePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simplePathSegment(): SimplePathSegmentContext[];
    public simplePathSegment(i: number): SimplePathSegmentContext | null;
    public simplePathSegment(i?: number): SimplePathSegmentContext[] | SimplePathSegmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SimplePathSegmentContext);
        }

        return this.getRuleContext(i, SimplePathSegmentContext);
    }
    public PATHSEP(): antlr.TerminalNode[];
    public PATHSEP(i: number): antlr.TerminalNode | null;
    public PATHSEP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PATHSEP);
    	} else {
    		return this.getToken(RustParser.PATHSEP, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_simplePath;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSimplePath) {
             listener.enterSimplePath(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSimplePath) {
             listener.exitSimplePath(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSimplePath) {
            return visitor.visitSimplePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SimplePathSegmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_SUPER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SUPER, 0);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public KW_CRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CRATE, 0);
    }
    public KW_DOLLARCRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DOLLARCRATE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_simplePathSegment;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSimplePathSegment) {
             listener.enterSimplePathSegment(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSimplePathSegment) {
             listener.exitSimplePathSegment(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSimplePathSegment) {
            return visitor.visitSimplePathSegment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathInExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathExprSegment(): PathExprSegmentContext[];
    public pathExprSegment(i: number): PathExprSegmentContext | null;
    public pathExprSegment(i?: number): PathExprSegmentContext[] | PathExprSegmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PathExprSegmentContext);
        }

        return this.getRuleContext(i, PathExprSegmentContext);
    }
    public PATHSEP(): antlr.TerminalNode[];
    public PATHSEP(i: number): antlr.TerminalNode | null;
    public PATHSEP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PATHSEP);
    	} else {
    		return this.getToken(RustParser.PATHSEP, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pathInExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathInExpression) {
             listener.enterPathInExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathInExpression) {
             listener.exitPathInExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathInExpression) {
            return visitor.visitPathInExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathExprSegmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathIdentSegment(): PathIdentSegmentContext {
        return this.getRuleContext(0, PathIdentSegmentContext)!;
    }
    public PATHSEP(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PATHSEP, 0);
    }
    public genericArgs(): GenericArgsContext | null {
        return this.getRuleContext(0, GenericArgsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pathExprSegment;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathExprSegment) {
             listener.enterPathExprSegment(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathExprSegment) {
             listener.exitPathExprSegment(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathExprSegment) {
            return visitor.visitPathExprSegment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathIdentSegmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_SUPER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SUPER, 0);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public KW_SELFTYPE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFTYPE, 0);
    }
    public KW_CRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CRATE, 0);
    }
    public KW_DOLLARCRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DOLLARCRATE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pathIdentSegment;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathIdentSegment) {
             listener.enterPathIdentSegment(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathIdentSegment) {
             listener.exitPathIdentSegment(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathIdentSegment) {
            return visitor.visitPathIdentSegment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(RustParser.LT, 0)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(RustParser.GT, 0)!;
    }
    public genericArgsLifetimes(): GenericArgsLifetimesContext | null {
        return this.getRuleContext(0, GenericArgsLifetimesContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public genericArgsTypes(): GenericArgsTypesContext | null {
        return this.getRuleContext(0, GenericArgsTypesContext);
    }
    public genericArgsBindings(): GenericArgsBindingsContext | null {
        return this.getRuleContext(0, GenericArgsBindingsContext);
    }
    public genericArg(): GenericArgContext[];
    public genericArg(i: number): GenericArgContext | null;
    public genericArg(i?: number): GenericArgContext[] | GenericArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GenericArgContext);
        }

        return this.getRuleContext(i, GenericArgContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgs;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgs) {
             listener.enterGenericArgs(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgs) {
             listener.exitGenericArgs(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgs) {
            return visitor.visitGenericArgs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetime(): LifetimeContext | null {
        return this.getRuleContext(0, LifetimeContext);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public genericArgsConst(): GenericArgsConstContext | null {
        return this.getRuleContext(0, GenericArgsConstContext);
    }
    public genericArgsBinding(): GenericArgsBindingContext | null {
        return this.getRuleContext(0, GenericArgsBindingContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArg;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArg) {
             listener.enterGenericArg(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArg) {
             listener.exitGenericArg(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArg) {
            return visitor.visitGenericArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsConstContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public literalExpression(): LiteralExpressionContext | null {
        return this.getRuleContext(0, LiteralExpressionContext);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public simplePathSegment(): SimplePathSegmentContext | null {
        return this.getRuleContext(0, SimplePathSegmentContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgsConst;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgsConst) {
             listener.enterGenericArgsConst(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgsConst) {
             listener.exitGenericArgsConst(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgsConst) {
            return visitor.visitGenericArgsConst(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsLifetimesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetime(): LifetimeContext[];
    public lifetime(i: number): LifetimeContext | null;
    public lifetime(i?: number): LifetimeContext[] | LifetimeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LifetimeContext);
        }

        return this.getRuleContext(i, LifetimeContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgsLifetimes;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgsLifetimes) {
             listener.enterGenericArgsLifetimes(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgsLifetimes) {
             listener.exitGenericArgsLifetimes(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgsLifetimes) {
            return visitor.visitGenericArgsLifetimes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsTypesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): Type_Context[];
    public type_(i: number): Type_Context | null;
    public type_(i?: number): Type_Context[] | Type_Context | null {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }

        return this.getRuleContext(i, Type_Context);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgsTypes;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgsTypes) {
             listener.enterGenericArgsTypes(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgsTypes) {
             listener.exitGenericArgsTypes(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgsTypes) {
            return visitor.visitGenericArgsTypes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsBindingsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public genericArgsBinding(): GenericArgsBindingContext[];
    public genericArgsBinding(i: number): GenericArgsBindingContext | null;
    public genericArgsBinding(i?: number): GenericArgsBindingContext[] | GenericArgsBindingContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GenericArgsBindingContext);
        }

        return this.getRuleContext(i, GenericArgsBindingContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgsBindings;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgsBindings) {
             listener.enterGenericArgsBindings(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgsBindings) {
             listener.exitGenericArgsBindings(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgsBindings) {
            return visitor.visitGenericArgsBindings(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsBindingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(RustParser.EQ, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgsBinding;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgsBinding) {
             listener.enterGenericArgsBinding(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgsBinding) {
             listener.exitGenericArgsBinding(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgsBinding) {
            return visitor.visitGenericArgsBinding(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedPathInExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedPathType(): QualifiedPathTypeContext {
        return this.getRuleContext(0, QualifiedPathTypeContext)!;
    }
    public PATHSEP(): antlr.TerminalNode[];
    public PATHSEP(i: number): antlr.TerminalNode | null;
    public PATHSEP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PATHSEP);
    	} else {
    		return this.getToken(RustParser.PATHSEP, i);
    	}
    }
    public pathExprSegment(): PathExprSegmentContext[];
    public pathExprSegment(i: number): PathExprSegmentContext | null;
    public pathExprSegment(i?: number): PathExprSegmentContext[] | PathExprSegmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PathExprSegmentContext);
        }

        return this.getRuleContext(i, PathExprSegmentContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_qualifiedPathInExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterQualifiedPathInExpression) {
             listener.enterQualifiedPathInExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitQualifiedPathInExpression) {
             listener.exitQualifiedPathInExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedPathInExpression) {
            return visitor.visitQualifiedPathInExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedPathTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(RustParser.LT, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(RustParser.GT, 0)!;
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_AS, 0);
    }
    public typePath(): TypePathContext | null {
        return this.getRuleContext(0, TypePathContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_qualifiedPathType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterQualifiedPathType) {
             listener.enterQualifiedPathType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitQualifiedPathType) {
             listener.exitQualifiedPathType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedPathType) {
            return visitor.visitQualifiedPathType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedPathInTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedPathType(): QualifiedPathTypeContext {
        return this.getRuleContext(0, QualifiedPathTypeContext)!;
    }
    public PATHSEP(): antlr.TerminalNode[];
    public PATHSEP(i: number): antlr.TerminalNode | null;
    public PATHSEP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PATHSEP);
    	} else {
    		return this.getToken(RustParser.PATHSEP, i);
    	}
    }
    public typePathSegment(): TypePathSegmentContext[];
    public typePathSegment(i: number): TypePathSegmentContext | null;
    public typePathSegment(i?: number): TypePathSegmentContext[] | TypePathSegmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypePathSegmentContext);
        }

        return this.getRuleContext(i, TypePathSegmentContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_qualifiedPathInType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterQualifiedPathInType) {
             listener.enterQualifiedPathInType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitQualifiedPathInType) {
             listener.exitQualifiedPathInType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedPathInType) {
            return visitor.visitQualifiedPathInType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typePathSegment(): TypePathSegmentContext[];
    public typePathSegment(i: number): TypePathSegmentContext | null;
    public typePathSegment(i?: number): TypePathSegmentContext[] | TypePathSegmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypePathSegmentContext);
        }

        return this.getRuleContext(i, TypePathSegmentContext);
    }
    public PATHSEP(): antlr.TerminalNode[];
    public PATHSEP(i: number): antlr.TerminalNode | null;
    public PATHSEP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PATHSEP);
    	} else {
    		return this.getToken(RustParser.PATHSEP, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typePath;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypePath) {
             listener.enterTypePath(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypePath) {
             listener.exitTypePath(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypePath) {
            return visitor.visitTypePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypePathSegmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathIdentSegment(): PathIdentSegmentContext {
        return this.getRuleContext(0, PathIdentSegmentContext)!;
    }
    public PATHSEP(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PATHSEP, 0);
    }
    public genericArgs(): GenericArgsContext | null {
        return this.getRuleContext(0, GenericArgsContext);
    }
    public typePathFn(): TypePathFnContext | null {
        return this.getRuleContext(0, TypePathFnContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typePathSegment;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypePathSegment) {
             listener.enterTypePathSegment(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypePathSegment) {
             listener.exitTypePathSegment(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypePathSegment) {
            return visitor.visitTypePathSegment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypePathFnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public typePathInputs(): TypePathInputsContext | null {
        return this.getRuleContext(0, TypePathInputsContext);
    }
    public RARROW(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RARROW, 0);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typePathFn;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypePathFn) {
             listener.enterTypePathFn(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypePathFn) {
             listener.exitTypePathFn(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypePathFn) {
            return visitor.visitTypePathFn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypePathInputsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): Type_Context[];
    public type_(i: number): Type_Context | null;
    public type_(i?: number): Type_Context[] | Type_Context | null {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }

        return this.getRuleContext(i, Type_Context);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typePathInputs;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypePathInputs) {
             listener.enterTypePathInputs(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypePathInputs) {
             listener.exitTypePathInputs(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypePathInputs) {
            return visitor.visitTypePathInputs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VisibilityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PUB(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_PUB, 0)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public KW_CRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CRATE, 0);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public KW_SUPER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SUPER, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_IN, 0);
    }
    public simplePath(): SimplePathContext | null {
        return this.getRuleContext(0, SimplePathContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_visibility;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterVisibility) {
             listener.enterVisibility(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitVisibility) {
             listener.exitVisibility(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitVisibility) {
            return visitor.visitVisibility(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NON_KEYWORD_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NON_KEYWORD_IDENTIFIER, 0);
    }
    public RAW_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_IDENTIFIER, 0);
    }
    public KW_MACRORULES(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MACRORULES, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_identifier;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeywordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_AS, 0);
    }
    public KW_BREAK(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_BREAK, 0);
    }
    public KW_CONST(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CONST, 0);
    }
    public KW_CONTINUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CONTINUE, 0);
    }
    public KW_CRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CRATE, 0);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ELSE, 0);
    }
    public KW_ENUM(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ENUM, 0);
    }
    public KW_EXTERN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_EXTERN, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FALSE, 0);
    }
    public KW_FN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FN, 0);
    }
    public KW_FOR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FOR, 0);
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_IF, 0);
    }
    public KW_IMPL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_IMPL, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_IN, 0);
    }
    public KW_LET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_LET, 0);
    }
    public KW_LOOP(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_LOOP, 0);
    }
    public KW_MATCH(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MATCH, 0);
    }
    public KW_MOD(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MOD, 0);
    }
    public KW_MOVE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MOVE, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public KW_PUB(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_PUB, 0);
    }
    public KW_REF(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_REF, 0);
    }
    public KW_RETURN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_RETURN, 0);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public KW_SELFTYPE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFTYPE, 0);
    }
    public KW_STATIC(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_STATIC, 0);
    }
    public KW_STRUCT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_STRUCT, 0);
    }
    public KW_SUPER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SUPER, 0);
    }
    public KW_TRAIT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TRAIT, 0);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TRUE, 0);
    }
    public KW_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TYPE, 0);
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public KW_USE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_USE, 0);
    }
    public KW_WHERE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_WHERE, 0);
    }
    public KW_WHILE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_WHILE, 0);
    }
    public KW_ASYNC(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ASYNC, 0);
    }
    public KW_AWAIT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_AWAIT, 0);
    }
    public KW_DYN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DYN, 0);
    }
    public KW_ABSTRACT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ABSTRACT, 0);
    }
    public KW_BECOME(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_BECOME, 0);
    }
    public KW_BOX(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_BOX, 0);
    }
    public KW_DO(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DO, 0);
    }
    public KW_FINAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FINAL, 0);
    }
    public KW_MACRO(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MACRO, 0);
    }
    public KW_OVERRIDE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_OVERRIDE, 0);
    }
    public KW_PRIV(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_PRIV, 0);
    }
    public KW_TYPEOF(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TYPEOF, 0);
    }
    public KW_UNSIZED(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSIZED, 0);
    }
    public KW_VIRTUAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_VIRTUAL, 0);
    }
    public KW_YIELD(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_YIELD, 0);
    }
    public KW_TRY(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TRY, 0);
    }
    public KW_UNION(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNION, 0);
    }
    public KW_STATICLIFETIME(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_STATICLIFETIME, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_keyword;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterKeyword) {
             listener.enterKeyword(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitKeyword) {
             listener.exitKeyword(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroIdentifierLikeTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public keyword(): KeywordContext | null {
        return this.getRuleContext(0, KeywordContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_MACRORULES(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MACRORULES, 0);
    }
    public KW_UNDERLINELIFETIME(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNDERLINELIFETIME, 0);
    }
    public KW_DOLLARCRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DOLLARCRATE, 0);
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroIdentifierLikeToken;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroIdentifierLikeToken) {
             listener.enterMacroIdentifierLikeToken(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroIdentifierLikeToken) {
             listener.exitMacroIdentifierLikeToken(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroIdentifierLikeToken) {
            return visitor.visitMacroIdentifierLikeToken(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroLiteralTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literalExpression(): LiteralExpressionContext {
        return this.getRuleContext(0, LiteralExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroLiteralToken;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroLiteralToken) {
             listener.enterMacroLiteralToken(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroLiteralToken) {
             listener.exitMacroLiteralToken(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroLiteralToken) {
            return visitor.visitMacroLiteralToken(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroPunctuationTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SLASH, 0);
    }
    public PERCENT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PERCENT, 0);
    }
    public CARET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CARET, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NOT, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AND, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OR, 0);
    }
    public ANDAND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ANDAND, 0);
    }
    public OROR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OROR, 0);
    }
    public PLUSEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PLUSEQ, 0);
    }
    public MINUSEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUSEQ, 0);
    }
    public STAREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAREQ, 0);
    }
    public SLASHEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SLASHEQ, 0);
    }
    public PERCENTEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PERCENTEQ, 0);
    }
    public CARETEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CARETEQ, 0);
    }
    public ANDEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ANDEQ, 0);
    }
    public OREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OREQ, 0);
    }
    public SHLEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SHLEQ, 0);
    }
    public SHREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SHREQ, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public EQEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQEQ, 0);
    }
    public NE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GT, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LT, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GE, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LE, 0);
    }
    public AT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AT, 0);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.UNDERSCORE, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOT, 0);
    }
    public DOTDOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOT, 0);
    }
    public DOTDOTDOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOTDOT, 0);
    }
    public DOTDOTEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOTEQ, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COMMA, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public PATHSEP(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PATHSEP, 0);
    }
    public RARROW(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RARROW, 0);
    }
    public FATARROW(): antlr.TerminalNode | null {
        return this.getToken(RustParser.FATARROW, 0);
    }
    public POUND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.POUND, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroPunctuationToken;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroPunctuationToken) {
             listener.enterMacroPunctuationToken(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroPunctuationToken) {
             listener.exitMacroPunctuationToken(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroPunctuationToken) {
            return visitor.visitMacroPunctuationToken(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShlContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode[];
    public LT(i: number): antlr.TerminalNode | null;
    public LT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.LT);
    	} else {
    		return this.getToken(RustParser.LT, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_shl;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterShl) {
             listener.enterShl(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitShl) {
             listener.exitShl(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitShl) {
            return visitor.visitShl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GT(): antlr.TerminalNode[];
    public GT(i: number): antlr.TerminalNode | null;
    public GT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.GT);
    	} else {
    		return this.getToken(RustParser.GT, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_shr;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterShr) {
             listener.enterShr(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitShr) {
             listener.exitShr(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitShr) {
            return visitor.visitShr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
