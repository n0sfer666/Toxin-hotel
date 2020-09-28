import Dropdown from './dropdown';
import controlButtonArr from '../control-button/control-button-init';

$(document).ready(() => {
  const $dropdowns = $('.js-dropdown');
  $.each($dropdowns, (_, element) => {
    new Dropdown(element, controlButtonArr);
  });
});
