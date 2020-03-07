$(document).ready(function() {
	let $slidersContainer = $('.js-range-slider');
	let $slidersValues = $('.js-range-slider--value');

	for( let i = 0; i < $slidersContainer.length; i++ ) {

		noUiSlider.create($slidersContainer[String(i)], {
			start: [5000, 10000],
			connect: true,
			range: {
				'min': 0,
				'max': 15000
			},
			format: wNumb({
				decimals: 0,
				thousand: ' ',
				suffix: ' ₽'
			})
		})
		
		$slidersContainer[String(i)].noUiSlider.on('update', (values, handle) => {
			$slidersValues[String(i)].innerText = values[0] + ' - ' + values[1];
		})
	}
})