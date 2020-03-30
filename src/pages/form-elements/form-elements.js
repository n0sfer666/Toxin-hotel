import './form-elements.scss';

import '../../components/_form-elements/dropdown/dropdown';
import { maskOptions, IMask } from '../../components/_form-elements/text-field/masked-text-field/mask-options';
import { datepicker, getFormattedDate, getDatepickerConfig } from '../../components/_form-elements/date-dropdown/date-dropdown';
import '../../components/_form-elements/expandable-checkbox-list/expandable-checkbox-list';
import '../../components/_form-elements/_buttons/like/like';
import '../../components/_form-elements/range-slider/range-slider';
import { getPaginationConfig } from '../../components/_form-elements/pagination/pagination';


$(document).ready(() => {
  const maskedField = $('.js-masked-text-field').get(0);
  const maskedObj = IMask(maskedField, maskOptions);

  const leftDpClass = 'js-undefined-date-dropdown-left';
  const rightDpClass = 'js-undefined-date-dropdown-right';
  const filterDpClass = 'js-undefined-date-dropdown-filter';
  let datepickerConfig = getDatepickerConfig(leftDpClass, rightDpClass);
  const leftDatepicker = $(`.${leftDpClass}`)
    .datepicker(datepickerConfig)
    .data('datepicker');
  const rightDatepicker = $(`.${rightDpClass}`)
    .datepicker(datepickerConfig)
    .data('datepicker');
  datepickerConfig = getDatepickerConfig();
  const filterDatepicker = $(`.${filterDpClass}`)
    .datepicker(datepickerConfig)
    .data('datepicker');

  const demoArr = [];
  for (let i = 0; i < 200; i++) {
    demoArr.push(i);
  }
  const paginationConfig = getPaginationConfig(demoArr, 'change me', 12);
  $('.js-pagination').pagination(paginationConfig);
});
