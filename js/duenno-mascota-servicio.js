'use strict';

const registrarRegistroMascota = async(pfoto, pnombre, ptipo, pcaracteristicas, praza, ppadecimientos, pvacunas, pedad, ptelefono, pcorreoDuenno) => {

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-mascota',
        responseType: 'json',
        data: {
            imagen: pfoto,
            nombre: pnombre,
            tipo: ptipo,
            caracteristicas: pcaracteristicas,
            raza: praza,
            padecimientos: ppadecimientos,
            vacunas: pvacunas,
            edad: pedad,
            telefono: ptelefono,
            correoDuenno: pcorreoDuenno,          
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'La mascota ha sido registrado con éxito',
            'text': 'Por favor verifique el sistema',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'duenno-listar-mascotas.html';
        });
    }).catch((error) => {
        Swal.fire({
            title: 'No se pudo registrar la mascota',
            text: 'Ocurrió el siguiente error {error}',
            icon: 'error'
        })
    });
};


const obtenerRegistroMascota = async() => {
    let listaMascotas;
    const usuarioConectado = sessionStorage.getItem('usuarioConectado');
    let datos = JSON.parse(usuarioConectado);
    let correoDuenno = datos['correo'];

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/listar-mascota',
        responseType: 'json',
        data: {
            correoDuenno: correoDuenno
        }
    }).then((response) => {
        listaMascotas = response.data.mascotas;
    }).catch((error) => {
        console.log(error);
    });
    return listaMascotas;
};

const modificarRegistroMascota = async(pnombre, ptipo, pcaracteristicas, praza, ppadecimientos, pvacunas, pedad, ptelefono) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-mascota',
        responseType: 'json',
        data: {
            nombre: pnombre,
            tipo: ptipo,
            caracteristicas: pcaracteristicas,
            raza: praza,
            padecimientos: ppadecimientos,
            vacunas: pvacunas,
            edad: pedad,
            telefono: ptelefono
        }
    }).then((response) => {
        Swal.fire({
            'icon': 'success',
            'title': 'Mascota modificada',
            'text': 'La información fue actualizada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'duenno-listar-mascotas.html';
        });
    }).catch((error) => {
        Swal.fire({
            'title': 'No se pudo registrar la mascota',
            'text': `Ocurrió el siguiente error {error}`,
            'icon': 'error'
        })
    });
};


const eliminarRegistroMascota = async(pnombre) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-mascota',
        responseType: 'json',
        data: {
            nombre: pnombre
        }
    }).then((response) => {
        Swal.fire(
            '',
            'La mascota ha sido eliminado',
            'success'
        ).then(() => {
            window.location.href = 'duenno-listar-mascotas.html';
        });
    }).catch((error) => {
        console.log(error)
    });
};