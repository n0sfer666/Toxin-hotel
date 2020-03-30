import { slick } from 'slick-carousel';

const setSlick = function () {
  $('.js-appart--slider').slick({
    accessibility: false,
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  // separate prices
  const priceComponents = $('.js-appart--price');
  for (let i = 0; i < priceComponents.length; i++) {
    const strSeparated = priceComponents[i].innerText
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    priceComponents[i].innerText = strSeparated;
  }
};

export { setSlick };
