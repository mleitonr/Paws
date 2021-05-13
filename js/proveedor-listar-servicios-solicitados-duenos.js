'use strict';

const tabla = document.querySelector('#tbl-servicios-solicitados-duenos tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaServiciosSolicitadosDuenos.forEach(servicioSolicitadoDueno => {
        if (servicioSolicitadoDueno.nombre.toLowerCase().includes(filtro) || servicioSolicitadoDueno.descripcion.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();


            fila.insertCell().innerHTML = servicioSolicitadoDueno.nombre;
            fila.insertCell().innerHTML = servicioSolicitadoDueno.descripcion;
            fila.insertCell().innerHTML = servicioSolicitadoDueno.condicion;



            let celdaAcciones = fila.insertCell();

            let botonAceptar = document.createElement('button');
            botonAceptar.innerText = 'Aceptar';

            botonAceptar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': 'Está seguro',
                    'text': 'Está seguro que desea aceptar la solicitud de servicio?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'La solicitud ha sido aceptada',
                            'success'
                        )
                    }
                })
            });

            let botonRechazar = document.createElement('button');
            botonRechazar.innerText = 'Rechazar';

            botonRechazar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': 'Está seguro',
                    'text': 'Está seguro que desea rechazar la solicitud de servicio?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'La solicitud ha sido rechazada',
                            'success'
                        )
                    }
                })
            });

            let botonPendiente = document.createElement('button');
            botonPendiente.innerText = 'Pendiente';

            botonPendiente.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': 'Está seguro',
                    'text': 'Está seguro que desea poner pendiente la solicitud de servicio?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'La solicitud ha puesta en pendiente',
                            'success'
                        )
                    }
                })
            });

            // Agregarle los botones a la celda

            celdaAcciones.appendChild(botonAceptar);
            celdaAcciones.appendChild(botonRechazar);
            celdaAcciones.appendChild(botonPendiente);
        }


    });
};


mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);