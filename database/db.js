const mongoose =  require("mongoose")
require("dotenv").config()


const conexion = mongoose.connect(process.env.MONGODB_URI)
  .then( () => console.log("Conectado a la Base de Datos MongoDB"))
  .catch((error) => console.error(error))


module.exports = conexion
