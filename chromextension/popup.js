let content;
let save;
let text;

document.addEventListener('DOMContentLoaded', function() {
  // ポップアップが表示されるたびに保存された内容を読み込む
  chrome.storage.sync.get(['content'], function(result) {
    save = result.content || '';
    content = save;
    document.getElementById('task1').textContent = save.substr(9);
    //document.getElementById('task1').textContent = document.getElementById('cheakTask1').value
  });

  // テキストエリアの内容が変更されたら保存する
  document.getElementById('contentArea').addEventListener('input', function() {
    content = document.getElementById('contentArea').value;
    content = text + content;
    chrome.storage.sync.set({ 'content': content });
  });

  var checkbox = document.getElementById("cheakTask1");
  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      // チェックボックスがチェックされたときの処理
      console.log("チェックボックスがチェックされました");
      // ここに追加の処理を記述できます
      text = save;
    } else {
      // チェックボックスがアンチェックされたときの処理
      console.log("チェックボックスがアンチェックされました");
      // ここに追加の処理を記述できます
      text = "undefined";
    }
  });
});