import iMask from 'imask';
$(document).ready(function() {
    var elem1 = document.getElementById('birthday')
    var maskOptions = {
        mask: 'd.m.y',
        lazy: true,  // make placeholder always visible

        blocks: {
            y: {
                mask: IMask.MaskedRange,
                from: 1900,
                to:2030
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
    var mask1 = IMask(elem1, maskOptions);
});