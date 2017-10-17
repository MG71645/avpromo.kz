$(document).ready( function() {
	var color = 2;
	var sun, net, rain, car = false;
			
	$('#red').click(function() {
		if (color != 1) {
			$('#model').each(function(){
				$(this).addClass("red");
				$(this).removeClass("blue");
				$(this).removeClass("yellow");
				$('#red').addClass("selected");
				$('#blue').removeClass("selected");
				$('#yellow').removeClass("selected");
				color = 1;
			});
		}
	});
			
	$('#blue').click(function() {
		if (color != 2) {
			$('#model').each(function(){
				$(this).removeClass("red");
				$(this).addClass("blue");
				$(this).removeClass("yellow");
				$('#red').removeClass("selected");
				$('#blue').addClass("selected");
				$('#yellow').removeClass("selected");
				color = 2;
			});
		}
	});
			
	$('#yellow').click(function() {
		if (color != 3) {
			$('#model').each(function(){
				$(this).removeClass("red");
				$(this).removeClass("blue");
				$(this).addClass("yellow");
				$('#red').removeClass("selected");
				$('#blue').removeClass("selected");
				$('#yellow').addClass("selected");
				color = 3;
			});
		}
	});

	$('#sun .pic').click(function() {
		$alert(dfdf);
		if (sun == false) {
			$('#model').each(function(){
				$(this).addClass("sun");
			});
			sun = true;
		} else {
			$('#model').each(function(){
				$(this).removeClass("sun");
			});
			sun = false;
		}
	});
	
});