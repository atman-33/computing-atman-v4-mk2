## Reference URL

[Render.comでサイト公開してみた](https://zenn.dev/r9uk0/articles/c7f22a57d253ae)

### お名前ドットコム

1. Render.com でデプロイ成功を確認
2. お名前ドットコムでドメイン取得
3. Render.com で、CustomDomeinsを設定

Setting > CustomDomains:    
 `computing-atman.com`

 4. お名前ドットコムの「DNSレコード設定を利用する」に、Render.com の CustomDomains 設定後に表示された内容を反映

 ネームサーバーの設定 > DNS設定/転送設定 > DNSレコード設定を利用する
 * TYPE A を設定
 * TYPE CNAME を設定
