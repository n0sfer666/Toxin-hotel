import 'paginationjs';
import { Apart } from '../apart/apart';

class Pagination {
  constructor(item, index, dataSource, dataOutput) {
    this.$instance = $(item);
    this.index = index;

    const demoSource = [];
    for (let i = 0; i < 200; i += 1) {
      demoSource.push(i);
    }

    this.dataSource = dataSource.length > 1
      ? dataSource
      : demoSource;

    this.elementsOnPage = 12;

    this.dataOutput = dataOutput;

    const config = this.getConfig(
      this.dataSource,
      this.elementsOnPage,
      this.dataOutput,
    );

    this.pagination = this.$instance.pagination(config);
  }

  getConfig(dataSource, elementsOnPage, dataOutput) {
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
        if (dataOutput) $(dataOutput).html(html);
        const $arrayApartComponents = $('.js-apart__slider');
        $.each($arrayApartComponents, (key, item) => {
          new Apart(item, key);
        });
      },
    };
  }
}

export default Pagination;
