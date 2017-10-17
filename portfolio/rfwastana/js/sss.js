/** Super Simple Slider by @intllgnt **/

;(function($, window, document, undefined ) {

$.fn.sss = function(options) {

// Options

	var settings = $.extend({
	slideShow : false,
	startingSlide : 0,
	speed : 3500
	}, options);

	return this.each(function() {

// Setup

	$(this).children().wrapAll('<div class="sss"/>').addClass('ssslide');

// Variables

	var
	slider = $(this).find('.sss'),
	slides = slider.find('.ssslide'),
	slide_count = slides.length,
	starting_slide = settings.startingSlide,
	target = starting_slide > slide_count - 1 ? 0 : starting_slide,
	animating = false,
	clicked,
	timer,
	key,
	prev,
	next,

// Reset Slideshow

	reset_timer = settings.slideShow ? function() {
	clearTimeout(timer);
	timer = setTimeout(next_slide, settings.speed);
	} : $.noop;

// Animate Slider

	function get_height(target) {
	return ((slides.eq(target).height() / slider.width()) * 100) + '%';
	}

	function animate_slide(target) {
	if (!animating) {
	animating = true;
	var target_slide = slides.eq(target);

	target_slide.fadeIn();
	slides.not(target_slide).fadeOut();

	slider.animate({paddingBottom: get_height(target)}, function() {
	animating = false;
	});

	reset_timer();

	}};

// Next Slide

	function next_slide() {
	target = target === slide_count - 1 ? 0 : target + 1;
	animate_slide(target);
	}

// Prev Slide

	function prev_slide() {
	target = target === 0 ? slide_count - 1 : target - 1;
	animate_slide(target);
	}
	
	$( "#next_arrow" ).click(function() {
	  currentTarget = +$('#comment-navigation .active').attr("id").substr(7);
	  target = currentTarget === slide_count - 1 ? 0 : currentTarget + 1;
	  $('#toslide'+target).addClass("active").removeClass("passive").siblings().addClass("passive").removeClass("active");
	  animate_slide(target);
	});

	$( "#prev_arrow" ).click(function() {
	  currentTarget = +$('#comment-navigation .active').attr("id").substr(7);
	  target = currentTarget === 0 ? slide_count - 1 : currentTarget - 1;
	  $('#toslide'+target).addClass("active").removeClass("passive").siblings().addClass("passive").removeClass("active");
	  animate_slide(target);
	});
	
	$(".toslide").click(function() {
		target = $(this).attr("id").substr(7);
		animate_slide(target);
		$(this).addClass("active").removeClass("passive").siblings().addClass("passive").removeClass("active");
	});

	$(window).load(function() {

	animate_slide(target);

	});
// End

});

};
})(jQuery, window, document);