<?php
include ('../../conexao/conexao.php');


$cliente = $_POST['cliente'];
$email = $_POST['email'];
$fone = $_POST['fone'];
$cep = $_POST['cep'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];
$rua = $_POST['rua'];
$nmr = $_POST['nmr'];
$nome = $_POST['nome'];
$procedencia = $_POST['procedencia'];
$datNasc = $_POST['datNasc'];
$datEntrada = $_POST['datEntrada'];
$sexo = $_POST['sexo'];
$cor = $_POST['cor'];
$raca = $_POST['raca'];
$vacina = $_POST['vacina'];


$nome = utf8_decode($nome);
$raca = utf8_decode($raca);
$email = utf8_decode($email);
$cliente = utf8_decode($cliente);
$cidade = utf8_decode($cidade);
$estado = utf8_decode($estado);
$rua = utf8_decode($rua);
$procedencia = utf8_decode($procedencia);
$sexo = utf8_decode($sexo);
$cor = utf8_decode($cor);
$vacina = utf8_decode($vacina);


if(strlen($nome) > 1 && strlen($raca) > 1 && strlen($vacina) > 1){

$sql = "INSERT INTO caes (cliente, email, fone, cep, cidade, estado, rua, nmr, nome, procedencia, datNasc, datEntrada, sexo, cor, raca, vacina)
        VALUES ('$cliente', '$email', '$fone', '$cep', '$cidade', '$estado', '$rua', '$nmr', '$nome', '$procedencia',  '$datNasc', '$datEntrada', '$sexo', '$cor', '$raca', '$vacina')";
    
    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }




}else{
    $data = array("return" => "Os campos nome e raça do dog são obrigatório...");
}

echo json_encode($data);



?>