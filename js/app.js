 $(function() {
 	// moleZone is the 'tile' on the board
 	var moleZone = $(".moleZone")

 	// function to start the game when the start button is clicked
 	$(".debug").one("click", function() {
 		timer ();
	 	for (var i = 0; i < 60; i++) {
	 		setTimeout(function() {
	 			var randomZone = Math.floor( (Math.random() * $('ul li').length) );
	 			$(".moleZone").eq(randomZone).addClass("mole");
		 	}, 500*i)

	 	// for loop to pick the random tile
	 	}
	 	for (var i = 0; i < 12; i++) {
	 		setTimeout(function() {
	 			var randomZoneGood = Math.floor( (Math.random() * $('ul li').length) );
	 			$(".moleZone").eq(randomZoneGood).addClass("good");
		 	}, 2400*i)

	 	}

	})

 	// funtion to destry a mole when it's clicked, adding points
	$("ul").on("click", ".mole", function(event){
		$(event.target).removeClass("mole");
	    var score = parseInt($("#score").html());
		score+= 150;
		$("#score").html(score);

	})

	// function to remove good moles when clicked, and remove points
	$("ul").on("click", ".good", function(event){
		$("#errorSound")[0].play()
		$(event.target).removeClass("good");
	    var score = parseInt($("#score").html());
		score+= -300;
		$("#score").html(score);

	})

 	
 	// the mighty reset
 	$("#reset").click(function(){
        location.reload();
    })

 	// my timer ticker on the page
 	function timer () {
    	var updateTimer = function() {
	    	$('#timer').each(function() {
	      		var count = parseInt($(this).html());
		      	if (count !== 0) {
		        	$(this).html(count - 1);
		      	}
		    });
	  	};

	  	setInterval(updateTimer, 1000);

	  	// my internal timer to clear the display after 30 seconds
	  	setTimeout(function (){ 
	  		$("#shutdownSound")[0].play()
	  		$("li").removeClass("mole good");
	  		$("#gameOver").html("G4M3 0V3R")
	    }, 30000);

	};


 
 

 });