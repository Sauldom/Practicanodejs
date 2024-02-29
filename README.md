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

hemos creado un par de metodos para probar un listado general y un introducir datos

# listado
    GET /api/anuncios
# Introducir datos
    POST /api/anuncios (body)

# filtros para peticiones
tag
http://127.0.0.1:3000/api/anuncios?tag=lifestyle

nombre
http://127.0.0.1:3000/api/anuncios?nombre=Patines
        
venta
http://127.0.0.1:3000/api/anuncios?venta=true o false si no esta en venta
       
# paginacion
http://127.0.0.1:3000/api/anuncios?skip=2&limit=2
        
# ordenacion por precio
http://127.0.0.1:3000/api/anuncios?sort=precio   o -precio para ascendente

# precios max min
http://127.0.0.1:3000/api/anuncios?sort=precio&precio=10-100

# listar tags
http://127.0.0.1:3000/api/anuncios/listar-tags

# Introducir datos
//POST /api/anuncios (body)





