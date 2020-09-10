class RangeSlider {
  constructor(item) {
    this.element = item;

    this.initInstanceElements();
    this.initInstanceVars();

    if (this.isNotUndefined) {
      this.getRangeSlider();
      this.bindContext();
      this.bindHandlers();
    }
  }

  initInstanceElements() {
    this.rangeSliderValues = this.element.parentElement.querySelector('.js-range-slider__values');
  }

  initInstanceVars() {
    this.isNotUndefined = this.element && this.rangeSliderValues;
  }

  getConfig() {
    return {
      start: [5000, 10000],
      connect: true,
      range: {
        min: 0,
        max: 15000,
      },
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        suffix: ' ₽',
      }),
    };
  }

  getRangeSlider() {
    noUiSlider.create(this.element, this.getConfig());
  }

  bindHandlers() {
    this.element.noUiSlider.on('update', this.handleValuesUpdate);
  }

  bindContext() {
    this.handleValuesUpdate = this.handleValuesUpdate.bind(this);
  }

  handleValuesUpdate(values) {
    this.rangeSliderValues.innerText = `${values[0]} - ${values[1]}`;
  }
}

export default RangeSlider;
