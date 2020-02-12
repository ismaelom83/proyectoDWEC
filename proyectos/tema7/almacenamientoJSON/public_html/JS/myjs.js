
//function cargar() {
//
////    var jsonVirus = {"nombre":"gripe"};
////    console.log(jsonVirus);
////    console.log(jsonVirus.nombre);
//
//    var jsonVirus2 = {
//        "virus": [
//            {"nombre": "gripe"},
//            {"nombre": "gripeA"},
//            {"nombre": "coronavirus"}
//        ]
//    };
//    console.log(jsonVirus2.virus[1].nombre);
//
//
//
//    var jsonVirus3 = {
//        "virus": [
//            {"nombre": "gripe", "tiempo": 15},
//            {"nombre": "gripeA", "-tiempo": 40},
//            {"nombre": "coronavirus", "tiempo": 100}
//        ]
//    };
//    console.log(jsonVirus3.virus[1].nombre + ":" + jsonVirus3.virus[1]["-tiempo"]);
//
//    var jsonVirus4 = {
//        "virus": [
//            {"nombre": "gripe", "tiempo": 15},
//            {"nombre": "gripeA", "tiempo": 40},
//            {"nombre": "coronavirus", "tiempo": 100}
//        ],
//        "medicamentos": [
//            {"nombre": "paracetamol"},
//            {"nombre": "ibuprofeno"},
//            {"nombre": "dalsy"}
//        ]
//    };
//    console.log(jsonVirus4.virus[0].nombre + ":" + jsonVirus4.medicamentos[0].nombre);
//
//    
//    var stringjson = JSON.stringify(jsonVirus4);
//    console.log(stringjson + " Es de tipo " + typeof stringjson);
//    console.log(typeof jsonVirus4);
//    for (virus in jsonVirus4.virus) {
//        console.log("El virus numero " + virus + " es " + jsonVirus4.virus[virus].nombre);
//    }
//}

//window.addEventListener('load', cargar, false);


$(function () {
    $.getJSON('JSON/archivo.json', {}, function (json) {
        var datos = json.agenda.contacto;
//        console.log(datos);
        for (i in datos) {
            var tbody = document.getElementsByTagName("tbody")[0];
            var tr = document.createElement("tr");
            tr.setAttribute("data-codigo", datos[i].nombre);
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(datos[i].nombre));
            tr.appendChild(td);
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(datos[i].apellido));
            tr.appendChild(td);
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(datos[i].telefonos["telcasa"]));
            tr.appendChild(td);
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(datos[i].telefonos["telmovil"]));
            tr.appendChild(td);
             var td = document.createElement("td");
            td.appendChild(document.createTextNode(datos[i].telefonos["teltrabajo"]));
            tr.appendChild(td);
            tbody.appendChild(tr);
//            $("#nombre").text(datos[i].nombre);
//             $("#nombre").text(datos[i].apellido);
//              $("#telcasa").text(datos[i].telefonos["telcasa"]);
//              $("#telcasa").text(datos[i].telefonos["telmovil"]);
//              $("#telcasa").text(datos[i].telefonos["teltrabajo"]);
//           $("td").text(datos[i].nombre+" "+datos[i].apellido+" "+datos[i].telefonos["telcasa"]+" "+datos[i].telefonos["telmovil"]+" "+datos[i].telefonos["teltrabajo"]);

        }
//         for(var i in datos){
//              console.log(datos[i].telefonos["telcasa"]);
//             
//        }
    });
});