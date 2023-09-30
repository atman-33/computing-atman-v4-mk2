## validate env files

- `tools/environment/validate-api-env.ts`
- `tools/environment/validate-web-env.ts`

## add run scripts

add validate env scripts

`package.json`

```json
  "scripts": {
    "----START----": "-------------------------",
    "start:verify-env": "npm run validate:web-env && npm run validate:api-env",
    "----VALIDATE ENV SECTION----": "--------------------------------",
    "validate:web-env": "npx env-cmd -f .env.local ts-node --project tools/tsconfig.tools.json tools/environment/validate-web-env.ts",
    "validate:api-env": "npx env-cmd -f .env.local ts-node --project tools/tsconfig.tools.json tools/environment/validate-api-env.ts",
```

---

# In the case of adding env

## flow

1. add env on `.env.local`
2. update `environment.ts` in projects
3. update `tools/environment/validate-api(or web)-env.ts`
4. validate env by script (ex. validate:web-env)
