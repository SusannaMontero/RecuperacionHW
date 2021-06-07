<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

$json = file_get_contents('php://input');

// importamos el archivo con la conexión a la BD
require_once 'conDBLocal.php';

// creamos la conexión
$conexion = conexion();

if(isset($json) && !empty($json)) {

  $array[0][0] = 0;
  $array[0][1] = "";
  $array[0][2] = 0;

  $x=0;

  $query = json_decode($json);

  $select = "SELECT id_medicament, nom, codi_barres FROM medicaments WHERE id_medicament In $query";

  $consulta = mysqli_query($conexion, $select);

  while ($valores = mysqli_fetch_array($consulta)) {
    $array[$x][0]=$valores[0];
    $array[$x][1]=$valores[1];
    $array[$x][2]=$valores[2];

    $x++;

  }
  $conexion->close();
  print json_encode($array);


}


?>


