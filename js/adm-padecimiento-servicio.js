'use strict';

const registrarTiposPadecimiento = async(pnombre, pespecie) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-tipos-padecimientos',
            responseType: 'json',
            data: {
                especie: pespecie,
                nombre: pnombre,
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El padecimiento se registro con éxito',
                'text': 'Información registrada',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'admin-listar-padecimientos.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el padecimiento',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

const obtenerPadecimiento = async() => {
    let listaPadecimientos;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-tipos-padecimientos',
            responseType: 'json'
        })
        .then((response) => {
            listaPadecimientos = response.data.tiposPadecimientos;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaPadecimientos;
};

const modificarPadecimiento = async(pnombre, pespecie) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-tipo-padecimiento',
            responseType: 'json',
            data: {
                especie: pespecie,
                nombre: pnombre,
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Padecimiento modificado',
                'text': 'La información fue actualizada correctamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'admin-listar-padecimientos.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el padecimiento',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

const eliminarPadecimiento = async(pnombre) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-tipo-padecimiento',
            responseType: 'json',
            data: {
                nombre: pnombre
            }
        })
        .then((response) => {
            Swal.fire(
                '',
                'El padecimiento ha sido eliminado',
                'success'
            ).then(() => {
                window.location.href = 'admin-listar-padecimientos.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};