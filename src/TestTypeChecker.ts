import { test_typechecker } from './TestingUtils.js';

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
    fn f() -> i32 {
        if (true) {
            return 6;
        } else {
            return 7;
        }
    }
    fn f2() -> i32 {
        let mut x: i32 = f();
        x = f() + 1;
        x = f() + f() + x;
        let mut y: i32 = f() + f();
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
    fn main() -> bool {
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

    fn main() -> i32 {
        return x; // cannot access dynamic variable outside of fn scope
    }

    main();
}
`, "Type error in pathExpression; [lookup_type] Variable x is from an outer scope.", "Invalid - Lookup Variable From Outer Scope")

test_typechecker(`
fn main() {
    let x: i32 = 42;

    fn main() {}

    fn main() {
        main(); // can access function names outside of scope
    }

    main();
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

    // mfking Rust allows this due to some reborrowing bs (https://haibane-tenshi.github.io/rust-reborrowing/)
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
        fn main(a: &mut string) -> &mut string {
            return a;
        }
    }
    `, "", "Valid - Function with Mutable Reference Parameter and Return")


test_typechecker(`
    fn main() {
        fn main(a: &mut string) -> &mut string {
            let new_ref: &mut string = &mut\"123\";
            return new_ref;
        }
    }
    `, "Type error in function declaration; Function returns a locally declared reference.", "Invalid - Function Returning Reference to Local Variable")


test_typechecker(`
    fn main() {
        fn main(a: &mut string, b: &mut string) -> &mut string {
            return a;
        }
    }
    `, "Type error in ClosureType construction; Function parameter can only have one reference type as lifetime annotation not supplied/supported.", "Invalid - Function with Multiple Mutable Reference Parameters")

test_typechecker(`
    fn main() {
        fn main(a: &mut string) {
            return;
        }
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        main(x_ref); // move x_ref into function
        let mut x_ref_2: &mut string = &mut x; // allowed to create new &mut x
    }
    `, "", "Valid - Re-borrow After Mutable Borrow Ends")


test_typechecker(`
    fn main() {
        fn main(a: &mut string) -> &mut string {
            return a;
        }
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        main(x_ref); // returns x_ref, so x considered to still have existing mutableborrow
        let mut x_ref_2: &mut string = &mut x;
    }
    `, "Type error in pathExpression; use (read/write) of a mutably borrowed value", "Invalid - Simultaneous Mutable Borrows")


test_typechecker(`
    fn main() {
        fn main(a: &mut string) -> &mut string {
            return a;
        }
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        x_ref = main(x_ref); // cannot assign to moved value
    }
    `, "Type error in assignment; Cannot assign to a moved value.", "Invalid - Reassigning Moved Mutable Reference")

test_typechecker(`
    fn main() {
        fn main(a: &mut string) -> &mut string {
            return a;
        }
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        main(x_ref); // move x_ref
        x_ref = &mut "test"; // use moved value
    }
    `, "Type error in pathExpression; use of a moved value", "Invalid - Use of Moved Mutable Reference After Function Call")


test_typechecker(`
    fn main() {
        fn main(a: & string) -> & string {
            return a;
        }
        let x: string = "123";
        let x_ref: & string = & x;
        main(x_ref); // no move x_ref since immutable ref
        main(x_ref);
    }
    `, "", "Valid - Passing Immutable Reference")

test_typechecker(`
    fn main() {
        fn apply_function(func: fn(i32) -> i32, value: i32) -> i32 {
            func(value) + value
        }

        fn main(x: i32) -> i32 {
            x * 2
        }
        let result: i32 = apply_function(main, 5);
    }
    `, "", "Valid - Higher-Order Function (i32)")

test_typechecker(`
    fn main() {
        fn apply_function(func: fn(& i32) -> i32, value: & i32) -> i32 {
            func(value) + *value
        }

        fn main(x: &i32) -> i32 {
            *x * 2
        }
        let result: i32 = apply_function(main, &5);
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