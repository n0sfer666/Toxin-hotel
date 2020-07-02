import MaskedField from './masked-text-field';

$(document).ready(() => {
  const arrayMaskedTextField = $('.js-masked-text-field');
  $.each(arrayMaskedTextField, (key, item) => {
    const instance = new MaskedField(item, key);
  });
});
