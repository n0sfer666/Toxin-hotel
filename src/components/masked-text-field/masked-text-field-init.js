import MaskedField from './masked-text-field';

$(document).ready(() => {
  const $maskedTextFields = $('.js-masked-text-field');
  $.each($maskedTextFields, (_, element) => {
    new MaskedField(element);
  });
});
