$(function() {

	function boxShow(){
		$('#kxs-icon a img').fadeTo(0,0);
		$('#kxs-box').show();
		}

	function boxShowAnim(){
		$('#kxs-icon a img').fadeTo(0,0);
		$('#kxs-box')
		.show()
		.animate({
			left: '-50px',
			width: '860px',
			height: '560px',
			opacity: 1
			},500);
		}
	
	function boxHide(){
		$('#kxs-icon a img').fadeTo(0,1);
		$('#kxs-box')
		.hide()
		.css({
			left: 0,
			width: 200,
			height: 30,
			opacity: 0
			})
		}
	function boxHideAnim(){
		$('#kxs-box')
		.animate({
			left: 0,
			width: 200,
			height: 30,
			opacity: 0
			}, 500, function(){
				$(this).hide();
				$('#kxs-icon a img').fadeTo(500,1);
				}
			);
		}


	var c = $.cookie('kxs3');

	if (c==1) {
		_gaq.push(['_trackEvent', 'Interstitial', 'Hidden']);
		boxHide();
		}

	else {
		_gaq.push(['_trackEvent', 'Interstitial', 'Shown']);
		boxShow();
		}

	$('#kxs-box').append($('<A>',{
		'href': '#',
		'class': 'cross'
		}).html('&times;'));

	$('#kxs-box button.close, #kxs-box a.cross').click(function(){
		_gaq.push(['_trackEvent', 'Interstitial', 'Later']);
		boxHideAnim();
		return false;
		});
	$('#kxs-box button.done').click(function(){
		$.cookie('kxs3', 1, { expires: 60 });
		_gaq.push(['_trackEvent', 'Interstitial', 'Done']);
		alert('Many thanks for your support! Any single penny of your help makes our project more real! Thank you.');
		boxHideAnim();
		return false;
		});
	$('#kxs-icon a').click(function(){
		_gaq.push(['_trackEvent', 'Interstitial', 'Reopen']);
		boxShowAnim();
		return false;
		});
	$('#kxs-box .kxs-link').click(function(){
		_gaq.push(['_trackEvent', 'Interstitial', 'Clicked']);
		});

	var d = new Date(),
		d0 = new Date(2012,6,4),
		s = Math.floor((d0-d)/86400000);
	$('#kxs-box .countdown span').text( s + ' day' + (s==1?'':'s') );

	})
