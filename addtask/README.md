# addtask
## タスクを入力するwebサイト
Firebaseにタスクを追加する。ウェブサイトを作成する。


## 画面構成
1. タスク名 文字列入力
2. 期限 文字列 YYYYMMDD形式 (例 20231206)
3. 課題の難度 1~10段階 プルダウンメニューで選択
4. 追加ボタン
5. 戻るボタン


## ログイン機能
実装しないとほかの人のタスクが表示される。<br>

## 追加画面自体も拡張機能内に実装できそうなので、HTMLとJavaScriptでFirestoreに追加してほしい
初期ではFirestoreでデータ管理を行う予定だったがchrome.storage.syncでデータを管理することができそうなので両方行う。
案
1. Firebaseで公開タスクを管理し、誰でも見られるようにする。
2. chrome.storage.syncで非公開のタスクを管理することで安全性を上げる。

## jsで実装してほしいもの
### 入力
htmlから以下が与えられる
1. タスク名 : name
2. 期限 : deadline
3. 難度 : level
4. 名前又はid (学籍番号などを想定) : id
### 出力
公開で追加ボタン(id="addOpen")を押すとFirestoreに
非公開で追加ボタン(id="addClose))を押すとchrome.storage.syncにデータを追加する
~~Firebase出のデータ管理が分からないためlocalでデータを管理する~~