<?php

require '../Clases/prueba.php';

$rolOne = new Usuario("Cristian", "Pedraza", "1001327829", "C.C", "1");


echo $rolOne->nombre . "<br>";
echo $rolOne->apellido . "<br>";
echo $rolOne->documento . "<br>";
echo $rolOne->tipo_documento . "<br>";
echo $rolOne->rol . "<br>";

$rolOne->setCorreo("zsssss");
$rolOne->setPassword("3212689197");
$rolOne->setPassword2("3212689197");


echo "Su password es: " . $rolOne->getPassword()."</br>";

echo "Su password veriificada es: ".$rolOne->getPassword2();