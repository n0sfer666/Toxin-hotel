import { slick } from 'slick-carousel';

$(document).ready(function() {
	$('.js-appart--slider').slick({
		accessibility: false,
		dots: true,
		slidesToShow: 1,
		adaptiveHeight: true
	});
	// separate prices
	let priceComponents = $('.js-appart--price');
	for( let i = 0; i < priceComponents.length; i++ ) {
		let strSeparated = priceComponents[i].innerText
				.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		priceComponents[i].innerText = strSeparated;
	}
})