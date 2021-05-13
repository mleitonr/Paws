'use strict';

const nodemailer = require('nodemailer');
require('dotenv').config();

this.enviar_mail_duennos = (pnombre, pcorreo) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    });

    let mail_options = {
        from: 'pulsarescr@gmail.com',
        to: `${pcorreo}`,
        subject: `Hola, ${pnombre}! Bienvenido a PAWS!`,
        html: `
        <table border="0" cellpadding="0" cellspacing="0" width="800px" background-color="#2d3436" bgcolor="#2d3436">
        <tr height="200px">
            <td bgcolor="" width="600px">
                <h1 style="color: #fff; text-align:center">Bienvenido <span style="color: #e67e22">${pnombre}</span></h1>
                <p style="color: #fff; text-align:center">
                    
                    Le damos la bienvenida a la aplicación de PAWS!
                </p>
                <p style="color: #fff; text-align:center">
                    Por favor, ingrese al siguiente link para crear su contraseña: <a href="http://127.0.0.1:5501/crear-contrasenna.html" style="color: #e67e22">Crear mi contraseña</a>
                </p>
                <p style="color: #fff; text-align:center">Su correo es <span style="color: #e67e22">${pcorreo}</span></p>
            </td>
        </tr>
        <tr bgcolor="#fff">
            <td style="text-align:center">
                <p style="color: #000">¡Somos una solución para su mascota y para su tranquilidad!</p>
            </td>
        </tr>
    </table>
        `
    };
    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};



module.exports = this;