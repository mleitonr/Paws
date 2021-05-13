'use strict';

const tabla = document.querySelector('#tbl-mascotas tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaMascotas = [];

const llenarListaMascotas = async() => {
    listaMascotas = await obtenerRegistroMascota();
    mostrarTabla();
}

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();

    tabla.innerHTML = '';

    listaMascotas.forEach(mascota => {
        if (mascota.nombre.toLowerCase().includes(filtro)) {

            let fila = tabla.insertRow();
        
            fila.insertCell().innerHTML = mascota.nombre;
            fila.insertCell().innerHTML = mascota.edad;
            fila.insertCell().innerHTML = mascota.raza;

            let celdaAcciones = fila.insertCell();

            let botonPerfil = document.createElement('button');
            botonPerfil.innerText = 'Ir a perfil';
            botonPerfil.addEventListener('click', () => {
                sessionStorage.setItem('mascotaSeleccionada', JSON.stringify(mascota));
                window.location.href = 'duenno-mascota-perfil.html';
            });


            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';
            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('mascotaSeleccionada', JSON.stringify(mascota));
                window.location.href = 'duenno-modificar-mascota.html';
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
                        eliminarRegistroMascota(mascota.nombre);
                    }
                })
            });

            // Agregarle los botones a la celda

            celdaAcciones.appendChild(botonPerfil);
            celdaAcciones.appendChild(botonModificar);
            celdaAcciones.appendChild(botonEliminar);
            document.getElementById("sin-resultados").innerHTML="";
        } else {
            document.getElementById("sin-resultados").innerHTML="No se encontraron más resultados";
        }

    });
};

llenarListaMascotas();

inputFiltro.addEventListener('keyup', mostrarTabla);