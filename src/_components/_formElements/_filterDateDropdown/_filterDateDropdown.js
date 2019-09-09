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
                    $("#filterDateDropdown").val("");
                    datepickerWrapLeft.clear();
                 });
               }
            }
         }      
    }).data('datepicker');
})