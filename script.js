'use strict';

	
	$( document ).ready(function() {
	
	var counter = 1;
	
	if (counter % 2 == 0)
		
	{
		$("#divOne").click(function(){
	    	$(this).addClass("xBox");
	    	counter++;
	    	console.log(counter + " this is the counter ");
	    	});


		$("#divTwo").click(function(){
	    	$(this).addClass("xBox");
	    	counter++;
	    	console.log(counter + " this is the counter ");
	    	});
	}
	
	
	else
	
	
	{		
		$("#divOne").click(function(){
	    	$(this).addClass("oBox");
	    	counter++;
	    	console.log(counter + " this is the counter ");
	    	});
	
			
		$("#divTwo").click(function(){
	    	$(this).addClass("oBox");
	    	counter++;
	    	console.log(counter + " this is the counter ");
	    	});
	}		
	
	});	

	

