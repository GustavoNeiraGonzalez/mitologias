const express = require('express')

const app = express()

//DB conexion
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/mitologias")
        .then(()=>console.log("conectado a la bd"))
        .catch((error)=>console.error(error))


//modelo
const Nordica = require("./models/mitologias.model")


//enrutador / routing
app.get('/api/mitologias',(req, res) => {
    Nordica
        .find()
        .then(allNordica => res.json(allNordica))
        .catch((error)=>console.error(error))
})

app.get('/api/history/62ef908ddc337c0066b31823', (req, res) =>{
        Nordica
                .findById('62ef908ddc337c0066b31823')
                .then(historia => res.json(historia))
})

app.listen(3001, () => console.log("server listener")) 