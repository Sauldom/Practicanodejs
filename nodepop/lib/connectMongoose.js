const mongoose = require('mongoose');

mongoose.connection.on('err', err=>{
    console.log('Error de conexion: ', err);
})

mongoose.connection.once('open', ()=>{
    console.log('Conectado correctamente en: ', mongoose.connection.name);
})

mongoose.connect('mongodb://127.0.0.1:27017/nodepop')


module.exports = mongoose.connection;
