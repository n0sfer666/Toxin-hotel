$(document).ready(function(){
    var flag = false;
    $("#_dropdownGuests__link").click(function(){
        flag = flag ? false : true;
        $("#_dropdownGuests__container").slideToggle("slow", function(){
            
        console.log(flag);
            if(!flag)
            $("#_dropdownGuests").removeClass("dropdown_active").addClass("dropdown");
                
        });
        if(flag)
            $("#_dropdownGuests").removeClass("dropdown").addClass("dropdown_active");
    })
})