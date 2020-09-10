import RangeSlider from './range-slider';

$(document).ready(() => {
  const $rangeSliders = $('.js-range-slider__container');
  $.each($rangeSliders, (_, element) => {
    new RangeSlider(element);
  });
});
