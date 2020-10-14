class Rate {
  constructor(item) {
    this.container = $(item);
    this.ratesElements = this.getRateElementsArray(this.container);
    this.rate = this.getRate(this.ratesElements);

    this.bindContext();
    this.bindHandlers();
  }

  getRateElementsArray(container) {
    const result = [];
    const rates = container.find('.js-rate__star');
    $.each(rates, (_, element) => {
      result.push($(element));
    });
    return result;
  }

  getRate(ratesElements) {
    const result = [];
    ratesElements.forEach((element) => {
      if (element.hasClass('rate__star_rated')) {
        result.push('');
      }
    });
    return result.length - 1;
  }

  handleRateClick(event) {
    const rateClicked = $(event.target).data('value') - 1;
    this.ratesElements.forEach((element, index) => {
      if (index <= rateClicked) {
        if (!element.hasClass('rate__star_rated')) {
          element.addClass('rate__star_rated');
        }
      } else if (element.hasClass('rate__star_rated')) {
        element.removeClass('rate__star_rated');
      }
    });
  }

  bindContext() {
    this.handleRateClick = this.handleRateClick.bind(this);
  }

  bindHandlers() {
    this.ratesElements.forEach((element) => {
      element.on('click', this.handleRateClick);
    });
  }
}

export default Rate;
