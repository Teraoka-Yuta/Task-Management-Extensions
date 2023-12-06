#データベースの表示と追加を行う
#今回はPythonは使わないかもしれない
#データベースにテストデータを追加する
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("./task-management-extension-firebase-adminsdk-2p7ao-274815c922.json")
app = firebase_admin.initialize_app(cred) 

db = firestore.client()
ref = db.collection(u'task')
docs = ref.stream()

for doc in docs:
    print(u'{} => {}'.format(doc.id, doc.to_dict()))

db.collection("task").add({"userid": 1103854, "level": 5, "deadline":"20240110" , "name": "映像メディア処理"})