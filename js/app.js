// RUN THE FOUNDATION FRAMEWORK
$(document).foundation();

// RUH SLICK SLDER FOR CATEGORIES NAVIGATION
$('#category-slick').owlCarousel({
	items: 9,
	nav: true,
	center: true,
	loop: true,
	dots: false,
	navText: ["", ""],
	navContainer: '#slide-nav'
});

// RESET ITEMS WIDTH MANUALY
$('.owl-item').css('width', 'auto');