 $(function() {

 	var moleZone = $(".moleZone")


 	$(".debug").click(function() {
 		timer ();
	 	for (var i = 0; i < 60; i++) {
	 		setTimeout(function() {
	 			var randomZone = Math.floor( (Math.random() * $('ul li').length) );
	 			$(".moleZone").eq(randomZone).addClass("mole");
		 	}, 500*i)

	 	}
	 	for (var i = 0; i < 12; i++) {
	 		setTimeout(function() {
	 			var randomZoneGood = Math.floor( (Math.random() * $('ul li').length) );
	 			$(".moleZone").eq(randomZoneGood).addClass("good");
		 	}, 2400*i)

	 	}

	})

	$("ul").on("click", ".mole", function(event){
		$(event.target).removeClass("mole");
	    var score = parseInt($("#score").html());
		score+= 150;
		$("#score").html(score);

	})

	$("ul").on("click", ".good", function(event){
		$(event.target).removeClass("good");
	    var score = parseInt($("#score").html());
		score+= -300;
		$("#score").html(score);

	})

 	
 	
 	$("#reset").click(function(){
        document.location.reload(true);
    })

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

	  	setTimeout(function (){ 
	  		$("li").removeClass("mole good");
	  		$("#gameOver").html("G4M3 0V3R")
	    }, 30000);

	};


 
 

 });