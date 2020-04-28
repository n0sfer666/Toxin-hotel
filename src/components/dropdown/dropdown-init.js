import {Dropdown} from './dropdown';
$(document).ready(function() {
  let bookingDropdown = new Dropdown('booking');
  let findApartDropdown = new Dropdown('find-apart');
  let formElementsDropdownGuests = new Dropdown('form-elements-guests');
  let formElementsDropdownRooms = new Dropdown('form-elements-rooms');
  let searchRoomDropdownGuests = new Dropdown(`search-room-guests`);
  let searchRoomDropdownRooms = new Dropdown(`search-room-rooms`);
})