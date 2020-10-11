import Room from './room';

const roomInstances = [];

$(document).ready(() => {
  const $rooms = $('.js-room');
  $.each($rooms, (_, element) => {
    roomInstances.push(new Room(element));
  });
  const indexesArr = roomInstances.map((_, index) => index);
  const titleText = $(document).find('title').text();
  if (titleText === 'Search-room') {
    while (roomInstances.length < 180) {
      const indexes = indexesArr.sort(() => 0.5 - Math.random());
      indexes.map((index) => roomInstances.push(roomInstances[index]));
    }
  }
});

export default roomInstances;
