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

<!-- acha cep -->
<script type='text/javascript' src='cep/cep.js'></script>

<!-- Macasca Celular Telefone e CPF -->
<script type="text/javascript">
function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }
  
}
</script>
<!-- confirma valor na ultima pagina -->
<script type="text/javascript">
		function repeat(valor)
		{
		document.cima.repetido.value = valor;
		indentificador.innerHTML=valor
		}
		function repeat2(valor)
		{
		document.cima.repetido2.value = valor;
		indentificador2.innerHTML=valor
		}
		function repeat3(valor)
		{
		document.cima.repetido3.value = valor;
		indentificador3.innerHTML=valor
		}
		function repeat4(valor)
		{
		document.cima.repetido4.value = valor;
		indentificador4.innerHTML=valor
		}
		function repeat5(valor)
		{
		document.cima.repetido5.value = valor;
		indentificador5.innerHTML=valor
		}
		function repeat6(valor)
		{
		document.cima.repetido6.value = valor;
		indentificador6.innerHTML=valor
		}
		function repeat7(valor)
		{
		document.cima.repetido7.value = valor;
		indentificador7.innerHTML=valor
		}
		function repeat8(valor)
		{
		document.cima.repetido8.value = valor;
		indentificador8.innerHTML=valor
		}
		function repeat9(valor)
		{
		document.cima.repetido9.value = valor;
		indentificador9.innerHTML=valor
		}
		function repeat10(valor)
		{
		document.cima.repetido10.value = valor;
		indentificador10.innerHTML=valor
		}
		function repeat11(valor)
		{
		document.cima.repetido11.value = valor;
		indentificador11.innerHTML=valor
		}
		function repeat12(valor)
		{
		document.cima.repetido12.value = valor;
		indentificador12.innerHTML=valor
		}
		function repeat13(valor)
		{
		document.cima.repetido13.value = valor;
		indentificador13.innerHTML=valor
		}
		function repeat14(valor)
		{
		document.cima.repetido14.value = valor;
		indentificador14.innerHTML=valor
		}
		function repeat15(valor)
		{
		document.cima.repetido15.value = valor;
		indentificador15.innerHTML=valor
		}
		function repeat16(valor)
		{
		document.cima.repetido16.value = valor;
		indentificador16.innerHTML=valor
		}
		function repeat17(valor)
		{
		document.cima.repetido17.value = valor;
		indentificador17.innerHTML=valor
		}
		function repeat18(valor)
		{
		document.cima.repetido18.value = valor;
		indentificador18.innerHTML=valor
		}
</script>
<!-- fim confirma valor na ultima pagina -->
 
<script type="text/javascript">
            $(document).ready(function(){
                // Smart Wizard     	
                $('#wizardvalidate').smartWizard({transitionEffect:'slideleft',onLeaveStep:leaveAStepCallback,onFinish:onFinishCallback,enableFinishButton:true});
        
              function leaveAStepCallback(obj){
					var step_num= obj.attr('rel');
					return validateSteps(step_num);
              }
              
              function onFinishCallback(){
				   if(validateAllSteps()){
						 $('form').submit();
				   }
              }
                    
           });
               
            function validateAllSteps(){
               var isStepValid = true;
               if(validateStep1() == false){
                 isStepValid = false;
                 $('#wizardvalidate').smartWizard('setError',{stepnum:1,iserror:true});         
               }else{
                 $('#wizardvalidate').smartWizard('setError',{stepnum:1,iserror:false});
               }
           		// add more if you want to validateStep 2
               if(validateStep2() == false){
                 isStepValid = false;
                 $('#wizardvalidate').smartWizard('setError',{stepnum:3,iserror:true});         
               }else{
                 $('#wizardvalidate').smartWizard('setError',{stepnum:3,iserror:false});
               }
               
               if(validateStep3() == false){
                 isStepValid = false;
                 $('#wizardvalidate').smartWizard('setError',{stepnum:3,iserror:true});         
               }else{
                 $('#wizardvalidate').smartWizard('setError',{stepnum:3,iserror:false});
               }
               
               if(!isStepValid){
                  $('#wizardvalidate').smartWizard('showMessage','Please correct the errors in the steps and continue');
               }
                      
               return isStepValid;
            } 	
                
                
                function validateSteps(step){
                  var isStepValid = true;
					  // validate step 1
					  if(step == 1){
							if(validateStep1() == false ){
							  isStepValid = false; 
							  $('#wizardvalidate').smartWizard('showMessage','Please correct the errors in step'+step+ ' and click next.');
							  $('#wizardvalidate').smartWizard('setError',{stepnum:step,iserror:true});         
							}else{
							  $('#wizardvalidate').smartWizard('setError',{stepnum:step,iserror:false});
							}
					  }
        
					  // validate step 2
					  if(step == 2){
							if(validateStep2() == false ){
							  isStepValid = false; 
							  $('#wizardvalidate').smartWizard('showMessage','Please correct the errors in step'+step+ ' and click next.');
							  $('#wizardvalidate').smartWizard('setError',{stepnum:step,iserror:true});         
							}else{
							  $('#wizardvalidate').smartWizard('setError',{stepnum:step,iserror:false});
							}
					  }
					  
					  // validate step3
					  if(step == 3){
							if(validateStep3() == false ){
							  isStepValid = false; 
							  $('#wizardvalidate').smartWizard('showMessage','Please correct the errors in step'+step+ ' and click next.');
							  $('#wizardvalidate').smartWizard('setError',{stepnum:step,iserror:true});         
							}else{
							  $('#wizardvalidate').smartWizard('setError',{stepnum:step,iserror:false});
							}
					  }
              
              return isStepValid;
            }
                
                function validateStep1(){
               var isValid = true; 
               
               // validate password
               var pw = $('#password').val();
               if(!pw && pw.length <= 0){
                 isValid = false;
                 $('#msg_password').html('Please fill password').show();         
               }else{
                 $('#msg_password').html('').hide();
               }
               
               // validate confirm password
               var cpw = $('#cpassword').val();
               if(!cpw && cpw.length <= 0){
                 isValid = false;
                 $('#msg_cpassword').html('Please fill confirm password').show();         
               }else{
                 $('#msg_cpassword').html('').hide();
               }  
               
               // validate password match
               if(pw && pw.length > 0 && cpw && cpw.length > 0){
                 if(pw != cpw){
                   isValid = false;
                   $('#msg_cpassword').html('Password mismatch').show();            
                 }else{
                   $('#msg_cpassword').html('').hide();
                 }
               }
               
               // Validate Username
               var un = $('#razao_social').val();
               if(!un && un.length <= 0){
                 isValid = false;
                 $('#msg_razao_social').html('Please fill username').show();
               }else{
                $('#msg_razao_social').html('').hide(); 
               }
              return isValid;
            }
        
        
            function validateStep2(){
              var isValid = true;    
               // Validate firstname
               var fname = $('#firstname').val();
               if(!fname && fname.length <= 0){
                 isValid = false;
                 $('#msg_firstname').html('Please fill firstname').show();
               }else{
                 $('#msg_username').html('').hide();
               }
               
               // validate lastname
               var lname = $('#lastname').val();
               if(!lname && lname.length <= 0){
                 isValid = false;
                 $('#msg_lastname').html('Please fill lastname').show();         
               }else{
                 $('#msg_lastname').html('').hide();
               }
        
               // validate gender
               var gender = $('#gender').val();
               if(!gender && gender.length <= 0){
                 isValid = false;
                 $('#msg_gender').html('Please choose gender').show();         
               }else{
                 $('#msg_gender').html('').hide();
               }
        
                return isValid;
            }
            
            function validateStep3(){
              var isValid = true;    
              //validate email  email
              var email = $('#email').val();
               if(email && email.length > 0){
                 if(!isValidEmailAddress(email)){
                   isValid = false;
                   $('#msg_email').html('Email is invalid').show();           
                 }else{
                  $('#msg_email').html('').hide();
                 }
               }else{
                 isValid = false;
                 $('#msg_email').html('Please enter email').show();
               }       
              return isValid;
            }
            
            // Email Validation
            function isValidEmailAddress(emailAddress) {
              var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
              return pattern.test(emailAddress);
            } 
                
                
        </script>

<!--upoload imagem
<script src="upimagem/js/jquery.min2.js"></script>  -->
<script src="js/jquery.wallform.js"></script>
<script>
 $(document).ready(function() { 
		
            $('#photoimg').die('click').live('change', function()			{ 
			           //$("#preview").html('');
			    
				$("#imageform").ajaxForm({target: '#preview', 
				     beforeSubmit:function(){ 
					
					console.log('ttest');
					$("#imageloadstatus").show();
					 $("#imageloadbutton").hide();
					 }, 
					success:function(){ 
				    console.log('test');
					 $("#imageloadstatus").hide();
					 $("#imageloadbutton").show();
					}, 
					error:function(){ 
					console.log('xtest');
					 $("#imageloadstatus").hide();
					$("#imageloadbutton").show();
					} }).submit();
					
		
			});
        }); 
</script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>

<!-- Header -->
<div id="header">
  <ul id="account_info" class="pull-right">
    <li><img src="images/avatar.png" alt="Online" /></li>
    <li class="setting">Bem-vindo, <b class="red">Visitante</b>
      <ul class="subnav">
        
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
<li class="select"><a href="#"><span class="ico gray shadow dimensions"></span><b>Novo cadastro</b></a> </li>
<li ><a href="faq.php"><span class="ico gray shadow encrypt"></span><b>FAQ</b></a>
<!--<li ><a href="plano_solidario/"><span class="ico gray shadow calendar"></span><b>Plano solidário</b></a>-->
<li ><a href="contato/"><span class="ico gray shadow window"></span><b>Contato</b></a>   

</div>
<div id="content">
<div class="inner">
  <div class="row-fluid">
    <div class="span12 clearfix">
      <div class="logo"></div>
      <ul id="shortcut" class="clearfix">
<li> <a href="#" title="Mostrar todos os Planos"> <img src="images/icon/shortcut/home.png" alt="home" /><strong>Planos</strong> </a> </li>
                                    <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=69:magic-t%C3%AAnis&Itemid=354" title="Exemplo de Loja Virtual"> <img src="images/icon/shortcut/graph.png" alt="graph" /><strong>Loja Virtual</strong> </a> </span></li>
                                    <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=79:mt-b%C3%A1sico&Itemid=355" title="Exemplo de Vitrine de Produtos"> <img src="images/icon/shortcut/setting.png" alt="setting" /><strong>Vitrine Produtos</strong></a></span> </li> 
                                    <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=65:reino-verde-jardinagem&Itemid=356" title="Exemplo de Vitrine de Serviços"> <img src="images/icon/shortcut/mail.png" alt="messages" /><strong>Vitrine Serviços</strong></a></span></li>
        </li>
      </ul>
    </div>
  </div>
  <div class="row-fluid"> 
    
    <!-- Widget -->
    <div class="widget  span12 clearfix">
      <div class="widget-header"> <span><i class="icon-wrench"></i>Cadastrar Nova Loja CompreMania</span> </div>
      <!-- End widget-header -->
      
      <div class="widget-content"> 
      <form  name="digitador" method="post" action="finaliza/finalizado_vitrine_produto.php" />
      		 <input type="hidden" name="issubmit" value="1" />  
        <!-- Smart Wizard -->
        <div id="wizard" class="swMain">
          <ul>
            <li><a href="#step-1">
              <label class="stepNumber">1</label>
              <span class="stepDesc">Categoria<br />
              <small>Início</small> </span> </a></li>
            <li><a href="#step-2">
              <label class="stepNumber">2</label>
              <span class="stepDesc">Dados da Empresa<br />
              <small>Pessoa Jurídica</small> </span> </a></li>
            <li><a href="#step-3">
              <label class="stepNumber">3</label>
              <span class="stepDesc">Personalização<br />
              <small>Cores Logomarca </small> </span> </a></li>
            <li><a href="#step-4">
              <label class="stepNumber">4</label>
              <span class="stepDesc">Finalização<br />
              <small>Data da Compra</small> </span> </a></li>
          </ul>
          <div id="step-1" style=" padding-left:33%;">
           <h3>PLANO:</h3>
           <select class="chzn-select" name="plano" id="plano" 
           <option value="Virtine de Serviços - Empresa" >Virtine de Serviços - Empresa</option>
           <option value="Vitrine de Produtos - Empresa" selected>Vitrine de Produtos - Empresa</option>
           <option value="Loja Virtual - Empresa">Loja Virtual - Empresa</option>
           </select>
            
             <h3>CATEGORIA:</h3>
            <select data-placeholder="Escolha uma categoria..." class="chzn-select"  name="categoria" id="categoria" onKeyUp="repeat(document.digitador.representante.value)">
              <option value="nada">Escolha uma categoria...</option>
              <option value="Alimentação">--------------------Alimentação--------------------</option>
              <option value="Bares">Bares</option>
              <option value="bebidas">Bebidas</option>
              <option value="Casas de Suco">Casas de Suco</option>
              <option value="Churrascaria">Churrascaria</option>
              <option value="Doces e Sobremesas">Doces e Sobremesas</option>
              <option value="Hamburgueria">Hamburgueria</option>
              <option value="Lanchonetes">Lanchonetes</option>
              <option value="Orgânicos">Orgânicos</option>
              <option value="Padarias">Padarias</option>
              <option value="Pastelaria">Pastelaria</option>
              <option value="Peixes e Frutos do Mar">Peixes e Frutos do Mar</option>
              <option value="Pizzaria">Pizzaria</option>
              <option value="Restaurantes">Restaurantes</option>
              <option value="Sopas e Caldos">Sopas e Caldos</option>
              <option value="Sorveterias">Soverterias</option>
              <option value="Variados">Variados</option>
              <option value="Vegetariano">Vegetariano</option>
              <option value="Lojas">-------------------------Lojas-------------------------</option>
          
              <option value="Lojas de Produtos">Lojas de Produtos</option>
              <option value="Prestadores de Serviço">Prestadores de Serviço</option>
              <option value="Restaurantes, Bares e Lanchonetes">Restaurantes, Bares e Lanchonetes</option>
             
              <option value="Produtos">--------------------Produtos--------------------</option>
           
              <option value="Acessórios para Veículos">Acessórios para Veículos</option>
              <option value="Agropecuária">Agropecuária</option>
              <option value="Alarmes e Segurança">Alarmes e Segurança</option>
              <option value="Alimentpicios">Alimentícios</option>
              <option value="Antiguidades">Antiguidades</option>
              <option value="Arte e Artesanato">Arte e Artesanato</option>
              <option value="Artigos Infantis">Artigos Infantis</option>
              <option value="Artigos Religiosos">Artigos Religiosos</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Beleza e Cosméticos">Beleza e Cosméticos</option>
              <option value="Bijuterias e Acessórios">Bijuterias e Acessórios</option>
              <option value="Brinquedos e Hibbies">Brinquedos e Hobbies</option>
              <option value="Calçados">Calçados</option>
              <option value="Cama, Mesa e Banho">Cama, Mesa e Banho</option>
              <option value="Câmeras e Acessórios">Câmeras e Acessórios</option>
              <option value="Celulares e Telefonia">Celulares e Telefonia</option>
              <option value="Colchçoes e Acessórios">Colchões e Acessórios</option>
              <option value="Eletrodomésticos">Eletrodomésticos</option>
              <option value="Eletrônicosm Áudio e Vídeo">Eletrônicos, Áudio e Vídeo</option>
              <option value="Embalagens">Embalagens</option>
              <option value="Esportes e Fitness">Esportes e Fitness</option>
              <option value="Floriculturas e Cestas">Floriculturas e Cestas</option>
              <option value="Gmaes">Games</option>
              <option value="Indústria, Comércio e Ferramentas">Indústria, Comércio e Ferramentas</option>
              <option value="Informática">Informática</option>
              <option value="Ingressos e Entradas">Ingressos e Entradas</option>
              <option value="Instrumentos Músicas">Instrumentos Músicais</option>
              <option value="Joalheria e Relojoaria">Joalheria e Relojoaria</option>
              <option value="Livros, Revistas e Jornais">Livros, Revistas e Jornais</option>
              <option value="Materiais para Construção">Materiais para Construção</option>
              <option value="Móveis e Decoração">Móveis e Decoração</option>
              <option value="Músicas">Músicas</option>
              <option value="Óticas">Óticas</option>
              <option value="Papelaria">Papelaria</option>
              <option value="Perfumes e Fragrâncias">Perfumes e Fragrâncias</option>
              <option value="Pet Shop">Pet Shop</option>
              <option value="Piscinas">Piscinas</option>
              <option value="Presentes">Presentes</option>
              <option value="Produtos de Limpeza">Produtos de Limpeza</option>
              <option value="Roupas e Acessórios">Roupas e Acessórios</option>
              <option value="Saúde">Saúde</option>
              <option value="Sex Shop">Sex Shop</option>
              <option value="Tabacarias">Tabacarias</option>
              <option value="Utensílios Domesticos">Utensílios Domesticos</option>
           
              <option value="Serviços">--------------------Serviços--------------------</option>
              
              <option value="Academias">Academias</option>
              <option value="Advogados">Advogados</option>
              <option value="Agências de Publicidade">Agências de Publicidade</option>
              <option value="Animais">Animais</option>
              <option value="Arquitetos">Arquitetos</option>
              <option value="Acessoria Contábil">Assessoria Contábil</option>
              <option value="Cabeleireiros">Cabeleireiros</option>
              <option value="Casa e Decoração">Casas e Decoração</option>
              <option value="Clínicas">Clínicas</option>
              <option value="Construlçao e Manutenção">Construção e Manutenção</option>
              <option value="Corretoras">Corretoras</option>
              <option value="Dedetização">Dedetização</option>
              <option value="Dentistas">Dentistas</option>
              <option value="Despachantes">Despachantes</option>
              <option value="Educação">Educação</option>
              <option value="Eletricista e Serviços Elétricos">Eletricista e Serviços Elétricos</option>
              <option value="Farmácia e Manipulação">Farmácia de Manipulação</option>
              <option value="Festas e Eventos">Festas e Eventos</option>
              <option value="Finacniamento">Financiamento</option>
              <option value="Gráficas, IMpressão e Luminosos">Gráficas, Impressão e Luminosos</option>
              <option value="Instituto de Beleza e Estética">Instituto de Beleza e Estética</option>
              <option value="Internet">Internet</option>
              <option value="Lavanderias">Lavanderias</option>
              <option value="Marcas e Patentes">Marcas e Patentes</option>
              <option value="Oficinas Mecânicas">Oficinas Mecânicas</option>
              <option value="Pousadas e Hotéis">Pousadas e Hotéis</option>
              <option value="Revenda">Revenda</option>
              <option value="Segurança e Vigilância">Segurança e Vigilância</option>
              <option value="Spa's">Spa's</option>
              <option value="Suporte Técnico">Suporte Técnico</option>
              <option value="Transporte e Logística">Transporte e Logística</option>
              <option value="Veículos e Transportes">Veículos e Transportes</option>
              <option value="Vestuário">Vestuario</option>
              <option value="Viagens e Turismo">Viagens e Turismo</option>
            </select>
            <br>
            
            <h3>CONTA: <a href="solidaria.php" class="pop_box"><img src="img/solidaria.gif"></a></h3>
           <select class="chzn-select"  name="conta" id="conta">
           <option value="Vitrine de Serviços - R$9,90/mês"  >Vitrine de Serviços - R$9,90/mês</option>
<option value="Vitrine de Produtos - R$19,90/mês"  selected>Vitrine de Produtos - R$19,90/mês</option>
<option value="Vitrine de Produtos - R$29,90/mês">Loja Virtual - R$29,90/mês</option>


           </select>
          <!-- <h3>Forma de Pagamento:</h3>
           <select class="chzn-select" name="forma_pagamento" id="forma_pagamento">
           	<option value="Boleto Báncario" selected>Boleto Bancário</option>
            <option value="Boleto Báncario">Cartão de Crédito</option>
           </select>-->
            <h3>Nome da Empresa:</h3>
            <input type="text" name="razao_social" id="razao_social"  onKeyUp="repeat2(document.digitador.razao_social.value)" />
            <br>
            <h3>Responsável:</h3>
            <input type="text" name="responsavel" id="responsavel"  onKeyUp="repeat3(document.digitador.responsavel.value)" />
            <br />
          </div>
          <div id="step-2" style="padding-left:15%;">
            <div class="span4">
              <h4>CNPJ:<small> *</small></h4>
              <input type="text" name="ssn"  id="ssn"  onKeyUp="repeat4(document.digitador.ssn.value)"  />
              <h4>E-mail:<small> *</small></h4>
              <input type="text" name="email" id="email"  value="@" onKeyUp="repeat5(document.digitador.email.value)" />
              <h4>Senha:<small> *</small></h4>
              <input id="senha" name="senha" type="password"  onKeyUp="repeat6(document.digitador.senha.value)" />
              <h4>CEP:<small> *</small></h4>
              <input id="cep" name="cep" OnKeyPress="formatar('#####-###', this)" maxlength="9"type="text"  tabindex="3" onKeyUp="repeat7(document.digitador.cep.value)"  />
            </div>
            <div class="span4">
              <h4>Rua:<small> *</small></h4>
              <input type="text" name="rua" id="rua"  onKeyUp="repeat8(document.digitador.rua.value)"  />
              <h4>Número:<small> *</small></h4>
              <input type="text" name="num" id="num"  onKeyUp="repeat9(document.digitador.num.value)"  />
              <h4>Bairro:<small> *</small></h4>
              <input type="text" name="bairro" id="bairro"  onKeyUp="repeat10(document.digitador.bairro.value)"  />
              <h4>Cidade:<small> *</small></h4>
              <input type="text" name="cidade" id="cidade"  value="Franca" onKeyUp="repeat11(document.digitador.cidade.value)"  />
            </div>
            <div class="span4">
              <h4>Estado:<small> *</small></h4>
              <input type="text" name="uf" id="uf" class="small"  value="SP" onKeyUp="repeat12(document.digitador.uf.value)"  />
              <h4>Site: <small> **</small></h4>
              <input type="text" name="site" id="site" value="http://"  onKeyUp="repeat13(document.digitador.site.value)"  />
              <h4>Telefone:<small> *</small></h4>
              <input type="text" id="phone" name="phone"  onKeyUp="repeat14(document.digitador.phone.value)"  />
              <h4>Celular: <small> **</small></h4>
              <input type="text" name="celular" id="celular"  maxlength="13" OnKeyPress="formatar('##-#####-####', this)" onKeyUp="repeat15(document.digitador.celular.value)"  >
              </form>
            </div>
          </div>
          <div id="step-3">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#00FF99">
              <tr>
                <td><div>
                    <form id="imageform" method="post" enctype="multipart/form-data" action='ajaxImageUpload.php' style="clear:both">
                      <h2>Envie algumas imagens de sua empresa<br>
                        como: logotipo, faixada ou produtos: </h2>
                      <div id='imageloadstatus' style='display:none'><img src="loader.gif" alt="Uploading...."/> </div>
                      <div id='imageloadbutton'>
                        <input class="file fileupload" type="file" name="photos[]" id="photoimg" multiple />
                      </div>
                    </form>
                  </div></td>
                <td><div id='preview'> </div></td>
              </tr>
            </table>
            <hr>
            
            <h2>Escolha as cores da sua loja ou vitrine:</h2>
            <script type="text/javascript">
			<!--		
			var elm = document.getElementById('csd3-load');
			if (elm) elm.innerHTML = '<p>Aguarde por favor. Carregando...<'+'/p>';
			//-->
			</script>
            <div id="csd3-canvas" style="display:none">
              <div id="csd3-model-cover"></div>
              <div id="csd3-pane-wheel" class="pane"></div>
              <div id="csd3-pane-vars" class="pane">
                <div class="tabs" id="csd3-tabs-csv"></div>
                <div id="csd3-c1-cover"></div>
                <div id="csd3-c2-cover"></div>
              </div>
              <div id="csd3-pane-info" class="pane"></div>
              <div class="tabs" id="csd3-tabs-color"></div>
              <table id="csd3-palette">
                <tr>
                  <td class="cbox bg-pri-0"></td>
                  <td class="cbox bg-sec1-0"></td>
                  <td class="cbox bg-sec2-0"></td>
                  <td class="cbox bg-compl-0"></td>
                </tr>
              </table>
              <input type="text" id="csd3-schemeid" name="csd3-schemeid">
           
              <div id="csd3-preview-palette-canvas">
                <div id="csd3-preview-palette-bg1"></div>
                <div id="csd3-preview-palette-bg2"></div>
                <table id="csd3-preview-palette">
                  <tr class="pri">
                    <td class="cbox bg-pri-3" rel="pri-3"></td>
                    <td class="cbox bg-pri-0" rel="pri-0" rowspan="2"></td>
                    <td class="cbox bg-pri-1" rel="pri-1"></td>
                  </tr>
                  <tr class="pri">
                    <td class="cbox bg-pri-4" rel="pri-4"></td>
                    <td class="cbox bg-pri-2" rel="pri-2"></td>
                  </tr>
                  <tr class="sec sec1">
                    <td class="cbox bg-sec1-1" rel="sec1-1"></td>
                    <td class="cbox bg-sec1-0" rel="sec1-0" rowspan="2"></td>
                    <td class="cbox bg-sec1-3" rel="sec1-3"></td>
                  </tr>
                  <tr class="sec sec1">
                    <td class="cbox bg-sec1-2" rel="sec1-2"></td>
                    <td class="cbox bg-sec1-4" rel="sec1-4"></td>
                  </tr>
                  <tr class="sec sec2">
                    <td class="cbox bg-sec2-1" rel="sec2-1"></td>
                    <td class="cbox bg-sec2-0" rel="sec2-0" rowspan="2"></td>
                    <td class="cbox bg-sec2-3" rel="sec2-3"></td>
                  </tr>
                  <tr class="sec sec2">
                    <td class="cbox bg-sec2-2" rel="sec2-2"></td>
                    <td class="cbox bg-sec2-4" rel="sec2-4"></td>
                  </tr>
                  <tr class="compl">
                    <td class="cbox bg-compl-1" rel="compl-1"></td>
                    <td class="cbox bg-compl-0" rel="compl-0" rowspan="2"></td>
                    <td class="cbox bg-compl-3" rel="compl-3"></td>
                  </tr>
                  <tr class="compl">
                    <td class="cbox bg-compl-2" rel="compl-2"></td>
                    <td class="cbox bg-compl-4" rel="compl-4"></td>
                  </tr>
                </table>
              </div>
              <div class="tabs" id="csd3-tabs-preview"></div>
              <div id="csd3-showtext"> </div>
              <div id="csd3-showtext"> </div>
            </div>
          </div>
       
        <div id="step-4" style="text-align:center; padding-left:5%;" > 
        <form name="cima">
        <input type=text name="repetido3" style=" width:100%; height:1px !important">
        <input type=text name="repetido2" style=" width:100%; height:1px !important">
        <h2>Seja bem-vindo ao CompreMania <span style="color:#F00 !important; text-transform:capitalize !important;" id="indentificador3"></span> em breve você receberá um e-mail com seu login<br> e senha para administrar sua loja dentro do nosso Shopping Virtual.</h2>
        <h4>Temos certeza que sua empresa <span style="color:#F00 !important; text-transform:capitalize !important;" id="indentificador2"></span> será encontra com mais facilidade com nossa divulgação</h4>
       </form>
        <input type="submit" class="btn btn-info" style="width:150px !important; height:60px !important; line-height:60px !important; font-size:28px;" value="Finalizar">    
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
