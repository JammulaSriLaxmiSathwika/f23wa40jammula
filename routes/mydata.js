var express = require('express');
var router = express.Router();

/* GET my name page . */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Jammula Sri Laxmi Sathwika' });
});

module.exports = router;
