var express = require('express');
var router = express.Router();



// 接続情報を設定
const { MongoClient } = require("mongodb");
//mongodb 接続情報を uriの後に入力すること！　mongodb+srv://saiba:<db_password>@test.qm7rph6.mongodb.net/?retryWrites=true&w=majority&appName=test
const uri = "***";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note);
})

module.exports = router;