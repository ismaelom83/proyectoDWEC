/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function crearBD(){
    //crear la base de datos
    mibbdd = openDatabase("colchones","1.0","base de datos dedicada a nacho",1024*1024);
    console.log(mibbdd);
    
    //creamos la tabla colchón
    mibbdd.transaction( function(sql){
        console.log(sql);
        sql.executeSql("create table colchon (id,marca,dimension,material)");
    });
    
    
}

function insertarBD(){
    var id = document.getElementById("id").value;
    var marca = document.getElementById("marca").value;
    var dimension = document.getElementById("dimension").value;
    var material = document.getElementById("material").value;
    
    mibbdd = openDatabase("colchones","1.0","base de datos dedicada a nacho",1024*1024);
    
    //insertamos en la base de datos
    mibbdd.transaction(function(sql){
        sql.executeSql("insert into colchon (id,marca,dimension,material)  values ( ?,?,?,? )",[id,marca,dimension,material]);       
    });    
    
}

function leerBD(){
    mibbdd = openDatabase("colchones","1.0","base de datos dedicada a nacho",1024*1024);
    var p = document.getElementById("parrafo");
    
    //necesito transacion
    mibbdd.transaction(function (sql){
        //ejecutamos un select
        sql.executeSql("select * from colchon",[],
        function(sql,resultSet){
            //select nos devuelve un resultSet
            console.log(resultSet);
            for(i=0;i<resultSet.rows.length;i++){
                p.innerHTML += "<br>" + resultSet.rows.item(i).id +","
                +resultSet.rows.item(i).marca + ","
                +resultSet.rows.item(i).dimension + ","
                +resultSet.rows.item(i).material ;
            }
        },
        function errorCallback(tx,error){
            alert(error.message);
        }
        )
    });
    
}

function cargar(){
    var crear = document.getElementById("crear");
    crear.addEventListener('click',crearBD,false);
    var insertar = document.getElementById("insertar");
    insertar.addEventListener('click',insertarBD,false);
    var leer = document.getElementById("leer");
    leer.addEventListener('click',leerBD,false);
    
}

window.addEventListener('load',cargar,false)


