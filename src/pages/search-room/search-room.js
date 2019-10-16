import './search-room.scss';
import '../../_components/_formElements/_dropdown/dropdown';
import '../../_components/_formElements/_dateDropdown/_filterDateDropdown/_filterDateDropdown';
import '../../_components/_formElements/_range_slider/_range_slider';
import '../../_components/_formElements/_expandableCheckboxList/_expandableCheckboxList';
import '../../_components/_cards/_apart/_apart';
import 'paginationjs';
$(document).ready(function() {
    var dataContainer = document.getElementById('searchRoom__data');
    var array = [];
    for(var i=0; i<200; i++)
        array.push(i);
    $('#searchRoom__pagination').pagination({
        dataSource: array,
        showPrevious: false,
        nextText: "",
        pageRange: 1,
        pageSize: 12,
        showNavigator: true,
        formatNavigator: '<br><br><br><%= currentPage %>, <%= totalPage %> pages, <%= totalNumber %> entries',
        callback: function(data, pagination) {
            // template method of yourself
            var html = simpleTemplating(data);
            $('#searchRoom__data').html(html);
        }
    });
    function simpleTemplating(data) {
        var html = '<ul>';
        $.each(data, function(index, item){
            html += '<li>'+ item +'</li>';
        });
        html += '</ul>';
        return html;
    }
})