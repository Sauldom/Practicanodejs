var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./lib/connectMongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Middlewares

app.locals.title='Nodepop';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//rutas del api
app.use('/api/anuncios', require('./routes/api/anuncios'));

//rutas del Website
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  //errores de validacion
  if(err.array){
    const errInfo = err.array({});
    console.log(errInfo);
    errInfo.forEach(element => {
      err.message = `datos no validos - valor introducido ${element.value}  ${element.msg}`;
    });
    
  }

  //modificar para que responda el fallo de API en formato JSON
  res.status(err.status || 500);
  if(req.originalUrl.startsWith('/api/')){
    res.json({error:err.message});
    return;
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
 
  res.render('error');
});

module.exports = app;
