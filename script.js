'use strict';

// function to check if there is a winner after every click
// call this function after the end of every click

const ifWinner = function ()
	{
		if ($("#divOne").hasClass("xBox") && $("#divTwo").hasClass("xBox") ) 
		{
			alert("We have a winner!");
		}
	}




	
$( document ).ready(function() {
    var counter = 0;
    
    $("#divOne").click(function(){
        if (counter % 2 == 0) 
        {
            $(this).addClass('xBox');
            counter++;
        }
        else
        {
            $(this).addClass('oBox');
            counter++;
        }
        ifWinner();
    	});



	$("#divTwo").click(function(){
	    if (counter % 2 == 0) 
	    {
	        $(this).addClass('xBox');
	        counter++;
	    } else {
	        $(this).addClass('oBox');
	        counter++;
	    }
	    ifWinner();
	    });

    $("#divThree").click(function(){
        if (counter % 2 == 0) {
            $(this).addClass('xBox');
            counter++;
        }
        else{
            $(this).addClass('oBox');
            counter++;
        }
        ifWinner();
    	});
  
});	




	// $( document ).ready(function() {
	
	// var counter = 1;
	
	// if (counter % 2 == 0)
		
	// {
	// 	$("#divOne").click(function(){
	//     	$(this).addClass("xBox");
	//     	counter++;
	//     	console.log(counter + " this is the counter ");
	//     	});


	// 	$("#divTwo").click(function(){
	//     	$(this).addClass("xBox");
	//     	counter++;
	//     	console.log(counter + " this is the counter ");
	//     	});
	// }
	
	
	// else
	
	
	// {		
	// 	$("#divOne").click(function(){
	//     	$(this).addClass("oBox");
	//     	counter++;
	//     	console.log(counter + " this is the counter ");
	//     	});
	
			
	// 	$("#divTwo").click(function(){
	//     	$(this).addClass("oBox");
	//     	counter++;
	//     	console.log(counter + " this is the counter ");
	//     	});
	// }		
	
	// });	


	

