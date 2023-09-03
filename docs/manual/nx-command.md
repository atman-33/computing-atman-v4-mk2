# Common

## serve command

run dev backend

```bash
nx serve api
```

run dev frontend

```bash
nx serve web
```

run dev front and back

```bash
npm run dev
```

## build command

```bash
nx build web
```

## stop listening server

check PID

```bash
lsof -i :3000
```

kill PID

```bash
kill <PID>
```

## show affected projects

```bash
nx show projects --affected --target=build --select=projects
```

## run test

```bash
nx run web:test
```

## nx graph

```bash
nx graph
```

## lint fix all

```bash
nx affected:lint --fix --all
```

## nx migrate etc

```bash
nx migrate latest
npx nx migrate --run-migrations
npm i
```

> if you need get latest next.js...

```bash
npm i next@latest
```

---

# Angular

## generate angular module

```
nx generate @nx/angular:module <module-name> --project=web
```

> outside of nx, ng g module <module-name>

## generate angular component

```
nx generate @nx/angular:component <component-name> --project=web
```

> outside of nx, ng g component <component-name>

---

# NestJS

## generate nestjs module

```
nx generate @nx/nest:module app/<module-name> --project=api
```

> outside of nx, nest g module <module-name>

## generate nestjs controller

```
nx generate @nx/nest:controller app/<controller-name> --project=api
```

> outside of nx, nest g controller <controller-name>

## generate nestjs resolver

```
nx generate @nx/nest:resolver app/<resolver-name> --project=api
```

> outside of nx, nest g resolver <resolver-name>

## generate nestjs service

```
nx generate @nx/nest:service app/<service-name> --project=api
```

> outside of nx, nest g service <service-name>
