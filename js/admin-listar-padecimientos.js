'use strict';

const tabla = document.querySelector('#tbl-lista-padecimientos tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaPadecimientos = [];

const llenarListaPadecimientos = async() => {
    listaPadecimientos = await obtenerPadecimiento();
    mostrarTabla();
};

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaPadecimientos.forEach(padecimiento => {
        if (padecimiento.nombre.toLowerCase().includes(filtro) || padecimiento.especie.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = padecimiento.especie;
            fila.insertCell().innerHTML = padecimiento.nombre;
            
            

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';
            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('padecimientoSeleccionado', JSON.stringify(padecimiento));
                window.location.href = 'admin-modificar-padecimiento.html';
            });

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': '¿Está seguro?',
                    'text': '¿Está seguro que desea eliminar el padecimiento?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarPadecimiento(padecimiento.nombre);
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


llenarListaPadecimientos();
inputFiltro.addEventListener('keyup', mostrarTabla);