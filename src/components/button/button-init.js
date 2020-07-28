import Button from './button';

const arrayButtonsInstances = [];

$(document).ready(() => {
  const arrayButtons = $('.js-button');
  $.each(arrayButtons, (key, item) => {
    arrayButtonsInstances.push(new Button(item, key));
  });
});

export default arrayButtonsInstances;
