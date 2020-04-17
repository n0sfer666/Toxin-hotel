import { Dropdown } from '../../components/dropdown/dropdown';
import { DateDropdown } from '../../components/date-dropdown/date-dropdown';
import { MaskedField } from '../../components/masked-text-field/masked-text-field';
import { Pagination } from '../../components/pagination/pagination';
import { ExpandableCheckboxList } from '../../components/expandable-checkbox-list/expandable-checkbox-list';

$(document).ready(() => {
  let dropdownGuests = new Dropdown('form-elements-guests');
  let dropdownRooms = new Dropdown('form-elements-rooms');
  let datepickerMulti = new DateDropdown('form-elements', false);
  let datepickerSingle = new DateDropdown('form-elements', true);
  let maskedField = new MaskedField('masked');
  let expandList = new ExpandableCheckboxList('form-elements');
  let pagination = new Pagination('form-elements');
});
