import { test_typechecker } from './TestingUtils.js';
import { VisualisationPoints } from './TypeCheckerRust.js';

test_typechecker(`
    fn main() {
        fn borrow_string(s: &string) -> & & string {
            return &s;
        }
        let mut original: string = "123";
        let borrowed: & & string = borrow_string(original);
    }
    
    `, "Type error in ClosureType construction; Returned ref must have same type as argument ref.", "Invalid - Function must return the same reference it took in.")


test_typechecker(`
fn main() -> i32 {
    if (true) {
        6
    } else {
        7
    }
}
`, "", "Valid - If-Else Return")

test_typechecker(`
fn main() -> i32 {
    if (true) {
        6;
    } else {
        7;
    }
    return 1;
}
`, "", "Valid - If-Else Statements");

test_typechecker(`
fn main() {
    fn foo() -> i32 {
        if (true) {
            return 6;
        } else {
            return 7;
        }
    }
    fn foo2() -> i32 {
        let mut x: i32 = foo();
        x = foo() + 1;
        x = foo() + foo() + x;
        let mut y: i32 = foo() + foo();
        y = y + x;
        let TEST: i32 = 100;
        {
            let z: i32 = TEST;
        }
        return y;
    }
}
`, "", "Valid - Function Calls and Assignments");

test_typechecker(`
fn main() -> i32 {
    fn foo() -> bool {
        return false;
    }
    if (true) {
        if (true) {
            return 4;
        } else {
            return 5;
        }
    } else if (true) {
        return 6;
    } else {
        return 7;
    }
    return 111111;
}
`, "", "Valid - Nested If-Else Return");

test_typechecker(`
fn main() -> i32 {
    let mut x: i32 = if (true) { 6 } else { 7 };
    return x;
}
`, "", "Valid - If-Else Assignment");

test_typechecker(`
fn main() -> i32 {
    let mut y: i32 = return 6; // allow due to early termination
}
`, "", "Valid - Return in Assignment (Early Termination)");

test_typechecker(`
fn main() -> () {
    let x : i32 = 42;
    let x_ref : &i32 = &x;
    let x_ref_2 : &i32 = x_ref;
    *x_ref_2;
}
`, "", "Valid - Immutable Reference Creation and Dereference");

test_typechecker(`
fn main() {
    let mut x: i32 = 42;
    let x_ref: &mut i32 = &mut x;
    *x_ref = 69;
    ((*x_ref)) = 69;
}
`, "", "Valid - Mutable Reference Dereference and Assignment");

// Test cases for functions that should fail type checking
test_typechecker(`
fn main() -> i32 {
    if (true) {
        return 6;
    } else {
        7
    }
}
`, "Type error; Types of branches not matching; consequent type: retType<i32>, alternative type: i32", "Invalid - If-Else Branch Type Mismatch (Return vs Implicit Return)");

// Mismatched branch types (unit vs return)
test_typechecker(`
fn main() -> i32 {
    if (true) {
        6;
    } else {
        return 7;
    }
    return 1;
}
`, "Type error; Types of branches not matching; consequent type: (), alternative type: retType<i32>", "Invalid - If-Else Branch Type Mismatch (Implicit Return vs Return)");

// Return type mismatch (bool vs i32)
test_typechecker(`
fn main() -> i32 {
    if (true) {
        return false;
    } else {
        return 7;
    }
    return 1;
}
`, "Type error in return statement; expected type: i32, actual type: bool", "Invalid - Return Type Mismatch (Bool vs i32)");

// Return type mismatch with implicit unit
test_typechecker(`
fn main() -> i32 {
    if (true) {
        return false
    } else {
        7;
    }
    return 1;
}
`, "Type error in return statement; expected type: i32, actual type: bool", "Invalid - Return Type Mismatch (Bool vs i32) - Implicit Else");

// Use of moved reference
test_typechecker(`
fn main() -> () {
    let mut x : string = "2";
    let x_ref : &mut string = &mut x;
    let x_ref_2 : &mut string = x_ref;
    *x_ref;
}
`, "Type error in pathExpression; use of a moved value: x_ref", "Invalid - Use of Moved Mutable Reference");

// Immutable reference is not moved
test_typechecker(`
    fn main() -> () {
        let x : string = "2";
        let x_ref : & string = & x;
        let x_ref_2 : & string = x_ref;
        *x_ref;
    }
    `, "", "Valid - Immutable Reference Creation and Dereference (String)");

// Assignment to immutable reference
test_typechecker(`
fn main() {
    let mut x: i32 = 42;
    let x_ref: &i32 = &x;
    *x_ref = 69;
    ((*x_ref)) = 69;
}
`, "Type error in assignment; cannot assign to a dereference of an immutable reference", "Invalid - Assignment to Immutable Reference");


test_typechecker(`
fn main() {
    let x: i32 = 42;

    fn foo() -> i32 {
        return x; // cannot access dynamic variable outside of fn scope
    }

    foo();
}
`, "Type error in pathExpression; [lookup_type] Variable x is from an outer scope.", "Invalid - Lookup Variable From Outer Scope")

test_typechecker(`
fn main() {
    let x: i32 = 42;

    fn foo() {}

    fn foo2() {
        foo(); // can access function names outside of scope
    }

    foo();
}
`, "", "Valid - Lookup Function Name From Outer Scope")

test_typechecker(`
fn main() {
    let x: i32 = 42;
    let x_ref: &i32 = &x;
    let x_ref_2: &i32 = &(*x_ref);
}
`, "", "Valid - Borrow from Dereferenced Immutable Reference")

test_typechecker(`
fn main() {
    let x_ref: &i32 = &42;
    let x_ref_2: &i32 = &(*x_ref); // allowed in Rust
}
`, "", "Valid - Immutable Borrow to Temporary Variable")

test_typechecker(`
fn main() {
    let x_ref: &i32 = &42;
    let x_ref_2: &mut i32 = &mut (*x_ref); // another immutable borrow alr exists, throw error

    // Rust allows this due to some reborrowing bs (https://haibane-tenshi.github.io/rust-reborrowing/)
}
`, "cannot create a mutable borrow because owner already has an immutable borrow", "Invalid - Mutable Borrow to Temporary Variable (Immutable Borrow Exists)")

test_typechecker(`
fn main() {
    let x_ref: &mut i32 = &mut 42; // notice temp 42 is not mutable
    *x_ref = 69;
}
`, "", "Valid - Dereference Mutable Borrow and Assign to Temporary")


test_typechecker(`
fn main() {
    let x: i32 = 2;
    let y: i32 = 1;
    x < y;
}
`, "", "Valid - Compare i32")

test_typechecker(`
fn main() {
    let x: i32 = 2;
    let y: f64 = 1.5;
    (x > y) || (y < x);
}
`, "", "Valid - Compare i32 with f64")

test_typechecker(`
fn main() {
    let x: i32 = 2;
    x <= 9.99;
}
`, "", "Valid - Compare i32 with f64 (Raw)")

test_typechecker(`
fn main() {
    let x: i32 = 2;
    x < true && x >= 'a';
}
`, "Type error in comparison expression", "Invalid - Compare i32 with Bool or Char")


test_typechecker(`
    fn main() {
        let mut x: string = "123";
        {
            {
                let x_ref_1: &mut string = &mut x;
            }
            let x_ref_2: &mut string = &mut x;
        }
        let x_ref_3: &mut string = &mut x;
    }
    `, "", "Valid - Nested Mutable Borrows")

test_typechecker(`
    fn main() {
        fn foo(a: &mut string) -> &mut string {
            return a;
        }
    }
    `, "", "Valid - Function with Mutable Reference Parameter and Return")


test_typechecker(`
    fn main() {
        fn foo(a: &mut string) -> &mut string {
            let new_ref: &mut string = &mut\"123\";
            return new_ref;
        }
    }
    `, "Type error in function declaration; Function returns a locally declared reference.", "Invalid - Function Returning Reference to Local Variable")


test_typechecker(`
    fn main() {
        fn foo(a: &mut string, b: &mut string) -> &mut string {
            return a;
        }
    }
    `, "Type error in ClosureType construction; Function parameter can only have one reference type as lifetime annotation not supplied/supported.", "Invalid - Function with Multiple Mutable Reference Parameters")

test_typechecker(`
    fn main() {
        fn foo(a: &mut string) {
            return;
        }
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        foo(x_ref); // move x_ref into function
        let mut x_ref_2: &mut string = &mut x; // allowed to create new &mut x
    }
    `, "", "Valid - Re-borrow After Mutable Borrow Ends", false, VisualisationPoints.BORROWS_AND_MOVES)


test_typechecker(`
    fn main() {
        fn foo(a: &mut string) -> &mut string {
            return a;
        }
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        foo(x_ref); // returns x_ref, so x considered to still have existing mutableborrow
        let mut x_ref_2: &mut string = &mut x;
    }
    `, "Type error in pathExpression; use (read/write) of a mutably borrowed value", "Invalid - Simultaneous Mutable Borrows")


test_typechecker(`
    fn main() {
        fn foo(a: &mut string) -> &mut string {
            return a;
        }
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        x_ref = foo(x_ref); // cannot assign to moved value
    }
    `, "Type error in assignment; Cannot assign to a moved value.", "Invalid - Reassigning Moved Mutable Reference")

test_typechecker(`
    fn main() {
        fn foo(a: &mut string) -> &mut string {
            return a;
        }
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        foo(x_ref); // move x_ref
        x_ref = &mut "test"; // use moved value
    }
    `, "Type error in pathExpression; use of a moved value", "Invalid - Use of Moved Mutable Reference After Function Call")


test_typechecker(`
    fn main() {
        fn foo(a: & string) -> & string {
            return a;
        }
        let x: string = "123";
        let x_ref: & string = & x;
        foo(x_ref); // no move x_ref since immutable ref
        foo(x_ref);
    }
    `, "", "Valid - Passing Immutable Reference")

test_typechecker(`
    fn main() {
        fn apply_function(func: fn(i32) -> i32, value: i32) -> i32 {
            func(value) + value
        }

        fn foo(x: i32) -> i32 {
            x * 2
        }
        let result: i32 = apply_function(foo, 5);
    }
    `, "", "Valid - Higher-Order Function (i32)")

test_typechecker(`
    fn main() {
        fn apply_function(func: fn(& i32) -> i32, value: & i32) -> i32 {
            func(value) + *value
        }

        fn foo(x: &i32) -> i32 {
            *x * 2
        }
        let result: i32 = apply_function(foo, &5);
    }
    `, "", "Valid - Higher-Order Function with References")

test_typechecker(`
    fn main() {
        // function cant take in more than one ref if return ref
        fn apply_function(func: fn(&i32, &i32) -> &i32) {}
    }
    `, "Type error in ClosureType construction; Function parameter can only have one reference type as lifetime annotation not supplied/supported.", "Invalid - Higher-Order Function with Multiple Reference Arguments")

test_typechecker(`
    fn main() {
        fn apply_function(func: fn(&i32) -> &mut i32) {}
    }
    `, "Type error in ClosureType construction; Returned ref must have same type as argument ref.", "Invalid - Higher-Order Function with Mismatched Reference Types")


test_typechecker(`
    fn main() {
        abc = 10;
    }
    `, "Type error in pathExpression; [lookup_type] Unbound variable abc.", "Invalid - Assigning to Unbound Variable")

test_typechecker(`
    fn main() {
        let x: i32 = 123;
        *x;
    }
    `, "Type error; dereferencing a non-reference type: i32", "Invalid - Dereferencing Non-Reference Type")

test_typechecker(`
    fn main() {
        let mut x: &mut i32 = &mut 5;
        {
            let mut y: i32 = 2;
            x = &mut y;
        }
        let mut z: i32 = *x;
    }
    `, "Type error in assignment; Lifetime of locally assigned reference shorter than variable x.", "Invalid - Dangling Mutable Reference (Local Scope)")

test_typechecker(`
    fn main() {
        let mut x: &mut i32 = &mut 5;
        {
            x = &mut 7;
        }
        let mut z: i32 = *x;
    }
    `, "Type error in assignment; Lifetime of locally assigned reference shorter than variable x.", "Invalid - Dangling Mutable Reference (Temporary Value in Scope)")


test_typechecker(`
    fn main() {
        let mut x: &mut i32 = &mut 5;
        {
            let y: &i32 = &123;
            x = &mut (7 + *y);
        }
        let mut z: i32 = *x;
    }
    `, "Type error in assignment; Lifetime of locally assigned reference shorter than variable x.", "Invalid - Dangling Mutable Reference (Temporary Value Derived from Dereference in Scope)")


test_typechecker(`
    fn main() {
        let mut x: &mut i32 = &mut 5;
        let y: &i32 = &123;
        x = &mut (7 + *y);
        let mut z: i32 = *x;
    }
    `, "", "Valid - No Dangling Mutable Reference (Temporary Value Outside Scope)")


test_typechecker(`
    fn main() {
        let x: i32 = 123;
        x = 456;
    }
    `, "Type error in assignment; tried to assign when variable is immutable.", "Invalid - Reassign to immutable variable")



// Arrays
test_typechecker(`
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
    `, "", "Valid - Create arrays of basic types")


test_typechecker(`
    fn main() {
        // empty array
        let mut arr: [i32; 0] = [1 ; 0];
        let mut arr: [i32; 0] = [];
    }
    `, "", "Valid - Create empty arrays")


test_typechecker(`
    fn main() {
        let mut arr: [i32; 0] = [1 ; 0];
        let mut arr2: [i32; 0] = arr;
        let mut arr3: [i32; 0] = arr;

        let mut arr: [string; 1] = ["test"];
        let mut arr2: [string; 1] = arr;
    }
    `, "", "Valid - Move copy arrays multiple times")

test_typechecker(`
    fn main() {
        let mut arr: [string; 1] = ["test"];
        let mut arr2: [string; 1] = arr;
        let mut arr3: [string; 1] = arr;

    }
    `, "Type error in pathExpression; use of a moved value: arr", "Invalid - Move non-copy arrays multiple times")

test_typechecker(`
    fn main() {
        let arr: [i32 ; 1] = ["10"];
    }
    `, "Type error in let statement; Expected type: [i32 ; size 1], actual type: [string ; size 1].", "Invalid - Create array with wrong type")


test_typechecker(`
    fn main() {
        let arr: [i32 ; 3] = ["10", 10, 1.2];
    }
    `, "Type error in array elements; elements of an array must all have same type", "Invalid - Create array with mixed types")

test_typechecker(`
    fn main() {
        let mut arr: [i32 ; 1] = [1];
        arr = [2];
        arr[0] = 100;

        let mut arr2: [&i32 ; 1] = [&1];
        let x: i32 = 123;
        arr2 = [&x];
        arr2[0] = &456;

        let mut arr3: [&mut string; 1] = [&mut "123"];
        let mut y: string = "456";
        arr3 = [&mut y];
        arr3[0] = &mut "789";
    }
    `, "", "Valid - Assign array and array elements to correct types")

test_typechecker(`
    fn main() {
        let arr: [i32 ; 1] = [1];
        arr[0] = 100;
    }
    `, "Type error in assignment; cannot assign to an element in an immutable array", "Invalid - Assign array element when array is immutable")  

test_typechecker(`
    fn main() {
        let nested_arr1: [[i32; 3]; 2] = [[1, 2, 3], [4, 5, 6]];
        let nested_arr2: [[f64; 2]; 2] = [[1.1, 2.2], [3.3, 4.4]];
        let nested_arr3: [[bool; 2]; 3] = [[true, false], [false, true], [true, true]];
        let nested_arr4: [[string; 2]; 2] = [["123", "456"], ["789", "0"]];
        let nested_arr5: [[char; 3]; 2] = [['a', 'b', 'c'], ['x', 'y', 'z']];

        // Uniform nested arrays using semicolon syntax
        let nested_arr6: [[i32; 2]; 3] = [[1, 2]; 3];
        let nested_arr7: [[f64; 1]; 2] = [[3.14]; 2];
        let nested_arr8: [[bool; 1]; 4] = [[true]; 4];
        let nested_arr10: [[char; 2]; 2] = [['r', 's']; 2];
    }
    `, "", "Valid - Create nested arrays of basic types")

test_typechecker(`
    fn main() {
        let nested_arr: [[string; 1]; 3] = [["rust"]; 3];
    }
    `, "Type error in array elements; [string ; size 1] does not have copy trait, unable to make copies into elements of the array", "Invalid - Create array of string with semicolon syntax")
    


test_typechecker(`
    fn main() {
        let a: i32 = 1;
        let b: i32 = 2;
        let c: i32 = 3;

        let arr: [&i32; 3] = [&a, &b, &c];
    }
    `, "", "Valid - Create arrays of reference types")


test_typechecker(`
    fn main() {
        let mut str_arr: [string; 3] = ["123" ; 4];
    }
    `, "Type error in array elements; string does not have copy trait, unable to make copies into elements of the array", "Invalid - Create nested array of string with semicolon syntax")


test_typechecker(`
    fn main() {
        let arr: [&i32; 3] = [&1, &2, &3];
        let test: i32 = *arr[2];

        let arr2: [&f64; 3] = [&1.0, &2.0, &3.0];
        let test2: f64 = *arr2[2];
    }
    `, "", "Valid - Moving a dereferenced element in a copy array")


test_typechecker(`
    fn main() {
        let arr: [string; 3] = ["1", "2", "3"];
        let test: string = arr[2];
    }
    `, "Type error in let statement; cannot move out of a non-copy array", "Invalid - Move non copy string out of an array")

test_typechecker(`
    fn main() {
        let arr: [&string; 3] = [&"1", &"2", &"3"];
        let test: string = *arr[2];
    }
    `, "Type error in let statement; cannot move a borrowed value", "Invalid - Move a borrowed non copy string out of an array")
