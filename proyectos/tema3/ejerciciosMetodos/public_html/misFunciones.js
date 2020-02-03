
/*
 * autor: ismael heras
 * 
 * realizamos un documento llamado misFunciones.js, para añadir las siguientes funciones
 * una funcion random  a la que pasamos tres valores min max dec , donde min es el valor minimo max el valor maximo y
 * dec los decimales que queremos que tenga.
 */

function primera() {
    
    var min = parseInt(prompt("Escribe el numero minimo que se va a ejecutar el random"));
    var max =  parseInt(prompt("Escribe el numero maximo que se va a ejecutar el random"));
    var dec = parseInt(prompt("Escribe el numero de decimales que va a tener nuestro random"));
     function ramdon(min, max,dec) {
      return ((Math.random() * (max - min)) + min).toFixed(dec);
    }   

    document.write("numero aleatorio entre el numero "+min+" y el numero "+max+" con "+dec+" decimales");
    document.write("<br>");
    document.write((ramdon(min,max,dec)));
};

 

