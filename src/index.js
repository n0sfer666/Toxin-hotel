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
                from: 1900,
                to:2020
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
    var mask3 = IMask(element3, maskOptions);
});
// add dropdown (guests and romms) script
import './_components/_formElements/_dropdown/dropdown';
// add datepicker
import './_components/_formElements/_dateDropdown/_dateDropdown';