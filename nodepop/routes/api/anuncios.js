var express =require('express');
var router = express.Router();
const Anuncio = require('../../models/Anuncio');

/**
 * metodos a crear
 * Lista de anuncios con posibilidad de paginación. Con filtros por tag, tipo de anuncio
(venta o búsqueda), rango de precio (precio min. y precio max.) y nombre de artículo
(que empiece por el dato buscado)
- Lista de tags existentes
- Creación de anuncio 
 * 
 */

//GET /api/anuncios
//para listar todo para probar luego cambiaremos para hacerlo paginado

router.get('/', async(req,res,next)=>{
    try {
        //filtros
        //http://127.0.0.1:3000/api/anuncios?tag=lifestyle
        const filterTag=req.query.tag;
        //http://127.0.0.1:3000/api/anuncios?nombre=Patines
        const filterNombre= req.query.nombre;
        //http://127.0.0.1:3000/api/anuncios?venta=true o false si no esta e venta
        const filterVenta = req.query.venta;
       
        //paginacion
        //http://127.0.0.1:3000/api/anuncios?skip=2&limit=2
        const skip = req.query.skip;
        const limit = req.query.limit;

        //ordenar menor a mayor precio
        //http://127.0.0.1:3000/api/anuncios?sort=precio   o -precio para ascendente
        const sort = req.query.sort;

        const filter ={};
        
                
        if (filterNombre){
            filter.nombre = filterNombre;
        }
        if (filterVenta){
            filter.venta = filterVenta;
        }
        
        const lista = await Anuncio.listar(filter, skip, limit,sort,filterTag);
        res.json({results:lista});
    } catch (error) {
        next(error);
    }
})
//get listar tag
//http://127.0.0.1:3000/api/anuncios/listar-tags
router.get('/listar-tags', async(req,res,next)=>{
    try{
        const listaTags = await Anuncio.listarTags();
        res.json({listaTags});
    }catch(error){
        next(error);
    }
})

//POST /api/anuncios (body)
//para crear mas anuncios por si necesito probar que funciona

router.post('/', async(req, res, next)=>{
    try {
        const dato = req.body;
        const anuncio = new Anuncio(dato);
        const anuncioGuardado = await anuncio.save();
        res.json({result: anuncioGuardado});

    } catch (error) {
        next(error);
    }
});






module.exports = router;