'use strict';

const inputNombre = document.querySelector('#txt-nombre');
const inputCorreo = document.querySelector('#txt-correo');
const inputTelefono = document.querySelector('#txt-telefono');
const inputTexto = document.querySelector('#txt-mensaje');
const btnEnviar = document.querySelector('#btn-enviar');

const validar = () => {
    let error = false;

    let regexCorreo = /^[a-zA-Z.0-9]+@{1}[a-zA-Z.]+$/;

    if(regexCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('error');
    }else{
        inputCorreo.classList.remove('error');
    }

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }

    if (inputTelefono.value == '') {
        error = true;
        inputTelefono.classList.add('error');
    } else {
        inputTelefono.classList.remove('error');
    }

    if (inputTexto.value == '') {
        error = true;
        inputTexto.classList.add('error');
    } else {
        inputTexto.classList.remove('error');
    }

    if (error == false) {
        imprimir();
    }else{
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo enviar el formulario',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }     
    
};


const imprimir = () =>{
    let nombre = inputNombre.value;
    let correo = inputCorreo.value;
    let telefono = inputTelefono.value;
    let interes = selectInteres.value;
    let texto = inputTexto.value;

    console.log(nombre, correo, telefono, interes, texto);
    
    Swal.fire({
        'icon': 'success',
        'title': 'La información va en camino',
        'text': 'Gracias! Pronto estaremos en contacto!',
        'confirmButtonText': 'Entendido'
    });
    
};

btnEnviar.addEventListener('click', validar);

function aboutNav() {
    let element = document.getElementById('aboutUs');
    element.scrollIntoView();
}

function contactNav() {
    let element = document.getElementById('contactUs');
    element.scrollIntoView();
}