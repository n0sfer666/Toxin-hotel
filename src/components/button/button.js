class Button {
  constructor(item) {
    this.$element = $(item);

    this.type = this.getType();
    this.mod = this.getMod();
    this.$parentElement = this.getParentElement();
  }

  getType() {
    return ['textual', 'border', 'gradient', 'submitting'].find((type) => {
      if (this.$element.hasClass(`button_${type}`)) {
        return type;
      }
    });
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

  handleControlButtonClick(callback) {
    this.$element.on('click', callback);
  }
}

export default Button;
