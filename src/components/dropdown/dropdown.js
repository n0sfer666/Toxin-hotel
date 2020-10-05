import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

class Dropdown {
  constructor(item, controlButtonsInstances, outTextObj) {
    this.isInitComplete = false;
    this.$container = $(item);
    this.$selection = this.$container.find('.dropdown__selection');
    this.type = this.$container.data('type');
    this.withControlButtons = this.$container.data('with-control-buttons');
    this.controlButtons = controlButtonsInstances;
    this.outTextObj = outTextObj[this.type];
    this.defaultOutText = this.outTextObj.defaultText;

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
    const menuOptionsObj = this.$container.find('.js-dropdown__menu-option');
    const { countGroups } = this.outTextObj;
    const groupsArr = [];
    $.each(menuOptionsObj, (_, optionElement) => {
      groupsArr.push($(optionElement).data('count-group'));
    });
    this.countGroupsIndex = Object.keys(countGroups)
      .map((group) => this.getCountGroupIndex(group, groupsArr));
    this.outText = Object.values(countGroups);
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
    $.each(this.itemCount, (item) => {
      this.itemCount[item] = 0;
      this.counters[item].html(this.itemCount[item]);
      this.buttonsDecrement[item].removeClass('button-decrement_active');
    });
    this.$selection.html(this.defaultOutText);
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
    if (count > 0) {
      this.buttonsDecrement[id].addClass('button-decrement_active');
    } else {
      this.buttonsDecrement[id].removeClass('button-decrement_active');
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
    if (!this.isInitComplete) {
      const menuOptionsObj = this.$container.find('.js-dropdown__menu-option');
      this.buttonsDecrement = {};
      this.counters = {};
      $.each(menuOptionsObj, (_, optionElement) => {
        const id = $(optionElement).data('id');
        const buttonDecrement = $(optionElement).find('.button-decrement');
        const counterElement = $(optionElement).find('.counter');
        this.buttonsDecrement[id] = buttonDecrement;
        this.counters[id] = counterElement;
      });
      $.each(itemCount, (id, count) => {
        if (count > 0) {
          this.buttonsDecrement[id].addClass('button-decrement_active');
        }
      });
      this.itemCount = itemCount;
      this.isInitComplete = true;
    }
    if (totalItems === 0) {
      return this.defaultOutText;
    } else {
      const counts = [];
      $.each(itemCount, (field, count) => {
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
        const str = this.getOuterString(countArr[index], textArr[index], indexArr[index]);
        const outerStr = outerStrings.length === 0 ? str : `, ${str}`;
        outerStrings.push(outerStr);
      }
    });
    return outerStrings.reduce((previousVal, currentVal) => previousVal + currentVal);
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
    return groupIndex.map((index) => counts[index])
      .reduce((previousVal, currentVal) => previousVal + currentVal);
  }
}

export default Dropdown;
