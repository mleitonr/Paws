'use strict';

const tablaProveedor = document.querySelector('#tbl-usuarios-prov tbody');
const tablaDuenno = document.querySelector('#tbl-usuarios-duenn tbody');
const inputFiltroProv = document.querySelector('#txt-filtro-prov');
const inputFiltroDuenn = document.querySelector('#txt-filtro-duenn');
let listaUsuariosProveedores = [];
let listaUsuariosDuennos = [];

const llenarListaUsuariosProveedores = async () => {
    listaUsuariosProveedores = await obtenerUsuariosProveedores();
    mostrarTablaProveedores();
};

const llenarListaUsuariosDuennos = async () => {
    listaUsuariosDuennos = await obtenerUsuariosDuennos();
    mostrarTablaDuennos();
};

const mostrarTablaProveedores = async () => {
    let filtro = inputFiltroProv.value.toLowerCase();
    tablaProveedor.innerHTML = '';
    listaUsuariosProveedores.forEach(usuario => {
        if (usuario.nombre.toLowerCase().includes(filtro) || usuario.identificacion.toLowerCase().includes(filtro) || usuario.correo.toLowerCase().includes(filtro)) {
            let fila = tablaProveedor.insertRow();
            fila.insertCell().innerHTML = usuario.identificacion;
            fila.insertCell().innerHTML = usuario.nombre;
            fila.insertCell().innerHTML = usuario.apellido1;
            fila.insertCell().innerHTML = usuario.apellido2;
            fila.insertCell().innerHTML = usuario.correo;
            fila.insertCell().innerHTML = usuario.estado;


            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';
            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
                window.location.href = 'admin-proveedor-modificar.html';
            });

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
                        eliminarUsuarioProveedor(usuario.correo);
                    }
                })
            });

            // Agregarle los botones a la celda

            celdaAcciones.appendChild(botonModificar);
            celdaAcciones.appendChild(botonEliminar);
        }
    });
};


const mostrarTablaDuennos = async () => {
    let filtro = inputFiltroDuenn.value.toLowerCase();
    tablaDuenno.innerHTML = '';
    listaUsuariosDuennos.forEach(usuario => {
        if (usuario.nombre.toLowerCase().includes(filtro) || usuario.identificacion.toLowerCase().includes(filtro) || usuario.correo.toLowerCase().includes(filtro)) {
            let fila = tablaDuenno.insertRow();
            fila.insertCell().innerHTML = usuario.identificacion;
            fila.insertCell().innerHTML = usuario.nombre;
            fila.insertCell().innerHTML = usuario.apellido1;
            fila.insertCell().innerHTML = usuario.apellido2;
            fila.insertCell().innerHTML = usuario.correo;
            fila.insertCell().innerHTML = usuario.estado;


            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';
            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
                window.location.href = 'admin-duenno-modificar.html';
            });



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
                        eliminarUsuarioDuenno(usuario.correo);
                    }
                })
            });

            // Agregarle los botones a la celda

            celdaAcciones.appendChild(botonModificar);
            celdaAcciones.appendChild(botonEliminar);
        }
    });
};




llenarListaUsuariosProveedores();
llenarListaUsuariosDuennos();

inputFiltroProv.addEventListener('keyup', mostrarTablaProveedores);
inputFiltroDuenn.addEventListener('keyup', mostrarTablaDuennos);
