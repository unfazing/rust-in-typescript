/* **********************
 * using arrays as stacks
 * **********************/

// add values destructively to the end of
// given array; return the array
const push = (array, ...items) => {
	for (let item of items) {
		array.push(item);
	}
	return array;
};

const pop = (array) => {
	array.pop();
	return array;
}

// return the last element of given array
// without changing the array
const peek = (array, address) => array.slice(-1 - address)[0];


/* ************************
 * compile-time environment
 * ************************/


// in this machine, the builtins take their
// arguments directly from the operand stack,
// to save the creation of an intermediate
// argument array

// TODO: add rust's dynamic String functions e.g. String::from() 
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

export const primitive_object = {};
export const builtin_array = [];
// }

const constants = {
	// math_E: math_E,
	// math_LN10: math_LN10,
	// math_LN2: math_LN2,
	// math_LOG10E: math_LOG10E,
	// math_LOG2E: math_LOG2E,
	// math_PI: math_PI,
	// math_SQRT1_2: math_SQRT1_2,
	// math_SQRT2: math_SQRT2,
};

for (const key in constants) primitive_object[key] = constants[key];

export class CompileTimeEnvironment {
	frames: CompileTimeEnvFrame[]
	constructor() {
		this.frames = [new CompileTimeEnvFrame([])]
	}

	compile_time_environment_extend(frame: CompileTimeEnvFrame) {
		this.frames.push(frame)
	}

	compile_time_environment_restore() {
		this.frames.pop()
	}

	compile_time_environment_position(symbol: string): [number, number] {
		let frame_index: number = this.frames.length - 1;
		while (this.frames[frame_index].lookup_idx(symbol) === -1) {
			if (--frame_index < 0) {
				throw new Error(`Compiler Error: [compile_time_environment_position] Could not find symbol ${symbol}`)
			}
		}
		return [frame_index, this.frames[frame_index].lookup_idx(symbol)];
	}

	symbol_exist_in_compile_time_env(symbol: string) {
		for (let i = this.frames.length - 1; i >= 0; i--) {
			if (this.frames[i].lookup_idx(symbol) !== -1) {
				return true;
			}
		}

		return false;
	}

	get_compile_time_type(symbol: string): CompileTimeType {
		let frame_index: number = this.frames.length - 1;
		while (this.frames[frame_index].lookup_idx(symbol) === -1) {
			if (--frame_index < 0) {
				throw new Error(`Compiler Error: [get_compile_time_type] Could not find symbol ${symbol}`)
			}
		}
		const idx = this.frames[frame_index].lookup_idx(symbol)
		return this.frames[frame_index].get_symbol_and_type(symbol)[1]
	}
}


export class CompileTimeEnvFrame {
	frame: SymbolAndType[]
	constructor(symbols: SymbolAndType[]) {
		this.frame = []
		for (const s of symbols) {
			this.frame.push(s)
		}
	}

	lookup_idx(symbol: string): number {
		for (let i = 0; i < this.frame.length; i++) {
			if (this.frame[i][0] === symbol) return i;
		}
		return -1;
	}

	get_symbol_and_type(s: string): SymbolAndType {
		const idx: number = this.lookup_idx(s)
		if (idx === -1) {
			throw new Error(`[CompileTimeEnvFrame::get_symbol] Symbol ${s} not found in frame!`)
		}
		return this.frame[idx]
	}
}

export type SymbolAndType = [Symbol, CompileTimeType]
export type Symbol = string


// compile-time frames only need symbols (keys), no values
// const global_compile_frame = Object.keys(primitive_object);
// export const global_compile_environment = [global_compile_frame];

export const global_compile_environment: CompileTimeEnvironment = new CompileTimeEnvironment();

// // Refers to the size of the nodes in the VM
// export enum CompileTimeType {
//     Boolean = 1,
//     Unit = 1, 
//     I32 = 2,
//     F64 = 2,
//     Char = 2,
//     String = 2,
//     Ref = 2,
// 	Array = 2,
// }


// // Utility function to get the size of a type
// export function getTypeSize(type: CompileTimeType): number {
//     return type;
// }


export class CompileTimeType {
	size: number;

	constructor(size: number) {
		this.size = size;
	}

	getSize(): number {
		return this.size;
	}
}

// Subclasses for each Rust type

export class BooleanType extends CompileTimeType {
	constructor() {
		super(1);
	}
}

export class UnitType extends CompileTimeType {
	constructor() {
		super(1);
	}
}

export class I32Type extends CompileTimeType {
	constructor() {
		super(2);
	}
}

export class F64Type extends CompileTimeType {
	constructor() {
		super(2);
	}
}

export class CharType extends CompileTimeType {
	constructor() {
		super(2);
	}
}

export class StringType extends CompileTimeType {
	constructor() {
		super(2);
	}
}

export class RefType extends CompileTimeType {
	constructor() {
		super(2);
	}
}

export const CompileTimeTypeSentinels = {
	Boolean: new BooleanType(),
	Unit: new UnitType(),
	I32: new I32Type(),
	F64: new F64Type(),
	Char: new CharType(),
	String: new StringType(),
	Ref: new RefType(),
}

// export class ClosureType extends CompileTimeType {
// 	returnType: CompileTimeType // we only care about returnType to check type of first elem in [f(), 2, 3] 
// 	constructor() {
// 		super(2);
// 	}
// }

export class ArrayType extends CompileTimeType {
	ContainedType: CompileTimeType
	Length: number
	constructor(containedType: CompileTimeType, length: number) {
		const size: number = containedType.getSize() * length + 2 // size of array node is 2
		super(size)
		this.ContainedType = containedType
		this.Length = length
	}
}