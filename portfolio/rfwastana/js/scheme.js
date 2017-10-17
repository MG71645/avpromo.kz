$(document).ready(function(){
  
  $('#format .tab').each(function() {  

      $(this).click(function(){  
        $(this).addClass('active').siblings().removeClass('active')  
		.parents('#format .wrapper').find('div.day').eq($(this).index()).fadeIn(150).siblings('div.day').hide();
      });  
 
  });
});