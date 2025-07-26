var express = require('express');
var router = express.Router();
const request = require('request');
const cors = require('cors'); // corsミドルウェアを追加

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
    // QRコードAPIを呼び出す
    const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example';
    
    request({ url: apiUrl, encoding: null }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        // 画像データをそのままクライアントに送信
        res.send(body);
      } 
    });
  });

module.exports = router;