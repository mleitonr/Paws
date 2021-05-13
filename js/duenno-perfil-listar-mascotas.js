'use strict';

const tabla = document.querySelector('#tbl-mascotas tbody');
let listaMascotas = [];

const llenarListaMascotas = async () => {
    listaMascotas = await obtenerRegistroMascota();
    mostrarTabla();
}

const mostrarTabla = () => {

    tabla.innerHTML = '';

    listaMascotas.forEach(mascota => {


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

        // Agregarle el boton perfil a la celda

        celdaAcciones.appendChild(botonPerfil);


    });
};

llenarListaMascotas();