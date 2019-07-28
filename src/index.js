// add css
import './main.scss';
// add masked text field
import IMask from 'imask';
$(document).ready(function() {
    var element1 = document.getElementById('maskedTextField');
    var element2 = document.getElementById('dateDropdownLeft');
    var element3 = document.getElementById('dateDropdownRight');
    var maskOptions = {
        mask: 'd.m.y',
        lazy: true,  // make placeholder always visible

        blocks: {
            y: {
                mask: IMask.MaskedRange,
                from: 2019,
                to:2025
                },

            m: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12
                },

            d: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 31
                },
        }
    };
    var mask1 = IMask(element1, maskOptions);    
    // var mask2 = IMask(element2, maskOptions);   
    // var mask3 = IMask(element3, maskOptions);
});
// add dropdown (guests and romms) script
import './_components/_formElements/_dropdown/dropdown';
// add datepicker
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
            $("#dateDropdownRight").val(endDateText.getDate() + "." + endDateText.getMonth() + "." + endDateText.getFullYear());
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
            $("#dateDropdownLeft").val(startDateText.getDate() + "." + startDateText.getMonth() + "." + startDateText.getFullYear());
            $("#dateDropdownRight").val(endDateText.getDate() + "." + endDateText.getMonth() + "." + endDateText.getFullYear());
        }
    }).data('datepicker');

});