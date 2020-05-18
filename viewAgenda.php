<?php

include('../../conexao/conexao.php');


$idCliente = $_POST['idCliente'];

$sql = mysqli_query($conecta, "SELECT * FROM agenda WHERE idCliente = ".$idCliente."");

while ($resultado = mysqli_fetch_assoc($sql)) {
    $agenda[] = array_map('utf8_encode', $resultado);
}

echo json_encode($agenda);

?>

