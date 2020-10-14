import Button from './button';

$(document).ready(() => {
  const $rates = $('.js-button');
  $.each($rates, (_, element) => {
    new Button(element);
  });
});
