const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');




module.exports = function(){

    //Add users with POST method
    router.post('/usuarios', usuarioController.nuevoUsuario);

    //Get all users with GET method

    router.get('/usuarios', usuarioController.mostrarUsuarios);

    router.get('/usuarios/:id', usuarioController.mostrarUsuario);

    
    return router;

    



}


