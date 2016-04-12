<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt" lang="pt">
    <head>
        <title>Exemplo</title>
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
     </head>
     <body>
         Data de Nascimento: <input type="text" name="dataNascimento" onBlur="document.getElementById('idade').value = calculaIdade(this.value,'<?php echo date("d/m/Y");?>');" />
         Idade: <input type="text" id="idade" /> 
     </body>
</html>