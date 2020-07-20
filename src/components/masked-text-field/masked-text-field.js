import IMask from 'imask';

class MaskedField {
  constructor(item, index) {
    this.maskedElement = item;
    this.index = index;

    this.initInstance();
  }

  getConfig() {
    const year = new Date().getFullYear();

    return {
      mask: 'd.m.y',
      lazy: true,

      blocks: {
        y: {
          mask: IMask.MaskedRange,
          from: 1900,
          to: year,
        },

        m: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
        },

        d: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 31,
        },
      },
    };
  }

  initInstance() {
    this.maskedField = IMask(this.maskedElement, this.getConfig());
  }
}

export default MaskedField;
