Instalando node

terminal
instalar el node version manager para gestionar las versiones
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

instalar node
nvm install node

node instalado
node -v

creamos la carpeta del proyecto nodeapp
Instalando express

npm install express

crear app express
npx express-generator nodepop--ejs

EJS es un motor de vistas

instalar npm
npm install

para empezar
DEBUG=nodepop:* npm start

en el localhost o 127.0.0.1:3000 en este caso porque es el puerto que nos asigna por defecto


en el script de package.json en scripts añadimos la linea
"dev": "nodemon ./bin/www"

para que al rejecutar el comando
npm run dev
se ejecute el script 

pero no demon no esta hay que instalarlo
npm i nodemon --save-dev
si ejecutamos entonces ya el comando npm run dev ya se ejecuta nodemon

Metemos en "dev" : "DEBUG=nodepop:* nodemon ./bin/www"

para que nos funcione la variable DEBUG en todas las plataformas

instalamos la biblioteca
npm install cross-env
añadimos cross-env a la ruta de dev y se ejecute en modo dev
"dev" : "cross-env DEBUG=nodepop:* nodemon ./bin/www"

podemos poner una variable de entorno en dev de momento no lo veo necesario
NODEPOP_ENV=development PORT=XXXX

para corregir vulnerabilidades o usas otra libreria o haces miras la version mas reciente
con npm install ejs@latest en el caso de ejs y miras con audit

hemos cambiado en app las var de user e index router directamente en app use


todas las peticiones por browser se hace por el metodo get

hemos cambiado un poco la view para que salga bienvenido a Nodepop

cambiar la template a ejs
npm install ejs --save
y cambiamos los archivos jade a ejs y los formateamos

¿Instalar un validador?
npm install express-validator
en index,j de routes
const { query, validationResult} = require ('express-validator');
clase 4 1:09


ya tengo mongo db instalado
sudo systemctl start mongod
systemctl status mongod

lo inicio y compruebo su status

mongosh ya lo tengo instalado
mongosh

en mongosh
use nodepop 
.exit para salir

mirar mongo db queries o en las diapositivas interesantes
tip con .find $gt y $lg greater than lesser than podemos filtrar mayor y menor que o gte lge
findAndModify query update

conectar mongoose
npm install mongoose --save

creo un archivo en la carpeta .exit/lib llamado connectMongoose.js
he puesto la base de datos por defecto nodepop y configuro y modulo las conexciones


pongo el require en app.js
y al ejecutar en npm run dev ya eme conecta bien a nodepop

creamos un carpeta models un archivo models.js
y creamos un modelo definimos un esquema etc

modificamos en el error handler de la app para que responda a los errores
de la api
if(req.originalUrl.startsWith('/api/')){
    res.json({error:err.message});
    return;
  }

a la hora de comprobar metodos en el browser solo se pueden hacer 
peticiones de tipo get lo demas lo tenemos que comprobar con postman

voy a crear un par de metodos por si tengo que meter datos a mano 

creo un metodo post para meter anuncios a mano y para listarlos

me salio un error y era por una mala sintaxis en una exportacion del modulo

hemos ya hecho un listado de filtros algunos ya funcionan como e de nombre
y la paginacion lo hemos metido como metodo estatico de Anuncio

Creado script de ejecucion script_inicio.js
se conecta a la base de datos borra todos inserta una array de objetos y luego importante
cierra la conexion con la base de datos
