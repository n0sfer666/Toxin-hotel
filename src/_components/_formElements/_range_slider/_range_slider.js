$(document).ready(function() {
    var slider = document.getElementById('rangeSlider');

    noUiSlider.create(slider, {
        start: [5000, 10000],
        connect: true,
        range: {
            'min': 0,
            'max': 15000
        },
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' ₽'
        })
    });
    slider.noUiSlider.on('update', function(values, handle) {
        $("#rangeSlider__value").text(values[0] + " - " + values[1]);
    })
})