
function cargar() {
    var select1 = document.getElementsByTagName('select')[0];
   var index = select1.options[select1.selectedIndex].value;
    console.log(index);    
};



window.addEventListener('load',cargar,false);