function validar() {
    if (document.getElementById("nombre").value != "" &&
        document.getElementById("apellidos").value != "" &&
        document.getElementById("dni").value != "" &&
        document.getElementById("email").value != "" &&
        document.getElementById("textArea").value != "" &&
        document.getElementById("opcion1").value != ""
    ) {

        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellidos").value;
        var dni = document.getElementById("dni").value;
        var selectciclo = document.getElementById("select1");
        var selectcurso = document.getElementById("select2");
        var textArea = document.getElementById("textArea");
        var LPD = document.getElementById("opcion1");


        if (validarAlfabetico(nombre)) {
            document.getElementById("nombre").value;

            document.getElementById("nombre").style.borderColor = 'blue';

        } else {
            alert("El campo nombre no es correcto,solo se admiten letras");
            document.getElementById("nombre").style.borderColor = 'red';
            return false;
        }

        if (validarAlfabetico(apellidos)) {
            document.getElementById("apellidos").value;
            document.getElementById("apellidos").style.borderColor = 'blue';

        } else {
            alert("El campo apellidos no es correcto,solo se admiten letras");
            document.getElementById("apellidos").style.borderColor = 'red';
            return false;
        }



        if (validarDni(dni)) {
            document.getElementById("dni").value;
            document.getElementById("dni").style.borderColor = 'blue';
        } else {
            document.getElementById("dni").style.borderColor = 'red';
            return false;
        }

        if (selectciclo.selectedIndex == 0) {
            document.getElementById("selectoropciones").style.color = 'red';
            alert("Seleccione una de las opciones del selector de opciones");
            return false;
        }
        if (selectcurso.selectedIndex == 0) {
            document.getElementById("selectoropciones").style.color = 'red';
            alert("Seleccione una de las opciones del selector de opciones");
            return false;
        }
      
        

        if (validarAlfaNumerico(textArea)) {
            document.getElementById("textArea").value;
            document.getElementById("textArea").style.borderColor = 'blue';

        } else {
            alert("El campo texarea no es correcto,solo se admiten letras y numeros");
            document.getElementById("textArea").style.borderColor = 'red';
            return false;
        }

    } else {
        alert("rellena todos los campos");
        return false;
    }
}

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
            alert('La letra no corresponde con el DNI.');
        } else {
            return true;
        }
    } else {
        alert('DNI no válido.');
        return false;
    }
}

function validarAlfaNumerico(campo) {
    var expreg = /[a-zA-Z0-9]/;
    if (expreg.test(campo)) {
        return true;
    } else {
        alert("Campo alfanumerico erroneo solo se admiten numeros y letras");
        return false;
    }
}

