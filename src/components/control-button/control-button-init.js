import ControlButton from './control-button';

const controlButtonArr = [];
$(document).ready(() => {
  const $controlButtons = $('.js-control-button');
  $.each($controlButtons, (_, element) => {
    controlButtonArr.push(new ControlButton(element));
  });
});

export default controlButtonArr;
