
//autor ismael heras 


//ejercicio1

/*
 *realiza un programa que realize la bonoloto 5 valores entre 1 -50
 *que no se repitan y del 1-9
 */


function bonoloto() {



    var anumeros = [];
    document.write("Los numeros de la bonoloto son: ");
    var aux;
    document.write("<br>");



    for (var i = 0; i < 5; i++) {

        do {
            aux = Math.round(Math.random() * 50);

        } while (anumeros.indexOf(aux) >= 0);
        anumeros[i] = aux;
        document.write(anumeros[i] + ",");
    }


    document.write("<br>");
    for (var i = 0; i < 1; i++) {
        document.write("El complementario es: " + "<br>" + (Math.round(Math.random() * 9)));
    }
}

/*-------------------------------------------------------------------------------------------------------------------*/

//ejercicio2

/*
 * ewaliza un programa que hace ecuaciones de segundo grado pidiendo a,b y c.
 */

function ecuacionesSegundogrado() {

    var a = prompt("Introduce el valor de a");
    var b = prompt("Introduce el valor de b");
    var c = prompt("Introduce el valor de c");

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    var resultado1 = (-b - (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
    var resultado2 = (-b + (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);

    if (isNaN(resultado1) || isNaN(resultado2)) {

        document.write("Sin solucion");
    } else {
        document.write("El resultado 1 es: " + resultado1.toFixed(2)) + "<br>";
        document.write("El resultado 2 es: " + resultado2.toFixed(2));
    }
}

/*-------------------------------------------------------------------------------------------------------*/

//ejercicio3

//pide por pantalla el valor del radio de una circunferencia y muestar
//el diametro y el area.

function areaCircunferencia() {

    var radio = prompt("Introduce el radio de una circunferencia.");

    var diametro = radio * 2;

    var pi = Math.PI;

    var area = pi * Math.pow(radio, 2);


    document.write("El diametro es: " + diametro);
    document.write("<br>");
    document.write("El area es: " + diametro);
    document.write(area);
}
;

/*-----------------------------------------------------------------------------------------------------------------------*/

//ejercicio 4

/*
 * realizar un programa que pida dos catetos de un triangulo y calcula la hipotenusa
 */

function hipotenusa() {

    var cateto1 = prompt("Introduce el primer cateto");
    var cateto2 = prompt("Introduce elsegundo cateto");
    
    document.write("El primer cataeto es: "+cateto1);
    document.write("<br>");
    document.write("El segundo cataeto es: "+cateto2);
    document.write("<br>");
    
    document.write("la hipotenusa de los catetos anteriores es: "+Math.hypot(cateto1,cateto2));
};

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//ejercicio 5

/*
 * realiza  un programa que pida por pantalla 10 numeros y muestralos
 * ademas de cual es el mayor y el menor
 */

function mayorMenor() {
    
    var valores = new Array(1,2,3,4,5,6,7,8,9,10);
    document.write("valores del array del 1 al 10");
    document.write("<br>");
 
   
    document.write(valores.toString());
    document.write("<br>");
    
    var min=Math.min.apply(null, valores);
    var max=Math.max.apply(null, valores);
    document.write("El valor mas pequeño del array es: "+min);
    document.write("<br>");
    document.write("El valor mayor del array es: "+max);
    document.write("<br>");
    
};