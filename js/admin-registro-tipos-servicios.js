'use strict';

let registrarTipoServicio;

const inputServicio = document.querySelector('#txt-nombre-servicio');
const btnAgregar = document.querySelector('#btn-agregar');

const validar = () => {
    let error = false;

    if (inputServicio.value == '') {
        error = true;
        inputServicio.classList.add('error');
    } else {
        inputServicio.classList.remove('error');
    }

    if (error == false) {
        imprimir();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar el tipo de servicio',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }

};


const imprimir = () => {
    let servicio = inputServicio.value;

    registrarTiposServicios(servicio);

};

btnAgregar.addEventListener('click', validar);