import {DateDropdown} from './date-dropdown';

$(document).ready(function() {
  const $arrayDateDropdownSingle = $('.js-date-dropdown-single');
  $.each($arrayDateDropdownSingle, (key, item) => {
    new DateDropdown(item, key, true);
  })

  const $arrayDateDropdownRight = $('.js-date-dropdown-right');
  const $arrayDateDropdownLeft = $('.js-date-dropdown-left');
  $.each($arrayDateDropdownLeft, (key, item) => {
    new DateDropdown([item, $arrayDateDropdownRight[key]], key, false);
  })
})