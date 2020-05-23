import {Apart} from './apart';
$(document).ready(function() {
  setTimeout(() => {
    const $arrayApartComponents = $('.js-apart__slider');
    $.each($arrayApartComponents, (key, item) => {
      new Apart(item, key);
    })
  }, 50);
})