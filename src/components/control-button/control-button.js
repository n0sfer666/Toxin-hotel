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

  onClick(handleClick) {
    this.$element.on('click', handleClick);
  }
}

export default ControlButton;
