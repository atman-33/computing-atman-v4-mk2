# api-feature-sample-prisma

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build api-feature-sample-prisma` to build the library.

## Running unit tests

Run `nx test api-feature-sample-prisma` to execute the unit tests via [Jest](https://jestjs.io).

### Generate resolver

```bash
nx g @nrwl/nest:resource --project=api-feature-sample-prisma --directory=lib --type="graphql-code-first" --crud --name sample-todos
nx g @nrwl/nest:resource --project=api-feature-sample-prisma --directory=lib --type="graphql-code-first" --crud --name sample-users
```