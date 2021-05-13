'use strict';

const express = require('express');
const router = express.Router();
const TipoServicio = require('../models/tipoServicio.model');

router.post('/registrar-tipo-servicio', (req, res) => {
    let body = req.body;
    let nuevoTipoServicio = new TipoServicio({
        nombre: body.nombre,
        estado: 'Activo'
    });
    nuevoTipoServicio.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el tipo de servicio',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de servicio se registró correctamente'
            });
        }
    });
});

router.get('/listar-tipo-servicio', (req, res) => {
    TipoServicio.find((error, tiposServicios) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los tipos de servicios',
                error
            });
        } else {
            res.json({
                tiposServicios
            });
        }
    });
});

router.get('/buscar-tipo-servicio-id', (req, res) => {
    TipoServicio.findOne({ _id: req.query._id }, (error, tiposServicios) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el servicio',
                error
            });
        } else {
            res.json({
                tiposServicios
            });
        }
    });
});

router.delete('/eliminar-tipo-servicio', (req, res) => {
    TipoServicio.deleteOne({ nombre: req.body.nombre }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el tipo de servicio',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de servicio se eliminó correctamente'
            });
        }
    });
});

router.put('/modificar-tipo-servicio', (req, res) => {
    TipoServicio.updateOne({ nombre: req.body.nombre }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El tipo de servicio no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de servicio se modificó correctamente'
            });
        }
    });
});


module.exports = router;