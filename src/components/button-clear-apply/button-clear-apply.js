class ButtonClearApply {
  constructor(item, index) {
    this.instance = item;
    this.index = index;
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

export default ButtonClearApply;
