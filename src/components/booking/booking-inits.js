import { Booking } from './booking';

const arrayBookingInstance = [];

$(document).ready(() => {
  const arrayBookingElement = $('.js-booking');

  $.each(arrayBookingElement, (key, item) => {
    arrayBookingInstance.push(new Booking(item, key));
  });
});

export { arrayBookingInstance };
