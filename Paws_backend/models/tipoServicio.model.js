'use strict';

const mongoose = require('mongoose');

const schema_tipo_servicio = new mongoose.Schema({
    nombre: {type: String, required: true, unique: true},
    estado: {type: String, required: true, unique: false}
});


module.exports = mongoose.model('TipoServicio', schema_tipo_servicio, 'tiposServicios');