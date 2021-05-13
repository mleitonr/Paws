'use strict';

const express = require('express');
const router = express.Router();
const VacunasAdmin = require('../models/vacunasAdmin.model');

router.post('/registrar-vacunas-admin', (req, res) => {
    let body = req.body;
    let nuevoVacunasAdmin = new VacunasAdmin({
        nombre: body.nombre,
        especie: body.especie,
    });
    nuevoVacunasAdmin.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el tipo de vacuna',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de vacuna se registró correctamente'
            });
        }
    });
});

router.get('/listar-vacunas-admin', (req, res) => {
    VacunasAdmin.find((error, vacunasAdmin) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los tipos de vacunas',
                error
            });
        } else {
            res.json({
                vacunasAdmin
            });
        }
    });
});

router.get('/buscar-vacunas-admin-id', (req, res) => {
    VacunasAdmin.findOne({ _id: req.query._id }, (error, vacunasAdmin) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el tipo de vacuna',
                error
            });
        } else {
            res.json({
                vacunasAdmin
            });
        }
    });
});

router.delete('/eliminar-vacunas-admin', (req, res) => {
    VacunasAdmin.deleteOne({ nombre: req.body.nombre }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el tipo de vacuna',
                error
            });
        } else {
            res.json({
                msj: 'Tipo de vacuna eliminada correctamente'
            });
        }
    });
});

router.put('/modificar-vacunas-admin', (req, res) => {
    VacunasAdmin.updateOne({ nombre: req.body.nombre }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El tipo de vacuna no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de vacuna se modificó correctamente'
            });
        }
    });
});


module.exports = router;