import 'air-datepicker';
import ControlButton from '../control-button/control-button';

class DateDropdown {
  constructor(item, isSingle, bookingInstance) {
    this.initContainer(item);

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
    const buttons = this.parentElement.querySelectorAll('.js-control-button');
    $.each(buttons, (key, element) => {
      const tmpInstance = new ControlButton(element);
      if (tmpInstance.type === 'clear') {
        this.clearButton = tmpInstance;
      } else {
        this.applyButton = tmpInstance;
      }
      element.remove();
    });
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
      prevHtml: 'arrow_back',
      nextHtml: 'arrow_forward',
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
