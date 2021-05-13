'use strict';

const express = require('express');
const router = express.Router();
const Proveedor = require('../models/usuariosProveedor.model');
const mailTemplateAceptarProveedor = require('../templates/aceptar-proveedor-mail');
const mailTemplateRechazarProveedor = require('../templates/rechazar-proveedor-mail');

router.post('/registrar-proveedor', (req, res) => {
    let body = req.body;
    let imagen = '';
    if(body.imagen) {
        imagen = body.imagen;
    }
    
    let nuevoProveedor = new Proveedor({
        nombre: body.nombre,
        apellido1: body.apellido1,
        apellido2: body.apellido2,
        identificacion: body.identificacion,
        nacimiento: body.nacimiento,
        telefono: body.telefono,
        correo: body.correo,
        contrasenna: null,
        provincia: body.provincia,
        canton: body.canton,
        distrito: body.distrito,
        imagen: imagen,
        //Informacion de empresa
        empresa: body.empresa,
        repNombre: body.repNombre,
        repApellido1: body.repApellido1,
        repApellido2: body.repApellido2,
        repNacimiento: body.repNacimiento,
        cedJuridica: body.cedJuridica,
        telEmpresa: body.telEmpresa,
        repCorreo: body.repCorreo,
        tipo: 'proveedor',
        estado: 'Pendiente autorización'
    });
    nuevoProveedor.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el usuario proveedor.',
                error
            });
        } else {
            res.json({
                msj: 'El usuario se registró correctamente'
            });
        }
    });
});


router.put('/agregar-servicios', (req, res) => {
    let servicios = JSON.parse(req.body.listaServicios);
    let errorAgregar = false;

    servicios.forEach(servicio => {
        Proveedor.updateOne({ correo: req.body.correo }, {
            $push: {
                'servicioProveedor': servicio
            }
        }, (error) => {
            if (error) {
                errorAgregar = true;
            }
        });
    });

    if (errorAgregar) {
        res.json({
            msj: 'Ocurrió un error al agregar los servicios',
            error
        });
    } else {
        res.json({
            msj: 'Servicios agregados correctamente'
        });
    }

});



router.get('/listar-proveedores', (req, res) => {
    Proveedor.find((error, proveedores) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los usuarios proveedores',
                error
            });
        } else {
            res.json({
                proveedores
            });
        }
    });
});

router.get('/buscar-proveedor-id', (req, res) => {
    Proveedor.findOne({ _id: req.query._id }, (error, proveedores) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el usuario proveedor',
                error
            });
        } else {
            res.json({
                proveedores
            });
        }
    });
});


router.delete('/eliminar-proveedor', (req, res) => {
    Proveedor.deleteOne({ correo: req.body.correo }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el usuario proveedor',
                error
            });
        } else {
            res.json({
                msj: 'Usuario eliminado correctamente',
            });
        }

    });
});

router.put('/modificar-proveedor', (req, res) => {
    Proveedor.updateOne({ correo: req.body.correo }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El usuario proveedor no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'El usuario proveedor se modificó correctamente'
            });
        }
    });
});


router.post('/validar-credenciales-proveedor', (req, res) => {
    // Estados:
    // Pendiente de autorización (proveedor)
    // Activo
    // Inactivo
    // Bloqueado
    // Pendiente de cambio de contraseña (cliente)

    Proveedor.findOne({ correo: req.body.correo }, (error, usuarioProveedor) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al buscar el usuario',
                error
            });
        } else {
            if (usuarioProveedor) {
                if ((usuarioProveedor.contrasenna == req.body.contrasenna)) {
                    res.json({
                        msj: 'Credenciales válidas',
                        usuarioProveedor: {
                            imagen: usuarioProveedor.imagen,
                            nombre: usuarioProveedor.nombre,
                            apellido1: usuarioProveedor.apellido1,
                            apellido2: usuarioProveedor.apellido2,
                            identificacion: usuarioProveedor.identificacion,
                            nacimiento: usuarioProveedor.nacimiento,
                            telefono: usuarioProveedor.telefono,
                            correo: usuarioProveedor.correo,
                            provincia: usuarioProveedor.provincia,
                            canton: usuarioProveedor.canton,
                            distrito: usuarioProveedor.distrito,
                            empresa: usuarioProveedor.empresa,
                            repNombre: usuarioProveedor.repNombre,
                            repApellido1: usuarioProveedor.repApellido1,
                            repApellido2: usuarioProveedor.repApellido2,
                            repNacimiento: usuarioProveedor.repNacimiento,
                            cedJuridica: usuarioProveedor.cedJuridica,
                            telEmpresa: usuarioProveedor.telEmpresa,
                            repCorreo: usuarioProveedor.repCorreo,
                            estado: usuarioProveedor.estado
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



router.put('/aceptar-proveedor', (req, res) => {
    Proveedor.updateOne({ correo: req.body.correo }, {
        $set: req.body,
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El usuario proveedor no pudo ser aceptado',
                error
            });
        } else {
            req.body.estado = 'Activo';
            mailTemplateAceptarProveedor.enviar_mail_aceptar_proveedor(req.body.nombre, req.body.correo);
            res.json({
                msj: 'El usuario proveedor ha sido aceptado correctamente'
            });
        }
    });
});

router.put('/rechazar-proveedor', (req, res) => {
    Proveedor.updateOne({ correo: req.body.correo }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El usuario proveedor no pudo ser rechazado',
                error
            });
        } else {
            req.body.estado = 'Inactivo';
            mailTemplateRechazarProveedor.enviar_mail_rechazar_proveedor(req.body.nombre, req.body.correo);
            res.json({
                msj: 'El usuario proveedor ha sido rechazado correctamente'
            });
        }
    });
});

module.exports = router;