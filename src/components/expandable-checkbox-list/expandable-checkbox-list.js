class ExpandableCheckboxList {
  constructor(item) {
    this.$instance = $(item);
    this.isExpanded = false;

    this.initInstanceElements();
    this.bindContext();
    this.bindHandlers();
  }

  getInnerElement(innerSelector) {
    return this.$instance.find(innerSelector);
  }

  initInstanceElements() {
    this.$instanceContainer = this.$instance.siblings('.js-expandable-checkbox-list__container').hide();
    this.$instanceArrowDown = this.getInnerElement('.js-expandable-checkbox-list__arrow-down');
    this.$instanceArrowUp = this.getInnerElement('.js-expandable-checkbox-list__arrow-up').hide();
  }

  bindHandlers() {
    this.$instance.on('click', this.handleInstanceClick);
  }

  bindContext() {
    this.handleInstanceClick = this.handleInstanceClick.bind(this);
  }

  handleInstanceClick() {
    if (!this.isExpanded) {
      this.isExpanded = true;
      this.$instanceContainer.show();
      this.$instanceArrowDown.hide();
      this.$instanceArrowUp.show();
    } else {
      this.isExpanded = false;
      this.$instanceContainer.hide();
      this.$instanceArrowDown.show();
      this.$instanceArrowUp.hide();
    }
  }
}
export default ExpandableCheckboxList;
