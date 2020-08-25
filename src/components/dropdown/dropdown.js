import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import ButtonModule from '../button-module/button-module';

class Dropdown {
  constructor(item, index) {
    this.container = item;
    this.index = index;

    this.textGuestsDefaults = 'Сколько гостей';
    this.textGuests = ['гость', 'гостя', 'гостей'];
    this.textBabies = ['младенец', 'младенца', 'младенцев'];
    this.textBedrooms = ['спальня', 'спальни', 'спален'];
    this.textBeds = ['кровать', 'кровати', 'кроватей'];

    this.initIsGuests();
    this.initButtons();

    this.bindContext();
    this.initInstance();
    this.initInstanceElements();
    this.bindHandlers();
  }

  initInstance() {
    this.$instance = $(this.container).iqDropdown(this.getConfig());
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
    if (this.isGuests) {
      const buttonClear = this.container.querySelector('.js-button-module_clear');
      const buttonApply = this.container.querySelector('.js-button-module_apply');
      this.clearButton = new ButtonModule(buttonClear, 0);
      this.applyButton = new ButtonModule(buttonApply, 0);
      this.clearButton.setHide();
    }
  }

  initIsGuests() {
    this.isGuests = $(this.container).find('.js-iqdropdown-menu').length > 0;
  }

  initInstanceElements() {
    this.$iqMenu = this.getInnerElement('.iqdropdown-menu');
  }

  bindContext() {
    this.handleButtonIncDecChange = this.handleButtonIncDecChange.bind(this);
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.handleButtonIncDecClick = this.handleButtonIncDecClick.bind(this);
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
      const isApplyButton = parentOfParent === this.applyButton.instance;
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
    if (this.isGuests) {
      if (totalItems === 0) {
        this.clearButton.setHide();
      } else {
        this.clearButton.setShow();
      }
    }
  }

  handleButtonIncDecClick(itemCount, totalItems) {
    const isGuests = (
      itemCount.adults !== undefined
      || itemCount.babies !== undefined
      || itemCount.children !== undefined
    );

    const guests = itemCount.adults + itemCount.children;
    const { babies, bedrooms, beds } = itemCount;

    const countArr = isGuests
      ? [guests, babies]
      : [bedrooms, beds];
    const indexArr = isGuests
      ? [this.getIndex(guests), this.getIndex(babies)]
      : [this.getIndex(bedrooms), this.getIndex(beds)];
    const textArr = isGuests
      ? [this.textGuests, this.textBabies]
      : [this.textBedrooms, this.textBeds];

    if (totalItems === 0) {
      return this.textGuestsDefaults;
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
