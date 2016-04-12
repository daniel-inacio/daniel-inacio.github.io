<?php
  //1 – Definimos Para quem vai ser enviado o email
  $para = "daniel@compremania.com";
  //2 - resgatar o nome digitado no formulário e  grava na variavel $nome
  $nome = $_POST['nome_fantasia'];
  // 3 - resgatar o assunto digitado no formulário e  grava na variavel //$assunto
  $assunto = 'NOVA LOJA VIRTUAL CM - '.$_POST["responsavel"] ;
  // 4-  Recebendo p formulario todo
	$razao_social = $_POST["razao_social"];
	$inscricao_estadual = $_POST["inscricao_estadual"];
	$ramo = $_POST["ramo"];
	$responsavel = $_POST["responsavel"];
	$cpf = $_POST["cpf"];
	$data_nascimento = $_POST["date"];
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
	$subdominio = $_POST["subdominio"];
	$dominio = $_POST["dominio"];
	$tem_logomarca = $_POST["tem_logomarca"];
	$deseja_desenvolver = $_POST["deseja_desenvolver"];
	$estilo_layout = $_POST["estilo_layout"];
	$data_compra = $_POST["data_compra"];
	



   //5 – Agora definimos a  mensagem que vai ser enviado no e-mail
  //$mensagem = "<strong>Nome:  </strong>".$nome;
  //$mensagem .= "<br>  <strong>Mensagem: </strong>".$_POST['mensagem'];
  $mensagem .= "<br><strong>Razão Social:  </strong>".$_POST["razao_social"];
  $mensagem .= "<br><strong>Inscrição Estadual:  </strong>".$_POST["inscricao_estadual"];
  $mensagem .= "<br><strong>Ramo:  </strong>".$_POST["ramo"];
  $mensagem .= "<br><strong>Responsável:  </strong>".$_POST["responsavel"];
  $mensagem .= "<br><strong>CPF:  </strong>".$_POST["cpf"];
  $mensagem .= "<br><strong>Data de Nascimento:  </strong>".$_POST["date"];
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
  $mensagem .= "<br><strong>Possui Loja Virtual?:  </strong>".$_POST["plano"];
  $mensagem .= "<br><strong>Subdomínio:</strong>".$_POST["subdominio"].".compremania.com";
  $mensagem .= "<br><strong>Domínio:</strong>".$_POST["dominio"];
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

?>
<!DOCTYPE html>
<html lang="en">
  <head>
        <meta charset="utf-8" />
        <title>Cadastro Nova Loja Compre MANIA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!-- Link shortcut icon-->
        <link rel="shortcut icon" href="images/favicon.ico" />
<link rel="icon" href="images/favicon.ico" />

        <!-- CSS Stylesheet-->
        <link type="text/css" rel="stylesheet" href="components/bootstrap/bootstrap.css" />
        <link type="text/css" rel="stylesheet" href="components/bootstrap/bootstrap-responsive.css" />
        <link type="text/css" rel="stylesheet" href="css/zice.style.css" />
		
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

		<script type="text/javascript">
			jQuery(document).ready(function() {
				jQuery("#demovalidation").validationEngine({
					prettySelect : true,
					useSuffix: "_chzn",
				});
				$("#country").chosen({
					allow_single_deselect : true
				});

			  // Example Overlay form
			  $(".on_load").live('click',function(){	
				  $('body').append('<div id="overlay"></div>');
				  $('#overlay').css('opacity',0.4).fadeIn(400);
				  var activeLoad = $(this).attr("name");		
				  var titleTabs = $(this).attr("title");		
				  $("ul.tabs li").hide();		
						  $('ul.tabs li').each(function(index) {
								  var activeTab = $('ul.tabs li:eq('+index+')').find("a").attr("href")			
								  if(activeTab==activeLoad){
									  $("ul.tabs ").append('<li class=active><a href="'+activeLoad+'" class=" prev on_prev "  id="on_prev_pro" name="'+activeLoad+'" >'+titleTabs+'</a></li>');
									  $("ul.tabs li:last").fadeIn();	
									  }
						  });
				  $('.widget-content').css({'position':'relative','z-index':'1001'});
				  $(".load_page").hide();
				  $('.show_add').show();
			   });
			  $(".on_prev").live('click',function(){	 
					$("ul.tabs li:last").remove();					 
					$("ul.tabs li").fadeIn();
					var pageLoad = $(this).attr("rel");	
					var activeLoad = $(this).attr("name");		
					  $(".show_add, .show_edit").hide();		
					  $(".show_edit").html('').hide();		
						  $(activeLoad).fadeIn();	
								  $(' .load_page').fadeIn(400,function(){   
										 $('#overlay').fadeOut(function(){
												   $('.widget-content').delay(500).css({'z-index':'','box-shadow':'','-moz-box-shadow':'','-webkit-box-shadow':''});
										  }); 
							  }); 
					ResetForm();
				   });	
			});
		</script>

		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>        
        <body>        
        
            <!-- Header -->
            <div id="header">
                <ul id="account_info" class="pull-right"> 
                    <li><img src="images/avatar.png" alt="Online" /></li>
                    <li class="setting">
                        Bem-vindo, <b class="red">Visitante</b>
                       
                    </li>
                    <a href="../index.html"><li class="Sair" title="Sair">Sair</li></a> 
                </ul>
            </div><!-- End Header -->

              <!-- left_menu -->
             <div id="left_menu">
                    <ul id="main_menu" class="main_menu">
                      <li><a href="index.html"><span class="ico gray shadow home"></span><b>Todos os Planos</b></a></li>
                      <li class="select" ><a href="#"><span class="ico gray dimensions"></span><b>Contratar</b></a>
                        <ul>
                          <li><a href="cadastrar_nova_vitrine.php">Vitrine de Serviço</a></li>
                          <li><a href="cadastrar_nova_vitrine.php">Vitrine de Produtos</a></li>
                          <li><a href="cadastrar_nova_loja.php">Loja Virtual</a></li>
                        </ul>
                      </li>
                     
                    </ul>
               </div>
            
              <div id="content">
                <div class="inner">
                                    
                   <div class="row-fluid">
                          <div class="span12 clearfix">
                             <a href="index.html"><div class="logo"></div></a>
                              <ul id="shortcut" class="clearfix">
                             <li> <a href="index.html" title="Mostrar todos os Planos"> <img src="images/icon/shortcut/home.png" alt="home" /><strong>Planos</strong> </a> </li>
                                    <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=69:magic-t%C3%AAnis&Itemid=354" title="Exemplo de Loja Virtual"> <img src="images/icon/shortcut/graph.png" alt="graph" /><strong>Loja Virtual</strong> </a> </span></li>
                                    <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=79:mt-b%C3%A1sico&Itemid=355" title="Exemplo de Vitrine de Produtos"> <img src="images/icon/shortcut/setting.png" alt="setting" /><strong>Vitrine Produtos</strong></a></span> </li> 
                                    <li> <span class="tip"> <a target="new" href="http://beta.compremania.com/index.php?option=com_k2&view=item&id=65:reino-verde-jardinagem&Itemid=356" title="Exemplo de Vitrine de Serviços"> <img src="images/icon/shortcut/mail.png" alt="messages" /><strong>Vitrine Serviços</strong></a></span></li>
                          </ul>
                          </div>
                    </div>
                        
                    <div class="row-fluid">
                    
                    		<!-- Widget -->
                            <div class="widget  span12 clearfix">
                                <div class="widget-header">
                                    <span><i class="icon-warning-sign"></i> Cadastrar Nova Loja CM</span>
                                </div><!-- End widget-header -->	
                                <div class="widget-content">
                                
                                <div id="UITab" class="clearfix" style="position:relative;">
                                    <ul class="tabs">
                                        <li><a href="#tab1">CONFIRME OS DADOS DA LOJA CADASTRADA</a></li>  
                                                   
                                    </ul>
        
                                <div class="tab_container">
        
                                  <div id="tab1" class="tab_content"> 
                                      <div class="load_page">
                                        <!-- title box -->
                                      <div class="alertMessage inline success SE">Cadastrado realizado com Sucesso! Entraremos em contato com você o mais rárpido possível para agendarmos uma reunião</div>
                                    <div class="boxtitle"><i class="icon-hdd"></i>
                                    <a href='javascript:history.back(1)'>
                                    Clique aqui para voltar.
                                    </a>
                                    </div>
                                      
                                    <?php echo $mensagem; ?>
                                    
                                            
                                  </div><!--tab1-->
                                  
                                  
                                
                          </div>
                          </div><!-- end uitab-->
               
                                </div><!--  end widget-content -->
                            </div><!-- widget  span12 clearfix-->

                    </div><!-- row-fluid -->
                    <div id="footer"> &copy; Copyright 2013 <span class="tip"><a href="#" title="Compre Mania">Compre Mania Shopping Virtual</a> </span> </div>
                    
                </div> <!--// End inner -->
              </div> <!--// End ID content --> 

        </body>
        </html>