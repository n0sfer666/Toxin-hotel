class RangeSlider {
  constructor(item) {
    this.rangeSlider = item;

    this.initInstanceElements();
    this.initInstanceVars();

    if (this.isNotUndefined) {
      this.getRangeSlider();
      this.bindContext();
      this.bindHandlers();
    }
  }

  initInstanceElements() {
    this.rangeSliderValues = $(this.rangeSlider).siblings().find('.js-range-slider__values').get(0);
  }

  initInstanceVars() {
    this.isNotUndefined = this.rangeSlider && this.rangeSliderValues;
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
    noUiSlider.create(this.rangeSlider, this.getConfig());
  }

  bindHandlers() {
    this.rangeSlider.noUiSlider.on('update', this.handleValuesUpdate);
  }

  bindContext() {
    this.handleValuesUpdate = this.handleValuesUpdate.bind(this);
  }

  handleValuesUpdate(values) {
    this.rangeSliderValues.innerText = `${values[0]} - ${values[1]}`;
  }
}

export default RangeSlider;
