var express = require('express');
var router = express.Router();
var Anuncio = require('../models/Anuncio');
const { query, body, validationResult } = require('express-validator');



/* GET home page. 
router.get('/', async function(req, res, next) {
  try {
    
    const listaAnuncios = await Anuncio.find();
    console.log(listaAnuncios);
    res.render('index', {listaAnuncios, title: 'Nodepop' });

  } catch (error) {
    next(error);
  } 
});*/

router.get('/',
    [query('nombre').optional().isString().withMessage('El nombre debe de ser un string'),
    query('venta').optional().isBoolean().withMessage('Venta debe ser un bool'),
    query('tag').optional().isAlphanumeric().withMessage('La etiqueta solo puede contener caracteres alfanuméricos'),
]
    ,async(req,res,next)=>{
    try {
        //validation
        validationResult(req).throw();
        
        //filtros
        //http://127.0.0.1:3000/api/anuncios?tag=lifestyle
        const filterTag=req.query.tag;
        //http://127.0.0.1:3000/api/anuncios?nombre=Patines
        const filterNombre= req.query.nombre;
        //http://127.0.0.1:3000/api/anuncios?venta=true o false si no esta e venta
        const filterVenta = req.query.venta;
       //a ver que tal sale lo del precio
        const filterPrecio = req.query.precio;
        //paginacion
        //http://127.0.0.1:3000/api/anuncios?skip=2&limit=2
        const skip = req.query.skip;
        const limit = req.query.limit;

        //ordenar menor a mayor precio
        //http://127.0.0.1:3000/api/anuncios?sort=precio   o -precio para ascendente
        const sort = req.query.sort;

        const filter ={};
            
        if (filterNombre){           
            filter.nombre = new RegExp('^' +filterNombre, "i");            
        }
        if (filterVenta){
            filter.venta = filterVenta;
        }
        //a ver que tal el experimiento del precio
        if(filterPrecio){
            let precioFiltrado = {};
            if (filterPrecio.includes('-')) {
                const [min, max] = filterPrecio.split('-');
                if (min && max) {
                    precioFiltrado.$gte = min;
                    precioFiltrado.$lte = max;
                } else if (min) {
                    precioFiltrado.$gte = min;
                } else if (max) {
                    precioFiltrado.$lte = max;
                }
            } else {
                precioFiltrado = filterPrecio;
            }
            filter.precio= precioFiltrado;
        }

        const lista = await Anuncio.listar(filter, skip, limit,sort,filterTag, filterNombre);
        console.log(lista);
        res.render('index', {lista, title: 'Nodepop' });
    } catch (error) {
        next(error);
    }
})

//get listar tag
//http://127.0.0.1:3000/listar-tags
router.get('/listar-tags', async(req,res,next)=>{
  try{
    const listaTags = await Anuncio.listarTags();
    console.log(listaTags);
      res.render('tags',{listaTags, title: 'Nodepop' });
  }catch(error){
      next(error);
  }
})


module.exports = router;
