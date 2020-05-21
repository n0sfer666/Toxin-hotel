import {Apart} from './apart';
$(document).ready(function() {
  const $arrayApartComponents = $('.js-apart__slider');
  $.each($arrayApartComponents, (key, item) => {
    new Apart(item, key);
  })
})