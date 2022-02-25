module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:node/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "sonarjs", "jest", "node"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "no-use-before-define": "off",
    "arrow-body-style": "off",
    "consistent-return": "off",

    "sonarjs/cognitive-complexity": ["warn", 15],

    "import/extensions": [
      "error",
      "never",
      {
        json: "always",
      },
    ],
    "import/no-unresolved": 2,
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/namespace": ["error", { allowComputed: true }],

    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",

    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
    "node/no-missing-import": "off",
  },
  overrides: [
    {
      files: ["src/test/**", "**/tests/**", "types.ts"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    {
      files: ["src/test/**", "jest.setup.ts", "**/__tests__/**", "**/tests/**"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
