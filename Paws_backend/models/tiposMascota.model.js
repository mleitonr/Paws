'use strict';

const mongoose = require('mongoose');

const schema_tipo_mascota = new mongoose.Schema({
    nombre: {type: String, required: true, unique: true},
    estado: {type: String, required: true, unique: false}
});


module.exports = mongoose.model('TipoMascota', schema_tipo_mascota, 'tiposMascotas');