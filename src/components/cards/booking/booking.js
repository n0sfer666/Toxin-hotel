import {datepicker, getDatepickerConfig, getFormattedDate} from 
'../../_form-elements/date-dropdown/date-dropdown';
import '../../_form-elements/dropdown/dropdown';

$(document).ready(function() {
	let getNumberWithSeparate = function (string) {
		return string.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
	}

	let getDaysIn = function(param) {
		daysIn = param;
		cost = price * daysIn;
		total = cost + additional + complementary - discount;

		if(daysIn === 1) {
			daysInComponent.innerText = '1 сутки';
		} else {
			daysInComponent.innerText = String(daysIn) + ' суток';
		}

		costComponent.innerText = String(cost);

		totalComponent.innerText = getNumberWithSeparate(String(total));
	}

	let leftBookingtDpClass = 'js-booking-date-dropdown-left',
			rightBookingtDpClass = 'js-booking-date-dropdown-right',
			daysIn;

	let price, cost, discount, additional, complementary, total;
	price = cost = discount = additional = complementary = total = 0;

	let priceComponents = document
				.querySelectorAll('.js-booking--price')
				.forEach(element => {
					price = Number(element.innerText);
					element.innerText = getNumberWithSeparate(element.innerText);
				}),
			discountComponents = document
				.querySelectorAll('.js-booking--discount')
				.forEach(element => {
					discount = Number(element.innerText);
					element.innerText = getNumberWithSeparate(element.innerText);
				}),
			additionalComponents = document
				.querySelectorAll('.js-booking--additional')
				.forEach(element => {
					additional = Number(element.innerText);
					element.innerText = getNumberWithSeparate(element.innerText);
				}),
			complementaryComponents = document
				.querySelectorAll('.js-booking--complementary')
				.forEach(element => {
					complementary = Number(element.innerText);
					element.innerText = getNumberWithSeparate(element.innerText);
				}),
			daysInComponent = document
				.querySelector('.js-booking--daysIn'),
			costComponent = document
				.querySelector('.js-booking--cost'),
			totalComponent = document
				.querySelector('.js-booking--total');
	
	let datepickerBookingConfig = 
		getDatepickerConfig(
			leftBookingtDpClass,
			rightBookingtDpClass,
			getDaysIn
		);	

	let $leftBookingDatepicker = $('.' + leftBookingtDpClass)
		.datepicker(datepickerBookingConfig)
		.data('datepicker');
	let $rightBookingDatepicker = $('.' + rightBookingtDpClass)
		.datepicker(datepickerBookingConfig)
		.data('datepicker');
})