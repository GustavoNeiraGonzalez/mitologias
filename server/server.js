const express = require('express')
const app = express()
require('dotenv').config()
var bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const port = process.env.PORT || 3001;//process.env.port es propio dejavascript
const controllers = require("./controllers");
const verifyToken = require('./middlewares/verifyToken')
const mongoose = require('mongoose')
var ObjectId = require('mongoose').Types.ObjectId;

// CORS (Protección de llamado de los datos del sv)
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//modelo
const User = require("./models/user.schema")
const Prueba = require("./models/prueba.schema")
//enrutador / routing
app.get('/api/mitologias/:mito',(req, res) => {
        const {mito} = req.params
    Prueba
        .find({mito:mito})
        .then(allMitos => res.json(allMitos))
        .catch((error)=>console.error(error))
})
app.get('/api/mitos',(req, res) => {
    Prueba
        .find({})
        .then(allMitos => res.json(allMitos))
        .catch((error)=>console.error(error))
})
app.get('/api/difMitos',(req, res) => {
        Prueba
            .find()
            .distinct("mito")
            .then(total => res.json(total))
            .catch((error)=>console.error(error))
    })
//rutas creadas para retornar datos segun id 
//de la coleccion "nordica"
app.get('/api/history/:nordica_id', (req, res) =>{
        var nordica_id = req.params.nordica_id
        Prueba
                .findById(nordica_id.trim())//ERROR SOLUCIONADO POR ALGUN MOTIVO SI NO USABA TRIM TIRABA UN ERROR QUE NO PODIA SOLUCIONAR
                .then(historia => res.json(historia))
                .catch((error)=>console.error(error))


})


//post
//verifytoken verifica que tenga un token para asegurar que el usuario este logeado
//ruta mas segura :D
app.post('/insert',verifyToken, async (req,res) =>{
        const Mito = req.body.Mito;
        const Titulo = req.body.Titulo;
        const Dioses = req.body.Dioses;
        const Facciones = req.body.Facciones;
        const Personajes_importantes = req.body.Personajes_importantes;
        const Lugares = req.body.Lugares;
        const Historia = req.body.Historia      ;
        const Fuentes = req.body.Fuentes;

        const MitoNordic = new Prueba({info:{Titulo:Titulo,Dioses:Dioses,Facciones:Facciones,Personajes_importantes:Personajes_importantes,Lugares:Lugares,Historia:Historia,Fuentes:Fuentes}
        ,mito:Mito});
        try{
                await MitoNordic.save();
                res.send("inserted data")
            }catch(err){
                console.log(err)
            }
})

//UPDATE
//verifytoken verifica que tenga un token para asegurar que el usuario este logeado
//ruta mas segura :D
app.put('/update',verifyToken, async (req,res) =>{
        const id = req.body.id;
        const Titulo = req.body.Titulo;
        const Dioses = req.body.Dioses;
        const Facciones = req.body.Facciones;
        const Personajes_importantes = req.body.Personajes_importantes;
        const Lugares = req.body.Lugares;
        const Historia = req.body.Historia;
        const Fuentes = req.body.Fuentes;
        try{
                await Prueba.findById(id)
                .then(updateMito=>{
                                console.log(updateMito)
                                updateMito.info.Titulo =Titulo;
                                updateMito.info.Dioses =Dioses;
                                updateMito.info.Facciones =Facciones;
                                updateMito.info.Personajes_importantes =Personajes_importantes;
                                updateMito.info.Lugares =Lugares;
                                updateMito.info.Historia =Historia;
                                updateMito.info.Fuentes =Fuentes;
                                updateMito.save();
                                res.send("update")
                })
            }catch(err){
                console.error(err)
            }

})
//DELETE----
//verifytoken verifica que tenga un token para asegurar que el usuario este logeado
//ruta mas segura :D
app.delete("/delete/:id",verifyToken, async(req,res)=>{
        const id = req.params.id;
        await Prueba.findByIdAndDelete(id)
        .exec();

})

app.post("/register" ,controllers.register);
app.get('/user', verifyToken,controllers.getUserById);
app.post("/login", controllers.login);
//DB conexion
mongoose.connect("mongodb://localhost:27017/mitologias")
        .then(()=>console.log("conectado a la bd"))
        .catch((error)=>console.error(error))


app.listen(3001, () => console.log("server listener")) 