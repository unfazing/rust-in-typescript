// Containers for rust types used in compilation so that VM 
// can determine their type.
// Type in rust : type in js
// i32 : number
// f64 : number
// char : string
// String: string
// Pointer: number

import { error } from "console"

class I32RustType {
    val
    constructor(val: number) {
        this.val = val
    }
}

class F64RustType {
    val
    constructor(val: number) {
        this.val = val
    }
}

class CharRustType {
    val
    constructor(val: String) {
        this.val = val
    }
}

class StringRustType {
    val
    constructor(val: String) {
        this.val = val
    }
}

class BooleanRustType {
    val
    constructor(val: boolean) {
        this.val = val
    }
}

class UnitRustType {
}

export function print_error(msg: string) {
    error("[!!!!ERROR] " + msg)
}