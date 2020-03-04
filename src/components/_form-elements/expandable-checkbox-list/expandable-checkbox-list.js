$(document).ready(function() {
	let $expandList = $('.js-expandable-checkbox-list');
	let $expandContainer = $('.js-expandable-checkbox-list--container')
	$('.js-expandable-checkbox-list--arrow-up')
		.hide();
	$('.js-expandable-checkbox-list--container')
		.hide();

	let isExpanded = [];

	for(let key in $expandList) {
		let i = Number(key)
		
		if(!Number.isNaN(i)) {
			isExpanded.push(false);

			$expandList[key].addEventListener('click', () => {
				let arrowDown = $expandList[key]
					.querySelector('.js-expandable-checkbox-list--arrow-down');
				let arrowUp = $expandList[key]
					.querySelector('.js-expandable-checkbox-list--arrow-up');

				if(!isExpanded[i]) {

					isExpanded[i] = true;
					$expandContainer[key].style = 'display: block;';
					arrowDown.style = 'display: none;';
					arrowUp.style = 'display: block;';

				} else {

					isExpanded[i] = false;
					$expandContainer[key].style = 'display: none;';
					arrowDown.style = 'display: block;';
					arrowUp.style = 'display: none;';

				}
			})
		}
	}
});