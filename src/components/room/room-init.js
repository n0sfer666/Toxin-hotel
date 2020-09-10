import Room from './room';

$(document).ready(() => {
  setTimeout(() => {
    const $rooms = $('.js-room__slider');
    $.each($rooms, (_, element) => {
      new Room(element);
    });
  }, 50);
});
