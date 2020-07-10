class Booking {
  constructor(item, index) {
    this.item = item;
    this.index = index;

    this.initiate();
  }

  getElementByClass(selector) {
    return $(this.item).find(selector);
  }

  getValueOfElement(element) {
    return Number(element.text());
  }

  getStringWithSeparate(string) {
    const REGEXP_SPACE_SEPARATED_THOUSANDS = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
    return String(string).replace(REGEXP_SPACE_SEPARATED_THOUSANDS, '$1 ');
  }

  getDaysInAndCalculate(daysIn) {
    const { daysIn: daysInElement } = this.elements;
    if (!Number.isNaN(Number(daysIn))) {
      if (daysIn === 1) {
        daysInElement.text(`${daysIn} сутки`);
      } else {
        daysInElement.text(`${daysIn} суток`);
      }
      this.calculate(daysIn);
    }
  }

  calculate(daysIn) {
    const { price: priceValue, discount: discountValue } = this.values;
    const { complementary: complementaryValue } = this.values;
    const { cost: costElement, total: totalElement } = this.elements;
    const cost = priceValue * daysIn;
    costElement.text(this.getStringWithSeparate(cost));
    const total = cost - discountValue + complementaryValue;
    totalElement.text(this.getStringWithSeparate(total));
  }

  initiate() {
    this.initElements();
    this.initValue();
    $.each(this.elements, (key, item) => {
      item.text(this.getStringWithSeparate(item.text()));
    });
  }

  initElements() {
    this.elements = {
      headerPrice: this.getElementByClass('.js-booking__header-price-text'),
      price: this.getElementByClass('.js-booking__price'),
      daysIn: this.getElementByClass('.js-booking__daysIn'),
      cost: this.getElementByClass('.js-booking__cost'),
      discount: this.getElementByClass('.js-booking__discount'),
      additional: this.getElementByClass('.js-booking__additional'),
      complementary: this.getElementByClass('.js-booking__complementary'),
      total: this.getElementByClass('.js-booking__total-text'),
    };
  }

  initValue() {
    this.values = {
      price: this.getValueOfElement(this.elements.price),
      discount: this.getValueOfElement(this.elements.discount),
      complementary: this.getValueOfElement(this.elements.complementary),
    };
  }
}

export default Booking;
