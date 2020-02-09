

$(function () {
    //con la funcion getJSON solicitamos los datos de ese archivo(nos la pasaran como objeto JSON)
    $.getJSON("JSON/recetas.json", function (data) {
        //for para recorrer los nombres de cadac receta y meterlos en el select
        for (var i in data.recetas.receta) {
            //creamos los option del select para mete rlos nombres de las recetas
            $("select").append("<option></option>");
            //añadimos el atributo id y value 
            $("option").last().attr({id: data.recetas.receta[i].nombre, value: data.recetas.receta[i].nombre});
            //y como valor le pasamos el nombre de la s recetas del json.
            $("option").last().text(data.recetas.receta[i].nombre);
        }
    });
    //esta funcion se ejecutara cuando el select cambie de estado, entonces mostrara los infredientes y la elaboracion 
    //dependioendo de la opcion seleccioinada.
    $("#receta").change(rellanarInput);
    function rellanarInput() {
        var nombre = this.value;
        //recibimos otra vez el json
        $.getJSON("JSON/recetas.json", function (data) {
            //vaciamos los elementos para que no se repitan.
            $(".titulo").empty();
            $("ul").empty();
            $("ol").empty();
            $(".titulo").append("<h1 class='titulo2'></h1>");
            $(".titulo2").text("Receta para : " + nombre);

            //for para recorrer el objeto json y dependiendo de la receta seleccionada nos da sus ingredientes y su elaboracion
            for (var i in data.recetas.receta) {
                if (data.recetas.receta[i].nombre === nombre) {
                    //Ingredientes utilizados en esta receta
                    for (var j = 0; j < data.recetas.receta[i].ingredientes.ingrediente.length; j++) {
                        $("ul").append("<li></li>");
                        $("li").last().text(data.recetas.receta[i].ingredientes.ingrediente[j]["-cantidad"] + " " + data.recetas.receta[i].ingredientes.ingrediente[j]["-unidad"] + " " + data.recetas.receta[i].ingredientes.ingrediente[j]["#text"]);
                    }
                    //Proceso de elaboracion de la receta
                    for (var j = 0; j < data.recetas.receta[i].proceso.paso.length; j++) {
                        $("ol").append("<li></li>");
                        $("li").last().text(data.recetas.receta[i].proceso.paso[j]["#text"]);
                    }
                }
            }
        });
    }

});



