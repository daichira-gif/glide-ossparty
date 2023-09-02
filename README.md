# 奥多摩町獣害確認アプリ　
### Team-C-tokyoossparty2023
ノーコードツール「Glide」を用いて、マップ・カレンダー・一覧表で被害状況を確認できるWebアプリ（PC、スマホ）を作成するためのテンプレート。
Tokyo OSS Party!!（2022年度）の成果物です。
https://note.com/tokyo_cio_forum/n/ne524efb87633
ワイヤーフレーム：https://miro.com/app/board/uXjVPluDjdw=/?share_link_id=776639624383
*成果物のうち「害獣注意報アプリ」は別途掲載のため、こちらにはありません。*
ossparty2023,GAS-API,reverse_geocording

## 使い方
デモ動画はこちら：https://www.youtube.com/watch?v=5nZW4lGoQg0&t=2426s

### Google Spreadsheet の作成
#### API連携
１　テンプレート「monkey_DB.xlsx」をGoogle Spreadsheet に変換してドライブにアップロードする
２　「害獣注意報アプリ」で取得した通報データベースのAPIキーを取得する
３　「API取得.gs」の元に、API呼び出し先を通報データベースのWebAPIに書き換える
４　Google Apps Script(GAS)を開き、「API取得.gs」をアップロードする
#### 報告情報の住所表示の確認
１　「害獣注意報アプリ」を用いて、獣害報告データ（動作確認用）を入力する
２　API連携が成功していれば、Google Spreadsheet　の「シート１」タブ上に報告データが入ることを確認する
３　「リバースジオコーディング.gs」をGASにアップロードする
４　「集計ＤＢ」タブ上に入っている報告データのF列（場所）とK列（リバースジオコーディング）の住所情報のうち、どちらの表記形式を採用するかを決める（デフォルト設定はF列）
５　表記形式を変更する場合、「Glide_DB」タブのE列（場所）の計算式を変更する
６　「Glide_DB」タブに、それぞれ報告データが入っていることを確認する
※　テンプレートの「monkeyGPS」タブは、奥多摩町に生息するサル行動域（１群）の把握のため、サルに取り付けたGPS付き発信器のデータをCSV出力したもの。

### Glideアプリ の作成
Glideとは、GoogleアカウントがあればすぐにWebアプリが作成できるツールです。（いわゆるノーコードツール）
GoogleSpreadsheetのデータを読み込ませると、アプリが自動生成されます。
#### Glideアカウントの作成
Glideで検索すればたくさんの紹介記事がありますので、それらを参照してアカウントを作成する
#### GoogleSpreadsheetの読み込み
Glideにログインし、「New App」をクリックし、先に作成したGoogleSpreadsheetを選択する
#### アプリの作成
「Glide_DB」のデータが読み込まれているので、「カレンダー」「マップ」「報告一覧表」の画面をそれぞれ作成する。
開発画面イメージ：https://drive.google.com/file/d/1bxX2UBgZL3tSq1tWjb1_rE0BtpMUvj60/view?usp=drive_link
※成果物では、さらに「monkeyGPS」タブのデータをマップ表示した画面も作成した