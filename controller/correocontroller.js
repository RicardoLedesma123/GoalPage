const {request, response} = require('express');
const nodeMailer = require('nodemailer');


const envioCorreo = (req=request, resp=response ) =>{
    let body = req.body;

    let config = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        post:587,
        auth:{
            user:'ricoro845@gmail.com',
            pass: 'etcfeuuhkrfsncws',
        }
    });

    const opciones = {
        from: body.nombre,
        subject: 'Solicitud enviada correctamente',
        to: body.email,
        html: '<p>Recibimos tu solicitud, a la brevedad nos ponemos en contacto contigo.<p> <p>Atentamente, administrador del sitio. <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Goal-com_Logo.svg/1073px-Goal-com_Logo.svg.png" width="30px"><p><p></p><p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firma_de_Joaqu%C3%ADn_Baranda.png/800px-Firma_de_Joaqu%C3%ADn_Baranda.png" width="90px"></p>'
    };

    config.sendMail(opciones, function(error,result){
        if(error)
            return resp.json({
                ok: false,
                msg: error
            });

        return resp.json({
            ok: true,
            msg: result
        });
        
    });
}

module.exports = {
    envioCorreo
}