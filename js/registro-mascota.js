'use strict';

let mascotaSeleccionada;

const inputNombre = document.querySelector('#txt-nombre');
const inputTipo = document.querySelector('#tipo-mascota');
const inputCaracteristicas = document.querySelector('#caract-especiales');
const selectRaza = document.querySelector('#slt-tipoRaza');
const selectPadecimiento = document.querySelector('#slt-tipoPadecimiento');
const selectVacuna = document.querySelector('#slt-tipoVacuna');
const inputCorreo = document.querySelector('#txt-correo');
const inputTelefono = document.querySelector('#txt-telefono');
const btnRegistroMascota = document.querySelector('#btn-registro');

const llenarFormulario = () => {

    inputNombre.value = mascotaSeleccionada.nombre;
    inputTipo.value = mascotaSeleccionada.tipo;
    inputCaracteristicas.value = mascotaSeleccionada.caracteristicas;
    selectRaza.value = mascotaSeleccionada.raza;
    selectPadecimiento.value = mascotaSeleccionada.padecimiento;
    selectVacuna.value = mascotaSeleccionada.vacuna;
    inputCorreo.value = mascotaSeleccionada.correo;
    inputTelefono.value = mascotaSeleccionada.telefono;

}

const validar = () => {
    let error = false;
    let inputsRequeridos = document.querySelectorAll('.form-mascota :required');


    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    //validaciones de formato

    if (error == false) {
        Swal.fire({
            'icon': 'success',
            'title': 'Campos completados',
            'text': 'La información fue ingresada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'home-duenno.html';
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

btnRegistroMascota.addEventListener('click', validar);