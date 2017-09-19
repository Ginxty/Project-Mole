 $(function() {

 	var moleZone = $(".moleZone")


 	showMole = $(".debug").click(function() {
 		timer ();
	 	for (var i = 0; i < 999; i++) {
	 		setTimeout(function() {
	 			var randomZone = Math.floor( (Math.random() * $('ul li').length) );
	 			$(".moleZone").eq(randomZone).addClass("mole");
		 	}, 500*i)


	 	}

		$("ul").on("click", ".mole", function(event){
			$(event.target).removeClass("mole");
		    var score = parseInt($("#score").html());
    		score+= 150;
    		$("#score").html("SCORE: " + score);
		})

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
};


 
 

 });