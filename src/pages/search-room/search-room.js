import './search-room.scss';
import '../../_components/_formElements/_dropdown/dropdown';
import '../../_components/_formElements/_dateDropdown/_filterDateDropdown/_filterDateDropdown';
import '../../_components/_formElements/_range_slider/_range_slider';
import '../../_components/_formElements/_expandableCheckboxList/_expandableCheckboxList';
import '../../_components/_cards/_apart/_apart';


import 'paginationjs';
$(document).ready(function() {
    var testA = $('div[class="apart__container"');
    var array = [];
    var elementsOnPage = 12;
    for(var j=0; j < 8; j++)
        for(var i=0; i<testA.length; i++)
            array.push(testA[i]);
    $('#searchRoom__pagination').pagination({
        dataSource: array,
        // locator: "",
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
        },
        callback: function(data, pagination) {
            // template method of yourself
            var html = data;
            $('#searchRoom__data').html(html);
        }
    });
})