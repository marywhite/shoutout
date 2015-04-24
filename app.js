

$(document).ready(function(){
	// var feedback = $.get("feedback.csv");
	// console.log(feedback);
	var i = 0;
	$( window ).scroll(function() {

		//still figuring this out
		
    	if($(document).scrollTop() > 200) {
        	var newText = "<h2 id =shoutout>shoutout</h2>"
        	$(newText).appendTo("#container").delay("slow");
			i++;
			console.log(i);
    	}
	});	
});

