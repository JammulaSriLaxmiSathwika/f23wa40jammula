var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Jammula SriLaxmi Sathwika' });
});

module.exports = router;
