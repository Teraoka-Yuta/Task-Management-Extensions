// Firebaseの初期化
// Import the functions you need from the SDKs you need
// Firebase SDKの読み込み
//import firebase from 'firebase/app';
//import 'firebase/database';
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


// Firebaseの初期化
firebase.initializeApp(firebaseConfig);

// データベース参照の取得（'users'はデータを保存する場所）
const database = firebase.database();
const usersRef = database.ref('task');

// 追加するデータ
const newData = {
  name: 'exampleUser',
  deadline: 'user@example.com',
  level: '5',
  userid: '1103854'
};



function OnButtonClick() {
    target = document.getElementById("add");
    // データベースに値を追加
    usersRef.push(newData)
    .then(() => {
        console.log('データが正常に追加されました。');
    })
    .catch((error) => {
        console.error('データの追加中にエラーが発生しました:', error);
    });
}
let OnButtonClick = document.getElementById('btn');