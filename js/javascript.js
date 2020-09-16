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