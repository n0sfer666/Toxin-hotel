import 'slick-carousel';

class Room {
  constructor(item) {
    this.$item = $(item);

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
    const $price = this.$item.siblings().find('.js-room__price');
    const separatedString = $price.text()
      .replace(REGEXP_SPACE_SEPARATED_THOUSANDS, '$1 ');

    $price.text(separatedString);
  }
}

export default Room;
