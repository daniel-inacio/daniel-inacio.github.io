<?php
  //1 – Definimos Para quem vai ser enviado o email
  $para = "daniel@compremania.com";
  //2 - resgatar o nome digitado no formulário e  grava na variavel $nome
  $nome = $_POST['nome'];
  // 3 - resgatar o assunto digitado no formulário e  grava na variavel //$assunto
  $assunto = 'CAD LOJA - Vitrine de SERVIÇOS - Pessoa Física - '. $razao_social = $_POST["razao_social"];
  // 4-  Recebendo p formulario todo
	$plano = $_POST["plano"];
	$categoria = $_POST["categoria"];
	$conta =  $_POST["conta"];
	$razao_social = $_POST["razao_social"];
	$forma_pagamento = $POST["forma_pagamento"];
	$responsavel = $_POST["responsavel"];
	$cpf = $_POST["cpf"];
	$email = $_POST["email"];
	$senha = $_POST["senha"];
	$cep = $_POST["cep"];
	$rua = $_POST["rua"];
	$numero = $_POST["num"];
	$bairro = $_POST["bairro"];
	$cidade = $_POST["cidade"];
	$estado = $_POST["uf"];
	$site = $_POST["site"];
	$telefone = $_POST["phone"];
	$celular =  $_POST["celular"];
	$cores =  $_POST["csd3-schemeid"];



   //5 – Agora definimos a  mensagem que vai ser enviado no e-mail
  
  $mensagem .= "<br><strong>Plano:  </strong>".$_POST["plano"];
  $mensagem .= "<br><strong>Categoria:  </strong>".$_POST["categoria"];
  $mensagem .= "<br><strong>Tipo de Conta:  </strong>".$_POST["conta"];
  $mensagem .= "<br><strong>Empresa:  </strong>".$_POST["razao_social"];
  $mensagem .= "<br><strong>Forma de Pagamento:  </strong>".$_POST["forma_pagamento"];
  $mensagem .= "<br><strong>Responsável:  </strong>".$_POST["responsavel"];
  $mensagem .= "<br><strong>CPF:  </strong>".$_POST["cpf"];
  $mensagem .= "<br><strong>E-mail:  </strong>".$_POST["email"];
  $mensagem .= "<br><strong>Senha:  </strong>".$_POST["senha"];
  $mensagem .= "<br><strong>CEP:  </strong>".$_POST["cep"];
  $mensagem .= "<br><strong>Rua:  </strong>".$_POST["rua"];
  $mensagem .= "<br><strong>Número:  </strong>".$_POST["num"];
  $mensagem .= "<br><strong>Bairro:  </strong>".$_POST["bairro"];
  $mensagem .= "<br><strong>Cidade:  </strong>".$_POST["cidade"];
  $mensagem .= "<br><strong>Estado:  </strong>".$_POST["uf"];
  $mensagem .= "<br><strong>Site:  </strong>".$_POST["site"];
  $mensagem .= "<br><strong>Telefone:  </strong>".$_POST["phone"];
  $mensagem .= "<br><strong>Celular:  </strong>".$_POST["celular"];
  $mensagem .= "<br><strong>Esquema de cores:  </strong>".$_POST["csd3-schemeid"];
 
  
  
 
//6 – agora inserimos as codificações corretas e  tudo mais.
  $headers =  "Content-Type:text/html; charset=UTF-8\n";
  $headers .= "From:  ".$razao_social."<daniel@compremania.com>\n"; //Vai ser //mostrado que  o email partiu deste email e seguido do nome
  $headers .= "X-Sender:  <cliente@compremania.com>\n"; //email do servidor //que enviou
  $headers .= "X-Mailer: PHP  v".phpversion()."\n";
  $headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
  $headers .= "Return-Path:  <daniel@compremania.com>\n"; //caso a msg //seja respondida vai para  este email.
  $headers .= "MIME-Version: 1.0\n";
 
mail($para, $assunto, $mensagem, $headers);  //função que faz o envio do email.

?>
<?php 
session_start();
$session_id='1'; //$session id
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Compre Mania Administração</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Link shortcut icon-->
<link rel="shortcut icon" href="../images/favicon.ico" />
<link rel="icon" href="../images/favicon.ico" />

<!-- CSS Stylesheet-->
<link type="text/css" rel="stylesheet" href="../components/bootstrap/bootstrap.css" />
<link type="text/css" rel="stylesheet" href="../components/bootstrap/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet" href="../css/zice.style.css" />
<style type="text/css">
#preview {
	color: #cc0000;
	font-size: 12px;
	height: 165px;
}
.imgList {
	max-height: 150px;
	margin-left: 5px;
	border: 1px solid #dedede;
	padding: 4px;
	float: left;
}
</style>
<!-- esquema de cores -->
<link rel="stylesheet" href="../esquema_cores/css/default.css" type="text/css">
<link rel="stylesheet" href="../esquema_cores/kxs/kxs.css" type="text/css">
<script type="text/javascript" src="../esquema_cores/js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="../esquema_cores/js/jquery.styledselect.js"></script>
<script type="text/javascript" src="../esquema_cores/js/jquery.floatbox.js"></script>
<script type="text/javascript" src="../esquema_cores/js/jquery.tooltip.js"></script>
<script type="text/javascript" src="../esquema_cores/js/jquery.droppy.js"></script>
<script type="text/javascript" src="../esquema_cores/js/jquery.cookie.js"></script>
<script type="text/javascript" src="../esquema_cores/js/colorschemedesigner.js"></script>
<script type="text/javascript" src="../esquema_cores/js/tooltips.js"></script>
<script type="text/javascript" src="../esquema_cores/kxs/kxs.js"></script>
<!-- fim esquema de cores-->
<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="../components/flot/excanvas.min.js"></script><![endif]-->

<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../components/ui/jquery.ui.min.js"></script>
<script type="text/javascript" src="../components/bootstrap/bootstrap.min.js"></script>
<script type="text/javascript" src="../components/ui/timepicker.js"></script>
<script type="text/javascript" src="../components/colorpicker/js/colorpicker.js"></script>
<script type="text/javascript" src="../components/form/form.js"></script>
<script type="text/javascript" src="../components/elfinder/js/elfinder.full.js"></script>
<script type="text/javascript" src="../components/datatables/dataTables.min.js"></script>
<script type="text/javascript" src="../components/fancybox/jquery.fancybox.js"></script>
<script type="text/javascript" src="../components/jscrollpane/jscrollpane.min.js"></script>
<script type="text/javascript" src="../components/editor/jquery.cleditor.js"></script>
<script type="text/javascript" src="../components/chosen/chosen.js"></script>
<script type="text/javascript" src="../components/validationEngine/jquery.validationEngine.js"></script>
<script type="text/javascript" src="../components/validationEngine/jquery.validationEngine-en.js"></script>
<script type="text/javascript" src="../components/fullcalendar/fullcalendar.js"></script>
<script type="text/javascript" src="../components/flot/flot.js"></script>
<script type="text/javascript" src="../components/uploadify/uploadify.js"></script>
<script type="text/javascript" src="../components/Jcrop/jquery.Jcrop.js"></script>
<script type="text/javascript" src="../components/smartWizard/jquery.smartWizard.min.js"></script>
<script type="text/javascript" src="../js/jquery.cookie.js"></script>
<script type="text/javascript" src="../js/zice.custom.js"></script>
<!-- Botão Tooltip -->

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>

<!-- Header -->
<div id="header">
  <ul id="account_info" class="pull-right">
    <li><img src="../images/avatar.png" alt="Online" /></li>
    <li class="setting">Bem-vindo, <b class="red">Visitante</b>
      <ul class="subnav">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Setting</a></li>
        <li><a href="#">Reset password</a></li>
        <br class="clearfix" />
      </ul>
    </li>
    <li class="logout" title="Disconnect">Sair</li>
  </ul>
</div>
<!-- End Header --> 

<!-- left_menu -->
<div id="left_menu">
<ul id="main_menu" class="main_menu">
<li><a href="../index.html"><span class="ico gray shadow home"></span><b>Todos os planos</b></a></li>
<li class="select"><a href="#"><span class="ico gray shadow window"></span><b>Novo cadastro</b></a> </li>
<li><a href="#" target="new"><span class="ico gray shadow encrypt"></span><b>Dúvidas?</b></a> </li>
</div>
<div id="content">
<div class="inner">
<div class="row-fluid">
  <div class="span12 clearfix">
    <div class="logo"></div>
    <ul id="shortcut" class="clearfix">
      <li> <a href="#" title="Mostrar todos os Planos"> <img src="../images/icon/shortcut/home.png" alt="home" /><strong>Planos</strong> </a> </li>
      <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=69:magic-t%C3%AAnis&Itemid=354" title="Exemplo de Loja Virtual"> <img src="../images/icon/shortcut/graph.png" alt="graph" /><strong>Loja Virtual</strong> </a> </span></li>
      <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=79:mt-b%C3%A1sico&Itemid=355" title="Exemplo de Vitrine de Produtos"> <img src="../images/icon/shortcut/setting.png" alt="setting" /><strong>Vitrine Produtos</strong></a></span> </li>
      <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=65:reino-verde-jardinagem&Itemid=356" title="Exemplo de Vitrine de Serviços"> <img src="../images/icon/shortcut/mail.png" alt="messages" /><strong>Vitrine Serviços</strong></a></span></li>
      </li>
    </ul>
  </div>
</div>
<div class="row-fluid"> 
  
  <!-- Widget -->
  <div class="widget  span12 clearfix">
    <div class="widget-header"> <span><i class="icon-list-alt"></i>Cadastro efetuado com sucesso.</span> 
    
    </div>
    <!-- End widget-header -->
    
    <div class="widget-content">
    
  
        
        
        
        
        
         <div class="span4">
         <!-- Declaração do formulário -->  
<form method="post" target="pagseguro"  
action="https://pagseguro.uol.com.br/v2/checkout/payment.html">  
<input type="hidden" name="encoding" value="UTF-8">
          
        <!-- Campos obrigatórios -->  
        <input name="receiverEmail" type="hidden" value="compremania@gmail.com">  
        <input name="currency" type="hidden" value="BRL">  
  
        <!-- Itens do pagamento (ao menos um item é obrigatório) -->  
        <input name="itemId1" type="hidden" value="0001">  
        <input name="itemDescription1" type="hidden" value="Plano - Vitrine de Serviços">  
        <input name="itemAmount1" type="hidden" value="9.90">  
        <input name="itemQuantity1" type="hidden" value="1">  
        <input name="itemWeight1" type="hidden" value="1000">  
      
        <!-- Código de referência do pagamento no seu sistema (opcional) -->  
        <input name="reference" type="hidden" value="REF1234">  
          
        <!-- Informações de frete (opcionais) -->  
        <input name="shippingType" type="hidden" value="1">  
        <input name="shippingAddressPostalCode" type="hidden" value="<?php echo $cep; ?>">  
        <input name="shippingAddressStreet" type="hidden" value="<?php echo $rua; ?>">  
        <input name="shippingAddressNumber" type="hidden" value="<?php echo $numero; ?>">  
        <input name="shippingAddressComplement" type="hidden" value="">  
        <input name="shippingAddressDistrict" type="hidden" value="<?php echo $bairro; ?>">  
        <input name="shippingAddressCity" type="hidden" value="<?php echo $cidade; ?>">  
        <input name="shippingAddressState" type="hidden" value="<?php echo $estado; ?>">  
        <input name="shippingAddressCountry" type="hidden" value="BRA">  
  
        <!-- Dados do comprador (opcionais) -->  
        <input name="senderName" type="hidden" value="<?php echo $responsavel; ?>">  
        <input name="senderAreaCode" type="hidden" value="16">  
        <input name="senderPhone" type="hidden" value="<?php echo $telefone; ?>">  
        <input name="senderEmail" type="hidden" value="<?php echo $email; ?>">  
  
        <!-- submit do form (obrigatório) -->  
        <input alt="Pague com PagSeguro" name="submit"  type="image"  
src="../images/pagueseguro_compremania.png"/>  
          
</form>
         <form>
         	  <h4>Plano:<small> *</small></h4>
              <input type="text" value="<?php echo $plano; ?>"style="color: #970000 !important;"disabled/> 
              
               <h4>Categoria:<small> *</small></h4>
              <input type="text" value="<?php echo $categoria; ?>" style="color: #970000 !important;"disabled/> 
              
              <h4>Nome da Empresa:<small> *</small></h4>
              <input type="text" value="<?php echo $razao_social; ?>" style="color: #970000 !important;"disabled/> 
              
              <h4>Responsável:<small> *</small></h4>
              <input type="text" value="<?php echo $responsavel; ?>"   style="color: #970000 !important;"disabled/> 
         
              <h4>CPF:<small> *</small></h4>
              <input type="text" value="<?php echo $cpf; ?>" style="color: #970000 !important;"disabled/> 
              
              <h4>E-mail:<small> *</small></h4>
              <input type="text" value="<?php echo $email; ?>" style="color: #970000 !important;"disabled/> 
              
            </div>
            <div class="span4">
            
              <h4>Senha:<small> *</small></h4>
              <input type="text" value="<?php echo $senha; ?>"   style="color: #970000 !important;"disabled/> 
              <h4>CEP:<small> *</small></h4>
              <input type="text" value="<?php echo $cep; ?>"  style="color: #970000 !important;"disabled/> 
              <h4>Rua:<small> *</small></h4>
              <input type="text" value="<?php echo $rua; ?>" style="color: #970000 !important;"disabled/> 
              <h4>Número:<small> *</small></h4>
              <input type="text" value="<?php echo $numero; ?>" style="color: #970000 !important;"disabled/> 
              <h4>Bairro:<small> *</small></h4>
              <input type="text" value="<?php echo $bairro; ?>" style="color: #970000 !important;"disabled/> 
              <h4>Cidade:<small> *</small></h4>
              <input type="text" value="<?php echo $cidade; ?>" style="color: #970000 !important;"disabled/> 
             
            </div>
            <div class="span4">
           
              
              <h4>Estado:<small> *</small></h4>
              <input type="text" value="<?php echo $estado; ?>" class="small" style="color: #970000 !important;"disabled/> 
              <h4>Site: <small> **</small></h4>
              <input type="text" value="<?php echo $site; ?>" style="color: #970000 !important;"disabled/> 
              <h4>Telefone:<small> *</small></h4>
              <input type="text" value="<?php echo $telefone; ?>"  style="color: #970000 !important;"disabled/> 
              <h4>Celular: <small> **</small></h4>
              <input type="text"  value="<?php echo $celular; ?>" style="color: #970000 !important;"disabled/> 
              <h4>Esquema de cores:<small> *</small></h4>
              <input type="text"  value="<?php echo $cores; ?>" style="color: #970000 !important;"disabled/> 
              </form>
            </div>
        
    		
    </div>
      <div class="row-fluid"> </div>
      <!--  end widget-content --> 
      
      <!-- widget  span12 clearfix--> 
      
    </div>
    <!-- row-fluid -->
    <div id="footer"> &copy; Copyright 2014 <span class="tip"><a href="#" title="Compre Mania">Compre Mania</a> </span> </div>
  </div>
  <!--// End inner --> 
</div>
<!--// End ID content -->

</body>
</html>
