$(document).ready(function() {
    var ratesId = ['','','','',''];
    for(var i=1; i<=5; i++)
        ratesId[i-1] = "#rateButton__" + i + "__test";
    document.body.addEventListener("click", function() {
        if(/rateButton/.test(event.target.id)) {
            var numb = event.target.id.split("__");
            if($("#" + event.target.id).hasClass("buttons__rate_normal")) 
                for(i=Number(numb[1]); i>0; i--)
                    $(ratesId[i-1]).removeClass("buttons__rate_normal").addClass("buttons__rate_active");
            else 
                for(i=Number(numb[1]); i<5; i++)
                    if($(ratesId[i]).hasClass("buttons__rate_active"))
                        $(ratesId[i]).removeClass("buttons__rate_active").addClass("buttons__rate_normal");
        }
    })
})