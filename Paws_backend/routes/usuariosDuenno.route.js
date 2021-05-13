'use strict';

const express = require('express');
const router = express.Router();
const Duenno = require('../models/usuariosDuenno.model');
const mailTemplateDuenno = require('../templates/duenno-signup-mail');

router.post('/registrar-duenno', (req, res) => {
    let body = req.body;

    let imagen = '';
    if(body.imagen) {
        imagen = body.imagen;
    }
    let nuevoDuenno = new Duenno({
        imagen: imagen,
        nombre: body.nombre,
        apellido1: body.apellido1,
        apellido2: body.apellido2,
        tipoIdentificacion: body.tipoIdentificacion,
        identificacion: body.identificacion,
        nacimiento: body.nacimiento,
        telefono: body.telefono,
        correo: body.correo,
        contrasenna: null,
        sexo: body.sexo,
        tipo: 'duenno',
        estado: 'Pendiente contraseña'
    });
    nuevoDuenno.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el usuario dueño de mascota.',
                error
            });
        } else {
            mailTemplateDuenno.enviar_mail_duennos(req.body.nombre, req.body.correo);
            res.json({
                msj: 'El usuario se registró correctamente'
            });
        }
    });
});

router.get('/listar-duennos', (req, res) => {
    Duenno.find((error, duennos) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los usuarios',
                error
            });
        } else {
            res.json({
                duennos
            });
        }
    });
});

router.get('/buscar-duenno-id', (req, res) => {
    Duenno.findOne({ _id: req.query._id }, (error, duennos) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el usuario dueño de mascota',
                error
            });
        } else {
            res.json({
                duennos
            });
        }
    });
});

router.get('/buscar-duenno-correo', (req, res) => {
    Duenno.findOne({ correo: req.query.correo }, (error, duenno) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el usuario',
                error
            });
        } else {
            res.json({
                duenno
            });
        }
    });
});

router.delete('/eliminar-duenno', (req, res) => {
    Duenno.deleteOne({ correo: req.body.correo }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el usuario dueño de mascota',
                error
            });
        } else {
            res.json({
                msj: 'Usuario dueño de mascota eliminado correctamente',
            });
        }

    });
});

router.put('/modificar-duenno', (req, res) => {
    Duenno.updateOne({ correo: req.body.correo }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El usuario dueño de mascota no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'El usuario dueño de mascota se modificó correctamente'
            });
        }
    });
});

router.post('/validar-credenciales-duenno', (req, res) => {
    // Estados
    // Pendiente de autorización (proveedor)
    // Activo
    // Inactivo
    // Bloqueado
    // Pendiente de cambio de contraseña (cliente)

    Duenno.findOne({ correo: req.body.correo }, (error, usuarioDuenno) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al buscar el usuario',
                error
            });
        } else {
            if (usuarioDuenno) {
                if ((usuarioDuenno.contrasenna == req.body.contrasenna)) {
                    res.json({
                        msj: 'Credenciales válidas',
                        usuarioDuenno: {
                            imagen: usuarioDuenno.imagen,
                            nombre: usuarioDuenno.nombre,
                            apellido1: usuarioDuenno.apellido1,
                            apellido2: usuarioDuenno.apellido2,
                            tipoIdentificacion: usuarioDuenno.tipoIdentificacion,
                            identificacion: usuarioDuenno.identificacion,
                            nacimiento: usuarioDuenno.nacimiento,
                            telefono: usuarioDuenno.telefono,
                            correo: usuarioDuenno.correo,
                            sexo: usuarioDuenno.sexo,
                            tipo: usuarioDuenno.tipo,
                            estado: usuarioDuenno.estado
                        }
                    });
                } else {
                    res.json({
                        msj: 'Correo o contraseña incorrectos',
                        estado: 'No encontrado'
                    });
                }
            } else {
                res.json({
                    msj: 'Correo o contraseña incorrectos',
                    estado: 'No encontrado'
                });
            }

        }
    });
});

module.exports = router;