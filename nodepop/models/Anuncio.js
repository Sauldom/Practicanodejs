const mongoose = require('mongoose');


//schema


var anuncioSchema = mongoose.Schema({
    nombre: {type: String, index: true},
    venta: {type: Boolean},
    precio:{type: Number, index: true} ,
    foto: {type: String},
    tags: {type: [String]}
    });


//metodos
anuncioSchema.statics.listar = function(filter, skip, limit, sortRango){
    const query = Anuncio.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.sort(sortRango);
    return query.exec();
}
// modelo de anuncio

const Anuncio = mongoose.model('Anuncio', anuncioSchema);


//exportar modelo
module.exports = Anuncio;
