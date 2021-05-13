'use strict';
let tarjetaSeleccionada;

const inputNumero = document.querySelector('#txt-numero');
const inputExpiracion = document.querySelector('#txt-expiracion');
const inputCodigo = document.querySelector('#txt-codigo');
const inputTitular = document.querySelector('#txt-titular');
const btnGuardar = document.querySelector('#btn-guardar');


inputTitular.disabled = true;

const llenarFormulario = () => {

    inputTitular.value = tarjetaSeleccionada.titular;
    inputNumero.value = tarjetaSeleccionada.numTarjeta;
    inputExpiracion.value = tarjetaSeleccionada.fechaExpiracion;
    inputCodigo.value = tarjetaSeleccionada.codigoTarjeta;


};

const validar = () => {
    let error = false;
    let inputsRequeridos = document.querySelectorAll('.formulario :required');

    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });


    if (error == false) {
        obtenerDatos();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'Faltan campos por llenar',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};

const obtenerDatos = () => {

    let titular = inputTitular.value;
    let numero = inputNumero.value;
    let expiracion = inputExpiracion.value;
    let codigo = inputCodigo.value;

    modificarTarjeta(titular, numero, expiracion, codigo);
};


if (sessionStorage.getItem('tarjetaSeleccionada')) {
    tarjetaSeleccionada = JSON.parse(sessionStorage.getItem('tarjetaSeleccionada'));
    llenarFormulario();
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero una tarjeta'
    }).then(() => {
        window.location.href = 'duenno-modificar-tarjeta.html';
    });
}
btnGuardar.addEventListener('click', validar);