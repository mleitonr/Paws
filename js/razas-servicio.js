'use strict';

const registrarRazasAdmin = async(pnombre, pespecie) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-razas',
        responseType: 'json',
        data: {
            nombre: pnombre,
            especie: pespecie,
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'La raza ha sido registrada con éxito',
            'text': 'Por favor verifique el sistema',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'admin-listar-razas.html';
        });
    }).catch((error) => {
        Swal.fire({
            title: 'No se pudo registrar la raza',
            text: 'Ocurrió el siguiente error {error}',
            icon: 'error'
        })
    });
};


const obtenerRazasAdmin = async() => {
    let listaRazas;
    
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-tipos-razas',
        responseType: 'json'
    }).then((response) => {
        listaRazas = response.data.tiposRazas;
    }).catch((error) => {
        console.log(error);
    });
    return listaRazas;
};


const modificarRazasAdmin = async(pnombre, pespecie) => {
    
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-tipo-razas',
        responseType: 'json',
        data: {
            nombre: pnombre,
            especie: pespecie
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'Raza modificada',
            'text': 'La información fue actualizada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'admin-listar-razas.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'No se pudo registrar la raza',
            'text': `Ocurrió el siguiente error {error}`,
            'icon': 'error'
        })
    });
};


const eliminarRazasAdmin = async(pnombre) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-tipo-razas',
        responseType: 'json',
        data: {
            nombre: pnombre
        }
    }).then((response) => {
        Swal.fire(
            '',
            'La raza ha sido eliminada',
            'success'
        ).then(() => {
            window.location.href = 'admin-listar-razas.html';
        });
    }).catch((error) => {
        console.log(error)
    });
};