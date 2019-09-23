import 'air-datepicker';
$(document).ready(function() {
    function getValue (DateText) {
        var day = DateText.getDate();
        var month = DateText.getMonth();
        var year =  DateText.getFullYear();
        day = (day < 10) ? ("0" + day) : day ;
        month = (month < 10) ? ("0" + (month + 1)) : (month + 1) ;
        return (day + "." + month + "." + year);
    };
    let datepickerWrapLeft = $('#dateDropdownLeft').datepicker({
        language: "ru",
        minDate: new Date(),
        range: true,
        multipleDays: 2,
        inline: false,
        prevHtml: "<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z' fill='#BC9CFF'/></svg>",
        nextHtml: "<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z' fill='#BC9CFF'/></svg>",
        toggleSelected: true,
        dateFormat: "dd.mm.yyyy",
        navTitles: {
            days: 'MM yyyy'
        },
        onSelect: function(fd, startDateText, endDateText) {
            startDateText = datepickerWrapLeft.selectedDates[0];
            endDateText = datepickerWrapLeft.selectedDates[1];
            $("#dateDropdownLeft").val(getValue(startDateText));
            $("#dateDropdownRight").val(getValue(endDateText));
        },
        onShow: function (dp, animationCompleted) {
            if (!animationCompleted) {
               if (dp.$datepicker.find('h3').html()===undefined) { /*ONLY when button don't existis*/
                  dp.$datepicker.append('<button type="button" class="datepicker__clearLink">Очистить</button>');
                  dp.$datepicker.append('<h3 href="#" class="datepicker__applyLink">Применить</h3>');
                  dp.$datepicker.find('h3').click(function(event) {
                     dp.hide();
                  });
                  dp.$datepicker.find('button').click(function(event) {
                    $("#dateDropdownLeft").val("");
                    $("#dateDropdownRight").val("");
                    datepickerWrapLeft.clear();
                 });
               }
            }
         }
    }).data('datepicker');
    let datepickerWrapRight = $('#dateDropdownRight').datepicker({
        language: "ru",
        minDate: new Date(),
        range: true,
        multipleDays: 2,
        inline: false,
        prevHtml: "<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z' fill='#BC9CFF'/></svg>",
        nextHtml: "<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z' fill='#BC9CFF'/></svg>",
        toggleSelected: true,
        formatDate: "dd.mm.yyyy",
        navTitles: {
            days: 'MM yyyy'
        },
        onSelect: function(fd, startDateText, endDateText) {
            startDateText = datepickerWrapRight.selectedDates[0];
            endDateText = datepickerWrapRight.selectedDates[1];
            $("#dateDropdownLeft").val(getValue(startDateText));
            $("#dateDropdownRight").val(getValue(endDateText));
        },
        onShow: function (dp, animationCompleted) {
            if (!animationCompleted) {
               if (dp.$datepicker.find('h3').html()===undefined) { /*ONLY when button don't existis*/
                  dp.$datepicker.append('<button type="button" class="datepicker__clearLink">Очистить</button>');
                  dp.$datepicker.append('<h3 href="#" class="datepicker__applyLink">Применить</h3>');
                  dp.$datepicker.find('h3').click(function(event) {
                     dp.hide();
                  });
                  dp.$datepicker.find('button').click(function(event) {
                    $("#dateDropdownLeft").val("");
                    $("#dateDropdownRight").val("");
                    datepickerWrapLeft.clear();
                 });
               }
            }
         }
    }).data('datepicker');
});