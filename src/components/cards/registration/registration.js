import { maskOptions } from '../../_form-elements/text-field/masked-text-field/mask-options';


$(document).ready(() => {
  const birthdayField = $('.js-birthday-text-field').get(0);
  const birthMask = IMask(birthdayField, maskOptions);
});
