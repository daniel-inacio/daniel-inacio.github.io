<!DOCTYPE html>
<html lang="en">
  <head>
        <meta charset="utf-8" />
        <title>Cadastro de Produtos Compre Mania Shoppinng Virtual</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!-- Link shortcut icon-->
        <link rel="shortcut icon" type="image/ico" href="images/favicon.ico" /> 

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
        <script>
		$(document).ready(function() {
			// Form Cloning 
			var sheepItForm = $('#cloneForm').sheepIt({
				separator: '',
				allowRemoveLast: true,
				allowRemoveCurrent: true,
				allowRemoveAll: true,
				allowAdd: true,
				maxFormsCount: 10,
				minFormsCount: 0,
				iniFormsCount: 2
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
                        Bem-vindo, <b class="red">Compre Mania</b>
                       
                    </li>
                    <li class="logout" title="Sair">Sair</li> 
                </ul>
            </div><!-- End Header -->

              <!-- left_menu -->
              <div id="left_menu">
                    <ul id="main_menu" class="main_menu">
                      <li ><a href="dashboard.html"><span class="ico gray shadow home"></span><b>Todas as Lojas</b></a></li>
                      <li ><a href="cadastrar_nova_loja.php"><span class="ico gray shadow window"></span><b>Cadastrar Nova Loja</b></a>
                        <li class="select"><a href="cadastrar_produtos.php"><span class="ico gray  shadow paragraph_align_left"></span><b>Cadastrar Produtos</b></a></li>
                       
                      </li>
                      <li><a href="http://planos.compremania.com/" target="new"><span class="ico gray  dimensions"></span><b>Loja de Planos</b></a> </li>
                      <li><a href="https://drive.google.com/" target="new"><span class="ico gray shadow  file"></span><b>Upload Imagens</b></a></li>
                        
                      <li><a href="http://prezi.com/iai7wgvenmvl/present/?auth_key=721g6ht&follow=peebjonydgia&kw=present-iai7wgvenmvl&rc=ref-35169447" target="new"><span class="ico gray shadow   encrypt"></span><b>Apresentação Oficial</b></a></li>
                      <li><a href="https://pagseguro.uol.com.br/" target="new"><span class="ico gray shadow abacus"></span><b>PagSeguro</b></a></li>
					 
                    
               </div>
            
              <div id="content">
                <div class="inner">
                                    
                    <div class="row-fluid">
                          <div class="span12 clearfix">
                              <div class="logo"></div>
                              <ul id="shortcut" class="clearfix">
                                    <li> <a href="#" title="Back To home"> <img src="images/icon/shortcut/home.png" alt="home" /><strong>Início</strong> </a> </li>
                                    <li> <a href="#" title="Website Graph"> <img src="images/icon/shortcut/graph.png" alt="graph" /><strong>Estatísticas</strong> </a> </li>
                                    <li> <a href="#" title="Setting"> <img src="images/icon/shortcut/setting.png" alt="setting" /><strong>Conf</strong></a> </li> 
                                    <li> <a href="#" title="Messages"> <img src="images/icon/shortcut/mail.png" alt="messages" /><strong>Messagens</strong></a><div class="notification">10</div></li>
                              </ul>
                          </div>
                    </div>
                    
                  
                    
                    	
                                
                           
                    <div class="row-fluid">
                    
                    		<!-- Widget -->
                            <div class="widget  span12 clearfix">
                            
                                <div class="widget-header">
                                    <span><i class="icon-credit-card"></i>Cadastrar Produtos</span>
                                </div><!-- End widget-header -->	
                                
                                <div class="widget-content">
                                <form method="post" enctype="multipart/form-data" action="produtos_cadastrados.php" />
                                <label>NOME DA LOJA:</label>
                                <div>
                                <span class="wtip"><input name="loja" id="loja"  type="text" class="medium" title="Escreva o Nome da Loja Cadastrada" ></span>
                                </div>
                                
                                <div id="cloneForm">
                                  <!-- Form template-->
                                  <div id="cloneForm_template">
                                      <div class="section">
                                      <p><div  class="alertMessage inline success SE" style="color:#FFF; padding-left:5px; padding-bottom:10px; font-size:13px;">Produto (<span style="font-weight:bold" id="cloneForm_label"></span>) </div></p>
                                      
                                            <label>Nome do Produto (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div>  <span class="wtip"><input title="escreva o nome completo do produto" type="text" id="input_#index#_clone" class="medium" name="cm#index#[]" /></span> <a id="cloneForm_remove_current" class="clone-delete"><i class="icon-remove"></i></a></div>
                                            
                                            <label>Preço(<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div><span style="font-size:19px; color:#CCC;"> R$</span><span class="wtip"><input type="text" id="input_#index#_clone" class="xsmall" name="cm#index#[]" value="0,00" title="Não esqueceça da virgula para serparar os centavos" /></span></div>
                                            
                                             <label>Desconto (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Opcional*</small></label>
                                            <div> <span class="wtip"><input type="text" title="Caso não tenha desconto deixe 0" id="input_#index#_clone" class="xxsmall" name="cm#index#[]" value="0" /></span><span style="font-size:19px; color:#CCC;"> %</span> </div>
                                            
                                            <label>Descrição Curta (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Opcional*</small></label>
                                            <div><span class="wtip"> <input type="text" title="Essa Descrição aparecerá na frente do nome do produto na página da Loja" id="input_#index#_clone" class="medium" name="cm#index#[]" /></span> </div>
                                            
                                            
                                            <label>Descrição Completa  (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div><span class="wtip"><textarea title="Essa descrição será exibida apenas na página detalhes dos produtos"  id="input_#index#_clone" class="large" name="cm#index#[]" /></textarea></span> </div>
                                            <hr>
                                            <label>Qtd. em estoque (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div><span class="wtip"><input type="text" title="Campo importante, Preencha com no mínimo 1 para venda do mesmo produto" id="input_#index#_clone" class="xxsmall" name="cm#index#[]" /></span> </div>
                                            
                                            
                                            <label>Quantidade Mínima para Compra (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div> <span class="wtip"><input type="text" title="Preencha a quantidade mínima que seu cliente pode efetuar a compra" id="input_#index#_clone" class="xxsmall" name="cm#index#[]" value="1" /></span></div>
                                             <label>Quantidade Máxima para Compra (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div> <span class="wtip"><input type="text" title="Preencha a quantidade máxima que seu cliente pode efetuar a compra" id="input_#index#_clone" class="xxsmall" name="cm#index#[]" /></span> </div>
                                            
                                            <label>Disponibilidade (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div> <span class="wtip"><input type="text" id="input_#index#_clone" class="xsmall" name="cm#index#[]" title="Preencha aqui algum texto que será mostrado ao cliente na página de detalhes do Produto. Ex. 24h, 48 horas, 3 - 5 dias, Sob Pedido" /></span></div>
                                            
                                            <label>Atributo 1 <span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Opcional*</small></label>
                                            <div><span class="wtip"><input type="text" title="O atributo é usado caso o produto tenha diferenciação: Ex: Produto: Camisa Polo  atributo 1 = Tamanho M, Atributo 2 = Tamanho G- " id="input_#index#_clone" class="medium" name="cm#index#[]" /></span></div>
                                            
                                             <label>Atributo 2 (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Opcional*</small></label>
                                            <div><span class="wtip"><input type="text" title="O atributo é usado caso o produto tenha diferenciação: Ex: Produto: Camisa Polo  atributo 1 = Tamanho M, Atributo 2 = Tamanho G- " id="input_#index#_clone" class="medium" name="cm#index#[]" /></span> </div>
                                            <hr>
                                            <label>Comprimento (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div><span class="wtip"><input type="text" id="input_#index#_clone" class="xsmall" name="cm#index#[]" value="0.00" /></span></div>
                                            
                                            <label>Largura (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div><span class="wtip"><input type="text" id="input_#index#_clone" class="xsmall" name="cm#index#[]" value="0.00" /></span> </div>
                                            
                                            <label>Altura (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div><span class="wtip"><input type="text" id="input_#index#_clone" class="xsmall" name="cm#index#[]" value="0.00" /></span></div>
                                            
                                            <label>Unidade de Medida (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div><span class="wtip"><input type="text" id="input_#index#_clone" class="xsmall" name="cm#index#[]" value="Cm" /></span></div>
                                            
                                            <label>Peso (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div><span class="wtip"><input type="text" id="input_#index#_clone" class="xsmall" name="cm#index#[]" value="0.00" /></span></div>
                                            
                                            <label>Unidade de Medida (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div><span class="wtip"><input type="text" id="input_#index#_clone" class="xsmall" name="cm#index#[]" value="Kg" /></span></div>
                                            
                                            <label>Unidades na Embalagem (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div> <span class="wtip"><input type="text" id="input_#index#_clone" class="xsmall" name="cm#index#[]" value="0" /></span></div>
                                            
                                            <label>Unidades na caixa (<span style="color:#F00; font-weight:bold" id="cloneForm_label"></span>)<small>Obrigatório*</small></label>
                                            <div><span class="wtip"><input type="text" id="input_#index#_clone" class="xsmall" name="cm#index#[]" value="0" /></span></div><BR>
                                            
                                  </div></div>
                                  <div id="cloneForm_noforms_template">
                                  		<div class="alert alert-block  alert-info"> Adcionar NOVO Produto com um clique  <strong>Novo Produto </strong>.</div>
                                  </div>
                                  <div class="section last">
                                          <div id="cloneForm_controls">
                                            <input type="submit" class="btn btn-success" value="Enviar Produtos">
                                            <span id="cloneForm_add" class="tip"><a class="btn btn-large" title="Novo"><i class="icon-plus"></i> Novo Produto</a></span>
                                            <span id="cloneForm_remove_last" class="tip"><a class="btn btn-large" title="Apagar último produto"><i class="icon-trash"></i></a></span>
                                            <span id="cloneForm_remove_all" class="tip"><a class="btn btn-large btn-danger" title="Apagar Todos">Apagar Todos</a></span>
                                          </div>
                                  </div>
                                </div>
                                </form>
                                </div><!--  end widget-content -->
                      </div><!-- widget  span12 clearfix-->

                   
                  </div><!-- row-fluid -->
                    <div id="footer"> &copy; Copyright 2012 <span class="tip"><a href="#" title="Zice Admin">Your Company Name</a> </span> </div>
                    
                </div> <!--// End inner -->
              </div> <!--// End ID content --> 

        </body>
        </html>