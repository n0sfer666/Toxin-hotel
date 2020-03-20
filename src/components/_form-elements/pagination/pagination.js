import 'paginationjs';
let getPaginationConfig = function(dataSource, dataOutput, elementsOnPage, callback) {
	return {
		dataSource: dataSource,
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
		callback: function(data) {
			var html = data;
			$(dataOutput).html(html);
			if(callback)
				callback();
		}
	}
}

export {getPaginationConfig};