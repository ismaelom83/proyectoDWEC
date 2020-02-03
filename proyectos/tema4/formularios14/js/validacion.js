function validar() {
    if (document.getElementById("nombre").value != "" &&
        document.getElementById("apellidos").value != "" &&
        document.getElementById("email").value != ""
    ) {

        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellidos").value;
        var email = document.getElementById("email").value;


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

       if(validarCheckbox()) {
        
       }else{
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
function validarCheckbox() {
    var min = 1;
    var max = 10;
    var contador = -1;
    var i = min;
    while (contador < 3) {
        if (document.formularioIsmael.elements[i].checked) {
            contador++;
        }
        i++;
        if (i == max) {
            break;
        }
    }
    if (contador == 3) {
        return true;
    } else {
        
        alert("Debes selecccionar al menos tres Aficiones");
        return false;
    }
    
}

