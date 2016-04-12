var $idioma = "pt-br";

(function($){
  $(function(){
    $('.parallax').parallax();         //define o parallax
    $('.dropdown-button').dropdown();     //define o dropdow-menu
    $('.button-collapse').sideNav({menuWidth: 240, activationWidth: 70}); //define o menu
    $('.tooltipped').tooltip({delay: 1});
    $('select').material_select();
    $('.tooltipped').tooltip();
    $('.slider').slider({full_width: true});
    $('.scrollspy').scrollSpy();

    console.log();

    //pega localização usuario e defineo idioma
    console.log(geoplugin_countryCode());
    var local = geoplugin_countryCode();
    var pt = ["AO","BR","CV","GW","MO","MZ","PT","ST","TL"];
    var es = ["AD","AR","BO","CL","CO","CR","CU","SV","EC","ES","GT","GQ","HN","MX","NI","DO","PA","PY","PE","PR","UY","VE"];


if(localStorage.getItem("lang") == null){

    if ($.inArray(local, pt) > -1){
     console.log("portugues");
     $idioma = "pt-br"; 
    }
    else if($.inArray(local, es) > -1){
      console.log("espanhol");
      $idioma = "es-es"; 
    }
    else{
      console.log("ingles");
      $idioma = "en-us";  
    }
}    
else{
  $idioma = (localStorage.getItem("lang"));
}    


    //carrega info idioma desejado
    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
        .done(function(json) {
        //perfil
        $("#nome_perfil").append(json.infoPessoal[0].nome);
        $("#subtitulo_perfil").append(json.infoPessoal[0].subtitulo);
        $("#frase_perfil").append(json.infoPessoal[0].frase); 
        $("#t_idioma").append(json.idioma[0].tIdioma);
        $("#projeto").append(json.menu[0].projeto);
        //idioma
        $("#pt-br").append(json.idioma[0].pt); 
        $("#en-us").append(json.idioma[0].en); 
        $("#es-es").append(json.idioma[0].es);
        //menu
        $("#menu1").append(json.menu[0].menu1);
        $("#menu2").append(json.menu[0].menu2);
        $("#menu3").append(json.menu[0].menu3);
        $("#menu4").append(json.menu[0].menu4);
        //habilidades
        $("#front").append(json.habilidades[0].front);
        $("#back").append(json.habilidades[0].back);
        $("#bd").append(json.habilidades[0].bd);
        $("#fram").append(json.habilidades[0].fram);
        $("#graf").append(json.habilidades[0].graf);
        //formação
        $("#t_formacao").append(json.formacao[0].t_formacao);
        $("#forma1_titulo").append(json.formacao[0].forma1_titulo);
        $("#forma2_titulo").append(json.formacao[0].forma2_titulo);
        $("#forma3_titulo").append(json.formacao[0].forma3_titulo);
        $("#forma4_titulo").append(json.formacao[0].forma4_titulo);
        $("#forma1_curso").append(json.formacao[0].forma1_curso);
        $("#forma2_curso").append(json.formacao[0].forma2_curso);
        $("#forma3_curso").append(json.formacao[0].forma3_curso);
        $("#forma4_curso").append(json.formacao[0].forma4_curso);
        $("#forma1_perido").append(json.formacao[0].forma1_perido);
        $("#forma2_perido").append(json.formacao[0].forma2_perido);
        $("#forma3_perido").append(json.formacao[0].forma3_perido);
        $("#forma4_perido").append(json.formacao[0].forma4_perido);
        $("#t_exp").append(json.formacao[0].t_exp);
        $("#exp1_empresa").append(json.formacao[0].exp1_empresa);
        $("#exp2_empresa").append(json.formacao[0].exp2_empresa);
        $("#exp3_empresa").append(json.formacao[0].exp3_empresa);
        $("#exp4_empresa").append(json.formacao[0].exp4_empresa);
        $("#exp1_cargo").append(json.formacao[0].exp1_cargo);
        $("#exp2_cargo").append(json.formacao[0].exp2_cargo);
        $("#exp3_cargo").append(json.formacao[0].exp3_cargo);
        $("#exp4_cargo").append(json.formacao[0].exp4_cargo);
        $("#exp1_perido").append(json.formacao[0].exp1_perido);
        $("#exp2_perido").append(json.formacao[0].exp2_perido);
        $("#exp3_perido").append(json.formacao[0].exp3_perido);
        $("#exp4_perido").append(json.formacao[0].exp4_perido);
        $(".link_contato").append(json.formacao[0].link_contato);
        //contato
        $("#t_titulo_c").append(json.contato[0].t_titulo_c); 
        $("#t_nome").append(json.contato[0].t_nome); 
        $("#t_fone").append(json.contato[0].t_fone); 
        $("#t_email").append(json.contato[0].t_email); 
        $("#t_msg").append(json.contato[0].t_msg);
        $("#t_btn").append(json.contato[0].t_btn);        
        

    });    

});

       $(".escolhe_idioma").click(function() {
          var idioma_escolhido = ($(this).attr('id'));
          console.log(idioma_escolhido);
            if(idioma_escolhido == "pt-br"){
                 localStorage.setItem("lang", "pt-br");
            }
            else if(idioma_escolhido == "es-es"){
                localStorage.setItem("lang", "es-es");;
            }
            else if(idioma_escolhido == "en-us"){
                localStorage.setItem("lang", "en-us");
            }
          location.reload();  
       });


       $("#menu4").click(function() {
          $("#nome_contato").focus();
       }); 

        //abre caixa servicos primeiro bloco
        $(".abre_projeto").click(function() {
              
                var id_projeto = ($(this).attr('id'));

                if(id_projeto == "homea"){
                   $('#projeto').scrollSpy(); 
                   $("#projetos_abertos").empty();

                   $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.homea[0].descricao_projeto+"</div>");
                   });   

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.homea, function (i, objeto) {  
                                                
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "lazarini"){
                  $('#projeto').scrollSpy(); 
                  $("#projetos_abertos").empty();

                  $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.lazarini[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.lazarini, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "cidadaodigital"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.cidadaodigital[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.cidadaodigital, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "idesufran"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.idesufran[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.idesufran, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l4 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "compremania"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.compremania[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.compremania, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "km5"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.km5[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.km5, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "mmpm"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.mmpm[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.mmpm, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "pains"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.pains[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.pains, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "phocomagazine"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.phocomagazine[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.phocomagazine, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "esquadraomotoclube"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.esquadraomotoclube[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.esquadraomotoclube, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "blognovo"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.blognovo[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.blognovo, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "zoomdesign"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.zoomdesign[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.zoomdesign, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "prevsimples"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.prevsimples[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.prevsimples, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else if(id_projeto == "gamadiesel"){
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.gamadiesel[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.gamadiesel, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                else{
                    $('#projeto').scrollSpy(); 
                    $("#projetos_abertos").empty();

                    $.getJSON( "./danielinacio.com/json/"+$idioma+".json")
                        .done(function( json ) {
                      $("#projetos_abertos").append("<div class='col s12'>"+json.marceloveiculos[0].descricao_projeto+"</div>");
                   });

                   $.getJSON("./danielinacio.com/json/"+$idioma+".json", function (data) {
                      $.each(data.marceloveiculos, function (i, objeto) {  
                                                
                         //$("#").empty();
                         $("#projetos_abertos").append(objeto.link+"<div class='col s6 m12 l3 center'><img data-caption='"+objeto.descricao_img+"'class='"+objeto.classe+" responsive-img card' src='danielinacio.com/img/portfolio/parceiros/"+ objeto.img+"'></div></a>");                                                
                         $('.materialboxed').materialbox();                 
                      });
                   });     
                                               
                }
                 
              $(".capas").toggle("slow");
        });


})(jQuery);

