class ExpandableCheckboxList {
  constructor(item, index) {
    this.$instance = $(item);
    this.index = index;

    this.$instanceContainer = this.$instance.siblings('.js-expandable-checkbox-list__container').hide();

    this.$instanceArrowDown = this.getInnerElement('.js-expandable-checkbox-list__arrow-down');
    this.$instanceArrowUp = this.getInnerElement('.js-expandable-checkbox-list__arrow-up').hide();

    this.isExpanded = false;

    this.bindHandlers();
  }

  getInnerElement(innerSelector) {
    return this.$instance.find(innerSelector);
  }

  bindHandlers() {
    const handleInctanceClick = this.handleInctanceClick.bind(this);
    this.$instance.on('click', handleInctanceClick);
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
