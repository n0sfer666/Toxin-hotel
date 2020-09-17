import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

class Dropdown {
  constructor(item, controlButtons) {
    this.container = item;
    this.controlButtons = controlButtons;
    this.withControlButtons = this.container.dataset.withcontrolbuttons === 'true';

    this.textGuestsDefaults = 'Сколько гостей';
    this.textGuests = [
      ['гость', 'гостя', 'гостей'],
      ['младенец', 'младенца', 'младенцев'],
    ];

    this.textAmenityDefaults = '';
    this.textAmenity = [
      ['спальня', 'спальни', 'спален'],
      ['кровать', 'кровати', 'кроватей'],
    ];

    this.bindContext();
    this.initButtons();
    this.initInstance();
    this.initInstanceElements();
    this.bindHandlers();
  }

  initInstance() {
    this.$instance = $(this.container).iqDropdown(this.getConfig());
  }

  initInstanceElements() {
    this.$iqMenu = this.getInnerElement('.iqdropdown-menu');
  }

  getInnerElement(innerSelector) {
    return this.$instance.find(innerSelector);
  }

  getConfig() {
    return {
      onChange: this.handleButtonIncDecChange,
      setSelectionText: this.handleButtonIncDecClick,
    };
  }

  initButtons() {
    if (this.withControlButtons) {
      this.buttonsContainer = this.container.querySelector('.dropdown__buttons');
      $.each(this.controlButtons, this.getButtons);
      this.buttonsContainer.append(this.clearButton.element);
      this.buttonsContainer.append(this.applyButton.element);
      this.clearButton.setHide();
    }
  }

  getButtons(index, button) {
    const isDropdownButton = button.parentElement === this.buttonsContainer;
    if (isDropdownButton) {
      const isClearButton = button.type === 'clear';
      if (isClearButton) {
        this.clearButton = button;
      } else {
        this.applyButton = button;
      }
      button.element.remove();
    }
  }

  bindContext() {
    this.handleButtonIncDecChange = this.handleButtonIncDecChange.bind(this);
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.handleButtonIncDecClick = this.handleButtonIncDecClick.bind(this);
    this.getButtons = this.getButtons.bind(this);
  }

  bindHandlers() {
    if (this.isGuests) {
      this.clearButton.onClick(this.handleClearButtonClick);
      this.$iqMenu.on('click', this.handleApplyButtonClick);
    }
  }

  handleClearButtonClick() {
    this.getInnerElement('.iqdropdown-item-controls').remove();
    this.initInstance();
    this.getInnerElement('.iqdropdown-item-controls').remove();
    this.initInstance();
    this.clearButton.setHide();
  }

  handleApplyButtonClick(event) {
    if (this.isGuests) {
      const parentOfParent = event.target.parentElement.parentElement;
      const isApplyButton = parentOfParent === this.applyButton.element;
      if (!isApplyButton) {
        event.stopPropagation();
      }
    }
  }

  handleButtonIncDecChange(id, count, totalItems) {
    if (count > 0) {
      $(`[data-id=${id}]`).find('.button-decrement')
        .addClass('button-decrement_active');
    } else {
      $(`[data-id=${id}]`).find('.button-decrement_active')
        .removeClass('button-decrement_active');
    }
    if (this.withControlButtons) {
      if (totalItems === 0) {
        this.clearButton.setHide();
      } else {
        this.clearButton.setShow();
      }
    }
  }

  handleButtonIncDecClick(itemCount, totalItems) {
    const fields = [];
    const counts = [];
    $.each(itemCount, (field, count) => {
      fields.push(field);
      counts.push(count);
    });
    if (fields[0] === 'adults') {
      return this.getGuestsString(counts, totalItems);
    } else if (fields[0] === 'bedrooms') {
      return this.getAmenityString(counts, totalItems);
    }
  }

  getGuestsString(counts, totalItems) {
    const guests = counts[0] + counts[1];
    const babies = counts[2];

    const countArr = [guests, babies];
    const textArr = this.textGuests;
    const indexArr = [this.getIndex(guests), this.getIndex(babies)];

    if (totalItems === 0) {
      return this.textGuestsDefaults;
    } else {
      return this.getText(countArr, textArr, indexArr);
    }
  }

  getAmenityString(counts, totalItems) {
    const bedrooms = counts[0];
    const beds = counts[1];

    const countArr = [bedrooms, beds];
    const textArr = this.textAmenity;
    const indexArr = [this.getIndex(bedrooms), this.getIndex(beds)];

    if (totalItems === 0) {
      return this.textAmenityDefaults;
    } else {
      return this.getText(countArr, textArr, indexArr);
    }
  }

  getIndex(count) {
    if (count === 1) {
      return 0;
    }
    if (count > 1 && count < 5) {
      return 1;
    }
    if (count >= 5) {
      return 2;
    }
  }

  getString(count, text, index) {
    return `${count} ${text[index]}`;
  }

  getText(countArr, textArr, indexArr) {
    const strFirst = this.getString(countArr[0], textArr[0], indexArr[0]);
    const strSecond = this.getString(countArr[1], textArr[1], indexArr[1]);
    if (countArr[0] !== 0) {
      if (countArr[1] !== 0) {
        return `${strFirst}, ${strSecond}`;
      } else {
        return `${strFirst}`;
      }
    } else if (countArr[1] !== 0) {
      return `${strSecond}`;
    }
  }
}

export default Dropdown;
