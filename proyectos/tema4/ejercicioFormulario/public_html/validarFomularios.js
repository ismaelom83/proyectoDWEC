

function validar() {
//va a ser valido y va a mandar los datos solo si los nomb4res no estan vacios

    if (document.getElementById("nombre").value !== "" &&
            document.getElementById("apellidos").value !== "" &&
            document.getElementById("dni").value !== "" &&
            document.getElementById("email").value !== "" &&
            document.getElementById("ciudad").value !== "" &&
            document.getElementById("pais").value !== "") {




        var m1 = document.getElementById("nombre").value;
        var m2 = document.getElementById("apellidos").value;
        var m3 = document.getElementById("ciudad").value;
        var m4 = document.getElementById("pais").value;
        var dni = document.getElementById("dni").value;
       
        var expreg = /^[a-zA-Z ]*$/i;

       m1 = m1.trim();
       m1 = m1.charAt(0).toUpperCase() + m1.slice(1);
       document.getElementById("nombre").value =  m1.charAt(0).toUpperCase() + m1.slice(1);
       document.getElementById("apellidos").value =  m2.charAt(0).toUpperCase() + m2.slice(1); 
       document.getElementById("ciudad").value =  m3.charAt(0).toUpperCase() + m3.slice(1); 
       document.getElementById("pais").value =  m4.charAt(0).toUpperCase() + m4.slice(1); 

       
       
        if (expreg.test(m1)) {
           document.getElementById("nombre").value;
//             document.getElementById("nombre").trim();
            document.getElementById("nombre").style.borderColor = 'blue';
        } else {
            alert("El nombre no es correcto,solo se admiten letras");
            document.getElementById("nombre").style.borderColor = 'red';
            return false;
        }

        if (expreg.test(m2)) {
            document.getElementById("apellidos").value;
            document.getElementById("apellidos").style.borderColor = 'blue';
        } else {
            alert("Los apaellidos no son correctos,solo se admiten letras");
            document.getElementById("apellidos").style.borderColor = 'red';
            return false;
        }
        if (expreg.test(m3)) {
          document.getElementById("ciudad").value;
            document.getElementById("ciudad").style.borderColor = 'blue';
        } else {
            alert("La ciudad no es correcta,solo se admiten letras");
            document.getElementById("ciudad").style.borderColor = 'red';
            return false;
        }
        if (expreg.test(m4)) {
            document.getElementById("pais").value;
            document.getElementById("pais").style.borderColor = 'blue';
        } else {
            alert("El pais no es correcto,solo se admiten letras");
            document.getElementById("pais").style.borderColor = 'red';
            return false;
        }

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
            document.getElementById("dni").style.borderColor = "red";
            alert('DNI no válido.');
        }
        return false;


    } else {
        alert("Rellena todos los campos");
        return false;
    }

  
    return true;
}
;





