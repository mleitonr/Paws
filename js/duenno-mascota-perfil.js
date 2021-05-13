'use strict';

const mascotaSeleccionada = sessionStorage.getItem('mascotaSeleccionada');

if (mascotaSeleccionada) {
    //Datos de la mascota
    let datos = JSON.parse(mascotaSeleccionada);

    let imagen = datos['imagen'];
    let nombre = datos['nombre'];
    let tipo = datos['tipo'];
    let caracteristicas = datos['caracteristicas'];
    let raza = datos['raza'];
    let padecimientos = datos['padecimientos'];
    let vacunas = datos['vacunas'];
    let edad = datos['edad'];
    let telefono = datos['telefono'];

    //Ligar datos al DOM - Dueño
    document.getElementById('nombre').innerHTML = nombre;
    document.getElementById('tipo').innerHTML = tipo;
    document.getElementById('raza').innerHTML = raza;
    document.getElementById('edad').innerHTML = edad;
    document.getElementById('caracteristicas').innerHTML = caracteristicas;
    document.getElementById('padecimiento').innerHTML = padecimientos;
    document.getElementById('vacuna').innerHTML = vacunas;
    document.getElementById('telefono').innerHTML = telefono;
    document.getElementById('imagen-perfil').src = imagen;

} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'No ha iniciado sesión',
        'text': 'Debe seleccionar una mascota primero',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'duenno-listar-mascotas.html';
    });
}