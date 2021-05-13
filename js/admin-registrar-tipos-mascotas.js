'use strict';

let registrarTiposdeMascota;

const inputTiposdeMascota = document.querySelector('#txt-tipos-mascota');
const btnAgregar = document.querySelector('#btn-agregar');

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
        imprimir();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar el tipo de mascota',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};

const imprimir = () => {
    let tipoMascota = inputTiposdeMascota.value;

    registrarTiposMascotas(tipoMascota);
};


btnAgregar.addEventListener('click', validar);