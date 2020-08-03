import Dropdown from './dropdown';
import buttonsInstances from '../button/button-init';

$(document).ready(() => {
  const $dropdowns = $('.js-iqdropdown');
  const clearButton = [];
  const applyButton = [];
  buttonsInstances.map((value) => {
    const isDropdownButton = value.type === 'textual'
      && value.parentElement.classList.contains('js-iqdropdown-menu');
    const isDropdownClearButton = value.mod === 'deactive';
    const isDropdownApplyButton = value.mod === 'active';
    if (isDropdownButton) {
      if (isDropdownClearButton) {
        clearButton.push(value);
      }
      if (isDropdownApplyButton) {
        applyButton.push(value);
      }
    }
  });
  $.each($dropdowns, (key, item) => {
    const isGuestDropdown = $(item).find('.js-iqdropdown-menu').length > 0;
    let index = 0;
    if (isGuestDropdown) {
      new Dropdown(item, key, clearButton[index], applyButton[index]);
      index += 1;
    } else {
      new Dropdown(item, key);
    }
  });
});
