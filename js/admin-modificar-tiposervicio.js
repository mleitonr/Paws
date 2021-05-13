'use strict';

let tipoServicioSeleccionado;

const inputNombre = document.querySelector('#txt-nombre-servicio');
const selectEstado = document.querySelector('#txt-estado');
const btnGuardar = document.querySelector('#btn-guardar');

inputNombre.disabled = true;

const llenarTipoServicios = async() => {
    inputNombre.value = tipoServicioSeleccionado.nombre;
    selectEstado.value = tipoServicioSeleccionado.estado;
}


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
    let nombre = inputNombre.value;
    let estado = selectEstado.value;

    modificarTipoServicio(nombre, estado);
};

if (sessionStorage.getItem('tipoServicioSeleccionado')) {
    tipoServicioSeleccionado = JSON.parse(sessionStorage.getItem('tipoServicioSeleccionado'));
    llenarTipoServicios();
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero un servicio'
    }).then(() => {
        window.location.href = 'admin-listar-tipos-servicios.html';
    });
};

btnGuardar.addEventListener('click', validar);