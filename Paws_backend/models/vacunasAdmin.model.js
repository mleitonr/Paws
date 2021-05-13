'use strict';

const mongoose = require('mongoose');

const schema_vacunas_admin = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    especie: { type: String, required: true, unique: false }
});


module.exports = mongoose.model('VacunasAdmin', schema_vacunas_admin, 'vacunasAdmin');