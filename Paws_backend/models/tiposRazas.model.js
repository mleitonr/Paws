'use strict';

const mongoose = require('mongoose');

const schema_tipo_raza = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    especie: { type: String, required: true, unique: false },


});

module.exports = mongoose.model('TipoRaza', schema_tipo_raza, 'tiposRazas');