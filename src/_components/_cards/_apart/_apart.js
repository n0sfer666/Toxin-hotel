import 'slick-carousel';
import '../../_formElements/_buttons/_rate/_buttons_rate';

$(document).ready(function(){
    $('.apart--slider').slick(
        {
        accessibility: false,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    var str = $("[id^='apart--price']");
    for(var i=0; i<str.length; i++)
        $("#" + str[i].id).text(str[i].innerText.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
});