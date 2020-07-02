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

    const config = this.getConfig();

    this.pagination = this.$instance.pagination(config);
  }

  getConfig() {
    const { dataSource } = this;
    const { elementsOnPage } = this;
    const config = {
      dataSource,
      showPrevious: false,
      nextText: '',
      pageRange: 1,
      pageSize: elementsOnPage,
      showNavigator: true,
    };

    const formatNavigator = this.formatNavigator.bind(this);
    config.formatNavigator = formatNavigator;

    const callback = this.callback.bind(this);
    config.callback = callback;

    return config;
  }

  callback(data) {
    const html = data;
    if (this.dataOutput) $(this.dataOutput).html(html);
    const $arrayApartComponents = $('.js-apart__slider');
    $.each($arrayApartComponents, (key, item) => {
      const instance = new Apart(item, key);
    });
  }

  formatNavigator(currentPage, totalPage, totalNumber) {
    const first = this.elementsOnPage * currentPage - (this.elementsOnPage - 1);
    const last = (this.elementsOnPage * currentPage) > totalNumber
      ? totalNumber
      : this.elementsOnPage * currentPage;
    const total = totalNumber > 100 ? '100+' : totalNumber;

    return String(`${first} - ${last} из ${total} вариантов аренды`);
  }
}

export default Pagination;
