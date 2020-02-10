

var bd;

$(function () {


    $("#crearBD").click(crearBD);
    $("#crearIndice").click(crearIndiceDB);
    $("#insertar").click(insertarBD);
    $("#leert").click(leerTodosBD);
    $("#borrarTabla").click(borrarTabla);
    $("#borrarRegistros").click(borrarRegistros);

     crearBD();


    function crearBD() {
        //creamos la base de datos
        var abrirDB = window.indexedDB.open("Departamentos", 1);

        //si la operacion de open tiene exito
        //la crea si no existe si existe la abre
        abrirDB.onsuccess = function (event) {
            bd = event.target.result;
            console.log(bd);
        }

        //si da un error
        abrirDB.onerror = function (event) {
            console.log("No es posible abrir la BD " + event.target.error);
        }

        //creamos un contenedor object store (una tabla en mysql al respective)
        abrirDB.onupgradeneeded = function (event) {
            //creamos contenedor tabla objetstore
            bd = event.target.result;
            bd.createObjectStore("Departamento", {autoIncrement: true});
        }

    }

    function crearIndiceDB() {
        //crearDB
        //metodo de crear open
        var crearIndiceDB = window.indexedDB.open("Departamentos", 1);
        //si la operacion de open tiene exito
        //la crea si no existe si existe la abre
        crearIndiceDB.onsuccess = function (event) {
            //si tiene exito me da accdeso
            //tiene que ser una variabler global
            bd = event.target.result;
            console.log(bd);
        };

        //si no es posible abrir la db
        crearIndiceDB.onerror = function (event) {
            console.log("no xsde a podido acceder" + event.target.error);
        };

        crearIndiceDB.onupgradeneeded = function (event) {
            //creamos contenedor tabla objetstore

            //crear indice en una tabla nueva

//        bd = event.target.result;
//        var contenedor = bd.createObjectStore("Departamento", {keyPath: "id"});
//        contenedor.createIndex("dimension", "dimension", {unique: false});


            //crear un indice desde una table existente

            var existe = event.currentTarget.transaction;
            console.log(existe);
            var contenedorExistente = existe.objectStore("Departamento");
            contenedorExistente.createIndex("departamento", {unique: false});

        }
    }

    function insertarBD() {
        var cod = $("#codigo").val();
        var desc = $("#descripcion").val();
        var volNeg = $("#volumenNegocio").val();

        //abrimos la base de datos
        crearBD();

        var transaccion = bd.transaction(["Departamento"], "readwrite");

        //metenos lom que nos da en un objeto contenedor
        var contenedor = transaccion.objectStore("Departamento");
        console.log(contenedor);

        contenedor.add({codigo: cod, desccripcion: desc, volumenNegocio: volNeg});

    }


    function leerTodosBD() {
        $("tbody").show();
        //abrimos la base de datos
        crearBD();
        var transaccion = bd.transaction(["Departamento"], "readonly");
        var contenedor = transaccion.objectStore("Departamento");
        contenedor.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;

            if (cursor) {
                $("tbody").append("<tr></tr>");
                $("tr").append("<td>" + cursor.value.codigo + "</td>");

                $("tbody").append("<tr></tr>");
                $("tr").append("<td>" + cursor.value.desccripcion + "</td>");

                $("tbody").append("<tr></tr>");
                $("tr").append("<td>" + cursor.value.volumenNegocio + "</td>");


                cursor.continue();

            } else {

            }
        };

    }
    ;
    function borrarTabla() {
        $("tbody").hide();
    }

    function borrarRegistros() {
        crearBD();
        var transaccion = bd.transaction(["Departamento"], "readwrite");
        var contenedor = transaccion.objectStore("Departamento");

        $("tbody").hide();

        contenedor.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            console.log(cursor);
            if (cursor) {
                cursor.delete();
                cursor.continue();
            } else {
                console.log("Se han borrado todos los registros");
            }
        }
    }

});









