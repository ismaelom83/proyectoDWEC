
//ejercicio1 
/*Este programa pide por pantalla dos numeros enteros y luegon muestra
 la suma la multiplicacion y la division de dichos numeros*/

function operadoresNormales() {
    var numero1;
    var numero2;
    numero1 = prompt("Introduce el primero numero");
    numero2 = prompt("Introduce el segundo numero");

    mostrar1.innerHTML = "El primer numero es : " + numero1;
    mostrar2.innerHTML = "El segundo numero es : " + numero2;

    var suma = parseInt(numero1) + parseInt(numero2);
    var multiplicacion = parseInt(numero1) * parseInt(numero2);
    var division = parseInt(numero1) / parseInt(numero2);

    mostrar3.innerHTML = "La suma es:  : " + suma;
    mostrar4.innerHTML = "La multiplicacion es : " + multiplicacion;
    mostrar5.innerHTML = "La division es : " + division;

}

/* ---------------------------------------------------------------------------------------------------------------- */

// ejercico 2
/* Este programa pregunta el precio luego pregunta el tanto por ciento de descuento 
 y por ultima muestra el precio final con descuento */

function tantoPorciento() {

    var precio;
    var descuento;
    var precioFinal;
    var precio1

    precio = prompt("¿Cual es el precio del producto? ");
    descuento = prompt("¿Cual es el tanto porciento de descuento del producto? ");

    precio1 = (precio * descuento) / 100;
    precioFinal = precio - precio1;
    mostrar1.innerHTML = "El precio es: " + precio + " €";
    mostrar2.innerHTML = "EL descuento es: " + descuento + " %";
    mostrar3.innerHTML = "El precio final es: " + precioFinal + " €";

}

/* ---------------------------------------------------------------------------------------------------- */

// ejercico 3
/*Este programa pide un numero hexadecimal y lo muestra en decimal,
 y lo mismo con octal.*/

function operadorBases() {
    var decimal;
    var hexa;
    var octa;
    decimal = Number(prompt("Escribe un numero Decimal"));
    mostrar1.innerHTML = "El numero decimal es: " + decimal;

    hexa = decimal.toString(16);

    mostrar2.innerHTML = "El numero decimal " + decimal + " en hexadecimal es: " + hexa;

    octa = decimal.toString(8);

    mostrar3.innerHTML = "El numero decimal " + decimal + " en octal es: " + octa;

}

/*------------------------------------------------------------------------------------------------------------*/

// ejercicio 4

/*Este programa pregunta  al usuario  los dos lados de un rectangulo
 y presente por pantalla el perimetro del rectangulo y el area del rectangulo*/

function rectangulo() {
    var base;
    var altura;

    base = prompt("Di cual es la base del rectangulo");
    mostrar1.innerHTML = "La base del rectangulo es: " + base;

    altura = prompt("Di cual es la altura del rectangulo");
    mostrar2.innerHTML = "La base del rectangulo es: " + altura;

    perimetro = (parseInt(base) + parseInt(altura)) * 2;

    alert("El perimetro del rectangulo es: " + perimetro);

    area = parseInt(base) * parseInt(altura);

    alert("El area del rectangulo es: " + area);
}

/*----------------------------------------------------------------------------------------------------------------*/

// ejercicio 5

/*Este programa pide al usuario que introduzca los segundos 
 y le conteste diciendo el numero de dias, horas , minutos, segundos que son.*/

function tiempo() {

    var segundos;
    var tiempo;

    tiempo = prompt("Introduce un numero de segundos");
    mostrar1.innerHTML = "Los segundos introducidos son: " + tiempo;


    var dias = Math.floor(tiempo / 86400);
    var horas = Math.floor((tiempo / 3600) / 24);
    var minutos = Math.floor((tiempo % 3600) / 60);
    segundos = tiempo % 60;


    minutos = minutos < 10 ? '0' + minutos : minutos;

    segundos = segundos < 10 ? '0' + segundos : segundos;

    horas = horas == 24 ? '0' + horas : horas;

    var result = dias + ":Dias:" + horas + ": horas: " + minutos + ": minutos :" + segundos + ": segundos";

    mostrar2.innerHTML = result;

}

/*---------------------------------------------------------------------------------------------------------*/

// ejercicio 6

/*Evalua y prueba las siguientes expresiones == y ===*/

function asignacionComparacion() {
    var uno = null == undefined;
    var dos = "NaN" == NaN;
    var tres = 5 == NaN;
    var cuatro = NaN == NaN;
    var cinco = false == 0;
    var seis = true == 1;
    var siete = undefined == false;
//    var ocho = Null == 0;
    var nueve = "5" == 5;
    var diez = "123" == 123;

    var uno1 = null === undefined;
    var dos1 = "NaN" === NaN;
    var tres1 = 5 === NaN;
    var cuatro1 = NaN === NaN;
    var cinco1 = false === 0;
    var seis1 = true === 1;
    var siete1 = undefined === false;
//    var ocho1 = Null ==0 0;
    var nueve1 = "5" === 5;
    var diez1 = "123" === 123;

    mostrar1.innerHTML = "null == undefined es igual a:  " + uno;
    mostrar2.innerHTML = " 'NaN' == NaN es igual a: " + dos;
    mostrar3.innerHTML = "5 == NaN es igual a: " + tres;
    mostrar4.innerHTML = "NaN == NaN es igual a: " + cuatro;
    mostrar5.innerHTML = "false == 0 es igual a: " + cinco;
    mostrar6.innerHTML = "true == 1 es igual a: " + seis;
    mostrar7.innerHTML = "undefined == false es igual a: " + siete;
//    mostrar8.innerHTML = "'Null' == 0 es igual a: " + ocho;
    mostrar9.innerHTML = "'5' == 5 es igual a: " + nueve;
    mostrar10.innerHTML = "'123' == 123 es igual a: " + diez;

    mostrar11.innerHTML = "null === undefined es igual a:  " + uno1;
    mostrar12.innerHTML = " 'NaN' === NaN es igual a: " + dos1;
    mostrar13.innerHTML = "5 === NaN es igual a: " + tres1;
    mostrar14.innerHTML = "NaN === NaN es igual a: " + cuatro1;
    mostrar15.innerHTML = "false === 0 es igual a: " + cinco1;
    mostrar16.innerHTML = "true === 1 es igual a: " + seis1;
    mostrar17.innerHTML = "undefined === false es igual a: " + siete1;
//    mostrar18.innerHTML = "'Null' === 0 es igual a: " + ocho1;
    mostrar19.innerHTML = "'5' === 5 es igual a: " + nueve1;
    mostrar20.innerHTML = "'123' === 123 es igual a: " + diez1;

}

/*-------------------------------------------------------------------------------------------------*/

// ejercicio 7

/*Este ejercicio pide por pantalla primero un numero y luego otro
 y hace la suma logica, muestra el resultado pero tambien el proceso en binario*/

function sumaLogica() {

    var numero1;
    var numero2;
    var binario1;
    var binario2;
    var sumaBinaria;
    numero1 = Number(prompt("Introduce El primer Numero"));
    numero2 = Number(prompt("Introduce el segundo Numero"));

    mostrar1.innerHTML = "El Primer Numero Es: " + numero1;
    mostrar2.innerHTML = "El Segundo Numero Es: " + numero2;

    binario1 = numero1.toString(2);



    binario2 = numero2.toString(2);

  


    mostrar4.innerHTML = "El primer Numero en binario Es: " + binario1;
    mostrar5.innerHTML = "El segundo Numero en binario Es: " + binario2;


    sumaBinaria = numero1;
    sumaBinaria |=numero2;

    mostrar6.innerHTML = "La suma de El numero binario " + binario1 + " y el numero binario " + binario2 + " es: " + sumaBinaria;

}

/*---------------------------------------------------------------------------------------------------------------------------*/

// ejercicio 8

/*Este programa pide un numero por pantalla y posteriormnte
 otro que va a ser el valor de desplazamiento hacia la izquierda
 muestre su valor y tambien muestre el proceso en binario*/

function desplazamientoNumerico() {

    var nDerecha;
    var nIzquierda;
    var nFinal;
    var b1;
    var b2;
    var nFinalBinario;

    nDerecha = Number(prompt("Introduzca el primer numero entero "));
    nIzquierda = Number(prompt("NUMERO DE DESPLAZAMIENTO A LA IZQUIERDA "));

    mostrar1.innerHTML = "El primer numero es: " + nDerecha;
    mostrar2.innerHTML = "El segundo numero es: " + nIzquierda;

    nFinal = nDerecha <<= nIzquierda;

  

    b1 = nDerecha.toString(2);
    b2 = nIzquierda.toString(2);

    mostrar4.innerHTML = "El primer numero en binario es: " + b1;
    
    nFinalBinario =  nFinal.toString(2);
    
    mostrar6.innerHTML="El resultado de asignar el segundo numero a la izquierda en binario es: "+nFinalBinario;

}