<?php
  //1 – Definimos Para quem vai ser enviado o email
  $para = "contato@cidadaodigital.cc";
  //2 - resgatar o nome digitado no formulário e  grava na variavel $nome
  $nome = $_POST['nome'];
  // 3 - resgatar o assunto digitado no formulário e  grava na variavel //$assunto
  $assunto = 'NOVO ALUNO CIDADÃO DIGITAL - '.$curso.' - '.$nome ;
  // 4-  Recebendo p formulario todo
	
	$nome = $_POST["nome"];
	$data = $_POST["data"];
	$idade = $_POST["idade"];
	$responsavel = $_POST["responsavel"];
	$telefone = $_POST["telefone"];
	$celular =  $_POST["celular"];
	$cpf = $_POST["cpf"];
	$cep = $_POST["cep"];
	$rua = $_POST["rua"];
	$numero = $_POST["num"];
	$bairro = $_POST["bairro"];
	$cidade = $_POST["cidade"];
	$estado = $_POST["uf"];
	$email = $_POST["email"];
	$curso = $_POST["payment_methods"];
	$horario_curso_basico = $_POST["horario_curso_basico"];
	$horario_curso_avancado = $_POST["horario_curso_avancado"];
	$horario_curso_web_designer = $_POST["horario_curso_web_designer"];
	

	



   //5 – Agora definimos a  mensagem que vai ser enviado no e-mail
  //$mensagem = "<strong>Nome:  </strong>".$nome;
  //$mensagem .= "<br>  <strong>Mensagem: </strong>".$_POST['mensagem'];
  $mensagem .= "<br><strong>Nome:  </strong>".$_POST["nome"];
  $mensagem .= "<br><strong>Data de Nascimento:  </strong>".$_POST["data"];
  $mensagem .= "<br><strong>Idade:  </strong>".$_POST["idade"];
  $mensagem .= "<br><strong>Responsável:  </strong>".$_POST["responsavel"];
  $mensagem .= "<br><strong>Telefone:  </strong>".$_POST["telefone"];
  $mensagem .= "<br><strong>Celular:  </strong>".$_POST["celular"];
  $mensagem .= "<br><strong>CPF:  </strong>".$_POST["cpf"];
  $mensagem .= "<br><strong>CEP:  </strong>".$_POST["cep"];
  $mensagem .= "<br><strong>Rua:  </strong>".$_POST["rua"];
  $mensagem .= "<br><strong>Número:  </strong>".$_POST["num"];
  $mensagem .= "<br><strong>Bairro:  </strong>".$_POST["bairro"];
  $mensagem .= "<br><strong>Cidade:  </strong>".$_POST["cidade"];
  $mensagem .= "<br><strong>Estado:  </strong>".$_POST["uf"];
  $mensagem .= "<br><strong>E-mail:  </strong>".$_POST["email"];
  $mensagem .= "<br><strong>Curso:  </strong>".$_POST["payment_methods"];
  $mensagem .= "<br><strong>Horário Curso Básico:  </strong>".$_POST["horario_curso_basico"];
  $mensagem .= "<br><strong>Horário Curso Avançado: </strong>".$_POST["horario_curso_avancado"];
  $mensagem .= "<br><strong>Horário Curso Web Designer: </strong>".$_POST["horario_curso_web_designer"];
  
  
 
//6 – agora inserimos as codificações corretas e  tudo mais.
  $headers =  "Content-Type:text/html; charset=UTF-8\n";
  $headers .= "From:  cidadaodigital.cc<contato@cidadaodigital.cc>\n"; //Vai ser //mostrado que  o email partiu deste email e seguido do nome
  $headers .= "X-Sender:  <cliente@cidadaodigital.cc>\n"; //email do servidor //que enviou
  $headers .= "X-Mailer: PHP  v".phpversion()."\n";
  $headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
  $headers .= "Return-Path:  <contato@cidadaodigital.cc>\n"; //caso a msg //seja respondida vai para  este email.
  $headers .= "MIME-Version: 1.0\n";
 
mail($para, $assunto, $mensagem, $headers);  //função que faz o envio do email.

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
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-44854858-1', 'cidadaodigital.cc');
  ga('send', 'pageview');

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
<style type="text/css">
page.even {
background: url(../images/verde.png) repeat !important;
}
</style>

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
	<div id="contact" class="page verde">
    
		<!--start content - left-->
        <div class="content clearfix">
		
            <!--content-left-->
            <div class="content-inner-left">
    
                    <h1><span style="color:#FFF !important;">Parabéns Matrícula Realizada com Sucesso</span></h1>
                    <h6><span style="color:#FFF !important;">Por favor dirija-se a Escola Cidadão Digital 08:00 as 18:00 para pagamento da Matrícula.
                    Local: Av Rio Branco, 807 - Jardim Francano - Franca SP</span></h6>
                    <form action="matricula_feita.php" method="post" class="contactForm form" id="contact-form" name="contact-form">			
                    	<p>
                            <input type="text" name="nome" id="nome" class="required" value="<?php echo $nome ?>" disabled="disabled"  /> 
                            <input type="text" name="data" id="data" class="required  masterTooltip" maxlength="10" value="<?php echo $data ?>" />
                           
                        </p>
                        <p>
                        	<input type="text" name="idade" id="idade" value="<?php echo $idade ?>" disabled="disabled" />
                            <input type="text" name="responsavel" id="responsavel" class="required"  value="<?php echo $responsavel ?>"/>
                        </p> 
                        <p>
                        <input type="text" name="telefone" id="telefone" maxlength="15" value="<?php echo $telefone ?>" disabled="disabled"/>
                        <input type="text" class="required  masterTooltip" name="celular" id="celular" maxlength="15" value="<?php echo $celular ?>" disabled="disabled"/>
                        <p>
                            <input type="text" class="required  masterTooltip"  name="cpf" id="cpf" maxlength="14" value="<?php echo $cpf ?>" >
                            <input id="cep" name="cep" class="required  masterTooltip" type="text" maxlength="9" value="<?php echo $cep ?>" disabled="disabled"/>
                        	
                        </p>
                        <p>
                        	<input id="rua" name="rua" class="required" type="text" value="<?php echo $rua ?>" disabled="disabled"  />
                        	<input id="num" name="num" class="required" type="text" value="<?php echo $numero ?>" disabled="disabled" />
                        </p>
          				<p>
                        	<input id="bairro" name="bairro" class="required" type="text" value="<?php echo $bairro ?>" disabled="disabled" />
                        	<input id="cidade" name="cidade" class="required" type="text" value="<?php echo $cidade ?>" disabled="disabled"  />
                        </p>
                        <p>
                        	<input id="uf" name="uf" type="text" class="required" value="<?php echo $estado ?>" disabled="disabled" />
                        	<input type="text" name="email"  id="email" value="<?php echo $email ?>" disabled="disabled"/>
                        </p>
                        <p>
                        <input type="text"  name="curso" value="<?php echo $curso ?>" disabled="disabled"/>
                        <input type="text" name="horario" value="<?php echo $horario_curso_basico ?>" disabled="disabled" />
                        </p>
                       
                    </form>
           
			</div>
            
             <!--start sidebar-->
               <div id="sidebar" class="left">
                    <ul>
                        <!--widget-recent-posts-->
                        <li class="widget-text">
                            <h6 class="widgettitle"><span style="color:#FFF !important;">Contato</span></h6>
                          <h5><span style="color:#FFF;">
                          	 (16)3025-7622 ou                       
                          	  99280-7747</span></h5>
                            <p><strong style="color:#FFF;">contato@cidadaodigital.cc</strong></p>
                        </li>
                          <li class="widget-text">
                            <h6 class="widgettitle"><span style="color:#FFF !important;">Valor da Matrícula</span></h6>
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