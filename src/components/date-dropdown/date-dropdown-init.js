import {DateDropdown} from './date-dropdown';
import {arrayBookingInstance} from '../booking/booking-inits';

let arrayDateDropdownInBooking;

$(document).ready(function() {
  const $arrayDateDropdownSingle = $('.js-date-dropdown-single');
  $.each($arrayDateDropdownSingle, (key, item) => {
    new DateDropdown(item, key, true);
  })

  const $arrayDateDropdownRight = $('.js-date-dropdown-right');
  const $arrayDateDropdownLeft = $('.js-date-dropdown-left');

  $.each($arrayDateDropdownLeft, (key, item) => {
    if($(item).closest('.js-booking').length > 0) {
      new DateDropdown([item, $arrayDateDropdownRight[key]], key, false, arrayBookingInstance[0]);
    } else {
      new DateDropdown([item, $arrayDateDropdownRight[key]], key, false);
    }
  })
})