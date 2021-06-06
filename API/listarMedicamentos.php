<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

require 'conDBLocal.php';

$postdata = file_get_contents("php://input");
$BDcon = new BD();
$con = $BDcon->conexio();

if(isset($postdata) && !empty($postdata)) {

  $array[0][0] = 0;
  $array[0][1] = "";
  $array[0][2] = 0;

  $x=0;

  $query = json_decode($postdata);

  $select = "SELECT id_medicament, nom, codi_barres FROM medicaments WHERE id_medicament In $query";

  $consulta = mysqli_query($con, $select);

  while ($valores = mysqli_fetch_array($consulta)) {
    $array[$x][0]=$valores[0];
    $array[$x][1]=$valores[1];
    $array[$x][2]=$valores[2];

    $x++;

  }

  echo json_encode($array);


}


?>


