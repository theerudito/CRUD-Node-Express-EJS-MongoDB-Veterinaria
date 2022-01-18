const express = require("express");
const router = express.Router();


  // LLAMAMOS MASCOTA
  const Mascota = require('../models/mascota')
   // LLAMAMOS MASCOTA


  // ESTOS SON ESTATICOS POR LUEGO VAMOS A TRAER DESDE LA BASE DE DATOS
  router.get('/', async (req, res) => { // async awake 

  try {

    const arrayMascotasDB = await Mascota.find(); // await va esperar
    console.log(arrayMascotasDB)

    res.render("mascotas", {
      arrayMascotas: arrayMascotasDB
    })

  } catch (error) {
    console.log(error)
  }
  }) 
  // ESTOS SON ESTATICOS POR LUEGO VAMOS A TRAER DESDE LA BASE DE DATOS


  // CREAR FORMULARIO
  router.get('/crear', (req, res) => {
    res.render('crear')
  })
  // CREAR FORMULARIO


  // ENVIAR FORMULARIO Y GUARDAR EN LA BASE DE DATOS
  router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        await Mascota.create(body)
        res.redirect('/mascotas')
    } catch (error) {
        console.log('error', error)
    }
})
  // ENVIAR FORMULARIO Y GUARDAR EN LA BASE DE DATOS



  // EDITAR UN SOLO DOCUMENTO
  router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
      const mascotaDB = await Mascota.findOne({_id: id}) 
      console.log(mascotaDB)
      res.render('detalle', {
        mascota: mascotaDB,
        error: false
      })

  } catch (error) {
      console.log("error")
      res.render('detalle', {
        error: true,
        mensaje: "No Se Encontro El ID Selecionado"
      })
  }
  })
  // EDITAR UN SOLO DOCUMENTO

     // ELIMINAR DOCUMENTO
    router.delete('/:id', async (req, res)=> {
        const id= req.params.id //leemos el ide con metodo params
        
        try {
          const mascotaDB = await Mascota.findByIdAndDelete({_id: id})

          if(mascotaDB) {
            res.json ({
              estado: true,
              mensaje: 'Eliminado!'
            })

          } else {
            res.json ({
              estado: false,
              mensaje: 'No Se Puedo Eliminar!'
            })

          }
          } catch (error) {
          console.log(error)
      }
    })
    // ELIMINAR DOCUMENTO



    // EDITAR DOCUMENTO
    router.put('/:id',  async (req, res)=> {
      const id = req.params.id //leemos el ide con metodo params desde la bdd
      const body = req.body
      try {
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(mascotaDB)

        res.json({
          estado: true,
          mensaje: "Editado"
        })



      } catch (error) {
        console.log(error)
        res.json({
          estado: false,
          mensaje: "Error a Editar"
        })
      }
    })
    // EDITAR DOCUMENTO



  


  module.exports = router;