import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import { each } from 'jquery';

class Dropdown {
  constructor(item, controlButtonsInstances, outTextObj) {
    this.isInitComplete = false;
    this.$container = $(item);
    this.type = this.$container.data('type');
    this.withControlButtons = this.$container.data('with-control-buttons');
    this.controlButtons = controlButtonsInstances;
    this.outTextObj = outTextObj;

    this.bindContext();
    this.initOutText();
    this.initButtons();
    this.initInstance();
    this.initInstanceElements();
    this.bindHandlers();
  }

  initInstance() {
    this.instance = this.$container.iqDropdown(this.getConfig());
  }

  initInstanceElements() {
    this.$iqMenu = this.getInnerElement('.iqdropdown-menu');
  }

  initOutText() {
    this.outText = [];
    this.countGroupsIndex = [];
    const menuOptionsObj = this.$container.find('.iqdropdown-menu-option');
    const outTextGroups = [];
    const groupsArr = [];
    $.each(menuOptionsObj, (_, optionElement) => {
      groupsArr.push($(optionElement).data('count-group'));
    });
    $.each(this.outTextObj, (type, value) => {
      if (type === this.type) {
        this.defaultOutText = value.defaultText;
        const countGroupsObj = value.countGroups;
        $.each(countGroupsObj, (group, textArr) => {
          this.outText.push(textArr);
          outTextGroups.push(group);
        });
      }
    });
    outTextGroups.map((group) => {
      this.countGroupsIndex.push(this.getCountGroupIndex(group, groupsArr));
    });
  }

  initButtons() {
    if (this.withControlButtons) {
      this.$buttonsContainer = this.getInnerElement('.dropdown__buttons');
      $.each(this.controlButtons, this.getButtons);
      this.$buttonsContainer.append(this.clearButton.$element);
      this.$buttonsContainer.append(this.applyButton.$element);
      this.clearButton.setHide();
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
    if (this.withControlButtons) {
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
    if (this.withControlButtons) {
      const parentOfParent = $(event.target).parent().parent();
      const isApplyButton = parentOfParent.is(this.applyButton.$element);
      if (!isApplyButton) {
        event.stopPropagation();
      }
    }
  }

  handleButtonIncDecChange(id, count, totalItems) {
    this.isInitComplete = true;
    if (count > 0) {
      $(`[data-id=${id}]`).find('.button-decrement').addClass('button-decrement_active');
    } else {
      $(`[data-id=${id}]`).find('.button-decrement_active').removeClass('button-decrement_active');
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
    if (totalItems === 0) {
      return this.defaultOutText;
    } else {
      const counts = [];
      $.each(itemCount, (field, count) => {
        if (count > 0 && !this.isInitComplete) {
          $(`[data-id=${field}]`).find('.button-decrement').addClass('button-decrement_active');
        }
        counts.push(count);
      });
      const countArr = [];
      this.countGroupsIndex.map((value) => {
        countArr.push(this.getCount(counts, value));
      });
      const textArr = this.outText;
      const indexArr = [];
      countArr.map((value) => {
        indexArr.push(this.getIndex(value));
      });
      return this.getOuterText(countArr, textArr, indexArr);
    }
  }

  getIndex(count) {
    if (count === 0) {
      return 'empty';
    }
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

  getInnerElement(innerSelector) {
    return this.$container.find(innerSelector);
  }

  getConfig() {
    return {
      onChange: this.handleButtonIncDecChange,
      setSelectionText: this.handleButtonIncDecClick,
    };
  }

  getButtons(index, button) {
    const isDropdownButton = button.$parentElement.is(this.$buttonsContainer);
    if (isDropdownButton) {
      const isClearButton = button.type === 'clear';
      if (isClearButton) {
        this.clearButton = button;
      } else {
        this.applyButton = button;
      }
      button.$element.remove();
    }
  }

  getOuterString(count, text, index) {
    return `${count} ${text[index]}`;
  }

  getOuterText(countArr, textArr, indexArr) {
    const outerStrings = [];
    countArr.map((value, index) => {
      if (value !== 0) {
        if (outerStrings.length === 0) {
          outerStrings.push(this.getOuterString(countArr[index], textArr[index], indexArr[index]));
        } else {
          outerStrings.push(`, ${this.getOuterString(countArr[index], textArr[index], indexArr[index])}`);
        }
      }
    });
    return outerStrings.reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  getCountGroupIndex(group, groupsArr) {
    const result = [];
    groupsArr.map((value, index) => {
      if (value === group) {
        result.push(index);
      }
    });
    return result;
  }

  getCount(counts, groupIndex) {
    const results = [];
    groupIndex.map((index) => {
      results.push(counts[index]);
    });
    return results.reduce((previousValue, currentValue) => previousValue + currentValue);
  }
}

export default Dropdown;
