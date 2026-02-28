var express = require('express');
var router = express.Router();
var connection = require('../database/connection');



/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM livros', function (err, results) {
    if (err) {
      console.log(err);
      return res.send('Error in database');
    }
  })
  
  res.render('index', { title: 'Biblioteca'});
});

module.exports = router;
