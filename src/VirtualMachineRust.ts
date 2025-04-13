import { assert, error } from "console";
import { builtin_array, primitive_object } from "./CompileTimeEnvRust";
import { BooleanFalseRustValue, BooleanRustValue, BooleanTrueRustValue, CharRustValue, F64RustValue, I32RustValue, RustValue, StringRustValue, UnitRustValue } from "./Utils";

// (2) no loops and arrays

/* **********************
 * using arrays as stacks
 * **********************/

// add values destructively to the end of
// given array; return the array
const push = (array, ...items) => {
	// fixed by Liew Zhao Wei, see Discussion 5
	for (let item of items) {
		array.push(item);
	}
	return array;
};

// return the last element of given array
// without changing the array
const peek = (array, address) => array.slice(-1 - address)[0];


/* *************************
 * Tags
 * *************************/

// All values are allocated in the memory as nodes. The first
// word of the node is a header, and the first byte of the
// header is a tag that identifies the type of node
//
// Primitives are stored on the stack, the rest on the heap.

const False_tag 		= 0;
const True_tag			= 1;
const I32_tag 			= 2;
const F64_tag 			= 3;
const Unit_tag 			= 4; // equivalent to undefined
const Char_tag			= 5;
const Blockframe_tag	= 6;
const Callframe_tag 	= 7;
const Closure_tag 		= 8;
const Frame_tag 		= 9;
const Environment_tag 	= 10;
const Pair_tag 			= 11;
const Builtin_tag 		= 12;
const String_tag 		= 13; 
const Reference_tag 	= 14;


/* *************************
 * Memory Configs
 * *************************/

const word_size = 8;
const mega = 2 ** 20;


/* *************************
 * Stack
 * *************************/

class Stack {

	private stack: DataView;

	private start_addr: number; 	// lower bound
	private end_addr: number; 		// upper bound
	private size_offset: number; 	// number of offset bytes in the first word

	private SP: number; 			// Stack Pointer: points to the top of the stack
	private FP: number;				// Frame Pointer: points to the start of the current frame

	constructor(bytes: number, starting_address: number) {
		if (bytes % word_size !== 0) 
			error(`Stack size must be divisible by ${word_size}`);

		if (starting_address % word_size !== 0) 
			error(`Starting address of stack must be divisible by ${word_size}`)

		const data = new ArrayBuffer(bytes);
		const view = new DataView(data);
		this.stack = view;

		this.start_addr = starting_address;
		this.end_addr = starting_address + (bytes / word_size)
		this.size_offset = 5; 

		this.FP = starting_address;
		this.SP = starting_address;
	}

	pop_Blockframe() {
		// sanity check
		if (!this.is_Blockframe()) {
			throw new Error("FP is not pointed to a block frame.")
		}

		this.SP = this.FP;
		this.FP = this.get_Blockframe_FP();
	}

	pop_Callframe() {
		// sanity check
		if (!this.is_Callframe()) {
			throw new Error("FP is not pointed to a call frame.")
		}

		this.SP = this.FP;
		this.FP = this.get_Callframe_FP();
	}

	is_out_of_range(address: number): boolean {
		return address < this.start_addr || address >= this.end_addr;
	}

	convert_to_virtual_addr(address: number): number {
		return address % this.start_addr;
	}

	// allocate "size" number of words on the stack
	allocate(tag: number, size: number) {

		const address = this.SP;
		
		// allocate (size) number of words
		this.SP += size;

		if (this.is_out_of_range(this.SP)) {
			throw new Error("Stack out of space")
		}

		const virtual_address = this.convert_to_virtual_addr(address);

		// set the first byte to tag
		this.stack.setUint8(virtual_address * word_size, tag);

		// number of children = size - 1
		this.stack.setUint16(virtual_address * word_size + this.size_offset, size); 

		return address;
	};

	// Remember to convert to virtual address first before any raw byte operation on the ByteArray.
	// e.g. this.stack.get/setFloat64()...

	// get a word in the stack at given address.
	get(address: number) {
		const virtual_address = this.convert_to_virtual_addr(address);
		return this.stack.getFloat64(virtual_address * word_size);
	}

	// set a word in the stack at given address.
	set(address: number, x) {
		const virtual_address = this.convert_to_virtual_addr(address);
		this.stack.setFloat64(virtual_address * word_size, x);
	}

	// child index starts at 0
	get_child(address: number, child_index: number) {
        return this.get(address + 1 + child_index);
    }

	set_child(address: number, child_index: number, value: number) {
        this.set(address + 1 + child_index, value);
    }

    get_tag(address: number) {
        const virtual_address = this.convert_to_virtual_addr(address);
        return this.stack.getUint8(virtual_address * word_size);
    }

    get_size(address: number) {
        const virtual_address = this.convert_to_virtual_addr(address);
        return this.stack.getUint16(virtual_address * word_size + this.size_offset); 
    }

    get_number_of_children(address: number) {
		const tag = this.get_tag(address);
		return [I32_tag, F64_tag, Char_tag].includes(tag) ? 0 : this.get_size(address) - 1;
	}

    set_byte_at_offset(address: number, offset: number, value: number) {
        const virtual_address = this.convert_to_virtual_addr(address);
        this.stack.setUint8(virtual_address * word_size + offset, value);
    }

    get_byte_at_offset(address: number, offset: number) {
        const virtual_address = this.convert_to_virtual_addr(address);
        return this.stack.getUint8(virtual_address * word_size + offset);
    }

    set_2_bytes_at_offset(address: number, offset: number, value: number) {
        const virtual_address = this.convert_to_virtual_addr(address);
        this.stack.setUint16(virtual_address * word_size + offset, value);
    }

    get_2_bytes_at_offset(address: number, offset: number) {
        const virtual_address = this.convert_to_virtual_addr(address);
        return this.stack.getUint16(virtual_address * word_size + offset);
    }

    set_4_bytes_at_offset(address: number, offset: number, value: number) {
        const virtual_address = this.convert_to_virtual_addr(address);
        this.stack.setUint32(virtual_address * word_size + offset, value);
    }

    get_4_bytes_at_offset(address: number, offset: number) {
        const virtual_address = this.convert_to_virtual_addr(address);
        return this.stack.getUint32(virtual_address * word_size + offset);
    }


	// allocation of primitive types

	allocate_False(): number {
		return this.allocate(False_tag, 1); 
	}

	is_False(address: number): boolean {
		return this.get_tag(address) === False_tag
	}

	allocate_True(): number {
		return this.allocate(True_tag, 1); 
	}

	is_True(address: number): boolean {
		return this.get_tag(address) === True_tag
	}

	allocate_Unit(): number {
        return this.allocate(Unit_tag, 1);
    }

    is_Unit(address: number): boolean {
        return this.get_tag(address) === Unit_tag;
    }

    allocate_I32(x: I32RustValue): number {
        const number_address = this.allocate(I32_tag, 2);
        this.set(number_address + 1, x.val);
        return number_address;
    }

    is_I32(address: number): boolean {
        return this.get_tag(address) === I32_tag;
    }

	get_I32(address: number): I32RustValue {
		return new I32RustValue(STACK.get(address + 1)); // second word in i32 node stores the number
	}

	allocate_F64(x: F64RustValue): number {
        const number_address = this.allocate(F64_tag, 2);
        this.set(number_address + 1, x.val);
        return number_address;
    }

    is_F64(address: number): boolean {
        return this.get_tag(address) === F64_tag;
    }

	get_F64(address: number): F64RustValue {
		return new I32RustValue(STACK.get(address + 1)); // second word in f64 node stores the number
	}

	allocate_Char(x: CharRustValue): number {
        const number_address = this.allocate(Char_tag, 2);
        this.set(number_address + 1, x.val.charCodeAt(0)); // store the Unicode of char as number
        return number_address;
    }

	get_Char(address: number): CharRustValue {
		const codePoint = this.get(address + 1); // Retrieve the stored number
    	return new CharRustValue(String.fromCharCode(codePoint)); // convert Unicode to char
	}

	is_Char(address: number): boolean {
        return this.get_tag(address) === Char_tag;
	}

	// TODO: allocate reference

	// call frame
	// [1 byte tag, 1 byte unused, 2 bytes pc,
	//  1 byte unused, 2 bytes #children, 1 byte unused]
	// followed by the address of env
	allocate_Callframe(env_address: number, pc: number): number {
		const address = this.allocate(Callframe_tag, 3);

		this.set_2_bytes_at_offset(address, 2, pc);
		this.set(address + 1, env_address);
		this.set(address + 2, this.FP) // saved FP to restore later

		// FP points to the start of this call frame
		this.FP = address; 

		return address;
	}

	get_Callframe_PC(): number {
		return this.get_2_bytes_at_offset(this.FP, 2);
	}

	get_Callframe_environment(): number {
		return this.get_child(this.FP, 0)
	}

	get_Callframe_FP(): number {
		return this.get_child(this.FP, 1)
	}

	is_Callframe(): boolean {
		return this.get_tag(this.FP) === Callframe_tag;
	}

	// block frame
	// [1 byte tag, 4 bytes unused,
	//  2 bytes #children, 1 byte unused]
	// followed by the address of env
	allocate_Blockframe(env_addr: number) {
		const address = this.allocate(Blockframe_tag, 2);
		this.set(address + 1, env_addr);
		this.set(address + 2, this.FP); // saved FP to restore later

		// FP points to the start of this block frame
		this.FP = address; 

		return address;
	};

	get_Blockframe_environment(): number {
		return this.get_child(this.FP, 0);
	}

	get_Blockframe_FP(): number {
		return this.get_child(this.FP, 1);
	}

	is_Blockframe(): boolean {
		return this.get_tag(this.FP) === Blockframe_tag;
	}

}

const stack_size = 1000000; 			// 125000 word addresses
const stack_starting_addr = 1000000; 	// assuming heap ends at address 999999 for now
const STACK = new Stack(stack_size, stack_starting_addr)

/* *************************
 * HEAP
 * *************************/

// HEAP is an array of bytes (JS ArrayBuffer)

// heap_make allocates a heap of given size
// (in megabytes)and returns a DataView of that,
// see https://www.javascripture.com/DataView
const heap_make = (bytes) => {
	if (bytes % 8 !== 0) error("heap bytes must be divisible by 8");
	const data = new ArrayBuffer(bytes);
	const view = new DataView(data);
	return view;
};

// we randomly pick a heap size of 1000000 bytes
const HEAP = heap_make(1000000);

// free is the next free index in HEAP
// we keep allocating as if there was no tomorrow
let free = 0;

// heap_allocate allocates a given number of words
// on the heap and marks the first word with a 1-byte tag.
// the last two bytes of the first word indicate the number
// of children (addresses) that follow the tag word:
// [1 byte tag, 4 bytes payload (depending on node type),
//  2 bytes #children, 1 byte unused]
// Note: payload depends on the type of node
const size_offset = 5;
const heap_allocate = (tag, size) => {
	const address = free;
	
	// allocate (size) number of words
	free += size;

	// set the first byte to tag
	HEAP.setUint8(address * word_size, tag);

	// number of children = size - 1
	HEAP.setUint16(address * word_size + size_offset, size); 

	return address;
};

// get and set a word in heap at given address
const heap_get = (address) => HEAP.getFloat64(address * word_size);

const heap_set = (address, x) => HEAP.setFloat64(address * word_size, x);

// child index starts at 0
const heap_get_child = (address, child_index) =>
	heap_get(address + 1 + child_index);

const heap_set_child = (address, child_index, value) =>
	heap_set(address + 1 + child_index, value);

const heap_get_tag = (address) => HEAP.getUint8(address * word_size);

const heap_get_size = (address) =>
	HEAP.getUint16(address * word_size + size_offset);

// the number of children is one less than the size
const heap_get_number_of_children = (address) => heap_get_size(address) - 1;

// access byte in heap, using address and offset
const heap_set_byte_at_offset = (address, offset, value) =>
	HEAP.setUint8(address * word_size + offset, value);

const heap_get_byte_at_offset = (address, offset) =>
	HEAP.getUint8(address * word_size + offset);

// access 2 bytes in heap, using address and offset
const heap_set_2_bytes_at_offset = (address, offset, value) =>
	HEAP.setUint16(address * word_size + offset, value);

const heap_get_2_bytes_at_offset = (address, offset) =>
	HEAP.getUint16(address * word_size + offset);

// access 4 bytes in heap, using address and offset
const heap_set_4_bytes_at_offset = (address, offset, value) =>
	HEAP.setUint32(address * word_size + offset, value);

const heap_get_4_bytes_at_offset = (address, offset) =>
	HEAP.getUint32(address * word_size + offset);

// // for debugging: return a string that shows the bits
// // of a given word
// const word_to_string = (word) => {
// 	const buf = new ArrayBuffer(8);
// 	const view = new DataView(buf);
// 	view.setFloat64(0, word);
// 	let binStr = "";
// 	for (let i = 0; i < 8; i++) {
// 		binStr += ("00000000" + view.getUint8(i).toString(2)).slice(-8) + " ";
// 	}
// 	return binStr;
// };

// Record<string, tuple(number, string)< where the key is the hash of the string
// and the value is a tuple of the address of the string and the string itself
let stringPool = {}; // ADDED CHANGE

// We allocate canonical values for
// true, false, unit (undefined)
// and make sure no such values are created at runtime
//
// boolean values carry their value (0 for false, 1 for true)
// in the byte following the tag
const False = STACK.allocate_False();
const is_False = (address) => STACK.is_False(address);

const True = STACK.allocate_True();
const is_True = (address) => STACK.is_True(address);

const is_Boolean = (address) => is_True(address) || is_False(address);

const Unit = STACK.allocate_Unit();
const is_Unit = (address) => STACK.is_Unit(address);

// ADDED CHANGE
// strings:
// [1 byte tag, 4 byte hash to stringPool,
// 2 bytes #children, 1 byte unused]
// Note: #children is 0

// Hash any string to a 32-bit unsigned integer
const hashString = (str) => {
	let hash = 5381;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) + hash + char;
		hash = hash & hash;
	}
	return hash >>> 0;
};

const is_String = (address) => heap_get_tag(address) === String_tag;

const heap_allocate_String = (string) => {
	const hash = hashString(string);
	const a = stringPool[hash];

	if (a !== undefined) {
	    for (let i = 0; i < a.length; i++) {
            if (a[i].string === string)
                return a[i].address;
            const address = heap_allocate(String_tag, 2);
            heap_set_4_bytes_at_offset(address, 1, hash);
            heap_set_2_bytes_at_offset(address, 5, i);
            a[i] = {address, string};
            return address;
        }
	}

	const address = heap_allocate(String_tag, 2);
	heap_set_4_bytes_at_offset(address, 1, hash);
	heap_set_2_bytes_at_offset(address, 5, 0);

	// Store {address, string} in the string pool under hash at index 0
	stringPool[hash] = [{address, string}];

	return address;
};

const heap_get_string_hash = (address) =>
	heap_get_4_bytes_at_offset(address, 1);

const heap_get_string_index = (address) =>
	heap_get_2_bytes_at_offset(address, 5);
	
const heap_get_string = (address) =>
	stringPool[heap_get_string_hash(address)]
	          [heap_get_string_index(address)]
	          .string;

// builtins: builtin id is encoded in second byte
// [1 byte tag, 1 byte id, 3 bytes unused,
//  2 bytes #children, 1 byte unused]
// Note: #children is 0

const is_Builtin = (address) => heap_get_tag(address) === Builtin_tag;

const heap_allocate_Builtin = (id) => {
	const address = heap_allocate(Builtin_tag, 1);
	heap_set_byte_at_offset(address, 1, id);
	return address;
};

const heap_get_Builtin_id = (address) => heap_get_byte_at_offset(address, 1);

// closure
// [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused,
//  2 bytes #children, 1 byte unused]
// followed by the address of env => closure has environment capture, but Rust fn does not.

// note: currently bytes at offset 4 and 7 are not used;
//   they could be used to increase pc and #children range

const heap_allocate_Closure = (arity, pc, env) => {
	const address = heap_allocate(Closure_tag, 2);
	heap_set_byte_at_offset(address, 1, arity);
	heap_set_2_bytes_at_offset(address, 2, pc);
	heap_set(address + 1, env);
	return address;
};

const heap_get_Closure_arity = (address) => heap_get_byte_at_offset(address, 1);

const heap_get_Closure_pc = (address) => heap_get_2_bytes_at_offset(address, 2);

const heap_get_Closure_environment = (address) => heap_get_child(address, 0);

const is_Closure = (address) => heap_get_tag(address) === Closure_tag;

// environment frame
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by the addresses of its values

const heap_allocate_Frame = (number_of_values) =>
	heap_allocate(Frame_tag, number_of_values + 1);

// const heap_Frame_display = (address) => {
// 	display("", "Frame:");
// 	const size = heap_get_number_of_children(address);
// 	display(size, "frame size:");
// 	for (let i = 0; i < size; i++) {
// 		display(i, "value address:");
// 		const value = heap_get_child(address, i);
// 		display(value, "value:");
// 		display(word_to_string(value), "value word:");
// 	}
// };

// environment
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by the addresses of its frames

const heap_allocate_Environment = (number_of_frames) =>
	heap_allocate(Environment_tag, number_of_frames + 1);

const heap_empty_Environment = heap_allocate_Environment(0);

// access environment given by address
// using a "position", i.e. a pair of
// frame index and value index
const heap_get_Environment_value = (env_address, position) => {
	const [frame_index, value_index] = position;
	const frame_address = heap_get_child(env_address, frame_index);
	return heap_get_child(frame_address, value_index);
};

const heap_set_Environment_value = (env_address, position, value) => {
	const [frame_index, value_index] = position;
	const frame_address = heap_get_child(env_address, frame_index);
	heap_set_child(frame_address, value_index, value);
};

// extend a given environment by a new frame:
// create a new environment that is bigger by 1
// frame slot than the given environment.
// copy the frame Addresses of the given
// environment to the new environment.
// enter the address of the new frame to end
// of the new environment
const heap_Environment_extend = (frame_address, env_address) => {
	const old_size = heap_get_size(env_address);
	const new_env_address = heap_allocate_Environment(old_size);
	let i;
	for (i = 0; i < old_size - 1; i++) {
		heap_set_child(new_env_address, i, heap_get_child(env_address, i));
	}
	heap_set_child(new_env_address, i, frame_address);
	return new_env_address;
};

// // for debuggging: display environment
// // const heap_Environment_display = (env_address) => {
// // 	const size = heap_get_number_of_children(env_address);
// // 	display("", "Environment:");
// // 	display(size, "environment size:");
// // 	for (let i = 0; i < size; i++) {
// // 		display(i, "frame index:");
// // 		const frame = heap_get_child(env_address, i);
// // 		heap_Frame_display(frame);
// // 	}
// // };

// number (I32 / F64)
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by the number, one word
// note: #children is 0

// reference
// [1 byte tag, 4 bytes, unused,
//  2 bytes #children, 1 byte unused]
// followed by the address of the underlying value
// then the address of referenced variable
const heap_allocate_Reference = (address) => {
	// const reference_address = heap_allocate(Number_tag, 2);
	// heap_set(reference_address + 1, heap_get(address)) // underlying value
	// heap_set(reference_address + 2, address); // referenced variable
	// return reference_address;
}

const heap_get_underlying_value = (address) => heap_get(address + 1);
const heap_get_referenced_variable = (address) => heap_get(address + 2);


const is_Reference = (address) => heap_get_tag(address) === Reference_tag;

//
// conversions between addresses and Rust Value
//

const is_stack_address = (address: number): boolean => (address >= stack_starting_addr)

const address_to_Rust_value = (address: number): RustValue => {

	let value: RustValue | undefined;

	if (is_stack_address(address)) {

		value = STACK.is_False(address)
			? new BooleanFalseRustValue()
			: STACK.is_True(address)
			? new BooleanTrueRustValue()
			: STACK.is_I32(address)
			? STACK.get_I32(address)
			: STACK.is_F64(address)
			? STACK.get_F64(address)
			: STACK.is_Char(address)
			? STACK.get_Char(address) // return a CharRustValue
			: STACK.is_Unit(address)
			? new UnitRustValue()
			: undefined

	} else {

		value = is_String(address) 
			? new StringRustValue(heap_get_string(address)) 
			// : is_Closure(address)
			// ? "<closure>"
			// : is_Builtin(address)
			// ? "<builtin>"
			: undefined

	}

	if (value === undefined) {
		throw new Error("Unknown tag");
	}

	return value;
}
	
const Rust_value_to_address = (x: RustValue): number => {

	if (x instanceof BooleanRustValue) {
		return x.val ? True : False;
	}

	if (x instanceof I32RustValue) {
		return STACK.allocate_I32(x);
	}

	if (x instanceof F64RustValue) {
		return STACK.allocate_F64(x);
	}

	if (x instanceof CharRustValue) {
		return STACK.allocate_Char(x);
	}

	if (x instanceof UnitRustValue) {
		return Unit;
	}

	if (x instanceof StringRustValue) {
		return heap_allocate_String(x);
	}

	throw new Error("unknown value")
}

/* **********************
 * operators and builtins
 * **********************/

// Supported binops: [&&, ||, &, |, -, %, +, /, *, ^, ===, >=, >, <=, <, !==]
const binop_microcode = {
    // Logical operations (return BooleanRustValue)
    "&&": (x: BooleanRustValue, y: BooleanRustValue) => new BooleanRustValue(x.val && y.val),
    "||": (x: BooleanRustValue, y: BooleanRustValue) => new BooleanRustValue(x.val || y.val),
    
    // Bitwise operations (return I32RustValue)
    "&": (x: I32RustValue, y: I32RustValue) => new I32RustValue(x.val & y.val),
    "|": (x: I32RustValue, y: I32RustValue) => new I32RustValue(x.val | y.val),
    "^": (x: I32RustValue, y: I32RustValue) => new I32RustValue(x.val ^ y.val),
    
    // Arithmetic operations (return I32RustValue or F64RustValue)
    "+": (x: RustValue<number>, y: RustValue<number>) => {
        if (x instanceof I32RustValue && y instanceof I32RustValue) {
            return new I32RustValue(x.val + y.val);
        }
        return new F64RustValue(x.val + y.val);
    },
    "*": (x: RustValue<number>, y: RustValue<number>) => {
        if (x instanceof I32RustValue && y instanceof I32RustValue) {
            return new I32RustValue(x.val * y.val);
        }
        return new F64RustValue(x.val * y.val);
    },
    "-": (x: RustValue<number>, y: RustValue<number>) => {
        if (x instanceof I32RustValue && y instanceof I32RustValue) {
            return new I32RustValue(x.val - y.val);
        }
        return new F64RustValue(x.val - y.val);
    },
    "/": (x: RustValue<number>, y: RustValue<number>) => new F64RustValue(x.val / y.val),
    "%": (x: I32RustValue, y: I32RustValue) => new I32RustValue(x.val % y.val),
    
    // Comparison operations (return BooleanRustValue)
    "<": (x: RustValue<number>, y: RustValue<number>) => new BooleanRustValue(x.val < y.val),
    "<=": (x: RustValue<number>, y: RustValue<number>) => new BooleanRustValue(x.val <= y.val),
    ">=": (x: RustValue<number>, y: RustValue<number>) => new BooleanRustValue(x.val >= y.val),
    ">": (x: RustValue<number>, y: RustValue<number>) => new BooleanRustValue(x.val > y.val),
    "===": (x: RustValue<any>, y: RustValue<any>) => new BooleanRustValue(x.val === y.val),
    "!==": (x: RustValue<any>, y: RustValue<any>) => new BooleanRustValue(x.val !== y.val), 
};

// v2 is popped before v1
const apply_binop = (op, v2, v1) => 
	Rust_value_to_address(
		binop_microcode[op](address_to_Rust_value(v1), address_to_Rust_value(v2)),
	);

const unop_microcode = {
	// Numeric negation (preserves type: i32 -> i32, f64 -> f64)
	"-unary": (x: RustValue<number>) => {
		if (x instanceof I32RustValue) {
			return new I32RustValue(-x.val);
		} else if (x instanceof F64RustValue) {
			return new F64RustValue(-x.val);
		}
		throw new Error("Unary '-' requires a numeric operand"); // should be handled by typechecker; just sanity check
	},

	// Logical NOT (works on booleans)
	"!": (x: BooleanRustValue) => {
		if (x instanceof BooleanRustValue) {
			return new BooleanRustValue(!x.val);
		}
		throw new Error("Unary '!' requires a boolean operand");
	}
};

const apply_unop = (op: string, v: number): number => {
	const rustVal: RustValue = address_to_Rust_value(v);
	const result: RustValue = unop_microcode[op](rustVal);
	return Rust_value_to_address(result);
};

// in this machine, the builtins take their
// arguments directly from the operand stack,
// to save the creation of an intermediate
// argument array
const builtin_object = {
	// display: () => {
	// 	const address = OS.pop();
	// 	display(address_to_JS_value(address));
	// 	return address;
	// },
	// get_time: () => JS_value_to_address(get_time()),
	// error: () => error(address_to_JS_value(OS.pop())),
	// is_number: () => (is_Number(OS.pop()) ? True : False),
	// is_boolean: () => (is_Boolean(OS.pop()) ? True : False),
	// is_undefined: () => (is_Undefined(OS.pop()) ? True : False),
	// is_string: () => (is_String(OS.pop()) ? True : False), // ADDED CHANGE
	// is_function: () => is_Closure(OS.pop()),
	// math_sqrt: () =>
	// 	JS_value_to_address(math_sqrt(address_to_JS_value(OS.pop()))),
	// pair: () => {
	// 	const tl = OS.pop();
	// 	const hd = OS.pop();
	// 	return heap_allocate_Pair(hd, tl);
	// },
	// is_pair: () => (is_Pair(OS.pop()) ? True : False),
	// head: () => heap_get_child(OS.pop(), 0),
	// tail: () => heap_get_child(OS.pop(), 1),
	// is_null: () => (is_Null(OS.pop()) ? True : False),
	// set_head: () => {
	// 	const val = OS.pop();
	// 	const p = OS.pop();
	// 	heap_set_child(p, 0, val);
	// },
	// set_tail: () => {
	// 	const val = OS.pop();
	// 	const p = OS.pop();
	// 	heap_set_child(p, 1, val);
	// },
};

const apply_builtin = (builtin_id) => {
	const result = builtin_array[builtin_id]();
	OS.pop(); // pop fun
	push(OS, result);
};

// creating global runtime environment
const primitive_values = Object.values(primitive_object);

const frame_address = heap_allocate_Frame(primitive_values.length);
// for (let i = 0; i < primitive_values.length; i++) {
// 	const primitive_value = primitive_values[i];

// 	if (typeof primitive_value === "object" && primitive_value.hasOwnProperty("id")) {
// 		heap_set_child(frame_address, i, heap_allocate_Builtin(primitive_value.id));

// 	} else if (typeof primitive_value === "undefined") {
// 		heap_set_child(frame_address, i, Unit);

// 	} else {
// 		heap_set_child(frame_address, i, heap_allocate_Number(primitive_value));
// 	}
// }

const global_environment = heap_Environment_extend(
	frame_address,
	heap_empty_Environment,
);

/* *******
 * machine
 * *******/

// machine registers
let OS; 	// JS array (stack) of words (Addresses, word-encoded literals, numbers)
let PC; 	// JS number
let E; 		// heap Address
// let RTS; 	// JS array (stack) of Addresses

// Memory
HEAP; 		// declared above
STACK; 		// declared above

const microcode = {
	LDC: (instr) => push(OS, Rust_value_to_address(instr.val)),
	UNOP: (instr) => push(OS, apply_unop(instr.sym, OS.pop())),
	BINOP: (instr) => push(OS, apply_binop(instr.sym, OS.pop(), OS.pop())),
	POP: (instr) => OS.pop(),
	JOF: (instr) => (PC = is_True(OS.pop()) ? PC : instr.addr), // TODO: check on stack
	GOTO: (instr) => (PC = instr.addr),
	ENTER_SCOPE: (instr) => {
		STACK.allocate_Blockframe(E);

		const frame_address = heap_allocate_Frame(instr.num);
		E = heap_Environment_extend(frame_address, E);

		for (let i = 0; i < instr.num; i++) {
			heap_set_child(frame_address, i, Unit); // all variable are unassigned initially
		}
	},
	EXIT_SCOPE: (instr) => {

		if (!STACK.is_Blockframe()) { // sanity check
			throw new Error("Current stack frame is not a block frame when EXIT_SCOPE instruction is executed.")
		}

		// TODO: free mem in the heap (environmnent node + latest env frame)

		// restore the environment
		E = STACK.get_Blockframe_environment();

		// pop the current block frame and the nodes allocated in this scope
		STACK.pop_Blockframe();

	},
	LD: (instr) => {
		const addr = heap_get_Environment_value(E, instr.pos); // this address is either a stack or heap addr
		// if (is_Unit(val)) error("access of unassigned variable"); => should be checked on the type checker already!
		push(OS, addr); 
	},
	ASSIGN: (instr) => heap_set_Environment_value(E, instr.pos, peek(OS, 0)),
	LDF: (instr) => {
		const closure_address = heap_allocate_Closure(instr.arity, instr.addr, E);
		push(OS, closure_address);
	},
	CALL: (instr) => {
		const arity = instr.arity;
		const fun = peek(OS, arity);
		if (is_Builtin(fun)) {
			return apply_builtin(heap_get_Builtin_id(fun));
		}
		const frame_address = heap_allocate_Frame(arity);
		for (let i = arity - 1; i >= 0; i--) {
			heap_set_child(frame_address, i, OS.pop());
		}
		OS.pop(); // pop fun

		STACK.allocate(E, PC);

		E = heap_Environment_extend(
			frame_address,
			heap_get_Closure_environment(fun),
		);
		PC = heap_get_Closure_pc(fun);
	},
	TAIL_CALL: (instr) => {
		const arity = instr.arity;
		const fun = peek(OS, arity);
		if (is_Builtin(fun)) {
			return apply_builtin(heap_get_Builtin_id(fun));
		}
		const frame_address = heap_allocate_Frame(arity);
		for (let i = arity - 1; i >= 0; i--) {
			heap_set_child(frame_address, i, OS.pop());
		}
		OS.pop(); // pop fun

		// don't push on RTS here

		E = heap_Environment_extend(
			frame_address,
			heap_get_Closure_environment(fun),
		);
		PC = heap_get_Closure_pc(fun);
	},
	REF: (instr) => {
		const referenced_var = OS.pop()
		const reference_address = heap_allocate_Reference(referenced_var);
		push(OS, reference_address);
	},
	DEREF: (instr) => {
		const reference_address = OS.pop();
		assert(is_Reference(reference_address), "Dereferencing a non-reference");;
		const underlying_value = heap_get_underlying_value(reference_address);
		push(OS, underlying_value);
	},
	RESET: (instr) => {
		// TODO: free current env node + lastest env frame
// 
		while (STACK.is_Blockframe()) {
			// TODO: free environment node + latest env frame of this block frame

			// Restore FP. No need to restore E.
			STACK.pop_Blockframe();
		}

		
		// Current stack frame must be the first call frame
		// TODO: free heap + environment

		// restore PC, E and FP
		PC = STACK.get_Callframe_PC()
		E = STACK.get_Callframe_environment();
		STACK.pop_Callframe() 
	},
};

function run(instrs) {
	OS = [];
	PC = 0;
	E = global_environment;
	stringPool = {}; 

	// todo: clear stack and heap?? but clear what?? stack and heap should be initialized with global env and canonical values (true, false, unit)

	while (!(instrs[PC].tag === "DONE")) {
		//heap_display()
		//print_OS("\noperands:            ");
		//print_RTS("\nRTS:            ");

		const instr = instrs[PC++];
		microcode[instr.tag](instr);
	}
	//print_OS()

	const value_in_Rust = address_to_Rust_value(peek(OS, 0));
	return value_in_Rust.val;
}

export class RustVirtualMachine {
	constructor() {}

	execute(instructions: Object[]): any {
		return run(instructions)
	}
}

// debugging

// const print_code = () => {
// 	for (let i = 0; i < instrs.length; i = i + 1) {
// 		const instr = instrs[i];
// 		display(
// 			"",
// 			stringify(i) +
// 				": " +
// 				instr.tag +
// 				" " +
// 				(instr.tag === "GOTO" ? stringify(instr.addr) : "") +
// 				(instr.tag === "ENTER_SCOPE" ? stringify(instr.num) : "") +
// 				(instr.tag === "LDC" ? stringify(instr.val) : "") +
// 				(instr.tag === "ASSIGN" ? stringify(instr.pos) : "") +
// 				(instr.tag === "LD" ? stringify(instr.pos) : "") +
// 				(instr.tag === "BINOP" ? stringify(instr.sym) : ""),
// 		);
// 	}
// };

// const print_RTS = (x) => {
// 	display("", x);
// 	for (let i = 0; i < RTS.length; i = i + 1) {
// 		const f = RTS[i];
// 		display("", stringify(i) + ": " + f.tag);
// 	}
// };

// const print_OS = (x) => {
// 	display("", x);
// 	for (let i = 0; i < OS.length; i = i + 1) {
// 		const val = OS[i];
// 		display("", stringify(i) + ": " + address_to_JS_value(val));
// 	}
// };