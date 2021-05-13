'use strict';

const registrarTiposServicios = async(pnombre, pestado) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-tipo-servicio',
            responseType: 'json',
            data: {
                nombre: pnombre,
                estado: pestado
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El tipo de servicio se registró con éxito',
                'text': 'Información registrada',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'admin-listar-tipos-servicios.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el tipo de servicio',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

const obtenerTipoServicio = async() => {
    let listaTipoServicio;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-tipo-servicio',
            responseType: 'json'
        })
        .then((response) => {
            listaTipoServicio = response.data.tiposServicios;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaTipoServicio;
};

const modificarTipoServicio = async(pnombre,pestado) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-tipo-servicio',
            responseType: 'json',
            data: {
                nombre: pnombre,
                estado: pestado
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Tipo de servicio modificado',
                'text': 'La información fue actualizada correctamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'admin-listar-tipos-servicios.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el tipo de servicio',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

const eliminarTipoServicio = async(pnombre) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-tipo-servicio',
            responseType: 'json',
            data: {
                nombre: pnombre
            }
        })
        .then((response) => {
            Swal.fire(
                '',
                'El tipo de servicio ha sido eliminado',
                'success'
            ).then(() => {
                window.location.href = 'admin-listar-tipos-servicios.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};