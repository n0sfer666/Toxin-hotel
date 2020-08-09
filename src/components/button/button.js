class Button {
  constructor(item, index) {
    this.instance = item;
    this.index = index;

    this.type = this.getType();
    this.mod = this.getMod();
    this.parentElement = this.getParentElement();
  }

  getType() {
    const types = ['textual', 'border', 'gradient', 'submitting'];
    const result = [types[0]];
    types.map((value) => {
      const equalType = this.instance.classList.contains(`button_${value}`);
      if (equalType) {
        result.push(value);
      }
    });
    return result[result.length - 1];
  }

  getMod() {
    const isActive = this.instance.classList.contains('button_active');
    const result = ['inactive'];
    if (isActive) {
      result.push('active');
    }
    return result[result.length - 1];
  }

  getParentElement() {
    return this.instance.parentElement;
  }

  setHide() {
    $(this.instance).hide();
  }

  setShow() {
    $(this.instance).show();
  }

  onClick(callback) {
    this.instance.addEventListener('click', callback);
  }
}

export default Button;
