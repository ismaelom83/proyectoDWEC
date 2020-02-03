
//autor ismael heras.

//ejercicio 1

/*
 * un programa que pide por pantalla primero un numro de 
 * elementos y luego elementos para rellenar el array y por ultimo lo muestra
 * separado por comas.
 */

function relleno() {

//    var parrafo = document.getElementById("mostrar");



    var numero = parseInt(prompt("Introduce un numero de indice del array"));

    var numeroA = numero;
    var array1 = Array(numeroA);
    var contador = 0;


    do {
        numero = prompt("Introduce un numero");
        array1[contador] = numero;
        contador++;

    } while (contador < numeroA);

    document.write(array1 + ",");



}

/*------------------------------------------------------------------------------------------*/

//ejercicio 2

/*
 * escribe un array ordenalo y devuelve otro array 
 * sin que haya numeros repetidos
 */

function duplicado() {

    var array1 = Array(2, 5, 9, 7, 6, 3, 1, 5, 4, 8, 3, 2, 6, 9, 3, 5, 1, 2, 3);

    array1.sort();

    document.write("Array original");
     document.write("<br>");
    document.write(array1.toString());

    for (var i = 0; i < array1.length; i++) {
        if (array1[i] == i) {
            array1.splice(i, 1);
            i--;
        }

    }
    document.write("<br>");
    document.write("Array modificado");
     document.write("<br>");
    document.write(array1.toString());
}

/*-------------------------------------------------------------------------------------------------*/

//ejercicio 3

/*
 *  Escribe un programa que genere un array de Lunes a Domingo y 
 *  después lo divida en dos, uno con los días laborales y otro con
 *   los festivos.
 */

function diasSemana() {




    var array1 = Array("Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
            "Domingo");

    var array3 = array1.slice(5);
    var array2 = array1.slice(0, 5);







    document.write("El array con todos los dias de la semana es: " + array1.toString());
    document.write("<br>");
    document.write("<br>");
    document.write("El array con todos los dias de la semana lavorables es: " + array2.toString());
    document.write("<br>");
    document.write("<br>");
    document.write("El array con todos los dias de la semana festivos es: " + array3.toString());


}

/*----------------------------------------------------------------------------------------------------------------------------*/

//ejercicio 4

/*
 *  Escribe un programa que dado un array devuelva la posición donde haya el valor
 * 3 y cambie el valor por el número de la posición ([2,5,9,7,6,3,1,5,4,8,3,2,6,9,3,5,1,2,3])
 */

function cambiar() {

//declaracionde e inicializacion del array
    var array = Array(2, 5, 9, 7, 6, 3, 1, 5, 4, 8, 3, 2, 6, 9, 3, 5, 1, 2, 3);

//    array.sort();

    //muesrtra el array por el metodo toString();
    document.write("Array original: " + array.toString());
    document.write("<br>");
    document.write("<br>");


    for (var i = 0; i < array.length; i++) {
        //condicion que dice si encuentra un tres entra en el bucle.
        if (array[i] == 3) {
            /*con este splice le decimos que cuando encuentre un tres
             * lo borre y le ponga la posicion que esta gracias a la i
             * del bucle nos muestra la posicion.
             * */
            array.splice(i, 1, i);
        }
    }

    document.write("Array sin 3 y con la posicion que ocupa en su lugar: " + array.toString());

}

/*---------------------------------------------------------------------------------------------------------------------*/

//ejercicio 5

/*
 *  Escribe un programa que pida una posición y una palabra, introduce 
 * la palabra en la posición dada, el programa no acabará hasta rellenar 10
 *  posiciones, el usuario no tiene por qué saber que en programación se empieza 
 *  en el 0, responderá a posiciones de 1 a 10 aunque use 0-9. Si el usuario intenta
 *  introducir una palabra en una posición que ya está ocupada le saldrá un error,
 *   diciéndole que ya ha rellenado ese elemento. Cuando haya escrito todos los elementos,
 *    muestra todos los elementos.
 * 
 */

function posicionPalabra() {

    var posicion = Array();
    var acumulador = 0;

    for (var i = 0; i < 10; i++) {

        var relleno = parseInt(prompt("Por favor introduzca una posicion del 1 al 10"));
        posicion[acumulador] = relleno;
        acumulador++;
    }



    document.write(posicion.toString());

}

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

//ejercicio6

/*
 * pide por pantalla el tamaño de una matriz y rellena. 
 */

function rellenoMatriz() {

    var filas = parseInt(prompt("Introduce el numero de filas de la MATRIZ"));


   var matriz = new Array(filas);

    for (var i = 0; i < filas; i++) {
        matriz[i] = new Array(filas);
    }
//    console.log(matriz);
    
    for (var i = 0; i <matriz.length; i++) {  
        for (var j = 0; j <matriz[i].length; j++) {
            matriz[i][j];
        }  
    }
    
    document.write(matriz.toString());

};







/*--------------------------------------------------------------------------------------------------------------------------*/

//ejercicio 7


/*
 *  Escribe un programa que multiplique dos matrices.
 */

function multiplicar() {

    var array1 = [2, 3, 4, 5];
    var array2 = [3, 1, 1, 2];

    var resultado = 0;
    for (var i = 0; i < array1.length; i++) {
        resultado += (array1[i] * array2[i]);
    }

    
    document.write("primer Array");
    document.write("<br>");
    document.write(array1);
    document.write("<br>");
 document.write("segundo Array");
    document.write("<br>");
    document.write(array2);
    document.write("<br>");
 document.write("Array multiplicado");
    document.write("<br>");
    document.write(resultado);
}