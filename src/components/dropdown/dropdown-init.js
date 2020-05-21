import {Dropdown} from './dropdown';
$(document).ready(function() {
  const $arrayDropdown = $('.js-iqdropdown');
  $.each($arrayDropdown, (key, item) => {
    new Dropdown(item, key);
  })
})