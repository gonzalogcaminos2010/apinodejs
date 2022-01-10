const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    usuario:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        trim: true

    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    wallet:{
        type: String,
        trim: true
    },
    tokens:{
        type:Number,
        trim: true
    }

    


});
module.exports = mongoose.model('Usuarios', usuarioSchema);