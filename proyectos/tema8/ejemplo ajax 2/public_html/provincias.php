<?php

define("CONEXION", "mysql:host=192.168.1.245:3306;dbname=DAW209DBproyectoLoginLogoffMulticapaPOO"); //clase
//define("CONEXION", "mysql:host=192.168.1.203:3306;dbname=DAW215LoginLogoutMulticapaPDO"); //casa
define("USUARIO", "usuarioDAW209DBLoginPOO");
define("PASSWORD", "paso");
try {
    $miDB = new PDO(CONEXION, USUARIO, PASSWORD);
    $miDB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $resultado = $miDB->prepare("SELECT *  FROM T03_provincias WHERE T03_pid_provincia LIKE '49%'");
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
        $id_provincia = $resultadoFormateado->T03_pid_provincia;
        $provincia = $resultadoFormateado->T03_pprovincia;
        $devuelve[] = array(
            "id" => $id,
            "T03_pid_provincia" => $id_provincia,
            "T03_pprovincia" => $provincia,
        );
    }
    echo json_encode($devuelve);
}
?>
