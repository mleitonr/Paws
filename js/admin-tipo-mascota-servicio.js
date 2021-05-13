'use strict';

const registrarTiposMascotas = async(pnombre, pestado) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-tipos-mascota',
            responseType: 'json',
            data: {
                nombre: pnombre,
                estado: pestado
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El tipo de mascota se registró con éxito',
                'text': 'Información registrada',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'admin-listar-tipos-mascotas.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el tipo de mascota',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

const obtenerTiposMascotas = async() => {
    let listaTiposMascotas;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-tipos-mascota',
            responseType: 'json'
        })
        .then((response) => {
            listaTiposMascotas = response.data.tiposMascotas;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaTiposMascotas;
};

const modificarTipoMascota = async(pnombre,pestado) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-tipos-mascota',
            responseType: 'json',
            data: {
                nombre: pnombre,
                estado: pestado
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Tipo de mascota modificado',
                'text': 'La información fue actualizada correctamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'admin-listar-tipos-mascotas.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el tipo de mascota',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

const eliminarTipoMascota = async(pnombre) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-tipo-mascota',
            responseType: 'json',
            data: {
                nombre: pnombre
            }
        })
        .then((response) => {
            Swal.fire(
                '',
                'El tipo de mascota ha sido eliminado',
                'success'
            ).then(() => {
                window.location.href = 'admin-listar-tipos-mascotas.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};