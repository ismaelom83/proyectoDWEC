var objetos;
var bd;
window.addEventListener("load", iniciar, true);
var miXHR;
function iniciar() {
    miXHR = new XMLHttpRequest();
    var boton = document.getElementById("conectar");
    boton.addEventListener("click", enviar, false);
   
}

function enviar() {
    if (miXHR) {
        miXHR.open('GET', 'index.php', true);
        miXHR.onreadystatechange = cambio;
        miXHR.send(null);
    } else {
        alert("No hay objeto para la conexion Ajax");
    }
}

function cambio() {
    if (this.status == 200 && this.readyState == 4) {
        var json = this.responseText;
//        console.log(json);
        objetos = JSON.parse(json);
        console.log(objetos);
//        document.getElementById("resultado").innerHTML = this.responseText;
        crearBD();
       
    }


}

function crearBD() {
    
    //creamos la base de datos
    var abrirDB = window.indexedDB.open("BD_Maria", 1);

    //si la operacion de open tiene exito
    //la crea si no existe si existe la abre
    abrirDB.onsuccess = function (event) {
        bd = event.target.result;
           insertarBD();
           
    };

    //si da un error
    abrirDB.onerror = function (event) {
        console.log("No es posible abrir la BD " + event.target.error);
    }

    //creamos un contenedor object store (una tabla en mysql al respective)
    abrirDB.onupgradeneeded = function (event) {
        //creamos contenedor tabla objetstore
        bd = event.target.result;
        bd.createObjectStore("asignaturas", {keyPath: "id"});
    }

}



 

function insertarBD() {

    //abrimos la base de datos
//    crearBD();

        var transaccion = bd.transaction(["asignaturas"], "readwrite");

    //metenos lom que nos da en un objeto contenedor
        var contenedor = transaccion.objectStore("asignaturas");
        console.log(contenedor);
       var myobjeto = objetos;
       console.log(myobjeto);
    for (var i = 0; i < myobjeto.length; i++) {
        contenedor.add({id: myobjeto[i].id, nombre: myobjeto[i].nombre});
    }

}

$(function () {
    $("#binsert").click(insertarCampo);
 $("#insertar").click(mostrarInsert);



});

    function mostrarInsert() {
     $("#forminsert").show();
}



function insertarCampo() {
    
      var id = $("#id").val();
        var nombre = $("#nombre").val();
        //abrimos la base de datos
        crearBD();

        var transaccion = bd.transaction(["asignaturas"], "readwrite");

        //metenos lom que nos da en un objeto contenedor
        var contenedor = transaccion.objectStore("asignaturas");
        console.log(contenedor);

        contenedor.add({id: id, nombre: nombre});
    
}