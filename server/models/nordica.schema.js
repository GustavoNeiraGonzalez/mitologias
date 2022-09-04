const mongoose = require('mongoose')
const { Schema } = mongoose;

const nordicaSchema = new Schema({
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

var Nordica = mongoose.model('nordica', nordicaSchema, 'nordica')

module.exports = Nordica