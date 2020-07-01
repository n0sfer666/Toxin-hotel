import RangeSlider from './range-slider';

$(document).ready(() => {
  const $arrayRangeSlider = $('.js-range-slider__container');
  $.each($arrayRangeSlider, (key, item) => {
    new RangeSlider(item, key);
  });
});
