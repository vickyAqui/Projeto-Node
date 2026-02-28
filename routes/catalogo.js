var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('catalogo', { title: 'Catalogo' });
})

module.exports = router;