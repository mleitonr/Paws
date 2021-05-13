'use strict';

const tabla = document.querySelector('#tbl-lista-servicios tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaServicios = [];

const llenarListaServicios = async() => {
    listaServicios = await obtenerServicioProveedor();
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
            fila.insertCell().innerHTML = servicios.estado;
            


            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';
            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('servicioSeleccionado', JSON.stringify(servicios));
                window.location.href = 'proveedor-modificar-servicios.html';
            });


            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';
            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': 'Está seguro',
                    'text': 'Está seguro que desea eliminar este servicio?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarServicioProveedor(servicios.nombre);
                    }
                })
            });

            // Agregarle los botones a la celda

            celdaAcciones.appendChild(botonModificar);
            celdaAcciones.appendChild(botonEliminar);
            document.getElementById("sin-resultados").innerHTML = "";
        } else {
            document.getElementById("sin-resultados").innerHTML = "No se encontraron más resultados";
        }
    });
};


llenarListaServicios();
inputFiltro.addEventListener('keyup', mostrarTabla);