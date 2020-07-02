class LikeButton {
  constructor(item, index) {
    this.element = item;
    this.index = index;

    this.counter = $(this.element).find('.like__counter').get(0);
    this.button = $(this.element).find('.like__button').get(0);
    this.heartIcon = $(this.element).find('.like__heart').get(0);

    this.bindEventListenner();
  }

  bindEventListenner() {
    const onClick = this.clickHandler.bind(this);
    this.element.addEventListener('click', onClick);
  }

  clickHandler() {
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
