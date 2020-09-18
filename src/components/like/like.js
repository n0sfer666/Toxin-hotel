class LikeButton {
  constructor(item) {
    this.$element = $(item);

    this.initInstanceElements();
    this.bindContext();
    this.bindHandlers();
  }

  getInnerElement(innerSelector) {
    return this.$element.find(innerSelector);
  }

  initInstanceElements() {
    this.$counter = this.getInnerElement('.like__counter');
    this.$button = this.getInnerElement('.like__button');
    this.$heartIcon = this.getInnerElement('.like__heart');
  }

  bindHandlers() {
    this.$element.on('click', this.handleElementClick);
  }

  bindContext() {
    this.handleElementClick = this.handleElementClick.bind(this);
  }

  handleElementClick() {
    const isActive = this.$element.hasClass('like_active');
    if (isActive) {
      this.$element.removeClass('like_active');
      this.$counter.text(Number(this.$counter.text()) - 1);
    } else {
      this.$element.addClass('like_active');
      this.$counter.text(Number(this.$counter.text()) + 1);
    }
  }
}
export default LikeButton;
