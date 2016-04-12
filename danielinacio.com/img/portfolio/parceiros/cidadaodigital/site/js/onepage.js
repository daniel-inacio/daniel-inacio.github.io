/*-------------------------------------------------------------------------

	Theme Name: EGO - html - v.1
	
	For any questions concerning this theme please refer to documention or
	our forum at support.udfrance.com.

/*------------------------------------------------------------------------

//GENERAL FUNCTONS ///////////////////////////////////////////////////////

-------------------------------------------------------------------------*/

$(document).ready(function(){
	
	/*vars used throughout*/
	var wh,
		scrollSpeed = 1000,
		parallaxSpeedFactor = 0.6,
		scrollEase ='easeOutExpo',
		targetSection,
		sectionLink = 'a.navigateTo',
		menuLink = $('ul.navigation li a'),
	 	section = $('.section'),
		toggleMenu =$('.mobileMenuToggle'),
		target,
		hoverSpeed=500,
		hoverEase='easeOutExpo';


	//INIT --------------------------------------------------------------------------------/
	
	
	if(isMobile == true){
	
		$('.header').addClass('mobileHeader');	//add mobile header class
		
		//Clone header
		$('.header').hide().clone().prependTo('.page');
		
		//Set section links
		$('.page').each(function() {						 
		 var curr_sec=$(this).attr('id');
		 $(this).children('.header').show();
		 $(this).children('.header').children('.inner').children('.navigation').children('li').each(function() {
		  if($(this).children('a').attr('href').substring(1)==curr_sec) {
		   	$(this).children('a').addClass('active');
		  }
		 });
		});
	
	}else{
		
		$('.highlight').addClass('fixed-desktop');
	}
	
	
		
	
	
			
	//PARALLAX ----------------------------------------------------------------------------/
	
	
	$(window).bind('load', function() { 
								  
		parallaxInit();						  
		
	});

	function parallaxInit(){
		
		if(isMobile == true) return false;

		$('#highlight').parallax();	
		$('#highlight-2').parallax();	
		$('.page.odd').parallax();	
		/*add as necessary*/
		
	}
	
	
	//HOMEPAGE SPECIFIC -----------------------------------------------------------------/
	
	
	function fullscreenImgHeight(){
		
		wh = $(window).height();
		if($(window).width()>767) $('#homepage').css({height:wh});
	
	}
	
	fullscreenImgHeight();	




	//PAGE SPECIFIC ---------------------------------------------------------------------/
		
	
		/*page scrolling
		-------------------*/
		
		$(document).on('click', sectionLink, function(event) { 

			//get current
			targetSection = $(this).attr('href');
			
			//Set doc title
			document.title = 'CM' + ( targetSection.replace( /[_\-\#\!\.\/]/g, ' ' ));

			//prevent click if active
			//if($(this).hasClass('active')) return false;
				
			//get pos of target section
			var targetOffset = $(targetSection).offset().top+1;

			//scroll			 
			$('html,body').animate({scrollTop: targetOffset}, scrollSpeed, scrollEase, function() {

					//set hash
					//window.location.hash = targetSection

			 });
			
			return false;
		
		});
		
		

		/*nav handling
		-------------------*/
		
		$(function(){	   
				   
			if(isMobile == true) return false;	   

			section.waypoint({
						  
				handler: function(event, direction) {
				
					var activeSection = $(this);
					
					if (direction === "up") {
						
						activeSection = activeSection.prev();
						
					}

					var activeMenuLink = $('ul.navigation li a[href=#' + activeSection.attr('id') + ']');
					
					menuLink.removeClass('active');
					activeMenuLink.addClass('active');
					
					
					//position header for mobile - solves fixed position issue
					var targetOffset = $(activeSection).offset().top;
					if(isMobile == true && $(window).scrollTop() >= wh) $('.header').css({top:targetOffset,display:'none'}).fadeIn();
					
		
				},
				
				offset: '35%'			//when it should switch on consecutive page
				
			});
	
		});
	
		/*nav reveal
		-------------------*/

		 $(window).bind('scroll', function(){
			
			   headerReveal();
			   
		}); 
	 
	 
		function headerReveal(){
			
			 if(isMobile == true) return false;	

			if ($(window).scrollTop() >= wh){
	 
					if(!$('.header').is(':animated')) {
						
						$('.header').stop(true,true).slideDown();
						
					}
			}else{
					if(!$('.header').is(':animated')) {	
					
						$('.header').stop(true,true).slideUp();
						toggleMenu.removeClass('open');
						
						
					}
								  
			} 
	
		 }

		
	
		
	 //WINDOW EVENTS ---------------------------------------------------------------------/	
	 
	 
	 $(window).bind('resize',function() {
		
		//Update fullscren image height
	 	fullscreenImgHeight();
		
	});	
		
	
					
		

});