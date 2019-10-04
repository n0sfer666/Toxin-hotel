$(document).ready(function() {
    document.body.addEventListener("click", function() {
        rated(event.target.id);})
    // document.body.addEventListener("mouseover", function() {
    //     rated(event.target.id);})
})

rated = function(id) {
    var ratesId = ['','','','',''];
    if(/rateButton/.test(id)) {
        var rID = id;
        var str1 = rID.slice(15);
        for(var i=1; i<=5; i++)
            ratesId[i-1] =  "#rateButton__" + i + "__" + str1;
        var numb = id.split("__");
        if($("#" + id).hasClass("buttons__rate_normal")) 
            for(i=Number(numb[1]); i>0; i--)
                $(ratesId[i-1]).removeClass("buttons__rate_normal").addClass("buttons__rate_active");
        else 
            for(i=Number(numb[1]); i<5; i++)
                if($(ratesId[i]).hasClass("buttons__rate_active"))
                    $(ratesId[i]).removeClass("buttons__rate_active").addClass("buttons__rate_normal");
    }
}