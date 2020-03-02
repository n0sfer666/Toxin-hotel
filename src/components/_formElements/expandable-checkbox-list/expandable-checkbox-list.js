$(document).ready(function() {
	let $expandList = $('.js-expandable-checkbox-list');

	let $expandArrowDown = $('.js-expandable-checkbox-list--arrow-down');
	let $expandArrowUp = $('.js-expandable-checkbox-list--arrow-up')
		.hide();
	
	let $expandContainer = $('.js-expandable-checkbox-list--container')
		.hide();

	let isExpanded = false;
	
	$expandList.on('click', () => {

		$expandContainer.toggle('fast', () => {

			if(!isExpanded) {
				isExpanded = true;
				$expandArrowDown.hide();
				$expandArrowUp.show();
			} else {
				isExpanded = false;
				$expandArrowDown.show();
				$expandArrowUp.hide();
			}

		})

	})
	
});