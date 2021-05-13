'use strict';

const tabla = document.querySelector('#tbl-solicitudes-proveedores tbody');


let listaSolicitudesProveedores = [];

const llenarListaSolicitudesProveedores = async () => {
    listaSolicitudesProveedores = await obtenerUsuariosProveedores();
    mostrarTablaSolicitudesProveedores();
};

const mostrarTablaSolicitudesProveedores = () => {
    
    tabla.innerHTML = '';
    listaSolicitudesProveedores.forEach(solicitudProveedor => {
        if (solicitudProveedor.estado.includes('Pendiente autorización')) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = solicitudProveedor.nombre;
            fila.insertCell().innerHTML = solicitudProveedor.apellido1;
            fila.insertCell().innerHTML = solicitudProveedor.apellido2;
            fila.insertCell().innerHTML = solicitudProveedor.correo;
            fila.insertCell().innerHTML = solicitudProveedor.estado;
            
            let celdaAcciones = fila.insertCell();

            let botonAceptar = document.createElement('button');
            botonAceptar.innerText = 'Aceptar';
            botonAceptar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': 'Está seguro',
                    'text': 'Está seguro que desea aceptar al proveedor?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        aceptarProveedor(solicitudProveedor.nombre, solicitudProveedor.correo, solicitudProveedor.estado);
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
                    'text': 'Está seguro que desea rechazar la solicitud del proveedor?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        rechazarProveedor(solicitudProveedor.nombre, solicitudProveedor.correo, solicitudProveedor.estado);
                    }
                })
            });

            // Agregarle los botones a la celda

            celdaAcciones.appendChild(botonAceptar);
            celdaAcciones.appendChild(botonRechazar);

        }


    });
};

llenarListaSolicitudesProveedores();
