'use strict';

let registrarServicio;


const inputNombre = document.querySelector('#txt-nombre');
const selectTipo = document.querySelector('#slt-tipo');
const inputDesdeHorario = document.querySelector('#txt-desde-horario');
const inputHastaHorario = document.querySelector('#txt-hasta-horario');
const inputPrecio = document.querySelector('#txt-precio');
const inputDescripcion = document.querySelector('#txt-descripcion');
const divFoto = document.querySelector('#foto-perfil');
const btnAgregar = document.querySelector('#btn-agregar');
const usuarioConectado = sessionStorage.getItem('usuarioConectado');
let datos = JSON.parse(usuarioConectado);
let correoProveedor = datos['correo'];


//Llenar tipos de servicio

let listaTiposServicios = [];
const llenarTiposServicios = async () => {
    listaTiposServicios = await obtenerTipoServicio();
    llenarSelectTipoServicios();
};

const llenarSelectTipoServicios = () => {
    let option = document.createElement('option');
    option.value = '';
    option.innerHTML = '-- Seleccione una opción --';
    listaTiposServicios.forEach(tipoServicios => {
        let opcion = document.createElement('option');
        let tipo = tipoServicios.nombre;
        opcion.value = tipo;
        opcion.innerHTML = tipo;
        opcion.value = tipoServicios.nombre;
        selectTipo.appendChild(opcion);
    });

};

llenarTiposServicios();

// Funcion que valida los campos del formulario.
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
            'title': 'No se pudo enviar el formulario',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }

};

const imprimir = () => {
    let nombre = inputNombre.value;
    let tipo = selectTipo.value;
    let desdeHorario = inputDesdeHorario.value;
    let hastaHorario = inputHastaHorario.value;
    let precio = inputPrecio.value;
    let descripcion = inputDescripcion.value;


    registrarServicioProveedor(divFoto.src, nombre, tipo, desdeHorario, hastaHorario, precio, descripcion, correoProveedor);
};



btnAgregar.addEventListener('click', validar);