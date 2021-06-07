<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// recoje los datos que le pasa el service en formato json
$json = file_get_contents('php://input');

// guardamos en la variable params los datos descodificados que recojemos del JSON que os manda el ts
$params = json_decode($json);

// importamos el archivo con la conexión a la BD
require_once 'conDBLocal.php';

// creamos la conexión
$conexion = conexion();

// realizamos la query a la BD
$query =  "SELECT nombreM FROM favoritos WHERE id_usuari=".$params."";
$resultado = mysqli_query($conexion, $query);

// inciamos la variable $datos como array donde vamos a guardar los datos que obt4engamos de la consulta
$datos = [];

// bucle para que guarde los datos encontrados con el select de la consulta en el array
while ($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;

// cerramos la conexión a la BD
$conexion->close();

print json_encode($datos);
}
?>




<!-- select m.nom, concat (f.id_medicament), concat (f.id_usuari), concat (m.id_medicament) 
from favoritos f, medicaments m where f.id_usuari = 1 AND f.id_medicament = m.id_medicament GROUP BY m.nom -->

<!-- // SELECT m.nom from favoritos f, medicaments m 
// where f.id_medicament = m.id_medicament 
// AND f.id_usuari = 1"; -->