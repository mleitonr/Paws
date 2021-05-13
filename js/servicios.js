'use strict';

let listaServicios = [{

    'nombreServicio': 'Retoque de mascotas',
    'descripcion': 'Corte y retoque de cabello para mascotas',
    'tipo': 'Estética',
    'precio': '35.000',
    'estado': 'Activo',

}, {
    'nombreServicio': 'Paseo de mascotas',
    'descripcion': 'Paseo Diario de Mascotas',
    'tipo': 'Recreación',
    'precio': '20.000',
    'estado': 'Activo',

}, {
    'nombreServicio': 'Alimenta tu mascota',
    'descripcion': 'Alimento para mascotas',
    'tipo': 'Alimentación',
    'precio': '60.000',
    'estado': 'Inactivo',

}
];

let listaServiciosSolicitadosDuenos = [{
    'nombre': 'Ximena Blard Guevara',
    'descripcion': 'Corte y retoque de cabello para mascotas',
    'condicion': 'Aceptado',

}, {
    'nombre': 'Yensy Salazar Jiménez',
    'descripcion': 'Paseo Diario de Mascotas',
    'condicion': 'Aceptado',
}];


let listaServiciosRechazados = [{
    'fechaServicio': '12/12/2021',
    'servicioRechazado': 'Paseo',
    'duennoMascota': 'José Figueroa Chinchilla',
    'comentario': 'No podía aceptarlo por el horario'
}, {
    'fechaServicio': '12/16/2021',
    'servicioRechazado': 'Alimento',
    'duennoMascota': 'Erick Mora Hernández',
    'comentario': 'La persona vivía muy lejos'
}, {
    'fechaServicio': '12/19/2021',
    'servicioRechazado': 'Aseo',
    'duennoMascota': 'Erick Mora Hernández',
    'comentario': 'Estaba enfermo ese día'
}];

let listaServiciosPendientes = [{
    'fechaServicio': '12/12/2021',
    'servicioSolicitado': 'Paseo',
    'proveedor': 'José Figueroa Chinchilla',
    'estado': 'Aceptado'
}, {
    'fechaServicio': '12/16/2021',
    'servicioSolicitado': 'Alimento',
    'proveedor': 'Erick Mora Hernández',
    'estado': 'Pendiente'
}, {
    'fechaServicio': '12/19/2021',
    'servicioSolicitado': 'Aseo',
    'proveedor': 'Erick Mora Hernández',
    'estado': 'Rechazado'
}];

let listaServiciosPorMascota = [{
    'fechaServicio': '12/12/2021',
    'servicioRecibido': 'Paseo',
    'proveedor': 'Erick Mora Hernández'
}, {
    'fechaServicio': '12/16/2021',
    'servicioRecibido': 'Alimento',
    'proveedor': 'Erick Mora Hernández'
}, {
    'fechaServicio': '12/19/2021',
    'servicioRecibido': 'Aseo',
    'proveedor': 'Erick Mora Hernández'
}];


let listaPadecimientos = [{
    'especie': 'Perro',
    'nombrePadecimiento': 'Hepatitis canina'
}, {
    'especie': 'Perro',
    'nombrePadecimiento': 'Leptospirosis'
}, {
    'especie': 'Perro',
    'nombrePadecimiento': 'Parvovirus'
}, {
    'especie': 'Perro',
    'nombrePadecimiento': 'Rabia'
}, {
    'especie': 'Perro',
    'nombrePadecimiento': 'Brucelosis'
}, {
    'especie': 'Gato',
    'nombrePadecimiento': 'Borreliosis canina'
}, {
    'especie': 'Gato',
    'nombrePadecimiento': 'Otitis'
}, {
    'especie': 'Gato',
    'nombrePadecimiento': 'Conjuntivitis'
}, {
    'especie': 'Gato',
    'nombrePadecimiento': 'Rabia felina'
}, {
    'especie': 'Gato',
    'nombrePadecimiento': 'Leucemia felina'
}, {
    'especie': 'Perro',
    'nombrePadecimiento': 'Fiebre'
}];

let listaVacunas = [{
    'especie': 'Perro',
    'nombreVacuna': 'Vacuna Parvovirus'
}, {
    'especie': 'Perro',
    'nombreVacuna': 'Vacuna Polivalente'
}, {
    'especie': 'Perro',
    'nombreVacuna': 'Vacuna Rabia'
}, {
    'especie': 'Perro',
    'nombreVacuna': 'Vacuna Hepatitis'
}, {
    'especie': 'Perro',
    'nombreVacuna': 'Vacuna Leptospira'
}, {
    'especie': 'Gato',
    'nombreVacuna': 'Vacuna Panleucopenia'
}, {
    'especie': 'Gato',
    'nombreVacuna': 'Vacuna Calcvirus'
}, {
    'especie': 'Gato',
    'nombreVacuna': 'Vacuna Rinotraqueitis'
}, {
    'especie': 'Gato',
    'nombreVacuna': 'Vacuna Leucemia felina'
}, {
    'especie': 'Gato',
    'nombreVacuna': 'Vacuna Rabia felina'
}];


let listaSolicitudesProveedores = [{
    'nombreProveedor': 'José Figueroa Chinchilla',
    'descripcion': 'Aseo',
}, {
    'nombreProveedor': 'Ricardo Sandí Fonseca',
    'descripcion': 'Alimento para mascotas',
}, {
    'nombreProveedor': 'Erick Mora Hernández',
    'descripcion': 'Paseo para mascotas',
}
];

let listaTiposServicios = [{
    'nombreTipoServicio': 'Aseo',
    'descripcion': 'Corte y retoque de cabello para mascotas',
    'estado': 'Activo',

}, {
    'nombreTipoServicio': 'Paseo de mascotas',
    'descripcion': 'Paseo Diario de Mascotas',
    'estado': 'Activo',

}, {
    'nombreTipoServicio': 'Alimento para mascotas',
    'descripcion': 'Alimento para mascotas',
    'estado': 'Inactivo',
}

];

let listaTiposdeMascota = [{
    'nombreTiposdeMascota': 'Perro',
    'estado': 'Activo'
}, {
    'nombreTiposdeMascota': 'Gato',
    'estado': 'Activo'
}

];

let listaMascotas = [ {
    'nombre': 'Romeo',
    'edad': '5 años',
    'raza': 'Pug'
}
];

let listaUsuarios = [{
    'nombre': 'José Figueroa Chinchilla',
    'identificacion': '115648863',
    'correo': 'jfigueroac@ucenfotec.ac.cr',
    'contrasenna': 'figueroa01',
    'telefono': '88445214',
    'tipo': 'Proveedor'
}, {
    'nombre': 'Yensy Salazar Jiménez',
    'identificacion': '303430206',
    'correo': 'ysalazarj@ucenfotec.ac.cr',
    'contrasenna': 'yensysj01',
    'telefono': '88644292',
    'tipo': 'Dueño'
}, {
    'nombre': 'Mario Leitón Ruiz',
    'identificacion': '115560672',
    'correo': 'mleitonr@ucenfotec.ac.cr',
    'contrasenna': 'mariom02',
    'telefono': '83036765',
    'tipo': 'Administrador'
},
{
    'nombre': 'Ximena Blard Guevara',
    'identificacion': '402500885',
    'correo': 'xblardg@ucenfotec.ac.cr',
    'contrasenna': 'ximenab03',
    'telefono': '61966190',
    'tipo': 'Dueño'
},
{
    'nombre': 'Ricardo Sandí Fonseca',
    'identificacion': '115210488',
    'correo': 'rsandif@ucenfotec.ac.cr',
    'contrasenna': 'ricardos04',
    'telefono': '87591669',
    'tipo': 'Proveedor'
},
{
    'nombre': 'Erick Mora Hernández',
    'identificacion': '116640920',
    'correo': 'emorah@ucenfotec.ac.cr',
    'contrasenna': 'erickm05',
    'telefono': '60229727',
    'tipo': 'Proveedor'
}
];

let listaUsuariosDenunciados = [{
    'nombre': 'José Figueroa Chinchilla',
    'identificacion': '115648863',
    'correo': 'jfigueroac@ucenfotec.ac.cr',
    'contrasenna': 'figueroa01',
    'telefono': '88445214',
    'tipo': 'Proveedor'
}
];

let listaRazas = [{
    'especie': 'Gato',
    'nombreRaza': 'Maine Coon'
}, {
    'especie': 'Perro',
    'nombreRaza': 'French Poodle'
}, {
    'especie': 'Gato',
    'nombreRaza': 'Esfinge'
}, {
    'especie': 'Gato',
    'nombreRaza': 'Persa'
}, {
    'especie': 'Perro',
    'nombreRaza': 'Golden Retiever'
}, {
    'especie': 'Perro',
    'nombreRaza': 'Husky Siberiano'
}, {
    'especie': 'Perro',
    'nombreRaza': 'Mestizo'
}
];


const iniciarSesion = (correo, contrasenna) => {
    let credencialesCorrectas = false;
    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if (usuario.contrasenna == contrasenna) {
                credencialesCorrectas = true;
                sessionStorage.setItem('usuarioConectado', JSON.stringify(usuario));
            }
        }
    });

    if (credencialesCorrectas == true) {
        Swal.fire({
            'icon': 'success',
            'title': 'Bienvenido',
            'text': 'Ha iniciado sesión correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {

            let usuario;

            if (sessionStorage.getItem('usuarioConectado')) {
                usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
                redirigirUsuario(usuario.tipo);
            } else {
                window.location.href = 'index.html';
            }
        });

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No ha podido iniciar sesión',
            'text': 'Usuario o contraseña incorrectos',
            'confirmButtonText': 'Entendido'
        });
    }
};

const redirigirUsuario = (tipo) => {

    switch (tipo) {

        case 'Administrador':
            window.location.href = 'home-administrador.html';
        break;

        case 'Proveedor':
            window.location.href = 'home-proveedor.html';
        break;

        case 'Duenno':
            window.location.href = 'duenno-home.html';
        break;
    }
}