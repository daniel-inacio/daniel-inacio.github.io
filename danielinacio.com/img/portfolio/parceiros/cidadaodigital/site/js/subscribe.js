jQuery(document).ready(function($) {
	
	var newsletterFormDefaults=new Array();
	newsletterFormDefaults['signup_email']='Seu E-mail';
	newsletterFormDefaults['success_title']='Obrigado por se cadastrar :D, em breve entraremos em contato!';
	newsletterFormDefaults['success_content']='We\'ll keep you posted whenever we have any new products or updates. If you ever wish to unsubscribe, you can easily do so via the link that will be in every email.';
	newsletterFormDefaults['invalide_email']='Por favor insira um endereço de e-mail válido e tente novamente';
	newsletterFormDefaults['signup_error']='Obrigado por se cadastrar :D, em breve entraremos em contato!';
	
	$('#signup_email').focus(function() {
		if($(this).val()==newsletterFormDefaults[$(this).attr('id')]) {
			$(this).val('');
		}
	});
	$('#signup_email').blur(function() {
		if($(this).val()=='') {
			$(this).val(newsletterFormDefaults[$(this).attr('id')]);
		}
	});
	
	$('#newsletter-msg').css({'opacity':'0'});
	$('#newsletter-loader').css({'opacity':'0','display':'block'});
	
	$('#newsletter-form').submit(function() {
		$('#newsletter-form .signupSubmit').attr("disabled", "disabled");
		$('#newsletter-msg').animate({left: $('#newsletter-msg-wrapper').width()-$('#newsletter-msg').width()/2 +'px', opacity:0},200,function() {
			$('#newsletter-msg').removeClass('errorMsg');
		});
		$('#newsletter-loader').stop().animate({'margin-top':'-10px','margin-bottom':'0px', opacity : 1.0},200,function() {
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if(reg.test($('#signup_email').val())==false) {
				$('#newsletter-msg').html(newsletterFormDefaults['invalide_email']).addClass('errorMsg');
				$('#newsletter-msg').css({'position':'absolute', 'left':'-'+$('#newsletter-msg').width()/2+'px'});
				$('#newsletter-msg').animate({left: $('#newsletter-msg-wrapper').width()/2-$('#newsletter-msg').width()/2 +'px', opacity:1},200);
				$('#newsletter-loader').stop().animate({'margin-top':'-20px','margin-bottom':'10px', opacity : 0},200,function() {
					$('#newsletter-form .signupSubmit').removeAttr("disabled");
				});
			} else {
				
				$.ajaxSetup ({
					cache: false
				});
				var dataString = 'signup_email='+ $('#signup_email').val();
				
				$.ajax({
					type: "POST",
					url: "http://www.compremania.com.br/teaser/php/assinatura.php",
					data: dataString,
					success: function(msg) {
						if(msg=='Success') {
							
							$('#signup').children('.content').css({'height':$('#signup').children('.content').height()+'px'});
							$('#newsletter-form').stop().animate({'top':'10px', opacity : 0},200,function() {
								$('#newsletter-form').css({'top':'0px','display':'none'});
								
								$('.newsletter-content').stop().animate({'top':'10px', opacity : 0},200,function() {
									$('.newsletter-content').css({'top':'0px','display':'none'});
									
									$('.newsletter-title').stop().animate({'top':'10px', opacity : 0},200,function() {
										$('.newsletter-title').css({'top':'0px','display':'none'});
										
										var $thankyou = $('<h4 class="focus-title newsletter-thankyou"><span>'+newsletterFormDefaults['success_title']+'</span></h4><p class="newsletter-thankyou-content">'+newsletterFormDefaults['success_content']+'</p><p class="newsletter-thankyou-content"><a href="#" class="newsletter-reload">Reload form</a></p>');
										$thankyou.css({opacity:0,top:'-10px'});
										
										$('#signup').children('.content').append($thankyou);
										
										$thankyou.stop().animate({'top':'0px', opacity : 1},200);
										
									});
									
								});
								
							});
							$('#signup_email').val(newsletterFormDefaults['signup_email']);
							$('#newsletter-form .signupSubmit').removeAttr("disabled");
							
						} else {
							
							$('#newsletter-msg').html(newsletterFormDefaults['signup_error']).addClass('errorMsg');
							$('#newsletter-msg').css({'position':'absolute', 'left':'-'+$('#newsletter-msg').width()/2+'px'});
							$('#newsletter-msg').animate({left: $('#newsletter-msg-wrapper').width()/2-$('#newsletter-msg').width()/2 +'px', opacity:1},200);
							$('#newsletter-loader').stop().animate({'margin-top':'-20px','margin-bottom':'10px', opacity : 0},200,function() {
								$('#newsletter-form .signupSubmit').removeAttr("disabled");
							});
							
						}
					},
					error: function(ob,errStr) {
						
						$('#newsletter-msg').html(newsletterFormDefaults['signup_error']).addClass('errorMsg');
						$('#newsletter-msg').css({'position':'absolute', 'left':'-'+$('#newsletter-msg').width()/2+'px'});
						$('#newsletter-msg').animate({left: $('#newsletter-msg-wrapper').width()/2-$('#newsletter-msg').width()/2 +'px', opacity:1},200);
						$('#newsletter-loader').stop().animate({'margin-top':'-20px','margin-bottom':'10px', opacity : 0},200,function() {
							$('#newsletter-form .signupSubmit').removeAttr("disabled");
						});
						
					}
				});
				
			}
		});
		return false;
	});
	
	$('#signup .content').on('click', '.newsletter-reload', function(e) {
		$('.newsletter-thankyou, .newsletter-thankyou-content').stop().animate({'top':'10px', opacity : 0},200, function() {
			$('.newsletter-thankyou, .newsletter-thankyou-content').remove();
			$('.newsletter-title, .newsletter-content, #newsletter-form').css({opacity:0,'display':'block','top':'10px'});
			$('#newsletter-loader').css({'opacity':'0','display':'block'});
			$('.newsletter-title, .newsletter-content, #newsletter-form').stop().animate({'top':'0px', opacity : 1},200);
		});
		return false;
	});
	
	$(window).resize(function() {
		$('#signup').children('.content').css({'height':'auto'});
	});
	
});