var express = require('express');
var router = express.Router();
var connection = require('../database/connection');
var Livro = require('../public/javascripts/livro');

router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM livros', function (err, results) {

    if(err) {
      console.log(err);
      return res.send('Error in database');
    }
    res.render('catalogo', { title: 'Catalogo', livros: results });
  })
})

module.exports = router;