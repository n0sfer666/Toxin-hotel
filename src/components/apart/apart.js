import { slick } from 'slick-carousel';

const setSlick = function () {
  $('.js-apart__slider').slick({
    accessibility: false,
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  // separate prices
  const $priceComponents = $('.js-apart__price');
  for (let i = 0; i < $priceComponents.length; i += 1) {
    const strSeparated = $priceComponents[i].innerText
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    $priceComponents[i].innerText = strSeparated;
  }
};
$(document).ready(function() {
  setSlick();
})
export { setSlick };
