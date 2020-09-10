import ExpandableCheckboxList from './expandable-checkbox-list';

$(document).ready(() => {
  const $expandableCheckboxLists = $('.js-expandable-checkbox-list');

  $.each($expandableCheckboxLists, (_, element) => {
    new ExpandableCheckboxList(element);
  });
});
