import Pagination from './pagination';

$(document).ready(() => {
  const $apartSource = $('.js-search-room__apart');

  const dataSource = [];

  $.each($apartSource, (key, item) => {
    dataSource.push(item.cloneNode(true));
  });

  $('.js-search-room__data-source').remove();

  const arrayPagination = $('.js-pagination');
  $.each(arrayPagination, (key, item) => {
    new Pagination(item, key, dataSource, '.js-search-room__data-output');
  });
});
