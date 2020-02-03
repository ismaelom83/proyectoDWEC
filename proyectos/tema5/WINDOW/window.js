/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var miVentana;

//Funcion para abrir una ventana;
function abrir(){
    miVentana = open('window2.html','_blank','width=300px,height=500px');
    console.log(miVentana.location.pathname);
}

function enviar(){
    miVentana.postMessage('Hola clase','*');
}
function recibir(){
    var ul = document.getElementById("receta")
    console.log(event.source.location.pathname);
    ul.innerHTML = event.data;}

function cargar(){
    var btnAbrir = document.getElementById('btnAbrir');
    //a�adimos el evento abrir al boton
    btnAbrir.addEventListener('click',abrir,false);
    var btnEnviar = document.getElementById('btnEnviar');
    //a�adimos el evento abrir al boton
    btnEnviar.addEventListener('click',enviar,false);
    window.addEventListener('message',recibir,false);
}

window.addEventListener('load',cargar,false);
