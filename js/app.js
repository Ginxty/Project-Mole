 $(function() {

 	var moleZone = $(".moleZone")


 	showMole = $(".debug").click(function() {
	 	for (var i = 0; i < 999; i++) {
	 		setTimeout(function() {
	 			var randomZone = Math.floor( (Math.random() * $('ul li').length) );
	 			$(".moleZone").eq(randomZone).addClass("mole");
		 	}, 500*i)
	 	}

		$("ul").click(".mole", function(event){
			$(event.target).removeClass("mole");
		    var score = parseInt($("#score").html());
    		score+= 150;
    		$("#score").html(score);
		})



 	})
 
 
 

 });