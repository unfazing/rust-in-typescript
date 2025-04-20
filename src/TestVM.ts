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

test_VM(
    `
    fn main() -> i32 {
        let y: i32 = 4;
        {
            let x: i32 = y + 7;
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
        let mut x: i32 = 0;
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
        let mut x: i32 = 0;
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
        let mut x: i32 = 0;
        let mut i: i32 = 0;
        while i < 100 {
            let mut j: i32 = 0;
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
        let mut x: i32 = 0;
        let mut i: i32 = 0;
        while i < 1000 {
            let y: i32 = 1;
            i = i + 1;
        }
        i
    }`,
    1000, "VM - Loops - While with Local Variable",
);

test_VM(`
    fn main() -> char {
        let character: char = 'c';
        return character;
    }`,
    "c", "VM - Basic - Char Literal"
);

test_VM(
    `
    fn main() -> string {
        let mut abc: string = "abc";
        abc
    }`,
    `abc`, "VM - Basic - string Literal",
);

test_VM(
    `
    fn main() -> string {
        let mut abc: string = "abc" + "xyz";
        abc
    }`,
    "abcxyz", "VM - Basic - string Concatenation"
);

test_VM(`
    fn main() -> string {
        let mut x: string = "foo";
        x = "bar";
        x
    }`, "bar", "VM - string - Reassignment");

test_VM(
    `
    fn main() -> string {
        let mut abc: string = "abc";
        {
            let mut test: string = "test";
            {
                let mut test2: string = "testA" + "testB";
            }
        }
        abc
    }`,
    "abc", "VM - string - Scope",
);

test_VM(
    `
    fn main() -> string {
        let xyz_outer: string = {
            let xyz_inner: string = "xyz";
            xyz_inner
        };
        xyz_outer
    }`,
    "xyz", "VM - string - Ownership Transfer (Inner Block)"
);

test_VM(
    `
    fn main() -> string {
        fn ownership_transfer() -> string {
            let xyz_inner: string = "xyz";
            return xyz_inner;
        }

        let xyz_outer: string = ownership_transfer();

        xyz_outer
    }`,
    "xyz", "VM - string - Ownership Transfer (Function Call)"
);

test_VM(`
    fn main() -> string {
        fn stringPool_init() {
            let _: string = "xyz";
        }

        stringPool_init();

        "xyz"
    }`,
    "xyz", "VM - string - string Pool Initialization"
);

test_VM(`
    fn main() -> i32 {
        let x: i32 = 42;
        let p: &i32 = &x;
        *p
    }`, 42, "VM - References - i32 Immutable Dereference");

test_VM(`
    fn main() -> i32 {
        let mut x: i32 = 10;
        let p: &mut i32 = &mut x;
        *p = 5;
        x
    }`, 5, "VM - References - i32 Mutable Write-Through");

test_VM(`
    fn main() -> i32 {
        let mut x: i32 = 1;
        let p: &mut i32 = &mut x;
        *p = *p + 1;
        x
    }`, 2, "VM - References - i32 Mutate Through Mutable");

test_VM(`
    fn main() -> i32 {
        let x: i32 = 100;
        let r: &i32 = &x;
        {
            let y: i32 = *r;
            y
        }
    }`, 100, "VM - References - i32 Immutable Dereference (Inner Block)");

test_VM(`
    fn main() -> i32 {
        let mut x: i32 = 5;
        let mut y: i32 = 10;
        let mut p: &mut i32 = &mut x;
        *p = 1;
        p = &mut y;
        *p = 2;
        x + y
    }`, 3, "VM - References - i32 Reassign Mutable");

test_VM(`
    fn main() -> i32 {
        let mut x: i32 = 7;
        let p: &mut i32 = &mut x;
        let pp: &(&mut i32) = &p; // ANTLR BUG: cannot parse &&i32
        **pp
    }`, 7, "VM - References - i32 Double Mutable Dereference");

test_VM(`
    fn get_ref(x: &i32) -> i32 {
        *x
    }
    fn main() -> i32 {
        let x: i32 = 99;
        get_ref(&x)
    }`, 99, "VM - References - i32 Immutable Dereference in Function");

test_VM(`
    fn set_ref(x: &mut i32) {
        *x = 123;
    }
    fn main() -> i32 {
        let mut a: i32 = 0;
        set_ref(&mut a);
        a
    }`, 123, "VM - References - i32 Mutate Through Mutable in Function");

test_VM(`
    fn main() -> i32 {
        let mut x: i32 = 1;
        {
            let p: &mut i32 = &mut x;
            *p = *p + 10;
        }
        x
    }`, 11, "VM - References - i32 Mutate in Nested Block");

test_VM(`
    fn main() -> i32 {
        let mut x: i32 = 3;
        let p: &mut i32 = &mut x;
        *p = *p * 2;
        x
    }`, 6, "VM - References - i32 Mutate Based on Current Value");

test_VM(`
    fn main() -> string {
        let x: string = "abc";
        let r: &string = &x;
        *r
    }`, "abc", "VM - References - string Immutable Dereference");

test_VM(`
    fn main() -> string {
        let mut x: string = "start";
        let p: &mut string = &mut x;
        *p = "end";
        x
    }`, "end", "VM - References - string Mutate Through Mutable");

test_VM(`
    fn main() -> string {
        let mut x: string = "a";
        {
            let r: &mut string = &mut x;
            *r = "b";
        }
        x
    }`, "b", "VM - References - string Mutate in Nested Block");

test_VM(`
    fn echo(s: string) -> string {
        s
    }

    fn main() -> string {
        echo("echoed")
    }`, "echoed", "VM - References - string Ownership Transfer in Function");

test_VM(`
    fn update(s: &mut string) {
        *s = "new";
    }

    fn main() -> string {
        let mut s: string = "old";
        update(&mut s);
        s
    }`, "new", "VM - References - string Mutate Through Mutable in Function Argument");

test_VM(`
    fn main() -> string {
        let mut s: string = "old";
        s = "new";
        s
    }`, "new", "VM - References - string Reassignment");

// // Invalid array case — left as is
// test_VM(`
//     fn main() -> string {
//         let mut s: string = "hello";
//         let arr: [string; 2] = [a, "world"];
//         s
//     }`, "Illegal access of a moved variable", "VM - Array - Move ownership of element into array");

