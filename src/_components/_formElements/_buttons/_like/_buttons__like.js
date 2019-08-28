$(document).ready(function() {
    var counter = {
        id: NaN,
        count: NaN
    }
    document.body.addEventListener("click", function(){
        if(/likeButton/.test(event.target.id)) {
            counter.id = event.target.id;
            if(/container/.test(event.target.id))
                var str1 = counter.id.slice(21);
            else
                var str1 = counter.id.slice(19);
            var containerId = "#likeButton__container" + str1;
            counter.id = "#likeButton__counter" + str1;
            counter.count = Number($(counter.id).text());
            if($(containerId).hasClass("buttons__like-container_normal")) {
                counter.count++;
                $(containerId).removeClass("buttons__like-container_normal").addClass("buttons__like-container_active");
                $(counter.id).removeClass("buttons__like-counter_normal").addClass("buttons__like-counter_active");
            }
            else if($(containerId).hasClass("buttons__like-container_active")) {
                counter.count--;
                $(containerId).removeClass("buttons__like-container_active").addClass("buttons__like-container_normal");
                $(counter.id).removeClass("buttons__like-counter_active").addClass("buttons__like-counter_normal");
            }
            $(counter.id).text(counter.count);
        }
    })
})