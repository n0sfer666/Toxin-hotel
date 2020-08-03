import ExpandableCheckboxList from './expandable-checkbox-list';

$(document).ready(() => {
  const $expandableCheckboxLists = $('.js-expandable-checkbox-list');

  $.each($expandableCheckboxLists, (key, item) => {
    new ExpandableCheckboxList(item, key);
  });
});
