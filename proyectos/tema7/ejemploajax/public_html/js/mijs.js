


function cargar() {
    //crear objeto de ajax
    miHHR = new XMLHttpRequest();
    //iniciar el boton
    var boton = document.getElementById("conectar");
    boton.addEventListener('click',conectar,false);
    
}

function conectar() {
    //primero se evalua que hay una instancia del objeto
    if(miHHR){
        //abrimos la peticion
        //get o post
        //url del servidor
        //true si es asincrino o false si es sincrono
//        var url;
        var valorInput = document.getElementById("numero").value;
//        url = "fecha.php?numero="+valorInput;
//        miHHR.open('GET',url,true);
        
//        miHHR.onreadystatechange = cambio;
//        miHHR.send(null);
        
        
        
        //para enviar por post
        miHHR.open('POST','fecha.php',true);
        miHHR.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        
        
        miHHR.onreadystatechange = cambio;
        miHHR.send("numero="+valorInput);
        
    }else{
        alert("no conexion");
    }
}

function cambio(){
    console.log(this.readyState);
    console.log(this.responseText);
    console.log(this.status);
    //si hay respuesta del servidor 4
    //si ha sido satisfactoria 200
    if(this.readyState == 4 && this.status == 200){
        var p = document.getElementById("respuesta");
        p.innerHTML = "La fecha en el servidor es: "+this.responseText;
    }
}

window.addEventListener('load',cargar,false);



