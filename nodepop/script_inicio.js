'use strict'

const connection = require('./lib/connectMongoose');
const Anuncio = require('./models/Anuncio');

main().catch(err=>console.log('Hubo un error al ejecutar el script: ', err));


async function main(){

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
            foto: "./public/images/bici.jpg",
            tags: [ "lifestyle", "motor"]
        },
        {
            nombre: "iPhone 3GS",
            venta: false,
            precio: 50.00,
            foto: "./public/images/iphone.jpg",
            tags: [ "lifestyle", "mobile"]
        },
        {
            nombre: "Dinosaurio",
            venta: true,
            precio: 45,
            foto: "./public/images/dinosaurio.jpg",
            tags: [ "lifestyle", "juguete"]
            },
        {
            nombre: "Patines",
            venta: true,
            precio: 268.85,
            foto: "./public/images/patines.jpg",
            tags: [ "lifestyle", "juguete"]
            },
    ]);
    //si fueran mucho los cambiaria por un console log con length pero de momento
    //prefiero dejarlo mas visual ya que son pocos items
    console.log(inserted);
}