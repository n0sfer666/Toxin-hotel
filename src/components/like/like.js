class LikeButton {
  constructor(item, index) {
    this.element = item;
    this.index = index;

    this.initInstanceElements();
    this.bindContext();
    this.bindHandlers();
  }

  getInnerElement(innerSelector) {
    return this.element.querySelector(innerSelector);
  }

  initInstanceElements() {
    this.counter = this.getInnerElement('.like__counter');
    this.button = this.getInnerElement('.like__button');
    this.heartIcon = this.getInnerElement('.like__heart');
  }

  bindHandlers() {
    this.element.addEventListener('click', this.handleElementClick);
  }

  bindContext() {
    this.handleElementClick = this.handleElementClick.bind(this);
  }

  handleElementClick() {
    const isActived = this.element.classList.contains('like_actived');
    let count;
    if (isActived) {
      this.element.classList.remove('like_actived');
      count = Number(this.counter.innerText) - 1;
    } else {
      this.element.classList.add('like_actived');
      count = Number(this.counter.innerText) + 1;
    }
    this.counter.innerText = String(count);
  }
}
export default LikeButton;
