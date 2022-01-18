const express = require('express'); // express

const bodyParser = require('body-parser'); // body parser
const app = express();


 //VARIABLES DE ENTORNO
require('dotenv').config()

// PARSE BODY
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())




const port = process.env.PORT || 3000; // el puerto de manera local el debes saber q el hosting proporciona el puerto

// CONEXION DE BASES DE DATOS
const mongoose = require('mongoose');

// DIRECCION DE BASE DE DATOS
const uri =`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@jorge.mxijl.mongodb.net/${process.env.BASEDEDATOS}?retryWrites=true&w=majority`;


// mongodb//localhost:27017/test' coneccion de manera local usamos asi
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Conectad a la Base de Datos de Mongo')) 
  .catch(e => console.log('error de conexión', e))
  
  

// MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/vistas');


//INDEX
// MUDELWORK - para acceder a archivos estaticos
app.use(express.static(__dirname + "/public")); //dirname accede a archivos q estan en nuestra maquina o en el servidor 

//  RUTAS  WEB
app.use('/', require('./router/RutasWeb'));

//  RUTAS MASCOTAS
app.use('/mascotas',  require('./router/Mascotas')); //tiene apellido /mascotas


//PAGINA  404
app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Titulo del Sitio"
  })
});

// PUERTO EN ESCUCHA
app.listen(port, () =>{
  console.log("Servidor a su Servicio", port)
})




