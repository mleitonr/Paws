'use strict';

const tablaTarjetas = document.querySelector('#tbl-tarjetas tbody');

let listaTarjeta = [];

const llenarListaTarjetas = async() => {
    listaTarjeta = await obtenerTarjeta();
    mostrarTablaTarjetas();
}

const mostrarTablaTarjetas = () => {

    tablaTarjetas.innerHTML = '';
    listaTarjeta.forEach(tarjeta => {

        let fila = tablaTarjetas.insertRow();
        fila.insertCell().innerHTML = 'Ahorros';
        fila.insertCell().innerHTML = tarjeta.titular;
        fila.insertCell().innerHTML = tarjeta.numTarjeta;
        

        let celdaAcciones = fila.insertCell();

        let botonModificar = document.createElement('button');
        botonModificar.innerText = 'Editar';
        botonModificar.addEventListener('click', () => {
            sessionStorage.setItem('tarjetaSeleccionada', JSON.stringify(tarjeta));
            window.location.href = 'duenno-modificar-tarjeta.html';
        });

        let botonEliminar = document.createElement('button');
        botonEliminar.innerText = 'Eliminar';

        botonEliminar.addEventListener('click', () => {
            Swal.fire({
                'icon': 'warning',
                'showCancelButton': true,
                'title': '¿Está seguro?',
                'text': '¿Está seguro que desea eliminar la tarjeta?',
                'confirmButtonText': 'Sí, estoy seguro',
                'cancelButtonText': 'Cancelar',
                'reverseButtons': true

            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarTarjeta(tarjeta.titular);

                }
            })
        });
        // Agregarle los botones a la celda

        celdaAcciones.appendChild(botonModificar);
        celdaAcciones.appendChild(botonEliminar);

    });
};


llenarListaTarjetas();