'use strict';

const express = require('express');
const router = express.Router();
const Administrador = require('../models/usuariosAdministrador.model');

router.post('/registrar-administrador', (req, res) => {
    let body = req.body;
    let nuevoAdministrador = new Administrador({
        nombre: body.nombre,
        apellido1: body.apellido1,
        apellido2: body.apellido2,
        identificacion: body.identificacion,
        nacimiento: body.nacimiento,
        telefono: body.telefono,
        correo: body.correo,
        contrasenna: body.contrasenna,
        tipo: 'administrador',
        estado: 'activo'
    });
    nuevoAdministrador.save((error) => {
        if(error) {
            res.json({
                msj: 'Ocurrió un error al registrar el usuario administrador.',
                error
            });
        }else {
            res.json({
                msj: 'El usuario se registró correctamente'
            });
        }
    });
});

router.get('/buscar-admin-id', (req, res) => {
    Administrador.findOne({ _id: req.query._id }, (error, administrador) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el usuario',
                error
            });
        } else {
            res.json({
                administrador
            });
        }
    });
});


router.get('/buscar-admin-correo', (req, res) => {
    Administrador.findOne({ correo: req.query.correo }, (error, administrador) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el usuario',
                error
            });
        } else {
            res.json({
                administrador
            });
        }
    });
});

router.delete('/eliminar-usuario-admin', (req, res) => {
    Administrador.deleteOne({ correo: req.body.correo }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el usuario',
                error
            });
        } else {
            res.json({
                msj: 'Usuario eliminado correctamente'
            });
        }

    });
});

router.put('/modificar-usuario-admin', (req, res) => {
    Administrador.updateOne({ correo: req.body.correo }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El usuario no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'El usuario se  modificó correctamente'
            });
        }
    });

});


router.post('/validar-credenciales-admin', (req, res) => {
    // Estados
    // Pendiente de autorización (proveedor)
    // Activo
    // Inactivo
    // Bloqueado
    // Pendiente de cambio de contraseña (cliente)

    Administrador.findOne({correo: req.body.correo}, (error, usuarioAdministrador) => {
        if(error) {
            res.json({
                msj: 'Ocurrió un error al buscar el usuario',
                error
            });
        }else {
            if(usuarioAdministrador){
                if((usuarioAdministrador.contrasenna == req.body.contrasenna)){
                    res.json({
                        msj: 'Credenciales válidas',
                        usuarioAdministrador: {
                            nombre: usuarioAdministrador.nombre,
                            apellido1: usuarioAdministrador.apellido1,
                            apellido2: usuarioAdministrador.apellido2,
                            identificacion: usuarioAdministrador.identificacion,
                            nacimiento: usuarioAdministrador.nacimiento,
                            telefono: usuarioAdministrador.telefono,
                            correo: usuarioAdministrador.correo,
                            tipo: usuarioAdministrador.tipo,
                            estado: usuarioAdministrador.estado
                        }                        
                    });

                } else {
                    res.json({
                        msj: 'Correo o contraseña incorrectos',
                        estado: 'No encontrado'
                    });
                }
            }else {
                res.json({
                    msj: 'Correo o contraseña incorrectos',
                    estado: 'No encontrado'
                });
            }

        }
    });
});


module.exports = router;