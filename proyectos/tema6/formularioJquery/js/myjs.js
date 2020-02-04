$(function () {

    /*por defecto siempre saldra el formulario de el alumno
     * pero si pulsamos el del profesor nos oculta alumno y viceveerssa
     * */
    $("#alumnor").click(function () {
        $("#alumno").show();
        $("#profesor").hide();
    })

    $("#profer").click(function () {
        $("#profesor").show();
        $("#alumno").hide();
    })




    /*cuando cambiemos el valor del select nos redirigira a la funcion asignatura donde mostraremos las asignaturas
     *  dependiendo de lo que allamos pulsado*/
    $("#modulo").change(asignaturas);
    $("#cursoa").change(asignaturas);
    
   

    /*funcion para mostrar las asignaturas dependiendo de dinde allamos pulsado en los selects*/
    function asignaturas() {
        if ($("#modulo").val() === "DAW") {
            var primerCurso = ["PROG", "BBDD", "SSOO", "LM", "ED"];
            var segundoCurso = ["DAW", "DIW", "DWES", "DWEC"];
        } else {
            $("#hideAsig").empty();
        }
        if ($("#modulo").val() === "SMR") {
            var primerCurso = ["REDES", "SE", "SSOO", "AO", "FOL"];
            var segundoCurso = ["SI", "IE", "BBDD", "SR", "SSOO"];
        } else {
            $("#hideAsig").empty();
        }
        if ($("#cursoa").val() === "primer") {
            jQuery.each(primerCurso, function (index, value) {
                $("#hideAsig").append("<label><input type='checkbox'> " + value + "</label><br>");
                $(":checkbox").attr("id", "cbox" + index);
                $(":checkbox").attr("value", "checkbox" + index);
            });
        } else if ($("#cursoa").val() === "segundo") {
            jQuery.each(segundoCurso, function (index, value) {
                $("#hideAsig").append("<label><input type='checkbox'> " + value + "</label><br>");
                $(":checkbox").attr("id", "cbox" + index);
                $(":checkbox").attr("value", "checkbox" + index);
            })
        } else {
            
            
            
            
            
            
            
            
            
            
            
            
            
            $("#hideAsig").empty();
        }
    }
    
    
     /* aceptamos las condiciones de la LPD */
    $('#lpda').change(function () {
        if ($("#lpda").is(':checked')) {
            console.log("Lpda Aceptada");
            $("#btna").prop('disabled', false); //Cambia una propiedad ya establecida
        } else {
            console.log("Lpda no aceptada");
            $("#btna").prop('disabled', true); //Cambia una propiedad ya establecida
        }
    });




})

