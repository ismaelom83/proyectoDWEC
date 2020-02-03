
class Rectangulo {
    constructor(ancho, alto, color) {
        this.ancho = ancho;
        this.alto = alto;
        this.color = color;
    }
    setAltura(valor) {
        this.alto = valor;
    }
    setAnchura(valor) {
         this.ancho = valor;
    }
    pintar(id) {
          document.getElementById(id).style.width = this.ancho;
           document.getElementById(id).style.height = this.alto;
          document.getElementById(id).style.backgroundColor = this.color;      
    }

    mostrar(id) {
        document.getElementById(id).innerHTML = "La anchura es: " +this.ancho + " La altura es: " +this.alto + " Y el color es: " +this.color;
    }
}
function rectangulos() {

  
    var rectangulo1 = new Rectangulo("600px", "250px", "red");
    var rectangulo2 = new Rectangulo("250px", "100px", " blue");
    var rectangulo3 = new Rectangulo("700px", "200px", "black");
    var rectangulo4 = new Rectangulo("650px", "250px", "green");
     
    
    rectangulo1.setAnchura("150px");
    rectangulo1.setAltura("225px");
    
   
    rectangulo1.pintar("1");
    rectangulo1.mostrar("5");
    rectangulo2.pintar("2");
    rectangulo2.mostrar("6");
    rectangulo3.pintar("3");
    rectangulo3.mostrar("7");
    rectangulo4.pintar("4");
    rectangulo4.mostrar("8");
    
}

