function carga() {
    var a = document.getElementById("opcion1");
    a.addEventListener('click',validarCheck,false);
    var div = document.getElementById("profesor");
    div.addEventListener('click',mostrarProfesor,false);
    document.getElementById("wp").style.display = 'none'; 
    var div2 = document.getElementById("alumno");
    div2.addEventListener('click',mostrarAlumno,false);

}

function validarCheck() {
    var a = document.getElementById("opcion1");
    if (a.checked) {           
        document.getElementById("boton").disabled = false;
     }
     else {
        document.getElementById("boton").disabled = true;
         alert("Debes aceptar los términos y condiciones");    
         return false;
     }
}

function mostrarProfesor() {
    var div = document.getElementById("profesor");
    if (div.click) {
        document.getElementById("formularioIsmaelFinal").style.display = 'none'; 
        document.getElementById("wp").style.display = 'block'; 
    }
}

function mostrarAlumno() {
    var div2 = document.getElementById("alumno");
    if (div2.click) {
        document.getElementById("wp").style.display = 'none'; 
        document.getElementById("formularioIsmaelFinal").style.display = 'block'; 
        
    }
}

window.addEventListener('load',carga,false);
