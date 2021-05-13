'use strict';

const tabla = document.querySelector('#tbl-razas-mascotas tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaRazas = [];

const llenarListaRazas = async () => {
    listaRazas = await obtenerRazasAdmin();
    mostrarTabla();
};

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaRazas.forEach(raza => {
        if (raza.nombre.toLowerCase().includes(filtro) || raza.especie.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = raza.especie;
            fila.insertCell().innerHTML = raza.nombre;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';
            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('razaSeleccionada', JSON.stringify(raza));
                window.location.href = 'admin-modificar-raza.html';
            });

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': '¿Está seguro?',
                    'text': '¿Está seguro que desea eliminar la raza?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarRazasAdmin(raza.nombre);
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


llenarListaRazas();
inputFiltro.addEventListener('keyup', mostrarTabla);