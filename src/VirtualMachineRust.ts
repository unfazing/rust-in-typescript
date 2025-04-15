import { assert, error } from "console";
import { builtin_array, primitive_object } from "./CompileTimeEnvRust";
import { BooleanFalseRustValue, BooleanRustValue, BooleanTrueRustValue, CharRustValue, F64RustValue, I32RustValue, RustValue, StringRustValue, UnitRustValue } from "./Utils";
import { env } from "process";

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
	[Unassigned_tag]: "Unassigned"
};

/* *************************
 * Memory Configs
 * *************************/

const word_size = 8;
const node_size = 10;
const size_offset = 5; // number of offset bytes in the first word (1 byte tag, 4 bytes payload)
const mega = 2 ** 20;

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
	public TRUE: number;
	public FALSE: number;
	public UNIT: number;
	public UNASSIGNED: number;

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

		this.FP = starting_address;
		this.SP = starting_address;
	}

	
	/**
	 * We allocate canonical values for true, false, unit (undefined), unassigned
	 * and make sure no such values are created at runtime
	 */
	init_Canonicals() {
		// boolean values carry their value (0 for false, 1 for true)
		// in the byte following the tag
		this.FALSE = STACK.allocate_False();
		this.TRUE = STACK.allocate_True();
		this.UNIT = STACK.allocate_Unit();
		this.UNASSIGNED = STACK.allocated_Unassigned()
	}

	print_stack_state(): void {

		if (!LOGGING_ENABLED) {
			return;
		}

        console.log("=== Stack State (Raw Bits) ===");
        console.log(`Bounds: [${this.start_addr}..${this.end_addr}] (${(this.end_addr - this.start_addr) * word_size} bytes)`);
        console.log(`Registers: FP = ${this.FP}, SP = ${this.SP}`);
        console.log("\nMemory Contents:");

        // Print header
        console.log(
            "Address".padEnd(10) + "\t" +
            "Tag".padEnd(15) + "\t" +
            "Bits (64-bit)".padEnd(68) + "\t" +
            "Pointer"
        );

        for (let addr = this.start_addr; addr < this.start_addr + 30; addr++) {
            const virtual_addr = this.convert_to_virtual_addr(addr);
            const word_start = virtual_addr * word_size;
            
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

	convert_to_virtual_addr(address: number): number {
		return address % this.start_addr;
	}

	set_raw_word(address: number, raw_word: bigint) {
		const virtual_address = this.convert_to_virtual_addr(address);
		this.stack.setBigUint64(virtual_address * word_size, raw_word);
	}

	get_raw_word(address: number): bigint {
		const virtual_address = this.convert_to_virtual_addr(address);
		return this.stack.getBigUint64(virtual_address * word_size);
	}

	/**
	 *  Performs a shallow copy of the node at target address to the destination address.
	 * 
	 * @param destination_addr Address of node to copy to.
	 * @param target_addr Address of node to copy from.
	 */
	shallow_copy(destination_addr: number, target_addr: number) {
		if (this.is_out_of_range(destination_addr)) {
			throw new Error("destination_addr is out of range. Is it really a stack address?")
		}

		if (this.is_out_of_range(target_addr)) {
			throw new Error("target_addr is out of range. Is it really a stack address?")
		}
		
		const target_size: number = this.get_size(target_addr);
		const dest_size: number = this.get_size(destination_addr);

		// this should be handled by the Typechecker! Cannot assign a different type to a variable
		if (dest_size !== target_size) {
			throw new Error("Cannot copy more or fewer words than the size of the destination node.")
		}

		// copy words as raw 64-bit chunks
		for (let i = 0; i < target_size; i++) {
			
			// Read and write raw bits (no type interpretation)
			const raw_word_bits = this.get_raw_word(target_addr + i);			
			this.set_raw_word(destination_addr + i, raw_word_bits);
		}
	}

	/**
	 * Allocate a new node on the current stack frame of the same size as the target node.
	 * Then copy the target node over to the destination address.
	 * 
	 * @param target_address 
	 * @returns 
	 */
	create_copy(target_address: number): number {
		const target_size: number = this.get_size(target_address);
		const target_tag: number = this.get_tag(target_address);

		const destination_address = this.allocate(target_tag, target_size);
		this.shallow_copy(destination_address, target_address);

		return destination_address;
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
		this.stack.setUint16(virtual_address * word_size + size_offset, size); 

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
        return this.stack.getUint16(virtual_address * word_size + size_offset); 
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

	is_Boolean(address: number): boolean {
		return this.is_True(address) || this.is_False(address);
	}

	allocate_Unit(): number {
        return this.allocate(Unit_tag, 1);
    }

    is_Unit(address: number): boolean {
        return this.get_tag(address) === Unit_tag;
    }

	allocated_Unassigned() {
        return this.allocate(Unassigned_tag, 1);
	}
	
	is_Unassigned(address: any) {
		return this.get_tag(address) === Unassigned_tag;
	}

	set_Int32(address: number, x: number) {
		const virtual_address = this.convert_to_virtual_addr(address);
		this.stack.setInt32(virtual_address * word_size, x);
	}

	get_Int32(address: number): number {
		const virtual_address = this.convert_to_virtual_addr(address);
		return this.stack.getInt32(virtual_address * word_size);
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
	
	// [1 byte tag, 1 byte is_mut, 3 bytes unused, 2 bytes #children, 1 byte unused]
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
	//  2 bytes #children, 1 byte unused]
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
	//  2 bytes #children, 1 byte unused]
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
	//  1 byte unused, 2 bytes #children, 1 byte unused]
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
			throw new Error("FP is not pointed to a call frame.")
		}

		this.free_heap_allocated_memory();

		this.SP = this.FP;
		this.FP = this.get_Callframe_FP();

		// log(`Stack after pop:`, "POP CALL FRAME")
		// this.print_stack_state();

	}

	// block frame
	// [1 byte tag, 4 bytes unused,
	//  2 bytes #children, 1 byte unused]
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
			throw new Error("FP is not pointed to a block frame.")
		}

		this.free_heap_allocated_memory();

		this.SP = this.FP;
		this.FP = this.get_Blockframe_FP();
	}

	/**
	 * Iterate through each node on the current stack frame
	 * to free heap-allocated nodes pointed to by
	 * valid (unmoved) stack pointers
	 */
	free_heap_allocated_memory() {

		// the address of the OS is the object we are moving out of scope!
		const address_on_OS = peek(OS, 0); 
		const is_result_heap_allocated = this.is_heap_allocated_type(address_on_OS)
		
		let addr = this.FP
		while (addr < this.SP) {
			// console.log(`[STACK::pop_Blockframe] Visiting stack addr ${addr}, tag: ${this.tag_to_string(STACK.get_tag(addr))}`)
			if (this.is_heap_allocated_type(addr) && !this.is_moved(addr)) {

				const heap_addr = this.get_heap_allocated_address(addr)

				// DO NOT FREE MEM BECAUSE WE ARE 
				// MOVING A HEAP-ALLOCATED OBJECT OUT OF THE SCOPE
				if (is_result_heap_allocated && STACK.get_heap_allocated_address(address_on_OS) === heap_addr) {
					// do nothing
				} else {
					console.log(`[STACK::pop_Blockframe] Visiting stack pointer at addr ${addr}, freeing ${address_to_Rust_value(addr).val}`)
					HEAP.freeMem(heap_addr)
				}
			}
			
			const size = this.get_size(addr)
			addr = addr + size
		}
	}

	// actual string value is heap allocated
	// tag = [1 byte tag, 4 byte payload, 2 byte children, 1 byte to indicate moved (invalid) stack pointer]
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

	mark_moved(address: number): void {
		if (!this.is_heap_allocated_type(address)) {
			throw new Error("Trying to move a non-referenced type.")
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
}

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
		if (heap_size_bytes % (word_size * node_size) !== 0) throw new Error("heap bytes must be divisible by word size * node size");
		this.heap = new DataView(new ArrayBuffer(heap_size_bytes));

		// set up linked list of free nodes
		let i
		for (i = 0; i < heap_size_bytes / word_size - node_size; i = i + node_size) {
			this.set(i, i + node_size)
		}
		this.set(i, -1)
	}

	freeMem(address: number) {
		// sanity check
		if (is_stack_address(address)) {
			throw new Error("[HEAP::freeMem] Trying to free stack allocated memory address")
		}

		if (!tagMap[HEAP.getTag(address)]) {
			throw new Error("[HEAP::freeMem] Trying to free memory that is already freed")
		}

		this.n_nodes_used--
		this.n_nodes_freed++
		// console.log(`[freeMem] Freed Memory of ${address} Tag: ${tagMap[(HEAP.getTag(address))]}`)
		this.set(address, this.free)
		this.free = address

		// update stringPool if this node is a string
		if (HEAP.getTag(address) === String_tag) {

		}
	}

	// freeMemOnExitScope() {
	// 	const alloced_addresses: number[] = this.allocatedAddresses.pop()
	// 	// console.log(`[freeMemOnExitScope] ${JSON.stringify(alloced_addresses)}`)
	// 	// console.log(`[freeMemOnExitScope] ${JSON.stringify(this.allocatedAddresses)}`)
	// 	for (const addr of alloced_addresses) {
	// 		if (!this.hasOwner(addr)) {
	// 			if (STACK.is_heap_allocated_type(peek(OS, 0)) && STACK.get_String_Heap_addr(peek(OS, 0)) == addr) {
	// 				// console.log(`[freeMemOnExitScope] Did not free addr ${addr} as addr is the result on the OS. Tag: ${tagMap[HEAP.getTag(addr)]} `)
	// 				continue // don't free heap allocated val if it is the final value on the OS
	// 			}
	// 			// console.log(`[freeMemOnExitScope] Addr ${peek(OS, 0)}, TAG: ${tagMap[STACK.get_tag(peek(OS, 0))]}, heap addr: ${STACK.get_String_Heap_addr(peek(OS, 0))}  is the stack addr on the OS} `)

	// 			this.freeMem(addr)		
	// 		} else {
	// 			// console.log(`[freeMemOnExitScope] Did not free addr ${addr} as addr has owner. Tag: ${tagMap[HEAP.getTag(addr)]} `)
	// 		}
	// 	}
	// }

	allocate(tag: number, size: number): number {
		if (size > node_size) {
            throw new Error("limitation: nodes cannot be larger than 10 words")
        }

		if (this.free == -1) {
			throw new Error("Heap memory exhausted")
		}
		this.n_nodes_used++
		const address = this.free;
		this.free = HEAP.get(this.free);
		this.heap.setUint8(address * word_size, tag);
		this.heap.setUint16(address * word_size + size_offset, size);
		return address;
	}

	get(address: number): number {
		return this.heap.getFloat64(address * word_size);
	}

	set(address: number, value: number): void {
		this.heap.setFloat64(address * word_size, value);
	}

	getChild(address: number, index: number): number {
		return this.get(address + 1 + index);
	}

	setChild(address: number, index: number, value: number): void {
		this.set(address + 1 + index, value);
	}

	getTag(address: number): number {
		return this.heap.getUint8(address * word_size);
	}

	getSize(address: number): number {
		return this.heap.getUint16(address * word_size + size_offset);
	}
	
	getNumberOfChildren(address: number): number {
		return this.getSize(address) - 1;
	}

	hasOwner(address: number): boolean {
		return this.getByte(address, 7) === 1
	}
	
	// byte/2byte/4byte utilities
	setByte(address: number, offset: number, value: number): void {
		this.heap.setUint8(address * word_size + offset, value);
	}
	getByte(address: number, offset: number): number {
		return this.heap.getUint8(address * word_size + offset);
	}
	set2Bytes(address: number, offset: number, value: number): void {
		this.heap.setUint16(address * word_size + offset, value);
	}
	get2Bytes(address: number, offset: number): number {
		return this.heap.getUint16(address * word_size + offset);
	}
	set4Bytes(address: number, offset: number, value: number): void {
		this.heap.setUint32(address * word_size + offset, value);
	}
	get4Bytes(address: number, offset: number): number {
		return this.heap.getUint32(address * word_size + offset);
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


/* *************************
 * HEAP
 * *************************/

// HEAP is an array of bytes (JS ArrayBuffer)

// heap_make allocates a heap of given size
// (in megabytes)and returns a DataView of that,
// see https://www.javascripture.com/DataView
// const heap_make = (bytes) => {
// 	if (bytes % 8 !== 0) error("heap bytes must be divisible by 8");
// 	const data = new ArrayBuffer(bytes);
// 	const view = new DataView(data);
// 	return view;
// };

// // we randomly pick a heap size of 1000000 bytes
// // const HEAP = heap_make(1000000);

// // free is the next free index in HEAP
// // we keep allocating as if there was no tomorrow
// // let free = 0;

// // heap_allocate allocates a given number of words
// // on the heap and marks the first word with a 1-byte tag.
// // the last two bytes of the first word indicate the number
// // of children (addresses) that follow the tag word:
// // [1 byte tag, 4 bytes payload (depending on node type),
// //  2 bytes #children, 1 byte unused]
// // Note: payload depends on the type of node
// const heap_allocate = (tag, size) => {
// 	const address = free;
	
// 	// allocate (size) number of words
// 	free += size;

// 	// set the first byte to tag
// 	HEAP.setUint8(address * word_size, tag);

// 	// number of children = size - 1
// 	HEAP.setUint16(address * word_size + size_offset, size); 

// 	return address;
// };

// // get and set a word in heap at given address
// const heap_get = (address) => HEAP.getFloat64(address * word_size);

// const heap_set = (address, x) => HEAP.setFloat64(address * word_size, x);

// // child index starts at 0
// const heap_get_child = (address, child_index) =>
// 	heap_get(address + 1 + child_index);

// const heap_set_child = (address, child_index, value) =>
// 	heap_set(address + 1 + child_index, value);

// const heap_get_tag = (address) => HEAP.getUint8(address * word_size);

// const heap_get_size = (address) =>
// 	HEAP.getUint16(address * word_size + size_offset);

// // the number of children is one less than the size
// const heap_get_number_of_children = (address) => heap_get_size(address) - 1;

// // access byte in heap, using address and offset
// const heap_set_byte_at_offset = (address, offset, value) =>
// 	HEAP.setUint8(address * word_size + offset, value);

// const heap_get_byte_at_offset = (address, offset) =>
// 	HEAP.getUint8(address * word_size + offset);

// // access 2 bytes in heap, using address and offset
// const heap_set_2_bytes_at_offset = (address, offset, value) =>
// 	HEAP.setUint16(address * word_size + offset, value);

// const heap_get_2_bytes_at_offset = (address, offset) =>
// 	HEAP.getUint16(address * word_size + offset);

// // access 4 bytes in heap, using address and offset
// const heap_set_4_bytes_at_offset = (address, offset, value) =>
// 	HEAP.setUint32(address * word_size + offset, value);

// const heap_get_4_bytes_at_offset = (address, offset) =>
// 	HEAP.getUint32(address * word_size + offset);

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
// let stringPool = {}; // ADDED CHANGE



// ADDED CHANGE
// strings:
// [1 byte tag, 4 byte hash to stringPool,
// 2 bytes #children, 1 byte unused]
// Note: #children is 0

// Hash any string to a 32-bit unsigned integer
// const hashString = (str) => {
// 	let hash = 5381;
// 	for (let i = 0; i < str.length; i++) {
// 		const char = str.charCodeAt(i);
// 		hash = (hash << 5) + hash + char;
// 		hash = hash & hash;
// 	}
// 	return hash >>> 0;
// };

// const is_String = (address) => heap_get_tag(address) === String_tag;

// const heap_allocate_String = (string) => {
// 	const hash = hashString(string);
// 	const a = stringPool[hash];

// 	if (a !== undefined) {
// 	    for (let i = 0; i < a.length; i++) {
//             if (a[i].string === string)
//                 return a[i].address;
//             const address = heap_allocate(String_tag, 2);
//             heap_set_4_bytes_at_offset(address, 1, hash);
//             heap_set_2_bytes_at_offset(address, 5, i);
//             a[i] = {address, string};
//             return address;
//         }
// 	}

// 	const address = heap_allocate(String_tag, 2);
// 	heap_set_4_bytes_at_offset(// [1 byte tag, 1 byte id, 3 bytes unused,
//  2 bytes #children, 1 byte unused]
// Note: #children is 0in the string pool under hash at index 0
// 	stringPool[hash] = [{address, string}];

// 	return address;
// };

// const heap_get_string_hash = (address) =>
// 	heap_get_4_bytes_at_offset(address, 1);

// const heap_get_string_index = (address) =>
// 	heap_get_2_bytes_at_offset(address, 5);
	
// const heap_get_string = (address) =>
// 	stringPool[heap_get_string_hash(address)]
// 	          [heap_get_string_index(address)]
// 	          .string;

// builtins: builtin id is encoded in second byte
// [1 byte tag, 1 byte id, 3 bytes unused,
//  2 bytes #children, 1 byte unused]
// Note: #children is 0

// const is_Builtin = (address) => heap_get_tag(address) === Builtin_tag;

// const heap_allocate_Builtin = (id) => {
// 	const address = heap_allocate(Builtin_tag, 1);
// 	heap_set_byte_at_offset(address, 1, id);
// 	return address;
// };

// const heap_get_Builtin_id = (address) => heap_get_byte_at_offset(address, 1);

// closure
// [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused,
//  2 bytes #children, 1 byte unused]
// followed by the address of env => closure has environment capture, but Rust fn does not.

// note: currently bytes at offset 4 and 7 are not used;
//   they could be used to increase pc and #children range

// const heap_allocate_Closure = (arity, pc, env) => {
// 	const address = heap_allocate(Closure_tag, 2);
// 	heap_set_byte_at_offset(address, 1, arity);
// 	heap_set_2_bytes_at_offset(address, 2, pc);
// 	heap_set(address + 1, env);
// 	return address;
// };

// const heap_get_Closure_arity = (address) => heap_get_byte_at_offset(address, 1);

// const heap_get_Closure_pc = (address) => heap_get_2_bytes_at_offset(address, 2);

// const heap_get_Closure_environment = (address) => heap_get_child(address, 0);

// const is_Closure = (address) => heap_get_tag(address) === Closure_tag;

// environment frame
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by the addresses of its values

// const heap_allocate_Frame = (number_of_values) =>
// 	heap_allocate(Frame_tag, number_of_values + 1);

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

// const heap_allocate_Environment = (number_of_frames) =>
// 	heap_allocate(Environment_tag, number_of_frames + 1);



// access environment given by address
// using a "position", i.e. a pair of
// frame index and value index
// const heap_get_Environment_value = (env_address, position) => {
// 	const [frame_index, value_index] = position;
// 	const frame_address = heap_get_child(env_address, frame_index);
// 	return heap_get_child(frame_address, value_index);
// };

// const heap_set_Environment_value = (env_address, position, value) => {
// 	const [frame_index, value_index] = position;
// 	const frame_address = heap_get_child(env_address, frame_index);
// 	heap_set_child(frame_address, value_index, value);
// };

// extend a given environment by a new frame:
// create a new environment that is bigger by 1
// frame slot than the given environment.
// copy the frame Addresses of the given
// environment to the new environment.
// enter the address of the new frame to end
// of the new environment
// const heap_Environment_extend = (frame_address, env_address) => {
// 	const old_size = heap_get_size(env_address);
// 	const new_env_address = heap_allocate_Environment(old_size);
// 	let i;
// 	for (i = 0; i < old_size - 1; i++) {
// 		heap_set_child(new_env_address, i, heap_get_child(env_address, i));
// 	}
// 	heap_set_child(new_env_address, i, frame_address);
// 	return new_env_address;
// };

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
// const heap_allocate_Reference = (address) => {
// 	// const reference_address = heap_allocate(Number_tag, 2);
// 	// heap_set(reference_address + 1, heap_get(address)) // underlying value
// 	// heap_set(reference_address + 2, address); // referenced variable
// 	// return reference_address;
// }

// const heap_get_underlying_value = (address) => heap_get(address + 1);
// const heap_get_referenced_variable = (address) => heap_get(address + 2);


// const is_Reference = (address) => heap_get_tag(address) === Reference_tag;

//
// conversions between addresses and Rust Value
//

const is_stack_address = (address: number): boolean => !STACK.is_out_of_range(address)

const address_to_Rust_value = (address: number): RustValue => {
	let value: RustValue | undefined;

	if (STACK.is_Unassigned(address)) {
		throw new Error("Access of uninitialize variable.");
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
		value = new RustValue("reference"); // TODO: create a proper wrapper for reference? For debugging purposes mostly
	}

	if (STACK.is_String(address)) {
		value = STACK.get_String(address);
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
		return x.val ? STACK.TRUE : STACK.FALSE;
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
		return STACK.UNIT;
	}

	if (x instanceof StringRustValue) {
		return STACK.allocate_String(x);
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

		throw new Error(`Operation "+" require both numeric operands or string operands`)
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
			throw new Error("Current stack frame is not a block frame when EXIT_SCOPE instruction is executed.")
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
		// if (is_Unit(val)) error("access of unassigned variable"); => should be checked on the type checker already!
		push(OS, addr); 
	},
	ASSIGN: (instr) => {
		// e.g, LHS = RHS

		const RHS_address = OS.pop();
		const LHS_address = HEAP.getEnvValue(E, instr.pos);

		if (!is_stack_address(LHS_address) || !is_stack_address(RHS_address)) {
			throw new Error("Assignment must be done on the stack, never the heap")
		} 

		// Implementing COPY trait

		if (STACK.is_Unassigned(LHS_address)) {
			// LHS variable is unassigned (after a block scan)
			// we initialize a new address to the variable now.

			// create a copy in the current stack frame
			//
			// WE DONT ALLOW INITIALIZING A VARIABLE WITHOUT A VALUE
			// HENCE CAN SAFELY ALLOCATE THE COPY ON THE CURRENT STACK FRAME
			const copy_addr = STACK.create_copy(RHS_address);

			// set the heap address to that copy
			HEAP.setEnvValue(E, instr.pos, copy_addr) 

		} else {

			// this means the variable was already initialized. 

			// we can safely deallocate old heap object because the typechecker
			// enforces that this object has no dangling references by now
			if (STACK.is_heap_allocated_type(LHS_address)) {
				const heap_addr = STACK.get_heap_allocated_address(LHS_address);
				HEAP.freeMem(heap_addr);			
			}
			
			// We should perform shallow copy from RHS to LHS, since 
			// RHS value may go out of scope.
			STACK.shallow_copy(LHS_address, RHS_address);
		}

		if (STACK.is_heap_allocated_type(RHS_address)) {

			// Implementing MOVE trait
			STACK.mark_moved(RHS_address);			
		}

		// finally, push unit value on OS, 
		// because an assignment expression 
		// always has Unit value in Rust
		push(OS, STACK.UNIT)

	},
	ASSIGN_DEREF: (instr) => {
		// eg. *x = y;
		// at this point, the 2 top most values on OS are: OS = [address of y, address of *x (the target address)]
		
		const LHS_address = OS.pop()
		const RHS_address = OS.pop()

		// The typechecker should have validated that 
		// the target is of the same type as the assignee
		if (STACK.get_tag(LHS_address) !== STACK.get_tag(RHS_address)) {
			throw new Error("Cannot assign non-matching type.")
		}

		// Proceed with normal assignment

		// Implementing COPY trait

		if (STACK.is_Unassigned(LHS_address)) {
			// LHS variable is unassigned (after a block scan)
			// we initialize a new address to the variable now.

			// create a copy in the current stack frame
			//
			// WE DONT ALLOW INITIALIZING A VARIABLE WITHOUT A VALUE
			// HENCE CAN SAFELY ALLOCATE THE COPY ON THE CURRENT STACK FRAME
			const copy_addr = STACK.create_copy(RHS_address);

			// set the heap address to that copy
			HEAP.setEnvValue(E, instr.pos, copy_addr) 

		} else {

			// this means the variable was already initialized. 

			// we can safely deallocate old heap object because the typechecker
			// enforces that this object has no dangling references by now
			if (STACK.is_heap_allocated_type(LHS_address)) {
				const heap_addr = STACK.get_heap_allocated_address(LHS_address);
				HEAP.freeMem(heap_addr);			
			}

			// We should perform shallow copy from RHS to LHS, since 
			// RHS value may go out of scope.
			STACK.shallow_copy(LHS_address, RHS_address);
		}

		if (STACK.is_heap_allocated_type(RHS_address)) {

			// Implementing MOVE trait
			STACK.mark_moved(RHS_address);			
		}

		// finally, push unit value on OS, 
		// because an assignment expression 
		// always has Unit value in Rust
		push(OS, STACK.UNIT)
	},
	LDF: (instr) => {
		const closure_address = STACK.allocate_Closure(instr.arity, instr.addr, E);
		push(OS, closure_address);
	},
	CALL: (instr) => {
		const arity = instr.arity;heap_Environment_display
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
			throw new Error("Dereferencing non-reference types");
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
		log(JSON.stringify(instr), "INS")
		
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

	console.log("Heap nodes automatically freed during execution of env: " + HEAP.n_nodes_freed)
	console.log("Heap nodes leaked at end of execution: " + HEAP.n_nodes_used)
	if (HEAP.n_nodes_used > 0) {
		throw new Error(`Memory leak! ${HEAP.n_nodes_used} heap nodes are not freed`)
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

	console.log("Printing OS:\n")
	for (let i = 0; i < OS.length; i = i + 1) {
		const val = OS[i];
		console.log(i + ": " + JSON.stringify(address_to_Rust_value(val)) + "\n");
	}
};