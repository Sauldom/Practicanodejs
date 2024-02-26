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
        const filterTag=req.query.tag;

        const sortRango = req.query.sort;
        
        const filterNombre= req.query.nombre;

        const filterTipo = req.query.tipo;

        //paginacion
        const skip = req.query.skip;
        const limit = req.query.limit;

        const filter ={};
        if (filterTag){
            filter.tags = filterTag;
        }
                
        if (filterNombre){
            filter.nombre = filterNombre;
        }
        if (filterTipo){
            filter.tipo = filterTipo;
        }
        const lista = await Anuncio.listar(filter, skip, limit, sortRango);
        res.json({results:lista});
    } catch (error) {
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
})





module.exports = router;