module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "google"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'arrow-parens': ['error', 'as-needed'],
        'class-methods-use-this': 'off',
        "comma-dangle": ["error", {
          "arrays": "always-multiline",
          "objects": "always-multiline",
          "imports": "always-multiline",
          "exports": "always-multiline",
          "functions": "only-multiline"
        }],
        'camelcase': 'warn',
        'no-prototype-builtins': 'warn',
        'consistent-return': 'error',
        'func-names': 'off',
        'function-paren-newline': 'off',
        'implicit-arrow-linebreak': 'off',
    
        'import/extensions': ['error', 'ignorePackages', {
          'ts': 'never', 'tsx': 'never', 'js': 'never', 'jsx': 'never',
        }],
        'import/no-named-as-default': 'off',
        'import/no-unresolved': ['error', {
          'ignore': ['@', 'fixtures', 'mocks'],
          'commonjs': true,
          'caseSensitive': true,
        }],
        'import/prefer-default-export': 'off',
    
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/label-has-for': 'warn',
        'jsx-a11y/mouse-events-have-key-events': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
    
        'max-classes-per-file': 'warn',
        'max-len': ['warn', 120, 2, {
          'ignoreUrls': true,
          'ignoreComments': false,
          'ignoreRegExpLiterals': true,
          'ignoreStrings': true,
          'ignoreTemplateLiterals': false,
        }],
        'newline-per-chained-call': 'warn',
        'no-await-in-loop': 'off',
        'no-class-assign': [1],
        'no-continue': 'off',
        'no-nested-ternary': 'warn',
        'no-param-reassign': ['error', { 'props': true, 'ignorePropertyModificationsFor': ['state'] }],
        'no-restricted-syntax': ['error', 'ForInStatement'],
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': ['error', { "argsIgnorePattern": "(^_)|(error)" }],
        'no-use-before-define': 'off',
        'no-useless-constructor': 'warn',
        'no-case-declarations': 'warn',
        'object-curly-newline': 'off',
        'operator-linebreak': 'off',
        'prefer-promise-reject-errors': 'warn',
        'semi': ['error', 'never'],
        'space-before-function-paren': 'off',
    
        'prettier/prettier': ['error', {
          'printWidth': 80,
          'singleQuote': true,
          'trailingComma': 'es5',
          'bracketSpacing': true,
          'jsxBracketSameLine': false,
          'semi': false,
          'requirePragma': false,
          'proseWrap': 'preserve',
          'arrowParens': 'avoid',
        }],
    
        'react/destructuring-assignment': 'off',
        'react/forbid-prop-types': 'warn',
        'react/no-deprecated': 'warn',
        'react/prop-types': 'warn',
        'react/require-default-props': 'warn',
        'react/sort-comp': 'warn',
        'react/no-find-dom-node': 'warn',
        'react/no-access-state-in-setstate': 'warn',
        'react/default-props-match-prop-types': 'warn',
    
      },
};
