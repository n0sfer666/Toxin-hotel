import Rate from './rate';

$(document).ready(() => {
  const $rates = $('.js-rate');
  $.each($rates, (_, element) => {
    new Rate(element);
  });
});