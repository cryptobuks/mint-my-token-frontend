module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jest/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["jest"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "no-unused-vars": "warn",
    "react/jsx-no-bind": [
      2,
      {
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowBind: false
      }
    ],
    "react/react-in-jsx-scope": "off"
  }
}
