$(document).ready( function() {

	headerTimer();
	offerTimer();
	
	$('.variant').change(function() {
        if($(this).is(':checked')) {
            $(this).next('label').addClass('selected').siblings().removeClass('selected');
			$(this).siblings().prop("checked", false);
        }
    });
	
	$('.check').change(function() {
        if($(this).is(':checked')) {
            $(this).next('label').addClass('selected');
        } else {
			$(this).next('label').removeClass('selected');
		}
    });
	
	$('#comments .more').each(function() {  

      $(this).mouseenter(function(){  
        $(this).parent().siblings().find('.display').removeClass('display').siblings().addClass('display');
      });
	  
	  $(this).mouseleave(function(){  
        $(this).parent().siblings().find('.display').removeClass('display').siblings().addClass('display');
      });

	});

});

function spinComment(direction)
{

}

function headerTimer()
{
	var now = new Date();
	var newDate = new Date("November 2, 2014 09:00:00");
	var totalRemains = (newDate.getTime()-now.getTime());
	if (totalRemains>1)
	{
		var Days = (parseInt(parseInt(totalRemains/1000)/(24*3600)));
		var Hours = (parseInt((parseInt(totalRemains/1000) - Days*24*3600)/3600));
		var Min = (parseInt(parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600)/60));
		var Sec = parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600) - Min*60;
		if (Sec<10){Sec="0"+Sec}
		if (Min<10){Min="0"+Min}
		if (Hours<10){Hours="0"+Hours}
		if (Days<10){Days="0"+Days}
		$("#days .inverse").each(function() { $(this).text(Days); });
		$("#hours .inverse").each(function() { $(this).text(Hours); });
		$("#mins .inverse").each(function() { $(this).text(Min); });
		$("#secs .inverse").each(function() { $(this).text(Sec); });
		setTimeout(headerTimer, 1000);
	}
}

function offerTimer()
{
	var now = new Date();
	var newDate = new Date((now.getMonth()+1)+"/"+now.getDate()+"/"+now.getFullYear()+" 23:59:59");
	var totalRemains = (newDate.getTime()-now.getTime());
	if (totalRemains>1)
	{
		var Days = (parseInt(parseInt(totalRemains/1000)/(24*3600)));
		var Hours = (parseInt((parseInt(totalRemains/1000) - Days*24*3600)/3600));
		var Min = (parseInt(parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600)/60));
		var Sec = parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600) - Min*60;
		if (Sec<10){Sec="0"+Sec}
		if (Min<10){Min="0"+Min}
		if (Hours<10){Hours="0"+Hours}
		if (Days<10){Days="0"+Days}
		$("#offer-days .style").each(function() { $(this).text(Days); });
		$("#offer-hours .style").each(function() { $(this).text(Hours); });
		$("#offer-mins .style").each(function() { $(this).text(Min); });
		$("#offer-secs .style").each(function() { $(this).text(Sec); });
		setTimeout(offerTimer, 1000);
	}
}

function popOut() {
	$('#fade').hide();
	$('.container').hide();
	$('.scrollable').hide();
	$('#popup').hide();
}

function popUp() {
	$('#fade').show();
	$('.container').show();
	$('.scrollable').show();
	$('#popup').show();
}

function scrollTo(elem) {
	if(document.getElementById(elem)) {
		var destination = jQuery('#'+elem).offset().top+30;
		jQuery("html,body").animate({scrollTop: destination}, 600);
	}
}

