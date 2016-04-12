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
<link rel="shortcut icon" href="images/favicon.ico" />
<link rel="icon" href="images/favicon.ico" />

<!-- CSS Stylesheet-->
<link type="text/css" rel="stylesheet" href="components/bootstrap/bootstrap.css" />
<link type="text/css" rel="stylesheet" href="components/bootstrap/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet" href="css/zice.style.css" />
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
<link rel="stylesheet" href="esquema_cores/css/default.css" type="text/css">
<link rel="stylesheet" href="esquema_cores/kxs/kxs.css" type="text/css">
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49461217-2', 'compremania.com');
  ga('send', 'pageview');

</script>
<script type="text/javascript" src="esquema_cores/js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="esquema_cores/js/jquery.styledselect.js"></script>
<script type="text/javascript" src="esquema_cores/js/jquery.floatbox.js"></script>
<script type="text/javascript" src="esquema_cores/js/jquery.tooltip.js"></script>
<script type="text/javascript" src="esquema_cores/js/jquery.droppy.js"></script>
<script type="text/javascript" src="esquema_cores/js/jquery.cookie.js"></script>
<script type="text/javascript" src="esquema_cores/js/colorschemedesigner.js"></script>
<script type="text/javascript" src="esquema_cores/js/tooltips.js"></script>
<script type="text/javascript" src="esquema_cores/kxs/kxs.js"></script>
<!-- fim esquema de cores-->
<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="components/flot/excanvas.min.js"></script><![endif]-->

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="components/ui/jquery.ui.min.js"></script>
<script type="text/javascript" src="components/bootstrap/bootstrap.min.js"></script>
<script type="text/javascript" src="components/ui/timepicker.js"></script>
<script type="text/javascript" src="components/colorpicker/js/colorpicker.js"></script>
<script type="text/javascript" src="components/form/form.js"></script>
<script type="text/javascript" src="components/elfinder/js/elfinder.full.js"></script>
<script type="text/javascript" src="components/datatables/dataTables.min.js"></script>
<script type="text/javascript" src="components/fancybox/jquery.fancybox.js"></script>
<script type="text/javascript" src="components/jscrollpane/jscrollpane.min.js"></script>
<script type="text/javascript" src="components/editor/jquery.cleditor.js"></script>
<script type="text/javascript" src="components/chosen/chosen.js"></script>
<script type="text/javascript" src="components/validationEngine/jquery.validationEngine.js"></script>
<script type="text/javascript" src="components/validationEngine/jquery.validationEngine-en.js"></script>
<script type="text/javascript" src="components/fullcalendar/fullcalendar.js"></script>
<script type="text/javascript" src="components/flot/flot.js"></script>
<script type="text/javascript" src="components/uploadify/uploadify.js"></script>
<script type="text/javascript" src="components/Jcrop/jquery.Jcrop.js"></script>
<script type="text/javascript" src="components/smartWizard/jquery.smartWizard.min.js"></script>
<script type="text/javascript" src="js/jquery.cookie.js"></script>
<script type="text/javascript" src="js/zice.custom.js"></script>
<!-- Botão Tooltip -->

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>

<!-- Header -->
<div id="header">
  <ul id="account_info" class="pull-right">
    <li><img src="images/avatar.png" alt="Online" /></li>
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
<li><a href="index.html"><span class="ico gray shadow home"></span><b>Todos os planos</b></a></li>
<li class="select"><a href="#"><span class="ico gray hadow encrypt"></span><b>FAQ</b></a> </li>
<!--<li ><a href="plano_solidario/"><span class="ico gray shadow calendar"></span><b>Plano solidário</b></a>-->
<li><a href="contato/"><span class="ico gray shadow window"></span><b>Contato</b></a> </li>
</div>
<div id="content">
<div class="inner">
<div class="row-fluid">
  <div class="span12 clearfix">
    <div class="logo"></div>
    <ul id="shortcut" class="clearfix">
      <li> <a href="index.html" title="Mostrar todos os Planos"> <img src="images/icon/shortcut/home.png" alt="home" /><strong>Planos</strong> </a> </li>
      <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=69:magic-t%C3%AAnis&Itemid=354" title="Exemplo de Loja Virtual"> <img src="images/icon/shortcut/graph.png" alt="graph" /><strong>Loja Virtual</strong> </a> </span></li>
      <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=79:mt-b%C3%A1sico&Itemid=355" title="Exemplo de Vitrine de Produtos"> <img src="images/icon/shortcut/setting.png" alt="setting" /><strong>Vitrine Produtos</strong></a></span> </li>
      <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=65:reino-verde-jardinagem&Itemid=356" title="Exemplo de Vitrine de Serviços"> <img src="images/icon/shortcut/mail.png" alt="messages" /><strong>Vitrine Serviços</strong></a></span></li>
      </li>
    </ul>
  </div>
</div>
<span class="fc-header-title"><h2 style="text-transform: none; !important">Perguntas<b> Frequentes:</b></h2></span><br><br>
<div class="row-fluid"> 
  
  <!-- Widget -->
  <div class="widget  span12 clearfix">
    <div class="widget-header"> <span><i class="icon-list-alt"></i>Perguntas Frequentes</span> </div>
    <!-- End widget-header -->
    
    <div class="widget-content">
    	<h3>Quem pode vender no CompreMania?</h3>
    		<div>
				
               <p>Qualquer empresário que tenha algum comercio regularizado na cidade de Franca SP.</p>
                
            </div>
            <hr>
        
            <h3>Quanto custa anunciar no CompreMania?</h3>
    		<div>	
				<p>Oferecemos todos nossos planos de forma gratuita, mas você pode optar pelo nosso plano solidário, onde 50% do valor é destinado a instituições filantrópicas.</p>
            </div>
            
            <hr>
            <h3>Como as pessoas vão me encontrar dentro do Shopping Virtual?</h3>
    		<div>	
				<p>Sua loja poderá ser encontrada através do seu endereço suaempresa.compremania.com ou pelo buscador do shopping virtual.</p>
            </div>
            
            
            <hr>
            <h3>Posso registrar um domínio para ser redirecionado a minha loja?</h3>
    		<div>	
				<p>Sim, você pode registrar um domínio como suaempresa.com.br e nós redirecionaremos para sua loja dentro do shopping virtual.</p>
            </div>
            
            <hr>
            <h3>Posso parcelar minhas vendas no Shopping Virtual?</h3>
    		<div>	
				<p>Sim. Você poderá vender em até 12x seus produtos.</p>
            </div>
            
             <hr>
            <h3>Como recebo o pagamento no plano Loja Virtual?</h3>
    		<div>	
				<p>Todo pagamento será repassado ao lojista em 20 dias úteis após a confirmação.</p>
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
