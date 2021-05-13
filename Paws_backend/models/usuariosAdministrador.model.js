'use strict';

const mongoose = require('mongoose');

const schema_usuario_administrador = new mongoose.Schema({
    nombre: {type: String, required: true, unique: false},
    apellido1: {type: String, required: true, unique: false},
    apellido2: {type: String, required: true, unique: false},
    identificacion: {type: String, required: true, unique: true},
    nacimiento: {type: Date, required: true, unique: false},
    telefono: {type: String, required: true, unique: false},
    correo: {type: String, required: true, unique: true},
    contrasenna: {type: String, required: false, unique: false},
    tipo: {type: String, required: true, unique: false},
    estado: {type: String, required: true, unique: false}

});

module.exports = mongoose.model('Administrador', schema_usuario_administrador, 'administradores');