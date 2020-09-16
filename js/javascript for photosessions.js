$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});


$(document).ready(function() {
	$('.slider').slick({
	});
});


$(function(){
	$('.footer__button')
		.click(function(){
			$('.popup').fadeIn();
		});
	$('.popup').click(function(event){
		if(event.target == this)
		$(this).fadeOut();
	})
});