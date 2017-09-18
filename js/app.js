 $(function() {
 	var moleZone = $(".moleZone")
	
	// function selectTile(tiles) {
 //    	var randomZone = Math.floor(Math.random()*tiles.length);
 //    	var zone = tiles.slice(randomZone, 1)[0];
 //    	return zone;
 //    }

 	var randomZone = Math.floor( (Math.random() * $('ul li').length) );


 	console.log(randomZone)

 	$(".debug").click(function() {
 		$(".moleZone").eq(randomZone).slideUp()
 		// for (var i = 0; i < moleZone.length; i++) {
 		// 	$(".moleZone").slideUp()
 		// }
 		// $(".moleZone").slideUp("slow");

 		// for (var i = 0; i < moleZone.length; i++) {
 		// 		$(moleZone[i]).slideUp(400)
 		// }	
 	});
 

 });