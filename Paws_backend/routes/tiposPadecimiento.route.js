'use strict';

const express = require('express');
const router = express.Router();
const TipoPadecimiento = require('../models/tiposPadecimientos.model');

router.post('/registrar-tipos-padecimientos', (req, res) => {
    let body = req.body;
    let nuevoTipoPadecimiento = new TipoPadecimiento({
        nombre: body.nombre,
        especie: body.especie
    });
    nuevoTipoPadecimiento.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el tipo de padecimiento',
                error
            });
        } else {
            res.json({
                msj: 'El padecimiento se registró correctamente'
            });
        }
    });
});

router.get('/listar-tipos-padecimientos', (req, res) => {
    TipoPadecimiento.find((error, tiposPadecimientos) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los tipos de padecimientos',
                error
            });
        } else {
            res.json({
                tiposPadecimientos
            });
        }
    });
});

router.get('/buscar-tipo-padecimiento-id', (req, res) => {
    TipoPadecimiento.findOne({ _id: req.query._id }, (error, tiposPadecimientos) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el padecimiento',
                error
            });
        } else {
            res.json({
                tiposPadecimientos
            });
        }
    });
});

router.delete('/eliminar-tipo-padecimiento', (req, res) => {
    TipoPadecimiento.deleteOne({ nombre: req.body.nombre }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el tipo de padecimiento',
                error
            });
        } else {
            res.json({
                msj: 'El padecimiento se eliminó correctamente'
            });
        }
    });
});

router.put('/modificar-tipo-padecimiento', (req, res) => {
    TipoPadecimiento.updateOne({ nombre: req.body.nombre }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El tipo de padecimiento no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de padecimiento se modificó correctamente'
            });
        }
    });
});


module.exports = router;