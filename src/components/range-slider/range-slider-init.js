import RangeSlider from './range-slider';

$(document).ready(() => {
  const $arrayRangeSlider = $('.js-range-slider__container');
  $.each($arrayRangeSlider, (key, item) => {
    const instance = new RangeSlider(item, key);
  });
});
