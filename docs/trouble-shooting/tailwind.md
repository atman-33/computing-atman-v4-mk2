## tailwind css not work...

check tailwind.config.js!

```js
module.exports = {
  mode: 'jit',
  darkMode: ['class'],
  content: [
    join(
      __dirname,
      '{src,pages,components,layouts,features,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
```

**If the problem files are not in the above content, tailwind doesn't work!!**

