$(document).ready(function(){
    $('head').append('<script src="js/mask.js" type="text/javascript"></script>');
})

var last_cep = 0;
var address;
var lat;
var lng;
var wsconf;
function wscep(conf)
{
    //parametros padrao true
    if(!conf){
        conf = {
            'auto': true,
            'map' : '',
            'wsmap' : ''
        };
    }
    wsconf = conf;
    //evento keyup no campo cep opcional
    if(wsconf.auto == true){
        $('#cep').live('keyup',function(){
            var cep = $.trim($('#cep').val()).replace('_','');
            if(cep.length >= 9){
                if(cep != last_cep){
                    busca();
                }
            }
        });         
    }else{
        var btn_busca = '<button class="btn btn_handler" type="button">Busca</button>';
        $('form').append(btn_busca)
        $('.btn_handler').live('click',function(){
            busca();
        })
    }    
    $('#cep').mask('99999-999');    
}
//busca o cep
function busca(){
    var cep = $.trim($('#cep').val());
    var url = 'http://xtends.com.br/webservices/cep/json/'+cep+'/';    
    if ($.browser.msie) {
        var url = 'ie.php';    
    }    
    $.post(url,{cep:cep},
        function (rs) {
            rs = $.parseJSON(rs);
            if(rs.result == 1){
                address = rs.logradouro + ', ' + rs.bairro + ', ' + rs.cidade + ', ' + ', ' + rs.uf;
                if(wsconf.map != '' ){
                    setMap(wsconf.map);
                }
                $('#rua').val(rs.logradouro);
                $('#bairro').val(rs.bairro);
                $('#cidade').val(rs.cidade);
                $('#uf').val(rs.uf);
                $('#cep').removeClass('invalid');
                $('#num').focus();
                $('#num').live('change',function(){
                    address = rs.logradouro + ', ' + $('#num').val() + ', ' + rs.bairro + ', ' + rs.cidade + ', ' + ', ' + rs.uf;    
                    if(wsconf.map != ''){
                        setMap(wsconf.map);
                    }
                })
                last_cep = cep;
            }
            else{
                $('#cep').addClass('invalid');    
                $('#cep').focus();  
                last_cep = 0;
            }
        })    
}
 
function wsmap(cep,num,elm)
{
    var url = 'http://xtends.com.br/webservices/cep/json/'+cep+'/';    
    if ($.browser.msie) {
        var url = 'ie.php';    
    }    
    $.post(url,{cep:cep},
        function (rs) {
            rs = $.parseJSON(rs);
            if(rs.result == 1){
                address = rs.logradouro + ', ' + num + ', ' + rs.bairro + ', ' + rs.cidade + ', ' + ', ' + rs.uf;
                setMap(elm);
            }
        })
}
function setMap(elm)
{
    GMaps.geocode({
        address: address,
        callback: function(results, status) {            
            if (status == 'OK') {
                //console.log(elm);
                $('#'+elm).show();
                var latlng = results[0].geometry.location;
                lat = latlng.lat();
                lng = latlng.lng()
                map = new GMaps({
                    div: elm,
                    lat: lat,
                    lng: lng,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    streetViewControl: true,
                    zoom: 14
                })
                map.addMarker({
                    lat: lat,
                    lng: lng,
                    title: address
                });
                map.setCenter(lat, lng);
            }
        }
    });   
     
}
