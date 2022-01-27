const express = require('express'); // express
const conexion = require("./database/db")
const bodyParser = require('body-parser'); // body parser
const app = express();


 
// PARSE BODY
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
  
  

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




const port = process.env.PORT || 2000
app.listen(port, () => console.log("SERVIDOR A SU SERVICIO EN EL PUERTO", port))



