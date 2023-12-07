let content
document.addEventListener('DOMContentLoaded', function() {
    // ポップアップが表示されるたびに保存された内容を読み込む
    chrome.storage.sync.get(['content'], function(result) {
      content = result.content || '';
      document.getElementById('contentArea').value = content;
      document.getElementById('task_1').textContent = content;
    });
  
    // テキストエリアの内容が変更されたら保存する
    document.getElementById('contentArea').addEventListener('input', function() {
      content = this.value;
      chrome.storage.sync.set({ 'content': content });
    });

    document.getElementById("task_1").textContent = "task"
  });