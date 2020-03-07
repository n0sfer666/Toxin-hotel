import {datepicker, datepickerConfig} from '../../_form-elements/date-dropdown/date-dropdown';
import '../../_form-elements/dropdown/dropdown';

$(document).ready(function() {
	let leftDatepicker = $('.js-date-dropdown-left').datepicker(datepickerConfig).data('datepicker');
	let rightDatepicker = $('.js-date-dropdown-right').datepicker(datepickerConfig).data('datepicker');
})