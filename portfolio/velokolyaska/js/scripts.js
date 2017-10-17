$(document).ready(function() {  	
	timer();
	
	
	
	
	

    $("#callback_submit").click(function() { 
        //get input field values
        var user_name       = $('input[name=sender_name]').val(); 
        var user_phone      = $('input[name=sender_phone]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if(user_name==""){ 
            $('input[name=sender_name]').css('border-color','red'); 
            proceed = false;
        }
        if(user_phone=="") {    
            $('input[name=sender_phone]').css('border-color','red'); 
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed) 
        {
            //data to be sent to server
            post_data = {'userName':user_name, 'userPhone':user_phone};
            
            //Ajax post data to server
            $.post('callback.php', post_data, function(response){  
                
                //load json data from server and output message     
                if(response.type == 'error')
                {
                    output = '<div class="error">'+response.text+'</div>';
                }else{
                
                    output = '<div class="success">'+response.text+'</div>';
                    
                    //reset values in all input fields
                    $('#contact_form input').val(''); 
                }
                
                $("#result").hide().html(output).slideDown();
            }, 'json');
            
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input").keyup(function() { 
        $("#contact_form input").css('border-color',''); 
        $("#result").slideUp();
    });
	
	
	
	
	
	
	
function timer()
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
		$(".day").each(function() { $(this).text(Days); });
		$(".hour").each(function() { $(this).text(Hours); });
		$(".min").each(function() { $(this).text(Min); });
		$(".sec").each(function() { $(this).text(Sec); });
		setTimeout(timer, 1000);
	}
}

});