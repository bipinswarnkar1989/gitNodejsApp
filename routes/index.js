var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Git Application Api Working Please read the Readme file of the repo for Api Usage' });
});

module.exports = router;
