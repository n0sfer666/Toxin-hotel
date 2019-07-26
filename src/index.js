// add css
import './main.scss';
// add masked text field
import IMask from 'imask';
$(document).ready(function() {
    var element1 = document.getElementById('maskedTextField');
    var element2 = document.getElementById('dateDropdownLeft');
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
    var mask2 = IMask(element2, maskOptions);   
});
// add dropdown (guests and romms) script
import './_components/_formElements/_dropdown/dropdown';
// add datepicker
import 'air-datepicker';
$(document).ready(function() {
    $('#dateDropdownLeft').datepicker({
        language: {
            days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
            daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
            daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
            today: 'Сегодня',
            clear: 'Очистить',
            dateFormat: 'dd.mm.yyyy',
            timeFormat: 'hh:ii',
            firstDay: 1
        },
            minDate: new Date(),
            navTitles: {
                days: 'MM yyyy'
            },
            clearButton: true,
            onShow: function (dp, animationCompleted) {
                if (!animationCompleted) {
                   if (dp.$datepicker.find('button').html()===undefined) { /*ONLY when button don't existis*/
                      dp.$datepicker.append('<button type="button" class="uk-button uk-button-default uk-button-small uk-width-1-1 uk-margin-small-bottom" disabled="disabled"><i class="fas fa-check"></i> Ready</button>');
                      dp.$datepicker.find('button').click(function(event) {
                         dp.hide();
                      });
                   }
                }
             },
             onSelect: function (formattedDate, date, dp) {
                if (formattedDate.length>0) {
                   dp.$datepicker.find('button').prop('disabled', false).removeClass('uk-button-default').addClass('uk-button-primary');
                } else {
                   dp.$datepicker.find('button').prop('disabled', true).removeClass('uk-button-primary').addClass('uk-button-default');
                }
             }
    });

});