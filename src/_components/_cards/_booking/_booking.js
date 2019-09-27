import 'air-datepicker';
import '../../_formElements/_dropdown/dropdown'
$(document).ready(function() {
    var daysOfStay;
    var price = Number($("#booking__price").text());
    var discount = Number($("#booking__discount").text());
    var str = $("#booking__complementary").text();
    var complementary = Number(str.substring(0, str.length - 1));
    str = $("#booking__additional").text();
    var additional = Number(str.substring(0, str.length - 1));
    var separator = [["#booking__price", "#booking__priceCalc", "#booking__discount"],["#booking__cost", "#booking__additional", "#booking__complementary", "#booking__total"]];
    for(var i=0; i <= separator[0].length - 1; i++) {
        str = $(separator[0][i]).text();
        $(separator[0][i]).text(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    }
    var options = {
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
            daysOfStay = endDateText != undefined ? (Number(endDateText) - Number(startDateText)) / 1000 / 60 / 60 / 24 : 0;
            $("#dateDropdownLeft").val(getValue(startDateText));
            $("#dateDropdownRight").val(getValue(endDateText));
        },
        onShow: function (dp, animationCompleted) {
            if (!animationCompleted) {
               if (dp.$datepicker.find('h3').html()===undefined) { /*ONLY when button don't existis*/
                  dp.$datepicker.append('<button type="button" class="datepicker__clearLink">Очистить</button>');
                  dp.$datepicker.append('<h3 href="#" class="datepicker__applyLink">Применить</h3>');
                  dp.$datepicker.find('h3').click(function(event) {
                    if(daysOfStay == 1)
                        $("#booking__daysOfStay").text(daysOfStay + " сутки");
                    else if(daysOfStay >= 2)
                        $("#booking__daysOfStay").text(daysOfStay + " суток");
                    var cost = daysOfStay*price;
                    $("#booking__cost").text(cost + "₽");
                    $("#booking__total").text(cost - discount + additional + complementary + "₽");
                    for(var i=0; i <= separator[1].length - 1; i++) {
                        str = $(separator[1][i]).text();
                        $(separator[1][i]).text(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
                    }
                    dp.hide();
                  });
                  dp.$datepicker.find('button').click(function(event) {
                    $("#dateDropdownLeft").val("");
                    $("#dateDropdownRight").val("");
                    datepickerWrapLeft.clear();
                    datepickerWrapRight.clear();
                 });
               }
            }
         }
    }
    function getValue (DateText) {
        var day = DateText.getDate();
        var month = DateText.getMonth();
        var year =  DateText.getFullYear();
        day = (day < 10) ? ("0" + day) : day ;
        month = (month < 9) ? ("0" + (month + 1)) : (month + 1);
        return (day + "." + month + "." + year);
    };
    let datepickerWrapLeft = $('#dateDropdownLeft').datepicker(options).data('datepicker');
    let datepickerWrapRight = $('#dateDropdownRight').datepicker(options).data('datepicker');
});