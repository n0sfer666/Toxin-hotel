import {datepicker, getDatepickerConfig, getFormattedDate} from '../../_form-elements/date-dropdown/date-dropdown';
import '../../_form-elements/dropdown/dropdown';

$(document).ready(function() {
	let leftFindAppartDpClass = 'js-find-appart-date-dropdown-left',
			rightFindAppartDpClass = 'js-find-appart-date-dropdown-right';
	let datepickerFindAppartConfig = 
		getDatepickerConfig(
			leftFindAppartDpClass,
			rightFindAppartDpClass
		);
	let leftFindAppartDatepicker = $('.' + leftFindAppartDpClass)
		.datepicker(datepickerFindAppartConfig)
		.data('datepicker');
	let rightFindAppartDatepicker = $('.' + rightFindAppartDpClass)
		.datepicker(datepickerFindAppartConfig)
		.data('datepicker');
})