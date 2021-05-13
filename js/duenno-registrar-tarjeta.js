'use strict';

let tarjetaRegistrada;

const inputNumero = document.querySelector('#txt-numero');
const inputExpiracion = document.querySelector('#txt-expiracion');
const inputCodigo = document.querySelector('#txt-codigo');
const inputTitular = document.querySelector('#txt-titular');
const btnRegistro = document.querySelector('#btn-registro');

const usuarioConectado = sessionStorage.getItem('usuarioConectado');
let datos = JSON.parse(usuarioConectado);
let correoDuenno = datos['correo'];

const calcularExpiracion = (inputExpiracion) => {
    let fechaActual = new Date();
    let expiracion = fechaActual.getFullYear() - inputExpiracion.getFullYear();

    if (fechaActual.getMonth() > inputExpiracion.getMonth()) {
        expiracion = expiracion - 1;
    }
    return expiracion;
};

const validar = () => {

    let error = false;

    let inputsRequeridos = document.querySelectorAll('.form-tarjeta :required');
    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    let fechaExpGeneral = new Date(inputExpiracion.value);
    let fechaExpiracion = fechaExpGeneral.toDateString(inputExpiracion.value);

    let expiracion = calcularExpiracion(fechaExpGeneral);

    if (expiracion < 0) {
        inputExpiracion.classList.remove('error');
    } else {
        error = true;
        inputExpiracion.classList.add('error');
    }

    //validaciones de formato

    if (error == false) {
        imprimir();
    } else if (expiracion < 0) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La tarjeta ha expirado',
            'text': 'La tarjeta debe de estar al día',
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

const imprimir = () => {

    let titular = inputTitular.value;
    let numTarjeta = inputNumero.value;
    let fechaExpiracion = inputExpiracion.value;
    let codigo = inputCodigo.value;

    registrarTarjeta(titular, numTarjeta, fechaExpiracion, codigo, correoDuenno);
}

btnRegistro.addEventListener('click', validar);