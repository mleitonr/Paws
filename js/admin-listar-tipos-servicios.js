'use strict';

const tabla = document.querySelector('#tbl-tipos-servicios tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaTipoServicios = [];

const llenarListaServicios = async() => {
    listaTipoServicios = await obtenerTipoServicio();
    mostrarTabla();
}

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaTipoServicios.forEach(tipoServicio => {
        if (tipoServicio.nombre.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = tipoServicio.nombre;
            fila.insertCell().innerHTML = tipoServicio.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';
            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('tipoServicioSeleccionado', JSON.stringify(tipoServicio));
                window.location.href = 'admin-modificar-tipoServicio.html';
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
                        eliminarTipoServicio(tipoServicio.nombre);

                    }
                })
            })

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