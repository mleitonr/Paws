'use strict';

let tipoMascotaSeleccionada;

const inputNombre = document.querySelector('#txt-tipos-mascota');
const selectEstado = document.querySelector('#txt-estado');
const btnGuardar = document.querySelector('#btn-guardar');

inputNombre.disabled = true;

const llenarTipoMascotas = async() => {
    inputNombre.value = tipoMascotaSeleccionada.nombre;
    selectEstado.value = tipoMascotaSeleccionada.estado;
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

    modificarTipoMascota(nombre, estado);
};

if (sessionStorage.getItem('tipoMascotaSeleccionada')) {
    tipoMascotaSeleccionada = JSON.parse(sessionStorage.getItem('tipoMascotaSeleccionada'));
    llenarTipoMascotas();
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero un tipo de mascota'
    }).then(() => {
        window.location.href = 'admin-listar-tipos-mascotas.html';
    });
}
btnGuardar.addEventListener('click', validar);