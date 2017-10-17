/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "icons": {
        "strokepath": [
            {
                "path": "M 429.609,127.39 L 319,45.5 159,45.5 ",
                "duration": 400
            },
            {
                "path": "M 301.305,295.86 L 250,176.5 84,176.5 ",
                "duration": 400
            },
            {
                "path": "M 356.783,321.95 L 251,302.5 138,302.5 ",
                "duration": 400
            },
            {
                "path": "M 644.826,270.86 L 705.609,302.5 847,302.5 ",
                "duration": 400
            }
        ],
        "dimensions": {
            "width": 960,
            "height": 400
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
$(document).ready(function(){
	
	var stroke_done = false;
	
	$(window).scroll(function() {
		$('.specs').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var Height = document.documentElement.clientHeight;
			if (imagePos < topOfWindow+(Height-350)) {
				if (stroke_done == false) {
					$('#icons').lazylinepainter( {
						"svgData": pathObj,
						"strokeWidth": 1,
						"strokeColor": "#00d6ff"
					}).lazylinepainter('paint');
					stroke_done = true;
				}
				setTimeout(function() {
					$('#safety').addClass("stretchLeft");
				}, 200);
				setTimeout(function() {
					$('#passability').addClass("stretchLeft");
				}, 600);
				setTimeout(function() {
					$('#convenience').addClass("stretchLeft");
				}, 1000);
				setTimeout(function() {
					$('#security').addClass("stretchRight");
				}, 1400);
				setTimeout(function() {
					$('#comfort').addClass("fadeIn");
				}, 1800);
				setTimeout(function() {
					$('#height').addClass("fadeIn");
				}, 2200);
				setTimeout(function() {
					$('#length').addClass("fadeIn");
				}, 2400);
				setTimeout(function() {
					$('#width').addClass("fadeIn");
				}, 2800);
			}
		});
	});

});