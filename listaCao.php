<?php


include('../../conexao/conexao.php');



$sql = mysqli_query($conecta, "SELECT * FROM CAES");

while ($resultado = mysqli_fetch_assoc($sql)) {
    $caes[] = array_map('utf8_encode', $resultado);
}

echo json_encode($caes);

?>

