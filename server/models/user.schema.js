const mongoose = require('mongoose')
const { Schema } = mongoose;
const userSchema = new Schema({
    name:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:false
    }
})

const User = mongoose.model('user', userSchema, 'user')

module.exports = User