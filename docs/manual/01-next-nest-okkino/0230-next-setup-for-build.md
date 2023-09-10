## update tsconfig.json in web
add dist.../*.ts to exclude

`apps/web/tsconfig.json`
```json
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "**/*.js",
    "**/*.jsx",
    "../../apps/web/.next/types/**/*.ts",
    "../../dist/apps/web/.next/types/**/*.ts",
    "next-env.d.ts"
  ],
  "exclude": [
+   "../../dist/apps/web/.next/types/**/*.ts",
    "node_modules",
    "jest.config.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
```