import 'air-datepicker';
$(document).ready(function(){
    let filterDatePicker = $('#filterDateDropdown').datepicker({
        language: "ru",
        minDate: new Date(),
        range: true,
        multipleDays: 2,
        multipleDatesSeparator: " - ",
        inline: false,
        dateFormat: "dd.mm.yyyy",
        navTitles: {
            days: 'MM yyyy'
        }        
    }).data('datepicker');
})