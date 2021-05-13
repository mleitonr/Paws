'use strict';

const registrarVacunasAdmin = async(pnombre, pespecie) => {

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-vacunas-admin',
        responseType: 'json',
        data: {
            nombre: pnombre,
            especie: pespecie,
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'La vacuna ha sido registrada con éxito',
            'text': 'Por favor verifique el sistema',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'admin-listar-vacunas.html';
        });
    }).catch((error) => {
        Swal.fire({
            title: 'No se pudo registrar la vacuna',
            text: 'Ocurrió el siguiente error {error}',
            icon: 'error'
        })
    });
};


const obtenerVacunasAdmin = async() => {
    let listaVacunasAdmin;

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-vacunas-admin',
        responseType: 'json'
    }).then((response) => {
        listaVacunasAdmin = response.data.vacunasAdmin;
    }).catch((error) => {
        console.log(error);
    });
    return listaVacunasAdmin;
};

const modificarVacunasAdmin = async(pnombre, pespecie) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-vacunas-admin',
        responseType: 'json',
        data: {
            nombre: pnombre,
            especie: pespecie
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'Vacuna modificada',
            'text': 'La información fue actualizada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'admin-listar-vacunas.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'No se pudo registrar la vacuna',
            'text': `Ocurrió el siguiente error {error}`,
            'icon': 'error'
        })
    });
};


const eliminarVacunasAdmin = async(pnombre) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-vacunas-admin',
        responseType: 'json',
        data: {
            nombre: pnombre
        }
    }).then((response) => {
        Swal.fire(
            '',
            'La vacuna ha sido eliminado',
            'success'
        ).then(() => {
            window.location.href = 'admin-listar-vacunas.html';
        });
    }).catch((error) => {
        console.log(error)
    });
};