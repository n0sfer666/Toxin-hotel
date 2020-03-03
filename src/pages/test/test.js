import './test.scss';

import {getFormattedDate, datepickerConfig} from '../../components/_formElements/date-dropdown/date-dropdown.js';

$(document).ready(function() {
  let $datepickerLeft = 
    $('.js-date-dropdown-left')
      .datepicker(datepickerConfig)
      .data('datepicker');
  let $datepickerRight = 
    $('.js-date-dropdown-right')
      .datepicker(datepickerConfig)
      .data('datepicker');
  let $datepickerFilter = 
    $('.js-date-dropdown-filter')
      .datepicker(datepickerConfig)
      .data('datepicker');

})