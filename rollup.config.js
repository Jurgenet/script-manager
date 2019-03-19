import path from 'path';
import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import pug from 'rollup-plugin-pug';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import svg from 'rollup-plugin-svg';
import json from 'rollup-plugin-json';
import VuePlugin from 'rollup-plugin-vue';
import pkg from './package.json';

export default {
  input: 'src/main.jsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    alias({
      resolve: ['.vue'],
      '@': path.resolve('./src/ScriptManager/'),
    }),
    resolve({
      only: ['vue', 'vuex', 'vuera'],
    }),
    pug(),
    postcss({
      plugins: [autoprefixer],
    }),
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true,
    }),
    commonjs(),
    svg(),
    json(),
    VuePlugin(),
  ],
  external: ['react', 'prop-types'],
};
