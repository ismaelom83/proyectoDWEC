<?php

define("CONEXION", "mysql:host=192.168.20.19:3306;dbname=BD_Maria"); //clase
//define("CONEXION", "mysql:host=192.168.1.203:3306;dbname=DAW215LoginLogoutMulticapaPDO"); //casa
define("USUARIO", "adminsql");
define("PASSWORD", "paso");
try {
    $miDB = new PDO(CONEXION, USUARIO, PASSWORD);
    $miDB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $resultado = $miDB->prepare("SELECT *  FROM asignaturas");
    $resultado->execute();
} catch (Exception $ex) {
    echo $ex->getMessage();
    die("mostar");
    $resultado = null;
}

if ($resultado->rowCount() != 0) {
    $devuelve = [];
    while($resultadoFormateado = $resultado->fetchObject()) {
        $id = $resultadoFormateado->id;
        $nombre = $resultadoFormateado->nombre;
        $devuelve[] = array(
            "id" => $id,
            "nombre" => $nombre
        );
    }
    echo json_encode($devuelve);
}
?>