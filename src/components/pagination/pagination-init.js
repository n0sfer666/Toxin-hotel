import {Pagination} from './pagination';
import {setSlick} from '../apart/apart';
$(document).ready(function() {
  let pagination = new Pagination('form-elements');

  const $apartSource = $('.js-search-room-apart');
  const dataSource = [];
  $.each($apartSource, (key, value) => {
    dataSource.push(value);
  })
  $('.js-search-room-data-source').remove();
  const paginationSearch = new Pagination('search-room', dataSource, 12, '.js-search-room-data-output', setSlick);
})