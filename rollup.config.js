import nodeResolve from '@rollup/plugin-node-resolve';

/**
 * @external RollupConfig
 * @type {PlainObject}
 * @see {@link https://rollupjs.org/guide/en#big-list-of-options}
 */

/**
 * @param {PlainObject} [config= {}]
 * @param {string} [config.format='umd']
 * @returns {external:RollupConfig}
 */
function getRollupObject ({format = 'umd'} = {}) {
  const nonMinified = {
    input: 'src/deparam.js',
    output: {
      format,
      file: `dist/deparam.${format}.js`,
      name: 'deparam'
    },
    plugins: [
      nodeResolve()
    ]
  };
  return nonMinified;
}

export default [
  getRollupObject({format: 'umd'}),
  getRollupObject({format: 'cjs'}),
  getRollupObject({format: 'esm'})
];
