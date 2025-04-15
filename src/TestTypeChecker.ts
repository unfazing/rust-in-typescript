
import { test_typechecker } from './TestingUtils.js';

test_typechecker(`
fn pass1() -> i32 {
    if (true) {
        6
    } else {
        7
    }
}
`, "")

test_typechecker(`
fn pass2() -> i32 {
    if (true) {
        6;
    } else {
        7;
    }
    return 1;
}
`, "");

test_typechecker(`
fn pass3() -> i32 {
    if (true) {
        return 6;
    } else {
        return 7;
    }
}

fn pass3_1() -> i32 {
    let mut x: i32 = pass3();
    x = pass3() + 1;
    x = pass3() + pass3() + x;
    let mut y: i32 = pass3() + pass3();
    y = y + x;
    let TEST: i32 = 100;
    {
        let z: i32 = TEST;
    }
    return y;
}
`, "");

test_typechecker(`
fn pass4() -> i32 {
    fn f8() -> bool {
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
`, "");

test_typechecker(`
fn pass5() -> i32 {
    let mut x: i32 = if (true) { 6 } else { 7 };
    return x;
}
`, "");

test_typechecker(`
fn pass6() -> i32 {
    let mut y: i32 = return 6; // allow due to early termination
}
`, "");

test_typechecker(`
fn pass_ref_1() -> () {
    let x : i32 = 42;
    let x_ref : &i32 = &x;
    let x_ref_2 : &i32 = x_ref;
    *x_ref_2; 
}
`, "");

test_typechecker(`
fn pass_deref_assign() {
    let mut x: i32 = 42;
    let x_ref: &mut i32 = &mut x;
    *x_ref = 69;
    ((*x_ref)) = 69;
}
`, "");

// Test cases for functions that should fail type checking
test_typechecker(`
fn fail1() -> i32 {
    if (true) {
        return 6;
    } else {
        7
    }
}
`, "Type error; Types of branches not matching; consequent type: retType<i32>, alternative type: i32");

// Mismatched branch types (unit vs return)
test_typechecker(`
fn fail2() -> i32 {
    if (true) {
        6;
    } else {
        return 7;
    }
    return 1;
}
`, "Type error; Types of branches not matching; consequent type: (), alternative type: retType<i32>");

// Return type mismatch (bool vs i32)
test_typechecker(`
fn fail3() -> i32 {
    if (true) {
        return false;
    } else {
        return 7;
    }
    return 1;
}
`, "Type error in return statement; expected type: i32, actual type: bool");

// Return type mismatch with implicit unit
test_typechecker(`
fn fail4() -> i32 {
    if (true) {
        return false
    } else {
        7;
    }
    return 1;
}
`, "Type error in return statement; expected type: i32, actual type: bool");

// Use of moved reference
test_typechecker(`
fn fail_ref_1() -> () {
    let mut x : string = "2";
    let x_ref : &mut string = &mut x;
    let x_ref_2 : &mut string = x_ref;
    *x_ref;
}
`, "Type error in pathExpression; use of a moved value: x_ref");

// Immutable reference is not moved
test_typechecker(`
    fn pass_ref_1() -> () {
        let x : string = "2";
        let x_ref : & string = & x;
        let x_ref_2 : & string = x_ref;
        *x_ref;
    }
    `, "");

// Assignment to immutable reference
test_typechecker(`
fn fail_deref_assign() {
    let mut x: i32 = 42;
    let x_ref: &i32 = &x;
    *x_ref = 69;
    ((*x_ref)) = 69;
}
`, "Type error in assignment; cannot assign to a dereference of an immutable reference");


test_typechecker(`
fn fail_lookup_scope() {
    let x: i32 = 42;

    fn funky() -> i32 {
        return x; // cannot access dynamic variable outside of fn scope
    }

    funky();
}
`, "Type error in pathExpression; [lookup_type] Variable x is from an outer scope.")

test_typechecker(`
fn pass_lookup_scope() {
    let x: i32 = 42;

    fn filthy() {}

    fn funky() {
        filthy(); // can access function names outside of scope
    }

    funky();
}
`, "")

test_typechecker(`
fn pass_create_borrow_using_deref() {
    let x: i32 = 42;
    let x_ref: &i32 = &x;
    let x_ref_2: &i32 = &(*x_ref); 
}
`, "")

test_typechecker(`
fn pass_create_immutable_borrow_to_temp_var() {
    let x_ref: &i32 = &42;
    let x_ref_2: &i32 = &(*x_ref); // allowed in Rust
}
`, "")

test_typechecker(`
fn fail_create_mutable_borrow_to_temp_var() {
    let x_ref: &i32 = &42;
    let x_ref_2: &mut i32 = &mut (*x_ref); // another immutable borrow alr exists, throw error

    // mfking Rust allows this due to some reborrowing bs (https://haibane-tenshi.github.io/rust-reborrowing/)
}
`, "cannot create a mutable borrow because owner already has an immutable borrow") 

test_typechecker(`
fn pass_deref_then_assign_to_temp_var() {
    let x_ref: &mut i32 = &mut 42; // notice temp 42 is not mutable
    *x_ref = 69;
}
`, "") 


test_typechecker(`
fn pass_compare_i32() {
    let x: i32 = 2; 
    let y: i32 = 1;
    x < y;
}
`, "") 

test_typechecker(`
fn pass_compare_i32_with_f64() {
    let x: i32 = 2; 
    let y: f64 = 1.5;
    (x > y) || (y < x);
}
`, "") 

test_typechecker(`
fn pass_compare_i32_with_f64_raw() {
    let x: i32 = 2; 
    x <= 9.99;
}
`, "") 

test_typechecker(`
fn fail_compare_i32_with_bool_or_char() {
    let x: i32 = 2; 
    x < true && x >= 'a';
}
`, "Type error in comparison expression") 


test_typechecker(`
    fn pass_nested_borrows() {
        let mut x: string = "123";
        {
            {
                let x_ref_1: &mut string = &mut x;
            }
            let x_ref_2: &mut string = &mut x;
        }
        let x_ref_3: &mut string = &mut x;
    }
    `, "") 

test_typechecker(`
    fn pass_function_ref_param() {
        fn test(a: &mut string) -> &mut string {
            return a;
        }        
    }
    `, "") 


test_typechecker(`
    fn fail_fn_no_return_ref() {
        fn test(a: &mut string) -> &mut string {
            let new_ref: &mut string = &mut"123";
            return new_ref;
        }
    }
    `, "Type error in function declaration; Function returns a locally declared reference.") 


test_typechecker(`
    fn fail_fn_too_many_ref_param() {
        fn test(a: &mut string, b: &mut string) -> &mut string {
            return a;
        }
    }
    `, "Type error in ClosureType construction; Function parameter can only have one reference type as lifetime annotation not supplied/supported.") 

test_typechecker(`
    fn pass_ref_inner_type_consistent() {
        fn test(a: &mut string) {
            return;
        }        
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        test(x_ref); // move x_ref into function
        let mut x_ref_2: &mut string = &mut x; // allowed to create new &mut x
    }
    `, "")


test_typechecker(`
    fn fail_ref_inner_type_consistent() {
        fn test(a: &mut string) -> &mut string {
            return a;
        }        
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        test(x_ref); // returns x_ref, so x considered to still have existing mutableborrow
        let mut x_ref_2: &mut string = &mut x; 
    }
    `, "Type error in pathExpression; use (read/write) of a mutably borrowed value")
        

test_typechecker(`
    fn fail_move_ref_in_fn_reassign() {
        fn test(a: &mut string) -> &mut string {
            return a;
        }        
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        x_ref = test(x_ref); // cannot assign to moved value
    }
    `, "Type error in assignment; Cannot assign to a moved value.")

test_typechecker(`
    fn fail_move_ref_in_fn() {
        fn test(a: &mut string) -> &mut string {
            return a;
        }        
        let mut x: string = "123";
        let mut x_ref: &mut string = &mut x;
        test(x_ref); // move x_ref
        x_ref = &mut "test"; // use moved value
    }
    `, "Type error in pathExpression; use of a moved value")


test_typechecker(`
    fn pass_no_move_immutable_ref() {
        fn test(a: & string) -> & string {
            return a;
        }        
        let x: string = "123";
        let x_ref: & string = & x;
        test(x_ref); // no move x_ref since immutable ref
        test(x_ref);
    }
    `, "")

test_typechecker(`
    fn pass_higher_order_fn() {
        fn apply_function(func: fn(i32) -> i32, value: i32) -> i32 {
            func(value) + value
        }

        fn double(x: i32) -> i32 {
            x * 2
        }
        let result: i32 = apply_function(double, 5);
    }
    `, "")

test_typechecker(`
    fn pass_higher_order_fn_with_refs() {
        fn apply_function(func: fn(& i32) -> i32, value: & i32) -> i32 {
            func(value) + *value
        }

        fn double(x: &i32) -> i32 {
            *x * 2
        }
        let result: i32 = apply_function(double, &5);
    }
    `, "")

test_typechecker(`
    fn fail_closure_check_bare_fn() {
        // function cant take in more than one ref if return ref
        fn apply_function(func: fn(&i32, &i32) -> &i32) {}
    }
    `, "Type error in ClosureType construction; Function parameter can only have one reference type as lifetime annotation not supplied/supported.")

test_typechecker(`
    fn fail_closure_check_ret_type_bare_fn() {
        fn apply_function(func: fn(&i32) -> &mut i32) {}
    }
    `, "Type error in ClosureType construction; Returned ref must have same type as argument ref.")


test_typechecker(`
    fn fail_lookup_unbound_var() {
        abc = 10;
    }
    `, "Type error in pathExpression; [lookup_type] Unbound variable abc.")

test_typechecker(`
    fn fail_deref_non_ref_type() {
        let x: i32 = 123;
        *x;
    }
    `, "Type error; dereferencing a non-reference type: i32")
        
test_typechecker(`
    fn fail_dangling_ref() {
        let mut x: &mut i32 = &mut 5;
        {
            let mut y: i32 = 2;
            x = &mut y;
        }
        let mut z: i32 = *x;
    }
    `, "Type error in assignment; Lifetime of locally assigned reference shorter than variable x.")

test_typechecker(`
    fn fail_dangling_ref_temp_var() {
        let mut x: &mut i32 = &mut 5;
        {
            x = &mut 7;
        }
        let mut z: i32 = *x;
    }
    `, "Type error in assignment; Lifetime of locally assigned reference shorter than variable x.")


test_typechecker(`
    fn fail_dangling_ref_temp_var_2() {
        let mut x: &mut i32 = &mut 5;
        {
            let y: &i32 = &123;
            x = &mut (7 + *y);
        }
        let mut z: i32 = *x;
    }
    `, "Type error in assignment; Lifetime of locally assigned reference shorter than variable x.")


test_typechecker(`
    fn pass_no_dangling_ref_assignment() {
        let mut x: &mut i32 = &mut 5;
        let y: &i32 = &123;
        x = &mut (7 + *y);
        let mut z: i32 = *x;
    }
    `, "")

