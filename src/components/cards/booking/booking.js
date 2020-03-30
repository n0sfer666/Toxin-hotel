import { getDatepickerConfig } from
  '../../_form-elements/date-dropdown/date-dropdown';
import '../../_form-elements/dropdown/dropdown';

$(document).ready(() => {
  const getNumberWithSeparate = function (string) {
    return string.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };

  const leftBookingtDpClass = 'js-booking-date-dropdown-left';
  const rightBookingtDpClass = 'js-booking-date-dropdown-right';
  let daysIn;

  let price;
  let cost;
  let discount;
  let additional;
  let complementary;
  let total;
  price = cost = discount = additional = complementary = total = 0;

  const priceComponents = document
    .querySelectorAll('.js-booking--price')
    .forEach((element) => {
      price = Number(element.innerText);
      element.innerText = getNumberWithSeparate(element.innerText);
    });
  const discountComponents = document
    .querySelectorAll('.js-booking--discount')
    .forEach((element) => {
      discount = Number(element.innerText);
      element.innerText = getNumberWithSeparate(element.innerText);
    });
  const additionalComponents = document
    .querySelectorAll('.js-booking--additional')
    .forEach((element) => {
      additional = Number(element.innerText);
      element.innerText = getNumberWithSeparate(element.innerText);
    });
  const complementaryComponents = document
    .querySelectorAll('.js-booking--complementary')
    .forEach((element) => {
      complementary = Number(element.innerText);
      element.innerText = getNumberWithSeparate(element.innerText);
    });
  const daysInComponent = document
    .querySelector('.js-booking--daysIn');
  const costComponent = document
    .querySelector('.js-booking--cost');
  const totalComponent = document
    .querySelector('.js-booking--total');

  const datepickerBookingConfig = getDatepickerConfig(
    leftBookingtDpClass,
    rightBookingtDpClass,
    getDaysIn,
  );

  const $leftBookingDatepicker = $(`.${leftBookingtDpClass}`)
    .datepicker(datepickerBookingConfig)
    .data('datepicker');
  const $rightBookingDatepicker = $(`.${rightBookingtDpClass}`)
    .datepicker(datepickerBookingConfig)
    .data('datepicker');


  function getDaysIn(param) {
    daysIn = param;
    cost = price * daysIn;
    total = cost + additional + complementary - discount;

    if (daysIn === 1) {
      daysInComponent.innerText = '1 сутки';
    } else {
      daysInComponent.innerText = `${String(daysIn)} суток`;
    }

    costComponent.innerText = String(cost);

    totalComponent.innerText = getNumberWithSeparate(String(total));
  }
});
