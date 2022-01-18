const express = require("express");
const router = express.Router();

//ROUTER
router.get('/', (req, res) => { //solicitar al servidor para visualizar en el navegador
  console.log(__dirname) //vamos a sacar por consola el dirname
  res.render("index", {titulo: "Mi Titulo Dinamico Desde Index"}); // cuando hacedemos a nuestro servidor va dar esta respuesta
}); 

//SERVICIOS
router.get('/servicios', (req, res) => { //solicitar al servidor para visualizar en el navegador
  res.render("servicios", {Servicios: "Titulo Dinamigo Desde Servicios"}) // cuando hacedemos a nuestro servidor va dar esta respuesta
}); 

module.exports = router;