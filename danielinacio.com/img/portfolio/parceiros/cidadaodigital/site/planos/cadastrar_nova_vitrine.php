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
              <!-- left_menu -->
               <div id="left_menu">
                    <ul id="main_menu" class="main_menu">
                      <li><a href="index.html"><span class="ico gray shadow home"></span><b>Todos os Planos</b></a></li>
                      <li class="select" ><a href="#"><span class="ico gray dimensions"></span><b>Contratar</b></a>
                        <ul>
                          <li><a href="#">Vitrine de Serviço</a></li>
                          <li><a href="#">Vitrine de Produtos</a></li>
                          <li><a href="cadastrar_nova_loja.php">Loja Virtual</a></li>
                        </ul>
                        <li ><a href="../../CONTATO_LOJA_CM/CM/"><span class="ico gray encrypt"></span><b>Agende uma Visita</b></a>
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
                                    <span><i class="icon-warning-sign"></i> Cadastrar Nova Vitrine CM</span>
                                </div><!-- End widget-header -->	
                                <div class="widget-content">
                                
                                <div id="UITab" class="clearfix" style="position:relative;">
                                    <ul class="tabs">
                                        <li><a href="#tab1">NOVA VITRINE</a></li>  
                                                   
                                    </ul>
        
                                <div class="tab_container">
        
                                  <div id="tab1" class="tab_content"> 
                                      <div class="load_page">
                                        <!-- title box -->
                                    <div class="boxtitle"><i class="icon-hdd"></i>
                                    Por Favor preencha todos os campos obrigatórios
                                      </div>
                                      
                                      <form  id="form1" name="form1" method="post" enctype="multipart/form-data" action="vitrine_cadastrada.php" />                                          <div class="section">
                                                 <label><h4>Escolha a Vitrine desejada?</h4></label>
                                               </div>  
                                               <div class="section">  
                                               <div>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="plano" id="radio-1" value="PRODUTOS" checked="checked"/>
                                                        <label for="radio-1" title="PRODUTOS"></label>
                                                    </div>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="plano" id="radio-2" value="SERVIÇOS"  />
                                                        <label for="radio-2" title="SERVIÇOS"></label>
                                                    </div>
                                                  
                                                    
                                               </div>
                                           </div>    
                                       
                                               
                                      
                                            <div class="section">
                                            
                                                <label> Responsável:<small>Obrigatório.</small></label>   
                                                <div> <input type="text" name="responsavel" id="responsavel" class="full" /></div>
                                                <label> Ramo: <small>Obrigatório.</small></label>    
                                                <div> <input type="text" name="ramo" id="ramo" class=" medium" /></div>
                                                
                                                <label>CPF:<small>Obrigatório.</small></label>   
                                                <div> <input type="text" name="cpf" id="responsavel" class="cpf" /></div>
                                                
                                                <label>Data de Nascimento:<small>dd/mm/aaaa.</small></label>   
                                                <div> <input type="text" id="date" name="date" /></div>
                                                 
                                                 <label> Nome Fantasia: <small>Opcional.</small></label>   
                                                <div> <input type="text" name="nome_fantasia" id="nome_fantasia" class="full" /></div>
                                                
                                                 
                                                 <label>CNPJ: <small>Opcional.</small></label>   
                                                <div> <input type="text" name="cnpj" id="ssn" /></div>
                                                
                                                <label>E-mail: <small>Obrigatório.</small></label>   
                                                <div> <input type="text" name="email" id="email" class="full" value="@" /></div>
                                           </div>
         
                                            <h4>Endereço:</h4>   
                                           
                                            <div class="section">
                                               
                                                <label>Rua: <small>Obrigatório.</small></label>   
                                                <div> <input type="text" name="rua" id="rua" class="full" /></div>
                                          		 
                                                 <label>Número: <small>Obrigatório.</small></label>   
                                                <div> <input type="text" name="numero" id="numero" class="small" /></div>
                                                
                                                <label>Bairro: <small>Obrigatório.</small></label>   
                                                <div> <input type="text" name="bairro" id="bairro" class="full" /></div>
                                                
                                                <label>Cidade: <small>Obrigatório.</small></label>   
                                                <div> <input type="text" name="cidade" id="cidade" class="full" value="Franca" /></div>
                                                
                                                <label> Estado: <small>Obrigatório.</small></label>   
                                                <div> <input type="text" name="estado" id="estado" class=" xsmall" value="SP" /></div>
                                                
                                    
                                    			<label>CEP:<small>99999-999</small></label>
                                    			<div><input id="tin" name="cep" id="cep" type="text" tabindex="3" /></div>
                                    
                                   
                                              <label>Site: <small>Opcional</small></label>   
                                              <div><input type="text" name="site" id="site" value="http://" class="full" /></div>
                                          
                                                
                                                <label>Telefone: <small>(99) 9999-9999 </small></label><div>
                                        		<div><input id="phone" name="telefone" id="telefone" type="text" tabindex="2" /></div>
										
                                          
                                                                       
                                          </div>
                                       </div>
                                                
                                  		 <div class="section">
                                                
                                                  
                                                    
                                               
											<label>Subdomínio</label>
                                            <div><input type="text" class="small" name="subdominio" id="subdominio"><span style="font-size:18px">.compremania.com</span></div>
                                            <label>Comprar Domínio</label>
                                            <div>
                                            <input type="text" class="medium" name="dominio" id="dominio" value="www.">
                                            <span class="f_help">R$20,00 .com / R$20,00 .net / R$30,00 .com.br </span> 
                                            </div>
                                            </div>
                                            
                                            
                                              <div class="section">
                                                <label>TEM LOGOMARCA EM FORMATO DIGITAL?</label>   
                                                <div> 
                                                          <input type="checkbox" id="preOrder" name="tem_logomarca" class="preOrder" value="SIM" />
                                                          <span class="f_help">Arquivo aberto, em .cdr ou .eps  </span> 
                                               </div>
                                               </div>
                                               
                                                <div class="section">
                                                <label>DESEJA DESENVOLVER LOGOMARCA?</label>   
                                                <div> 
                                                          <input type="checkbox" id="preOrder" name="deseja_desenvolver" class="preOrder" value="SIM" />
                                                          <span class="f_help">Arquivo aberto, em .cdr ou .eps  </span> 
                                                          
                                               </div>
                                               
                                     
                                               </div>
                                            
                                    </div>                      
                                    <div id="step-3">
                                    
                                     <div class="section">
                                                 <label><h4>Estilo do Layout</h4></label>
                                               </div>
                                              
  
                                               <div class="section">  
                                               <div>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="estilo_layout" id="radio-1" value="LIMPO: Cores Claras, Leve e Suave" />
                                                        <label for="radio-1" title=" LIMPO: Cores Claras, Leve e Suave"></label>
                                                    </div><br>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="estilo_layout" id="radio-2" value="MODERNO: Cores Fortes e Chamativas" checked="checked" />
                                                        <label for="radio-2" title="MODERNO: Cores Fortes e Chamativas"></label>
                                                    </div><br>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="estilo_layout" id="radio-3" value="TRADCIONAL: Cores Discretas" />
                                                        <label for="radio-3" title="TRADCIONAL: Cores Discretas"></label>
                                                    </div><br>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="estilo_layout" id="radio-4" value="CHAMATIVO: Cores Vibrantes e Quentes" />
                                                        <label for="radio-3" title="CHAMATIVO: Cores Vibrantes e Quentes"></label>
                                                    </div>
                                                    
                                               </div>
                                               
                                       
                                    </div><br>
                                    
                                     <div class="section ">
                                   		 <label><h4>Escolha as Cores da Sua página:</h4></label>    
                                            <div> 
                                              <select class="chzn-select" name="cores[]"multiple="" tabindex="4">
                                                <option value="" /> 
                                                <option value="Azul" />Azul 
                                                <option value="Verde" />Verde 
                                                <option value="Amarelo" />Amarelo 
                                                <option value="Vermelho" />Vermelho 
                                                <option value="Branco" selected="selected" />Branco
                                                <option value="Laranja" selected="selected" />Laranja 
                                                <option value="Roxo" />Roxo
                                                <option value="Marrom"  />Marrom 
                                                <option value="Rosa"  />Rosa 
                                                <option value="Cinza" />Cinza 
                                              </select></div>
                                           </div>
                                                  
                                                  
                                                
                                                  
                                                  <span class="f_help"><span>**</span> Selecione pelo menos 2</span>
                                                
                                    
                                    <div>
                                    <label><h4>Digite um breve histórico que como deseja sua página:</h4></label> 
                                    <textarea  name="Textareaelastic" id="Textareaelastic"  class="large" cols="" rows=""></textarea>         
                                    </div> 
                                   <span class="f_help"><span>**</span> Detalhe aqui sua opnião a respeito do Design da Loja</span>
                                                      
                                    </div>         
                                           
                                    </div>
                                    <div id="step-4">
                                      
                                    
                                    <div class="section">
                                        <label>Data da Compra da Loja</label>   
                                        <div><input type="text" name="data_compra" id="datetimepicker"  />
                                         
                                          <br>
                             <input type="submit" class="btn btn-success" value="Finalizar Cadastro">
                                    
                                    
                                    
                                    </form>
                           
                                    
                                    
                                            
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