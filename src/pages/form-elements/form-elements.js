$(document).ready(() => {
  const $maskedField = $('.js-masked-text-field').get(0);
  const maskedObj = IMask($maskedField, maskOptions);


  const leftDpClass = 'js-undefined-date-dropdown-left';
  const rightDpClass = 'js-undefined-date-dropdown-right';
  const filterDpClass = 'js-undefined-date-dropdown-filter';

  let datepickerConfig = getDatepickerConfig(leftDpClass, rightDpClass);
  const $leftDatepicker = $(`.${leftDpClass}`)
    .datepicker(datepickerConfig)
    .data('datepicker');
  const $rightDatepicker = $(`.${rightDpClass}`)
    .datepicker(datepickerConfig)
    .data('datepicker');
  datepickerConfig = getDatepickerConfig();
  const $filterDatepicker = $(`.${filterDpClass}`)
    .datepicker(datepickerConfig)
    .data('datepicker');

  const demoArr = [];
  for (let i = 0; i < 200; i += 1) {
    demoArr.push(i);
  }
  const paginationConfig = getPaginationConfig(demoArr, 'change me', 12);
  const $pagination = $('.js-pagination').pagination(paginationConfig);
});
