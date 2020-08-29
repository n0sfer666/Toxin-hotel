class ControlButton {
  constructor(item, index) {
    this.instance = item;
    this.index = index;
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
