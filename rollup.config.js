import pkg from "./package.json";
import commonjs from "rollup-plugin-commonjs";
import progress from "rollup-plugin-progress";
import babel from "@rollup/plugin-babel";
import {
  terser
} from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import del from "rollup-plugin-delete";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",
  output: [{ 
    dir: "lib",
    format: "cjs", 
    exports: 'auto' 
  }],
  plugins: [
    progress({
      clearLines: false
    }),
    del({
      targets: [
        "lib/*"
      ]
    }),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs({
      namedExports: {}
    }),
    typescript(),
    terser(),
    cleanup()
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
}