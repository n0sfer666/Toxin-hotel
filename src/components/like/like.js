class LikeButton {
  constructor(item, index) {
    this.element = item;
    this.index = index;

    this.counter = $(this.element).find('.like__counter').get(0);

    this.bindEventListenner();
  }

  bindEventListenner() {
    this.element.addEventListener('click', () => {
      this.clickHandler();
    });
  }

  clickHandler() {
    if (this.element.classList.contains('like_active')) {
      this.element.className = 'like';
      this.counter.className = 'like__counter';
      const count = Number(this.counter.innerText) - 1;
      this.counter.innerText = String(count);
    } else {
      this.element.className = 'like like_active';
      this.counter.className = 'like__counter like__counter_active';
      const count = Number(this.counter.innerText) + 1;
      this.counter.innerText = String(count);
    }
  }
}
export { LikeButton };
