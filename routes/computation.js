var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    let x;
    let y;

    if (req.query.x == undefined) {
        x = Math.floor(Math.random() * 10);
        y = Math.fround(Math.random());
        let y1 = Math.fround(x);
        let y2 = Math.random(y);
        let y3 = Math.round(x);
        res.send('Math.fround() applied to ' + x + ' is ' + y1 + "<br>" + 'Math.random() applied to ' + y + ' is ' + y2 + "<br>" + 'Math.round() applied to ' + x + ' is ' + y3);
    } else {
        x = req.query.x;
        let y1 = Math.fround(x);
        let y2 = Math.random(x);
        let y3 = Math.round(x);
        res.send('Math.fround() applied to ' + x + ' is ' + y1 + "<br>" + 'Math.random() applied to ' + y + ' is ' + y2 + "<br>" + 'Math.round() applied to ' + x + ' is ' + y3);
    }
});

module.exports = router;
