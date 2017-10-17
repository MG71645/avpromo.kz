$(document).ready(function(){

	$(window).scroll(function() {
		$('.step').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			var Height = document.documentElement.clientHeight;
			if (imagePos < topOfWindow+(Height-128)) {
				$(this).addClass("pullDown");
				var odd = $(this).find('.odd');
				var even = $(this).find('.even');
				setTimeout(function(){
					odd.addClass("stretchLeft");
					even.addClass("stretchRight");
				},300);
			}
		});
	});

	$(window).scroll(function() {
		$('#profits .line.odd').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			var Height = document.documentElement.clientHeight;
			if (imagePos < topOfWindow+(Height-128)) {
				$(this).addClass("slideLeft");
			}
		});
	});
	
	$(window).scroll(function() {
		$('#profits .line.even').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			var Height = document.documentElement.clientHeight;
			if (imagePos < topOfWindow+(Height-128)) {
				$(this).addClass("slideRight");
			}
		});
	});
	
});