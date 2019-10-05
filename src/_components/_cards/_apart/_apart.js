import './img/888/888-1.png';
import './img/888/888-2.png';
import './img/888/888-3.png';
import './img/888/888-4.png';
import './img/840/840-1.png';
import './img/840/840-2.png';
import './img/840/840-3.png';
import './img/840/840-4.png';
import 'slick-carousel';
import '../../_formElements/_buttons/_rate/_buttons_rate';

$(document).ready(function(){
    $('.apart__slider').slick(
        {
        accessibility: false,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    var str = $("[id^='apart__price']");
    for(var i=0; i<str.length; i++)
        $("#" + str[i].id).text(str[i].innerText.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  });