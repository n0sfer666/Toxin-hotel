import 'slick-carousel';

class Apart {
  constructor(item, index) {
    this.$item = $(item);
    this.index = index;

    this.$item.slick({
      accessibility: false,
      dots: true,
      slidesToShow: 1,
      adaptiveHeight: true,
    });

    this.separateDigitsInPrice();
  }

  separateDigitsInPrice() {
    const REGEXP_SPACE_SEPARATED_THOUSANDS = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
    const $price = this.$item.siblings().find('.js-apart__price');
    const separatedString = $price.text()
      .replace(REGEXP_SPACE_SEPARATED_THOUSANDS, '$1 ');

    $price.text(separatedString);
  }
}

export default Apart;
