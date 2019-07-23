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
            adults: NaN,
            children: NaN,
            babies: NaN,
            bedrooms: NaN,
            beds: NaN,
            bathrooms: NaN
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
            normal: "dropdown__cleanLink",
            active: "dropdown__cleanLink_active"
        },
        specifiedElement = {
            guests: NaN,
            rooms: NaN
        };

    // magic
    for(key in amount) {
        amount[key] = Number($(counter[key]).text());
        if(amount[key] > 0)
            $(btnMinus[key]).removeClass(btnClass.normal).addClass(btnClass.active);
    }
    for(key in specifiedElement)
        specifiedElement[key] = document.getElementById(cutFirstChar(container[key]));
    document.body.addEventListener("click", function(){
        doDependingOn(event.target.id);
        // remove dropdown if click was made outside the container
        for(key in specifiedElement) {
            var condition = new RegExp(capitalize(key));   
            if(!specifiedElement[key].contains(event.target))
                if(flag[key] && !condition.test(event.target.id))
                    slider(key);
        }
    });

// functions
// $(element).removeClass(classRm).addClass(classAdd);
function slider (param) {
    flag[param] = flag[param] ? false : true;
    $(container[param]).slideToggle("slow", function() {
        if(!flag[param])
            $(main[param]).removeClass(mainClass.active).addClass(mainClass.normal);
    });
    if(flag[param])
        $(main[param]).removeClass(mainClass.normal).addClass(mainClass.active);
}
function counterPlus (param) {
    if(amount[param] >= 0 && amount[param] <= 99) {
        amount[param]++;
        changeButtonClassAndTextCounter(param);
    }
}
function counterMinus (param) {
    if(amount[param] >= 1){
        amount[param]--;
        changeButtonClassAndTextCounter(param);
    }
}
function changeButtonClassAndTextCounter (param) {
    if(amount[param] == 0)
        $(btnMinus[param]).removeClass(btnClass.active).addClass(btnClass.normal);
    else
        $(btnMinus[param]).removeClass(btnClass.normal).addClass(btnClass.active);
    $(counter[param]).text(amount[param]);  
}
function doDependingOn (targetId) {
    var regExpForSearch  = new RegExp(targetId);
    if(/Plus/.test(targetId))
        for(key in btnPlus)
            if(regExpForSearch.test(btnPlus[key]))
                counterPlus(key);
    if(/Minus/.test(targetId))
        for(key in btnMinus)
            if(regExpForSearch.test(btnMinus[key]))
                counterMinus(key);
    if(/__link/.test(targetId)){
        var param = /Guests/.test(targetId) ? "guests" : "rooms";
        slider(param);
    }
}
capitalize = function(str1){
    return str1.charAt(0).toUpperCase() + str1.slice(1);
  }
})
cutFirstChar = function(str){
    return str.slice(1);
}