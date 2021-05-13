'use strict';

let servicioSeleccionado;

const inputNombre = document.querySelector('#txt-nombre');
const selectTipo = document.querySelector('#slt-tipo');
const inputDesdeHorario = document.querySelector('#txt-desde-horario');
const inputHastaHorario = document.querySelector('#txt-hasta-horario');
const inputPrecio = document.querySelector('#txt-precio');
const inputDescripcion = document.querySelector('#txt-descripcion');
let inputEstado;
const btnGuardar = document.querySelector('#btn-guardar');

inputNombre.disabled = true;

const llenarFormulario = () => {

    inputNombre.value = servicioSeleccionado.nombre;
    selectTipo.value = servicioSeleccionado.tipo;
    inputDesdeHorario.value = servicioSeleccionado.desdeHorario;
    inputHastaHorario.value = servicioSeleccionado.hastaHorario;
    inputPrecio.value = servicioSeleccionado.precio;
    inputDescripcion.value = servicioSeleccionado.descripcion;
    inputEstado = servicioSeleccionado.estado;
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
            'title': 'Faltan campos por llenar',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};

const obtenerDatos = () => {
    let nombre = inputNombre.value;
    let tipo = selectTipo.value;
    let desdeHorario = inputDesdeHorario.value;
    let hastaHorario = inputHastaHorario.value;
    let precio = inputPrecio.value;
    let descripcion = inputDescripcion.value;
    let estado = inputEstado.value;

    modificarServicioProveedor(nombre, tipo, desdeHorario, hastaHorario, precio, descripcion, estado);
};

if (sessionStorage.getItem('servicioSeleccionado')) {
    servicioSeleccionado = JSON.parse(sessionStorage.getItem('servicioSeleccionado'));
    llenarFormulario();
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero un servicio'
    }).then(() => {
        window.location.href = 'proveedor-listar-servicios.html';
    });
}
btnGuardar.addEventListener('click', validar);