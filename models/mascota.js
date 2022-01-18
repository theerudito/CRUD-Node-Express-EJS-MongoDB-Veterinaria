
// CADA VEZ QUE CREAMOS UNA NUEVA COLECION UTILIZAMOS ESTE ESQUEMA
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


// con esto se va a replicar
const mascotaSchema = new Schema ({
  nombre: String, 
  descripcion: String
});


// CREAR MODELO 
const Mascota = mongoose.model('Mascota', mascotaSchema)

module.exports = Mascota;

