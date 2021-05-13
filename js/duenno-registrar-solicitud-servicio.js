'use strict';

let solicitarServicio;

const selectProveedor = document.querySelector('#slt-proveedor');
const inputFecha = document.querySelector('#txt-fecha');
const inputHora = document.querySelector('#txt-hora');
const inputMascota = document.querySelector('#slt-mascota');

const btnSolicitar = document.querySelector('#btn-solicitar');


const llenarFormulario = () => {

    selectProveedor.value = solicitarServicio.proveedor;
    inputFecha.value = solicitarServicio.fecha;
    inputHora.value = solicitarServicio.hora;
    inputMascota.value = solicitarServicio.mascota;

}

const calcularHorario = (fecha) => {
    let fechaActual = new Date();
    let horario = fechaActual.getFullYear() - fecha.getFullYear();

    if (fechaActual.getMonth() > fecha.getMonth()) {
        horario = horario - 1;
    } else {
        if ((fechaActual.getMonth() == fecha.getMonth()) && (fechaActual.getUTCDate() > fecha.getUTCDate())) {
            horario = horario - 1;
        }
    }
    return horario;
};

const validar = () => {

    let error = false;

    let inputsRequeridos = document.querySelectorAll('.form-solicitar-servicio :required');

    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    let fechaGeneral = new Date(inputFecha.value);
    let fecha = fechaGeneral.toDateString(inputFecha.value);

    let horario = calcularHorario(fechaGeneral);

    if (horario < 0) {
        error = true;
        inputFecha.classList.add('error');
    } else {
        inputFecha.classList.remove('error');
    }


    //validaciones de formato

    if (error == false) {
        Swal.fire({
            'icon': 'success',
            'title': '¡Gracias!',
            'text': 'Se ha enviado un correo de confirmación por la solicitud del servicio',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'duenno-home.html';
        });
    } else if (horario < 0) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Fecha inválida',
            'text': 'Seleccione una fecha futura',
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

btnSolicitar.addEventListener('click', validar);