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

