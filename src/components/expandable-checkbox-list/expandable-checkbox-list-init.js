import { ExpandableCheckboxList } from './expandable-checkbox-list';

$(document).ready(() => {
  const $arrayExpandableCheckboxList = $('.js-expandable-checkbox-list');

  $.each($arrayExpandableCheckboxList, (key, item) => {
    new ExpandableCheckboxList(item, key);
  });
});
