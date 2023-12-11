## Expand the header to the full screen width.

Add `style={{ margin: '0 calc(50% - 50vw)', width: '100vw' }` to component.

```tsx
    <header
      className="sticky top-0 z-10 flex items-center justify-between bg-white py-10 px-8 shadow-xl dark:bg-gray-900"
      style={{ margin: '0 calc(50% - 50vw)', width: '100vw' }}
    >
```

Add `overflow-x-hidden` to body.

```tsx
      <body className="overflow-x-hidden bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
```

## Set footer on the bottom.

1. add `flex flex-col min-h-[100vh]` to div.
2. add `flex-1` to main content.

```tsx
  <div className="flex min-h-[100vh] flex-col justify-between font-sans">
    <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </SearchProvider>
  </div>
```

> reference url:  
> https://codepen.io/mixtaro/pen/GRXQpmw