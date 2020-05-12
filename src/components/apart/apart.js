import 'slick-carousel';

const setSlick = function () {
  $('.js-apart__slider').slick({
    accessibility: false,
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  // separate prices
  const REGEXP_SPACE_AFTER_THREE_DIGITS = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
  const $priceComponents = $('.js-apart__price');
  $.each($priceComponents, (key, value) => {
    const strSeparated = value.innerText
      .replace(REGEXP_SPACE_AFTER_THREE_DIGITS, '$1 ');
    value.innerText = strSeparated;
  })
};
export { setSlick };
