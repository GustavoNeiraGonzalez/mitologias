const mongoose = require('mongoose')

const nordicaSchema = mongoose.Schema({
    Titulo:{
        type:String,
        required:false
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
        required:false
    },
    Fuentes:{
        type:String,
        required:false
    }
})

const Nordica = mongoose.model('mitologias', nordicaSchema, 'nordica')

module.exports = Nordica