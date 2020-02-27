import 'paginationjs';
$(document).ready(function() {
    var array = [];
    var elementsOnPage = 12;
    for(var i=0; i<200; i++)
        array.push(i);
    $('#pagination').pagination({
        dataSource: array,
        showPrevious: false,
        nextText: "",
        pageRange: 1,
        pageSize: elementsOnPage,
        showNavigator: true,
        formatNavigator: function(currentPage, totalPage, totalNumber) {
            var first= elementsOnPage * currentPage - (elementsOnPage - 1), 
                last = elementsOnPage * currentPage, 
                total= totalNumber > 100 ? "100+" : totalNumber;
                if(last>totalNumber)
                    last = totalNumber;
            return String(first + " - " + last + " из " + total + " вариантов аренды");
        }
    })
})