$(window).scroll(function() {
	$('#form_left').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		var Height = document.documentElement.clientHeight;
		if (imagePos < topOfWindow+(Height-450)) {
			$(this).addClass("slideDown");
		}
	});
});

$(window).scroll(function() {
	$('.griditem').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		var Height = document.documentElement.clientHeight;
		if (document.documentElement.clientWidth >= 1200) {
			if (imagePos < topOfWindow+(Height-250)) {
				$(this).addClass("slideUp");
			}
		}
	});
});

$(window).scroll(function() {
	$('.cloud').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		var Height = document.documentElement.clientHeight;
		if (document.documentElement.clientWidth >= 1200) {
			if (imagePos < topOfWindow+(Height-250)) {
				$(this).addClass("fadeIn");
			}
		}
	});
});

$(window).scroll(function() {
	$('.c9_photo1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		var Height = document.documentElement.clientHeight;
		if (document.documentElement.clientWidth >= 1200) {
			if (imagePos < topOfWindow+(Height-250)) {
				$(this).addClass("fadeIn");
			}
		}
	});
});

$(window).scroll(function() {
	$('.c9_photo2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		var Height = document.documentElement.clientHeight;
		if (document.documentElement.clientWidth >= 1200) {
			if (imagePos < topOfWindow+(Height-250)) {
				$(this).addClass("fadeIn");
			}
		}
	});
});

$(window).scroll(function() {
	$('.c9_photo3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		var Height = document.documentElement.clientHeight;
		if (document.documentElement.clientWidth >= 1200) {
			if (imagePos < topOfWindow+(Height-250)) {
				$(this).addClass("fadeIn");
			}
		}
	});
});

$(window).scroll(function() {
	$('.c9_name').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		var Height = document.documentElement.clientHeight;
		if (document.documentElement.clientWidth >= 1200) {
			if (imagePos < topOfWindow+(Height-250)) {
				$(this).addClass("fadeIn");
			}
		}
	});
});

$(window).scroll(function() {
	$('.c9_comment').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		var Height = document.documentElement.clientHeight;
		if (document.documentElement.clientWidth >= 1200) {
			if (imagePos < topOfWindow+(Height-150)) {
				$(this).addClass("expandUp");
			}
		}
	});
});

var percentCount = false;
$(window).scroll(function() {
	if (percentCount == false) {
		$('.timer_h1').each(function(){
			var textPos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			var Height = document.documentElement.clientHeight;
			if (textPos < topOfWindow+(Height-250)) {
				$('#percent').animateNumber({ number: 500 });
				percentCount = true;
			}
		});
	}
});

var percentCount2 = false;
$(window).scroll(function() {
	if (percentCount2 == false) {
		$('#timer2').each(function(){
			var textPos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			var Height = document.documentElement.clientHeight;
			if (textPos < topOfWindow+(Height-250)) {
				$('#percent2').animateNumber({ number: 500 });
				percentCount2 = true;
			}
		});
	}
});

var numCount = false;
$(window).scroll(function() {
	if (numCount == false) {
		$('#c3_table').each(function(){
			var textPos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			var Height = document.documentElement.clientHeight;
			if (textPos < topOfWindow+(Height-250)) {
				$('.c3_icon1').animateNumber({ number: 20 });
				$('.c3_icon2').animateNumber({ number: 3 });
				$('.c3_icon3').animateNumber({ number: 10 });
				$('.c3_icon4').animateNumber({ number: 100 });
				numCount = true;
			}
		});
	}
});

var custCount = false;
$(window).scroll(function() {
	if (custCount == false) {
		$('.c4').each(function(){
			var textPos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			var Height = document.documentElement.clientHeight;
			if (textPos < topOfWindow+(Height-350)) {
				$('#customers').animateNumber({ number: 47 });
				custCount = true;
			}
		});
	}
});