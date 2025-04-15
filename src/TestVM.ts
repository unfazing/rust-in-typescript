import { test_VM } from './TestingUtils.js';

// No main found
test_VM(`fn not_main() -> string {}`, undefined, "VM - No Main Function", true);
test_VM(``, undefined, "VM - Empty Program", true);

// Basic expressions
test_VM("fn main() -> i32 { 1 }", 1, "VM - Basic - Integer Literal");
test_VM("fn main() -> i32 { 2 + 3 }", 5, "VM - Basic - Integer Addition");
test_VM("fn main() -> i32 { 1; 2; 3 }", 3, "VM - Basic - Expression Sequence");
test_VM("fn main() -> i32 { if false { 2 } else { 3 } }", 3, "VM - Basic - If-Else (False Condition)");
test_VM("fn main() -> i32 { 8 + 34; if true { 1 + 2 } else { 17 } }", 3, "VM - Basic - If-Else (True Condition) with Preceding Expression");

// Blocks and variables
test_VM(
    `
    fn main() -> i32 {
        let y = 4;
        {
            let x = y + 7;
            x * 2
        }
    }
    `, 22, "VM - Scope - Block and Variable Shadowing",
);

// Functions
test_VM(
    `
    fn f() -> i32 { 1 }
    fn main() -> i32 { f() }
    `, 1, "VM - Functions - Basic Call",
);

test_VM(
    `
    fn f(x: i32) -> i32 { x }
    fn main() -> i32 { f(33) }`,
    33, "VM - Functions - Single Argument",
);

test_VM(
    `
    fn f(x: i32, y: i32) -> i32 { x - y }
    fn main() -> i32 { f(33, 22) }`,
    11, "VM - Functions - Two Arguments",
);

// Recursive functions
test_VM(
    `
    fn fact(n: i32) -> i32 {
        if n == 1 { 1 } else { n * fact(n - 1) }
    }
    fn main() -> i32 { fact(10) }`,
    3628800, "VM - Functions - Recursive Factorial",
);

test_VM(
    `
    fn fact(n: i32) -> i32 { fact_iter(n, 1, 1) }
    fn fact_iter(n: i32, i: i32, acc: i32) -> i32 {
        if i > n {
            acc
        } else {
            fact_iter(n, i + 1, acc * i)
        }
    }
    fn main() -> i32 { fact(4) }`,
    24, "VM - Functions - Iterative Factorial",
);

// Loops
test_VM(
    `
    fn main() -> () {
        while false { 1; }
    }`,
    undefined, "VM - Loops - While (False Condition)",
);

test_VM(
    `
    fn main() -> i32 {
        let mut x = 0;
        x = 1;
        while x < 2 {
            1;
            x = x + 1;
        }
        x
    }`,
    2, "VM - Loops - While (Single Iteration)",
);

test_VM(
    `
    fn main() -> i32 {
        let mut x = 0;
        while x < 10 {
            x = x + 1;
        }
        x
    }`,
    10, "VM - Loops - While (Multiple Iterations)"
);

test_VM(
    `
    fn main() -> i32 {
        let mut x = 0;
        let mut i = 0;
        while i < 100 {
            let mut j = 0;
            while j < 100 {
                x = x + i + j;
                j = j + 1;
            }
            i = i + 1;
        }
        x
    }`,
    990000, "VM - Loops - Nested While",
);

test_VM(
    `
    fn main() -> i32 {
        let mut x = 0;
        let mut i = 0;
        while i < 1000 {
            let y = 1;
            i = i + 1;
        }
        i
    }`,
    1000, "VM - Loops - While with Local Variable",
);

test_VM(`
    fn main() -> char {
        let character = 'c';
        return character;
    }`,
    "c", "VM - Basic - Char Literal"
)

test_VM(
    `
    fn main() -> string {
        let mut abc = "abc";
        abc
    }`,
    `abc`, "VM - Basic - String Literal",
);

test_VM(
    `
    fn main() -> string {
        let mut abc = "abc" + "xyz";
        abc
    }`,
    "abcxyz", "VM - Basic - String Concatenation"
);

test_VM(`
    fn main() -> String {
        let mut x: String = "foo";
        x = "bar";
        x
    }`, "bar", "VM - String - Reassignment");

test_VM(
    `
    fn main() -> string {
        let mut abc = "abc";
        {
            let mut test = "test";
            {
                let mut test2 = "testA" + "testB";
            }
        }
        abc
    }`,
    "abc", "VM - String - Scope",
);

test_VM(
    `
    fn main() -> string {

        let xyz_outer = {
            let xyz_inner = "xyz";
            xyz_inner
        };

        xyz_outer
    }`,
    "xyz", "VM - String - Ownership Transfer (Inner Block)"
);

test_VM(
    `
    fn main() -> string {
        fn ownership_transfer() {
            let xyz_inner = "xyz";
            return xyz_inner
        }

        let xyz_outer = ownership_transfer();

        xyz_outer
    }`,
    "xyz", "VM - String - Ownership Transfer (Function Call)"
);

test_VM(`
    fn main() -> string {
        fn stringPool_init() {
            "xyz";
        }

        stringPool_init(); // should not free "xyz" from stringpool? our program becomes trivial!

        "xyz"
    }`,
    "xyz", "VM - String - String Pool Initialization"
)

test_VM(`
    fn main() -> i32 {
        let x = 42;
        let p = &x;
        *p
    }`, 42, "VM - References - i32 Immutable Dereference");

test_VM(`
    fn main() -> i32 {
        let mut x = 10;
        let p = &mut x;
        *p = 5;
        x
    }`, 5, "VM - References - i32 Mutable Write-Through");

test_VM(`
    fn main() -> i32 {
        let mut x = 1;
        let p = &mut x;
        *p = *p + 1;
        x
    }`, 2, "VM - References - i32 Mutate Through Mutable");

test_VM(`
    fn main() -> i32 {
        let x = 100;
        let r = &x;
        {
            let y = *r;
            y
        }
    }`, 100, "VM - References - i32 Immutable Dereference (Inner Block)");

test_VM(`
    fn main() -> i32 {
        let mut x = 5;
        let mut y = 10;
        let mut p = &mut x;
        *p = 1;
        p = &mut y;
        *p = 2;
        x + y
    }`, 3, "VM - References - i32 Reassign Mutable");

test_VM(`
    fn main() -> i32 {
        let mut x = 7;
        let p = &mut x;
        let pp = &p;
        **pp
    }`, 7, "VM - References - i32 Double Mutable Dereference");

test_VM(`
    fn get_ref(x: &i32) -> i32 {
        *x
    }
    fn main() -> i32 {
        let x = 99;
        get_ref(&x)
    }`, 99, "VM - References - i32 Immutable Dereference in Function");

test_VM(`
    fn set_ref(x: &mut i32) {
        *x = 123;
    }
    fn main() -> i32 {
        let mut a = 0;
        set_ref(&mut a);
        a
    }`, 123, "VM - References - i32 Mutate Through Mutable in Function");

test_VM(`
    fn main() -> i32 {
        let mut x = 1;
        {
            let p = &mut x;
            *p = *p + 10;
        }
        x
    }`, 11, "VM - References - i32 Mutate in Nested Block");

test_VM(`
    fn main() -> i32 {
        let mut x = 3;
        let p = &mut x;
        *p = *p * 2;
        x
    }`, 6, "VM - References - i32 Mutate Based on Current Value");

test_VM(`
    fn main() -> String {
        let x: String = "abc";
        let r = &x;
        *r
    }`, "abc", "VM - References - String Immutable Dereference");

test_VM(`
    fn main() -> String {
        let mut x: String = "start";
        let p = &mut x;
        *p = "end";
        x
    }`, "end", "VM - References - String Mutate Through Mutable");

test_VM(`
    fn main() -> String {
        let mut x: String = "a";
        {
            let r = &mut x;
            *r = "b";
        }
        x
    }`, "b", "VM - References - String Mutate in Nested Block");

test_VM(`
    fn echo(s: String) -> String {
        s
    }

    fn main() -> String {
        echo("echoed")
    }`, "echoed", "VM - References - String Ownership Transfer in Function");

test_VM(`
    fn update(s: &mut String) {
        *s = "new";
    }

    fn main() -> String {
        let mut s: String = "old";
        update(&mut s);
        s
    }`, "new", "VM - References - String Mutate Through Mutable in Function Argument");


test_VM(`
    fn main() -> String {
        let mut s: String = "old";
        s = "new";
        s
    }`, "new", "VM - References - String Reassignment");