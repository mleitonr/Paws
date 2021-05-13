'use strict';

const tabla = document.querySelector('#tbl-tipos-mascota tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaTiposMascotas = [];

const llenarListaTiposMascotas = async() => {
    listaTiposMascotas = await obtenerTiposMascotas();
    mostrarTabla();
}

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaTiposMascotas.forEach(tiposMascota => {
        if (tiposMascota.nombre.toLowerCase().includes(filtro) || tiposMascota.estado.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = tiposMascota.nombre;
            fila.insertCell().innerHTML = tiposMascota.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';
            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('tipoMascotaSeleccionada', JSON.stringify(tiposMascota));
                window.location.href = 'admin-modificar-tipoMascota.html';
            });

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': '¿Está seguro?',
                    'text': '¿Está seguro que desea eliminar el tipo?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarTipoMascota(tiposMascota.nombre);
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


llenarListaTiposMascotas();
inputFiltro.addEventListener('keyup', mostrarTabla);