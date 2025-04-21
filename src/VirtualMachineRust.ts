import { assert, error } from "console";
import { builtin_array, primitive_object } from "./CompileTimeEnvRust";
import { BooleanFalseRustValue, BooleanRustValue, BooleanTrueRustValue, CharRustValue, F64RustValue, I32RustValue, RustValue, StringRustValue, UnitRustValue } from "./Utils";
import { start } from "repl";


const LOGGING_ENABLED = false;
function log(message: any, enclosing_function: string): void {
    if (LOGGING_ENABLED) {
        console.log(`[${enclosing_function}] --- ${message}`);
    }
}

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

const False_tag = 0;
const True_tag = 1;
const I32_tag = 2;
const F64_tag = 3;
const Unit_tag = 4; 
const Char_tag = 5;
const Blockframe_tag = 6;
const Callframe_tag = 7;
const Closure_tag = 8;
const Frame_tag = 9;
const Environment_tag = 10;
const Pair_tag = 11;
const Builtin_tag = 12;
const String_tag = 13;
const Reference_tag = 14;
const Unassigned_tag = 15;
const Array_tag = 16;

const tagMap = {
	[False_tag]: "False",
	[True_tag]: "True",
	[I32_tag]: "I32",
	[F64_tag]: "F64",
	[Unit_tag]: "Unit",
	[Char_tag]: "Char",
	[Blockframe_tag]: "BlockFrame",
	[Callframe_tag]: "CallFrame",
	[Closure_tag]: "Closure",
	[Frame_tag]: "Frame",
	[Environment_tag]: "Environment",
	[Pair_tag]: "Pair",
	[Builtin_tag]: "Builtin",
	[String_tag]: "String",
	[Reference_tag]: "Reference",
	[Unassigned_tag]: "Unassigned",
	[Array_tag]: "Array"
};

/* *************************
 * Memory Configs
 * *************************/

const WORD_SIZE = 8;
const NODE_SIZE = 10;
const SIZE_OFFSET = 5; // number of offset bytes in the first word (1 byte tag, 4 bytes payload)
const MEGA = 2 ** 20;
const STRING_POOL_ACTIVATED = true;

/* *************************
 * Stack
 * *************************/

class Stack {

	private stack: DataView;

	// Stack's metadata
	private start_addr: number; 	// lower bound
	private end_addr: number; 		// upper bound

	// Registers
	private SP: number; 			// Stack Pointer: points to the top of the stack
	private FP: number;				// Frame Pointer: points to the start of the current frame

	// Canonical values = SINGLETONS
	public UNASSIGNED: number;

	private temps_marker_stack = [] // stack of addresses to pop all temp variables

	constructor(bytes: number, starting_address: number) {
		if (bytes % WORD_SIZE !== 0) 
			throw new Error(`Runtime Error; [STACK::constructor] Stack size must be divisible by ${WORD_SIZE}`);

		if (starting_address % WORD_SIZE !== 0) 
			throw new Error(`Runtime Error; [STACK::constructor] Starting address of stack must be divisible by ${WORD_SIZE}`)

		const data = new ArrayBuffer(bytes);
		const view = new DataView(data);
		this.stack = view;

		this.start_addr = starting_address;
		this.end_addr = starting_address + (bytes / WORD_SIZE)

		this.FP = starting_address;
		this.SP = starting_address;
	}

	
	/**
	 * We allocate canonical values for unassigned
	 * and make sure no such values are created at runtime
	 */
	init_Canonicals() {
		this.UNASSIGNED = STACK.allocated_Unassigned()
	}

	print_stack_state(): void {

		if (!LOGGING_ENABLED) {
			return;
		}

        console.log("=== Stack State (Raw Bits) ===");
        console.log(`Bounds: [${this.start_addr}..${this.end_addr}] (${(this.end_addr - this.start_addr) * WORD_SIZE} bytes)`);
        console.log(`Registers: FP = ${this.FP}, SP = ${this.SP}`);
        console.log("\nMemory Contents:");

        // Print header
        console.log(
            "Address".padEnd(10) + "\t" +
            "Tag".padEnd(15) + "\t" +
            "Bits (64-bit)".padEnd(68) + "\t" +
            "Pointer"
        );

        for (let addr = this.start_addr; addr < this.start_addr + 50; addr++) {
            const actual_addr = this.convert_to_actual_addr(addr);
            const word_start = actual_addr * WORD_SIZE;
            
            const tag = this.stack.getUint8(word_start);
            const bits = this.get_word_bits(word_start);
            
            const pointers = [
                addr === this.SP ? "SP" : "",
                addr === this.FP ? "FP" : ""
            ].filter(Boolean).join("|") || "";

            console.log(
                `${addr}`.padEnd(10) + "\t" +
                `${this.tag_to_string(tag)}`.padEnd(15) + "\t" +
                `${bits}`.padEnd(68) + "\t" +
                `${pointers}`
            );
        }
    }

    private get_word_bits(byteOffset: number): string {
        // Get all 8 bytes as a BigInt for full 64-bit representation
        const bigIntVal = this.stack.getBigUint64(byteOffset);
        
        // Convert to binary string and pad to 64 bits
        return bigIntVal.toString(2).padStart(64, '0')
            .replace(/(\d{8})(?=\d)/g, '$1 '); // Add space every 8 bits
    }

    // Helper to convert tag numbers to names (need to define tag constants)
    private tag_to_string(tag: number): string {
        return tagMap[tag] || `Unknown`;
    }

	is_out_of_range(address: number): boolean {
		return address < this.start_addr || address >= this.end_addr;
	}

	convert_to_actual_addr(address: number): number {
		return address % this.start_addr;
	}

	// ============================= MEM COPY METHODS ==============================================

	set_raw_word(address: number, raw_word: bigint) {
		const actual_address = this.convert_to_actual_addr(address);
		this.stack.setBigUint64(actual_address * WORD_SIZE, raw_word);
	}

	get_raw_word(address: number): bigint {
		const actual_address = this.convert_to_actual_addr(address);
		return this.stack.getBigUint64(actual_address * WORD_SIZE);
	}

	/**
	 *  Performs a shallow copy of the node at target address to the destination address.
	 * 
	 * @param destination_addr Address of node to copy to.
	 * @param target_addr Address of node to copy from.
	 */
	shallow_copy(destination_addr: number, target_addr: number, words: number) {
		if (this.is_out_of_range(destination_addr)) {
			throw new Error("Runtime Error; [STACK::shallow_copy] destination_addr is out of range. Is it really a stack address?")
		}

		if (this.is_out_of_range(target_addr)) {
			throw new Error("Runtime Error; [STACK::shallow_copy] target_addr is out of range. Is it really a stack address?")
		}
							
		// copy words as raw 64-bit (8 bytes) chunks
		for (let i = 0; i < words; i++) {
			
			// Read and write raw bits (no type interpretation)
			const raw_word_bits = this.get_raw_word(target_addr + i);			
			this.set_raw_word(destination_addr + i, raw_word_bits);
		}
	}

	/**
	 * Allocate a new node at current SP with the same size as the target node.
	 * Then copy the target node over to this newly allocated address.
	 * 
	 * @param target_address 
	 * @returns 
	 */
	create_copy(target_address: number): number {
		const target_size: number = this.get_size(target_address);
		const target_tag: number = this.get_tag(target_address);

		const destination_address = this.allocate(target_tag, target_size);
		const words: number = this.get_size(target_address);

		this.shallow_copy(destination_address, target_address, words);

		return destination_address;
	}

	allocate_Temp_marker() {
		this.temps_marker_stack.push(this.SP);
	}

	cleanup_Temps() {
		const marker: number = this.temps_marker_stack.pop();	
		this.free_heap_allocated_memory_in_range(marker, this.SP);
		this.SP = marker; // pop stack temps
	}

	// ============================= STACK ALLOCATION, GET, SET METHODS ==============================================
	
	// stack word: [1 byte tag, 4 unused bytes, 2 bytes size, 1 unused byte]
	// allocate "size" number of words on the stack
	allocate(tag: number, size: number) {

		const address = this.SP;
		
		// allocate (size) number of words
		this.SP += size;

		if (this.is_out_of_range(this.SP)) {
			throw new Error("Runtime Error; [STACK::allocate] Stack out of space")
		}

		const actual_address = this.convert_to_actual_addr(address);

		// set the first byte to tag
		this.stack.setUint8(actual_address * WORD_SIZE, tag);

		// set size
		// number of children = size - 1
		this.stack.setUint16(actual_address * WORD_SIZE + SIZE_OFFSET, size); 

		return address;
	};

	// Remember to convert to actual address first before any raw byte operation on the ByteArray.
	// e.g. this.stack.get/setFloat64()...

	// get a word in the stack at given address.
	get(address: number) {
		const actual_address = this.convert_to_actual_addr(address);
		return this.stack.getFloat64(actual_address * WORD_SIZE);
	}

	// set a word in the stack at given address.
	set(address: number, x) {
		const actual_address = this.convert_to_actual_addr(address);
		this.stack.setFloat64(actual_address * WORD_SIZE, x);
	}

	// child index starts at 0
	get_child(address: number, child_index: number) {
        return this.get(address + 1 + child_index);
    }

	set_child(address: number, child_index: number, value: number) {
        this.set(address + 1 + child_index, value);
    }

    get_tag(address: number) {
        const actual_address = this.convert_to_actual_addr(address);
        return this.stack.getUint8(actual_address * WORD_SIZE);
    }

	/**
	 * Returns the size of this node
	 * 
	 * @param address 
	 * @returns 
	 */
    get_size(address: number) {
		const actual_address = this.convert_to_actual_addr(address);
        return this.stack.getUint16(actual_address * WORD_SIZE + SIZE_OFFSET); 
    }

    get_number_of_children(address: number) {
		const tag = this.get_tag(address);
		return [I32_tag, F64_tag, Char_tag].includes(tag) ? 0 : this.get_size(address) - 1;
	}

    set_byte_at_offset(address: number, offset: number, value: number) {
        const actual_address = this.convert_to_actual_addr(address);
        this.stack.setUint8(actual_address * WORD_SIZE + offset, value);
    }

    get_byte_at_offset(address: number, offset: number) {
        const actual_address = this.convert_to_actual_addr(address);
        return this.stack.getUint8(actual_address * WORD_SIZE + offset);
    }

    set_2_bytes_at_offset(address: number, offset: number, value: number) {
        const actual_address = this.convert_to_actual_addr(address);
        this.stack.setUint16(actual_address * WORD_SIZE + offset, value);
    }

    get_2_bytes_at_offset(address: number, offset: number) {
        const actual_address = this.convert_to_actual_addr(address);
        return this.stack.getUint16(actual_address * WORD_SIZE + offset);
    }

    set_4_bytes_at_offset(address: number, offset: number, value: number) {
        const actual_address = this.convert_to_actual_addr(address);
        this.stack.setUint32(actual_address * WORD_SIZE + offset, value);
    }

    get_4_bytes_at_offset(address: number, offset: number) {
        const actual_address = this.convert_to_actual_addr(address);
        return this.stack.getUint32(actual_address * WORD_SIZE + offset);
    }

	compare_tag(address: number, expected_tag: number) {
		const actual_tag = this.get_tag(address);
		return actual_tag === expected_tag;
	}

	is_heap_allocated_type(address: number): boolean {
		const HEAP_ALLOCATED_TAGS: number[] = [String_tag] // extend when more heap allocated types added
		const actual_tag: number = this.get_tag(address);
		return HEAP_ALLOCATED_TAGS.includes(actual_tag);
	}

	// allocation of primitive types
	// [1 byte tag, 4 bytes unused, 2 bytes size, 1 byte unused]
	allocate_False(): number {
		return this.allocate(False_tag, 1); 
	}

	// [1 byte tag, 4 bytes unused, 2 bytes size, 1 byte unused]
	is_False(address: number): boolean {
		return this.get_tag(address) === False_tag
	}

	// [1 byte tag, 4 bytes unused, 2 bytes size, 1 byte unused]
	allocate_True(): number {
		return this.allocate(True_tag, 1); 
	}

	// [1 byte tag, 4 bytes unused, 2 bytes size, 1 byte unused]
	is_True(address: number): boolean {
		return this.get_tag(address) === True_tag
	}

	// [1 byte tag, 4 bytes unused, 2 bytes size, 1 byte unused]
	is_Boolean(address: number): boolean {
		return this.is_True(address) || this.is_False(address);
	}

	// [1 byte tag, 4 bytes unused, 2 bytes size, 1 byte unused]
	allocate_Unit(): number {
        return this.allocate(Unit_tag, 1);
    }

    is_Unit(address: number): boolean {
        return this.get_tag(address) === Unit_tag;
    }

	private allocated_Unassigned() {
        return this.allocate(Unassigned_tag, 1);
	}
	
	is_Unassigned(address: any) {
		return this.get_tag(address) === Unassigned_tag;
	}

	set_Int32(address: number, x: number) {
		const actual_address = this.convert_to_actual_addr(address);
		this.stack.setInt32(actual_address * WORD_SIZE, x);
	}

	get_Int32(address: number): number {
		const actual_address = this.convert_to_actual_addr(address);
		return this.stack.getInt32(actual_address * WORD_SIZE);
	}
	
	/**
	 * Allocates an I32 node on the stack. 
	 * First word stores the tag, second word stores the I32 encoding.
	 * 
	 * @param x The Rust I32 value.
	 * @returns The address of the newly allocated I32 node.
	 */
    allocate_I32(x: I32RustValue): number {
        const number_address = this.allocate(I32_tag, 2);
        this.set_Int32(number_address + 1, x.val); // decode as Int32 instead of Float64
        return number_address;
    }

    is_I32(address: number): boolean {
        return this.get_tag(address) === I32_tag;
    }

	get_I32(address: number): I32RustValue {
		return new I32RustValue(STACK.get_Int32(address + 1)); // second word in i32 node stores the number
	}

	allocate_F64(x: F64RustValue): number {
        const number_address = this.allocate(F64_tag, 2);
        this.set(number_address + 1, x.val); // this.set and this.get encode/decode using Float64 by default
        return number_address;
    }

    is_F64(address: number): boolean {
        return this.get_tag(address) === F64_tag;
    }

	get_F64(address: number): F64RustValue {
		return new F64RustValue(STACK.get(address + 1)); // second word in f64 node stores the number
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
	
	// [1 byte tag, 1 byte is_mut, 3 bytes unused, 2 bytes size, 1 byte unused]
	// followed by the address of referenced object.
	allocate_Reference(target_addr: number, is_mut_borrow: boolean): number {
		const address = this.allocate(Reference_tag, 2);

		// set mutability of borrow at 2nd byte in first word
		this.set_byte_at_offset(address, 1, (is_mut_borrow ? 1 : 0));

		// set the target address (what this reference points to)
		this.set(address + 1, target_addr)

		return address;
	}

	get_Reference_target(address: number): number {
		return this.get_child(address, 0)
	}

	get_Reference_mutability(address: number): number {
		return this.get_byte_at_offset(address, 1); // 1 or 0
	}

	is_Reference(address: number): boolean {
		return this.get_tag(address) === Reference_tag;
	}

	// Builtins
	// [1 byte tag, 1 byte id, 3 bytes unused,
	//  2 bytes size, 1 byte unused]
	// Note: #children is 0
	allocate_Builtin(id: number): number {
		const addr = this.allocate(Builtin_tag, 1);
		this.set_byte_at_offset(addr, 1, id);
		return addr;
	}

	get_Builtin_Id(address: number): number {
		return this.get_byte_at_offset(address, 1);
	}

	// [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused,
	//  2 bytes size, 1 byte unused]
	// followed by the address of env
	allocate_Closure(arity: number, pc: number, env): number {
		// first word is tag with PC and arity
		const stack_address = this.allocate(Closure_tag, 2); 

		this.set_byte_at_offset(stack_address, 1, arity);
		this.set_2_bytes_at_offset(stack_address, 2, pc);
		this.set(stack_address + 1, env);

		return stack_address;
	}

	get_Closure_arity(address: number): number {
		return this.get_byte_at_offset(address, 1);
	}

	get_Closure_PC(address: number): number {
		return this.get_2_bytes_at_offset(address, 2);
	}

	get_Closure_Env(address: number): number {
		return this.get_child(address, 0);
	}

	// call frame
	// [1 byte tag, 1 byte unused, 2 bytes pc,
	//  1 byte unused, 2 bytes size, 1 byte unused]
	// followed by the address of env
	allocate_Callframe(env_address: number, pc: number): number {
		// log(`Stack before allot:`, "ALLOCATING CALL FRAME")
		// this.print_stack_state();

		const address = this.allocate(Callframe_tag, 3);

		this.set_2_bytes_at_offset(address, 2, pc);
		this.set(address + 1, env_address);
		this.set(address + 2, this.FP) // saved FP to restore later

		// FP points to the start of this call frame
		this.FP = address; 

		// log(`Stack after allot:`, "ALLOCATING CALL FRAME")
		// this.print_stack_state();

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

	pop_Callframe() {
		// log(`Stack before pop:`, "POP CALL FRAME")
		// this.print_stack_state();

		// sanity check
		if (!this.is_Callframe()) {
			throw new Error("Runtime Error; [STACK::pop_Callframe] FP is not pointed to a call frame.")
		}

		this.free_heap_allocated_memory_in_range(this.FP, this.SP);

		this.SP = this.FP;
		this.FP = this.get_Callframe_FP();

		// log(`Stack after pop:`, "POP CALL FRAME")
		// this.print_stack_state();

	}

	// block frame
	// [1 byte tag, 4 bytes unused,
	//  2 bytes size, 1 byte unused]
	// followed by the address of env
	allocate_Blockframe(env_addr: number): number {

		// log(`Stack before allot:`, "ALLOCATING BLOCK FRAME")
		// this.print_stack_state();

		const address = this.allocate(Blockframe_tag, 3);
		this.set(address + 1, env_addr);
		this.set(address + 2, this.FP); // saved FP to restore later

		// FP points to the start of this block frame
		this.FP = address; 

		// log(`Stack after allot:`, "ALLOCATING BLOCK FRAME")
		// this.print_stack_state()

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

	pop_Blockframe() {
		// sanity check
		if (!this.is_Blockframe()) {
			throw new Error("Runtime Error; [STACK::pop_Blockframe] FP is not pointed to a block frame.")
		}

		this.free_heap_allocated_memory_in_range(this.FP, this.SP);

		this.SP = this.FP;
		this.FP = this.get_Blockframe_FP();
	}

	/**
	 * Iterate through each node in the given range
	 * to free heap-allocated nodes pointed to by
	 * valid (unmoved) stack pointers
	 */
	free_heap_allocated_memory_in_range(starting_addr: number, ending_addr: number) {
		
		// the address at the top of the OS is the object we are moving out of scope!
		const address_on_OS = peek(OS, 0); // case where RHS is a call or block expr
		const is_result_heap_allocated = this.is_heap_allocated_type(address_on_OS)
		
		let addr = starting_addr;
		while (addr < ending_addr) {
			// console.log(`[STACK::pop_Blockframe] Visiting stack addr ${addr}, tag: ${this.tag_to_string(STACK.get_tag(addr))}`)

			// skip this address if its being moved outside of scope
			if (address_on_OS === addr) {
				const size = this.get_tag(address_on_OS) === Array_tag 
					? this.get_Array_size(addr)
					: this.get_size(addr)
				addr = addr + size;

				continue	
			} 
			
			if (this.is_heap_allocated_type(addr) && !this.is_moved(addr)) {
				const heap_addr = this.get_heap_allocated_address(addr)
				// console.log(`[STACK::pop_Blockframe] Visiting stack pointer at addr ${addr}, freeing ${address_to_Rust_value(addr).val}`)
				HEAP.freeMem(heap_addr)
			}
			
			const size = this.get_size(addr)
			addr = addr + size
		}
	}

	// actual string value is heap allocated
	// tag = [1 byte tag, 4 byte payload, 2 byte size, 1 byte to indicate moved (invalid) stack pointer]
	allocate_String(x: StringRustValue): number {
		const stack_address = this.allocate(String_tag, 2); // first word is tag, 2nd word is address to the heap string

		const heap_address = HEAP.allocateString(x);

		this.set(stack_address + 1, heap_address); // stores heap address in the first child
		this.set_byte_at_offset(stack_address, 7, 0); // stack pointer is not moved (valid) upon init

		return stack_address;
	}

	is_String(address: number): boolean {
		return this.get_tag(address) === String_tag;
	}

	get_String_Heap_addr(address: number): number{
		return this.get_child(address, 0);
	}

	// returns string node from heap
	get_String(address: number): StringRustValue {
		const heap_addr = this.get_String_Heap_addr(address)
		return HEAP.getString(heap_addr);
	}

	/**
	 * Mark this node as moved if it is heap-allocated
	 * If this node is an array, recursively mark its elements too
	 * 
	 * @param address 
	 */
	move_recursively(address: number) {
		if (this.get_tag(address) !== Array_tag) {
			if (this.is_heap_allocated_type(address)) {
				this.mark_moved(address);
			}
		} else {
			const elements: number[] = this.get_Array_elements(address)
			for (const element_addr of elements) {
				this.move_recursively(element_addr)
			}
		}
	}

	/**
	 * Frees this node from heap memory if it is heap-allocated.
	 * If this node is an array, recursively free its elements too
	 * 
	 * @param address 
	 * @returns 
	 */
	free_recursively(address: number): boolean {
		if (this.get_tag(address) !== Array_tag) {
			let free_success = false;
			if (this.is_heap_allocated_type(address)) {
				HEAP.freeMem(this.get_heap_allocated_address(address));
				free_success = true;
			}
			return free_success;
		} else {
			const elements: number[] = this.get_Array_elements(address)
			for (const element_addr of elements) {
				const free_success = this.free_recursively(element_addr)

				// terminate early if this array does 
				// NOT store heap-allocated elements
				if (!free_success) {
					return free_success
				}
			}
		}
	}

	mark_moved(address: number): void {
		if (!this.is_heap_allocated_type(address)) {
			throw new Error("Runtime Error; [STACK::mark_moved] Trying to move a non-referenced type.")
		}

		this.set_byte_at_offset(address, 7, 1); // 1 == moved
	}

	is_moved(address: number): boolean {
		return (this.get_byte_at_offset(address, 7) === 1)
	}

	// Standardize: every stack pointer should 
	// stores the heap address of target in its first child
	get_heap_allocated_address(address: number): number {
		return this.get_child(address, 0);
	}

	set_SP_to_addr(addr: number) {
		this.SP = addr
	}
	
	get_SP(): number {
		return this.SP
	}
	// Array node = 2 words
	// 1st word is [1 byte tag, 4 bytes unused, 2 bytes size, 1 byte unused]
	// 2nd word stores length (first 32 bits) and elementSize (last 32 bits)
	allocate_Array(len: number, elementSize: number): number {
		const stack_address = this.allocate(Array_tag, 2); 

		this.set_4_bytes_at_offset(stack_address + 1, 0, len);
		this.set_4_bytes_at_offset(stack_address + 1, 4, elementSize);

		return stack_address;
	}

	/**
	 * Returns the number of element in the array
	 * 
	 * @param address 
	 * @returns 
	 */
	get_Array_len(address): number {
		return this.get_4_bytes_at_offset(address + 1, 0);
	}

	get_Array_element_size(address): number {
		return this.get_4_bytes_at_offset(address + 1, 4);
	}

	/**
	 * Returns the size of the whole array in words
	 * 
	 * @param address 
	 * @returns 
	 */
	get_Array_size(address): number {
		return STACK.get_Array_len(address) * STACK.get_Array_element_size(address) + 2
	}

	/**
	 * Returns the element of this array at the given index.
	 * 
	 * @param address 
	 * @param idx 
	 * @returns 
	 */
	get_Array_element(address: number, idx: number): number {
		const length = this.get_Array_len(address);
		const element_size = this.get_Array_element_size(address)

		if (idx >= length) {
			throw new Error("Runtime error; Accessing index out of bound of array")
		}

		return (address + this.get_size(address)) + idx * element_size;
	}

	/**
	 * Returns an array of addresses of this array's elements.
	 * 
	 * @param address 
	 * @returns 
	 */
	get_Array_elements(address: number): number[] {
		const length = this.get_Array_len(address);
		let result: number[] = []
		for (let i = 0; i < length; i++) {
			result.push(this.get_Array_element(address, i))
		}

		return result;
	}
}
	
/* *************************
 * Heap
 * *************************/

class Heap {
	// Only String, Env and Env Frame nodes are allocated on Heap
	private heap: DataView;
	private free: number = 0;
	private stringPool: Record<number, { address: number; string: string }[]> = {};
	n_nodes_used: number = 0;
	n_nodes_freed: number = 0;

	// a stack of env allocated to be freed on scope exit
	private environementStack = []

	constructor(heap_size_bytes: number) {
		if (heap_size_bytes % (WORD_SIZE * NODE_SIZE) !== 0) throw new Error("Runtime Error; [HEAP::constructor] heap bytes must be divisible by word size * node size");
		this.heap = new DataView(new ArrayBuffer(heap_size_bytes));

		// set up linked list of free nodes
		let i
		for (i = 0; i < heap_size_bytes / WORD_SIZE - NODE_SIZE; i = i + NODE_SIZE) {
			this.set(i, i + NODE_SIZE)
		}
		this.set(i, -1)
	}

	freeMem(address: number) {
		// sanity check
		if (is_stack_address(address)) {
			throw new Error("Runtime Error; [HEAP::freeMem] Trying to free stack allocated memory address")
		}

		if (!tagMap[HEAP.getTag(address)]) {
			throw new Error("Runtime Error; [HEAP::freeMem] Trying to free memory that is already freed")
		}
		
		// console.log(`[freeMem] Freed Memory of ${address} Tag: ${tagMap[(HEAP.getTag(address))]}`)
		
		// Leave string heap nodes to free at the end of programme execution
		if (STRING_POOL_ACTIVATED && HEAP.getTag(address) === String_tag) {
			return;
		}

		this.n_nodes_used--
		this.n_nodes_freed++
		this.set(address, this.free)
		this.free = address
	}

	freeStringMem(address: number) {

		if (!STRING_POOL_ACTIVATED) return;
		
		// sanity check
		if (is_stack_address(address)) {
			throw new Error("Runtime Error; [HEAP::freeStringMem] Address is not a heap node!")
		}

		if (tagMap[HEAP.getTag(address)] != "String") {
			throw new Error("Runtime Error; [HEAP::freeStringMem] Address is not a String node!")
		}
		
		// console.log(`[freeMem] Freed Memory of ${address} Tag: ${tagMap[(HEAP.getTag(address))]}`)
		
		this.n_nodes_used--
		this.n_nodes_freed++
		this.set(address, this.free)
		this.free = address
	}

	freeStringPool() {
		for (const pool of Object.values(this.stringPool)) {
			pool.forEach(entry => this.freeStringMem(entry.address))
		}
	}

	allocate(tag: number, size: number): number {
		if (size > NODE_SIZE) {
            throw new Error("Runtime Error; [HEAP::allocate] Limitation: nodes cannot be larger than 10 words")
        }

		if (this.free == -1) {
			throw new Error("Runtime Error; [HEAP::allocate] Heap memory exhausted")
		}
		this.n_nodes_used++
		const address = this.free;
		this.free = HEAP.get(this.free);
		this.heap.setUint8(address * WORD_SIZE, tag);
		this.heap.setUint16(address * WORD_SIZE + SIZE_OFFSET, size);
		return address;
	}

	get(address: number): number {
		return this.heap.getFloat64(address * WORD_SIZE);
	}

	set(address: number, value: number): void {
		this.heap.setFloat64(address * WORD_SIZE, value);
	}

	getChild(address: number, index: number): number {
		return this.get(address + 1 + index);
	}

	setChild(address: number, index: number, value: number): void {
		this.set(address + 1 + index, value);
	}

	getTag(address: number): number {
		return this.heap.getUint8(address * WORD_SIZE);
	}

	getSize(address: number): number {
		return this.heap.getUint16(address * WORD_SIZE + SIZE_OFFSET);
	}
	
	getNumberOfChildren(address: number): number {
		return this.getSize(address) - 1;
	}

	hasOwner(address: number): boolean {
		return this.getByte(address, 7) === 1
	}
	
	// byte/2byte/4byte utilities
	setByte(address: number, offset: number, value: number): void {
		this.heap.setUint8(address * WORD_SIZE + offset, value);
	}
	getByte(address: number, offset: number): number {
		return this.heap.getUint8(address * WORD_SIZE + offset);
	}
	set2Bytes(address: number, offset: number, value: number): void {
		this.heap.setUint16(address * WORD_SIZE + offset, value);
	}
	get2Bytes(address: number, offset: number): number {
		return this.heap.getUint16(address * WORD_SIZE + offset);
	}
	set4Bytes(address: number, offset: number, value: number): void {
		this.heap.setUint32(address * WORD_SIZE + offset, value);
	}
	get4Bytes(address: number, offset: number): number {
		return this.heap.getUint32(address * WORD_SIZE + offset);
	}

	// String interning
	// [1 byte tag, 4 byte hash to stringPool,
	// 2 bytes #children, 1 byte hasOwner]
	// Note: #children is 0
	allocateString(stringRust: StringRustValue): number {
		const string = stringRust.val;

		const hash = this.hashString(string);
		const pool = this.stringPool[hash] ?? [];

		for (const entry of pool) {
			if (entry.string === string) return entry.address;
		}

		const address = this.allocate(String_tag, 2);
		this.set4Bytes(address, 1, hash);
		this.set2Bytes(address, 5, pool.length);
		pool.push({ address, string });
		this.stringPool[hash] = pool;

		return address;
	}

	getString(address: number): StringRustValue {
		const hash = this.get4Bytes(address, 1);
		const index = this.get2Bytes(address, 5);
		if (this.stringPool[hash] == undefined) {
			console.log(JSON.stringify(this.stringPool))
		}
		return new StringRustValue(this.stringPool[hash][index].string);
	}

	private hashString(str: string): number {
		let hash = 5381;
		for (let i = 0; i < str.length; i++) {
			hash = (hash << 5) + hash + str.charCodeAt(i);
			hash &= 0xffffffff;
		}
		return hash >>> 0;
	}

	isString(address: number): boolean {
		return this.getTag(address) === String_tag;
	}


	// Environments
	// [1 byte tag, 4 bytes unused,
	//  2 bytes #children, 1 byte unused]
	// followed by the addresses of its frames
	allocateEnvironment(numFrames: number): number {
		const env_address = this.allocate(Environment_tag, numFrames + 1);

		push(this.environementStack, env_address);

		return env_address;
	}

	extendEnvironment(newFrame: number, env: number): number {
		const oldSize = this.getSize(env);
		const newEnv = this.allocateEnvironment(oldSize);
		for (let i = 0; i < oldSize - 1; i++) {
			this.setChild(newEnv, i, this.getChild(env, i));
		}
		this.setChild(newEnv, oldSize - 1, newFrame);
		return newEnv;
	}

	getEnvValue(envAddr: number, [frameIdx, valIdx]: [number, number]): number {
		const frameAddr = this.getChild(envAddr, frameIdx);
		return this.getChild(frameAddr, valIdx);
	}

	setEnvValue(envAddr: number, [frameIdx, valIdx]: [number, number], value: number): void {
		const frameAddr = this.getChild(envAddr, frameIdx);
		this.setChild(frameAddr, valIdx, value);
	}

	freeEnvironmentAndLatestFrame() {
		const address = this.environementStack.pop();

		const n_children = this.getNumberOfChildren(address);
		if (n_children > 0) {
			const last_frame_addr = this.getChild(address, n_children - 1);
			this.freeMem(last_frame_addr);
		}

		// free the current env
		this.freeMem(address);
	}

	// Env Frame
	// [1 byte tag, 4 bytes unused,
	//  2 bytes #children, 1 byte unused]
	// followed by the addresses of its values
	allocateFrame(numberOfValues: number): number {
		return this.allocate(Frame_tag, numberOfValues + 1);
	}

	// TODO: init builtins and primitive constants properly
 	initializeGlobalEnvironment() {
		const heap_empty_Environment = HEAP.allocateEnvironment(0);

		const primitive_values = Object.values(primitive_object);
		const frame_address = HEAP.allocateFrame(primitive_values.length);

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

		const global_environment = HEAP.extendEnvironment(
			frame_address,
			heap_empty_Environment,
		);

		return global_environment;
	}

	freeGlobalEnvironment() {
		assert(this.environementStack.length == 2, "At the end of the program, there should remain 2 environments left (global and empty environment)")

		while (this.environementStack.length > 0) {
			this.freeEnvironmentAndLatestFrame();
		}
	}

}

//
// conversions between addresses and Rust Value
//

const is_stack_address = (address: number): boolean => !STACK.is_out_of_range(address)

const address_to_Rust_value = (address: number): RustValue => {
	let value: RustValue | undefined;

	if (STACK.is_Unassigned(address)) {
		// console.log("Runtime WARNING; [address_to_Rust_value] Access of uninitialized variable.");
		return new RustValue("Unassigned")
	}

	if (STACK.is_False(address)) {
		value = new BooleanFalseRustValue();
	}

	if (STACK.is_True(address)) {
		value = new BooleanTrueRustValue();
	}

	if (STACK.is_I32(address)) {
		value = STACK.get_I32(address);
	}

	if (STACK.is_F64(address)) {
		value = STACK.get_F64(address);
	}

	if (STACK.is_Char(address)) {
		value = STACK.get_Char(address); // return a CharRustValue
	}

	if (STACK.is_Unit(address)) {
		value = new UnitRustValue();
	}

	if (STACK.is_Reference(address)) {
		value = new RustValue("reference"); 
	}

	if (STACK.is_String(address)) {
		value = STACK.get_String(address);
	}

	if (STACK.compare_tag(address, Array_tag)) {
		value = new RustValue("<array>"); // we should not use the array value
	}

	if (STACK.compare_tag(address, Closure_tag)) {
		value = new RustValue("<closure>"); // we should not use the closure value at all
	}

	// Uncomment and implement if needed:
	// if (is_Builtin(address)) {
	//     value = new RustValue("<builtin>");
	// }

	if (value === undefined) {
		throw new Error("Runtime Error: [address_to_Rust_value] Unknown tag");
	}

	return value;
};

	
const Rust_value_to_address = (x: RustValue): number => {

	if (x instanceof BooleanRustValue) {
		return x.val ? STACK.allocate_True() : STACK.allocate_False();
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
		return STACK.allocate_Unit();
	}

	if (x instanceof StringRustValue) {
		return STACK.allocate_String(x);
	}

	throw new Error("Runtime error; [Rust_value_to_address] unknown value")
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
    "+": (x: RustValue<number|string>, y: RustValue<number|string>) => {
		if (x instanceof StringRustValue && y instanceof StringRustValue) {
			return new StringRustValue(x.val + y.val);
		}

        if (x instanceof I32RustValue && y instanceof I32RustValue) {
            return new I32RustValue(x.val + y.val);
        }

		if (x instanceof F64RustValue || y instanceof F64RustValue) {
			return new F64RustValue((x as RustValue<number>).val + (y as RustValue<number>).val);
		}

		throw new Error(`Runtime Error; Operation "+" require both numeric operands or string operands`)
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
		throw new Error("Runtime Error; Unary operator '-' requires a numeric operand"); // should be handled by typechecker; just sanity check
	},

	// Logical NOT (works on booleans)
	"!": (x: BooleanRustValue) => {
		if (x instanceof BooleanRustValue) {
			return new BooleanRustValue(!x.val);
		}
		throw new Error("Runtime Error; Unary operator '!' requires a boolean operand");
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


/* *******
 * machine
 * *******/

// machine registers
let OS; 	// JS array (stack) of words (Addresses, word-encoded literals, numbers)
let PC; 	// JS number
let E; 		// heap Address

// Memory
let STACK: Stack; 
let HEAP: Heap; 		

const microcode = {
	LDC: (instr) => push(OS, Rust_value_to_address(instr.val)),
	UNOP: (instr) => push(OS, apply_unop(instr.sym, OS.pop())),
	BINOP: (instr) => push(OS, apply_binop(instr.sym, OS.pop(), OS.pop())),
	POP: (instr) => OS.pop(),
	JOF: (instr) => (PC = STACK.is_True(OS.pop()) ? PC : instr.addr),
	GOTO: (instr) => (PC = instr.addr),
	ENTER_SCOPE: (instr) => {
		STACK.allocate_Blockframe(E);
		const frame_address = HEAP.allocateFrame(instr.num);
		E = HEAP.extendEnvironment(frame_address, E);

		for (let i = 0; i < instr.num; i++) {
			HEAP.setChild(frame_address, i, STACK.UNASSIGNED); // all variable are unassigned initially
		}
	},
	EXIT_SCOPE: (instr) => {

		if (!STACK.is_Blockframe()) { // sanity check
			throw new Error("Runtime Error; [instr: EXIT_SCOPE] Current stack frame is not a block frame when EXIT_SCOPE instruction is executed.")
		}

		// Deallocate current environment and its latest frame
		HEAP.freeEnvironmentAndLatestFrame();
		
		// restore the environment
		E = STACK.get_Blockframe_environment();

		// pop the current block frame and 
		// free heap nodes allocated in this scope 
		// THAT HAVE NOT BEEN MOVED
		STACK.pop_Blockframe();
	
	},
	LD: (instr) => {
		const addr = HEAP.getEnvValue(E, instr.pos); // this address is either a stack or heap addr

		if (STACK.is_Unassigned(addr)) {
			throw new Error("Runtime error; [instr: LD] Illegal access of unassigned variable"); // sanity check: should be checked on the type checker.
		}

		if (STACK.is_heap_allocated_type(addr) && STACK.is_moved(addr)) {
			throw new Error("Runtime error; [instr: LD] Illegal access of a moved variable"); // sanity check: should be checked on the type checker.
		}

		push(OS, addr); 
	},
	STACK_ALLOCATE: (instr) => {
		const address = STACK.allocate(Unassigned_tag, instr.size);
		HEAP.setEnvValue(E, instr.pos, address);

		// create marker to pop temp operands later
		STACK.allocate_Temp_marker();
	}, 
	ASSIGN_MARKER: (instr) => {
		STACK.allocate_Temp_marker();
	},
	ASSIGN: (instr) => {
		// e.g, LHS = RHS

		const RHS_address = OS.pop();
		const LHS_address = HEAP.getEnvValue(E, instr.pos); // allocated position for this variable on the stack

		if (!is_stack_address(LHS_address) || !is_stack_address(RHS_address)) {
			throw new Error("Runtime Error; [instr: ASSIGN] Assignment must be done on the stack, never the heap")
		} 

		// we can safely deallocate old heap object pointed to by LHS
		// because the typechecker enforces that this object has no 
		// dangling references by the time an assignnment happens
		STACK.free_recursively(LHS_address);
		
		const words_to_copy: number = STACK.get_tag(RHS_address) === Array_tag 
			? STACK.get_Array_size(RHS_address)
		 	: STACK.get_size(RHS_address);

		STACK.shallow_copy(LHS_address, RHS_address, words_to_copy);

		STACK.move_recursively(RHS_address)

		STACK.cleanup_Temps()

		// finally, push unit value on OS, 
		// because an assignment expression 
		// always has Unit value in Rust
		push(OS, STACK.allocate_Unit())
	},
	ASSIGN_DEREF: (instr) => {
		// eg. *x = y;
		// at this point, the 2 top most values on OS are: OS = [address of y, address of *x (the target address)]
		
		const LHS_address = OS.pop()
		const RHS_address = OS.pop()

		// Proceed with normal assignment

		// we can safely deallocate old heap object pointed to by LHS
		// because the typechecker enforces that this object has no 
		// dangling references by the time an assignmnent happens
		STACK.free_recursively(LHS_address);
		
		const words_to_copy: number = STACK.get_tag(RHS_address) === Array_tag 
			? STACK.get_Array_size(RHS_address)
		 	: STACK.get_size(RHS_address);

		STACK.shallow_copy(LHS_address, RHS_address, words_to_copy);

		STACK.move_recursively(RHS_address);

		STACK.cleanup_Temps()

		// finally, push unit value on OS, 
		// because an assignment expression 
		// always has Unit value in Rust
		push(OS, STACK.allocate_Unit())
	},
	LDF: (instr) => {
		const closure_address = STACK.allocate_Closure(instr.arity, instr.addr, E);
		push(OS, closure_address);
	},
	ASSIGN_FN: (instr) => {
		const fn_addr = OS.pop();
		HEAP.setEnvValue(E, instr.pos, fn_addr);
		push(OS, STACK.allocate_Unit())
	},
	CALL: (instr) => {
		const arity = instr.arity;
		const fun = peek(OS, arity); // an address to a closure, either built-in or user-defined

		if (STACK.compare_tag(fun, Builtin_tag)) {
			return apply_builtin(STACK.get_Builtin_Id(fun));
		}

		// else, must a be a user defined function. Stored on the stack
		const frame_address = HEAP.allocateFrame(arity);
		for (let i = arity - 1; i >= 0; i--) {
			HEAP.setChild(frame_address, i, OS.pop());
		}
		OS.pop(); // pop fun

		STACK.allocate_Callframe(E, PC);

		E = HEAP.extendEnvironment(
			frame_address,
			STACK.get_Closure_Env(fun), 
		);

		PC = STACK.get_Closure_PC(fun);
	},
	TAIL_CALL: (instr) => {
		const arity = instr.arity;
		const fun = peek(OS, arity);
		if (STACK.compare_tag(fun, Builtin_tag)) {
			return apply_builtin(STACK.get_Builtin_Id(fun));
		}

		const frame_address = HEAP.allocateFrame(arity);
		for (let i = arity - 1; i >= 0; i--) {
			HEAP.setChild(frame_address, i, OS.pop());
		}
		OS.pop(); // pop fun

		// don't push on RTS here

		E = HEAP.extendEnvironment(
			frame_address,
			STACK.get_Closure_Env(fun),
		);

		PC = STACK.get_Closure_PC(fun);
	},
	REF: (instr) => {
		const target_addr: number = OS.pop()
		const is_mut_borrow = instr.is_mutable;

		const ref_address = STACK.allocate_Reference(target_addr, is_mut_borrow);
		push(OS, ref_address);
	},
	DEREF: (instr) => {
		const reference_address = OS.pop();

		if (!STACK.is_Reference(reference_address)) {
			throw new Error("Runtime Error; [instr: DEREF] Dereferencing a non-reference type");
		}

		push(OS, STACK.get_Reference_target(reference_address));
	},
	RESET: (instr) => {

		while (STACK.is_Blockframe()) {
			HEAP.freeEnvironmentAndLatestFrame();

			// Restore FP. No need to restore E. 
			// Also free heap nodes whose owners were allocated in this scope
			STACK.pop_Blockframe();
		}

		// Current stack frame must be the first call frame

		// Deallocate current environment and its latest frame
		HEAP.freeEnvironmentAndLatestFrame();

		// restore PC, E and FP
		PC = STACK.get_Callframe_PC();
		E = STACK.get_Callframe_environment();

		STACK.pop_Callframe(); 
	},
                
	ARRAY_PLACEHOLDER: (instr) => {
		const array_placeholder_addr = STACK.allocate_Array(instr.length, instr.elementSize)
		
		// preallocate mem for elements
		const size: number = instr.length * instr.elementSize
		STACK.allocate(Unassigned_tag, size) 

		push(OS, array_placeholder_addr)
	},

	ARRAY_FILL: (instr) => {
		// OS currently has [array_placeholder_addr, value_addr]
		const value_addr: number = OS.pop()
		const array_placeholder_addr: number = peek(OS, 0)

		if (STACK.is_heap_allocated_type(value_addr)) { // sanity check
			throw new Error("Runtime error; Cannot use a non-copy type in array fill syntax")
		}

		// copy the values over to the placeholder block of memory
		let addr_pointer: number = array_placeholder_addr + STACK.get_size(array_placeholder_addr) // 2 === size of array tag
		for (let i = 0; i < instr.length; i++) {
			STACK.shallow_copy(addr_pointer, value_addr, instr.elementSize)
			addr_pointer += instr.elementSize
		}
	},

	ARRAY: (instr) => {
		// OS currently has [array_placeholder_addr, elem_n_addr, elem_n-1 addr, ... elem_1_addr] 
		// elements are in reverse order on OS

		const element_addrs: number[] = [] 
		for (let i = 0; i < instr.length; i++) {
			element_addrs.push(OS.pop()) // values are in correct order in `element_addrs` array
		}

		const array_placeholder_addr: number = peek(OS, 0)
		
		// copy or move the values over to the placeholder block of memory
		let addr_pointer: number = array_placeholder_addr + STACK.get_size(array_placeholder_addr) // 2 === size of array tag
		for (const element_addr of element_addrs) {
			STACK.shallow_copy(addr_pointer, element_addr, instr.elementSize)

			// move elements of nested arrays
			STACK.move_recursively(element_addr)

			addr_pointer += instr.elementSize
		}
	},

	ARRAY_INDEX: (instr) => {
		const index: number = address_to_Rust_value(OS.pop()).val
		const array_addr: number = OS.pop()

		// will throw index out-of-bound error if violated
		const element_addr = STACK.get_Array_element(array_addr, index) 

		push(OS, element_addr)
	}
};

const heap_Environment_display = (env_address) => {
	const size = HEAP.getNumberOfChildren(env_address);
	console.log("Environment:");
	console.log("environment size:" + size);
	for (let i = 0; i < size; i++) {
		console.log("frame index: " + i);
		const frame = HEAP.getChild(env_address, i);
		heap_Frame_display(frame);
	}
};


const heap_Frame_display = (address) => {
	console.log("Frame:\n");
	const size = HEAP.getNumberOfChildren(address);
	console.log("frame size:" + size);
	for (let i = 0; i < size; i++) {
		console.log("value address: " + i);
		const value = HEAP.getChild(address, i);
		console.log("value: " + value);
		console.log("value word: " + word_to_string(value));
	}
};

const word_to_string = (word) => {
	const buf = new ArrayBuffer(8);
	const view = new DataView(buf);
	view.setFloat64(0, word);
	let binStr = "";
	for (let i = 0; i < 8; i++) {
		binStr += ("00000000" + view.getUint8(i).toString(2)).slice(-8) + " ";
	}
	return binStr;
};

function run(instrs) {
	OS = [];
	PC = 0;
	
	// initialize heap
	const heap_size = 1000000
	HEAP = new Heap(heap_size);
	
	E = HEAP.initializeGlobalEnvironment();
	
	// initialize stack
	const stack_size = 1000000; // 125000 word addresses
	const stack_starting_addr = heap_size; 	
	STACK = new Stack(stack_size, stack_starting_addr)
	STACK.init_Canonicals();

	// Run codes on VM
	while (!(instrs[PC].tag === "DONE")) {
		const instr = instrs[PC++];
		log(JSON.stringify(instr), "Instr")
		
		microcode[instr.tag](instr);
		STACK.print_stack_state()
		print_OS()
	}

	HEAP.freeGlobalEnvironment();

	let program_value = undefined;

	const value_addr = peek(OS, 0)
	if (value_addr) {
		program_value = address_to_Rust_value(value_addr).val;

		if (STACK.is_heap_allocated_type(value_addr)) {
			HEAP.freeMem(STACK.get_heap_allocated_address(value_addr))
		}
	}

	HEAP.freeStringPool()

	// console.log("Heap nodes automatically freed during execution of env: " + HEAP.n_nodes_freed)
	// console.log("Heap nodes leaked at end of execution: " + HEAP.n_nodes_used)
	if (HEAP.n_nodes_used > 0) {
		throw new Error(`Runtime error; Memory leak! ${HEAP.n_nodes_used} heap nodes are not freed`)
	}

	return program_value;
}

export class RustVirtualMachine {
	constructor() {}

	execute(instructions: Object[]): any {
		if (instructions.length == 0)
			return undefined

		return run(instructions)
	}
}

// debugging
const print_OS = () => {
	if (!LOGGING_ENABLED) return

	console.log("OS:")
	for (let i = 0; i < OS.length; i = i + 1) {
		const val = OS[i];
		console.log(i + " - " + JSON.stringify(address_to_Rust_value(val)));
	}
};