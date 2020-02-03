
/*
 * autor ismael heras
 */

/* 
 * pido por pantalla dos edades y di quien es mayor.
 * */

// ejercicio1

function edades() {

    var edad1;
    var edad2;

    edad1 = parseInt(prompt("Dime la primera edad"));
    edad2 = parseInt(prompt("Dime la segunda edad"));

    mostrar1.innerHTML = "la primera eded es: " + edad1;
    mostrar2.innerHTML = "la segunda eded es: " + edad2;

    if (edad1 > edad2) {
        mostrar3.innerHTML = "El mayor es: " + edad1;
    } else if (edad1 == edad2) {
        mostrar4.innerHTML = "son iguales";
    } else {
        mostrar5.innerHTML = "El mayor es: " + edad2;

    }
}

/*----------------------------------------------------------------------------------------------------------------------*/

// ejercico2

/*
 * escribe un programa que pida tres numeros y que escriba si son los tre iguales
 * si hay dos iguales y si son los tres distintos.
 */

function tresNumeros() {

    var n1;
    var n2;
    var n3;

    n1 = parseInt(prompt("Escribe el primer numero"));
    n2 = parseInt(prompt("Escribe el segundo numero"));
    n3 = parseInt(prompt("Escribe el tercer numero"));

    mostrar1.innerHTML = "El primer numero es: " + n1;
    mostrar2.innerHTML = "El primer numero es: " + n2;
    mostrar3.innerHTML = "El primer numero es: " + n3;

    if ((n1 == n2) && (n2 == n3)) {
        mostrar4.innerHTML = "Los Tres son iguales";
    } else if (n1 == n2 || n1 == 3 || n2 == n3) {
        mostrar5.innerHTML = "Dos son iguales";
    } else {
        mostrar6.innerHTML = "Son todos distintos";
    }


}

/*--------------------------------------------------------------------------------------------------*/

// ejercico 3

/*
 * pide por pantalla un numero y muestar la 
 * tabla de multiplicar de dicho numero.
 */

function tablaMultiplicar() {
    var numero;

    numero = parseInt(prompt("Escribe un numero entero"));

    mostrar1.innerHTML = "la tabla de multiplicar del  numero : " + numero + " es la siguiente";

    for (var i = 0; i < 10; i++) {
        mostrar2.innerHTML += numero + " * " + i + " = " + numero * i + "<br>";
    }

}

/*--------------------------------------------------------------------------------------------*/



/*ejercicio 4*/

/*
 * ss e realiza un programa con bucles que muestre una figura
 */

function figura1() {

    var filas;

    mostrar1.innerHTML = "Realizacion de piramide con bucles de javascript";
    filas = parseInt(prompt("Escribe el numero de filas que quieres que tenga la piramide"));

    for (var i = 1; i <= filas; i++) {
        for (var j = 1; j <= (filas - i) * 2; j += 1) {
            document.write("&nbsp");
        }
        for (var k = 1; k <= (i * 2) - 1; k++) {
            document.write("*");
        }
        document.write("<br>");
    }


}

/*--------------------------------------------------------------------------------------------------------------*/

// ejercicio 5

/*
 * ss e realiza un programa con bucles que muestre una figura
 */
// 
function figura2() {

    var fila = prompt("Introduzca el número de filas que quieras ");

    var asteriscos = 1;
    asteriscos = parseInt(asteriscos);
    var espacios = fila / 2;

    for (var i = 0; i < fila / 2; i++) {
        for (var x = 0; x < espacios; x++) {
            document.write(" &nbsp; ");
        }
        for (var x = 0; x < asteriscos; x++) {
            document.write("*");
        }
        asteriscos += 2;
        espacios--;
        document.write('<br/>');
    }
    asteriscos -= 2;
    espacios++;
    for (var i = 0; i < fila / 2; i++) {
        asteriscos -= 2;
        espacios++;
        for (var x = 0; x < espacios; x++) {
            document.write(" &nbsp; ");
        }
        for (var x = 0; x < asteriscos; x++) {
            document.write("*");
        }

        document.write('<br/>');
    }
}
/*---------------------------------------------------------------------------------------------------*/

// ejercicio 6

/*ss e realiza un programa con bucles que muestre una figura
 * 
 */


//  function figura3(){
//                
//                var f=prompt("Introduzca el número de filas que quieras");
//                
//                
//                var asteriscos=1;
//                asteriscos=parseInt(asteriscos);
//                var espacios=f/2;
//                
//                for(var i=0;i<f/2;i++){
//                    for(var x=0;x<espacios;x++){
//                       document.write(" &nbsp;");
//                    }
//                    for(var x=0;x<asteriscos;x++){
//                        if(x===0 || x+1===asteriscos){
//                            document.write("*");
//                        }else{
//                            document.write(" &nbsp;");
//                        }
//                    }
//                    asteriscos+=2;
//                    espacios--;
//                   document.write("<br>");
//                }
//                asteriscos-=2;
//                espacios++;
//                for(var i=0;i<f/2;i++){
//                    asteriscos-=2;
//                    espacios++;
//                    for(var x=0;x<espacios;x++){
//                        document.write(" &nbsp;");
//                    }
//                    for(var x=0;x<asteriscos;x++){
//                        if(x===0 || x+1===asteriscos){
//                            document.write("*");
//                        }else{
//                           document.write(" &nbsp;");
//                        }
//                    }
//                    
//                    document.write("<br>");
//                }
//            }














// ejercicio 7

/* 
 * realiza un progrma utilizando bucles
 * que muestre una figura.
 *   */

function amstrong() {
//
//    var numero = prompt("Introduce un entero de tres cifras");
//    var numeroDigitos = numero.length;
//    var sum = 0;
//
//    mostrar1.innerHTML = "El numero introducido es: " + numero;
//    mostrar2.innerHTML = "El numero introducido tiene : " + numeroDigitos+" digitos";
//    
//    for (i = 0; i < numeroDigitos; i++) {
//        sum += Math.pow(numero.charAt(i), numeroDigitos);
//    }
//
//    if (sum == numero) {
//        mostrar3.innerHTML = "El numero introducido si es amstrong";
//
//    } else {
//        mostrar4.innerHTML = "El numero introducido no es amstrong";
//    }


    var numero;
    do {
        numero = parseInt(prompt("Introduzca un número de 3 cifras"));
    } while (numero < 100 || numero > 999);

    mostrar1.innerHTML = "El numero introducido es: " + numero;

    var numero1 = parseInt(numero / 100);
    var numero2 = parseInt((numero % 100) / 10);
    var numero3 = parseInt(numero % 100 % 10);
    mostrar2.innerHTML = "El primer numero es: " + numero1 + "<br>";
    mostrar3.innerHTML = "El primer numero es: " + numero2 + "<br>";
    mostrar4.innerHTML = "El primer numero es: " + numero3 + "<br>";

    var amstrong1 = parseInt((numero1) ** 3) + parseInt((numero2) ** 3) + parseInt((numero3) ** 3);

    if (numero == amstrong1) {
        mostrar5.innerHTML = "si es amstrong";
    } else {
        mostrar6.innerHTML = "no es amstrong";
    }



}


/*----------------------------------------------------------------------------------------*/

// ejercicicio 8

/* 
 * realiza un programa que le introduzca un valor de un producto con 2 decimales y posteriormente 
 un valor con el que pagar por encima  (valor del producto 6.33€ y ha pagado con 10€).
 muestra el numero el numero minimo de monedas con las que puede devolve rel cambio. */

//function maquinaExpendedora() {
//    
//    
//    
//}

/*----------------------------------------------------------------------------------------------------------------------*/

//ejercicio 9

/*
 * escribe un programa que pide un año y dice si es bisiesto o no.
 */

function bisiesto() {
    var parrafo = document.getElementById("mostrar1");
    var anyo, bisiesto;

    do {
        anyo = prompt("Introduzca el año");
    } while (anyo < 0 || isNaN(parseInt(anyo)));
    
    parrafo.innerHTML += 'Se ha introducido el año: ' + anyo + '<br><br>';

    bisiesto = false;

    if (anyo % 4 === 0) {
        if (!anyo % 100 === 0) {
            bisiesto = true;
        } else if (!anyo % 400 === 0) {
            bisiesto = true;
        }
    }

    if (bisiesto) {
        parrafo.innerHTML += 'El año introducido si bisiesto';
    } else {
        parrafo.innerHTML += 'El año introducido no es bisiesto<br>';
    }
}

/*---------------------------------------------------------------------------------------------------------------------*/

//ejercicio 10

/* 
 * de un trabajador se optiene por una linea el sueldo y otra 
   linea los años de antiguedad y muestre el salario final.
 * */

function sueldo(){
                var parrafo=document.getElementById("mostrar1");
                var sueldo,antiguedad,salario;
                
                do{
                   sueldo=prompt("Introduzca el sueldo del trabajador");
                   antiguedad=prompt("Introduzca la antiguedad del trabajador");
                }while(isNaN(parseInt(sueldo)) || isNaN(parseInt(antiguedad)));
                parrafo.innerHTML += 'El sueldo es: '+sueldo+' €<br><br>';
                parrafo.innerHTML += 'Los años de antiguedad son: '+antiguedad+' años<br><br>';
                
                if(sueldo<500 && antiguedad>10){
                    salario=sueldo*3;
                }else if(sueldo<500 && antiguedad<10){
                    salario=sueldo*2;
                }else if(sueldo>=500){
                    salario=sueldo;
                }
                
                parrafo.innerHTML += 'El salario final es: '+salario+' €<br><br>';
            }
            
  /*----------------------------------------------------------------------------------------------------------------------------------*/
  
  // ejercicio 11
  
  /*
   * realiza un programa que sea el juego del adivina 
    de un numero del (1-100).
   */
  
              function adivina(){
                var numMayor,numMenor,acertado,noAcertado,contador;
                
                contador=1;
                numMayor=parseInt(100);
                numMenor=parseInt(1);
                
                alert("El juego ha comenzado!\nPiensa un número de 1-100");
                acertado=confirm("¿Tu número es el "+parseInt((numMayor+numMenor)/2)+"? ");
                
                while(!acertado){
                    noAcertado=confirm("¿El número es mayor que "+parseInt((numMayor+numMenor)/2)+"(Aceptar) o menor(Cancelar)");
                    if(noAcertado){
                        numMenor=parseInt((numMayor+numMenor)/2);
                    }else{
                        numMayor=parseInt((numMayor+numMenor)/2);
                    }
                    contador++;
                    acertado=confirm("¿Tu número es el "+parseInt((numMayor+numMenor)/2)+"? ");
                }
                
                alert("El número de intentos es "+contador);
            }
            
            