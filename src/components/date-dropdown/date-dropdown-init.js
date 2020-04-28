import {DateDropdown} from './date-dropdown';
$(document).ready(function() {
  let findApartDatepicker = new DateDropdown('find-apart', false);
  let formElementsDatepickerMulti = new DateDropdown('form-elements', false);
  let formElementsDatepickerSingle = new DateDropdown('form-elements', true);
  let datepickerSearch = new DateDropdown('search-room', true);
})