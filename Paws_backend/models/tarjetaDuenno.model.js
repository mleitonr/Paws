'use strict';

const mongoose = require('mongoose');

const schema_tarjeta = new mongoose.Schema({
    titular: { type: String, required: true, unique: false },
    numTarjeta: { type: String, required: true, unique: false },
    fechaExpiracion: { type: Date, required: true, unique: false },
    codigoTarjeta: { type: String, required: true, unique: false },
    correoDuenno: { type: String, required: true, unique: false },
});

module.exports = mongoose.model('TarjetaDatos', schema_tarjeta, 'tarjetasDatos');