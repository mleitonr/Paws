'use strict';

const registrarUsuarioProveedor = async(pfoto, pnombre, papellido1, papellido2, pidentificacion, pnacimiento, ptelefono, pcorreo, pprovincia, pcanton, pdistrito, pempresa, prepNombre, prepApellido1, prepApellido2, prepNacimiento, pcedJuridica, ptelEmpresa, prepCorreo, pestado) => {

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-proveedor',
        responseType: 'json',
        data: {
            imagen: pfoto,
            nombre: pnombre,
            apellido1: papellido1,
            apellido2: papellido2,
            identificacion: pidentificacion,
            nacimiento: pnacimiento,
            telefono: ptelefono,
            correo: pcorreo,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            //Info empresa
            empresa: pempresa,
            repNombre: prepNombre,
            repApellido1: prepApellido1,
            repApellido2: prepApellido2,
            repNacimiento: prepNacimiento,
            cedJuridica: pcedJuridica,
            telEmpresa: ptelEmpresa,
            repCorreo: prepCorreo,
            estado: pestado
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'Su cuenta se registro con éxito',
            'text': 'Por favor, espere la aprobación del administrador',
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

const obtenerUsuariosProveedores = async() => {
    let listaUsuariosProveedores;

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-proveedores',
        responseType: 'json'
    }).then((response) => {
        listaUsuariosProveedores = response.data.proveedores;
    }).catch((error) => {
        console.log(error);
    });
    return listaUsuariosProveedores;
};

const modificarUsuarioProveedor = async(pnombre, papellido1, papellido2, pidentificacion, pnacimiento, ptelefono, pcorreo, pprovincia, pcanton, pdistrito, pempresa, prepNombre, prepApellido1, prepApellido2, prepNacimiento, pcedJuridica, ptelEmpresa, prepCorreo, pestado) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-proveedor',
        responseType: 'json',
        data: {
            nombre: pnombre,
            apellido1: papellido1,
            apellido2: papellido2,
            identificacion: pidentificacion,
            nacimiento: pnacimiento,
            telefono: ptelefono,
            correo: pcorreo,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            //Info empresa
            empresa: pempresa,
            repNombre: prepNombre,
            repApellido1: prepApellido1,
            repApellido2: prepApellido2,
            repNacimiento: prepNacimiento,
            cedJuridica: pcedJuridica,
            telEmpresa: ptelEmpresa,
            repCorreo: prepCorreo,
            estado: pestado
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

const modificarPerfilProveedor = async(pnombre, papellido1, papellido2, pidentificacion, pnacimiento, ptelefono, pcorreo, pprovincia, pcanton, pdistrito, pempresa, prepNombre, prepApellido1, prepApellido2, prepNacimiento, pcedJuridica, ptelEmpresa, prepCorreo) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-proveedor',
        responseType: 'json',
        data: {
            nombre: pnombre,
            apellido1: papellido1,
            apellido2: papellido2,
            identificacion: pidentificacion,
            nacimiento: pnacimiento,
            telefono: ptelefono,
            correo: pcorreo,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            //Info empresa
            empresa: pempresa,
            repNombre: prepNombre,
            repApellido1: prepApellido1,
            repApellido2: prepApellido2,
            repNacimiento: prepNacimiento,
            cedJuridica: pcedJuridica,
            telEmpresa: ptelEmpresa,
            repCorreo: prepCorreo,
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'Usuario modificado',
            'text': 'La información fue actualizada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'proveedor-perfil.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'No se pudo modificar el usuario',
            'text': `Ocurrió el siguiente error {error}`,
            'icon': 'error'
        })
    });
};

const eliminarUsuarioProveedor = async (pcorreo) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-proveedor',
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