# Coding Rule

## Reference URL

https://github.com/alan2207/bulletproof-react/tree/master

https://note.com/ryoppei/n/n2e3e7a66e758

## Nextjs

### フォルダ名とファイル名

ファイル名とフォルダー名の単語を区切るのに小文字とハイフンを使用する（ケバブケース）。

ex: 
- フォルダ: about, blog
- ファイル: sitemap.ts

### コンポーネント、コンテキスト

名前はPascalCaseを使用する。

ex: 
- Button.tsx
- ThemeContext.tsx

### 副作用の扱い

JSX/TSXの構築に直接関係のない処理は全て副作用として扱い、副作用は useEffect or イベントハンドラ内に記述する。

副作用の例:
- コンソールへのログ出力
- DOM操作（DOM操作はNode.js上で実行できずエラーとなるが、useEffect内に記述すれば実行されない）
- サーバーとの通信
- タイマー処理
- ランダムな値の生成

## Nestjs

### フォルダ名とファイル名

ファイル名とフォルダー名の単語を区切るのに小文字とハイフンを使用する（ケバブケース）。
