'use strict';

const tabla = document.querySelector('#tbl-usuarios-prov tbody');
const inputFiltro = document.querySelector('#txt-filtro');


const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaUsuariosDenunciados.forEach(usuario => {
        if (usuario.nombre.toLowerCase().includes(filtro) || usuario.identificacion.toLowerCase().includes(filtro) || usuario.correo.toLowerCase().includes(filtro) || usuario.tipo.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = usuario.nombre;
            fila.insertCell().innerHTML = usuario.identificacion;
            fila.insertCell().innerHTML = usuario.correo;
            fila.insertCell().innerHTML = usuario.tipo;


            let celdaAcciones = fila.insertCell();

            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'showCancelButton': true,
                    'title': '¿Está seguro?',
                    'text': '¿Está seguro que desea eliminar el usuario?',
                    'confirmButtonText': 'Sí, estoy seguro',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true

                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'El usuario ha sido eliminado',
                            'success'
                        )
                    }
                })
            });

            // Agregarle los botones a la celda

            celdaAcciones.appendChild(botonEliminar);

        }


    });
};



mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
