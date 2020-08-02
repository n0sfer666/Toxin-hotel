import 'slick-carousel';

class Apartament {
  constructor(item, index) {
    this.$item = $(item);
    this.index = index;

    this.initInstance();
    this.separateDigitsInPrice();
  }

  initInstance() {
    this.$item.slick({
      accessibility: false,
      dots: true,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
  }

  separateDigitsInPrice() {
    const REGEXP_SPACE_SEPARATED_THOUSANDS = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
    const $price = this.$item.siblings().find('.js-apartament__price');
    const separatedString = $price.text()
      .replace(REGEXP_SPACE_SEPARATED_THOUSANDS, '$1 ');

    $price.text(separatedString);
  }
}

export default Apartament;
