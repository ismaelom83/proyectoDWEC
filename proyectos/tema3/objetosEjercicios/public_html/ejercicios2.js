


//generamos un programa que genere un objeto de tipo persona dcon nombre apallido y DNI,
//y dos clases que hereden de ella, estudiante y profesor


class Persona {

    constructor(nombre, apellido, DNI) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
    }
}

class Estudiante extends Persona {
    constructor(nombre, apaellido, DNI, asignastura) {
        super(nombre, apaellido, DNI);
        this.asignastura = asignastura;
    }
}

class Profesor extends Persona {
    constructor(nombre, apaellido, DNI, corregido) {
        super(nombre, apaellido, DNI);
        this.corregido = corregido;
    }
}

//creacion del array
var asignatura= new array(1,2,3,4);
var asignaturasImpartidas = new array();

//creacion de alumnos
var estudiante1 = new Estudiante("ismael","heras","1234");
var estudiante2 = new Estudiante("jose","salvador","1235");
var estudiante3 = new Estudiante("pepe","gonzalez","1236");
var estudiante4 = new Estudiante("luis","perez","1237");

//creacion de profesores
var profesor = profesor("david");