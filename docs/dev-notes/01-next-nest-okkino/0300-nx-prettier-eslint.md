## install packages

```bash
npm i -D eslint eslint-plugin-prettier eslint-plugin-unicorn @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-unused-imports prettier-plugin-tailwindcss
```

> if you have some errors, install proper version packages manually.

ex. add below packages manually to package.json after that, install again.

```bash
  "devDependencies": {
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-unused-imports": "^2.0.0",
    "prettier-plugin-tailwindcss": "^0.2.2",
```

## eslint works on vscode

* install eslint extention
* restart vscode

## setup .prettierrc

 `.prettierrc`

```json
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 100
}
```

## setup .prettierignore

 `.prettierignore`

```text
# Add files here to ignore them from prettier formatting

/dist
/coverage
/docs

# Ignore all files that generated
libs/web/data-access-graphql/src/lib/data-access.gql.gen.ts
libs/web/data-access-graphql/src/lib/types.ts
libs/api/generated-db-types/src/index.ts
```

## setup .eslintignore

 `.eslintignore`

```text
node_modules
docs

libs/web/data-access-graphql/src/lib/data-access.gql.gen.ts
libs/web/data-access-graphql/src/lib/types.ts
libs/api/generated-db-types/src/index.ts
```

## setup .eslintrc.json

 `eslintrc.json`

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module"
  },
  "ignorePatterns": ["**/*"],
  "plugins": [
    "@typescript-eslint",
    "@nx",
    "unicorn",
    "prettier",
    "eslint-plugin-prettier",
    "unused-imports"
  ],
  "overrides": [
    {
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
        "plugin:prettier/recommended"
      ],
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        "prettier/prettier": ["error"],
        "unicorn/prevent-abbreviations": "off",
        "unicorn/no-null": "off",
        "unicorn/prefer-module": ["warn"],
        "unicorn/no-abusive-eslint-disable": ["warn"],
        "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            "vars": "all",
            "varsIgnorePattern": "^_",
            "args": "after-used",
            "argsIgnorePattern": "^_"
          }
        ],
        "@typescript-eslint/array-type": [
          "error",
          {
            "default": "array",
            "readonly": "array"
          }
        ],
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/no-shadow": ["error"],
        "@nx/enforce-module-boundaries": [
          "error",
          {
            "enforceBuildableLibDependency": true,
            "allow": [],
            "depConstraints": [
              {
                "sourceTag": "scope:shared",
                "onlyDependOnLibsWithTags": ["scope:shared"]
              },
              {
                "sourceTag": "scope:api",
                "onlyDependOnLibsWithTags": ["scope:shared", "scope:api"]
              },
              {
                "sourceTag": "scope:web",
                "onlyDependOnLibsWithTags": ["scope:shared", "scope:web"]
              }
            ]
          }
        ]
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["plugin:@nx/typescript"],
      "rules": {}
    },
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["plugin:@nx/javascript"],
      "rules": {}
    },
    {
      "files": ["*.spec.ts", "*.spec.tsx", "*.spec.js", "*.spec.jsx"],
      "env": {
        "jest": true
      },
      "rules": {}
    }
  ]
}
```

## lint fix all command

```bash
nx affected:lint --fix --all
```
