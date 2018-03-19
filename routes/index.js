var express = require('express');
var router = express.Router();

//This is adult page
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
  
});

//This is the kid page
router.get('/kids', function(req, res, next) {

  res.render('kids', { title: 'videoApp' });
});

module.exports = router;
