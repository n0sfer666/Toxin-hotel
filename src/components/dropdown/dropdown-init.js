import Dropdown from './dropdown';

$(document).ready(() => {
  const $dropdowns = $('.js-iqdropdown');
  $.each($dropdowns, (key, item) => {
    new Dropdown(item, key);
  });
});
