import { Dropdown } from './dropdown';

$(document).ready(() => {
  const $arrayDropdown = $('.js-iqdropdown');
  $.each($arrayDropdown, (key, item) => {
    new Dropdown(item, key);
  });
});
