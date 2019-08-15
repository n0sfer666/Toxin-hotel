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
        cleanLink = "#_dropdownGuests__cleanLink",
        applyLink = "#_dropdownGuests__applyLink",
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
        if(amount[key] > 0 && !(key == "bedrooms" || key == "beds"))
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
function slider (param) {
    flag[param] = flag[param] ? false : true;
    $(container[param]).slideToggle("fast", function() {
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
        changeTextInRoomsContainer();
    }
}
function counterMinus (param) {
    if(amount[param] >= 1){
        if(param == "adults" || param == "children" || param == "babies" || param == "bathrooms"){
            amount[param]--;
            changeButtonClassAndTextCounter(param);
        }
        else if(amount[param] >= 2) {
            amount[param]--;
            changeButtonClassAndTextCounter(param);
            changeTextInRoomsContainer();
            if(amount[param] == 1)
                $(btnMinus[param]).removeClass(btnClass.active).addClass(btnClass.normal);
        }
    }
}
function changeButtonClassAndTextCounter (param) {
    if(amount[param] == 0)
        $(btnMinus[param]).removeClass(btnClass.active).addClass(btnClass.normal);
    else
        $(btnMinus[param]).removeClass(btnClass.normal).addClass(btnClass.active);
    $(counter[param]).text(amount[param]);  
}
function changeTextInRoomsContainer () {
    if(amount["bedrooms"] == 1) {
        bedsCountAndChangeText("спальня");
    }
    if(amount["bedrooms"] > 1 && amount["bedrooms"] < 5) {
        bedsCountAndChangeText("спальни");
    }
    if(amount["bedrooms"] >= 5) {
        bedsCountAndChangeText("спален");
    }
    function bedsCountAndChangeText(str) {
        if(amount["beds"] == 1) {
            changeText(str, "кровать");
        }
        if(amount["beds"] > 1 && amount["beds"] < 5) {
            changeText(str, "кровати");
        }
        if(amount["beds"] >= 5) {
            changeText(str, "кроватей");
        }
        function changeText(str1, str2) {
            $(link.rooms).text(amount.bedrooms + " " + str1 + ", " + amount.beds + " " + str2 + "...");
        }
    }
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
    if(/[^drop]__link/.test(targetId)){
        var param = /Guests/.test(targetId) ? "guests" : "rooms";
        slider(param);
    }
    if(/__applyLink/.test(targetId))
        resultCountGuests();    
    if(/__cleanLink/.test(targetId)){
        amount.adults = 0, amount.babies = 0, amount.children = 0;
        $(link.guests).text('Сколько гостей');
        $(counter.adults).text(amount.adults);
        $(counter.children).text(amount.children);
        $(counter.babies).text(amount.babies);
        $(cleanLink).removeClass(cleanLinkClass.active).addClass(cleanLinkClass.normal);
    }
}
function resultCountGuests() {
    var sum = amount.adults + amount.children;
    if(sum == 1) {
        countGuests(sum, 'гость');
    }
    if(sum > 1 && sum < 5) {
        countGuests(sum, 'гостя');
    }
    if( sum >= 5) {
        countGuests(sum, 'гостей');
    }
}
function countGuests(sum, str1) {
    $(link.guests).text(sum + ' ' + str1 + countBabies());
    $(cleanLink).removeClass(cleanLinkClass.normal).addClass(cleanLinkClass.active);
}
function countBabies() {
    if (amount.babies == 0) {
        return '';
    }
    if(amount.babies == 1) {
        return ', ' + amount.babies + ' младенец';
    }
    if(amount.babies > 1 && amount.babies < 5) {
        return ', ' + amount.babies + ' младенца';
    }
    if(amount.babies >= 5) {
        return ', ' + amount.babies + ' младенцев';
    }
}
})
capitalize = function(str1){
    return str1.charAt(0).toUpperCase() + str1.slice(1);
}
cutFirstChar = function(str1){
    return str1.slice(1);
}