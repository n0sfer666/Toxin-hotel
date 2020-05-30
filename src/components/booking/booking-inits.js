import {Booking} from './booking';

let arrayBookingInstance = [];

$(document).ready(function() {
  const arrayBookingElement = $('.js-booking');
  
  $.each(arrayBookingElement, (key, item) => {
    arrayBookingInstance.push(new Booking(item, key));
  })
})

export {arrayBookingInstance};