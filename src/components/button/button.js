class Button {
  constructor(item) {
    this.$element = $(item);

    this.type = this.getType();
    this.mod = this.getMod();
    this.$parentElement = this.getParentElement();
    console.log(this.mod);
  }

  getType() {
    const types = ['textual', 'border', 'gradient', 'submitting'];
    const result = [types[0]];
    types.map((value) => {
      const equalType = this.$element.hasClass(`button_${value}`);
      if (equalType) {
        result.push(value);
      }
    });
    return result[result.length - 1];
  }

  getMod() {
    const isActive = this.$element.hasClass('button_active');
    return isActive ? 'active' : 'inactive';
  }

  getParentElement() {
    return this.$element.parent();
  }

  setHide() {
    this.$element.hide();
  }

  setShow() {
    this.$element.show();
  }

  onClick(callback) {
    this.$element.on('click', callback);
  }
}

export default Button;
