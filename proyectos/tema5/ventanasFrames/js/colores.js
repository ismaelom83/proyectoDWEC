
function leer(){
    console.log(event.origin);
    console.log(event.data);    
}
function enviar(){
    console.log(this.style.backgroundColor);
      window.opener.document.getElementsByTagName('body')[0].style.backgroundColor = this.style.backgroundColor;
      
}


function cargar() {
  window.opener.postMessage('esta cargado','*');
  window.addEventListener('message',leer,false);
  
  var lis = document.getElementsByTagName('div');
    for (var i= 0;i<lis.length;i++){
        lis[i].addEventListener('click',enviar,false);
    }
}



window.addEventListener('load',cargar,false);