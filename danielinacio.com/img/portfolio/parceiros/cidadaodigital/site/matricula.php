<?php
require_once("insertdb.php"); //inclusao do arquivo com a funcao
 
mysql_connect("cpmy0044.servidorwebfacil.com","cdigital_alunos","jr010691");  //conexão com o banco de dados(coloque os seus valores!)
mysql_select_db("cdigital_alunos");  //Definição do banco de dados a ser usado(escolha o seu!)
 
if(isset($_POST[nome])){  //Testa se o form foi postado
  if(insertDb($_POST,"tabela_alunos")){  //Chama a função
    echo "Dados inseridos com sucesso!"; 
  }
  else{
    echo "Falha ao inserir os dados!";
  }
}
else{ //se não foi postado imprime o form
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel="shortcut icon" href="images/favicon.ico" />
<link rel="icon" href="images/favicon.ico" />
<link rel="stylesheet" type="text/css" href="css/flexslider.css" />
<link rel="stylesheet" type="text/css" href="css/jquery.fancybox-1.3.4.css"/>
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/udt_shortcodes.css" />
<link rel="stylesheet" type="text/css" href="css/udt_media_queries.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800' rel='stylesheet' type='text/css' />
<link href='http://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css' />
<style type="text/css">

.tooltip {
	display:none;
	position:absolute;
	border:1px solid #333;
	background-color:#161616;
	border-radius:5px;
	padding:10px;
	color:#fff;
	font-size:12px Arial;
}
</style>
<!-- Radio personalizado -->


<!-- Fim  RAdio-->
<title>Matrícula Cidadão Digital</title>

<script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false"></script>
<script src="js/gmaps.js" type="text/javascript"></script>
<script src="js/cep.js" type="text/javascript"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-44854858-1', 'cidadaodigital.cc');
  ga('send', 'pageview');

</script>
<script type="text/javascript">
/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}
</script>
<script>
function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }
  
}
</script>
<script>
            $(function(){
                wscep({map: 'map1',auto:true});
                wsmap('08615-000','555','map2');
            })
</script>
        
<script type="text/javascript">

	//tweet buttons
	 !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="http://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
		
</script>
<!-- Calcula a Idade -->
      <script  type="text/javascript">
         function calculaIdade(data,dataHoje) {

             x = data.split("/");
             h = dataHoje.split("/");

             if(x[0] > 31 || x[1] > 12 || x[2] > h[2]) {
                 alert('Data de Nascimento inv&#30109;ida!');
                 return 0;
             }

             anosProvisorio = h[2] - x[2];
            
            if(h[1] < x[1]) {
                 anosProvisorio -= 1;
             }
             else if(h[1] == x[1]) {
                 if(h[0] < x[0]) {
                     anosProvisorio -= 1;
                 }
             }

             return anosProvisorio;
         }
         </script>
        
 <!-- Fim Calcula a Idade -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
        // Tooltip only Text
        $('.masterTooltip').hover(function(){
                // Hover over code
                var title = $(this).attr('title');
                $(this).data('tipText', title).removeAttr('title');
                $('<p class="tooltip"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        }, function() {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
        }).mousemove(function(e) {
                var mousex = e.pageX + 20; //Get X coordinates
                var mousey = e.pageY + 10; //Get Y coordinates
                $('.tooltip')
                .css({ top: mousey, left: mousex })
        });
});
</script>


</head>

<body>
<!--start wrapper-->
<div id="wrapper">

	<!--start header-->
	<div class="header clearfix">
            <div class="inner">
                <div class="logo-pages">
                    <div class="logo">
                        <a class="navigateTo" href="http://cidadaodigital.cc">
                            <img src="images/logo-header.png" alt=""/>                   
                        </a>
                    </div>
                </div>
                
                <!--mobileMenu toggle-->
                <div class="mobileMenuToggle"><a href="#"></a></div>
                    
                <!--navigation-->
                <ul class="navigation">
                    <li><a class="navigateTo" href="http://cidadaodigital.cc">Apresentação</a></li>
                    <li><a class="navigateTo active" href="#">Fazer Matrícula</a></li>
                </ul>
            </div>
	</div>
	<!--end header--> 

	<!--start page-->
	<div id="contact" class="page even">
    
		<!--start content - left-->
        <div class="content clearfix">
		
            <!--content-left-->
            <div class="content-inner-left">
    
                    <h1><span style="color:#FFF !important;">Fazer matrícula</span></h1>
                    <form  action="matricula_feita.php" method="post" class="contactForm form" id="contact-form" name="contact-form">			
                    	<p>
                            <input type="text" name="nome" id="nome" class="required"  placeholder="Nome Completo:"  /> 
                            <input type="text" name="data" id="data" class="required  masterTooltip" maxlength="10" placeholder="Data de Nascimento:" OnKeyPress="formatar('##/##/####', this)"  onBlur="document.getElementById('idade').value = calculaIdade(this.value,'<?php echo date("d/m/Y");?>');" title="Digite no seguinte formato DD/MM/AAAA" />
                           
                        </p>
                        <p>
                        	<input type="text" name="idade" id="idade" placeholder="Idade:" />
                            <input type="text" name="responsavel" id="responsavel" class="required  masterTooltip"  masterTooltip placeholder="Responsável:" title="Preencha o campo caso seja menor de idade."/>
                        </p> 
                        <p>
                        <input type="text" name="telefone" id="telefone" maxlength="15" placeholder="Telefone Fixo:" />
                        <input type="text" class="required  masterTooltip" name="celular" id="celular" maxlength="15" placeholder=" Telefone Celular:" title="Através deste número você receberá informações do curso via SMS"/>
                        <p>
                            <input type="text" class="required  masterTooltip"  name="cpf" id="cpf" maxlength="14" placeholder="CPF do Responsável:" OnKeyPress="formatar('###.###.###-##', this)" title="Caso seja menor de idade preencha com CPF do Responsável" >
                            <input id="cep" name="cep" class="required  masterTooltip" type="text" maxlength="9" placeholder="Informe o CEP:" title="Digite seu CEP para buscar seu endereço automáticamente"/>
                        	
                        </p>
                        <p>
                        	<input id="rua" name="rua" class="required" type="text" placeholder="Nome da Rua / Logradouro:" />
                        	<input id="num" name="num" class="required" type="text" placeholder="Número:" />
                        </p>
          				<p>
                        	<input id="bairro" name="bairro" class="required" type="text" placeholder="Informe o Bairro:" />
                        	<input id="cidade" name="cidade" class="required" type="text" placeholder="Informe a Cidade:" />
                        </p>
                        <p>
                        	<input id="uf" name="uf" type="text" class="required" placeholder="Informe o UF:" />
                        	<input type="text" name="email"  id="email" placeholder="E-mail:"/>
                        </p>
                        <p>
                        
                        </p>
                        <p>
                        <h6 class="widgettitle"><span style="color:#FFF !important;">Clique no curso desejado e escolha seu horário abaixo:</span></h6>
                      
                                    <ul class="payment-methods">
                                      <li class="payment-method paypal">
                                        <input name="payment_methods" type="radio" id="paypal" value="Curso Básico">
                                        <label for="paypal">Curso Básico</label>
                       
           							 </li>
                                    
                                      <li class="payment-method pagseguro">
                                        <input name="payment_methods" type="radio" id="pagseguro" value="Curso Avançado">
                                        <label for="pagseguro">Curso Avançado</label>
                                      </li>
                                    
                                      <li class="payment-method bankslip">
                                        <input name="payment_methods" type="radio" id="bankslip" value="Web Designer">
                                        <label for="bankslip">Web Designer</label>
                                      </li>
                                    </ul>
                            
                            
                            <div style="width:100%;"> 
                            
                              <select name="horario_curso_basico" id="horario_curso_basico">
                              <option value="Sem Horário">Horário C. Basico</option>
                              <option value="Sábado - 10:30 as 12:30">Sábado - 10:30 as 12:30</option>
                         
                              </select>
                             
                              
                         
                              <select name="horario_curso_avancado" id="horario_curso_avancado">
                              <option value="Sem Horário">Horário C. Avançado</option>
                              <option value="Sábado - 10:30 as 12:30">Sábado - 13:30 as 15:30</option>
                              </select>
                            
                              <select name="horario_curso_web_designer" id="horario_curso_web_designer">
                                <option value="Sem Horário">Horário C. Web Designer</option>
                                <option value="Sábado - 16:00 as 18:00">Sábado - 16:00 as 18:00</option>
                              </select>
                            </div>                           
                        </p>
                        	<br />
              				<p>
              				<ul>
                            	<li>
                                <img src="CaptchaSecurityImages.php?width=100&height=40&characters=4" />
							    </li>
                                <li>
                            	<label for="security_code"></label><input id="security_code" name="security_code" type="text" class="required" placeholder="Digite o código a cima:"/>
                            	</li>
                            </ul>    
                            </p>
                    <p>
                        <input type="submit" value="Fazer Matrícula" class="submit submitTheme" id="submitform" />
                       
                    </p>
                    </form>
           
			</div>
            
             <!--start sidebar-->
               <div id="sidebar" class="left">
                    <ul>
                        <!--widget-recent-posts-->
                        <li class="widget-text">
                            <h6 class="widgettitle"><span style="color:#FFF !important;">Contato</span></h6>
                            <h6 class="widgettitle"><span style="color:#FFF !important;">Horário de Atendimento: 08:00 ás 17:00</span></h6>
                           
                          <h5><span style="color:#FFF;">
						  (16)3025-7622 ou                       
                          	  99280-7747
                          </span></h5>
                            <p><strong style="color:#FFF;">contato@cidadaodigital.cc</strong></p>
                        </li>
                         <li class="widget-text">
                            <h6 class="widgettitle"><span style="color:#FFF !important;">Valor da Matrícula (Incluso material didático)</span></h6>
								<!--social networks-->
                                <h5><span style="color:#FFF;"> R$40,00</span></h5>
                        </li>
                         <li class="widget-text">
                            <h6 class="widgettitle"><span style="color:#FFF !important;">Siga-nos</span></h6>
								<!--social networks-->
                                <ul class="socialSmall odd">
                                    <li><a class="twitter" target="new" href="http://www.twitter.com/#"></a></li>
                                    <li><a class="facebook" target="new" href="https://www.facebook.com/escolacidadaodigital"></a></li>
                                    <li><a class="skype" href="#"></a>Cidadão Digital</li>
                                </ul>
                        </li>
                         <li class="widget-text">
                          
                        </li>
                    </ul>
               </div>
	
        </div>
		<!--end content-->
       
		
	</div>
	<!--end page--> 
    <!-- FORM CEP-->
    <div class="container_12">

         
           

                                
            </div>
    <!-- FIM FORM CEP -->
    
  

                                
            </div>
    <!--start footer-->
	<div id="footer" class="even">
    
		<div class="content">
       
			<!--logo-->
            <div class="logo">
            	<a class="navigateTo" href="index-2.html#homepage">
                	<img src="images/logo-common.png" alt=""/>
                </a>
            </div>
            
            <!--copyright-->
            <p class="copyright">&copy; <a href="http://www.cidadaodigital.cc/" title="Cidadão Digital">Cidadão Digital</a> 2013. Todos os direitos reservados.</p>
            
            <!--social-->
            <div id="social-share">
            
            	<!--fb-->
                <iframe src="http://www.facebook.com/plugins/like.php?href=http://www.facebook.com/compremania;send=false&amp;layout=button_count&amp;width=80&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;appId=196621353694874" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:80px; height:21px;float:left;"></iframe>
                
                <!--twitter-->
            	<a href="http://twitter.com/share?url=http://compremania.com.br/&amp;text=Eu quero:______ no @compremania." class="twitter-share-button">Tweet</a>
            
            </div>
            
        </div>
        
    </div>
    <!--end footer-->

</div>        
<!--end wrapper-->        

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36404650-3']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>       
</body>
</html>
<?
}
?>