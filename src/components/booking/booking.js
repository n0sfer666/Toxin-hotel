class Booking {
  constructor(item) {
    this.item = item;

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
    const { complementaryFee: complementaryValue } = this.values;
    const { cost: costElement, total: totalElement } = this.elements;
    const cost = priceValue * daysIn;
    costElement.text(this.getStringWithSeparate(cost));
    const total = cost - discountValue + complementaryValue;
    totalElement.text(this.getStringWithSeparate(total));
  }

  initiate() {
    this.getHTMLElements();
    this.getValueElements();
    $.each(this.elements, (_, element) => {
      element.text(this.getStringWithSeparate(element.text()));
    });
  }

  getHTMLElements() {
    this.elements = {
      headerPrice: this.getElementByClass('.js-booking__header-price-text'),
      price: this.getElementByClass('.js-booking__price'),
      daysIn: this.getElementByClass('.js-booking__days-in'),
      cost: this.getElementByClass('.js-booking__cost'),
      discount: this.getElementByClass('.js-booking__discount'),
      additionalFee: this.getElementByClass('.js-booking__additional-fee'),
      complementaryFee: this.getElementByClass('.js-booking__complementary-fee'),
      total: this.getElementByClass('.js-booking__total-text'),
    };
  }

  getValueElements() {
    this.values = {
      price: this.getValueOfElement(this.elements.price),
      discount: this.getValueOfElement(this.elements.discount),
      complementaryFee: this.getValueOfElement(this.elements.complementaryFee),
    };
  }
}

export default Booking;
