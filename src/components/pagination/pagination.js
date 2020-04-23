import 'paginationjs';

class Pagination {
  constructor(uniqueName, dataSource, elementsOnPage, dataOutput, callback) {
    this.uniqueName = uniqueName;

    let demoSource = [];
    for(let i = 0; i < 200; i += 1)
      demoSource.push(i);
    this.dataSource = dataSource === undefined
      ? demoSource
      : dataSource;

    this.elementsOnPage = elementsOnPage == undefined
      ? 12
      : elementsOnPage;

    this.dataOutput = dataOutput;

    this.callback = callback;

    let config = this.getConfig(
      this.dataSource, 
      this.elementsOnPage, 
      this.dataOutput, 
      this.callback);
    
    this.$paginationElement = $(`.js-${this.uniqueName}-pagination`);
    let isNotUndefined = this.$paginationElement.length > 0;

    if(isNotUndefined)
      this.pagination = this.$paginationElement.pagination(config);
  }

  getConfig(dataSource, elementsOnPage, dataOutput, callback) {
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
        if(dataOutput) $(dataOutput).html(html);
        if(callback) callback();
      }
    }
  }
}

export { Pagination };