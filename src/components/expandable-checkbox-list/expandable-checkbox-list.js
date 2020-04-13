class ExpandableCheckboxList {
  constructor(uniqueName) {
    this.$expandList = $(`.js-${uniqueName}-expandable-checkbox-list`);
    this.$expandContainer = $(`.js-${uniqueName}-expandable-checkbox-list__container`).hide();
    this.$arrowDown = $(`.js-${uniqueName}-expandable-checkbox-list__arrow-down`);
    this.$arrowUp = $(`.js-${uniqueName}-expandable-checkbox-list__arrow-up`).hide();
    this.isExpanded = false;

    this.bindListenner();
  }

  bindListenner() {
    this.$expandList.on('click', () => {
      this.clickHandler();
    })
  }
  clickHandler() {
    if(!this.isExpanded) {
      this.isExpanded = true;
      this.$expandContainer.show();
      this.$arrowDown.hide();
      this.$arrowUp.show();

    } else {
      this.isExpanded = false;
      this.$expandContainer.hide();
      this.$arrowDown.show();
      this.$arrowUp.hide();
    }
  }
}
export { ExpandableCheckboxList };