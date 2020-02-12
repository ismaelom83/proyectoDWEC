$(function () {

    miHHR = new XMLHttpRequest();
//peticion de modulos 
    url = "modulo.php";

    miHHR.open('GET', url, true);
    miHHR.onreadystatechange = peticion;
    miHHR.send(null);
    function peticion() {
        if (this.readyState == 4 && this.status == 200) {
            var ciclos = this.responseText;
            var arrayCiclos = JSON.parse(ciclos);
            console.log(ciclos);
            console.log(arrayCiclos);
            for (var i = 0; i < arrayCiclos.length; i++) {
                $("#modulo").append("<option value=" + arrayCiclos[i] + ">" + arrayCiclos[i] + "</option>");
            }
        }

    }

    $("#modulo").change(conectarModulos);
    function conectarModulos() {
        if (miHHR) {
            var url;
            var valorModulo = $("#modulo").val();
            url = "curso.php?modulo=" + valorModulo;
            console.log(valorModulo);
            miHHR.open('GET', url, true);
            miHHR.onreadystatechange = cambio;
            miHHR.send(null);
        } else {
            alert("no conexion");
        }
    }
    function cambio() {
        if (this.readyState == 4 && this.status == 200) {
//            console.log(this.responseText);
        }
    }

    $("#cursoa").change(conectarCurso);

    function conectarCurso() {
        if (miHHR) {
            var url;
            var valorCurso = $("#cursoa").val();
            url = "curso.php?curso=" + valorCurso + "&modulo=" + $("#modulo").val();
            miHHR.open('GET', url, true);
            miHHR.onreadystatechange = mostrarAsignaturas;
            miHHR.send(null);
        } else {

            alert("no conexion");
        }
    }
    function mostrarAsignaturas() {
        if (this.readyState == 4 && this.status == 200) {if ($("#hideAsig").children() !== 0) {
                $("#hideAsig").empty();
            }
            if ($("#hideAsig").children() !== 0) {
                $("#hideAsig").empty();
            }
            var asignaturas = this.responseText;
            var arrayasignaturas = JSON.parse(asignaturas);
            for (var i = 0; i < arrayasignaturas.length; i++) {

                $("#hideAsig").append("<label><input type='checkbox'> " + arrayasignaturas[i] + "</label><br>");
            }

        }
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

    
    $("#Nombrea").blur(function () {
        $(this).val($(this).val().charAt(0).toUpperCase() + $(this).val().slice(1));
        if (validarAlfabetico(this.value) === true) {
            $("#enombre").remove();
            $(this).css("color", "#000");
            $(this).css("background", "lightgreen");
        } else {
            $("#enombre").remove();
            $(this).css("color", "red");
            $(this).after("<span id='enombre'>Error en el texto introducido</span>");
        }
    });
    $("#Apellidosa").blur(function () {
        $(this).val($(this).val().charAt(0).toUpperCase() + $(this).val().slice(1));
        if (validarAlfabetico(this.value) === true) {
            $(this).css("color", "#000");
            $(this).css("background", "lightgreen");
        } else {
            $(this).css("color", "red");
            $(this).after("<span>Error en el texto introducido</span>");
        }
    });
   
    $("#Dnia").blur(function () {
        if (validarDni(this.value) === true) {
            $(this).css("color", "#fff");
            $(this).css("background", "lightgreen");
        }  else {
            $(this).css("color", "red");
            $(this).after("<span>Error en el Dni</span>");
        }
    });
    
    
})

/*----------------------validaciones------------------------------*/

function validarAlfabetico(campo) {
     var expreg = /^[a-zA-Z ]*$/i;
    if (expreg.test(campo) /* && campo !== "" */) {
        return true;
    }
    return false;
}

function validarDni(dni) {
    var numero;
    var let;
    var letra;
    var expresion_regular_dni;
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    if (expresion_regular_dni.test(dni) == true) {
        numero = dni.substr(0, dni.length - 1);
        let = dni.substr(dni.length - 1, 1);
        let = let.toUpperCase();
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != let) {
        } else {
            return true;
        }
    } else {
   
        return false;
    }
}