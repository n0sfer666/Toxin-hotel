class Booking {
  constructor(item) {
    this.$element = $(item);

    this.initiate();
  }

  getInnerElement(selector) {
    return this.$element.find(selector);
  }

  getValueOfElement($element) {
    return Number($element.text());
  }

  getStringWithSeparate(string) {
    const REGEXP_SPACE_SEPARATED_THOUSANDS = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
    return String(string).replace(REGEXP_SPACE_SEPARATED_THOUSANDS, '$1 ');
  }

  getDaysInAndCalculate(daysIn) {
    const { $daysIn } = this.elements;
    if (!Number.isNaN(Number(daysIn))) {
      $daysIn.text(`${daysIn + (daysIn === 1 ? ' сутки' : ' суток')}`);
      this.calculate(daysIn);
    }
  }

  calculate(daysIn) {
    const { price, discount, complementaryFee } = this.values;
    const { $cost, $total } = this.elements;
    const cost = price * daysIn;
    $cost.text(this.getStringWithSeparate(cost));
    const total = cost - discount + complementaryFee;
    $total.text(this.getStringWithSeparate(total));
  }

  initiate() {
    this.getHTMLElements();
    this.getValueElements();
    $.each(this.elements, (_, $element) => {
      $element.text(this.getStringWithSeparate($element.text()));
    });
  }

  getHTMLElements() {
    this.elements = {
      $headerPrice: this.getInnerElement('.js-booking__header-price-text'),
      $price: this.getInnerElement('.js-booking__price'),
      $daysIn: this.getInnerElement('.js-booking__days-in'),
      $cost: this.getInnerElement('.js-booking__cost'),
      $discount: this.getInnerElement('.js-booking__discount'),
      $additionalFee: this.getInnerElement('.js-booking__additional-fee'),
      $complementaryFee: this.getInnerElement('.js-booking__complementary-fee'),
      $total: this.getInnerElement('.js-booking__total-text'),
    };
  }

  getValueElements() {
    this.values = {
      price: this.getValueOfElement(this.elements.$price),
      discount: this.getValueOfElement(this.elements.$discount),
      complementaryFee: this.getValueOfElement(this.elements.$complementaryFee),
    };
  }
}

export default Booking;
