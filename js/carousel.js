$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
	    loop:true,
	    nav:true,
	    navigation:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplaySpeed:1500,
	    navSpeed:1500,
	    navText: [$('.prev'),$('.next')],
	    items:1,
	});
});

