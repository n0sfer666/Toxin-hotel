import ControlButton from './control-button';

const controlButtonArr = [];
$(document).ready(() => {
  const $controlButton = $('.js-control-button');
  $.each($controlButton, (key, item) => {
    controlButtonArr.push(new ControlButton(item));
  });
});

export default controlButtonArr;
