const express = require('express')
const app = express()
var bodyParser = require('body-parser')

const port = process.env.PORT || 3001;//process.env.port es propio dejavascript

// CORS (Protección de llamado de los datos del sv)
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//modelo
const Nordica = require("./models/nordica.schema")


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

//post
app.post('/insert', async (req,res) =>{
        
        const Titulo = req.body.Titulo;
        const Dioses = req.body.Dioses;
        const Facciones = req.body.Facciones;
        const Personajes_importantes = req.body.Personajes_importantes;
        const Lugares = req.body.Lugares;
        const Historia = req.body.Historia      ;
        const Fuentes = req.body.Fuentes;

        const MitoNordic = new Nordica({Titulo:Titulo,Dioses:Dioses,Facciones:Facciones,Personajes_importantes:Personajes_importantes,Lugares:Lugares,Historia:Historia,Fuentes:Fuentes});
        try{
                await MitoNordic.save();
                res.send("inserted data")
            }catch(err){
                console.log(err)
            }
})




//DB conexion
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/mitologias")
        .then(()=>console.log("conectado a la bd"))
        .catch((error)=>console.error(error))


app.listen(3001, () => console.log("server listener")) 