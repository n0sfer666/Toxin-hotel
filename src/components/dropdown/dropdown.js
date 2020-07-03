import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

class Dropdown {
  constructor(item, index) {
    this.container = item;
    this.index = index;

    this.config = this.getConfig();

    this.$instance = this.getInstance();

    this.$clearButton = this.getInnerElement('.button_with-text_gray').hide();
    this.$applyButton = this.getInnerElement('.button_with-text_purple');
    this.$iqMenu = this.getInnerElement('.iqdropdown-menu');

    this.bindHandlers();
  }

  getInnerElement(innerSelector) {
    return this.$instance.find(innerSelector);
  }

  bindHandlers() {
    const handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.$clearButton.on('click', handleClearButtonClick);
    const handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
    this.$iqMenu.on('click', handleApplyButtonClick);
  }

  handleClearButtonClick() {
    this.getInnerElement('.iqdropdown-item-controls').remove();
    this.$instance = this.getInstance();
    // need to repeat for correct work iqDropdown
    this.getInnerElement('.iqdropdown-item-controls').remove();
    this.$instance = this.getInstance();
    this.$clearButton.hide();
  }

  handleApplyButtonClick(event) {
    const isApplyButton = event.target.parentNode.parentNode === this.$applyButton.get(0);
    if (!isApplyButton) {
      event.stopPropagation();
    }
  }

  getConfig() {
    const config = {};
    const onChange = this.onChange.bind(this);

    config.setSelectionText = this.constructor.setSelectionText;
    config.onChange = onChange;

    return config;
  }

  getInstance() {
    return $(this.container).iqDropdown(this.config);
  }

  onChange(id, count, totalItems) {
    if (count > 0) {
      $(`[data-id=${id}]`).find('.button-decrement')
        .removeClass('button-decrement')
        .addClass('button-decrement_actived');
    } else {
      $(`[data-id=${id}]`).find('.button-decrement_actived')
        .removeClass('button-decrement_actived')
        .addClass('button-decrement');
    }
    if (totalItems === 0) {
      this.$clearButton.hide();
    } else {
      this.$clearButton.show();
    }
  }

  static setSelectionText(itemCount, totalItems) {
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
