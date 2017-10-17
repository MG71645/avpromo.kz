$(document).ready(function(){
  
  $('#brands-navigation button').each(function() {  

      $(this).click(function(){  
        $(this).addClass('active').removeClass('style').removeClass('bordered').siblings().removeClass('active').addClass('style').addClass('bordered');
      });
	  
	  $('#all-button').click(function(){
		$('.brand').each(function() {
			$(this).removeClass('display');
		});
        $('.popular').each(function() {
			$(this).addClass('display');
		});
      });
	  
	  $('#food-button').click(function(){
		$('.brand').each(function() {
			$(this).removeClass('display');
		});
        $('.food').each(function() {
			$(this).addClass('display');
		});
      });
	  
	  $('#electronics-button').click(function(){
		$('.brand').each(function() {
			$(this).removeClass('display');
		});
        $('.electronics').each(function() {
			$(this).addClass('display');
		});
      });
	  
	  $('#jewelery-button').click(function(){
		$('.brand').each(function() {
			$(this).removeClass('display');
		});
        $('.jewelery').each(function() {
			$(this).addClass('display');
		});
      });
	  
	  $('#sportwear-button').click(function(){
		$('.brand').each(function() {
			$(this).removeClass('display');
		});
        $('.sportwear').each(function() {
			$(this).addClass('display');
		});
      });
	  
	  $('#shoes-button').click(function(){
		$('.brand').each(function() {
			$(this).removeClass('display');
		});
        $('.shoes').each(function() {
			$(this).addClass('display');
		});
      });
	  
	  $('#hotels-button').click(function(){
		$('.brand').each(function() {
			$(this).removeClass('display');
		});
        $('.hotels').each(function() {
			$(this).addClass('display');
		});
      });
 
  });
  
});