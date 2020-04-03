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
  $('.js-search-room--data-source').remove();

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
