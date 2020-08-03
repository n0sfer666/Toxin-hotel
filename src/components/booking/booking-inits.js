import Booking from './booking';

const bookingInstances = [];

$(document).ready(() => {
  const arrayBookingElement = $('.js-booking');

  $.each(arrayBookingElement, (key, item) => {
    bookingInstances.push(new Booking(item, key));
  });
});

export default bookingInstances;
