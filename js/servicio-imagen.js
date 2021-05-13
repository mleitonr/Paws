'use strict';

const boton_foto = document.querySelector('#btn-foto');
const imagen = document.querySelector('#foto-perfil');

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'proyectopaws',
    uploadPreset: 'rg8djyxn'

}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});


boton_foto.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);