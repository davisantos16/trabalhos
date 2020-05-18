<?php
include ('../../conexao/conexao.php');

$idCaes = $_POST['idCaes'];
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



$sql = "UPDATE caes
        SET cliente = '".$cliente."',
            email = '".$email."',
            fone = '".$fone."',
            cep = '".$cep."',
            cidade = '".$cidade."',
            estado = '".$estado."',
            rua = '".$rua."',
            nmr = '".$nmr."',
            nome = '".$nome."',
            procedencia = '".$procedencia."',
            datEntrada = '".$datEntrada."', 
            sexo = '".$sexo."',
            cor = '".$cor."',
            raca = '".$raca."', 
            vacina = '".$vacina."' 
        WHERE idCaes = ".$idCaes."
";

    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }


echo json_encode($data);





?>