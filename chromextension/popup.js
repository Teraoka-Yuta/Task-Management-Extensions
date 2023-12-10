let content
let date
// Firebaseの初期化
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR6Qww8456rfhLU-cOJEHpiPpj7u1gmFE",
  authDomain: "task-management-extension.firebaseapp.com",
  projectId: "task-management-extension",
  storageBucket: "task-management-extension.appspot.com",
  messagingSenderId: "1054215485645",
  appId: "1:1054215485645:web:c9e622d7615154aea19184",
  measurementId: "G-4L91RB0YDD"
};



// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


// Firestoreからデータを取得
var collectionRef = db.collection("task");

collectionRef.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // 各ドキュメントのデータを処理する
    var data = doc.data();
    console.log("Document data:", data);
    document.getElementById('task_1').textContent = data;
  });
}).catch((error) => {
  console.error("Error getting documents: ", error);
});


firebase.initializeApp(firebaseConfig);

// Firestoreの参照を取得
var db = firebase.firestore();
document.addEventListener('DOMContentLoaded', function() {
    // ポップアップが表示されるたびにFirestoreに保存された内容を読み込む
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

    document.getElementById('date').addEventListener('input', function() {
      content = this.value;
      chrome.storage.sync.set({ 'date': content });
    });

    let myButton = document.getElementById("addOpen");

    // ボタンがクリックされたときの動作を定義
    myButton.addEventListener("click", function() {
      // ここに実行したいコードを書く
      chrome.storage.sync.set({ 'content': content });
      alert("ボタンがクリックされました！");
    });

    document.getElementById("task_1").textContent = "task"
  });