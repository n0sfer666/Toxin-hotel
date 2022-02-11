import Dropdown from './dropdown';
import controlButtonArr from '../control-button/control-button-init';

$(document).ready(() => {
  const $dropdowns = $('.js-dropdown');
  const outTextObj = {
    guests: {
      defaultText: 'Сколько гостей',
      countGroups: {
        guests: ['гость', 'гостя', 'гостей'],
        babies: ['младенец', 'младенца', 'младенцев'],
      },
    },
    rooms: {
      defaultText: 'Сколько комнат',
      countGroups: {
        bedrooms: ['спальня', 'спальни', 'спален'],
        beds: ['кровать', 'кровати', 'кроватей'],
        bathrooms: ['ванная', 'ванные', 'ванных'],
      },
    },
  };
  $.each($dropdowns, (_, element) => {
    new Dropdown(element, controlButtonArr, outTextObj);
  });
});
