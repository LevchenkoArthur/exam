$('document').ready(function(){
	$('.burger__menu').click(function(){
		$('.burger__menu, nav').toggleClass('active')
		$('body').toggleClass('lock')
	})
});