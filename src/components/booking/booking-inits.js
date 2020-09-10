import Booking from './booking';

const bookingInstances = [];

$(document).ready(() => {
  const arrayBookingElement = $('.js-booking');

  $.each(arrayBookingElement, (_, bookingElement) => {
    bookingInstances.push(new Booking(bookingElement));
  });
});

export default bookingInstances;
