import 'air-datepicker';
import ButtonModule from '../button-module/button-module';

class DateDropdown {
  constructor(item, index, isSingle, bookingInstance) {
    this.initContainer(item);
    this.index = index;

    this.isSingle = isSingle;
    this.bookingInstance = bookingInstance;

    this.initButtons();
    this.bindContext();
    this.initDatepicker();
  }

  initContainer(item) {
    if (Array.isArray(item)) {
      this.$container = [$(item[0]), $(item[1])];
      this.parentElement = item[0].parentElement;
    } else {
      this.$container = $(item);
      this.parentElement = item.parentElement;
    }
  }

  initButtons() {
    const buttonClear = this.parentElement.querySelector('.js-button-module_clear');
    const buttonApply = this.parentElement.querySelector('.js-button-module_apply');
    this.clearButton = new ButtonModule(buttonClear, 0);
    this.applyButton = new ButtonModule(buttonApply, 0);
    buttonClear.remove();
    buttonApply.remove();
  }

  initDatepicker() {
    if (Array.isArray(this.$container)) {
      this.instance = this.$container[0].datepicker(this.getConfig()).data('datepicker');
      this.handleDatepickerRightClick = this.handleDatepickerRightClick.bind(this);
      this.$container[1].on('click', this.handleDatepickerRightClick);
    } else {
      this.instance = this.$container.datepicker(this.getConfig()).data('datepicker');
    }
  }

  getInnerElement(mainElement, innerSelector) {
    return mainElement.find(innerSelector);
  }

  getConfig() {
    return {
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
      onShow: this.handleDatepickerShow,
      onSelect: !this.isSingle ? this.handleDateCellSelect : {},
    };
  }

  getFormattedDate(DateText) {
    const day = (DateText.getDate() < 10) ? `0${DateText.getDate()}` : DateText.getDate();
    const month = (DateText.getMonth() < 9) ? `0${DateText.getMonth() + 1}` : (DateText.getMonth() + 1);
    const year = DateText.getFullYear();

    return (`${day}.${month}.${year}`);
  }

  handleDatepickerShow(dp) {
    const isButtonsCreated = dp.$datepicker.find('button').html() === undefined;
    if (isButtonsCreated) {
      dp.$datepicker.append(this.clearButton.instance);
      dp.$datepicker.append(this.applyButton.instance);
      this.bindDpContext(dp);
      this.applyButton.onClick(dp.hide);
      this.clearButton.onClick(this.handleClearButtonClick);
    }
  }

  handleClearButtonClick(dp) {
    if (Array.isArray(this.$container)) {
      this.$container.map((container) => {
        container.val('');
      });
    } else {
      this.$container.val('');
    }
    dp.clear();
  }

  handleDateCellSelect(fd, date) {
    const isSecondDateSelected = (date.length === 2);

    this.$container[0].val(this.getFormattedDate(date[0]));
    this.$container[1].val('');
    if (isSecondDateSelected) {
      this.$container[1].val(this.getFormattedDate(date[1]));
      if (this.bookingInstance) {
        const daysIn = Number(date[1] - date[0]) / 1000 / 60 / 60 / 24;
        this.bookingInstance.getDaysInAndCalculate(daysIn);
      }
    }
  }

  handleDatepickerRightClick() {
    this.instance.show();
  }

  bindContext() {
    this.handleDatepickerShow = this.handleDatepickerShow.bind(this);
    this.handleDateCellSelect = this.handleDateCellSelect.bind(this);
  }

  bindDpContext(dp) {
    dp.hide = dp.hide.bind(dp);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this, dp);
  }
}

export default DateDropdown;
