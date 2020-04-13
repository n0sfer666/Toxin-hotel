$(document).ready(() => {
  const $likeElements = $('.like');
  const $likeCounterElements = $('.like__counter');
  const likeButton = []
  for (let i = 0; i < $likeElements.length; i += 1) {
    const element = $likeElements[String(i)];
    const counter = $likeCounterElements[String(i)];

    likeButton.push(new LikeButton(element, counter));
  }
});

class LikeButton {
  constructor(element, counter) {
    this.element = element;
    this.counter = counter;

    this.bindEventListenner();
  }

  bindEventListenner() {
    this.element.addEventListener('click', () => {
      this.clickHandler();
    })
  }

  clickHandler() {
    if (this.element.classList.contains('like_active')) {
      this.element.className = 'like';
      this.counter.className = 'like__counter';
      let count = Number(this.counter.innerText);
      count -= 1;
      this.counter.innerText = String(count);
    } else {
      this.element.className = 'like like_active';
      this.counter.className = 'like__counter like__counter_active';
      let count = Number(this.counter.innerText);
      count += 1;
      this.counter.innerText = String(count);
    }
  }
}