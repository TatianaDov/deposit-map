module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      restParams: true,
      spread: true,
    },
  },

  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  plugins: [
    'import',
    'react-hooks',
    'prettier',
    'simple-import-sort',
    '@typescript-eslint'
  ],

  env: {
    'es6': true,
    'browser': true,
    'node': true
  },

  rules: {
    'no-use-before-define': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'linebreak-style': 'off',
    'no-case-declarations': 'off',
    'no-useless-escape': 'off',
    'object-curly-newline': 'off',
    'semi': ['warn', 'always'],
    // 'camelcase': ["error", {"properties": "always"}],
    'prefer-object-spread': 'error',
    'no-console': 'error',
    'eqeqeq': 'error',
    'no-nested-ternary': 'error',
    'no-else-return': 'error',
    'spaced-comment': ['error', 'always'],
    'space-before-blocks': 'error',
    'eol-last': 'error',
    'no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 0 }],
    'padded-blocks': ["error", "never"],
    'space-in-parens': 'error',
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'key-spacing': ["error", { "beforeColon": false}],
    'no-trailing-spaces': 'error',
    'comma-style': ["error", "last"],
    'no-new-wrappers': 'error',
    'id-length': ["error", {
      "min": 2,
      "properties": "never",
      "exceptionPatterns": ["i|e|x|y|z"]
    }],
    'max-len': ['error', { 'code': 120 }],
    'arrow-parens': ['error', 'as-needed'],

    // JSX
    'no-underscore-dangle': "error",
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',


    // disabled import-errors for devDependencies, when linter assumes it should be in dependencies list-item
    'import/no-extraneous-dependencies': 'off',

    // REACT
    // disable this rule to use dangerouslySetInnerHTML
    'react/no-danger': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    "react/jsx-filename-extension": 'off',
    'react-hooks/exhaustive-deps': 'off',

    // TYPESCRIPT
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-explicit-any': 'error',

    // SORT
    "simple-import-sort/imports": [
        "warn",
      {
        groups: [
          ["^.+\\.s?css$"],
          ["^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",],
          ["^react", "^@?\\w"],
          ["^\\u0000"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "simple-import-sort/exports": "warn",
    "prettier/prettier": "warn",

  }
};

