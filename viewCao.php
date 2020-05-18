<?php

include('../../conexao/conexao.php');


$idCaes = $_POST['idCaes'];

$sql = mysqli_query($conecta, "SELECT * FROM caes WHERE idCaes = ".$idCaes."");

while ($resultado = mysqli_fetch_assoc($sql)) {
    $caes[] = array_map('utf8_encode', $resultado);
}

echo json_encode($caes);

?>

