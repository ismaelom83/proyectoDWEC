var bd;

function cargar() {

    var crear = document.getElementById("crear");
    crear.addEventListener("click", crearDB, false);
    
    var insertar = document.getElementById("insertar");
    insertar.addEventListener("click", insertarBD, false);
    
    var leer = document.getElementById("leer");
    leer.addEventListener("click", leerKeyDB, false);
    
    var leert = document.getElementById("leert");
    leert.addEventListener("click", leerTodosDB, false);
    

    var borrar = document.getElementById("borrar");
    borrar.addEventListener("click", borrarKeyDB, false);

    var indice = document.getElementById("indice");
    indice.addEventListener("click", crearIndiceDB, false);
    
    var buscarIndice = document.getElementById("buscarIndice");
    buscarIndice.addEventListener("click", buscarIndide, false);
    
     var modificar2 = document.getElementById("modificar");
    modificar2.addEventListener("click", modificar, false);

//    crearIndiceDB();
}
;


function crearIndiceDB() {
    //crearDB
    //metodo de crear open
    var abrirDB = window.indexedDB.open("tienda", 1);
    //si la operacion de open tiene exito
    //la crea si no existe si existe la abre
    abrirDB.onsuccess = function (event) {
        //si tiene exito me da accdeso
        //tiene que ser una variabler global
        bd = event.target.result;
        console.log(bd);
    };

    //si no es posible abrir la db
    abrirDB.onerror = function (event) {
        console.log("no xsde a podido acceder" + event.target.error);
    };

    abrirDB.onupgradeneeded = function (event) {
        //creamos contenedor tabla objetstore
        
        //crear indice en una tabla nueva
        
//        bd = event.target.result;
//        var contenedor = bd.createObjectStore("colchonesIndice", {keyPath: "id"});
//        contenedor.createIndex("dimension", "dimension", {unique: false});

          
          //crear un indice desde una table existente
          
          var existe = event.currentTarget.transaction;
          var contenedorExistente = existe.objectStore("colchones");
          contenedorExistente.createIndex("marca","marca",{unique:false});
          
    }
}


function borrarKeyDB() {    var transaccion = bd.transaction(["colchones"], "readwrite");

    var contenedor = transaccion.objectStore("colchones");
    //consultar
    contenedor.get(1).onsuccess = function (event) {
        var objeto = event.target.result;
        console.log(objeto);
        if (objeto != "undefined") {
            contenedor.delete(1);
        }
    };

}
;

function leerTodosDB() {

    var transaccion = bd.transaction(["colchones"], "readonly");
    var contenedor = transaccion.objectStore("colchones");
    contenedor.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var tbody = document.getElementsByTagName("tbody")[1];
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(cursor.value.id));
            tr.appendChild(td);
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(cursor.value.marca));
            tr.appendChild(td);
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(cursor.value.dimension));
            tr.appendChild(td);
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(cursor.value.material));
            tr.appendChild(td);
            tbody.appendChild(tr);
            cursor.continue();

        } else {

        }
    };
}
;

function leerKeyDB() {
    var transaccion = bd.transaction(["colchones"], "readonly");

    var contenedor = transaccion.objectStore("colchones");
    //consultar
    contenedor.get(1).onsuccess = function (event) {
        var objeto = event.target.result;
        console.log(objeto);
    };

    //segunda tabla
    var transaccion = bd.transaction(["colchones2"], "readonly");

    var contenedor = transaccion.objectStore("colchones2");
    //consultar
    contenedor.get("eu").onsuccess = function (event) {
        var objeto = event.target.result;
        console.log(objeto);
    };

}



function insertarBD() {
    var idv = document.getElementById("id").value;
    var marcav = document.getElementById("marca").value;
    var dimensionv = document.getElementById("dimension").value;
    var materialv = document.getElementById("material").value;
    //abrimos la base de datos
    crearDB();

    var transaccion = bd.transaction(["colchones"], "readwrite");

    //metenos lom que nos da en un objeto contenedor
    var contenedor = transaccion.objectStore("colchones");
    console.log(contenedor);

    contenedor.add({id: idv, marca: marcav, dimension: dimensionv, material: materialv});

    //segunda base de datos
//    var transaccion = bd.transaction(["colchonesIndice"], "readwrite");
//
//    //metenos lom que nos da en un objeto contenedor
//    var contenedor = transaccion.objectStore("colchonesIndice");
//    console.log(contenedor);

//    contenedor.add({id: idv, marca: marcav, dimension: dimensionv, material: materialv});
}

   function crearDB() {
//    //crearDB
    //metodo de crear open
    var abrirDB = window.indexedDB.open("tienda", 1);
    //si la operacion de open tiene exito
    //la crea si no existe si existe la abre
    abrirDB.onsuccess = function (event) {
       //si tiene exito me da accdeso
       //tiene que ser una variabler global
      bd = event.target.result;
        console.log(bd);
   };
   
    //si no es posible abrir la db
    abrirDB.onerror = function (event) {
        console.log("no xsde a podido acceder" + event.target.error);
    };

   abrirDB.onupgradeneeded = function (event) {
       //creamos contenedor tabla objetstore
        bd = event.target.result;
        bd.createObjectStore("colchones", {autoIncrement: true});
    };
}

//function crearDB2() {
//    //crearDB
//    //metodo de crear open
//    var abrirDB = window.indexedDB.open("tienda", 2);
//    //si la operacion de open tiene exito
//    //la crea si no existe si existe la abre
//    abrirDB.onsuccess = function (event) {
//        //si tiene exito me da accdeso
//        //tiene que ser una variabler global
//        bd = event.target.result;
//        console.log(bd);
//    };
//
//    //si no es posible abrir la db
//    abrirDB.onerror = function (event) {
//        console.log("no xsde a podido acceder" + event.target.error);
//    };
//
//    abrirDB.onupgradeneeded = function (event) {
//        //creamos contenedor tabla objetstore
//        bd = event.target.result;
//        bd.createObjectStore("colchones2", {keyPath: "id"});
//    };
//
//
//
//}


function buscarIndide() {
    var transaccion = bd.transaction(["colchonesIndice"], "readonly");
    var contenedor = transaccion.objectStore("colchonesIndice");
    var index = contenedor.index("dimension");
    index.openCursor("23").onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var tbody = document.getElementsByTagName("tbody")[1];
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(cursor.value.id));
            tr.appendChild(td);
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(cursor.value.marca));
            tr.appendChild(td);
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(cursor.value.dimension));
            tr.appendChild(td);
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(cursor.value.material));
            tr.appendChild(td);
            tbody.appendChild(tr);
            cursor.continue();

        } else {

        }
    };
};

function modificar() {
     var transaccion = bd.transaction(["colchones2"], "readwrite");

    var contenedor = transaccion.objectStore("colchones2");
    //consultar
    contenedor.get("qwer").onsuccess = function (event) {
        var objeto = event.target.result;
        console.log(objeto);
        if (objeto != "undefined") {
            contenedor.put({id: "qwer", marca: "ismael", dimension: "150", material: "latex"});
        }

    };
};
window.addEventListener("load", cargar, false);

