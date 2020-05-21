import {DateDropdown} from '../date-dropdown/date-dropdown';

$(document).ready(() => {
  let daysIn;

  let price;
  let cost;
  let discount;
  let additional;
  let complementary;
  let total;
  price = cost = discount = additional = complementary = total = 0;

  const priceComponents = document
    .querySelectorAll('.js-booking__price')
    .forEach((element) => {
      price = Number(element.innerText);
      element.innerText = getNumberWithSeparate(element.innerText);
    });
  const discountComponents = document
    .querySelectorAll('.js-booking__discount')
    .forEach((element) => {
      discount = Number(element.innerText);
      element.innerText = getNumberWithSeparate(element.innerText);
    });
  const additionalComponents = document
    .querySelectorAll('.js-booking__additional')
    .forEach((element) => {
      additional = Number(element.innerText);
      element.innerText = getNumberWithSeparate(element.innerText);
    });
  const complementaryComponents = document
    .querySelectorAll('.js-booking__complementary')
    .forEach((element) => {
      complementary = Number(element.innerText);
      element.innerText = getNumberWithSeparate(element.innerText);
    });
  const daysInComponent = document
    .querySelector('.js-booking__daysIn');
  const costComponent = document
    .querySelector('.js-booking__cost');
  const totalComponent = document
    .querySelector('.js-booking__total');
});

function getNumberWithSeparate(string) {
  return string.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

function getDaysIn(param) {
  daysIn = param;
  cost = price * daysIn;
  total = cost + additional + complementary - discount;

  if (daysIn === 1) {
    daysInComponent.innerText = '1 сутки';
  } else {
    daysInComponent.innerText = `${String(daysIn)} суток`;
  }

  costComponent.innerText = getNumberWithSeparate(`${cost}₽`);

  totalComponent.innerText = getNumberWithSeparate(`${total}`);
}
