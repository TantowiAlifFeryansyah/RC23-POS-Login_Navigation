var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET home page. */
module.exports =  function(db) {
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/register', function(req, res, next) {
});

router.get('/home', function(req, res, next) {
  res.render('index');
});

return router;
}