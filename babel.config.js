module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    'react-remove-properties',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'last 3 versions, ie >= 11, chrome >= 45, iOS > 9',
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    '@babel/preset-react',
  ],
};
