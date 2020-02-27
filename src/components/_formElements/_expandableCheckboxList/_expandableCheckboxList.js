$(document).ready(function() {
    var flag = false;
    document.body.addEventListener('click', function() {
        if(event.target.id == "expList__link"){
            flag = flag ? false : true;
            $("#expList__container").slideToggle("fast", function() {
                if(!flag)
                    $(".expandableCheckboxList__link").removeClass("expandableCheckboxList__link_deactive").addClass("expandableCheckboxList__link_active"); 
            });
        if(flag)
            $(".expandableCheckboxList__link").removeClass("expandableCheckboxList__link_active").addClass("expandableCheckboxList__link_deactive");
        };
    });
});