'use strict';

let registrarPadecimiento;

const inputNombre = document.querySelector('#txt-nombre-padecimiento');
const selectEspecie = document.querySelector('#slt-especie');
const btnAgregar = document.querySelector('#btn-agregar');

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
            'title': 'No se pudo registrar el padecimiento',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }

};

const imprimir = () => {
    let nombre = inputNombre.value;
    let especie = selectEspecie.value;
    registrarTiposPadecimiento(nombre, especie);
}

btnAgregar.addEventListener('click', validar);