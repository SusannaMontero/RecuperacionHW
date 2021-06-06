<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header('Content-Type: text/html; charset=UTF-8');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");



// $json = file_get_contents('php://input');
// $params = json_decode($json);

require_once 'conDBLocal.php';

$conexion = conexion();

// Lista todos los medicamentos
$query = "SELECT * FROM usuari";
$resultado = mysqli_query($conexion, $query);

$datos = [];

while ($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}

$conexion->close();

$respuesta = new \stdClass();

if(count($datos)==0){
  $respuesta->resultado = false;
  $respuesta->msg = "Sin Medicamentos";
  $respuesta->datos = [];

  print json_encode($respuesta);

}else {

  print json_encode($datos);
}


?>


