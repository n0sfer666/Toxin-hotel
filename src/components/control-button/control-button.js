class ControlButton {
  constructor(item) {
    this.$element = $(item);
    this.$parentElement = this.$element.parent();
    this.type = this.$element.data('type');
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

export default ControlButton;
