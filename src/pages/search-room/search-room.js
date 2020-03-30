import './search-room.scss';

import { setSlick } from '../../components/cards/appart/appart';

import '../../components/_form-elements/dropdown/dropdown';
import '../../components/_form-elements/range-slider/range-slider';
import '../../components/_form-elements/expandable-checkbox-list/expandable-checkbox-list';
import { getPaginationConfig } from '../../components/_form-elements/pagination/pagination';
import { getDatepickerConfig } from
  '../../components/_form-elements/date-dropdown/date-dropdown';

$(document).ready(() => {
  const datepickerConfig = getDatepickerConfig();
  const $datepicker = $('.js-daysIn-date-dropdown-filter')
    .datepicker(datepickerConfig)
    .data('datepicker');


  const $appartSource = $('div[class="search-room--appart"]');
  const dataSource = [];
  for (let i = 0; i < $appartSource.length; i += 1) {
    dataSource.push($appartSource[String(i)]);
  }
  $('.search-room--data-source').remove();

  const dataOutputContainer = '.js-search-room--data-output';
  const elementsOnPage = 12;

  const paginationConfig = getPaginationConfig(
    dataSource,
    dataOutputContainer,
    elementsOnPage,
    setSlick,
  );
  const $pagination = $('.js-search-room--pagination')
    .pagination(paginationConfig);
});
