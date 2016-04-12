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
        <li><a href="../#">Dashboard</a></li>
        <li><a href="../#">Profile</a></li>
        <li><a href="../#">Setting</a></li>
        <li><a href="../#">Reset password</a></li>
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
<li><a href="../faq.php"><span class="ico gray hadow encrypt"></span><b>FAQ</b></a> </li>
<li class="select"><a href="plano_solidario/"><span class="ico gray shadow calendar"></span><b>Plano solidário</b></a>
<li><a href="../contato/"><span class="ico gray shadow window"></span><b>Contato</b></a> </li>
x
</div>
<div id="content">
<div class="inner">
<div class="row-fluid">
  <div class="span12 clearfix">
    <div class="logo"></div>
    <ul id="shortcut" class="clearfix">
      <li> <a href="../index.html" title="Mostrar todos os Planos"> <img src="../images/icon/shortcut/home.png" alt="home" /><strong>Planos</strong> </a> </li>
      <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=69:magic-t%C3%AAnis&Itemid=354" title="Exemplo de Loja Virtual"> <img src="../images/icon/shortcut/graph.png" alt="graph" /><strong>Loja Virtual</strong> </a> </span></li>
      <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=79:mt-b%C3%A1sico&Itemid=355" title="Exemplo de Vitrine de Produtos"> <img src="../images/icon/shortcut/setting.png" alt="setting" /><strong>Vitrine Produtos</strong></a></span> </li>
      <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=65:reino-verde-jardinagem&Itemid=356" title="Exemplo de Vitrine de Serviços"> <img src="../images/icon/shortcut/mail.png" alt="messages" /><strong>Vitrine Serviços</strong></a></span></li>
      </li>
    </ul>
  </div>
</div>
<span class="fc-header-title"><h2 style="text-transform: none; !important">Plano<b> Solidário:</b></h2></span><br><br>
<div class="row-fluid"> 
  
  <!-- Widget -->
  <div class="widget  span12 clearfix">
    <div class="widget-header"></div>
    <!-- End widget-header -->
    
    <div class="widget-content">
    	
            <h2>O Shopping Virtual CompreMania oferece um plano gratuito, mas também temos um pensamento de crescimento sustentável e por isso destimas 50% dos nossos recursos a instituíçoes filantrópicas de Franca SP.
            </h2>
        
        
        <div class="span4">
                                                <div class="shoutcutBox"> <span class="ico color chat-exclamation"></span> <strong>Instituições Beneficiadas</strong></div>
                                                <div class="breaks"><span></span></div>
                                                <div class="shoutcutBox" ><strong>Projeto Crescer, Sentir e Fazer</strong></div>
                                                <div class="shoutcutBox"><strong>Hospital do Câncer - Franca SP</strong></div>
                                                <div class="shoutcutBox"><strong>Instituto IDESUFRAN</strong></div>
                                                <div class="shoutcutBox"></span> <strong>APAE Franca - SP</strong></div>
                                                <br><br>
         </div><!-- span4 column-->    
       <div class="span4" style="margin-left:10%">
       <table class="chart-pie">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th style="color : #CCFF00;">Compre Mania</th>
                                            <th style="color : #002D33;">Instituições Filantrópicas</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th></th>
                                            <td>50</td>
                                            <td>50</td>
                                       
                                        </tr>
                                    </tbody>
         </table>
         </div>
         
         
         
         
         
         
         
         
              
     </div>
      <div class="row-fluid"> </div>
      <!--  end widget-content --> 
      
      <!-- widget  span12 clearfix--> 
      
    </div>
    <!-- row-fluid -->
    <div id="footer"> &copy; Copyright 2014 <span class="tip"><a href="../#" title="Compre Mania">Compre Mania</a> </span> </div>
  </div>
  <!--// End inner --> 
</div>
<!--// End ID content -->

</body>
</html>
