import 'paginationjs';
import Room from '../room/room';

class Pagination {
  constructor(item, dataSource, dataOutput) {
    this.$element = $(item);
    this.dataOutput = dataOutput;
    this.elementsOnPage = 12;

    this.initDataSource(dataSource);
    this.bindContext();
    this.initInstance();
  }

  getConfig() {
    const { dataSource } = this;

    return {
      dataSource,
      showPrevious: false,
      nextText: '',
      pageRange: 1,
      pageSize: this.elementsOnPage,
      showNavigator: true,

      formatNavigator: this.handlePaginationPageClick,
      callback: this.callback,
    };
  }

  initDataSource(dataSource) {
    const demoSource = Array(200).fill('');
    this.dataSource = dataSource.length > 0
      ? dataSource
      : demoSource;
  }

  initInstance() {
    this.pagination = this.$element.pagination(this.getConfig());
  }

  bindContext() {
    this.handlePaginationPageClick = this.handlePaginationPageClick.bind(this);
    this.callback = this.callback.bind(this);
  }

  callback(data) {
    const html = data;
    if (this.dataOutput) $(this.dataOutput).html(html);
    const $rooms = $('.js-room__slider');
    $.each($rooms, (_, roomElement) => {
      new Room(roomElement);
    });
  }

  handlePaginationPageClick(currentPage, totalPage, totalNumber) {
    const first = this.elementsOnPage * currentPage - (this.elementsOnPage - 1);
    const last = (this.elementsOnPage * currentPage) > totalNumber
      ? totalNumber
      : this.elementsOnPage * currentPage;
    const total = totalNumber > 100 ? '100+' : totalNumber;

    return String(`${first} - ${last} из ${total} вариантов аренды`);
  }
}

export default Pagination;
