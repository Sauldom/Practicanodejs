const mongoose = require('mongoose');


//schema


const anuncioSchema = mongoose.Schema({
    nombre: {type: String, unique: true},
    venta: {type: Boolean},
    precio:{type: Number, index: true} ,
    foto: {type: String},
    tags: {type: [String]}
    });


//metodos
anuncioSchema.statics.listar = function(filter, skip, limit,sort, filterTag){
    const query = Anuncio.find(filter);
    if (filterTag){
        query.where('tags').in([filterTag]);
    }
    
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);       
    return query.exec();
}

anuncioSchema.statics.listarTags = function() {
    return Anuncio.distinct('tags').exec();
};
// modelo de anuncio

const Anuncio = mongoose.model('Anuncio', anuncioSchema);


//exportar modelo
module.exports = Anuncio;
