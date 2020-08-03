import Button from './button';

const buttonsInstances = [];

$(document).ready(() => {
  const $buttons = $('.js-button');
  $.each($buttons, (key, item) => {
    buttonsInstances.push(new Button(item, key));
  });
});

export default buttonsInstances;
