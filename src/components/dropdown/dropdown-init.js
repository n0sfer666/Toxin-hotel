import Dropdown from './dropdown';
import controlButtonArr from '../control-button/control-button-init';

$(document).ready(() => {
  const $dropdowns = $('.js-iqdropdown');
  $.each($dropdowns, (_, element) => {
    new Dropdown(element, controlButtonArr);
  });
});
