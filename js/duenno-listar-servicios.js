'use strict';

const tabla = document.querySelector('#tbl-servicios-general tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaServicios = [];

const llenarListaServicios = async() => {
    listaServicios = await obtenerServiciosaDuenno();
    mostrarTabla();
}

const mostrarTabla = () => {

    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaServicios.forEach(servicios => {
        if (servicios.nombre.toLowerCase().includes(filtro) || servicios.tipo.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = servicios.nombre;
            fila.insertCell().innerHTML = servicios.tipo;
            fila.insertCell().innerHTML = servicios.desdeHorario;
            fila.insertCell().innerHTML = servicios.hastaHorario;
            fila.insertCell().innerHTML = servicios.precio;
            fila.insertCell().innerHTML = servicios.descripcion;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Obtener servicio';
            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('servicioSeleccionado', JSON.stringify(servicios));
                window.location.href = 'duenno-registrar-pago.html';
            });

            celdaAcciones.appendChild(botonModificar);
        }
    });
};


llenarListaServicios();
inputFiltro.addEventListener('keyup', mostrarTabla);