## Cannot get /public/{image file}

* If you can use i18n and middleware.ts, you add image files to middleware.ts

*how to use publid files as not apply i18n*

1. create `public/static`

ex.  

```text
/public/static/favicon.ico
              /logo.svg
```

2. change `apps/web/middleware.ts`

add *static* to matcher.

```ts
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|static).*)']
};
```

## Not work router.push

insted of router.push use window.location.href

## Build error => `next/font` error:

ex.

```bash
app/layout.tsx
`next/font` error:
Failed to fetch `Lato` from Google Fonts.
```

Step: 

1. delete `.next` folder
2. build the project
