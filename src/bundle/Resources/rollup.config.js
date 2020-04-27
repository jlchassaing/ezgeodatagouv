import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import babel from 'rollup-plugin-babel'
import analyze from 'rollup-plugin-analyzer'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'public/js/geo-finder.js',
        format: 'umd',
        name: 'GeoFinder',
        globals: {
          leaflet: 'L',
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        banner: '/* eslint-disable */',
      },
    ],
    plugins: [
      del({ targets: ['public/js/*'] }),
      resolve(),
      babel({ exclude: 'node_modules/**', runtimeHelpers: true }),

      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      analyze({ summaryOnly: true }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
]
