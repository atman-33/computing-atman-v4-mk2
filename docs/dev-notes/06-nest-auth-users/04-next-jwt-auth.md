## Reference URL

https://adam-drake-spiritual-seeker.medium.com/set-cookies-header-and-withcredentials-c5d15c9914b9

## CORS setting in backend

`apps/api/src/main.ts`

```ts
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true
  });
```

## Add credentals to fetch in frontend

e.g. login  

```ts
      const response = await fetch(NEXT_PUBLIC_API_ENDPOINT + '/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'test-user1@gmail.com',
          password: 'test1234'
        }),
        credentials: 'include'
      });
```

e.g. logout

```ts
      const response = await fetch(NEXT_PUBLIC_API_ENDPOINT + '/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
```