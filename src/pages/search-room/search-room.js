import './search-room.scss';

import { setSlick } from '../../components/cards/appart/appart';

import '../../components/_form-elements/dropdown/dropdown';
import '../../components/_form-elements/range-slider/range-slider';
import '../../components/_form-elements/expandable-checkbox-list/expandable-checkbox-list';
import { getPaginationConfig } from '../../components/_form-elements/pagination/pagination';
import { getDatepickerConfig } from
	'../../components/_form-elements/date-dropdown/date-dropdown';

$(document).ready(function() {
	let datepickerConfig = getDatepickerConfig();
	let datepicker = $('.js-daysIn-date-dropdown-filter')
		.datepicker(datepickerConfig)
		.data('datepicker');



	let appartSource = $('div[class="search-room--appart"]'),
			dataSource = [];
	for (let i = 0; i < appartSource.length; i++) {
		dataSource.push(appartSource[String(i)]);
	}
	$('.search-room--data-source').remove();
	let paginationConfig = getPaginationConfig(
		dataSource,
		'.js-search-room--data-output',
		12,
		setSlick);
	let pagination = $('.js-search-room--pagination')
			.pagination(paginationConfig);
})