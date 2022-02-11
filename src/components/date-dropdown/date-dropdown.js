import 'air-datepicker';

class DateDropdown {
  constructor(item, isSingle, controlButtons, bookingInstance) {
    this.initContainer(item);

    this.isSingle = isSingle;
    this.bookingInstance = bookingInstance;
    this.controlButtons = controlButtons;

    this.initButtons();
    this.bindContext();
    this.initDatepicker();
  }

  initContainer(item) {
    if (Array.isArray(item)) {
      this.$container = [$(item[0]), $(item[1])];
      this.$parentElement = this.$container[0].parent();
    } else {
      this.$container = $(item);
      this.$parentElement = this.$container.parent();
    }
  }

  initButtons() {
    $(this.controlButtons).each((_, controlButtonInstance) => {
      const isSameParent = controlButtonInstance.$parentElement.is(this.$parentElement);
      if (isSameParent) {
        const isClearButton = controlButtonInstance.type === 'clear';
        if (isClearButton) {
          this.clearButton = controlButtonInstance;
        } else {
          this.applyButton = controlButtonInstance;
        }
        controlButtonInstance.$element.remove();
      }
    });
  }

  initDatepicker() {
    if (Array.isArray(this.$container)) {
      this.instance = this.$container[0].datepicker(this.getConfig()).data('datepicker');
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
      offset: 7,
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

  getFormattedDate(date) {
    const day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate();
    const month = (date.getMonth() < 9) ? `0${date.getMonth() + 1}` : (date.getMonth() + 1);
    const year = date.getFullYear();

    return (`${day}.${month}.${year}`);
  }

  handleDatepickerShow(dp) {
    const isButtonsNotCreated = dp.$datepicker.find('button').html() === undefined;
    if (isButtonsNotCreated) {
      if (this.isSingle) {
        dp.$datepicker.addClass('datepicker-single');
      }
      dp.$datepicker.append(this.clearButton.$element);
      dp.$datepicker.append(this.applyButton.$element);
      this.bindDpContext(dp);
      this.applyButton.onClick(this.handleApplyButtonClick);
      this.clearButton.onClick(this.handleClearButtonClick);
    }
  }

  handleApplyButtonClick(dp) {
    dp.hide();
  }

  handleClearButtonClick(dp, event) {
    if (Array.isArray(this.$container)) {
      this.$container.map((container) => {
        container.val('');
      });
    } else {
      this.$container.val('');
    }
    dp.clear();
    event.stopPropagation();
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
    this.handleDatepickerRightClick = this.handleDatepickerRightClick.bind(this);
  }

  bindDpContext(dp) {
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this, dp);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this, dp);
  }
}

export default DateDropdown;
