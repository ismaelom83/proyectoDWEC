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

    /*cuando cambiemos el valor del select nos redirigira a la funcion asignatura donde mostraremos las asignaturas
     *  dependiendo de lo que allamos pulsado*/
    $("#moduloP").change(profesorA);
    $("#cursoP").change(profesorA);


    /*funcion para mostrar las asignaturas de los alumnos dependiendo de donde hemos pulsado en los selects*/
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
            });
        } else if ($("#cursoa").val() === "segundo") {
            jQuery.each(segundoCurso, function (index, value) {
                $("#hideAsig").append("<label><input type='checkbox'> " + value + "</label><br>");
            })
        } else {
            $("#hideAsig").empty();
        }
    }

    /*funcion para mostrar las asignaturas que inparte el profesor dependiendo que ciclo y que curso a elegido*/
    
       function profesorA() {
        if ($("#moduloP").val() === "DAW") {
            var primerCurso = ["PROG", "BBDD", "SSOO", "LM", "ED"];
            var segundoCurso = ["DAW", "DIW", "DWES", "DWEC"];
        } else {
            $("#parañadir").empty();
        }
        if ($("#moduloP").val() === "SMR") {
            var primerCurso = ["REDES", "SE", "SSOO", "AO", "FOL"];
            var segundoCurso = ["SI", "IE", "BBDD", "SR", "SSOO"];
        } else {
            $("#parañadir").empty();
        }
        if ($("#cursoP").val() === "primer") {
             jQuery.each(primerCurso, function (index, value) {
                $("#parañadir").append($("<option>").attr("value", primerCurso[index]).text(primerCurso[index]));
            })
        } else if ($("#cursoP").val() === "segundo") {
            jQuery.each(segundoCurso, function (index, value) {
                $("#parañadir").append($("<option>").attr("value", segundoCurso[index]).text(segundoCurso[index]));
            })
        } else {
            $("#parañadir").empty();
        }
    }
    
    /*si pulsamos el boton de añadir asignatuar que imparte el profesor nos lo añade al select */
$("#anadir").click(anadirAsignatura);


       /*funcion para añadir las asignaturas selecionadas por el profesor en el otro select*/
       
       function anadirAsignatura() {
        $("#selectanadir").append($("<option>").attr("value", $("#parañadir").val()).text($("#parañadir").val()).clone());
    }
    /* aceptamos las condiciones de la LPD si no no deja enviar*/
    $('#lpda').change(function () {
        if ($("#lpda").is(':checked')) {
            console.log("Lpda Aceptada");
            $("#btna").prop('disabled', false); //Cambia una propiedad ya establecida
        } else {
            console.log("Lpda no aceptada");
            $("#btna").prop('disabled', true); //Cambia una propiedad ya establecida
        }
    });

    /* aceptamos las condiciones de la LPD si no no deja enviar*/
    $('#lpdp').change(function () {
        if ($("#lpdp").is(':checked')) {
            console.log("Lpdp Aceptada");
            $("#btnp").prop('disabled', false); //Cambia una propiedad ya establecida
        } else {
            console.log("Lpdp no aceptada");
            $("#btnp").prop('disabled', true); //Cambia una propiedad ya establecida
        }
    });
    
    
     $("#Nombrea").blur(function () {
        /* Poner en mayúscula el primer caracter */
        $(this).val($(this).val().charAt(0).toUpperCase() + $(this).val().slice(1));
        if (validarAlfabetico(this.value) === true) {
            $("#enombre").remove();
            $(this).css("color", "green");
            $(this).css("background", "#BBFFBB");
        } else {
            $("#enombre").remove();
            $(this).css("color", "red");
            $(this).after("<span id='enombre'>Error en el texto introducido</span>");
        }
    });
    $("#Apellidosa").blur(function () {
        /* Poner en mayúscula el primer caracter */
        $(this).val($(this).val().charAt(0).toUpperCase() + $(this).val().slice(1));
        if (validarAlfabetico(this.value) === true) {
            $("#enombre").remove();
            $(this).css("color", "green");
            $(this).css("background", "#BBFFBB");
        } else {
            $("#enombre").remove();
            $(this).css("color", "red");
            $(this).after("<span id='enombre'>Error en el texto introducido</span>");
        }
    });
     /* Validar email */
    $("#Correo").blur(function () {
        if (validarEmail(this.value) === true) {
            $(this).css("color", "green");
            $(this).css("background", "#BBFFBB");
        } 
    });

})
 
   

/*---------------------------------------------validaciones-----------------------------------*/

function validarAlfabetico(campo) {
     var expreg = /^[a-zA-Z ]*$/i;
    if (expreg.test(campo) /* && campo !== "" */) {
        return true;
    }
    return false;
}
function validarEmail(email) {
    exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!exp.test(email)) {
        return false;
    } else {
        return true;
    }
}
