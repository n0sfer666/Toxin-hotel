import Apartament from './apartament';

$(document).ready(() => {
  setTimeout(() => {
    const $apartaments = $('.js-apartament__slider');
    $.each($apartaments, (key, item) => {
      new Apartament(item, key);
    });
  }, 50);
});
