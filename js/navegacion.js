'use-strict';

let usuario;

const btnCerrarSesion = document.querySelector('#btn-cerrar-sesion');

const redirigirUsuario = () => {
    switch (usuario.tipo) {

        case 'Administrador':
            /*window.location.href = '';*/
        break;

        case 'Proveedor':
            /*window.location.href = '';*/
        break;

        case 'Duenno':
            window.location.href = 'home-duenno.html';
        break;

    }
}



/*if(sessionStorage.getItem('usuarioConectado')){
    usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    redirigirUsuario();
}else{
    window.location.href = 'index.html';
}*/

