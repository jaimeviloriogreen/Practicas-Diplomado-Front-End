'use strict'

let formulario = document.querySelector('.formulario');
    
formulario.addEventListener('submit', function(e){
     e.preventDefault();
     let nombre = document.querySelector('.nombre').value;
     let correo = document.querySelector('.correo').value;
     let asunto = document.querySelector('.asunto').value;
     let mensaje = document.querySelector('.mensaje').value;

     if(nombre.trim() == "" || correo.trim() == "" || asunto.trim() == "" || mensaje.trim() == ""){
      alert('¡No se aceptan campos vacíos!')
     }else{
        if(mensaje.trim().length < 10){
             alert('!El mensaje debe de ser mayor a 10 carácteres!');
        }else{
          console.log(`El Sr. ${nombre} ha enviado un mensaje. El asunto es: ${asunto}. Su correo electrónico es: ${correo} y le ha enviado el siguiente mensaje: ${mensaje}`);
          formulario.reset();
          alert('¡Mensaje enviado exitosamente!');
        }
     }

});

