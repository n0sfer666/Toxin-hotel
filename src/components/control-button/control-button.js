class ControlButton {
  constructor(item) {
    this.instance = item;
    this.type = this.instance.dataset.type;
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

export default ControlButton;
