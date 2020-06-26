class Booking {

  constructor(item, index) {
    this.item = item;
    this.index = index;

    this.initiate();
  }

  getElementByClass(selector) {
    return $(this.item).find(selector);
  }

  getStringWithSeparate(string) {
    const REGEXP_SPACE_SEPARATED_THOUSANDS = /(\d)(?=(\d\d\d)+([^\d]|$))/g
    if(typeof(string) !== 'string' && string !== undefined && !Number.isNaN(string))
      string = String(string);

    return string.replace(REGEXP_SPACE_SEPARATED_THOUSANDS, '$1 ');
  }

  getDaysInAndCalculate(daysIn) {
    if(!Number.isNaN(Number(daysIn))) {
      if(daysIn == 1) {
        this.daysInElement.text(`${daysIn} сутки`);
      } else {
        this.daysInElement.text(`${daysIn} суток`);
      }
      this.calculate(daysIn);
    }
  }
  calculate(daysIn) {
    const cost =  this.priceValue * daysIn;
    this.costElement.text(`${this.getStringWithSeparate(cost)}`)
    const total = cost - this.discountValue + this.complementaryValue;
    this.totalElement.text(`${this.getStringWithSeparate(total)}`);
    
  }

  initiate() {
    this.priceElement = this.getElementByClass('.js-booking__price');
    this.priceValue = Number(this.priceElement.get(0).innerText);
    $.each(this.priceElement, (key, item) => {
      item.innerText = this.getStringWithSeparate(item.innerText);
    })

    this.daysInElement = this.getElementByClass('.js-booking__daysIn');

    this.costElement = this.getElementByClass('.js-booking__cost');

    this.discountElement = this.getElementByClass('.js-booking__discount');
    this.discountValue = Number(this.discountElement.get(0).innerText);
    $.each(this.discountElement, (key, item) => {
      item.innerText = this.getStringWithSeparate(item.innerText);
    })

    this.additionalElement = this.getElementByClass('.js-booking__additional');

    this.complementaryElement = this.getElementByClass('.js-booking__complementary');
    this.complementaryValue = Number(this.complementaryElement.get(0).innerText);

    this.totalElement = this.getElementByClass('.js-booking__total');
  }
}

export {Booking};