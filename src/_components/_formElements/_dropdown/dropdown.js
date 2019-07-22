$(document).ready(function() {
// variables
    // 
    var main = {
            guests: "#_dropdownGuests",
            rooms: "#_dropdownRooms"
        },
        link = {
            guests: "#_dropdownGuests__link",
            rooms: "#_dropdownRooms__link"
        },
        text = {
            guests: "#_dropdownGuests__text",
            rooms: "#_dropdownRooms__text"
        },
        container = {
            guests: "#_dropdownGuests__container",
            rooms: "#_dropdownRooms__container"
        },
        flag = {
            guests: false,
            rooms: false
        },
        cleanLink = {
            guests: "#_dropdownGuests__cleanLink",
            rooms: "#_dropdownRooms__cleanLink"
        },
        applyLink = {
            guests: "#_dropdownGuests__applyLink",
            rooms: "#_dropdownRooms__applyLink"
        },
    // 
        btnPlus = {
            adults: "#adultsPlus",
            children: "#childrenPlus",
            babies: "#babiesPlus",
            bedrooms: "#bedroomsPlus",
            beds: "#bedsPlus",
            bathrooms: "#bathroomsPlus"
        },
        btnMinus = {
            adults: "#adultsMinus",
            children: "#childrenMinus",
            babies: "#babiesMinus",
            bedrooms: "#bedroomsMinus",
            beds: "#bedsMinus",
            bathrooms: "#bathroomsMinus"
        },
        counter = {
            adults: "#adultsCounter",
            children: "#childrenCounter",
            babies: "#babiesCounter",
            bedrooms: "#bedroomsCounter",
            beds: "#bedsCounter",
            bathrooms: "#bathroomsCounter"
        },
        amount = {
            adults: "",
            children: "",
            babies: "",
            bedrooms: "",
            beds: "",
            bathrooms: ""
        },
    // 
        btnClass = {
            normal: "buttons__plusMinus",
            active: "buttons__plusMinus_active"
        },
        mainClass = {
            normal: "dropdown",
            active: "dropdown_active"
        },
        cleanLinkClass = {
            normal: "dropdown__applyLink",
            active: "dropdown__applyLink_active"
        };

    // magic
    for(key in amount) {
        amount[key] = Number($(counter[key]).text());
    }
    $(link.guests).click(function(){
        slider(true);
    });
    $(link.rooms).click(function(){
        slider(false);
    });
    document.body.addEventListener("click", function(){
        var currentTurgetId = event.target.id;
        if(currentTurgetId != "")
            console.log(currentTurgetId);
    })
    // for(key in btnPlus) {
    //     console.log("btnPlus[" + key + "]: " + btnPlus[key]);
    // }

// functions
// $(element).removeClass(classRm).addClass(classAdd);
function slider (isGuest) {
    var type = "guests" ? "guests" : "rooms";
    flag[type] = flag[type] ? false : true;
    $(container[type]).slideToggle("slow", function() {
        if(!flag[type])
            $(main[type]).removeClass(mainClass.active).addClass(mainClass.normal);
    });
    if(flag[type])
        $(main[type]).removeClass(mainClass.normal).addClass(mainClass.active);
}

});