class RangeSlider {
  constructor(item, index) {
    this.$rangeSlider = item;
    this.$index = index;

    this.$rangeSliderValues = $(item).siblings().find('.js-range-slider__values').get(0);

    let isNotUndefined = this.$rangeSlider && this.$rangeSliderValues;

    if(isNotUndefined) {
      this.getRangeSlider();
      this.getValuesUpdate();
    }
  }

  getRangeSlider() {
    noUiSlider.create(this.$rangeSlider, this.getConfig());
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
    }
  }
  getValuesUpdate() {
    this.$rangeSlider.noUiSlider.on('update', (values) => {
      this.$rangeSliderValues.innerText = `${values[0]} - ${values[1]}`;
    })
  }
}

export { RangeSlider };