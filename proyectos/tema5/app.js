


function cargar() {
    //acesso directo a los nodos
    //por nombre
    console.log(document.getElementById('texto'));
    //por etiqueta
    console.log(document.getElementsByTagName('input'));
    
    
    
    //selecion del texto por id
    var elemento = document.getElementById('texto');
    console.log(elemento);
    //por nombre del nodo
    console.log(elemento.nodeName);
    //atributo
    var atributo = document.getElementById('texto').attributes('id');
    //nombre del atributo
    console.log(atributo.nodeName);
    var texto = document.getElementsByTagName('p')[0].firstChild; 
    console.log(texto);
    
    
    //tipos de nodos
    console.log(texto.nodeType);
    console.log(atributo.nodeType);
    console.log(elemento.nodeType);
    
    //valor del elemento
    console.log(texto.nodeValue);
    console.log(atributo.nodeValue);
    console.log(elemento.nodeValue);
    
    //el padre del nodo
     console.log(texto.parentNode);
      console.log(atributo.parentNode);
       console.log(elemento.parentNode);
       
       //si tiene hijos
        console.log(texto.childNode);
        console.log(atributo.childNode);
        console.log(elemento.childNode);
        console.log(parrafo.childNode);
        
        //primer y ultimo hijo
        console.log(parrafo.firstChild);
         console.log(parrafo.lastChild);
         
         //acceder a loos hermanos del padre        
         console.log(parrafo.previousSibling).previousSibling;
         console.log(parrafo.next.Sibling);
         
         //a quien pertenece
         console.log(parrafo.owenerDocument);
         
         
         //manejo de atributos
         //accedemos a todos
         console.log(elemento.attributes);
         
         
         //getter de atributo
         console.log(elemento.getAttribute('class'));
         //setter si existe lo modifica y7 si no lo crea
         elemento.setAttribute('size','10');
         console.log(elemento.attributes);
         //qitamos atributo
         elemento.removeAttribute('size');
         console.log(elemento.attributes);
         
         //crear elemtos en el DOM
         //ejemplo con lista
         var lista = document.createElement('li');
         var texto2 = document.createTextNode('bocadillo de tortilla');
         lista.appendChild(texto2);
         var ul = document.getElementsByTagName('ul')[0];
         ul.appendChild(lista);
        
        
        //hamburguesa
         var lista = document.createElement('li');
         var texto2 = document.createTextNode('bocadillo de tortilla');
         lista.appendChild(texto2);
         var li = document.getElementsByTagName('li')[0];
         ul.insertBefore(lista,li);
         
         //copiar y pegar
         var li  = document.getElementsByTagName('li')[0];
         var clonado = li.cloneNode(true);
         var ul2 = document.getElementsByTagName('ul')[1];
         ul2.appendChild(clonado);
         
         //reemplazar el segundode abajo
         var macarrones = document.getElementsByTagName('li')[0];
         var clona = macarrones.cloneNode(true);
         var lip = document.getElementsByTagName('ul')[1].firstChild;
         ul2.replaceChild(clona,lip);
         
         //borrar
         var li = document.getElementsByTagName('li')[0];
         var ul2 = document.getElementsByTagName('ul')[0];
         ul2.removeChild(li);
    
};


window.addEventListener('load',cargar,false);

