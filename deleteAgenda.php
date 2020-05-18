<?php

include ('../../conexao/conexao.php');


$sql = "DELETE FROM agenda WHERE idCliente = ".$_POST['idCliente']."";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);


?>