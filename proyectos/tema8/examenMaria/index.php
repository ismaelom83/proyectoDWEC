<?php

$uno = "ismael";
$dos = "pedro";

$primero = $_POST["numero"];
$segundo = $_POST["n"];

if($primero == 1){
    echo $uno;
}else{
     echo $dos;
}
if($segundo == 2){
    echo $dos;
}else{
    echo $uno;
}