import { datepicker } from 'air-datepicker';

class DateDropdown {
  constructor(item, index, isSingle, bookingInstance) {
    if (Array.isArray(item)) {
      this.$container = [$(item[0]), $(item[1])];
    } else {
      this.$container = $(item);
    }
    this.index = index;

    this.isSingle = isSingle;
    this.bookingInstance = bookingInstance;

    this.config = this.getConfig();
    if (Array.isArray(this.$container)) {
      this.$container[0].datepicker(this.getConfig()).data('datepicker');
      this.$container[1].datepicker(this.getConfig()).data('datepicker');
    } else {
      this.$container.datepicker(this.getConfig()).data('datepicker');
    }

    this.clearButton = `
        <button type="button" class="button_with-text button_with-text_gray">
          <h3 class="button__title">очистить</h3></button>`;
    this.applyButton = `
      <button type="button" class="button_with-text button_with-text_purple">
        <h3 class="button__title">применить</h3></button>`;
  }

  static getInnerElement(mainElement, innerSelector) {
    return mainElement.find(innerSelector);
  }

  getConfig() {
    const config = {
      language: 'ru',
      minDate: new Date(),
      range: true,
      multipleDays: 2,
      multipleDatesSeparator: ' - ',
      inline: false,
      prevHtml: "<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z' fill='#BC9CFF'/></svg>",
      nextHtml: "<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z' fill='#BC9CFF'/></svg>",
      toggleSelected: true,
      dateFormat: 'dd M',
      navTitles: {
        days: 'MM yyyy',
      },
    };
    const onShow = this.onShow.bind(this);
    config.onShow = onShow;
    if (!this.isSingle) {
      const onSelect = this.onSelect.bind(this);
      config.onSelect = onSelect;
    }

    return config;
  }

  static getFormattedDate(DateText) {
    const day = (DateText.getDate() < 10) ? `0${DateText.getDate()}` : DateText.getDate();
    const month = (DateText.getMonth() < 9) ? `0${DateText.getMonth() + 1}` : (DateText.getMonth() + 1);
    const year = DateText.getFullYear();

    return (`${day}.${month}.${year}`);
  }

  onShow(dp) {
    const isButtonsCreated = dp.$datepicker.find('button').html() === undefined;
    if (isButtonsCreated) {
      dp.$datepicker.append(this.clearButton);
      dp.$datepicker.append(this.applyButton);
      const clearButtonElement = this.constructor.getInnerElement(dp.$datepicker, '.button_with-text_gray');
      const applyButtonElement = this.constructor.getInnerElement(dp.$datepicker, '.button_with-text_purple');
      clearButtonElement.click(() => {
        if (this.isSingle) {
          this.$container.val('');
        } else {
          this.$container[0].val('');
          this.$container[1].val('');
        }
        dp.clear();
      });
      applyButtonElement.click(() => {
        dp.hide();
      });
    }
  }

  onSelect(fd, date, inst) {
    const isSecondDateSelected = (date.length === 2);

    this.$container[0].val(this.constructor.getFormattedDate(date[0]));
    this.$container[1].val('');
    if (isSecondDateSelected) {
      this.$container[1].val(this.constructor.getFormattedDate(date[1]));
      if (this.bookingInstance) {
        const daysIn = Number(date[1] - date[0]) / 1000 / 60 / 60 / 24;
        this.bookingInstance.getDaysInAndCalculate(daysIn);
      }
    }
  }
}

export default DateDropdown;
