import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    plugins: [nodeResolve(), typescript({ sourceMap: true })],
    input: "src/index.ts",
    output: {
        plugins: [terser()],
        dir: "dist",
        format: "iife",
        sourcemap: true,
        globals: { // to change
            console: "console"
        },
    }
}
