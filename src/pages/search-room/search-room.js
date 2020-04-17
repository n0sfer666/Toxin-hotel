
import { DateDropdown } from '../../components/date-dropdown/date-dropdown';
import { Dropdown } from '../../components/dropdown/dropdown';
import { setSlick } from '../../components/apart/apart';
import { Pagination } from '../../components/pagination/pagination';
import { ExpandableCheckboxList } from '../../components/expandable-checkbox-list/expandable-checkbox-list';
import { RangeSlider } from '../../components/range-slider/range-slider';

$(document).ready(function() {
  const uniqueName = 'search-room';

  let datepickerSearch = new DateDropdown(uniqueName, true);

  let dropdownGuestsSearch = new Dropdown(`${uniqueName}-guests`);
  let dropdownRoomsSearch = new Dropdown(`${uniqueName}-rooms`);

  let expandListSearch = new ExpandableCheckboxList(uniqueName);

  let rangeSliderSearch = new RangeSlider(uniqueName);

  const $apartSource = $('.js-search-room-apart');  
  
  const dataSource = [];
  for( let i = 0; i < $apartSource.length; i += 1 ) {
    dataSource.push($apartSource[String(i)]);
  }  
  $('.js-search-room-data-source').remove();
  const paginationSearch = new Pagination(uniqueName, dataSource, 12, '.js-search-room-data-output', setSlick);
  
})