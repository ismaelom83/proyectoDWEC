<?php
$host ="192.168.20.19";
$user = "usuarioDAW209DBLoginPOO";
$passord = "paso";
$db = "DAW209DBproyectoLoginLogoffMulticapaPOO";

$con = mysli_query($host,$user,$passord,$db);

if(!$con){
    die("Conexion Fallida");
    
}else{
    $devuelve[] = array();
    $consulta = "SELECT *FROM T03_provincias";
}

