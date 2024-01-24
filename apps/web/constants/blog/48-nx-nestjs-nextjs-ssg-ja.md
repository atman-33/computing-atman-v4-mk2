---
title: Nx Nestjs から Nextjs の SSG （静的サイト）を配信する方法
date: '2023-09-24'
tags: ['nx', 'nest-js', 'next-js', 'ssg']
images: ['']
summary: モノレポツールのNxを使い、NextjsのSSG機能で生成した静的サイトをNextjsから配信する方法を説明します。この方法を用いれば、フロントエンドとバックエンドが一つで対応できます。
---

モノレポツールのNxを使い、NextjsのSSG機能で生成した静的サイトをNextjsから配信する方法を説明します。
この方法を用いれば、フロントエンドとバックエンドが一つで対応できます。

## フロントエンドとバックエンドのプロジェクトを作成

### 1. Nx ワークスペース & Nestjs プロジェクトを作成

適当なディレクトリに移動し、下記コマンドを実行します。

```bash
npx create-nx-workspace@latest

✔ Where would you like to create your workspace? · sample-workspace
✔ Which stack do you want to use? · node
✔ What framework should be used? · nest
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · api
✔ Would you like to generate a Dockerfile? [https://docs.docker.com/] · No
✔ Enable distributed caching to make your CI faster · No
```

これで、Nestjs の api プロジェクトが作成されます。

### 2. Nextjs プロジェクトを作成

```bash
nx g @nx/next:app web

✔ Which stylesheet format would you like to use? · css
✔ Which E2E test runner would you like to use? · cypress
✔ Would you like to use the App Router (recommended)? (Y/n) · true
```

上記によるディレクトリ構造は下記です。

```text
sample-workspace/
  |- apps/
  |    |- api/
  |    |- web/
```

## Nextjs(フロントエンド) を SSG 対応に変更

静的ファイルに対応させるために、下記を変更します。

* images > unoptimized: true を追加 (SSG では、next/image が使えない)
* output: 'export' を追加
* trailingSlash: true を追加

```js:apps/web/next.config.js
const nextConfig = {
  nx: {

    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false

  }, 
  images: {

    unoptimized: true,

  }, 
  output: 'export', 
  trailingSlash: true
}; 

```

> `trailingSlash: true` を設定しないと、Nestjs 経由で Nextjs にアクセスした際、トップページ以外でブラウザの再読み込みを実行すると、トップページにリダイレクトされてしまいます。
>
> [NEXT.JS trailigSlash](https://nextjs.org/docs/app/api-reference/next-config-js/trailingSlash)

## Nestjs(バックエンド)に ServeStaticModule を追加

### 1. serve-static パッケージをインポート

```bash
npm i @nestjs/serve-static
```

### 2. ServeStaticModule を実装

```ts:apps/api/src/app/app.module.ts
import { ServeStaticModule } from '@nestjs/serve-static'; 
import path, { join } from 'path'; 
// その他標準の import は省略

@Module({
  imports: [

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web/.next'),
      exclude: ['/api/*']
    }),

  ], 
  controllers: [AppController], 
  providers: [AppService]
})
export class AppModule {}

```

上記により、エンドポイントが api で始まらない場合は、Nextjs の静的サイトである `.next` に遷移させます。

> この時点では、`.next` フォルダは生成されていません。後に説明する Nextjs の Build を実行することで、 `.next` フォルダが生成されます。

## package.json に build と start コマンドを追加

package.json に build と start のコマンドを追加します。

```json:package.json
"scripts": {
    "cd:build-api": "npx nx build api --prod",
    "cd:build-web": "npx nx build web --prod",
    "cd:build": "npm run cd:build-api && npm run cd:build-web",
    "cd:web-start:server": "cd dist/apps/web && npm run start",
    "cd:web-start:static": "npx serve dist/apps/web/.next",
    "cd:api-start": "node dist/apps/api/main.js"
}
```

次に、build コマンドを実行します。

```bash
npm run cd:build
```

フロントエンド(web)とバックエンド(api)のビルドファイルが生成されます。

最後に、start コマンドを実行します。

```bash
npm run cd:api-start
```

localhost のバックエンドサーバーが立ち上がりますので、ブラウザ上でアクセスすると、Nextjs のページが表示されます。

これらをホスティングサーバーにデプロイすれば、一つのサーバーでフロントエンドとバックエンドが統合されて配信する事が可能です。

参考に、build 後のディレクトリ構成です。

```text
sample-workspace/
  |- apps/
  |    |- api/
  |    |- web/
  |
  |-dist/  <= build 後に生成
  |   |- apps/
  |        |- api/   
  |        |- web/
  |             |- .next/
  |
  |- package.json
```
