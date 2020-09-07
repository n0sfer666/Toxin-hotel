import Pagination from './pagination';

$(document).ready(() => {
  const $rooms = $('.js-search-room__room');

  const dataSource = [];

  $.each($rooms, (key, item) => {
    dataSource.push(item.cloneNode(true));
  });

  $('.js-search-room__data-source').remove();

  const paginations = $('.js-pagination');
  $.each(paginations, (key, item) => {
    new Pagination(item, dataSource, '.js-search-room__data-output');
  });
});
