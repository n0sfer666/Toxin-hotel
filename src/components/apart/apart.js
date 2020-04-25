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
  $.each($priceComponents, (key, value) => {
    const strSeparated = value.innerText
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    value.innerText = strSeparated;
  })
};
export { setSlick };
