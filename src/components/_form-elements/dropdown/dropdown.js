import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

const dropdownConfig = {
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
      text += `; ${babies} младенец`;
    }
    if (babies > 1 && babies < 5) {
      text += `; ${babies} младенца`;
    }
    if (babies >= 5) {
      text += `; ${babies} младенцев`;
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
        ? `; ${beds} кровать...`
        : `${beds} кровать...`;
    }
    if (beds > 1 && beds < 5) {
      text += bedrooms !== 0
        ? `; ${beds} кровати...`
        : `${beds} кровати...`;
    }
    if (beds >= 5) {
      text += bedrooms !== 0
        ? `; ${beds} кроватей...`
        : `${+beds} кроватей...`;
    }

    return text;
  },
  onChange: (id, count, totalItems) => {
    if (count >= 1) {
      $(`[data-id=${id}]`).find('.button-decrement')
        .css('border-color', 'rgba(31, 32, 65, 0.5)')
        .css('color', 'rgba(31, 32, 65, 0.5)');
    } else {
      $(`[data-id=${id}]`).find('.button-decrement')
        .removeAttr('style');
    }
  },
};

$(document).ready(() => {
  const $dropdowns = $('.js-iqdropdown').iqDropdown(dropdownConfig);

  $('[data-id=bedrooms]').find('.button-decrement')
    .css('border-color', 'rgba(31, 32, 65, 0.5)')
    .css('color', 'rgba(31, 32, 65, 0.5)');
  $('[data-id=beds]').find('.button-decrement')
    .css('border-color', 'rgba(31, 32, 65, 0.5)')
    .css('color', 'rgba(31, 32, 65, 0.5)');
});
