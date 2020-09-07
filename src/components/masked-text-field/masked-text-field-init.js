import MaskedField from './masked-text-field';

$(document).ready(() => {
  const $maskedTextFields = $('.js-masked-text-field');
  $.each($maskedTextFields, (key, item) => {
    new MaskedField(item);
  });
});
