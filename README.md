## 経緯
新しいAPIサービスを作る時の開発促進のため

## 主要リンク
- [リポジトリ](https://github.com/shimajima-eiji/--GAS_v5_GetPost-Debug)
- [LineBot:Webhook](https://manager.line.biz/account)

## バージョン
ver1.0.0

## 環境変数
|key|value|用途|備考|
|---|---|---|---|
|SSID|スプレッドシートのID|||
|SSNAME|スプレッドシート名|||

## デバッガ

## パラメータ
### 引数
|リクエストボディ|概要|
|---|---|
|?key=(環境変数)|キーの値を取得|
|key=(環境変数)&value=(該当する任意の値)|キーに値を登録|

### 戻り値
JSON形式

|パラメータ|動作|出力例|
|---|---|---|
|result|get/set|`Success` or `Failed`|
|message|get|`key's value` or `comment`|

## READMEのバージョン
ver2022.01.11
