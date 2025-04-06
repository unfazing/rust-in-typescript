// Containers for rust types used in compilation so that VM 
// can determine their type.
// Type in rust : type in js
// i32 : number
// f64 : number
// char : string
// String: string
// Pointer: number

import { error } from "console"

export class I32RustType {
    val
    constructor(val: number) {
        this.val = val
    }
}

export class F64RustType {
    val
    constructor(val: number) {
        this.val = val
    }
}

export class CharRustType {
    val
    constructor(val: String) {
        this.val = val
    }
}

export class StringRustType {
    val
    constructor(val: String) {
        this.val = val
    }
}

export class BooleanRustType {
    val
    constructor(val: boolean) {
        this.val = val
    }
}

export class UnitRustType {
}

export function print_error(msg: string) {
    error("[!!!!ERROR] " + msg)
}