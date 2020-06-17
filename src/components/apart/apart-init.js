import { Apart } from './apart';

$(document).ready(() => {
  setTimeout(() => {
    const $arrayApartComponents = $('.js-apart__slider');
    $.each($arrayApartComponents, (key, item) => {
      new Apart(item, key);
    });
  }, 50);
});
