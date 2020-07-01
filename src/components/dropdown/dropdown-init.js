import Dropdown from './dropdown';

$(document).ready(() => {
  const $arrayDropdown = $('.js-iqdropdown');
  $.each($arrayDropdown, (key, item) => {
    const instance = new Dropdown(item, key);
  });
});
