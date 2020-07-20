class LikeButton {
  constructor(item, index) {
    this.element = item;
    this.index = index;

    this.counter = this.getInnerElement('.like__counter');
    this.button = this.getInnerElement('.like__button');
    this.heartIcon = this.getInnerElement('.like__heart');

    this.bindContext();
    this.bindHandlers();
  }

  getInnerElement(innerSelector) {
    return $(this.element).find(innerSelector).get(0);
  }

  bindHandlers() {
    this.element.addEventListener('click', this.handleElementClick);
  }

  bindContext() {
    this.handleElementClick = this.handleElementClick.bind(this);
  }

  handleElementClick() {
    const isActived = this.element.classList.contains('like_actived');
    if (isActived) {
      this.element.classList.remove('like_actived');
      this.counter.classList.remove('like__counter_actived');
      this.button.classList.remove('like__button_actived');
      this.heartIcon.classList.remove('like__heart_actived');
      const count = Number(this.counter.innerText) - 1;
      this.counter.innerText = String(count);
    } else {
      this.element.classList.add('like_actived');
      this.counter.classList.add('like__counter_actived');
      this.button.classList.add('like__button_actived');
      this.heartIcon.classList.add('like__heart_actived');
      const count = Number(this.counter.innerText) + 1;
      this.counter.innerText = String(count);
    }
  }
}
export default LikeButton;
