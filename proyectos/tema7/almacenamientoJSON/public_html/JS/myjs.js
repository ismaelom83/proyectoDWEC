
//function cargar() {
//    
////    var jsonVirus = {"nombre":"gripe"};
////    console.log(jsonVirus);
////    console.log(jsonVirus.nombre);
//    
//     var jsonVirus2 = {
//         "virus":[
//             {"nombre":"gripe"},
//             {"nombre":"gripeA"},
//             {"nombre":"coronavirus"}
//         ]
//     };
//    console.log(jsonVirus2.virus[1].nombre);
//
//
//
//var jsonVirus3 = {
//         "virus":[
//             {"nombre":"gripe", "tiempo":15},
//             {"nombre":"gripeA", "-tiempo":40},
//             {"nombre":"coronavirus", "tiempo":100}
//         ]
//     };
//    console.log(jsonVirus3.virus[1].nombre+":"+jsonVirus3.virus[1]["-tiempo"]);
//    
//    var jsonVirus4 = {
//         "virus":[
//             {"nombre":"gripe", "tiempo":15},
//             {"nombre":"gripeA", "tiempo":40},
//             {"nombre":"coronavirus", "tiempo":100}
//         ],
//         "medicamentos":[
//             {"nombre":"paracetamol"},
//             {"nombre":"ibuprofeno"},
//             {"nombre":"dalsy"}
//         ]
//     };
//    console.log(jsonVirus4.virus[0].nombre+":"+jsonVirus4.medicamentos[0].nombre);
//    
//    console.log(typeof jsonVirus4);
//    var stringjson = JSON.stringify(jsonVirus4);
//    console.log(stringjson +" Es de tipo"+ typeof stringjson );
//    for(virus in jsonVirus4.virus){
//        console.log("El virus numero "+virus+" es "+jsonVirus4.virus[virus].nombre);
//    }
//};
//
//window.addEventListener('load',cargar,false);


$(function () {
    $.getJSON('archivo.json',{},function (json) {
        var datos = json.agenda.contactos;
        console.log(datos);
        for(i in datos){
            console.log(datos[i].nombre);
        }
    });
});