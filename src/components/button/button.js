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
    let result = types[0];
    types.map((value) => {
      const equalType = this.instance.classList.contains(`button_${value}`);
      if (equalType) {
        result = value;
      }
    });
    return result;
  }

  getMod() {
    const isActive = this.instance.classList.contains('button_active');
    let result = 'deactive';
    if (isActive) {
      result = 'active';
    }
    return result;
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
}

export default Button;
