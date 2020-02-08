<?php

$primeroSRM = ["SOMM", "Ofimatica", "Redes", "AppWeb", "Fol"];
$segundoSRM = ["MyMdE", "SoER", "Seguridad", "SerRed", "EIE"];
$primeroDAW = ["SI", "SGBD", "Programacion", "LDM", "Entornos", "Fol"];
$segundoDAW = ["DWEC", "DWES", "DAW", "DIW", "FOL"];

//tiene que mirar que ciclo es.
$getModulo = $_GET['modulo'];
$getCurso = $_GET['curso'];
if($getModulo == 'DAW' && $getCurso == "primer"){
    echo json_encode($primeroDAW);
    unset($primeroDAW);
}
if($getModulo == 'DAW' && $getCurso == "segundo"){
    echo json_encode($segundoDAW);
    unset($segundoDAW);
}

if($getModulo == 'SMR' && $getCurso == "primer"){
    echo json_encode($primeroSRM);
    unset($primeroSRM);
}
if($getModulo == 'SMR' && $getCurso == "segundo"){
    echo json_encode($segundoSRM);
    unset($primeroDAW);
}