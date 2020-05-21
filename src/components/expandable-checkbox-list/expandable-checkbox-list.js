class ExpandableCheckboxList {
  constructor(item, index) {
    this.$instance = $(item);
    this.index = index;

    this.$instanceContainer = this.$instance.siblings('.js-expandable-checkbox-list__container').hide();
    
    this.$instanceArrowDown = this.$instance.find(`.js-expandable-checkbox-list__arrow-down`);
    this.$instanceArrowUp = this.$instance.find(`.js-expandable-checkbox-list__arrow-up`).hide();

    this.isExpanded = false;

    this.bindListenner();
  }

  bindListenner() {
    this.$instance.on('click', () => {
      this.clickHandler();
    })
  }
  clickHandler() {
    if(!this.isExpanded) {
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
export { ExpandableCheckboxList };