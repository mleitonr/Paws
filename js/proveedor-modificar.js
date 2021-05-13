'use strict';

let usuarioConectado = sessionStorage.getItem('usuarioConectado');

const inputNombre = document.querySelector('#txt-nombre');
const inputApellido1 = document.querySelector('#txt-apellido1');
const inputApellido2 = document.querySelector('#txt-apellido2');
const inputIdentificacion = document.querySelector('#num-identificacion');
const inputNacimiento = document.querySelector('#nacimiento');
const inputNumeroTelefono = document.querySelector('#num-telefono');
const inputCorreo = document.querySelector('#txt-correo');
const inputProvincia = document.querySelector('#provincias');
const inputCanton = document.querySelector('#cantones');
const inputDistrito = document.querySelector('#distritos');
const inputNombreEmpresa = document.querySelector('#txt-nombre-empresa');
const inputNombreRepEmpresa = document.querySelector('#txt-nombre-rep-empresa');
const inputApellido1RepEmpresa = document.querySelector('#txt-apellido1-rep-empresa');
const inputApellido2RepEmpresa = document.querySelector('#txt-apellido2-rep-empresa');
const inputNacimientoRepEmpresa = document.querySelector('#nacimiento-rep-empresa');
const inputCedJuridicaEmpresa = document.querySelector('#ced-juridica-empresa');
const inputTelefonoEmpresa = document.querySelector('#num-tel-empresa');
const inputCorreoRepEmpresa = document.querySelector('#txt-correo-rep-empresa');
const btnGuardar = document.querySelector('#btn-guardar');

inputCorreo.disabled = true;

if (usuarioConectado) {

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

    // Inicio de formateo de fecha de empresa
    let fechaEmpresa = new Date(repNacimiento);
    let annoEmp = fechaEmpresa.getFullYear();
    let mesEmp = fechaEmpresa.getUTCMonth() + 1;
    let diaEmp = fechaEmpresa.getUTCDate();

    if (mesEmp < 10) {
        mesEmp = '0' + mesEmp;
    }
    if (diaEmp < 10) {
        diaEmp = '0' + diaEmp;
    }
    // Fin de formateo de fecha de empresa

    inputNombre.value = nombre;
    inputApellido1.value = apellido1;
    inputApellido2.value = apellido2;
    inputIdentificacion.value = identificacion;
    inputNacimiento.value = `${anno}-${mes}-${dia}`;
    inputNumeroTelefono.value = telefono;
    inputCorreo.value = correo;
    inputProvincia.value = provincia;
    inputCanton.value = canton;
    inputDistrito.value = distrito;
    //Empresa
    inputNombreEmpresa.value = empresa;
    inputNombreRepEmpresa.value = repNombre;
    inputApellido1RepEmpresa.value = repApellido1;
    inputApellido2RepEmpresa.value = repApellido2;
    inputNacimientoRepEmpresa.value = `${annoEmp}-${mesEmp}-${diaEmp}`;
    inputCedJuridicaEmpresa.value = cedJuridica;
    inputTelefonoEmpresa.value = telEmpresa;
    inputCorreoRepEmpresa.value = repCorreo;
    

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


const calcularEdad = (nacimiento) => {
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear();

    if (fechaActual.getMonth() < nacimiento.getMonth()) {
        edad = edad - 1;
    } else {
        if ((fechaActual.getMonth() == nacimiento.getMonth()) && (fechaActual.getUTCDate() < nacimiento.getUTCDate())) {
            edad = edad - 1;
        }
    }
    return edad;
};

const validar = () => {

    let error = false;
    let inputsRequeridos = document.querySelectorAll('.form-duenno :required');

    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    let regexCorreo = /^[a-zA-Z.0-9]+@{1}[a-zA-Z.]+$/;

    if (regexCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }

    let fechaNacGeneral = new Date(inputNacimiento.value);
    let fechaNacimiento = fechaNacGeneral.toDateString(inputNacimiento.value);

    let edad = calcularEdad(fechaNacGeneral);

    if (edad < 18) {
        error = true;
        inputNacimiento.classList.add('error');
    } else {
        inputNacimiento.classList.remove('error');
    }


    if (error == false) {
        obtenerDatos();

    } else if (edad < 18) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se cumple con requisito de edad',
            'text': 'Debe ser mayor a 18 años para registrarse',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'Faltan campos por llenar',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }

};

const obtenerDatos = () => {

    let nombre = inputNombre.value
    let apellido1 = inputApellido1.value
    let apellido2 = inputApellido2.value
    let identificacion = inputIdentificacion.value
    let nacimiento = inputNacimiento.value
    let telefono = inputNumeroTelefono.value
    let correo = inputCorreo.value
    let provincia = inputProvincia.value
    let canton = inputCanton.value
    let distrito = inputDistrito.value
    //Empresa
    let empresa = inputNombreEmpresa.value
    let repNombre = inputNombreRepEmpresa.value
    let repApellido1 = inputApellido1RepEmpresa.value
    let repApellido2 = inputApellido2RepEmpresa.value
    let repNacimiento = inputNacimientoRepEmpresa.value
    let cedJuridica = inputCedJuridicaEmpresa.value
    let telEmpresa = inputTelefonoEmpresa.value
    let repCorreo = inputCorreoRepEmpresa.value

    modificarPerfilProveedor(nombre, apellido1, apellido2, identificacion, nacimiento, telefono, correo, provincia, canton, distrito, empresa, repNombre, repApellido1, repApellido2, repNacimiento, cedJuridica, telEmpresa, repCorreo);

};

if (sessionStorage.getItem('usuarioConectado')) {
    usuarioConectado = JSON.parse(sessionStorage.getItem('usuarioConectado'));
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe iniciar sessión primero.'
    }).then(() => {
        window.location.href = 'index.html';
    });
}

btnGuardar.addEventListener('click', validar);