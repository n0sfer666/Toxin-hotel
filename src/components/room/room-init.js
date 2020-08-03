import Room from './room';

$(document).ready(() => {
  setTimeout(() => {
    const $rooms = $('.js-room__slider');
    $.each($rooms, (key, item) => {
      new Room(item, key);
    });
  }, 50);
});
