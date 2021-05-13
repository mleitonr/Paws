'use-strict';
const btnCerrarSesion = document.querySelector('#btn-cerrar-sesion');

const cerrarSesion = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = 'index.html';
};

btnCerrarSesion.addEventListener('click', cerrarSesion);