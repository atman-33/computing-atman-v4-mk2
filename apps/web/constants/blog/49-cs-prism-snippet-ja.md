---
title: C# Prism Template Pack コードスニペット（Visutl Studio Code）
date: '2023-09-30'
lastmod: '2023-09-30'
tags: ['vs-code', 'c-sharp']
images: ['']
summary: C# Prism Template Pack の Visutl Studio Code 用スニペットです。
---

## Visual Studio Code に独自のコードスニペットを登録

下記手順でコードスニペットファイルを作成できます。

コードエディター上部メニューの ファイル > ユーザー設定 > ユーザースニペット を選択

コードスニペットは JSON で記述していきます。

## コードスニペット

### propp

更新通知が必要なプロパティを定義

```json
  "Create Bindable Propery": {
    "scope": "csharp",
    "prefix": "propp",
    "body": [
      "private ${1:Type} _${3:${2/(.*)/${1:/camelcase}/}};",
      "public ${1:Type} ${2:Name}",
      "{",
      "   get { return _$3; }",
      "   set { SetProperty(ref _$3, value); }",
      ,
      "}"
    ],
    "description": "Creat a propety, with a backing field, that depends on BindableBase."
  },
```

#### ${3:...} について補足

* `${2/(.*)/${1:/camelcase}/}`: この部分は正規表現と置換パターンの組み合わせです。この部分は、${2: Name} の値を元にして、バッキングフィールドの名前を生成します。
* `(.*)`: これは正規表現のキャプチャーグループです。この部分は、ユーザーが入力したプロパティの名前（Name）をキャプチャします。
* `${1:/camelcase}`: これはキャプチャした文字列をキャメルケースに変換するための置換パターンです。`${1:...}` はキャプチャした値を参照するもので、`:camelcase` はキャメルケース変換を指示しています。

### cmd

デリゲートコマンド

```json
  "Create DelegateCommand Property": {
    "scope": "csharp",
    "prefix": "cmd",
    "body": [
      "public DelegateCommand ${1:Command} => new DelegateCommand(() =>", 
      "{", 
      "", 
      "});"
    ],
    "description": "Creat a DelegateCommand property with private setter."
  },
```

### cmdg

パラメータ付きデリゲートコマンド

```json
  "Create Generic DelegateCommand Property": {
    "scope": "csharp",
    "prefix": "cmdg",
    "body": [
      "public DelegateCommand<${2:Param}> ${1:Command} => new DelegateCommand<${2:Param}>((p) =>",
      "{",
      "",
      "});"
    ],
    "description": "Creat a generic DelegateCommand property."
  }
```
