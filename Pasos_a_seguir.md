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
