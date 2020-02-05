<?php

//echo sleep(5);
//echo date('j/b/Y G:i:s.');

$array  = ["Lunes","martes","Miercoles","Jueves","Viernes"];
$get = $_POST["numero"];
echo $array[$get-1];
