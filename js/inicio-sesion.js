'use strict';

const inputCorreo = document.querySelector('#txt-correo');
const inputContrasenna = document.querySelector('#txt-contrasenna');
const btnIniciar = document.querySelector('#btn-iniciar');

const validar = () => {
    let error = false;
    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;
    let rolActual = document.getElementById("roles").value;

    if (regexCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }

    if (inputContrasenna.value == '') {
        error = true;
        inputContrasenna.classList.add('error');
    } else {
        inputContrasenna.classList.remove('error');
    }

    if (error == false) {

        switch (rolActual) {
            case 'Administrador':
                iniciarSesionAdmin(inputCorreo.value, inputContrasenna.value);
                break;
            case 'Proveedor':
                iniciarSesionProveedor(inputCorreo.value, inputContrasenna.value);
                break;
            case 'Duenno':
                iniciarSesionDuenno(inputCorreo.value, inputContrasenna.value);
                break;
            default:
                Swal.fire({
                    'icon': 'warning',
                    'title': 'Tipo de usuario',
                    'text': 'Por favor seleccione el tipo de usuario',
                    'confirmButtonText': 'Entendido'
                });

        }
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo iniciar sesión',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};

const iniciarSesionAdmin = async (pcorreo, pcontrasenna) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/validar-credenciales-admin',
        responseType: 'json',
        data: {
            correo: pcorreo,
            contrasenna: pcontrasenna
        }
    }).then((response) => {

        if (response.data.estado == 'No encontrado') {
            Swal.fire({
                'icon': 'warning',
                'title': 'No ha podido iniciar sesión',
                'text': 'Usuario, contraseña o tipo incorrectos',
                'confirmButtonText': 'Entendido'
            });
        } else {
            Swal.fire({
                'icon': 'success',
                'title': 'Bienvenido',
                'text': 'Ha iniciado sesión correctamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                if (response.data.usuarioAdministrador.estado == 'pendiente') {
                    window.location.href = 'index.html';
                } else {
                    sessionStorage.setItem('usuarioConectado', JSON.stringify(response.data.usuarioAdministrador));
                    window.location.href = 'home-administrador.html';
                }
            });
        }

    }).catch((error) => {
        console.log(error)
    });
};


const iniciarSesionProveedor = async (pcorreo, pcontrasenna) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/validar-credenciales-proveedor',
        responseType: 'json',
        data: {
            correo: pcorreo,
            contrasenna: pcontrasenna
        }
    }).then((response) => {

        if (response.data.estado == 'No encontrado') {
            Swal.fire({
                'icon': 'warning',
                'title': 'No ha podido iniciar sesión',
                'text': 'Usuario, contraseña o tipo incorrectos',
                'confirmButtonText': 'Entendido'
            });
        } else {
            Swal.fire({
                'icon': 'success',
                'title': 'Bienvenido',
                'text': 'Ha iniciado sesión correctamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                if (response.data.usuarioProveedor.estado == 'pendiente') {
                    window.location.href = 'index.html';
                } else {
                    sessionStorage.setItem('usuarioConectado', JSON.stringify(response.data.usuarioProveedor));
                    window.location.href = 'home-proveedor.html';
                }
            });
        }

    }).catch((error) => {
        console.log(error)
    });
};

const iniciarSesionDuenno = async (pcorreo, pcontrasenna) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/validar-credenciales-duenno',
        responseType: 'json',
        data: {
            correo: pcorreo,
            contrasenna: pcontrasenna
        }
    }).then((response) => {

        if (response.data.estado == 'No encontrado') {
            Swal.fire({
                'icon': 'warning',
                'title': 'No ha podido iniciar sesión',
                'text': 'Usuario, contraseña o tipo incorrectos',
                'confirmButtonText': 'Entendido'
            });
        } else {
            Swal.fire({
                'icon': 'success',
                'title': 'Bienvenido',
                'text': 'Ha iniciado sesión correctamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                if (response.data.usuarioDuenno.estado == 'pendiente') {
                    Swal.fire({
                        'icon': 'warning',
                        'title': 'No ha podido iniciar sesión',
                        'text': 'Pendiente de verificacion de contraseña',
                        'confirmButtonText': 'Entendido'
                    });
                    window.location.href = 'index.html';
                } else {
                    sessionStorage.setItem('usuarioConectado', JSON.stringify(response.data.usuarioDuenno));
                    window.location.href = 'duenno-home.html';
                }
            });
        }

    }).catch((error) => {
        console.log(error)
    });
};

btnIniciar.addEventListener('click', validar);