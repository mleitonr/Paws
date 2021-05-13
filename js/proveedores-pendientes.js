'use strict';

const aceptarProveedor = async(pnombre, pcorreo) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/aceptar-proveedor',
        responseType: 'json',
        data: {
            nombre: pnombre,
            correo: pcorreo,
            estado: 'Activo'
        }
    }).then((response) => {
        
        Swal.fire({
            'icon': 'success',
            'title': 'Usuario proveedor aceptado',
            'text': 'El usuario proveedor ha sido aceptado correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'admin-listar-solicitudes-proveedores.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'El usuario proveedor no pudo ser aceptado',
            'text': `Ocurrió el siguiente error {error}`,
            'icon': 'error'
        })
    });
};

const rechazarProveedor = async(pnombre, pcorreo) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/rechazar-proveedor',
        responseType: 'json',
        data: {
            nombre: pnombre,
            correo: pcorreo,
            estado: 'Inactivo'
        }
    }).then((response) => {
        
        Swal.fire({
            'icon': 'success',
            'title': 'Usuario proveedor rechazado',
            'text': 'El usuario proveedor ha sido rechazado correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'admin-listar-solicitudes-proveedores.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'El usuario proveedor no pudo ser rechazado',
            'text': `Ocurrió el siguiente error {error}`,
            'icon': 'error'
        })
    });
};