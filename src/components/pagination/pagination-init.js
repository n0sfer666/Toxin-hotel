import Pagination from './pagination';
import roomInstances from '../room/room-init';

$(document).ready(() => {
  const dataSource = [];
  $.each(roomInstances, (_, element) => {
    dataSource.push(element.$element);
  });
  const paginations = $('.js-pagination__buttons');
  $.each(paginations, (_, element) => {
    new Pagination(element, dataSource, '.js-pagination__data-output');
  });
});
