 $(function() {

 	var moleZone = $(".moleZone")


 	showMole = $(".debug").click(function() {
	 	for (var i = 0; i < 50; i++) {
	 		setTimeout(function() {
	 			var randomZone = Math.floor( (Math.random() * $('ul li').length) );
	 			$(".moleZone").eq(randomZone).addClass("mole");
		 	}, 500*i)
	 	}

		$("li").click(function(){
		    $(this).removeClass("mole");
		    var score = parseInt($("#score").html());
    		score+= 100;
    		$("#score").html(score);
		});



 	})
 
 
 

 });