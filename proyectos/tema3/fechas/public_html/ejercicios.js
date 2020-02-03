
//ejercicio 1

/*
 * realiza un progranma que pida por pantalla una fecha(dd/mm/aaaa)
 * comprueba que ha interoducido valores correctos y devuelva 1000 dias posteriotr.
 */

function fecha1000() {

    var fecha = prompt("Introduce una fecha formato (dd/mm/aaaa)");
    
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

var fecha1 = new Date(fecha);
var dias=1000;

 fecha1.setDate(fecha1.getDate()+dias)
  
    document.write("La fecha "+ fecha  +" dentro con mil dias mas es: "+fecha1);
}



/*----------------------------------------------------------------------------------------------------------------------------*/

//ejercicio2

/*
 * realiza un programa que muestre la hora de españa y la diferencia con UTC-0.
 */

function diferenciaHoraria() {

    horaLocal = new Date();
    horaUTC = new Date();

    document.write("La hora local es: " + horaLocal.toLocaleTimeString());
    document.write("<br>");
    document.write("La hora UTC-0 es: " + horaUTC.toUTCString());

}

/*---------------------------------------------------------------------------------------------*/

//ejercicio 3

/*
 * escribe un programa que pide la feche de nacimiento (dd/mm/aaaa)
 * compruebe que ha introducido valores correctos y muestre los años
 * meses y dias que han transcurrido desde su nacimiento.
 */

function fechaNacimento() {

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

    var fechaActual = new Date();
    var fecha1 = new Date(fecha);

    var diferencia = fechaActual.getTime() - fecha1.getTime();
    document.write("La edad que tienes es de: "+Math.floor(diferencia / 1000 / 365 / 3600 / 24) + " años ");

    
    document.write(" "+Math.floor(diferencia / (1000 / 30 / 3600) % 12-2) + " meses ");

   
    document.write(" y "+Math.floor(diferencia / (1000 / 3600 / 24) % 30) + " dias");
}




