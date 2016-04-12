<?
/*****************************************************************/
/*  Script desenvolvido por Rafael G. Martins
/*
/*  Data: 15/10/2007
/*
/*  Versão: 1.0
/*
/*  Funçao: Recebe uma variavel "$_POST" de um formulario, 
/*          e insere os dados numa tabela do MySQL
/*
/*  Caso hajam erros envie email para: rafael@rafaelmartins.com
/*****************************************************************/
 
/*
  Função insertDB
 
  Entrada: $info: Variavel de formulario
                  (Ex: $_POST)
           $table: Nome da tabela do Mysql que receberá os dados.
                  (Ex: "teste")
  Retorno: formato BOOL:
           Valores:
             true: se os dados foram inseridos com sucesso.
             false: se ocorreu alguma falha ao inserir os dados
*/
 
function insertDb($info,$table){
  $count = 1;  //Contador para auxiliar na colocação das virgula
  foreach($info as $key=>$value){
    $fields .= $key;  //Montagem da query
    $values .= "'".$value."'";  //Montagem da query
    if($count < sizeof($info)){
      $fields .= ","; //Inserção das virgulas
      $values .= ","; //Inserção das virgulas
    }
    $count++;
  }
  mysql_query("INSERT INTO $table($fields) VALUES($values)");  //Realização da query
  return (mysql_affected_rows() == 1) ? true : false;  //Testa se a linha foi inserida no BD
}
?>