(function($){
	$.fn.responsiveTools = function(options){
    
     	var settings = $.extend({
				width: '50px',
				height: '50px',
				backgroundcolor: '#4CAF50',
				borderradius: '50%',
				position: 'absolute',
				right: '15px',
                bottom: '15px',
                lineheight: '50px',
                color: '#fff',
                textCenter: 'center',
                hrefURL: window.location.href,
                hostURL: window.location.protocol+'//'+window.location.host,
                done: null
        }, options);
    
    	$divOverlay = $("<div> > </div>").appendTo("body");
		$divOverlay.prop("id", "btn-setting")
        
		$($divOverlay).css({
            "width": settings.width, 
            "height": settings.height, 
            "background-color": settings.backgroundcolor, 
            "border-radius": settings.borderradius, 
            "position": settings.position,
            "right": settings.right,
            "bottom":settings.bottom,
            "line-height": settings.lineheight,
            "color": settings.color,
            "text-align": settings.textCenter
        });
        
       
		$divOverlay.on('click', function(){
            window.open(settings.hostURL+"/responsive.html?"+settings.hrefURL, "_blank");
            // if($.isFunction(settings.done)){
            //     alert('hi');
            // }
		});
		
	}
}(jQuery));