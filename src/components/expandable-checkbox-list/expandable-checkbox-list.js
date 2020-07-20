class ExpandableCheckboxList {
  constructor(item, index) {
    this.$instance = $(item);
    this.index = index;
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
    this.$instance.on('click', this.handleInctanceClick);
  }

  bindContext() {
    this.handleInctanceClick = this.handleInctanceClick.bind(this);
  }

  handleInctanceClick() {
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
