import IMask from 'imask';

class MaskedField {
  constructor(uniqueName) {
    this.$maskedElement = $(`.js-${uniqueName}-text-field`).get(0);
    this.config = this.getConfig();
    this.maskedField = IMask(this.$maskedElement, this.config);
  }

  getConfig() {
    let year = new Date().getFullYear();
    
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
    }
  }
}

export { MaskedField };