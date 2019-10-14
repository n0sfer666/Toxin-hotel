import './elements.scss';
import './_components/_formElements/_dropdown/dropdown';
// masked text field with id="masked"
import IMask from "imask";
$(document).ready(function(){
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
    var el1 = document.getElementById("masked");
    var mask1 = IMask(el1, maskOptions);
});
import './_components/_formElements/_dateDropdown/_dateDropdown';
import './_components/_formElements/_dateDropdown/_filterDateDropdown/_filterDateDropdown';
import './_components/_formElements/_expandableCheckboxList/_expandableCheckboxList';
import './_components/_formElements/_buttons/_like/_buttons__like';
import './_components/_formElements/_buttons/_rate/_buttons_rate';
import './_components/_formElements/_range_slider/_range_slider';
import './_components/_formElements/_pagination/_pagination';
import './_components/_formElements/_review/review_image1.png';