class ExpandableCheckboxList {
  constructor(item) {
    this.$element = $(item);
    this.isExpanded = false;

    this.initInstanceElements();
    this.bindContext();
    this.bindHandlers();
  }

  getInnerElement(innerSelector) {
    return this.$element.find(innerSelector);
  }

  initInstanceElements() {
    this.$elementContainer = this.$element.siblings('.js-expandable-checkbox-list__container').hide();
    this.$elementArrowDown = this.getInnerElement('.js-expandable-checkbox-list__arrow-down');
    this.$elementArrowUp = this.getInnerElement('.js-expandable-checkbox-list__arrow-up').hide();
  }

  bindHandlers() {
    this.$element.on('click', this.handleInstanceClick);
  }

  bindContext() {
    this.handleInstanceClick = this.handleInstanceClick.bind(this);
  }

  handleInstanceClick() {
    if (!this.isExpanded) {
      this.isExpanded = true;
      this.$elementContainer.show();
      this.$elementArrowDown.hide();
      this.$elementArrowUp.show();
    } else {
      this.isExpanded = false;
      this.$elementContainer.hide();
      this.$elementArrowDown.show();
      this.$elementArrowUp.hide();
    }
  }
}
export default ExpandableCheckboxList;
