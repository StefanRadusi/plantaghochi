var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mainpage', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mainpage/inventory', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mainpage/live', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mainpage/store', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mainpage/profile', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
