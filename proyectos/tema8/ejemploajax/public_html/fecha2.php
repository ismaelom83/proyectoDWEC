<?php

//echo sleep(5);
//echo date('j/b/Y G:i:s.');

$array  = ["Lunes","martes","Miercoles","Jueves","Viernes"];
$get = $_GET["numero"];
echo $array[$get-1];
