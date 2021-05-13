'use strict';

const mongoose = require('mongoose');

const schema_servicio_proveedor = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    tipo: { type: String, required: true, unique: false },
    desdeHorario: { type: String, required: true, unique: false },
    hastaHorario: { type: String, required: true, unique: false },
    precio: { type: String, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false },
    correoProveedor: { type: String, required: true, unique: false },
    imagen: {type: String, required: false, unique: false}
});


module.exports = mongoose.model('ServicioProveedor', schema_servicio_proveedor, 'servicioProveedor');