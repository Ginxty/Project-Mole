 $(function() {
 	var moleZone = $(".moleZone")
	
	// function selectTile(tiles) {
 //    	var randomZone = Math.floor(Math.random()*tiles.length);
 //    	var zone = tiles.slice(randomZone, 1)[0];
 //    	return zone;
 //    }
 	$(".moleZone").hide()

	

 	var randomZone = Math.floor( (Math.random() * $('ul li').length) );
	console.log(randomZone)

 	showMole = $(".debug").click(function() {
 		for (var i = 0; i < 16; i++) {
			$(".moleZone").eq(randomZone).show("slow")

		}



 	})
 
 		// for (var i = 0; i < moleZone.length; i++) {
 		// 	$(".moleZone").slideUp()
 		// }
 		// $(".moleZone").slideUp("slow");

 		// for (var i = 0; i < moleZone.length; i++) {
 		// 		$(moleZone[i]).slideUp(400)
 		// }	
 
 

 });