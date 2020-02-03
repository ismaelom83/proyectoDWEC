
//ejercicio 1

/*
 *realizar un programa que cambie los dias de la semana a mayuscula 
 */

function mayusculas() {

   const dias = ['lunes', 'martes', 'mierciles', 'jueves', 'viernes', 'sabado', 'domingo'];
    document.write("Array original");
    document.write("<br>");
    document.write(dias.toString());
    document.write("<br>");
    document.write("Array en mayusculas");
    document.write("<br>");
    for (let i = 0; i < dias.length; i++) {
        dias[i] = dias[i].charAt(0).toUpperCase() + dias[i].slice(1);

    }
   
        document.write(dias.toString());   
}

/*--------------------------------------------------------------------------------------------------*/

//ejerciicio 2

/* 
 * escribir un programa que pida por pantalla y devuelva el numero de palabras que tiene la frase.
  */
 
 function numeroPalabras() {
     
     var frase = prompt("escribe una frase");
     
     fraseDividida = frase.split(" ");
     numeroPalabras =  fraseDividida.length;
     
     document.write("Frase escrita es: " +frase);
     document.write("<br>");
     document.write("El numero de palabras de la frase es: "+numeroPalabras);
     
    
}

/*-----------------------------------------------------------------------------------------------------------*/

//ejercicio 3

/*
 * escribir un programa que pida por pantalla una frase y devuelva la frase 
 * cambiando las a por @, las e por 3 y las o por 0.
 */

function cammbioPalabras() {
    
    var frase = prompt("escribe una frase");
    
    var cambio = frase;
    
    
    do{
        cambio = cambio.replace("a","@");
        cambio = cambio.replace("e","3");
        cambio = cambio.replace("o","0");
        
    } while (cambio.includes("a","e","o"))
    
  
   
    document.write("La frase original es: "+frase);
    document.write("<br>");
    
     document.write("La frase reemplazada de a por @, e por 3 y o por 0 es: "+cambio);   
};

/*----------------------------------------------------------------------------------------------------------------------------------*/

//ejercicio 4

/*
* escribir un programa que pida por pantalla una frase y elimina las vocales.
 */


function eliminarVocales() {
    
    
     
     function eliminarVocales(str) {
    let resultado = str.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, '')
    return resultado
}
     var frase = prompt("escribe una frase");
     
    document.write("La frase original es: "+frase);
    document.write("<br>");
     
     var eliminado = eliminarVocales(frase);
     
     document.write("La frase sin vocales es: "+eliminado);
    
}

/*------------------------------------------------------------------------------------------------------*/

//ejercicio 5

/**
* escribir un programa que pida por pantalla una fecha en formato dd/mm/yyyy 
* separa cada valor y muestra el dia es:  el mes es:  el año es: 
 */

function cambiarFechas() {
       var fecha = prompt("Escribe la fecha de nacimiento en formato (dd/mm/aaaa)");

    function validarFormatoFecha(campo) {
        var RegExPattern = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
        if ((campo.match(RegExPattern)) && (campo != '')) {
            return true;
        } else {
            return false;
        }
    }
    function existeFecha(fecha) {
        var fechaf = fecha.split("/");
        var day = fechaf[0];
        var month = fechaf[1];
        var year = fechaf[2];
        var date = new Date(year, month, '0');
        if ((day - 0) > (date.getDate() - 0)) {
            return false;
        }
        return true;
    }

    if (validarFormatoFecha(fecha)) {
        if (existeFecha(fecha)) {
            alert("La fecha introducida es correcta.");
        } else {
            alert("La fecha introducida no existe.");
        }
    } else {
        alert("El formato de la fecha es incorrecto.");
    }
    
    var fecha2 = new Date(fecha);
    
    document.write("La fecha introducida es: "+fecha);
    document.write("<br>");
    
    
  
    var dia  = fecha2.getDate();
    
    var mes = fecha2.getMonth();
    var anyo= fecha2.getFullYear();
    
   var  fechaModificada = "El dia es: "+dia+" El mes es: "+mes+" el año es: "+anyo;
   
   document.write(fechaModificada);    
};

/*-----------------------------------------------------------------------------------------------------*/

//ejercicio 6

/*
* con la setiquetas de js genera el siguiente documento (no usar html ni css).
 */

function etiquetasJs() {
    
    var p1 = document.getElementById("mostrar1");
    var p2 = document.getElementById("mostrar2");
    var p3 = document.getElementById("mostrar3");
    var p4 = document.getElementById("mostrar4");
    var p5 = document.getElementById("mostrar5");
    cadena1= "pizzero tiene un link a telepizza";
    cadena2= "Cocina para Todos";
    cadena3= "La cocina tu alcance";
    cadena4= "Descubre los platos mas exquisitos, <br> faciles y economicos que puedas <br> imaginar";
    cadena5= " Existen diferencias importantes entre el texto sin formato (creado y editado por los editores de texto) <br> y el Estas convenciones definen muchos caracteres imprimibles,<br> pero también caracteres no imprimibles que controlan el flujo del texto,<br> tales como espacio, salto de línea y salto de página, pero el texto plano no <br> contiene otra información sobre el texto en sí, ni siquiera la convención de codificación de <br> caracteres empleada. ";
    
    p1.innerHTML = cadena1.link("https://www.telepizza.es/productos/pizzas?gclid=CjwKCAjwo9rtBRAdEiwA_WXcFjqflca3kQTKRpE1SkRxjsamYUioG_M5UdXQiyU0ckay7uegDpJ9LhoCXREQAvD_BwE");
    "<br>";
    p2.innerHTML = cadena2.bold().fontcolor("green").fontsize(5);
    p3.innerHTML = cadena3.fontcolor("green").fontsize(5);
    p4.innerHTML = cadena4.bold().fontcolor("red").fontsize(8);
   
    p5.innerHTML = cadena5;
        
}












