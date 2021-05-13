'use strict';

const registrarServicioProveedor = async (pfoto, pnombre, ptipo, pdesde, phasta, pprecio, pdescripcion, pcorreoProveedor) => {

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-servicio-proveedor',
        responseType: 'json',
        data: {
            imagen: pfoto,
            nombre: pnombre,
            tipo: ptipo,
            desdeHorario: pdesde,
            hastaHorario: phasta,
            precio: pprecio,
            descripcion: pdescripcion,
            correoProveedor: pcorreoProveedor
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'El servicio ha sido registrado con éxito',
            'text': 'Por favor verifique el sistema',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'proveedor-listar-servicios.html';
        });
    }).catch((error) => {
        Swal.fire({
            title: 'No se pudo registrar el servicio',
            text: 'Ocurrió el siguiente error {error}',
            icon: 'error'
        })
    });
};


const obtenerServicioProveedor = async () => {
    let listaServicioProveedor;
    const usuarioConectado = sessionStorage.getItem('usuarioConectado');
    let datos = JSON.parse(usuarioConectado);
    let correoProveedor = datos['correo'];
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/listar-servicio-proveedor',
        responseType: 'json',
        data: {
            correoProveedor: correoProveedor
        }
    }).then((response) => {
        listaServicioProveedor = response.data.servicioProveedor;
    }).catch((error) => {
        console.log(error);
    });
    return listaServicioProveedor;
};

const obtenerServiciosaDuenno = async () => {
    let listaServicioProveedor;
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-servicios-proveedores-todos',
        responseType: 'json',
    }).then((response) => {
        listaServicioProveedor = response.data.servicioProveedor;
    }).catch((error) => {
        console.log(error);
    });
    return listaServicioProveedor;
};


const modificarServicioProveedor = async (pnombre, ptipo, pDesdeHorario, pHastaHorario, pprecio, pdescripcion, pestado) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-servicio-proveedor',
        responseType: 'json',
        data: {
            nombre: pnombre,
            tipo: ptipo,
            desdeHorario: pDesdeHorario,
            hastaHorario: pHastaHorario,
            precio: pprecio,
            descripcion: pdescripcion,
            estado: pestado
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'Servicio modificado',
            'text': 'La información fue actualizada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'proveedor-listar-servicios.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'No se pudo registrar el servicio',
            'text': `Ocurrió el siguiente error {error}`,
            'icon': 'error'
        })
    });
};


const eliminarServicioProveedor = async (pnombre) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-servicio-proveedor',
        responseType: 'json',
        data: {
            nombre: pnombre
        }
    }).then((response) => {
        Swal.fire(
            '',
            'El servicio ha sido eliminado',
            'success'
        ).then(() => {
            window.location.href = 'proveedor-listar-servicios.html';
        });
    }).catch((error) => {
        console.log(error)
    });
};