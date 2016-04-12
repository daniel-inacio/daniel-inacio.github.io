// epicFullscreen - version 1.0 - jquery 1.7.1.
// Copyright - unlimitDesign
// Sets a background image behind content with opacity, background color, and pattern options.

(function ($) {
	
	
   	$.fn.epicFullscreen = function (options) {
 
 			/*fullscreen img defaults
			-----------------------------*/
			var defaults = {
				
				opacity : 0.4,			//Integer: 0-1
				pattern: true, 			//Boolean: use overlay pattern or not
				background:'#ff5400',	//String: hex value
				callback: function() {}	//Call back

				
			};
			
			//overwrite or merge user options
			var options = $.extend({},defaults, options);
			

		   /*internals
			-----------------------------*/
			var	selector = $(this),
				bkgImg = $('img.epicImg'),
				winW,
				winH,
				winRatio,
				imgW,
				imgH,
				imgRatio,
				newW,
				newH;
	

			/*check options
			-----------------------------*/
			
			selector.css({backgroundColor:options.background});
			bkgImg.animate({opacity:options.opacity});
			selector.append('<div id="epic-loader"></div>');
			if(options.pattern==true) selector.append('<div id="epic-overlay"></div>');
			
			
			/*fullscreen/resizing
			-----------------------------*/	
						
			function resize(){
				
					
				//check breakpoint when content
				//becomes top to bottom 
				if($(window).width()<=767){
						
					winH	= $('#featured').outerHeight();
						
				}else{
						
					winH	= $(window).height();
					
				}
				
				
				winW	= $(window).width();
				//winH	= $(window).height();
				winRatio	= winH / winW;
				imgW	=  bkgImg.width();
				imgH	=  bkgImg.height();
				imgRatio	= imgH / imgW;
							
				if(winRatio > imgRatio){
					
					newH	= winH;
					newW	= winH / imgRatio;
					
				}else{
						
					newH	= winW * imgRatio;
					newW	= winW;
						
				};
					
							
					/*set width, height and position of image*/
					bkgImg.css({width: newW + 'px',height: newH + 'px',left: (winW - newW) / 2 + 'px',top: (winH - newH) / 2 + 'px'});
					selector.css({height:newH +'px'});

			};
			

				
			/*window resize action
			-----------------------------*/
			
			$(window).bind('resize',function(){
					
					resize();
				
			});	
			
			

			/*preload
			-----------------------------*/
			
	        bkgImg.each(function(){
											 
				//create image object
                var img = new Image();
                            
				//store currentSlide image src 
                var path = $(this).attr('src');
                       
                 $(img).load(function(){

						resize();
						selector.css({background:options.background});
						options.callback.call(this);

                  })
					.attr('src',path)
					.error(function(){
										
							alert('check image path or connection');
							
					 });

             });
			
			
			
    };
	
})(jQuery);