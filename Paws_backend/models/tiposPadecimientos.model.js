'use strict';

const mongoose = require('mongoose');

const schema_tipo_padecimiento = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    especie: { type: String, required: true, unique: false }
});


module.exports = mongoose.model('TipoPadecimiento', schema_tipo_padecimiento, 'tiposPadecimientos');