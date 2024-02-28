'use strict'
const readline = require('node:readline');
const connection = require('./lib/connectMongoose');
const Anuncio = require('./models/Anuncio');


main().catch(err=>console.log('Hubo un error al ejecutar el script: ', err));


async function main(){

    await new Promise((resolve)=> connection.once('open', resolve));
    
    //pregunta de confirmacion de borrado de datos
    const borrar = await pregunta('Estas seguro de querer borrar los contenidos de la base de datos: ');
    if(!borrar){
        process.exit();
    }

    await initAnuncios();

    //desconectar de la base de datos
    connection.close();
}


async function initAnuncios(){
    //primero borramos todos los anuncios
    const deleted = await Anuncio.deleteMany();
    console.log(deleted);

    //creamos anuncios
    const inserted = await Anuncio.insertMany([
        {
            nombre: "Bicicleta",
            venta: true,
            precio: 230.15,
            foto: "./public/images/bici.png",
            tags: [ "lifestyle", "motor"]
        },
        {
            nombre: "iPhone3GS",
            venta: false,
            precio: 50.00,
            foto: "./public/images/iphone.png",
            tags: [ "lifestyle", "mobile"]
        },
        {
            nombre: "Dinosaurio",
            venta: true,
            precio: 45,
            foto: "./public/images/dinosaurio.png",
            tags: [ "lifestyle", "juguete"]
            },
        {
            nombre: "Patines",
            venta: true,
            precio: 268.85,
            foto: "./public/images/patines.png",
            tags: [ "lifestyle", "juguete"]
            },
    ]);
    //si fueran mucho los cambiaria por un console log con length pero de momento
    //prefiero dejarlo mas visual ya que son pocos items
    console.log(inserted);
    console.log (`Se han insertado ${inserted.length} anuncios`);
}

function pregunta(texto) {
    return new Promise((resolve, reject) => {
      // conectar readline con la consola
      const ifc = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      ifc.question(texto, respuesta => {
        ifc.close();
        resolve(respuesta.toLowerCase() === 'si');
      })
    });
  }