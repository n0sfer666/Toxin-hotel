import '../../_form-elements/text-field/masked-text-field/mask-options';
import { maskOptions } from '../../_form-elements/text-field/masked-text-field/mask-options';

$(document).ready(function() {
	let birthdayField = $('.js-birthday-text-field').get(0);
	let birthMask = IMask(birthdayField, maskOptions);
})