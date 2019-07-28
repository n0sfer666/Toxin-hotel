import 'air-datepicker';
$(document).ready(function() {
    function getValue (DateText) {
        var day = DateText.getDate();
        var month = DateText.getMonth();
        var year =  DateText.getFullYear();
        day = (day < 10) ? ("0" + day) : day ;
        month = (month < 10) ? ("0" + month) : month ;
        return (day + "." + month + "." + year);
    };
    let datepickerWrapLeft = $('#dateDropdownLeft').datepicker({
        language: "ru",
        minDate: new Date(),
        range: true,
        multipleDays: 2,
        inline: false,
        dateFormat: "dd.mm.yyyy",
        navTitles: {
            days: 'MM yyyy'
        },
        onSelect: function(fd, startDateText, endDateText) {
            startDateText = datepickerWrapLeft.selectedDates[0];
            endDateText = datepickerWrapLeft.selectedDates[1];
            $("#dateDropdownLeft").val(getValue(startDateText));
            $("#dateDropdownRight").val(getValue(endDateText));
        }
    }).data('datepicker');
    let datepickerWrapRight = $('#dateDropdownRight').datepicker({
        language: "ru",
        minDate: new Date(),
        range: true,
        multipleDays: 2,
        inline: false,
        formatDate: "dd.mm.yyyy",
        navTitles: {
            days: 'MM yyyy'
        },
        onSelect: function(fd, startDateText, endDateText) {
            startDateText = datepickerWrapRight.selectedDates[0];
            endDateText = datepickerWrapRight.selectedDates[1];
            $("#dateDropdownLeft").val(getValue(startDateText));
            $("#dateDropdownRight").val(getValue(endDateText));
        }
    }).data('datepicker');
});