<!DOCTYPE html PUBLIC  "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta  http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Enviando email pelo PHP Através de um  formulário</title>
  </head>
 
<body>
  <form  id="form1" name="form1" method="post" action="enviarEmail.php">
    <table  width="500" border="0" align="center" cellpadding="0" cellspacing="2">
      <tr>
        <td  align="right">Nome:</td>
        <td><input  type="text" name="nome" id="nome" /></td>
      </tr>
      <tr>
        <td  align="right">Assunto:</td>
        <td><input  type="text" name="assunto" id="assunto" /></td>
      </tr>
      <tr>
        <td  align="right">Mensagem:</td>
        <td><textarea  name="mensagem" id="mensagem" cols="45" rows="5"></textarea></td>
      </tr>
      <tr>
        <td  colspan="2" align="center"><input type="submit" value="Enviar" /></td>
      </tr>
    </table>
  </form>
  </body>
  </html>
