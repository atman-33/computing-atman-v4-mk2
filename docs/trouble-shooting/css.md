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
