import 'paginationjs';

const getPaginationConfig = function (dataSource, dataOutput, elementsOnPage, callback) {
  return {
    dataSource,
    showPrevious: false,
    nextText: '',
    pageRange: 1,
    pageSize: elementsOnPage,
    showNavigator: true,
    formatNavigator(currentPage, totalPage, totalNumber) {
      const first = elementsOnPage * currentPage - (elementsOnPage - 1);
      let last = elementsOnPage * currentPage;
      const total = totalNumber > 100 ? '100+' : totalNumber;
      if (last > totalNumber) { last = totalNumber; }
      return String(`${first} - ${last} из ${total} вариантов аренды`);
    },
    callback(data) {
      const html = data;
      $(dataOutput).html(html);
      if (callback) { callback(); }
    },
  };
};

export { getPaginationConfig };
