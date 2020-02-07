

window.addEventListener("load", iniciar);
var miXHR;
function iniciar() {
   miXHR = new XMLHttpRequest();
   var boton = document.getElementById("activar");
   boton.addEventListener("click", enviar, false);   
}

function enviar(){
    if(miXHR){
        miXHR.open('GET','provincias.php',true);
        miXHR.onreadystatechange = cambio;
        miXHR.send(null);
    }else{
        alert("No hay objeto para la conexion Ajax");
    }
}

function cambio(){
    if(this.status == 200 && this.readyState == 4){
        var json = this.responseText;
        console.log(json);
        var objetos = JSON.parse(json);
        document.getElementById("resultados").innerHTML = this.responseText;
    }
}

