# Render.com

## Deploy error => Images are broken (Internal Server Error)

install sharp

```bash
npm i sharp
```

reference url:  

* https://github.com/vercel/next.js/issues/49896

## Error [RangeError]: Incorrect locale information provided

ex:  

```bash
Sep 5 10:57:26 PM  Error [RangeError]: Incorrect locale information provided
Sep 5 10:57:26 PM      at Intl.getCanonicalLocales (<anonymous>)
Sep 5 10:57:26 PM      at CanonicalizeLocaleList (file:///opt/render/project/src/dist/apps/web/.next/server/middleware.js:2004:17)
Sep 5 10:57:26 PM      at match (file:///opt/render/project/src/dist/apps/web/.next/server/middleware.js:2252:35)
Sep 5 10:57:26 PM      at getLocale (file:///opt/render/project/src/dist/apps/web/.next/server/middleware.js:2297:12)
Sep 5 10:57:26 PM      at Object.middleware [as handler] (file:///opt/render/project/src/dist/apps/web/.next/server/middleware.js:2313:24)
Sep 5 10:57:26 PM      at <unknown> (file:///opt/render/project/src/dist/apps/web/.next/server/middleware.js:1908:23)
Sep 5 10:57:26 PM      at AsyncLocalStorage.run (node:async_hooks:338:14)
Sep 5 10:57:26 PM      at Object.wrap (file:///opt/render/project/src/dist/apps/web/.next/server/middleware.js:1707:24)
Sep 5 10:57:26 PM      at adapter (file:///opt/render/project/src/dist/apps/web/.next/server/middleware.js:1895:53)
Sep 5 10:57:26 PM      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
```

*Reference solution URL*
https://stackoverflow.com/questions/76447732/nextjs-13-i18n-incorrect-locale-information-provided

* note: add if condition

```text
The issue is happening due to getting the language array as: [ "*" ] Which is not defined in the language that we have, I added an if condition to solve this issue:

    if (languages.length === 1 && languages[0] === '*') {
        languages = ['ar']
    }
```

## TypeError: fetch failed

ex:  

```bash
Sep 5 11:03:41 PM  TypeError: fetch failed
Sep 5 11:03:41 PM      at Object.fetch (node:internal/deps/undici/undici:11576:11)
Sep 5 11:03:41 PM      at async invokeRequest (/opt/render/project/src/node_modules/next/dist/server/lib/server-ipc/invoke-request.js:17:12)
Sep 5 11:03:41 PM      at async invokeRender (/opt/render/project/src/node_modules/next/dist/server/lib/router-server.js:254:29)
Sep 5 11:03:41 PM      at async handleRequest (/opt/render/project/src/node_modules/next/dist/server/lib/router-server.js:447:24)
Sep 5 11:03:41 PM      at async requestHandler (/opt/render/project/src/node_modules/next/dist/server/lib/router-server.js:464:13)
Sep 5 11:03:41 PM      at async Server.<anonymous> (/opt/render/project/src/node_modules/next/dist/server/lib/start-server.js:117:13) {
Sep 5 11:03:41 PM    cause: SocketError: other side closed
Sep 5 11:03:41 PM        at Socket.onSocketEnd (/opt/render/project/src/node_modules/next/dist/compiled/undici/index.js:1:63301)
Sep 5 11:03:41 PM        at Socket.emit (node:events:526:35)
Sep 5 11:03:41 PM        at endReadableNT (node:internal/streams/readable:1359:12)
Sep 5 11:03:41 PM        at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
Sep 5 11:03:41 PM      code: 'UND_ERR_SOCKET',
Sep 5 11:03:41 PM      socket: {
Sep 5 11:03:41 PM        localAddress: '::1',
Sep 5 11:03:41 PM        localPort: 51884,
Sep 5 11:03:41 PM        remoteAddress: undefined,
Sep 5 11:03:41 PM        remotePort: undefined,
Sep 5 11:03:41 PM        remoteFamily: undefined,
Sep 5 11:03:41 PM        timeout: undefined,
Sep 5 11:03:41 PM        bytesWritten: 4259,
Sep 5 11:03:41 PM        bytesRead: 462
Sep 5 11:03:41 PM      }
Sep 5 11:03:41 PM    }
Sep 5 11:03:41 PM  }
```

*Reference solution URL*

https://github.com/vercel/next.js/issues/53695
https://github.com/vercel/next.js/discussions/54545

* note: downgrade next to 13.4.12

```bash
npm i next@13.4.12 --save-exact
```

## After delopy success, but display blank page

Set PORT in Environment Variables.
