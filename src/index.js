// add css
import './main.scss';
// add masked text field
import IMask from 'imask';
$(document).ready(function() {
    var element = document.getElementById('maskedTextField');
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
    var mask = IMask(element, maskOptions);    
})
// add dropdown (guests and romms) script
import './_components/_formElements/_dropdown/dropdown';
// add datepicker

