class Booking {
  constructor(item, index) {
    this.item = item;
    this.index = index;

    this.initiate();
  }

  getElementByClass(selector) {
    return $(this.item).find(selector);
  }

  static getValueOfElement(element) {
    return Number(element.get(0).innerText);
  }

  static getStringWithSeparate(string) {
    const REGEXP_SPACE_SEPARATED_THOUSANDS = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
    return String(string).replace(REGEXP_SPACE_SEPARATED_THOUSANDS, '$1 ');
  }

  getDaysInAndCalculate(daysIn) {
    if (!Number.isNaN(Number(daysIn))) {
      if (daysIn === 1) {
        this.elements.daysIn.text(`${daysIn} сутки`);
      } else {
        this.elements.daysIn.text(`${daysIn} суток`);
      }
      this.calculate(daysIn);
    }
  }

  calculate(daysIn) {
    const cost = this.values.price * daysIn;
    this.elements.cost.text(this.constructor.getStringWithSeparate(cost));
    const total = cost - this.values.discount + this.values.complementary;
    this.elements.total.text(this.constructor.getStringWithSeparate(total));
  }

  initiate() {
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
    this.values = {
      price: this.constructor.getValueOfElement(this.elements.price),
      discount: this.constructor.getValueOfElement(this.elements.discount),
      complementary: this.constructor.getValueOfElement(this.elements.complementary),
    };
    $.each(this.elements, (key, item) => {
      item.text(this.constructor.getStringWithSeparate(item.text()));
    });
  }
}

export default Booking;
