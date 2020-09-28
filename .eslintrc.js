module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    serviceworker: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.babel.js',
      },
    },
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    ENV: 'readonly',
    include: 'readonly',
    chrome: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react/prop-types': ['error', { ignore: ['strings'] }],
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx'],
      },
    ],
    'prettier/prettier': 'error',
    'max-len': [
      1,
      81,
      2,
      {
        ignorePattern: '(^import\\s.+\\sfrom\\s.+;$)|(^<path\\s.+$)',
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
  },
};
