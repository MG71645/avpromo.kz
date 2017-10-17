function scrollTo(elem) {
	if(document.getElementById(elem)) {
		var destination = jQuery('#'+elem).offset().top-69;
		jQuery("html,body").animate({scrollTop: destination}, 800);
	}
}