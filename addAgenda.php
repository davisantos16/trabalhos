<?php
include ('../../conexao/conexao.php');


$cliente = $_POST['cliente'];
$nomeAnimal = $_POST['nomeAnimal'];
$dia = $_POST['dia'];
$inicio = $_POST['inicio'];
$termino = $_POST['termino'];
$servico = $_POST['servico'];
$valor = $_POST['valor'];



$nomeAnimal = utf8_decode($nomeAnimal);
$cliente = utf8_decode($cliente);
$servico = utf8_decode($servico);



if(strlen($cliente) > 1 && strlen($nomeAnimal) > 1 && strlen($valor) > 1){

$sql = "INSERT INTO agenda (cliente, nomeAnimal, dia, inicio, termino, servico, valor)
        VALUES ('$cliente', '$nomeAnimal', '$dia',  '$inicio', '$termino', '$servico', '$valor')";
    
    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }




}else{
    $data = array("return" => "Todos os campos são obrigatórios");
}

echo json_encode($data);



?>