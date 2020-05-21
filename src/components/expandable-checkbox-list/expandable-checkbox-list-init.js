import { ExpandableCheckboxList } from './expandable-checkbox-list';
$(document).ready(function() {
  const $arrayExpandableCheckboxList = $('.js-expandable-checkbox-list');

  $.each($arrayExpandableCheckboxList, (key, item) => {
    new ExpandableCheckboxList(item, key);
  })
})