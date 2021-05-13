'use strict';

const inputCorreo = document.querySelector('#txt-correo');
const inputContrasennaNueva = document.querySelector('#txt-contrasenna');
const inputConfirmacionContrasenna = document.querySelector('#txt-confirm-contrasenna');
const btnCrear = document.querySelector('#btn-crear');

const validar = () => {
    let error = false;
    let inputsRequeridos = document.querySelectorAll('.login-form :required');
    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;
    let rolActual = document.getElementById("roles").value;

    if (regexCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }

    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if(inputContrasennaNueva.value == inputConfirmacionContrasenna.value){
        error = false;
        inputContrasennaNueva.classList.remove('error');
        inputConfirmacionContrasenna.classList.remove('error');
    }else {
        error = true;
        inputContrasennaNueva.classList.add('error');
        inputConfirmacionContrasenna.classList.add('error');        
    }

    if (error == false) {

        switch (rolActual) {
            case 'Proveedor':                
                crearContrasennaProveedor(inputCorreo.value, inputContrasennaNueva.value);
                break;
            case 'Duenno':
                crearContrasennaDuenno(inputCorreo.value, inputContrasennaNueva.value);
                break;
            default:
                Swal.fire({
                    'icon': 'warning',
                    'title': 'Tipo de usuario',
                    'text': 'Por favor seleccione el tipo de usuario al que pertenece',
                    'confirmButtonText': 'Entendido'
                });

        }
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo crear la contraseña',
            'text': 'Por favor revise los campos resaltados y que la contraseña coincida con la confirmación',
            'confirmButtonText': 'Entendido'
        });

    }
};

const crearContrasennaDuenno = async(pcorreo, pcontrasenna) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-duenno',
        responseType: 'json',
        data: {
            correo: pcorreo,
            contrasenna: pcontrasenna,
            estado: 'Activo'

        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'Contraseña creada',
            'text': 'La contraseña fue actualizada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'inicio-sesion.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'No se pudo crear la contraseña',
            'text': `Ocurrió el siguiente error {error}`,
            'icon': 'error'
        })
    });
};

const crearContrasennaProveedor = async (pcorreo, pcontrasenna) => {
   
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-proveedor',
        responseType: 'json',
        data: {
            correo: pcorreo,
            contrasenna: pcontrasenna
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'Contraseña creada',
            'text': 'La contraseña fue actualizada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'inicio-sesion.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'No se pudo crear la contraseña',
            'text': `Ocurrió el siguiente error {error}`,
            'icon': 'error'
        })
    });
};

btnCrear.addEventListener('click', validar);