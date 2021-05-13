'use strict';

const express = require('express');
const router = express.Router();
const TarjetaDatos = require('../models/tarjetaDuenno.model');

router.post('/registrar-tarjeta', (req, res) => {
    let body = req.body;
    let nuevaTarjeta = new TarjetaDatos({
        titular: body.titular,
        numTarjeta: body.numTarjeta,
        fechaExpiracion: body.fechaExpiracion,
        codigoTarjeta: body.codigoTarjeta,
        correoDuenno: body.correoDuenno
    });
    nuevaTarjeta.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar la tarjeta',
                error
            });
        } else {
            res.json({
                msj: 'La tarjeta se registró correctamente'
            });
        }
    });
});

router.post('/listar-tarjeta', (req, res) => {
    TarjetaDatos.find({correoDuenno: req.body.correoDuenno}, (error, tarjetasDatos) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar las tarjetas',
                error
            });
        } else {
            res.json({
                tarjetasDatos
            });
        }
    });
});

router.delete('/eliminar-tarjeta', (req, res) => {
    TarjetaDatos.deleteOne({ titular: req.body.titular }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar la tarjeta',
                error
            });
        } else {
            res.json({
                msj: 'La tarjeta se eliminó correctamente'
            });
        }
    });
});

router.put('/modificar-tarjeta', (req, res) => {
    TarjetaDatos.updateOne({ titular: req.body.titular }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'La tarjeta no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'La tarjeta se modificó correctamente'
            });
        }
    });
});


module.exports = router;