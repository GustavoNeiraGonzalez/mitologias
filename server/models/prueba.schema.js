const mongoose = require('mongoose')
const { Schema } = mongoose;

const pruebaSchema = new Schema({
    mito:{
        type:String,
        required:false
    },
    info:{
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
    },
})

var Prueba = mongoose.model('prueba', pruebaSchema, 'nordica')

module.exports = Prueba