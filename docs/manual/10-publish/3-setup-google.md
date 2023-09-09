# Next.js Ver

## Google Search Console

### Reference URL

## Google Search Console 登録

* サイトを Google Search Console に登録
* サイトのトップページ index.html に、所有権を示すhtmlタグを挿入

## sitemap を登録

### 1. sitemap.xml を作成

* post ページのサイトマップ一覧を作成

```
node tools/generate-sitemap-xml.js
```

* トップページ等の検索対象が必要なページを sitemap.xml に追加

### 2. robots.txt を作成

* robots.txt  

```
User-Agent: *
Disallow:
```

* robots.txt を apps/client/src/ に保存  
* client(Angular)の project.json assets に robots.txt を追加  

### 3. sitemap.xml を登録

* sitemap.xml を apps/client/src/ に保存  

* client(Angular)の project.json assets に sitemap.xml を追加  

```json
  "targets": {
    "build": {
      "executor": "@angular-devkit/build-angular:browser",
      "outputs": ["{options.outputPath}"],
      "options": {
        "outputPath": "dist/apps/client",
        "index": "apps/client/src/index.html",
        "main": "apps/client/src/main.ts",
        "polyfills": ["zone.js"],
        "tsConfig": "apps/client/tsconfig.app.json",
        "assets": [
          "apps/client/src/favicon.ico", 
          "apps/client/src/assets",
          "apps/client/src/sitemap.xml",
          ...
        ],
```

* deploy

* google search console にサイトマップを登録

## Google Analytics

## Google Adsense
