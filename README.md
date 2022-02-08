## 確認事項
- リポジトリの公開範囲は正しいか
- README.gsは書いたか
- GithubActionsは導入したか（システム情報を参照）
- secretsを設定しているか
  - EMAIL
  - GASID(Translate GASID: https://github.com/shimajima-eiji/--GAS_v5_Translate)

## 経緯
新しいAPIサービスを作る時の開発促進のため

## 主要リンク
- [開発リポジトリ](https://github.com/shimajima-eiji/--GAS_v5_GetPost-Debug)
- [Gdrive:ディレクトリ](https://drive.google.com/drive/my-drive)
- [Gdrive:スクリプト](https://script.google.com/home)
- [Gdrive:スプレッドシート](https://docs.google.com/spreadsheets)

## システムバージョン
ver1.0.0

## 環境変数
|key|value|用途|備考|
|---|---|---|---|
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
curl -L (GASのWebアプリURL)
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
### 引数
|リクエストボディ|概要|
|---|---|
|?key=(環境変数)|キーの値を取得|
|?key=(環境変数)&value=(該当する任意の値)|キーに値を登録|

### 戻り値
JSON形式

|パラメータ|欠損の可能性|出力例|
|---|---|---|
|result|なし|`Success` or `Failed`|
|message|あり(set時)|`key's value` or `comment`|

## システム管理情報
| システム名称 | 情報 |
| --- | --- |
| READMEフォーマットのバージョン | ver1.2022.02.08 |
| README.gs -> README.md | https://github.com/shimajima-eiji/--GAS_v5_Template/blob/main/.github/workflows/convert_gs2md.yml |
| translate ja -> en | https://github.com/shimajima-eiji/--GAS_v5_Template/blob/main/.github/workflows/translate_ja2en.yml |
