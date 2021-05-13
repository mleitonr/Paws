'use strict';

const usuarioConectado = sessionStorage.getItem('usuarioConectado');

if (usuarioConectado) {
    //Datos del proveedor
    let datos = JSON.parse(usuarioConectado);
    let nombre = datos['nombre'];
    let apellido1 = datos['apellido1'];
    let apellido2 = datos['apellido2'];
    let identificacion = datos['identificacion'];
    let nacimiento = datos['nacimiento'];
    let telefono = datos['telefono'];
    let correo = datos['correo'];


    // Inicio de formateo de fecha
    let fecha = new Date(nacimiento);
    let anno = fecha.getFullYear();
    let mes = fecha.getUTCMonth() + 1;
    let dia = fecha.getUTCDate();

    if (mes < 10) {
        mes = '0' + mes;
    }
    if (dia < 10) {
        dia = '0' + dia;
    }
    // Fin de formateo de fecha

    //Ligar datos al DOM - Proveedor
    document.getElementById('nombreCompleto').innerHTML = nombre + ' ' + apellido1 + ' ' + apellido2;
    document.getElementById('identificacion').innerHTML = identificacion;
    document.getElementById('nacimiento').innerHTML = `${mes}-${dia}-${anno}`;
    document.getElementById('correo').innerHTML = correo;
    document.getElementById('telefono').innerHTML = telefono;

} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'No ha iniciado sesión',
        'text': 'Debe iniciar sesión para acceder a su perfil',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'index.html';
    });
}

//Despliegue del mapa
function initMap() {
    
    const uluru = { lat: 9.9540959, lng: -84.2283993 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    // Posición del marcador
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}