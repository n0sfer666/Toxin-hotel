class LikeButton {
  constructor(item) {
    this.element = item;

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
    const isActive = this.element.classList.contains('like_active');
    if (isActive) {
      this.element.classList.remove('like_active');
      this.counter.innerText = Number(this.counter.innerText) - 1;
    } else {
      this.element.classList.add('like_active');
      this.counter.innerText = Number(this.counter.innerText) + 1;
    }
  }
}
export default LikeButton;
