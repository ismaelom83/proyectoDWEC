
function validar() {

    //decimos los campos que son obligatorios
    if (document.getElementById("campoAlfabetico").value !== "" &&
        document.getElementById("dni").value !== "" &&
        document.getElementById("email").value !== "" &&
        document.getElementById("fechaObli").value !== "" &&
        document.getElementById("entero").value !== "" &&
        document.getElementById("float").value !== "" &&
        document.getElementById("tlf").value !== "" &&
        document.getElementById("passwd").value !== "" &&
        document.getElementById("alfaNumerico").value !== "" &&
        document.getElementById("textArea").value !== ""


    ) {

        var alfabetico = document.getElementById("campoAlfabetico").value;
        var alfabeticoOpci = document.getElementById("campoAlfabeticoOpcional").value;
        var dni = document.getElementById("dni").value;
        var dniOpcional = document.getElementById("dniOpcional").value;
        var fechaObli = document.getElementById("fechaObli").value;
        var entero = document.getElementById("entero").value;
        var float = document.getElementById("float").value;
        var tlf = document.getElementById("tlf").value;
        var passwd = document.getElementById("passwd").value;
        var alfaNumerico = document.getElementById("alfaNumerico").value;
        var textArea = document.getElementById("textArea").value;
        var archivos = document.getElementById("archivos");
        var select = document.getElementById("select");



        if (validarAlfabetico(alfabetico)) {
            document.getElementById("campoAlfabetico").value;
            document.getElementById("campoAlfabetico").style.borderColor = 'blue';

        } else {
            alert("El campo alfabetico no es correcto,solo se admiten letras");
            document.getElementById("campoAlfabetico").style.borderColor = 'red';
            return false;
        }
        if (validarAlfabetico(alfabeticoOpci)) {
            document.getElementById("campoAlfabeticoOpcional").value;
            document.getElementById("campoAlfabeticoOpcional").style.borderColor = 'blue';


        } else {
            alert("El campo alfabetico no es correcto,solo se admiten letras");
            document.getElementById("campoAlfabeticoOpcional").style.borderColor = 'red';
            return false;
        }

        if (validarDni(dni)) {
            document.getElementById("dni").value;
            document.getElementById("dni").style.borderColor = 'blue';
        } else {
            document.getElementById("dni").style.borderColor = 'red';
            return false;
        }

        if (dniOpcional !== "") {
            if (validarDni(dniOpcional)) {
                document.getElementById("dniOpcional").value;

            } else {
                document.getElementById("dniOpcional").style.borderColor = 'red';
                return false;
            }
        }

        if (fechaObli !== "") {
            document.getElementById("fechaObli").value;
            document.getElementById("fechaObli").style.borderColor = 'blue';
        } else {
            document.getElementById("fechaObli").style.borderColor = 'red';
            return false;
        }


        if (validarEntero(entero)) {

            document.getElementById("entero").value;
            document.getElementById("entero").style.borderColor = 'blue';

        } else {
            document.getElementById("entero").style.borderColor = 'red';
            return false;
        }

        if (validarFloat(float)) {

            document.getElementById("float").value;
            document.getElementById("float").style.borderColor = 'blue';

        } else {
            document.getElementById("float").style.borderColor = 'red';
            return false;
        }

        if (validarTlf(tlf)) {

            document.getElementById("tlf").value;
            document.getElementById("tlf").style.borderColor = 'blue';

        } else {
            document.getElementById("tlf").style.borderColor = 'red';
            return false;
        }

        if (validarPasswd(passwd)) {
            document.getElementById("passwd").value;
            document.getElementById("passwd").style.borderColor = 'blue';

        } else {
            document.getElementById("passwd").style.borderColor = 'red';
            return false;
        }

        
     

        if (select.selectedIndex == 0) {
            document.getElementById("selectoropciones").style.color = 'red';
            alert("Seleccione una de las opciones del selector de opciones");
            return false;
        }



        if (archivos.files.length != 0) {
            document.getElementById("archivos").value;
            document.getElementById("archivos").style.borderColor = 'blue';

        } else {
            alert("Debes seleccionar al menos un archivo");
            document.getElementById("labelArchivos").style.color = 'red';
            return false;
        }

        if (validarAlfaNumerico(alfaNumerico)) {
            document.getElementById("alfaNumerico").value;
            document.getElementById("alfaNumerico").style.borderColor = 'blue';
        } else {
            document.getElementById("alfaNumerico").style.borderColor = 'red';
            return false;
        }

        if (validarAlfaNumerico(textArea)) {
            document.getElementById("textArea").value;
            document.getElementById("textArea").style.borderColor = 'blue';
        } else {
            document.getElementById("textArea").style.borderColor = 'red';
            return false;
        }

    } else {
        alert("Rellena todos los campos");
        if (document.getElementById("campoAlfabetico").value == "" &&
            document.getElementById("dni").value == "" &&
            document.getElementById("email").value == "" &&
            document.getElementById("fechaObli").value == "" &&
            document.getElementById("entero").value == "" &&
            document.getElementById("float").value == "" &&
            document.getElementById("tlf").value == "" &&
            document.getElementById("passwd").value == "" &&
            document.getElementById("alfaNumerico").value == ""


        ) {
            document.getElementById("campoAlfabetico").style.borderColor = 'green';
            document.getElementById("dni").style.borderColor = 'green';
            document.getElementById("email").style.borderColor = 'green';
            document.getElementById("fechaObli").style.borderColor = 'green';
            document.getElementById("entero").style.borderColor = 'green';
            document.getElementById("float").style.borderColor = 'green';
            document.getElementById("tlf").style.borderColor = 'green';
            document.getElementById("passwd").style.borderColor = 'green';
            document.getElementById("alfaNumerico").style.borderColor = 'green';
            document.getElementById("alfa").style.color = 'green';
            document.getElementById("labelArchivos").style.color = 'green';
            document.getElementById("selectoropciones").style.color = 'green';



            return false;
        }
        return false;
    }
}

/**-------------------------------funciones de validacion----------------------------------------------------------------------------------------------- */


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

function validarEntero(entero) {
    if (entero % 1 == 0) {
        return true;
    } else {

        alert("Campo entero erroneo, Solo se admiten numeros enteros");
        return false;
    }
}

function validarFloat(float) {
    var RE = /^\d*(\.\d{1})?\d{0,1}$/;
    if (RE.test(float)) {
        return true;
    } else {
        alert("Campo float erroneo, solo se admiten numeros decimales");
        return false;
    }
}

function validarTlf(tlf) {
    var expreg = /^[9|6|7][0-9]{8}$/;
    if (expreg.test(tlf)) {
        return true;
    } else {
        alert("Campo Telefono invalido,Debe de empezar por 6,7 o 9  y tener 9 digitos");
        return false;
    }
}

function validarPasswd(passwd) {
    var expreg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (expreg.test(passwd)) {
        return true
    } else {
        alert("Campo contraseña invalido, Tiene que contener una mayuscala una minuscula un numero y al menos 6 caracteres");
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

/*function validarCheckbox() {
    var min = 1;
    var max = 5;
    var contador = 0;
    var i = min;
    while (contador < 2) {
        if (document.formularioIsmael.elements[i].checked) {     
            contador++;
        }
        i++;
        if (i == max) {
            break;
        }
    }
    if (contador == 2) {
        return true;
    } else {
        alert(contador);
        alert("Debes selecccionar al menos tres Aficiones");
        return false;
    }
    
}*/