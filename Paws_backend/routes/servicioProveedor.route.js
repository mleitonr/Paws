'use strict';

const express = require('express');
const router = express.Router();
const ServicioProveedor = require('../models/servicioProveedor.model');

router.post('/registrar-servicio-proveedor', (req, res) => {
    let body = req.body;

    let imagen = '';
    if(body.imagen) {
        imagen = body.imagen;
    }
    let nuevoServicioProveedor = new ServicioProveedor({
        imagen: imagen,
        nombre: body.nombre,
        tipo: body.tipo,
        desdeHorario: body.desdeHorario,
        hastaHorario: body.hastaHorario,
        precio: body.precio,
        descripcion: body.descripcion,
        correoProveedor: body.correoProveedor,
        estado: 'Activo'
    });
    nuevoServicioProveedor.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el servicio',
                error
            });
        } else {
            res.json({
                msj: 'El servicio se registró correctamente'
            });
        }
    });
});

router.post('/listar-servicio-proveedor', (req, res) => {
    ServicioProveedor.find({correoProveedor: req.body.correoProveedor}, (error, servicioProveedor) => {
        console.log(req.body.correoProveedor);
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el historial de servicio',
                error
            });
        } else {
            res.json({
                servicioProveedor
            });
        }
    });
});

router.get('/listar-servicios-proveedores-todos', (req, res) => {
    ServicioProveedor.find((error, servicioProveedor) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los servicios',
                error
            });
        } else {
            res.json({
                servicioProveedor
            });
        }
    });
});

router.get('/buscar-servicio-proveedor-id', (req, res) => {
    ServicioProveedor.findOne({ _id: req.query._id }, (error, servicioProveedor) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el historial de servicios',
                error
            });
        } else {
            res.json({
                servicioProveedor
            });
        }
    });
});

router.delete('/eliminar-servicio-proveedor', (req, res) => {
    ServicioProveedor.deleteOne({ nombre: req.body.nombre }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el servicio',
                error
            });
        } else {
            res.json({
                msj: 'El servicio ha sido eliminado correctamente'
            });
        }
    });
});

router.put('/modificar-servicio-proveedor', (req, res) => {
    ServicioProveedor.updateOne({ nombre: req.body.nombre }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El servicio no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'El servicio se modificó correctamente'
            });
        }
    });
});


module.exports = router;