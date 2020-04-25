module.exports = {
  env: {
    browser: true
  },
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['prettier', 'react-hooks', 'react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'comma-dangle': ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: [2, 'always'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unused-state': 2,
    'react/prop-types': 2,
    'no-empty-pattern': 2,
    'no-prototype-builtins': 2,
    'no-undef': 2,
    'no-unused-vars': 2,
    'arrow-parens': ['error', 'as-needed'],
    'react/display-name': 'off',
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/jsx-no-target-blank': [1, { enforceDynamicLinks: 'always' }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    //"react/forbid-prop-types": [true, { "forbid": ["object"], checkContextTypes: true, checkChildContextTypes: true }],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'prettier/prettier': 'error'
  },
  globals: {
    CONFIG: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src/components/task-list']
      }
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  }
};
