import DateDropdown from './date-dropdown';
import bookingInstances from '../booking/booking-inits';

$(document).ready(() => {
  const $datepickerSingle = $('.js-date-dropdown__filter');
  $.each($datepickerSingle, (key, item) => {
    new DateDropdown(item, key, true);
  });

  const $datepickerRight = $('.js-date-dropdown__input-right');
  const $datepickerLeft = $('.js-date-dropdown__input-left');

  $.each($datepickerLeft, (key, item) => {
    if ($(item).closest('.js-booking').length > 0) {
      new DateDropdown([item, $datepickerRight[key]],
        key,
        false,
        bookingInstances[0]);
    } else {
      new DateDropdown([item, $datepickerRight[key]],
        key,
        false);
    }
  });
});
