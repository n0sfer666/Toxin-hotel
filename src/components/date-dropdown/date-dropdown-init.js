import DateDropdown from './date-dropdown';
import arrayBookingInstance from '../booking/booking-inits';

$(document).ready(() => {
  const $arrayDateDropdownSingle = $('.js-date-dropdown__filter');
  $.each($arrayDateDropdownSingle, (key, item) => {
    const instance = new DateDropdown(item, key, true);
  });

  const $arrayDateDropdownRight = $('.js-date-dropdown__input-right');
  const $arrayDateDropdownLeft = $('.js-date-dropdown__input-left');

  $.each($arrayDateDropdownLeft, (key, item) => {
    if ($(item).closest('.js-booking').length > 0) {
      const instance = new DateDropdown([item, $arrayDateDropdownRight[key]],
        key,
        false,
        arrayBookingInstance[0]);
    } else {
      const instance = new DateDropdown([item, $arrayDateDropdownRight[key]],
        key,
        false);
    }
  });
});
