# chromextension
拡張機能の作成
## 構成
1. 上から期限の近いタスクを順に表示する<br>
2. チェックボックスで終了したタスクを非表示にする<br>
3. 追加ボタンでaddtaskのウェブサイトに移動する<br>

## データの管理はFirebaseとchrome.storage.syncの両方で管理
### Firebase
全体に公開されるタスクを保存する
### chrome.storage.sync
非公開の自分だけ見られるタスクを管理する