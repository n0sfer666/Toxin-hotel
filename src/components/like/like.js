class LikeButton {
  constructor(item, index) {
    this.element = item;
    this.index = index;

    this.counter = this.getInnerElement('.like__counter');
    this.button = this.getInnerElement('.like__button');
    this.heartIcon = this.getInnerElement('.like__heart');

    this.bindHandlers();
  }

  getInnerElement(innerSelector) {
    return $(this.element).find(innerSelector).get(0);
  }

  bindHandlers() {
    const handleElementClick = this.handleElementClick.bind(this);
    this.element.addEventListener('click', handleElementClick);
  }

  handleElementClick() {
    const isActived = this.element.classList.contains('like_actived');
    console.log(isActived);
    if (isActived) {
      this.element.className = 'like';
      this.counter.className = 'like__counter';
      this.button.className = 'like__button';
      this.heartIcon.className = 'like__heart';
      const count = Number(this.counter.innerText) - 1;
      this.counter.innerText = String(count);
    } else {
      this.element.className = 'like_actived';
      this.counter.className = 'like__counter like__counter_actived';
      this.button.className = 'like__button like__button_actived';
      this.heartIcon.className = 'like__heart like__heart_actived';
      const count = Number(this.counter.innerText) + 1;
      this.counter.innerText = String(count);
    }
  }
}
export default LikeButton;
