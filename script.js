//single change

'use strict';

// function to check if there is a winner after every click
// call this function after the end of every click

const ifWinner = function ()
	{

		//horizontal winners
		//

		if ($("#divOne").hasClass("xBox") && $("#divTwo").hasClass("xBox") && $("#divThree").hasClass("xBox"))
		{
			alert("X is the winner!");
		}

		else if (($("#divOne").hasClass("oBox") && $("#divTwo").hasClass("oBox") && $("#divThree").hasClass("oBox")))
		{
			alert("O is the winner!");
		}

		else if (($("#divFour").hasClass("xBox") && $("#divFive").hasClass("xBox") && $("#divSix").hasClass("xBox")))
		{
			alert("Winner!");
		}

		else if (($("#divFour").hasClass("oBox") && $("#divFive").hasClass("oBox") && $("#divSix").hasClass("oBox")))
		{
			alert("Winner!");
		}



		//vertical winners
		//

		else if (($("#divOne").hasClass("xBox") && $("#divFour").hasClass("xBox") && $("#divSeven").hasClass("xBox")))
		{
			alert("Winner!");
		}
		else if (($("#divOne").hasClass("oBox") && $("#divFour").hasClass("oBox") && $("#divSeven").hasClass("oBox")))
		{
			alert("Winner!");
		}



		//diagonal winners
		//

		else if (($("#divOne").hasClass("xBox") && $("#divFive").hasClass("xBox") && $("#divNine").hasClass("xBox")))
		{
			alert("Winner!");
		}
		else if (($("#divOne").hasClass("oBox") && $("#divFive").hasClass("oBox") && $("#divNine").hasClass("oBox")))
		{
			alert("Winner!");
		}
	}




// the click event handlers in the box
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

    $("#divFour").click(function(){
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

     $("#divFive").click(function(){
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

     $("#divSix").click(function(){
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

     $("#divSeven").click(function(){
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

     $("#divEight").click(function(){
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

     $("#divNine").click(function(){
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
