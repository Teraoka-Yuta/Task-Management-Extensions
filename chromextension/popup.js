document.addEventListener('DOMContentLoaded', function() {
    // ポップアップが表示されるたびに保存された内容を読み込む
    chrome.storage.sync.get(['content'], function(result) {
      var content = result.content || '';
      document.getElementById('contentArea').value = content;
    });
  
    // テキストエリアの内容が変更されたら保存する
    document.getElementById('contentArea').addEventListener('input', function() {
      var content = this.value;
      chrome.storage.sync.set({ 'content': content });
    });
  });