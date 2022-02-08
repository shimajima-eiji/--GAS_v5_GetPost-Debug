/*
## 経緯
新しいAPIサービスを作る時の開発促進のため

## 主要リンク
- [リポジトリ](https://github.com/shimajima-eiji/--GAS_v5_GetPost-Debug)
  - [テンプレート](https://github.com/shimajima-eiji/--GAS_v5_Template)
- [Gdrive:ディレクトリ](https://drive.google.com/drive/my-drive)
- [Gdrive:スクリプト](https://script.google.com/home)
- [Gdrive:スプレッドシート](https://docs.google.com/spreadsheets)

## システムバージョン
ver1.0.0

## 制限


## 環境変数
|key|value|用途|備考|
|---|-----|---|----|
|SSID|スプレッドシートのID|||
|SSNAME|スプレッドシート名|||

## デバッガ
```
function __doGet_debug() {
  doPost({
    parameter: {
      name: "テストユーザー",
      message: "テスト"
    }
  })
}

function __doPost_debug() {
  doPost({
    postData: {
      contents: [
        {name: "テストユーザー"},
        {message: "テスト"}
      ]
    }
  })
}
```

### curl
```
# Get
curl -X GET -L (GASのWebアプリURL)?(パラメータ)
```

```
# Post(ここでは使えない)
curl -X POST 'https://example.com/' \
-H 'Content-Type: application/json' \
-d '{"key1": "value1", "key2": "value2"}'
```

### 参考
- [色々変換](https://curlconverter.com)
- [GASの場合](https://qiita.com/murase/items/7a75f07d417366b2dbc8)

## パラメータ
### doGet(ない場合は削除)
エンドポイントの後に?(キー1)=(値1)&(キー2)=(値2)でパラメータを渡す

```
# GASはリダイレクトするので-Lは必須
curl -X GET -L (エンドポイント)?(パラメータ)
```

#### リクエスト
|キー|キー必須|想定される値|概要|
|---|-------|---------|---|

#### レスポンス
レスポンスは([String] or [JSON String] or [JSONS String])形式

|キー|欠損の可能性|想定される値|概要|
|---|----------|---------|---|

### doPost(ない場合は削除)
各ライブラリに準拠

#### リクエスト
|キー|キー必須|想定される値|概要|
|---|-------|---------|---|

#### レスポンス
レスポンスは([String] or [JSON String] or [JSONS String])形式

|キー|欠損の可能性|想定される値|概要|
|---|----------|---------|---|

レスポンスは([String] or [JSON String] or [JSONS String])形式

## システム管理情報
| システム名称 | 情報 |
| --------- | ---- |
| READMEフォーマットのバージョン | ver4.2022.02.08 |
| README.gs -> README.md | https://github.com/shimajima-eiji/--GAS_v5_Template/blob/main/.github/workflows/convert_gs2md.yml |
| translate ja -> en | https://github.com/shimajima-eiji/--GAS_v5_Template/blob/main/.github/workflows/translate_ja2en.yml |

*/
