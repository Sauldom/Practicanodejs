# Practicanodejs

## Development


# SCRIPT para iniciar la base de datos con datos
* BORRA TODOS LOS DATOS ANTIGUOS

```js
    npm run script_inicio.js
```
### Modo dev
        
    ```js
        npm run dev
    ```

## API



# listado
    GET /api/anuncios
# Introducir datos
    POST /api/anuncios (body)

# filtros para peticiones estan creadas en la ruta de la api
# luego me di cuenta y tambien las meti en la vista de frontend en index.ejs pero no se
# si eso es los correcto o se hace cambiando la ruta desde la carpeta de la api/anuncios
# que en esa ruta devuelve un json

# tag
http://127.0.0.1:3000/api/anuncios?tag=lifestyle
http://localhost:3000/?tag=juguete

# nombre
http://127.0.0.1:3000/api/anuncios?nombre=Patines
http://localhost:3000/?nombre=Patines        

# venta
http://127.0.0.1:3000/api/anuncios?venta=true o false si no esta en venta
http://localhost:3000/?venta=false
       
# paginacion
http://127.0.0.1:3000/api/anuncios?skip=2&limit=2
http://localhost:3000/?skip=2&limit=2
        
# ordenacion por precio
http://127.0.0.1:3000/api/anuncios?sort=precio   o -precio para ascendente
http://localhost:3000/?sort=precio

# precios max min
http://127.0.0.1:3000/api/anuncios?sort=precio&precio=10-100
http://localhost:3000/?sort=precio&precio=10-100

# listar tags
http://127.0.0.1:3000/api/anuncios/listar-tags
http://localhost:3000/listar-tags


# Introducir datos
la introduccion la hemos dejado en la ruta del api tambien
//POST /api/anuncios (body)

# borrar datos
la hemos dejado en el api de momento
//DELETE  /api/anuncios/<_id>
http://127.0.0.1:3000/api/anuncios/65e0b43484b7e21c581e29d3   la id del anuncio

# Validacion de datos

Hacemos una validacion de 3 datos para probar tanto en los get query string como en
el post al crear un nuevo anuncio en el body para probar parace que funcionan bien

tambien hemos validado el POST de creacion de anuncios sobre todo al entrada de los tags 
porque salen en un formato que no me gusta asi que haciendo un trim ,distinct y split  y 
validando la entrada de datos parece que funciona adecuadamente, una vez probado parece que luego
a la hora de listar los tags ya salen correctamente

