import {RangeSlider} from './range-slider';
$(document).ready(function() {
  const $arrayRangeSlider = $('.js-range-slider');
  $.each($arrayRangeSlider, (key, item) => {
    new RangeSlider(item, key);
  })
})