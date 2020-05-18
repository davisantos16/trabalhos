<?php

include ('../../conexao/conexao.php');


$sql = "DELETE FROM caes WHERE idCaes = ".$_POST['idCaes']."";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);


?>