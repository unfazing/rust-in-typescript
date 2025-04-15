import { test_VM } from './TestingUtils.js';

// No main found
test_VM(`fn not_main() -> string {}`, undefined, "No main found", true);
test_VM(``, undefined, "Empty program", true);

// Basic expressions
test_VM("fn main() -> i32 { 1 }", 1);
test_VM("fn main() -> i32 { 2 + 3 }", 5);
test_VM("fn main() -> i32 { 1; 2; 3 }", 3);
test_VM("fn main() -> i32 { if false { 2 } else { 3 } }", 3);
test_VM("fn main() -> i32 { 8 + 34; if true { 1 + 2 } else { 17 } }", 3);

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
    `, 22,
);

// Functions
test_VM(
    `
    fn f() -> i32 { 1 }
    fn main() -> i32 { f() }
    `, 1,
);

test_VM(
    `
    fn f(x: i32) -> i32 { x }
    fn main() -> i32 { f(33) }`,
    33,
);

test_VM(
    `
    fn f(x: i32, y: i32) -> i32 { x - y }
    fn main() -> i32 { f(33, 22) }`,
    11,
);

// Recursive functions
test_VM(
    `
    fn fact(n: i32) -> i32 {
        if n == 1 { 1 } else { n * fact(n - 1) }
    }
    fn main() -> i32 { fact(10) }`,
    3628800,
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
    24,
);

// Loops
test_VM(
    `
    fn main() -> () {
        while false { 1; }
    }`,
    undefined,
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
    2,
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
    10, "Max depth??"
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
    990000,
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
    1000,
);

test_VM(`
    fn main() -> char {
        let character = 'c';
        return character;
    }`,
    "c", "Test char"
)

test_VM(
    `
    fn main() -> string {
        let mut abc = "abc";
        abc
    }`,
    `abc`,
);

test_VM(
    `
    fn main() -> string {
        let mut abc = "abc" + "xyz";
        abc
    }`,
    "abcxyz", "Concat strings"
);

test_VM(`
    fn main() -> String {
        let mut x: String = "foo";
        x = "bar";
        x
    }`, "bar", "String: reassignment to new string");

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
    "abc",
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
    "xyz", "transfer ownership outside scope"
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
    "xyz", "transfer ownership outside scope"
);

test_VM(`
    fn main() -> string {
        fn stringPool_init() {
            "xyz";
        } 
        
        stringPool_init(); // should not free "xyz" from stringpool? our program becomes trivial!

        "xyz"
    }`,
    "xyz", "Update string pool"
)

test_VM(`
    fn main() -> i32 {
        let x = 42;
        let p = &x;
        *p
    }`, 42, "i32: basic reference and dereference");
        
test_VM(`
    fn main() -> i32 {
        let mut x = 10;
        let p = &mut x;
        *p = 5;
        x
    }`, 5, "i32: mut reference write-through");
        
test_VM(`
    fn main() -> i32 {
        let mut x = 1;
        let p = &mut x;
        *p = *p + 1;
        x
    }`, 2, "i32: mutate through reference");

test_VM(`
    fn main() -> i32 {
        let x = 100;
        let r = &x;
        {
            let y = *r;
            y
        }
    }`, 100, "i32: immutably dereferenced in inner block");

test_VM(`
    fn main() -> i32 {
        let mut x = 5;
        let mut y = 10;
        let mut p = &mut x;
        *p = 1;
        p = &mut y;
        *p = 2;
        x + y
    }`, 3, "i32: reassign mutable reference");
    
test_VM(`
    fn main() -> i32 {
        let mut x = 7;
        let p = &mut x;
        let pp = &p;
        **pp
    }`, 7, "i32: double mutable reference (safe read)");
    
test_VM(`
    fn get_ref(x: &i32) -> i32 {
        *x
    }
    fn main() -> i32 {
        let x = 99;
        get_ref(&x)
    }`, 99, "i32: dereference ref passed to function");
    
test_VM(`
    fn set_ref(x: &mut i32) {
        *x = 123;
    }
    fn main() -> i32 {
        let mut a = 0;
        set_ref(&mut a);
        a
    }`, 123, "i32: mutate via &mut passed to function");
    
test_VM(`
    fn main() -> i32 {
        let mut x = 1;
        {
            let p = &mut x;
            *p = *p + 10;
        }
        x
    }`, 11, "i32: mutate in nested block");
    
test_VM(`
    fn main() -> i32 {
        let mut x = 3;
        let p = &mut x;
        *p = *p * 2;
        x
    }`, 6, "i32: assign based on current value through ref");
    
test_VM(`
    fn main() -> String {
        let x: String = "abc";
        let r = &x;
        *r
    }`, "abc", "String: immutable reference and dereference");

test_VM(`
    fn main() -> String {
        let mut x: String = "start";
        let p = &mut x;
        *p = "end";
        x
    }`, "end", "String: mutate via &mut dereference");
        
test_VM(`
    fn main() -> String {
        let mut x: String = "a";
        {
            let r = &mut x;
            *r = "b";
        }
        x
    }`, "b", "String: nested mut ref assignment");

test_VM(`
    fn echo(s: String) -> String {
        s
    }

    fn main() -> String {
        echo("echoed")
    }`, "echoed", "String: passed and returned from function");

test_VM(`
    fn update(s: &mut String) {
        *s = "new";
    }

    fn main() -> String {
        let mut s: String = "old";
        update(&mut s);
        s
    }`, "new", "String: mutate through &mut in function");


test_VM(`
    fn main() -> String {
        let mut s: String = "old";
        s = "new";
        s
    }`, "new", "String: assigning a new string");