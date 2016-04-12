<?php
    //verifica se existe conexão com bd, caso não tenta criar uma nova
    $conexao = mysql_connect("localhost","root"," ") //porta, usuário, senha
    or die("Erro na conexão com banco de dados"); //caso não consiga conectar mostra a mensagem de erro mostrada na conexão
     
    $select_db = mysql_select_db("lojas_cm"); //seleciona o banco de dados
     
    //Abaixo atribuímos os valores provenientes do formulário pelo método POST
    $nome = $_POST["nome"]; 
    $user = $_POST["user"];
    $email = $_POST["email"];
	
	$razao_social = $_POST["razão_social"];
	$ramo = $_POST["ramo"];
	$responsavel = $_POST["responsavel"];
	$nome_fantasia = $_POST["nome_fantasia"];
	$cnpj = $_POST["cnpj"];
	$email = $_POST["email"];
	$rua = $_POST["rua"];
	$numero = $_POST["numero"];
	$bairro = $_POST["bairro"];
	$cidade = $_POST["cidade"];
	$estado = $_POST["estado"];
	$cep = $_POST["cep"];
	$site = $_POST["site"];
	$telefone = $_POST["telefone"];
	$quantidade_produtos = $_POST["quantidade_produtos"];
	$plano = $_POST["plano"];
	$tem_logomarca = $_POST["tem_logomarca"];
	$deseja_desenvolver = $_POST["deseja_desenvolver"];
	$estilo_layout = $_POST["estilo_layout"];
	$cores = $_POST["cores"];
	$data_compra = $_POST["data_compra"];

     
    $string_sql = "INSERT INTO pessoa (id,razao_social,ramo,responsavel,nome_fantasia,cnpj,email,rua,numero,bairro,cidade,estado,cep,site,telefone,quantidade_produtos,plano,tem_logomarca,deseja_desenvolver,estilo_layout,cores,data_compra
) VALUES (null,'$razao_social','$ramo,responsavel','$nome_fantasia','$cnpj','$email','$rua','$numero','$bairro','$cidade','$estado','$cep','$site','$telefone','$quantidade_produtos','$plano','$tem_logomarca','$deseja_desenvolver','$estilo_layout','$cores','$data_compra')"; //String com consulta SQL da inserção
     
    mysql_query($string_sql,$conexao); //Realiza a consulta
     
    if(mysql_affected_rows() == 1){ //verifica se foi afetada alguma linha, nesse caso inserida alguma linha
        echo "<p>Cadastro feito com sucesso</p>";
        echo '<a href="cadastro.html">Voltar para formulário de cadastro</a>'; //Apenas um link para retornar para o formulário de cadastro
    } else {
        echo "Erro, não possível inserir no banco de dados";
    }
     
    mysql_close($conexao); //fecha conexão com banco de dados 
?>
