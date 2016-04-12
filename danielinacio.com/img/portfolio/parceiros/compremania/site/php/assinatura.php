<?
##########################################################
/////////////////////////////////////////////////////  ###
/// Autor: Mateus Campos                         ////  ###
/// E-mail: mateuscampos@globo.com               ////  ###
/// Site: www.centralwarez.com                   ////  ###
/// Msn: mateus@centralwarez.com                 ////  ###
/// Obs: favor não retirar os nossos créditos!!! ////  ###
/////////////////////////////////////////////////////  ###
##########################################################
// aqui começa o script
//pega as variaveis por POST
$nome = $_POST["signup_email"];
$site     = 'site da pessoa';
$email   = $_POST["signup_email"];
$fone  = 'telefone da pessoa';
$assunto   = 'assunto da pessoa';
$mensagem  = 'mensagem da pessoa';

global $email; //função para validar a variável $email no script todo

$data      = date("d/m/y");                     //função para pegar a data de envio do e-mail
$ip        = $_SERVER['REMOTE_ADDR'];           //função para pegar o ip do usuário
$navegador = $_SERVER['HTTP_USER_AGENT'];       //função para pegar o navegador do visitante
$hora      = date("H:i");                       //para pegar a hora com a função date

//aqui envia o e-mail para você
mail ("compremania@gmail.com",                       //email aonde o php vai enviar os dados do form
      "'COMPREMANIA TEASER ASSINATURA'.$assunto",
      "Nome: $nome\nData: $data\nIp: $ip\nNavegador: $navegador\nHora: $hora\nSite: $site\nE-mail: $email\nTelefone: $fone\n\nMensagem: $mensagem",
      "From: $email"
     );

//aqui são as configurações para enviar o e-mail para o visitante
$site   = "compremania@gmail.com";                    //o e-mail que aparecerá na caixa postal do visitante
$titulo = "O compremania Agradece";                  //titulo da mensagem enviada para o visitante
$msg    = "$nome, obrigado por entrar em contato conosco, em breve entraremos em contato";

//aqui envia o e-mail de auto-resposta para o visitante
mail("$email",
     "$titulo",
     "$msg",
     "From: $site"
    );
echo "<p align=center>$nome, sua mensagem foi enviada com sucesso!</p>";
echo "<p align=center>Estaremos retornando em breve.</p>";
?>
