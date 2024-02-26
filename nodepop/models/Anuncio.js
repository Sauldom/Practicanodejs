const mongoose = require('mongoose');


//schema


var anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
    });



// modelo de anuncio

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

