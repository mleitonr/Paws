'use strict';

const mongoose = require('mongoose');

const schema_mascota = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    tipo: { type: String, required: true, unique: false },
    raza: { type: String, required: true, unique: false },
    telefono: { type: String, required: true, unique: false },
    edad: { type: String, required: true, unique: false },
    caracteristicas: { type: String, required: true, unique: false },
    padecimientos: { type: String, required: false, unique: false },
    vacunas: { type: String, required: false, unique: false },
    correoDuenno: { type: String, required: true, unique: false },
    imagen: {type: String, required: false, unique: false}
});

module.exports = mongoose.model('Mascota', schema_mascota, 'mascotas');