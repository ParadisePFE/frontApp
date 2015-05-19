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

// INIT PRICE RANGE MANAGER
$('#price-handles').ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    postfix: " Dirhams",
});