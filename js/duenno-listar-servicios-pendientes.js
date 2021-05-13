'use strict';

const tabla = document.querySelector('#tbl-servicios-pendientes tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();

    tabla.innerHTML = '';

    listaServiciosPendientes.forEach(servicio => {
        if (servicio.fechaServicio.toLowerCase().includes(filtro) || servicio.servicioSolicitado.toLowerCase().includes(filtro) || servicio.proveedor.toLowerCase().includes(filtro)) {

            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = servicio.fechaServicio;
            fila.insertCell().innerHTML = servicio.servicioSolicitado;
            fila.insertCell().innerHTML = servicio.proveedor;
            fila.insertCell().innerHTML = servicio.estado;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';
            botonModificar.classList.add('btn');

            let botonCancelar = document.createElement('button');
            botonCancelar.innerText = 'Cancelar';
            botonCancelar.classList.add('btn');

            botonCancelar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': '¿Está seguro?',
                    'text': '¿Está seguro que desea cancelar el servicio?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'El servicio ha sido cancelado',
                            'success'
                        )
                    }
                })
            });

            botonModificar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': '¿Está seguro?',
                    'text': '¿Está seguro que desea editar el servicio?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                })
            });

            // Agregarle los botones a la celda

            celdaAcciones.appendChild(botonModificar);
            celdaAcciones.appendChild(botonCancelar);
            document.getElementById("sin-resultados").innerHTML="";
        } else {
            document.getElementById("sin-resultados").innerHTML="No se encontraron más resultados";
        }


    });
};

mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);