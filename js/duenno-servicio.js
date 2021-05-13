'use strict';

const registrarUsuarioDuenno = async (pfoto, pnombre, papellido1, papellido2, ptipoIdentificacion, pidentificacion, pnacimiento, ptelefono, pcorreo, psexo, pestado) => {

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-duenno',
        responseType: 'json',
        data: {
            imagen: pfoto,
            nombre: pnombre,
            apellido1: papellido1,
            apellido2: papellido2,
            tipoIdentificacion: ptipoIdentificacion,
            identificacion: pidentificacion,
            nacimiento: pnacimiento,
            telefono: ptelefono,
            correo: pcorreo,
            sexo: psexo,
            estado: pestado,
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'Su cuenta se registró con éxito',
            'text': 'Por favor revise su correo electrónico',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'inicio-sesion.html';
        });
    }).catch((error) => {
        Swal.fire({
            title: 'No se pudo registrar el usuario',
            text: 'Ocurrió el siguiente error {error}',
            icon: 'error'
        })
    });
};


const obtenerUsuariosDuennos = async() => {
    let listaUsuariosDuennos;

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-duennos',
        responseType: 'json'
    }).then((response) => {
        listaUsuariosDuennos = response.data.duennos;
    }).catch((error) => {
        console.log(error);
    });
    return listaUsuariosDuennos;
};

const modificarUsuarioDuenno = async(pnombre, papellido1, papellido2, ptipoIdentificacion, pidentificacion, pnacimiento, ptelefono, pcorreo, psexo) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-duenno',
        responseType: 'json',
        data: {
            
            nombre: pnombre,
            apellido1: papellido1, 
            apellido2: papellido2,
            tipoIdentificacion: ptipoIdentificacion,
            identificacion: pidentificacion,
            nacimiento: pnacimiento,
            telefono: ptelefono,
            correo: pcorreo,
            sexo: psexo
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'Usuario modificado',
            'text': 'La información fue actualizada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'listado-usuarios.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'No se pudo modificar el usuario',
            'text': `Ocurrió el siguiente error {error}`,
            'icon': 'error'
        })
    });
};

const modificarPerfilDuenno = async(pnombre, papellido1, papellido2, ptipoIdentificacion, pidentificacion, pnacimiento, ptelefono, pcorreo, pcontrasenna, psexo) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-duenno',
        responseType: 'json',
        data: {
            
            nombre: pnombre,
            apellido1: papellido1, 
            apellido2: papellido2,
            tipoIdentificacion: ptipoIdentificacion,
            identificacion: pidentificacion,
            nacimiento: pnacimiento,
            telefono: ptelefono,
            correo: pcorreo,
            contrasenna: pcontrasenna,
            sexo: psexo
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'Usuario modificado',
            'text': 'La información fue actualizada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'duenno-perfil.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'No se pudo modificar el usuario',
            'text': `Ocurrió el siguiente error {error}`,
            'icon': 'error'
        })
    });
};

const eliminarUsuarioDuenno = async (pcorreo) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-duenno',
        responseType: 'json',
        data: {
            correo: pcorreo
        }
    }).then((response) => {
        Swal.fire(
            '',
            'El usuario ha sido eliminado',
            'success'
        ).then(() => {
            window.location.href = 'listado-usuarios.html';
        });
    }).catch((error) => {
        console.log(error)
    });
};