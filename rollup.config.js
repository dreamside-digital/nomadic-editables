import { DEFAULT_EXTENSIONS } from '@babel/core'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import { terser } from 'rollup-plugin-terser'
import includePaths from 'rollup-plugin-includepaths'

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/es',
      format: 'es',
      sourcemap: true,
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    includePaths({
      paths: ["./src"],
      extensions: ['.js', '.json', '.html', '.jsx', '.css']
    }),
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: 'inline',
    }),
    external({
      includeDependencies: true,
    }),
    babel({
      presets: [
        'react-app',
      ],
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.js',
        '.jsx',
        '.css',
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'transform-react-remove-prop-types',
      ],
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    url(),
    svgr(),
    resolve({
      extensions: [".js", ".jsx", ".css"]
    }),
    commonjs(),
    terser(),
  ],
}

