

$(document).ready(function(){
	
	var yay = [];
	$.get("feedback.csv", function(data){
		var stuff = data.split('\n');
		for (var i = 1; i < stuff.length; i++){
			$("#container").append("<p class=hidden>" + stuff[i] + "</p>");
		}
	});

	console.log(yay);
	var windowWidth = $(this).width();
  	var windowHeight = $(this).height();
  	var windowScrollTop = $(this).scrollTop();

	$(window).scroll (function(){
		console.log('hi')
	});
	


	// $( window ).scroll(function() {

 //    	}
	// });	
});

