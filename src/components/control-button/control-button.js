class ControlButton {
  constructor(item) {
    this.element = item;
    this.parentElement = this.element.parentElement;
    this.type = this.element.dataset.type;
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

export default ControlButton;
