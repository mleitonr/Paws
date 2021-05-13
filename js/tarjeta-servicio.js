'use strict';

const registrarTarjeta = async(ptitular, pnumTarjeta, pfechaExpiracion, pcodigoTarjeta, pcorreoDuenno) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-tarjeta',
            responseType: 'json',
            data: {
                titular: ptitular,
                numTarjeta: pnumTarjeta,
                fechaExpiracion: pfechaExpiracion,
                codigoTarjeta: pcodigoTarjeta,
                correoDuenno: pcorreoDuenno
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su tarjeta se registró con éxito',
                'text': 'La información fue registrada',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'duenno-perfil.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar la tarjeta',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

const obtenerTarjeta = async() => {
    let listaTarjeta;
    const usuarioConectado = sessionStorage.getItem('usuarioConectado');
    let datos = JSON.parse(usuarioConectado);
    let correoDuenno = datos['correo'];

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/listar-tarjeta',
            responseType: 'json',
            data: {
                correoDuenno: correoDuenno
            }
        })
        .then((response) => {
            listaTarjeta = response.data.tarjetasDatos;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaTarjeta;
};

const modificarTarjeta = async(ptitular, pnumTarjeta, pfechaExpiracion, pcodigoTarjeta) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-tarjeta',
            responseType: 'json',
            data: {
                titular: ptitular,
                numTarjeta: pnumTarjeta,
                fechaExpiracion: pfechaExpiracion,
                codigoTarjeta: pcodigoTarjeta
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Tarjeta modificada',
                'text': 'La información fue actualizada correctamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'duenno-perfil.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el usuario',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

const eliminarTarjeta = async(ptitular) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-tarjeta',
            responseType: 'json',
            data: {
                titular: ptitular
            }
        })
        .then((response) => {
            Swal.fire(
                '',
                'La tarjeta ha sido eliminada',
                'success'
            ).then(() => {
                window.location.href = 'duenno-perfil.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};