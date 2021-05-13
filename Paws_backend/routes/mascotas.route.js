'use strict';

const express = require('express');
const router = express.Router();
const Mascota = require('../models/mascotas.model');

router.post('/registrar-mascota', (req, res) => {
    let body = req.body;

    let imagen = '';
    if(body.imagen) {
        imagen = body.imagen;
    }
    let nuevaMascota = new Mascota({
        imagen: imagen,
        nombre: body.nombre,
        tipo: body.tipo,
        caracteristicas: body.caracteristicas,
        raza: body.raza,
        padecimientos: body.padecimientos,
        vacunas: body.vacunas,
        edad: body.edad,
        telefono: body.telefono,
        correoDuenno: body.correoDuenno,
        estado: 'Activo'
    });
    nuevaMascota.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar la mascota',
                error
            });
        } else {
            res.json({
                msj: 'La mascota se registró correctamente'
            });
        }
    });
});

router.post('/listar-mascota', (req, res) => {
    Mascota.find({correoDuenno: req.body.correoDuenno}, (error, mascotas) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar las mascotas',
                error
            });
        } else {
            res.json({
                mascotas
            });
        }
    });
});

router.get('/listar-mascotas-general', (req, res) => {
    Mascota.find((error, mascotas) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar las mascotas',
                error
            });
        } else {
            res.json({
                mascotas
            });
        }
    });
});

router.get('/buscar-mascota-id', (req, res) => {
    Mascota.findOne({ _id: req.query._id }, (error, mascotas) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar las mascotas',
                error
            });
        } else {
            res.json({
                mascotas
            });
        }
    });
});

router.delete('/eliminar-mascota', (req, res) => {
    Mascota.deleteOne({ nombre: req.body.nombre }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar la mascota',
                error
            });
        } else {
            res.json({
                msj: 'La mascota ha sido eliminado correctamente'
            });
        }
    });
});

router.put('/modificar-mascota', (req, res) => {
    Mascota.updateOne({ nombre: req.body.nombre }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'La mascota no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'La mascota se modificó correctamente'
            });
        }
    });
});


module.exports = router;