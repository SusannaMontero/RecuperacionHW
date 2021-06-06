<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');
$params = json_decode($json);

require_once 'conDBLocal.php';

$conexion = conexion();

//lista todos los favoritos de un usuario (el que le pasamos como parametro)
$query = "SELECT m.nom from favoritos f, medicaments m 
where f.id_usuari = ".$params." 
AND f.id_medicament = m.id_medicament 
GROUP BY m.nom";

$resultado = mysqli_query($conexion, $query);

$datos = [];

while ($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}

$conexion->close();

$respuesta = new \stdClass();

if(count($datos)==0){
  $respuesta->resultado = false;
  $respuesta->msg = "No existen rankings";
  $respuesta->datos = [];

  print json_encode($respuesta);

}else {

  print json_encode($datos);
}

?>
<!-- select m.nom, concat (f.id_medicament), concat (f.id_usuari), concat (m.id_medicament) 
from favoritos f, medicaments m where f.id_usuari = 1 AND f.id_medicament = m.id_medicament GROUP BY m.nom -->