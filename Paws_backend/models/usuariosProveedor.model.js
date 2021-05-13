'use strict';

const mongoose = require('mongoose');

const schema_usuario_proveedor = new mongoose.Schema({
    nombre: {type: String, required: true, unique: false},
    apellido1: {type: String, required: true, unique: false},
    apellido2: {type: String, required: true, unique: false},
    identificacion: {type: String, required: true, unique: true},
    nacimiento: {type: Date, required: true, unique: false},
    telefono: {type: String, required: true, unique: false},
    correo: {type: String, required: true, unique: true},
    contrasenna: {type: String, required: false, unique: false},
    tipo: {type: String, required: true, unique: false},
    estado: {type: String, required: true, unique: false},
    imagen: {type: String, required: false, unique: false},
    provincia: {type: String, required: true, unique: false},
    canton: {type: String, required: true, unique: false},
    distrito: {type: String, required: true, unique: false},
    //Informacion de empresa
    empresa: {type: String, required: false, unique: false},
    repNombre: {type: String, required: false, unique: false},
    repApellido1: {type: String, required: false, unique: false},
    repApellido2: {type: String, required: false, unique: false},
    repNacimiento: {type: Date, required: false, unique: false},
    cedJuridica: {type: String, required: false, unique: false},
    telEmpresa: {type: String, required: false, unique: false},
    repCorreo: {type: String, required: false, unique: false},
});

module.exports = mongoose.model('Proveedor', schema_usuario_proveedor, 'proveedores');
