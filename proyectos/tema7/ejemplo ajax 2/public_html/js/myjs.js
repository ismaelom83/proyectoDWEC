
window.addEventListener('load',cargar,false);

function cargar() {
    //crear objeto de ajax
    miHHR = new XMLHttpRequest();
    //iniciar el boton
    var boton = document.getElementById("conectar");
    boton.addEventListener('click',conectar,false);   
}
