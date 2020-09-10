import Pagination from './pagination';

$(document).ready(() => {
  const $rooms = $('.js-search-room__room');

  const dataSource = [];

  $.each($rooms, (_, element) => {
    dataSource.push(element.cloneNode(true));
  });

  $('.js-search-room__data-source').remove();

  const paginations = $('.js-pagination');
  $.each(paginations, (_, element) => {
    new Pagination(element, dataSource, '.js-pagination__data-output');
  });
});
