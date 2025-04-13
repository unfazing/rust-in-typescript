// Containers for rust types used in compilation so that VM 
// can determine their type.
// Type in rust : type in js
// i32 : number
// f64 : number
// char : string
// String: string
// Pointer: number

import { error } from "console"

export class RustValue<T = any> {
    constructor(public readonly val: T) {}
}

// Numeric types
export class I32RustValue extends RustValue<number> {}
export class F64RustValue extends RustValue<number> {}

// Character/String types
export class CharRustValue extends RustValue<string> {}
export class StringRustValue extends RustValue<string> {}

// Boolean types
export class BooleanRustValue extends RustValue<boolean> {}
export class BooleanTrueRustValue extends BooleanRustValue {
    constructor() { super(true); }
}
export class BooleanFalseRustValue extends BooleanRustValue {
    constructor() { super(false); }
}

// Unit type
export class UnitRustValue extends RustValue<void> {
    constructor() { super(undefined); }
}

export function print_error(msg: string) {
    error("[!!!!ERROR] " + msg)
}