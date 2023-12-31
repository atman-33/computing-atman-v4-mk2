# Next.js Ver

___________________________________________________________________________________________________

## Google Analytics

### Reference URL

[【Next.js 13】環境ファイル別で Google Analytics を設定する](https://zenn.dev/kazuki23/articles/4cc0cf35a20ac0)

Others:  
[Next.js アプリに Google Analytics を設定する (next/script)](https://maku.blog/p/zycmw6f/)

### Step

1. Google Analytics > データストリームにウェブサイトを追加し、測定IDを取得
2. `apps/web/lib/gtag.ts` を作成
3. gtag の型を定義

```bash
 npm add -D @types/gtag.js`
 ```

apps/web/types/gtag.d.ts:  

```ts
declare module 'gtag.js'; 
```

4. `apps/web/components/google-analytics.tsx` を作成
5. `apps/web/app/layout.tsx` に GoogleAnalytics コンポーネントを追加

> gtag.d.ts は不要。また、gtag.js を google-analytics.tsx に含める事で一つのファイルにする事が可能。
___________________________________________________________________________________________________

## Google Search Console

### Google Search Console 登録

* サイトを Google Search Console に登録

### sitemap ファイルを作成して登録

1. `apps/web/app/sitemap.ts` を作成
2. `apps/web/app/robots.ts` を作成
3. デプロイ
4. Google Search Console にサイトマップを登録

___________________________________________________________________________________________________

## Google Adsense

1. ルートディレクトリに `ads.txt`を 追加

* `apps/web/public/ads.txt`
* `apps/web/middleware.ts` の ignore 対象に ads.txt を追加

2. Google Analytics Webページから審査を依頼
