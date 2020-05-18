<?php
include ('../../conexao/conexao.php');

$idCliente = $_POST['idCliente'];
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



$sql = "UPDATE agenda
        SET cliente = '".$cliente."',
            nomeAnimal = '".$nomeAnimal."',
            dia = '".$dia."',
            inicio = '".$inicio."',
            termino = '".$termino."',
            servico = '".$servico."',
            valor = '".$valor."' 
        WHERE idCliente = ".$idCliente."
";

    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }


echo json_encode($data);





?>