'use strict';

let mascotaSeleccionada;

const inputNombre = document.querySelector('#txt-nombre');
const inputTipo = document.querySelector('#slt-tipoMascota');
const inputCaracteristicas = document.querySelector('#caract-especiales');
const selectRaza = document.querySelector('#slt-tipoRaza');
const selectPadecimiento = document.querySelector('#slt-tipoPadecimiento');
const selectVacuna = document.querySelector('#slt-tipoVacuna');
const inputEdad = document.querySelector('#txt-edad');
const inputTelefono = document.querySelector('#txt-telefono');
const divFoto = document.querySelector('#foto-perfil');
const btnGuardar = document.querySelector('#btn-guardar');

const usuarioConectado = sessionStorage.getItem('usuarioConectado');
let datos = JSON.parse(usuarioConectado);
let correoDuenno = datos['correo'];

const llenarFormularioMascota = () => {

    inputNombre.value = mascotaSeleccionada.nombre;
    inputTipo.value = mascotaSeleccionada.tipo;
    inputCaracteristicas.value = mascotaSeleccionada.caracteristicas;
    selectRaza.value = mascotaSeleccionada.raza;
    selectPadecimiento.value = mascotaSeleccionada.padecimientos;
    selectVacuna.value = mascotaSeleccionada.vacunas;
    inputEdad.value = mascotaSeleccionada.edad;
    inputTelefono.value = mascotaSeleccionada.telefono;

}


//Llenar tipos de mascota

let listaTiposMascotas = [];
const llenarTiposMascotas = async () => {
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
        inputTipo.appendChild(opcion);
    });

};

llenarTiposMascotas();


//Llenar tipos de razas

let listaTiposRazas = [];
const llenarTiposRazas = async () => {
    listaTiposRazas = await obtenerRazasAdmin();
    llenarSelectTipoRazas();
};

const llenarSelectTipoRazas = () => {
    let option = document.createElement('option');
    option.value = '';
    option.innerHTML = '-- Seleccione una opción --';
    listaTiposRazas.forEach(tipoRaza => {
        let opcion = document.createElement('option');
        let tipo = tipoRaza.nombre;
        opcion.value = tipo;
        opcion.innerHTML = tipo;
        opcion.value = tipoRaza.nombre;
        selectRaza.appendChild(opcion);
    });

};

llenarTiposRazas();



//Llenar tipos de padecimientos

let listaTiposPadecimientos = [];
const llenarTiposPadecimientos = async () => {
    listaTiposPadecimientos = await obtenerPadecimiento();
    llenarSelectTipoPadecimientos();
};

const llenarSelectTipoPadecimientos = () => {
    let option = document.createElement('option');
    option.value = '';
    option.innerHTML = '-- Seleccione una opción --';
    listaTiposPadecimientos.forEach(tipoPadecimiento => {
        let opcion = document.createElement('option');
        let tipo = tipoPadecimiento.nombre;
        opcion.value = tipo;
        opcion.innerHTML = tipo;
        opcion.value = tipoPadecimiento.nombre;
        selectPadecimiento.appendChild(opcion);
    });

};

llenarTiposPadecimientos();


//Llenar tipos de vacunas

let listaTiposVacunas = [];
const llenarTiposVacunas = async () => {
    listaTiposVacunas = await obtenerVacunasAdmin();
    llenarSelectTipoVacunas();
};

const llenarSelectTipoVacunas = () => {
    let option = document.createElement('option');
    option.value = '';
    option.innerHTML = '-- Seleccione una opción --';
    listaTiposVacunas.forEach(tipoVacuna => {
        let opcion = document.createElement('option');
        let tipo = tipoVacuna.nombre;
        opcion.value = tipo;
        opcion.innerHTML = tipo;
        opcion.value = tipoVacuna.nombre;
        selectVacuna.appendChild(opcion);
    });

};

llenarTiposVacunas();


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
    let tipo = inputTipo.value;
    let caracteristicas = inputCaracteristicas.value;
    let raza = selectRaza.value;
    let padecimientos = selectPadecimiento.value;
    let vacunas = selectVacuna.value;
    let edad = inputEdad.value;
    let telefono = inputTelefono.value;
    
    modificarRegistroMascota(nombre, tipo, caracteristicas, raza, padecimientos, vacunas, edad, telefono, correoDuenno);
};

if (sessionStorage.getItem('mascotaSeleccionada')) {
    mascotaSeleccionada = JSON.parse(sessionStorage.getItem('mascotaSeleccionada'));
    llenarFormularioMascota();
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero una mascota'
    }).then(() => {
        window.location.href = 'duenno-listar-mascotas.html';
    });
};

btnGuardar.addEventListener('click', validar);