## Reference URL

[Render.comでサイト公開してみた](https://zenn.dev/r9uk0/articles/c7f22a57d253ae)

### Render.com & お名前ドットコム

1. Render.com でデプロイ成功が成功し、Webサイトが表示される事を確認
2. お名前ドットコムでドメイン取得
3. Render.com で、CustomDomeinsを設定  
   
Setting > CustomDomains:    
 `computing-atman.com`

4. お名前ドットコムの「DNSレコード設定を利用する」に、Render.com の CustomDomains 設定後に表示された内容を反映

ネームサーバーの設定 > DNS設定/転送設定 > DNSレコード設定を利用する
 * TYPE A を設定
 * TYPE CNAME を設定

5. Render.com で再デプロイ

**カスタムドメインのサイトが正常に表示されない場合**

例) カスタムドメインで下記メッセージが表示される場合

```
このサイトは安全に接続できません
computing-atman.com ではサポートされていないプロトコルが使用されています。
ERR_SSL_VERSION_OR_CIPHER_MISMATCH
```

Render.com or お名前ドットコム の設定が反映されるまで時間が掛かる場合があるため、少し待つ必要有り
（数時間 or 1日程度）
