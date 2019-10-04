import 'paginationjs';
$(document).ready(function() {
    var array = [];
    for(var i=0; i<200; i++)
        array.push(i);
    $('#pagination').pagination({
        dataSource: array,
        showPrevious: false,
        nextText: "",
        pageRange: 1,
        pageSize: 12,
        showNavigator: true,
        formatNavigator: '<%= currentPage %>, <%= totalPage %> pages, <%= totalNumber %> entries'
    })
})