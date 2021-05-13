'use strict';

let duennoRegistrado;

const inputNombre = document.querySelector('#txt-nombre');
const inputApellido1 = document.querySelector('#txt-apellido1');
const inputApellido2 = document.querySelector('#txt-apellido2');
const selectTipoIdentificacion = document.querySelector('#slt_tipo_identificacion');
const inputIdentificacion = document.querySelector('#num-identificacion');
const inputNacimiento = document.querySelector('#nacimiento');
const inputNumeroTelefono = document.querySelector('#num-telefono');
const inputCorreo = document.querySelector('#txt-correo');
const inputGenero = document.querySelector('#slt-genero');
const divFoto = document.querySelector('#foto-perfil');
const btnRegistro = document.querySelector('#btn-registro');



const validar = () => {

    let error = false;

    let inputsRequeridos = document.querySelectorAll('.form-duenno :required');
    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    let regexCorreo = /^[a-zA-Z.0-9]+@{1}[a-zA-Z.]+$/;

    if (regexCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }

    let fechaNacGeneral = new Date(inputNacimiento.value);
    let fechaNacimiento = fechaNacGeneral.toDateString(inputNacimiento.value);

    let edad = calcularEdad(fechaNacGeneral);

    if (edad < 18) {
        error = true;
        inputNacimiento.classList.add('error');
    } else {
        inputNacimiento.classList.remove('error');
    }


    if (error == false) {
        imprimir();

    } else if (edad < 18) {
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
    let tipoIdentificacion = selectTipoIdentificacion.value;
    let identificacion = inputIdentificacion.value;
    let nacimiento = inputNacimiento.value;
    let telefono = inputNumeroTelefono.value;
    let correo = inputCorreo.value;
    let genero = inputGenero.value;
    

    registrarUsuarioDuenno(divFoto.src, nombre, apellido1, apellido2, tipoIdentificacion, identificacion, nacimiento, telefono, correo, genero);

};

btnRegistro.addEventListener('click', validar);