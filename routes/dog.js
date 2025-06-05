var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
    request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.json(data);
        }
    });
})

module.exports = router;