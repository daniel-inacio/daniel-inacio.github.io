jQuery(function($){

    //muda botão ao enviar o e-mail
    $(".btn_envia").click(function(){    
        $(".enviando").toggle();
    }); 


    //funcao envia o email ajax
    $("#t_btn").click(function(){

        
        var nomeUs = $("#nome_contato").val();
        var telCont = $("#telefone_contato").val();
        var email = $("#email_contato").val();
        var msg = $("#msg_usuario").val();
        var msg_final = msg; //possivel add html aqui
        
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'Zx6cG7LitDQqkaAXvnJx6A',
                'message': {
                    'from_email': email,
                    'from_name': nomeUs,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Contato Site danielinacio.com',
                    'html': '<b>Contato: </b>'+telCont+'<br><br><b>Mensagem: </b><br><br>'+msg_final,
                    'to': [
                    {
                        'email': 'dinacio.jr@gmail.com',
                        'name': 'Daniel Inácio',
                        'type': 'to'
                    }]
                }
            }
        })
              
                .done(function(response) {
                            
                        var obj = (response);
                        console.log(obj[0].status);
       if(obj[0].status != "sent"){
                    $("#aviso0" ).empty();
                    $("#msg_resposta0" ).empty();
                    $("#aviso0").append("Erro");    
                    $("#msg_resposta0").append("Seu e-mail não pode ser enviado.");      
                    $('#modal_email_fail').openModal();               
        }else{
                            $("#aviso0").empty();
                            $("#msg_resposta" ).empty();
                            $("#aviso").append("Sucesso");    
                            $("#msg_resposta").append("Seu e-mail foi enviado com sucesso!");      
                            $('#modal_email').openModal();
        }                    
                            
                })
                .fail(function(response) {
                    $("#aviso" ).empty();
                    $("#msg_resposta" ).empty();
                    $("#aviso").append("Erro");    
                    $("#msg_resposta").append("Seu e-mail não pode ser enviado.");      
                    $('#modal_email_fail').openModal();
                });
                return false; // prevent page refresh

    });
});