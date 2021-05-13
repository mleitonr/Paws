'use strict';

const servicioSeleccionado = sessionStorage.getItem('servicioSeleccionado');

let registrarPago;
const btnPagar = document.querySelector('#btn-pagar');


const validar = () => {

    let error = false;

    let inputsRequeridos = document.querySelectorAll('.form-pago :required');
    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });


    if (error == false) {
        Swal.fire({
            'icon': 'success',
            'title': '¡Gracias!',
            'text': 'El pago ha sido procesado',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'duenno-perfil.html';
        });
    }
    else {
        Swal.fire({
            'icon': 'warning',
            'title': 'Faltan campos por llenar',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }

};

btnPagar.addEventListener('click', validar);