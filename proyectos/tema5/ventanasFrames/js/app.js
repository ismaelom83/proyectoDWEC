
var mensaje;

function enviarMensaje() {
  mensaje =  window.open("colores.html","_blank","width='300px', height='300px'");
  mensaje.postMessage('fondo o color','*'); 
}

function leer(){
    console.log(event.origin);
    console.log(event.data);    
}

function recibir(){
//    var fondo = document.getElementById("fondo")
//    console.log(event.source.location.pathname);
//    fondo.innerHTML = event.data;
}

function cargar() {
    var colorFondo = document.getElementById("fondo");
    colorFondo.addEventListener('click',enviarMensaje,false);
     window.addEventListener('message',leer,false);
     window.addEventListener('message',recibir,false);
}


window.addEventListener('load',cargar,false);