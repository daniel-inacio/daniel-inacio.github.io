<!DOCTYPE html>
<html lang="en">
  <head>
        <meta charset="utf-8" />
        <title>Compre Mania Administração</title>
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
               var un = $('#username').val();
               if(!un && un.length <= 0){
                 isValid = false;
                 $('#msg_username').html('Please fill username').show();
               }else{
                $('#msg_username').html('').hide(); 
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

		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>        
        <body>        
        
            <!-- Header -->
            <div id="header">
                <ul id="account_info" class="pull-right"> 
                    <li><img src="images/avatar.png" alt="Online" /></li>
                    <li class="setting">
                        Welcome, <b class="red">John Doe</b>
                        <ul class="subnav">
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Setting</a></li>
                            <li><a href="#">Reset password</a></li>
                            <br class="clearfix" />
                        </ul>
                    </li>
                    <li class="logout" title="Disconnect">Logout</li> 
                </ul>
            </div><!-- End Header -->

              <!-- left_menu -->
              <div id="left_menu">
                    <ul id="main_menu" class="main_menu">
                      <li><a href="dashboard.html"><span class="ico gray shadow home"></span><b>Todas as Lojas</b></a></li>
                      <li class="select"><a href="http://pagamento.compremania.com"><span class="ico gray shadow window"></span><b>Cadastra Nova Loja</b></a>
                       
                      </li>
                      <li><a href="http://planos.compremania.com/" target="new"><span class="ico gray  dimensions"></span><b>Loja de Planos</b></a> </li>
                      <li><a href="https://drive.google.com/" target="new"><span class="ico gray shadow  file"></span><b>Upload Imagens</b></a></li>
                      <li><a href="http://prezi.com/iai7wgvenmvl/present/?auth_key=721g6ht&follow=peebjonydgia&kw=present-iai7wgvenmvl&rc=ref-35169447" target="new"><span class="ico gray shadow  file"></span><b>Apresentação Oficial</b></a></li>
					 
                    
               </div>

            
              <div id="content">
                <div class="inner">
                                    
                    <div class="row-fluid">
                          <div class="span12 clearfix">
                              <div class="logo"></div>
                              <ul id="shortcut" class="clearfix">
                                    <li> <a href="http://www.compremania.com" target="new" title="Back To home"> <img src="images/icon/shortcut/home.png" alt="home" /><strong>Home</strong> </a> </li>
                                    <li> <a href="#" title="Website Graph"> <img src="images/icon/shortcut/graph.png" alt="graph" /><strong>Graph</strong> </a> </li>
                                    <li> <a href="#" title="Setting"> <img src="images/icon/shortcut/setting.png" alt="setting" /><strong>Setting</strong></a> </li> 
                                    <li> <a href="#" title="Messages"> <img src="images/icon/shortcut/mail.png" alt="messages" /><strong>Message</strong></a><div class="notification">10</div></li>
                              </ul>
                          </div>
                    </div>
                    
                    <div class="row-fluid">
                    
                    		<!-- Widget -->
                            <div class="widget  span12 clearfix">
                            
                                <div class="widget-header">
                                    <span><i class="icon-wrench"></i>Cadastrar Nova Loja CompreMania</span>
                                </div><!-- End widget-header -->	
                                
                                <div class="widget-content">
                                
                                <!-- Smart Wizard -->
                                <div id="wizard" class="swMain">
                                    <ul>
                                        <li><a href="#step-1">
                                        <label class="stepNumber">1</label>
                                        <span class="stepDesc">Dados da Empresa<br />
                                           <small>Pessoa Jurídica</small>
                                        </span>
                                    </a></li>
                                        <li><a href="#step-2">
                                        <label class="stepNumber">2</label>
                                        <span class="stepDesc">Planos<br />
                                           <small>Básico/ Essencial/ Prime</small>
                                        </span>
                                    </a></li>
                                        <li><a href="#step-3">
                                        <label class="stepNumber">3</label>
                                        <span class="stepDesc">Personalização<br />
                                           <small>Cores Logomarca </small>
                                        </span>                   
                                     </a></li>
                                        <li><a href="#step-4">
                                        <label class="stepNumber">4</label>
                                        <span class="stepDesc">Finalização<br />
                                           <small>Data da Compra</small>
                                        </span>                   
                                    </a></li>
                                    </ul>
                                    <div id="step-1">
                                    <div class="row-fluid">
                    
                    		<!-- Widget -->
                           
                              
                                    <!-- title box -->
                                    <div class="boxtitle"><i class="icon-hdd"></i>
                                    Por Favor preencha todos os campos obrigatórios
                                      </div>
                                      
                                      <form  id="form1" name="form1" method="post" action="php/enviarEmail.php" />                                         
                                            <div class="section">
                                             <label>Representante CM:</label>   
                                             
                                                 <div> <select class="large" name="representante" id="representante">
                                                     <option value="1"  >Escolha um Representante:</option>
                                                     <option value="2"  >Daniel Inácio</option>
                                                     <option value="3"  >Diego Ferreira</option>
                                                     <option value="4"  >Karina Giometti</option>
                                                     <option value="5"  >Wagner Deocleciano</option>
                                                
                                                    
                                                </select></div>       
                                           <br>     
                                            
                                                <label>Razão Social: <small>Obrigatótio.</small></label>   
                                                <div> <input type="text" name="razao_social" id="razao_social" class=" full" /></div>										<label> Ramo: <small>Obrigatótio.</small></label>   
                                                <div> <input type="text" name="ramo" id="ramo" class=" full" /></div>
                                                 
                                                 <label> Responsável:<small>Obrigatótio.</small></label>   
                                                <div> <input type="text" name="responsavel" id="responsavel" class="full" /></div>
                                                 
                                                 <label> Nome Fantasia: <small>Obrigatótio.</small></label>   
                                                <div> <input type="text" name="nome_fantasia" id="nome_fantasia" class="full" /></div>
                                                
                                                 
                                                 <label>CNPJ: <small>Obrigatótio.</small></label>   
                                                <div> <input type="text" name="cnpj" id="ssn" /></div>
                                                
                                                <label>E-mail: <small>Obrigatótio.</small></label>   
                                                <div> <input type="text" name="email" id="email" class="full" value="@" /></div>
                                           </div>
         
                                            <h4>Endereço:</h4>   
                                           
                                            <div class="section">
                                               
                                                <label>Rua: <small>Obrigatótio</small></label>   
                                                <div> <input type="text" name="rua" id="rua" class="full" /></div>
                                          		 
                                                 <label>Número: <small>Obrigatótio</small></label>   
                                                <div> <input type="text" name="numero" id="numero" class="small" /></div>
                                                
                                                <label>Bairro: <small>Obrigatótio</small></label>   
                                                <div> <input type="text" name="bairro" id="bairro" class="full" /></div>
                                                
                                                <label>Cidade: <small>Obrigatótio</small></label>   
                                                <div> <input type="text" name="cidade" id="cidade" class="full" value="Franca" /></div>
                                                
                                                <label> Estado: <small>Obrigatótio</small></label>   
                                                <div> <input type="text" name="estado" id="estado" class=" xsmall" value="SP" /></div>
                                                
                                    
                                    			<label>CEP:<small>99999-999</small></label>
                                    			<div><input id="tin" name="cep" id="cep" type="text" tabindex="3" /></div>
                                    
                                   
                                              <label>Site: <small>Opcional</small></label>   
                                              <div><input type="text" name="site" id="site" value="http://" class="full" /></div>
                                          
                                                
                                                <label>Telefone: <small>(99) 9999-9999 </small></label><div>
                                        		<div><input id="phone" name="telefone" id="telefone" type="text" tabindex="2" /></div>
                                                
                                        		
                                                   <input type="submit" value="enviar"/>
                                  
                                                
                                    </div>
                                           </div>
                                          
                                           
                                        
                                </div><!--  end widget-content -->
                   
                                    </div>
                                    <div id="step-2">
                                    
                                     <div class="section">
                                          <label>Quantidade de Produtos:</label>
                                          <div>
                                              <input type="text" name="quantidade_produtos"  id="sDec" value="5" />
                                          </div>
                                      </div>
                                               <div class="section">
                                                 <label><h3>Planos</h3></label>
                                               </div>  
                                               <div class="section">  
                                               <div>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="plano" id="radio-1" value="1" />
                                                        <label for="radio-1" title="BÁSICO"></label>
                                                    </div>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="plano" id="radio-2" value="1" checked="checked" />
                                                        <label for="radio-2" title="ESSENCIAL"></label>
                                                    </div>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="plano" id="radio-3" value="1" />
                                                        <label for="radio-3" title="PRIME"></label>
                                                    </div>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="plano" id="radio-3" value="1" />
                                                        <label for="radio-3" title="VITRINE"></label>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            
                                            
                                              <div class="section">
                                                <label>TEM LOGOMARCA EM FORMATO DIGITAL?</label>   
                                                <div> 
                                                          <input type="checkbox" id="preOrder" name="tem_logomarca" class="preOrder" value="1" />
                                                          <span class="f_help">Arquivo aberto, em .cdr ou .eps  </span> 
                                               </div>
                                               </div>
                                               
                                                <div class="section">
                                                <label>DESEJA DESENVOLVER LOGOMARCA?</label>   
                                                <div> 
                                                          <input type="checkbox" id="preOrder" name="deseja_desenvolver" class="preOrder" value="1" />
                                                          <span class="f_help">Arquivo aberto, em .cdr ou .eps  </span> 
                                                          
                                               </div>
                                               
                                     
                                               </div>
                                            
                                    </div>                      
                                    <div id="step-3">
                                    
                                     <div class="section">
                                                 <label><h3>Estilo do Layout</h3></label>
                                               </div>
                                              
  
                                               <div class="section">  
                                               <div>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="estilo_layout" id="radio-1" value="1" />
                                                        <label for="radio-1" title=" LIMPO: Cores Claras, Leve e Suave"></label>
                                                    </div><br>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="estilo_layout" id="radio-2" value="1" checked="checked" />
                                                        <label for="radio-2" title="MODERNO: Cores Fortes e Chamativas"></label>
                                                    </div><br>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="estilo_layout" id="radio-3" value="1" />
                                                        <label for="radio-3" title="TRADCIONAL: Cores Discretas"></label>
                                                    </div><br>
                                                    <div class="radiorounded">
                                                        <input type="radio" name="estilo_layout" id="radio-4" value="1" />
                                                        <label for="radio-3" title="CHAMATIVO: Cores Vibrantes e Quentes"></label>
                                                    </div>
                                                    
                                               </div>
                                               
                                       
                                    </div><br>
                                    
                                     <div class="section ">
                                   		 <label><h3>Escolha as Core da Sua Loja Virtual:</h3></label><br>   
                                              
                                                  <div class="checksquared">
                                                      <input type="checkbox" name="cores" id="check-1" value="azul"  />
                                                      <label for="check-1" title="Azul"></label>
                                                  </div>
                                                  <div class="checksquared">  
                                                      <input type="checkbox" name="cores" id="check-2" value="verde" />
                                                      <label for="check-2" title="Verde"></label>
                                                    </div>
                                                    <div class="checksquared">  
                                                      <input type="checkbox" name="cores" id="check-3" value="amarelo" />
                                                      <label for="check-3" title="Amarelo"></label>
                                                     </div>
                                                     <div class="checksquared">
                                                      <input type="checkbox" name="cores" id="check-4" value="vermelho" />
                                                      <label for="check-4" title="Vermelho"></label>
                                                      </div>
                                                      <div class="checksquared">
                                                      <input type="checkbox" name="cores" id="check-6" value="branco" />
                                                      <label for="check-6" title="Branco"></label>
                                                      </div>
                                                       <div class="checksquared">
                                                      <input type="checkbox" name="cores" id="check-7" value="laranja" />
                                                      <label for="check-7" title="Laranja"></label>
                                                      </div>
                                                       <div class="checksquared">
                                                      <input type="checkbox" name="cores" id="check-8" value="Roxo" />
                                                      <label for="check-8" title="Roxo"></label>
                                                      </div>
                                                       <div class="checksquared">
                                                      <input type="checkbox" name="cores" id="check-9" value="Marrom" />
                                                      <label for="check-9" title="Marrom"></label>
                                                      </div>
                                                       <div class="checksquared">
                                                      <input type="checkbox" name="cores" id="check-10" value="Rosa" />
                                                      <label for="check-10" title="Rosa"></label>
                                                      </div>
                                                       <div class="checksquared">
                                                      <input type="checkbox" name="cores" id="check-11" value="cinza" />
                                                      <label for="check-11" title="Cinza"></label>
                                                      </div>
                                                      
                                                  
                                                  <span class="f_help"><span>**</span> Selecione pelo menos 2</span>
                                                
                                    
                                    <div>
                                    <label><h3>Digite a descrição Completa da loja segundo o cliente:</h3></label><br> 
                                    <textarea  name="Textareaelastic" id="Textareaelastic"  class="large" cols="" rows=""></textarea>         
                                    </div> 
                                   <span class="f_help"><span>**</span> Detalhe aqui a opnião do cliente a respeito do Design da Loja</span>
                                                      
                                    </div>         
                                           
                                    </div>
                                    <div id="step-4">
                                      
                                    
                                    <div class="section">
                                        <label>Data da Compra da Loja</label>   
                                        <div><input type="text" name="data_compra" id="datetimepicker"  />
                                       <div class="section">
                             
                                    
                                        </form>    

                                    
                                     
                                   
                                        </div>
                                    </div>
                                     
                                    </div>
                                </div><!-- End SmartWizard Content -->  		
                                <div class="clearfix"></div>
                                
                                </div><!--  end widget-content -->
                            </div><!-- widget  span12 clearfix-->

                    </div><!-- row-fluid -->
                    <div class="row-fluid">
                    
                    		
                                </div><!--  end widget-content -->
                            </div><!-- widget  span12 clearfix-->

                    </div><!-- row-fluid -->
                    <div id="footer"> &copy; Copyright 2013 <span class="tip"><a href="#" title="Compre Mania">Compre Mania</a> </span> </div>
                    
                </div> <!--// End inner -->
              </div> <!--// End ID content --> 

        </body>
        </html>           
