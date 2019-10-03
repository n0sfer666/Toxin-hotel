import './img/888/888-1.png';
import './img/888/888-2.png';
import './img/888/888-3.png';
import './img/888/888-4.png';
import 'slick-carousel';

$(document).ready(function(){
    $('.apart__slider').slick(
        {
        accessibility: false,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true
    }
    );
  });