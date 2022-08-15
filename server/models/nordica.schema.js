const mongoose = require('mongoose')

const nordicaSchema = mongoose.Schema({
    Titulo:{
        type:String,
        required:true
    },
    Dioses:{
        type:Array,
        required:false
    },
    Facciones:{
        type:Array,
        required:false
    },
    Personajes_importantes:{
        type:Array,
        required:false
    },
    Lugares:{
        type:Array,
        required:false
    },
    Historia:{
        type:String,
        required:true
    },
    Fuentes:{
        type:String,
        required:false
    }
})

const Nordica = mongoose.model('mitologias', nordicaSchema, 'nordica')

module.exports = Nordica