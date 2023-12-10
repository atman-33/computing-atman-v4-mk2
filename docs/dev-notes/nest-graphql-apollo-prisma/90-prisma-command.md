## Reference URL

https://www.memory-lovers.blog/entry/2021/10/13/113000

## 全体の流れ

### 事前準備
- 初期設定                    ... npx prisma init
- 既存DBのスキーマ取得        ... npx prisma db pull
- 初期マイグレーションSQL生成 ... npx prisma migrate dev

### 開発時
- DBスキーマの同期            ... npx prisma db push
- マイグレーションSQL生成     ... npx prisma migrate dev
- Prisma Clientの生成         ... npx prisma generate

### 本番
- マイグレーション履歴の設定  ... npx prisma migrate resolve
- マイグレーションの実行      ... npx prisma migrate deploy