'use strict';

let registrarVacuna;

const inputNombreVacuna = document.querySelector('#txt-nombre-vacuna');
const inputEspecie = document.querySelector('#txt-especie');
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
        inputEspecie.appendChild(opcion);
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
            'title': 'No se pudo registrar la vacuna',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'

        });

    }
};

const imprimir = () => {
    let nombre = inputNombreVacuna.value;
    let especie = inputEspecie.value;
    registrarVacunasAdmin(nombre, especie);
}


btnAgregar.addEventListener('click', validar);