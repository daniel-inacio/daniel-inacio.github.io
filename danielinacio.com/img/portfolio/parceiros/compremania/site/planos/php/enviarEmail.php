<?php
  //1 – Definimos Para quem vai ser enviado o email
  $para = "daniel@compremania.com";
  //2 - resgatar o nome digitado no formulário e  grava na variavel $nome
  $nome = $_POST['nome_fantasia'];
  // 3 - resgatar o assunto digitado no formulário e  grava na variavel //$assunto
  $assunto = 'NOVA LOJA COMPREMANIA';
  // 4-  Recebendo p formulario todo
  	$razao_social = $_POST["razão_social"];
	$ramo = $_POST["ramo"];
	$responsavel = $_POST["responsavel"];
	$cpf = $_POST["cpf"];
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
	$data_compra = $_POST["data_compra"];
	$representante = $_POST["representante"];



   //5 – Agora definimos a  mensagem que vai ser enviado no e-mail
  //$mensagem = "<strong>Nome:  </strong>".$nome;
  //$mensagem .= "<br>  <strong>Mensagem: </strong>".$_POST['mensagem'];
  $mensagem .= "<br><strong>Representante:  </strong>".$_POST["representante"];
  $mensagem .= "<br><strong>Forma de Pagamento da Adesão:  </strong>".$_POST["formapagamentoadesao"];
  $mensagem .= "<br><strong>Forma de Pagamento da Mensaliadde:  </strong>".$_POST["formapagamentomensal"];
  $mensagem .= "<br><strong>Razão Social:  </strong>".$_POST["razão_social"];
  $mensagem .= "<br><strong>Ramo:  </strong>".$_POST["ramo"];
  $mensagem .= "<br><strong>Responsável:  </strong>".$_POST["responsavel"];
  $mensagem .= "<br><strong>CPF:  </strong>".$_POST["cpf"];
  $mensagem .= "<br><strong>Nome Fantasia:  </strong>".$_POST["nome_fantasia"];
  $mensagem .= "<br><strong>CNPJ:  </strong>".$_POST["cnpj"];
  $mensagem .= "<br><strong>E-mail:  </strong>".$_POST["email"];
  $mensagem .= "<br><strong>Rua:  </strong>".$_POST["rua"];
  $mensagem .= "<br><strong>Número:  </strong>".$_POST["numero"];
  $mensagem .= "<br><strong>Bairro:  </strong>".$_POST["bairro"];
  $mensagem .= "<br><strong>Cidade:  </strong>".$_POST["cidade"];
  $mensagem .= "<br><strong>Estado:  </strong>".$_POST["estado"];
  $mensagem .= "<br><strong>CEP:  </strong>".$_POST["cep"];
  $mensagem .= "<br><strong>Site:  </strong>".$_POST["site"];
  $mensagem .= "<br><strong>Telefone:  </strong>".$_POST["telefone"];
  $mensagem .= "<br><strong>Quantidade de Produtos:  </strong>".$_POST["quantidade_produtos"];
  $mensagem .= "<br><strong>Plano Escolhido:  </strong>".$_POST["plano"];
  $mensagem .= "<br><strong>Tem Logomarca:  </strong>".$_POST["tem_logomarca"]; 
  $mensagem .= "<br><strong>Deseja desenvolver Logomarca?</strong>".$_POST["deseja_desenvolver"];    
  $mensagem .= "<br><strong>Estilo do Layout:  </strong>".$_POST["estilo_layout"];
  $mensagem .= "<br><strong>Cores: </strong>";
  $cores = $_POST["cores"];
  for ($i=0;$i<count($cores);$i++)
	{
   $mensagem .= "<br> <strong>" . $i . ": </strong> " . $cores[$i];
    }
  $mensagem .= "<br><strong>Descrição da Loja:  </strong>".$_POST["Textareaelastic"];
  $mensagem .= "<br><strong>Data da Compra:  </strong>".$_POST["data_compra"];

 
//6 – agora inserimos as codificações corretas e  tudo mais.
  $headers =  "Content-Type:text/html; charset=UTF-8\n";
  $headers .= "From:  compremania.com<daniel@comerpamania.com>\n"; //Vai ser //mostrado que  o email partiu deste email e seguido do nome
  $headers .= "X-Sender:  <cm@compremania.com>\n"; //email do servidor //que enviou
  $headers .= "X-Mailer: PHP  v".phpversion()."\n";
  $headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
  $headers .= "Return-Path:  <daniel@compermania.com>\n"; //caso a msg //seja respondida vai para  este email.
  $headers .= "MIME-Version: 1.0\n";
 
mail($para, $assunto, $mensagem, $headers);  //função que faz o envio do email.


echo $mensagem;
?>
