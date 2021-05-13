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
    let provincia = datos['provincia'];
    let canton = datos['canton'];
    let distrito = datos['distrito'];
    let imagen = datos['imagen'];

    //Datos de la empresa
    let empresa = datos['empresa'];
    let repNombre = datos['repNombre'];
    let repApellido1 = datos['repApellido1'];
    let repApellido2 = datos['repApellido2'];
    let repNacimiento = datos['repNacimiento'];
    let cedJuridica = datos['cedJuridica'];
    let telEmpresa = datos['telEmpresa'];
    let repCorreo = datos['repCorreo'];

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
    document.getElementById('nombre-completo').innerHTML = nombre + ' ' + apellido1 + ' ' + apellido2;
    document.getElementById('identificacion').innerHTML = identificacion;
    document.getElementById('nacimiento').innerHTML = `${mes}-${dia}-${anno}`;
    document.getElementById('correo').innerHTML = correo;
    document.getElementById('telefono').innerHTML = telefono;
    document.getElementById('direccion').innerHTML = provincia + ', ' + canton + ', ' + distrito;
    document.getElementById('imagen-perfil').src = imagen;

    //Ligar datos al DOM - Empresa del proveedor
    document.getElementById('cedJuridica').innerHTML = cedJuridica;
    document.getElementById('empresa').innerHTML = empresa;
    document.getElementById('repNombreCompleto').innerHTML = repNombre + ' ' + repApellido1 + ' ' + repApellido2;
    document.getElementById('repCorreo').innerHTML = repCorreo;
    document.getElementById('telEmpresa').innerHTML = telEmpresa;
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