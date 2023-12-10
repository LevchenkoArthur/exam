$('document').ready(function(){
	$('.burger__menu').click(function(){
		$('.burger__menu, nav').toggleClass('active')
		$('body').toggleClass('lock')
	})
});


$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	loop:true,
		 margin:0,
		 nav:true,
		 autoplay:true,
		 autoplayTimeout:2000,
		 navText: [ '', ' ' ],

		 responsive:{
			  0:{
					items:1
			  },
			  1100:{
					items:5
			  },
		 }
	});
});
