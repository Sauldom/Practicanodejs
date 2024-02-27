var express = require('express');
var router = express.Router();
var Anuncio = require('../models/Anuncio');

router.use(express.static('public'));
/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    
    const listaAnuncios = await Anuncio.find();
    console.log(listaAnuncios);
    res.render('index', {listaAnuncios, title: 'Nodepop' });

  } catch (error) {
    next(error);
  }
  

});




module.exports = router;
