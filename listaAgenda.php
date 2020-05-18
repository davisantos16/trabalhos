<?php


include('../../conexao/conexao.php');



$sql = mysqli_query($conecta, "SELECT * FROM AGENDA");

while ($resultado = mysqli_fetch_assoc($sql)) {
    $agenda[] = array_map('utf8_encode', $resultado);
}

echo json_encode($agenda);

?>

