import 'paginationjs';
$(document).ready(function() {
    var array = [];
    for(var i=0; i<200; i++)
        array.push(i);
    $('#pagination').pagination({
        dataSource: array,
        showPrevious: false,
        nextText: "",
    })
})