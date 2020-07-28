import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

class Dropdown {
  constructor(item, index, clearButton, applyButton) {
    this.container = item;
    this.index = index;

    this.initIsGuests();
    this.initButtons(clearButton, applyButton);

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

  initButtons(clearButton, applyButton) {
    if (this.isGuests) {
      this.clearButton = clearButton;
      this.applyButton = applyButton;
      this.clearButton.setHide();
    }
  }

  initIsGuests() {
    this.isGuests = $(this.container).find('.js-iqdropdown-menu').length > 0;
  }

  initInstanceElements() {
    // this.$clearButton = this.getInnerElement('.button_deactive').hide();
    // this.$applyButton = this.getInnerElement('.button_active');
    this.$iqMenu = this.getInnerElement('.iqdropdown-menu');
  }

  bindContext() {
    this.handleButtonIncDecChange = this.handleButtonIncDecChange.bind(this);
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.handleButtonIncDecChange = this.handleButtonIncDecChange.bind(this);
  }

  bindHandlers() {
    if (this.isGuests) {
      $(this.clearButton.instance).on('click', this.handleClearButtonClick);
    }
    this.$iqMenu.on('click', this.handleApplyButtonClick);
  }

  handleClearButtonClick() {
    this.getInnerElement('.iqdropdown-item-controls').remove();
    this.initInstance();
    // need to repeat for correct work iqDropdown
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
        .addClass('button-decrement_actived');
    } else {
      $(`[data-id=${id}]`).find('.button-decrement_actived')
        .removeClass('button-decrement_actived');
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
    let text;

    const isGuests = (
      itemCount.adults !== undefined
      || itemCount.babies !== undefined
      || itemCount.children !== undefined
    );

    if (totalItems === 0) {
      if (isGuests) {
        text = 'Сколько гостей';
      }
    }

    const guests = itemCount.adults + itemCount.children;
    const { babies } = itemCount;
    const { bedrooms } = itemCount;
    const { beds } = itemCount;

    if (guests === 1) {
      text = `${guests} гость`;
    }
    if (guests > 1 && guests < 5) {
      text = `${guests} гостя`;
    }
    if (guests >= 5) {
      text = `${guests} гостей`;
    }
    if (guests === 0 && totalItems !== 0) {
      text = '';
    }

    if (babies === 1) {
      text += guests > 0
        ? `, ${babies} младенец`
        : `${babies} младенец`;
    }
    if (babies > 1 && babies < 5) {
      text += guests > 0
        ? `, ${babies} младенца`
        : `${babies} младенца`;
    }
    if (babies >= 5) {
      text += guests > 0
        ? `, ${babies} младенцев`
        : `${babies} младенцев`;
    }

    if (bedrooms === 1) {
      text = `${bedrooms} спальня`;
    }
    if (bedrooms > 1 && bedrooms < 5) {
      text = `${bedrooms} спальни`;
    }
    if (bedrooms >= 5) {
      text = `${bedrooms} спален`;
    }

    if (beds === 1) {
      text += bedrooms !== 0
        ? `, ${beds} кровать...`
        : `${beds} кровать...`;
    }
    if (beds > 1 && beds < 5) {
      text += bedrooms !== 0
        ? `, ${beds} кровати...`
        : `${beds} кровати...`;
    }
    if (beds >= 5) {
      text += bedrooms !== 0
        ? `, ${beds} кроватей...`
        : `${+beds} кроватей...`;
    }

    return text;
  }
}

export default Dropdown;
