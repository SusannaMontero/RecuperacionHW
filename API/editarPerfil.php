<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// importamos el archivo con la conexión a la BD
require_once 'conDBLocal.php';

//recoje los datos que le pasa el sevice en formato json
$json = file_get_contents('php://input');

//guardamos en la variable params los datos descodificados que recojemos del JSON que nos manda el ts
$params = json_decode($json);

// class Modificar {
  //creamos la función y le pasamos el objeto con los datos
  
    // creamos la conexión
    $conexion = conexion();

    // realizamos la query que actualizara los valores en la base de datos
    $query =  "UPDATE usuari SET
									nom='".$params->nom."',
									cognom='".$params->cognom."',
									telefon='".$params->telefon."',
									email='".$params->email."',
                  dni='".$params->dni."'
								WHERE id_usuari='".$params->id_usuari."'";
                  //nickProfesor='".$param->nickProfesor."',


    //recojemos el resultado de si se ha ejecutado correctamente o no la query obteniendo true en caso que si o false en caso que no.
    $resultado =  mysqli_query($conexion, $query);

    // Para cerrar la conexion con la base de datos.
    $conexion->close();

    //variable donde vamos a guardar un 1 si se hace el insert a la base de datos o un 0 si no se ha podido realizar el insert.
    $insert;

    if($resultado) {
      $insert = 1;
    }
    else {
      $insert = 0;
    }
    //devolver el valor del insert al modificar el perfil.php
    // return $insert;
    print json_encode($insert);

  // }
// }
?>
