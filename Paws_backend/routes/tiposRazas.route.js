'use strict';

const express = require('express');
const router = express.Router();
const TipoRaza = require('../models/tiposRazas.model');

router.post('/registrar-razas', (req, res) => {
    let body = req.body;
    let nuevoRaza = new TipoRaza({
        nombre: body.nombre,
        especie: body.especie,

    });
    nuevoRaza.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar la raza.',
                error
            });
        } else {
            res.json({
                msj: 'La raza se registró correctamente'
            });
        }
    });
});

router.get('/listar-tipos-razas', (req, res) => {
    TipoRaza.find((error, tiposRazas) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los tipos de razas',
                error
            });
        } else {
            res.json({
                tiposRazas
            });
        }
    });

});

router.get('/buscar-tipo-razas', (req, res) => {
    TipoRaza.findOne({ _id: req.query._id }, (error, tiposRazas) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los tipos de razas',
                error
            });
        } else {
            res.json({
                tiposRazas
            });
        }
    });

});

router.delete('/eliminar-tipo-razas', (req, res) => {
    TipoRaza.deleteOne({ nombre: req.body.nombre }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el tipo de raza',
                error
            });
        } else {
            res.json({
                msj: 'La raza se eliminó correctamente'
            });
        }
    });

});

router.put('/modificar-tipo-razas', (req, res) => {
    TipoRaza.updateOne({ nombre: req.body.nombre }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El tipo de raza no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de raza se modificó correctamente'
            });
        }
    });
});

module.exports = router;