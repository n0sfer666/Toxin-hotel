class Button {
  constructor(item) {
    this.element = item;

    this.type = this.getType();
    this.mod = this.getMod();
    this.parentElement = this.getParentElement();
  }

  getType() {
    const types = ['textual', 'border', 'gradient', 'submitting'];
    const result = [types[0]];
    types.map((value) => {
      const equalType = this.element.classList.contains(`button_${value}`);
      if (equalType) {
        result.push(value);
      }
    });
    return result[result.length - 1];
  }

  getMod() {
    const isActive = this.element.classList.contains('button_active');
    const result = ['inactive'];
    if (isActive) {
      result.push('active');
    }
    return result[result.length - 1];
  }

  getParentElement() {
    return this.element.parentElement;
  }

  setHide() {
    $(this.element).hide();
  }

  setShow() {
    $(this.element).show();
  }

  onClick(callback) {
    this.element.addEventListener('click', callback);
  }
}

export default Button;
