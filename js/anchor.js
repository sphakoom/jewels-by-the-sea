/*Scroll transition to anchor*/
$('a.toScroll').click(function(){
	$('html, body').animate({
	    scrollTop: $( $.attr(this, 'href') ).offset().top - 75
	}, 500);
	return false;
});