import { test_VM } from './TestingUtils.js';


// test_VM(`
//     fn main() -> i32 {
//         let x: &i32 = &1;
//         let y: i32 = 123;
//         *x
//     }
//     `, 1, "VM - Assigning a reference then allocating new element on the stack")

// test_VM(`
//     fn main() -> i32 {
//         let x: & &i32 = && 1;
//         let y: i32 = 123; // overwrite stack mem
//         let z: i32 = 456; // overwrite stack mem
//         **x
//     }
//     `, 1, "VM - Assigning a reference then allocating new element on the stack")
    

// Array
// Presently this will throw an error as the literal 1 is loaded on a stack addr > the array placeholder addr.
// test_VM(`
//     fn main() {
//         let x: [&i32; 1] = [&1];
//     }
//     `, undefined, "")

// // ERRORS
// test_VM(`
//     fn main() -> string{
//         let mut arr: [&mut string; 1] = [&mut "123"];
//         let mut y: string = "456";
//         arr = [&mut y]; // reassign of an arr
//         arr[0] = &mut "789"; // set of an arr index
//         return *arr[0];
//     }
//     `, "789", "VM - Assign a &string array and its array elements to new variables")

// // ERRORS
// test_VM(`
//     fn main() -> i32{
//         let mut arr2: [&i32 ; 1] = [&1];
//         let x: i32 = 123;
//         arr2 = [&x];
//         arr2[0] = &456;
//         *arr2[0] 
//     }
//     `, 456, "VM - Assign a &i32 array and its array elements to new variables")

// ERRORS
// test_VM(`
//     fn main() -> i32 {
//         let mut arr: [&i32; 3] = [&1, &2, &3];
//         let test: i32 = *arr[2];
//         return test;

//         // let mut arr2: [&f64; 3] = [&1.0, &2.0, &3.0];
//         // let test2: f64 = *arr2[2];
//         // return test2;
//     }
//     `, 3.0, "Valid - Moving a dereferenced element in a copy array")



test_VM(`
    fn main() -> i32{
        let mut arr: [i32; 3] = [1, 2, 3];
        arr[0]
    }
    `, 1, "")


test_VM(`
    fn main() -> i32{
        let mut arr: [i32; 10] = [1 ; 10];
        let mut arr2: [i32; 10] = arr;
        let mut arr3: [i32; 10] = arr;
        return arr3[0];
    }
    `, 1, "VM - Move copy arrays multiple times")

test_VM(`
    fn main() -> string{
        let mut arr: [string; 1] = ["test"];
        let mut arr2: [string; 1] = arr;
        return arr2[0];
    }
    `, "test", "VM - Move non-copy array once")

test_VM(`
    fn main() {
        let mut arr1: [i32; 3] = [1, 2, 3];
        let mut arr2: [f64; 3] = [1.0, 2.0, 3.0];
        let mut arr3: [bool; 3] = [true, false, true];
        let mut arr4: [string; 3] = ["123", "456", "7"];
        let mut arr5: [char; 3] = ['1', '2', '3'];

        // arrays of same elements
        let mut arr6: [i32; 3] = [1 ; 3];
        let mut arr7: [f64; 3] = [1.0 ; 3];
        let mut arr8: [bool; 3] = [true ; 3];
        let mut arr9: [char; 3] = ['1' ; 3];
    }
    `, undefined, "VM - Create arrays of basic types")

test_VM(`
    fn main() -> i32{
        let mut arr: [i32 ; 1] = [1];
        arr = [2]; // reassign of an arr
        arr[0] = 100; // set of an arr index
        arr[0]
    }
    `, 100, "VM - Assign a i32/&i32 array and its array elements to new variables")

test_VM(`
    fn main() -> i32 {
        let nested_arr: [[i32; 3]; 2] = [[1, 2, 3], [4, 5, 6]];
        return nested_arr[1][0];
    }
`, 4, "VM - Create nested array of i32");

test_VM(`
    fn main() -> f64 {
        let nested_arr: [[f64; 2]; 2] = [[1.1, 2.2], [3.3, 4.4]];
        return nested_arr[0][1];
    }
`, 2.2, "VM - Create nested array of f64");

test_VM(`
    fn main() -> bool {
        let nested_arr: [[bool; 2]; 3] = [[true, false], [false, true], [true, true]];
        return nested_arr[2][1];
    }
`, true, "VM - Create nested array of bool");

test_VM(`
    fn main() -> char {
        let nested_arr: [[char; 3]; 2] = [['a', 'b', 'c'], ['x', 'y', 'z']];
        return nested_arr[1][2];
    }
`, 'z', "VM - Create nested array of char");

test_VM(`
    fn main() -> string {
        let nested_arr: [[string; 2]; 2] = [["123", "456"], ["789", "0"]];
        return nested_arr[1][0];
    }
`, '789', "VM - Create nested array of string");

test_VM(`
    fn main() -> i32 {
        let filled_arr: [i32; 3] = [42; 3];
        return filled_arr[2];
    }
`, 42, "VM - Create array of i32 using fill syntax");

test_VM(`
    fn main() -> i32 {
        let nested_arr: [[i32; 2]; 3] = [[1, 2]; 3];
        return nested_arr[2][0];
    }
`, 1, "VM - Create nested array of i32 using fill syntax");

test_VM(`
    fn main() -> f64 {
        let nested_arr: [[f64; 1]; 2] = [[3.14]; 2];
        return nested_arr[1][0];
    }
`, 3.14, "VM - Create nested array of f64 using fill syntax");

test_VM(`
    fn main() -> bool {
        let nested_arr: [[bool; 1]; 4] = [[true]; 4];
        return nested_arr[3][0];
    }
`, true, "VM - Create nested array of bool using fill syntax");

test_VM(`
    fn main() -> char {
        let nested_arr: [[char; 2]; 2] = [['r', 's']; 2];
        return nested_arr[0][1];
    }
`, 's', "VM - Create nested array of char using fill syntax")

test_VM(`
    fn main() -> i32 {
        let a: i32 = 1;
        let b: i32 = 2;
        let c: i32 = 3;

        let arr: [&i32; 3] = [&a, &b, &c];
        return *arr[0];
    }
    `, 1, "VM - Create arrays of reference types")

test_VM(`
    fn main() -> string {
        let mut arr: [string; 2] = ["hello", "world"];
        arr = ["goodbye", "rip"];
        return arr[0];
    }
    `, "goodbye", "VM - Assigning to a move-typed array")

test_VM(`
    fn main() {
        // empty array
        let mut arr: [i32; 0] = [1 ; 0];
        let mut arr2: [i32; 0] = [];
    }
    `, undefined, "VM - Create empty array")

// No main found
test_VM(`fn not_main() {}`, undefined, "VM - No Main Function");
test_VM(``, undefined, "VM - Empty Program");

// Basic expressions
test_VM("fn main() -> i32 { 1 }", 1, "VM - Basic - Integer Literal");
test_VM("fn main() -> i32 { 2 + 3 }", 5, "VM - Basic - Integer Addition");
test_VM("fn main() -> i32 { 1; 2; 3 }", 3, "VM - Basic - Expression Sequence");
test_VM("fn main() -> i32 { if false { 2 } else { 3 } }", 3, "VM - Basic - If-Else (False Condition)");
test_VM("fn main() -> i32 { 8 + 34; if true { 1 + 2 } else { 17 } }", 3, "VM - Basic - If-Else (True Condition) with Preceding Expression");
test_VM("fn main() -> f64 { 1.0 }", 1.0, "VM - Basic - Float literal");
test_VM("fn main() -> f64 { 1.0 + 2.0 }", 3.0, "VM - Basic - Float addition");

test_VM(`
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
test_VM(`
    fn f() -> i32 { 1 }
    fn main() -> i32 { f() }
    `, 1, "VM - Functions - Basic Call",
);

test_VM(`
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
        let pp: & &mut i32 = &p; // ANTLR BUG: cannot parse &&i32
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

test_VM(`
    fn main() -> i32 {
        fn copy(mut y: i32)->i32 {
            y = y + 1;
            y
        }
        let x: i32 = 0;
        copy(x);
        x
    }`, 0, "VM - Function calls - Copy arguments");

test_VM(`
    fn main() -> string {
        fn mover(mut y: string) -> string {
            return y + " world";
        }
        let x: string = "hello";
        mover(x) 
    }`, "hello world", "VM - Function calls - Move arguments");

test_VM(`
    fn main() -> i32 {
        fn mutate(y: &mut i32) {
            *y = *y + 1
        }
        let mut x: i32 = 0;
        mutate(&mut x);
        x
    }`, 1, "VM - Mutate external variables using function");



test_VM(`
    fn main() -> i32 {
        fn another_tail() -> i32 {
            return 1;
        }

        fn tail() -> i32 {
            return another_tail();
        }

        return tail();

    }`, 1, "VM - Tail calls - clean up environments for tail call frames");

// // Invalid array case — left as is
// test_VM(`
//     fn main() -> string {
//         let mut s: string = "hello";
//         let arr: [string; 2] = [a, "world"];
//         s
//     }`, "Illegal access of a moved variable", "VM - Array - Move ownership of element into array");

