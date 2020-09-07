import Dropdown from './dropdown';
import controlButtonArr from '../control-button/control-button-init';

$(document).ready(() => {
  const $dropdowns = $('.js-iqdropdown');
  $.each($dropdowns, (key, item) => {
    new Dropdown(item, controlButtonArr);
  });
});
