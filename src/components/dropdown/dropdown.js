import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

class Dropdown {
  constructor(item, index) {
    this.container = item;
    this.index = index;
    this.config = this.getConfig();

    this.$instance = this.getInstance();

    this.$clearButton = this.$instance.find('.js-clear-dropdown-button');
    this.$applyButton = this.$instance.find('.js-apply-dropdown-button');
    
    this.bindClearButtonHandler();

    this.iqMenu = this.$instance.find('.iqdropdown-menu');
    this.iqMenu.on('click', (event) => {
      const isApplyButton = event.target.parentNode.parentNode === this.$applyButton.get(0);
      if(!isApplyButton) {
        event.stopPropagation();
      }
    });
    

    $('[data-id=bedrooms]').find('.button-decrement')
      .css('border-color', 'rgba(31, 32, 65, 0.5)')
      .css('color', 'rgba(31, 32, 65, 0.5)');
    $('[data-id=beds]').find('.button-decrement')
      .css('border-color', 'rgba(31, 32, 65, 0.5)')
      .css('color', 'rgba(31, 32, 65, 0.5)');
  }

  bindClearButtonHandler() {
    this.$clearButton.on('click', () => {
      this.clearButtonHandler();
      this.clearButtonHandler(); // Need for hidden container after click
    });
  }
  clearButtonHandler() {
    this.$instance.find('.iqdropdown-item-controls').remove();
    this.$instance = this.getInstance();
  }
  getConfig() {
    return {
      setSelectionText: (itemCount, totalItems) => {
        let text = '';
    
        const isGuests = (
          itemCount.adults !== undefined
          || itemCount.babies !== undefined
          || itemCount.children !== undefined
        );
        const isRooms = (
          itemCount.bedrooms !== undefined
          || itemCount.beds !== undefined
          || itemCount.bathrooms !== undefined
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
      },
      onChange: (id, count, totalItems) => {
        if (count >= 1) {
          $(`[data-id=${id}]`).find('.button-decrement')
            .css('cursor', 'pointer')
            .css('border-color', 'rgba(31, 32, 65, 0.5)')
            .css('color', 'rgba(31, 32, 65, 0.5)');
        } else {
          $(`[data-id=${id}]`).find('.button-decrement')
            .removeAttr('style');
        }
      },
    }
  }
  getInstance() {
    return $(this.container).iqDropdown(this.config);
  }
}

export { Dropdown };