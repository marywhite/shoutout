

$(document).ready(function(){
	
	var yay = [];
	$.get("feedback.csv", function(data){
		var stuff = data.split('\n');
		for (var i = 1; i < stuff.length; i++){
			$("#container").append("<p class=hidden>" + stuff[i] + "</p>");
		}
	});


	$("#container").scroll (function(){
		$("h1").css("color", "black")
		$("h4").css("color", "#FF704D")
		$("h2").css("color", "#FF704D")
		$("p").delay(2000).fadeIn(10000);
	});
});

