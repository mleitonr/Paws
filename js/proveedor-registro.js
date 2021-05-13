'use strict';

let proveedorRegistrado;

const inputNombre = document.querySelector('#txt-nombre');
const inputApellido1 = document.querySelector('#txt-apellido1');
const inputApellido2 = document.querySelector('#txt-apellido2');
const inputIdentificacion = document.querySelector('#num-identificacion');
const inputNacimiento = document.querySelector('#nacimiento');
const inputNumeroTelefono = document.querySelector('#num-telefono');
const inputCorreo = document.querySelector('#txt-correo');
const inputProvincia = document.querySelector('#provincias');
const inputCanton = document.querySelector('#cantones');
const inputDistrito = document.querySelector('#distritos');
const inputNombreEmpresa = document.querySelector('#txt-nombre-empresa');
const inputNombreRepEmpresa = document.querySelector('#txt-nombre-rep-empresa');
const inputApellido1RepEmpresa = document.querySelector('#txt-apellido1-rep-empresa');
const inputApellido2RepEmpresa = document.querySelector('#txt-apellido2-rep-empresa');
const inputNacimientoRepEmpresa = document.querySelector('#nacimiento-rep-empresa');
const inputCedJuridicaEmpresa = document.querySelector('#ced-juridica-empresa');
const inputTelefonoEmpresa = document.querySelector('#num-tel-empresa');
const inputCorreoRepEmpresa = document.querySelector('#txt-correo-rep-empresa');
const divFoto = document.querySelector('#foto-perfil');
const btnRegistro = document.querySelector('#btn-registro');


const validar = () => {

    let error = false;
    
    let inputsRequeridos = document.querySelectorAll('.form-proveedor :required');
    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    let regexCorreo = /^[a-zA-Z.0-9]+@{1}[a-zA-Z.]+$/;

    if(regexCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('error');
    }else{
        inputCorreo.classList.remove('error');
    }

    let fechaNacGeneral = new Date(inputNacimiento.value);
    let fechaNacimiento = fechaNacGeneral.toDateString(inputNacimiento.value);

    let edad = calcularEdad(fechaNacGeneral);

    if (edad < 18) {
        error = true;
        inputNacimiento.classList.add('error');
    }else {
        inputNacimiento.classList.remove('error');
    }


    //validaciones de formato

    if (error == false) {
        imprimir();

    } else if(edad < 18) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se cumple con requisito de edad',
            'text': 'Debe ser mayor a 18 años para registrarse',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'Faltan campos por llenar',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};

const calcularEdad = (nacimiento) => {
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear();

    if (fechaActual.getMonth() < nacimiento.getMonth()) {
        edad = edad - 1;
    } else {
        if ((fechaActual.getMonth() == nacimiento.getMonth()) && (fechaActual.getUTCDate() < nacimiento.getUTCDate())) {
            edad = edad - 1;
        }
    }
    return edad;
};

const imprimir = () => {

    let nombre = inputNombre.value;
    let apellido1 = inputApellido1.value;
    let apellido2 = inputApellido2.value;
    let identificacion = inputIdentificacion.value;
    let nacimiento = inputNacimiento.value;
    let telefono = inputNumeroTelefono.value;
    let correo = inputCorreo.value;
    let provincia = inputProvincia.value;
    let canton = inputCanton.value;
    let distrito = inputDistrito.value;
    let nombreEmpresa = inputNombreEmpresa.value;
    let nombreRepEmpresa = inputNombreRepEmpresa.value;
    let apellido1RepEmpresa = inputApellido1RepEmpresa.value;
    let apellido2RepEmpresa = inputApellido2RepEmpresa.value;
    let nacimientoRepEmpresa = inputNacimientoRepEmpresa.value;
    let cedJuridicaEmpresa = inputCedJuridicaEmpresa.value;
    let telefonoEmpresa = inputTelefonoEmpresa.value;
    let correoRepEmpresa = inputCorreoRepEmpresa.value;
    
    registrarUsuarioProveedor(divFoto.src, nombre, apellido1, apellido2, identificacion,nacimiento,telefono,correo,provincia,canton,distrito,nombreEmpresa,nombreRepEmpresa,apellido1RepEmpresa,apellido2RepEmpresa,nacimientoRepEmpresa,cedJuridicaEmpresa,telefonoEmpresa,correoRepEmpresa);

};


btnRegistro.addEventListener('click', validar);
