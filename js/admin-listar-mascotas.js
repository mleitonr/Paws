'use strict';

const tabla = document.querySelector('#tbl-mascotas-registradas tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaRazas.forEach(raza => {
        if (raza.nombreRaza.toLowerCase().includes(filtro) || raza.especie.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = raza.especie;
            fila.insertCell().innerHTML = raza.nombreRaza;


            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';

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
                        Swal.fire(
                            '',
                            'La raza ha sido eliminada',
                            'success'
                        )
                    }
                })
            });
            // Agregarle los botones a la celda

            celdaAcciones.appendChild(botonModificar);
            celdaAcciones.appendChild(botonEliminar);
            document.getElementById("sin-resultados").innerHTML="";
        } else {
            document.getElementById("sin-resultados").innerHTML="No se encontraron más resultados";
        }


    });
};


mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);