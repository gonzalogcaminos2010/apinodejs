const Usuarios = require('../models/Usuarios');

//Agregar cliente

exports.nuevoUsuario = async(req, res) => {
    const usuario  = new Usuarios(req.body);
    try {
        await usuario.save();
        //res.status(200).send({Usuario});
        res.json({
            message: 'Usuario guardado'
        });
    
    } catch (error) {

        console.log(error);
        next();

    }
}

exports.mostrarUsuarios = async(req, res) => {
    
    try{
        
        const usuarios = await Usuarios.find({});
        res.json(usuarios);

    }catch(error){
        console.log(error);
        next();

    }
}


exports.mostrarUsuario = async(req, res) => {
    
        const usuario = await Usuarios.findById(req.params.id);
        if(!usuario){
            return res.status(404).send({message: 'Usuario no encontrado'});
        }
        res.json(usuario);



}
