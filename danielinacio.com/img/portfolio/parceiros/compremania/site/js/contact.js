$(document).ready(function() {
	var contactFormDefaults=new Array();
	contactFormDefaults['name']='Empresa';
	contactFormDefaults['email']='E-mail';
	contactFormDefaults['subject']='Setor que atua:';
	contactFormDefaults['subject']='Setor que atua:';
	contactFormDefaults['fone']='Telefone:';
	contactFormDefaults['contato']='Nome:';
	contactFormDefaults['msg']=$('.contactForm span#msg').html();
	
	$('.contactForm input[type="text"], .contactForm textarea').focus(function() {
		$(this).addClass('inputHighlight').removeClass('errorOutline');
		if($(this).hasClass('required')) {
			$('.contactForm span#msg').html('Esse campo é obrigatório.').removeClass('errorMsg successMsg');
		} else {
			$('.contactForm span#msg').html(contactFormDefaults['msg']).removeClass('errorMsg successMsg');
		}
		if($(this).val()==contactFormDefaults[$(this).attr('id')]) {
			$(this).val('');
		}
	});
	$('.contactForm input[type="text"], .contactForm textarea').blur(function() {
		$(this).removeClass('inputHighlight');
		$('.contactForm span#msg').html(contactFormDefaults['msg']).removeClass('errorMsg successMsg');
		if($(this).val()=='') {
			$(this).val(contactFormDefaults[$(this).attr('id')]);
		}
	});
	
	$('.contactForm input[type="text"], .contactForm textarea').hover(function() {
			$(this).addClass('inputHighlight');
		},
		function() {	
			$(this).not(':focus').removeClass('inputHighlight');
		}
	);
	
	$('.contactForm').submit(function() {
		$('.contactForm .submit').attr("disabled", "disabled");
		$('#msg').html('<img src="images/loader-light.gif" />').removeClass('errorMsg successMsg');
		var isError=false;
		$('.contactForm input, .contactForm textarea').each(function() {
			if($(this).hasClass('required') && ($.trim($(this).val())==contactFormDefaults[$(this).attr('id')] || $.trim($(this).val())=='')) {
				$(this).addClass('errorOutline');
				$('#msg').html('Houve um erro ao enviar a sua mensagem. Por favor, tente novamente.').addClass('errorMsg');
				isError=true;
			}
			if($(this).attr('id')=='email') {
				var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(reg.test($(this).val())==false) {
					$(this).addClass('errorOutline');
					if(!isError) {
						$('#msg').html('Por favor entre com um e-mail válido e tente novamente.').addClass('errorMsg');
					}
					isError=true;
				}
			}
		});
		if(isError) {
			$('.contactForm .submit').removeAttr("disabled");
			return false;
		} else {
			var name = $('#name').val(), email = $('#email').val(), subject = $('#subject').val(), message = $('#message').val();
			$.ajaxSetup ({
				cache: false
			});
			var dataString = 'name='+ name + '&email=' + email + '&subject=' + subject + '&message=' + message + '&ajax=1';
			$.ajax({
				type: "POST",
				url: "http://www.compremania.com.br/teaser/php/enviar.php",
				data: dataString,
				success: function(msg) {
					// Check to see if the mail was successfully sent
					if(msg=='Mail sent') {
						// Update the progress bar
						$('#msg').html('Message sent.').addClass('successMsg');
						// Reset the subject field and message textbox
						if(contactFormDefaults['subject']) {
							$('#subject').val(contactFormDefaults['subject']);
						} else {
							$('#subject').val('');
						}
						if(contactFormDefaults['message']) {
							$('#message').val(contactFormDefaults['message']);
						} else {
							$('#message').val('');
						}
					} else {
						$('#msg').html('Sua Mensagem foi enviado com sucesso.').addClass('errorMsg');
						$('.contactForm .submit').attr("disabled", "");
					}
					// Activate the submit button
					$('.contactForm .submit').removeAttr("disabled");
				},
				error: function(ob,errStr) {
					$('#msg').html('Sua Mensagem foi enviado com sucesso.').addClass('errorMsg');
					//Activate the submit button
					$('.contactForm .submit').removeAttr("disabled");
				}
			});
			return false;
		}
	});
});