'use strict';

const tabla = document.querySelector('#tbl-vacunas-mascotas tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaVacunas = [];

const llenarListaVacunas = async () => {
    listaVacunas = await obtenerVacunasAdmin();
    mostrarTabla();
};

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaVacunas.forEach(vacuna => {
        if (vacuna.nombre.toLowerCase().includes(filtro) || vacuna.especie.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = vacuna.nombre;
            fila.insertCell().innerHTML = vacuna.especie;


            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';
            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('vacunaSeleccionada', JSON.stringify(vacuna));
                window.location.href = 'admin-modificar-vacuna.html';
            });

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': '¿Está seguro?',
                    'text': '¿Está seguro que desea eliminar la vacuna?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarVacunasAdmin(vacuna.nombre);

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


llenarListaVacunas();
inputFiltro.addEventListener('keyup', mostrarTabla);