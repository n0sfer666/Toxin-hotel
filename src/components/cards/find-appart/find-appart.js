import { datepicker, getDatepickerConfig, getFormattedDate } from '../../_form-elements/date-dropdown/date-dropdown';
import '../../_form-elements/dropdown/dropdown';

$(document).ready(() => {
  const leftFindAppartDpClass = 'js-find-appart-date-dropdown-left';
  const rightFindAppartDpClass = 'js-find-appart-date-dropdown-right';
  const datepickerFindAppartConfig = 		getDatepickerConfig(
    leftFindAppartDpClass,
    rightFindAppartDpClass,
  );
  const leftFindAppartDatepicker = $(`.${leftFindAppartDpClass}`)
    .datepicker(datepickerFindAppartConfig)
    .data('datepicker');
  const rightFindAppartDatepicker = $(`.${rightFindAppartDpClass}`)
    .datepicker(datepickerFindAppartConfig)
    .data('datepicker');
});
