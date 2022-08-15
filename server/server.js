const express = require('express')

const app = express()

//DB conexion
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/mitologias")
        .then(()=>console.log("conectado a la bd"))
        .catch((error)=>console.error(error))


//modelo
const Nordica = require("./models/nordica.schema")

// CORS (Protección de llamado de los datos del sv)
const cors = require('cors')
app.use(cors())

//enrutador / routing
app.get('/api/mitologias/nordica',(req, res) => {
    Nordica
        .find()
        .then(allNordica => res.json(allNordica))
        .catch((error)=>console.error(error))
})

//rutas creadas para retornar datos segun id 
//de la coleccion "nordica"
app.get('/api/history/:nordica_id', (req, res) =>{
        const {nordica_id } = req.params
        Nordica
                .findById(nordica_id)
                .then(historia => res.json(historia))
})

app.listen(3001, () => console.log("server listener")) 