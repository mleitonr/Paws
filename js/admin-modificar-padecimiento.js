'use strict';
let padecimientoSeleccionado;
const inputNombre = document.querySelector('#txt-nombre-padecimiento');
const selectEspecie = document.querySelector('#slt-especie');
const btnGuardar = document.querySelector('#btn-guardar');

//Llenar tipos de servicio

let listaTiposMascotas = [];
const llenarTiposMascotas = async() => {
    listaTiposMascotas = await obtenerTiposMascotas();
    llenarSelectTipoMascotas();
};

const llenarSelectTipoMascotas = () => {
    let option = document.createElement('option');
    option.value = '';
    option.innerHTML = '-- Seleccione una opción --';
    listaTiposMascotas.forEach(tipoMascota => {
        let opcion = document.createElement('option');
        let tipo = tipoMascota.nombre;
        opcion.value = tipo;
        opcion.innerHTML = tipo;
        opcion.value = tipoMascota.nombre;
        selectEspecie.appendChild(opcion);
    });

};

llenarTiposMascotas();

inputNombre.disabled =true;

const llenarFormulario = () => {
    inputNombre.value = padecimientoSeleccionado.nombre;
    selectEspecie.value = padecimientoSeleccionado.especie;
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
            'title': 'No se pudo modificar el padecimiento',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }

};


const obtenerDatos = () => {
    let nombre = inputNombre.value;
    let especie = selectEspecie.value;

    modificarPadecimiento(nombre, especie);
};

if (sessionStorage.getItem('padecimientoSeleccionado')) {
    padecimientoSeleccionado = JSON.parse(sessionStorage.getItem('padecimientoSeleccionado'));
    llenarFormulario();
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero una vacuna'
    }).then(() => {
        window.location.href = 'admin-listar-padecimientos.html';
    });
}
btnGuardar.addEventListener('click', validar);