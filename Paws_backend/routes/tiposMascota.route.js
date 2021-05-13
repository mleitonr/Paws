'use strict';

const express = require('express');
const router = express.Router();
const TipoMascota = require('../models/tiposMascota.model');

router.post('/registrar-tipos-mascota', (req, res) => {
    let body = req.body;
    let nuevoTipoMascota = new TipoMascota({
        nombre: body.nombre,
        estado: 'Activo'
    });
    nuevoTipoMascota.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el tipo de mascota',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de mascota se registró correctamente'
            });
        }
    });
});

router.get('/listar-tipos-mascota', (req, res) => {
    TipoMascota.find((error, tiposMascotas) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los tipos de mascota',
                error
            });
        } else {
            res.json({
                tiposMascotas
            });
        }
    });
});

router.get('/buscar-tipo-mascota-id', (req, res) => {
    TipoMascota.findOne({ _id: req.query._id }, (error, tiposMascotas) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el tipo de mascota',
                error
            });
        } else {
            res.json({
                tiposMascotas
            });
        }
    });
});

router.delete('/eliminar-tipo-mascota', (req, res) => {
    TipoMascota.deleteOne({nombre: req.body.nombre}, (error) => {
        if(error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el tipo de mascota',
                error
            });
        } else {
            res.json({
                msj: 'Tipo de mascota eliminada correctamente'
            });
        }
    });
});

router.put('/modificar-tipos-mascota', (req, res) => {
    TipoMascota.updateOne({nombre: req.body.nombre}, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El tipo de mascota no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de mascota se modificó correctamente'
            });
        }
    });
});


module.exports = router;