/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function leer(){
    console.log(event.origin);
    console.log(event.data);
    
}

function enviar(){
    window.opener.postMessage('<li>'+this.innerHTML+'</li>','*');
}

function cargar(){
    console.log(window.opener.location.pathname);
    //Añadimos que escuche un evento de tipo mensaje
    window.addEventListener('message',leer,false);
    var lis = document.getElementsByTagName('li');
    for (var i= 0;i<lis.length;i++){
        lis[i].addEventListener('click',enviar,false);
    }
}


window.addEventListener('load',cargar,false)

