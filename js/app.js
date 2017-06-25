$(document).ready(function(){
	var heart = $('.heart');

	heart.click(function(){
		$(this).toggleClass('fa-heart-o')
		$(this).toggleClass('heart-red fa-heart')
	})
	
})