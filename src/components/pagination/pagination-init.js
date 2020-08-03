import Pagination from './pagination';

$(document).ready(() => {
  const $apartaments = $('.js-search-room__apartament');

  const dataSource = [];

  $.each($apartaments, (key, item) => {
    dataSource.push(item.cloneNode(true));
  });

  $('.js-search-room__data-source').remove();

  const paginations = $('.js-pagination');
  $.each(paginations, (key, item) => {
    new Pagination(item, key, dataSource, '.js-search-room__data-output');
  });
});
