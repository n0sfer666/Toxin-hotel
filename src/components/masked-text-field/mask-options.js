import IMask from 'imask';

const maskOptions = {
  mask: 'd.m.y',
  lazy: true, // make placeholder always visible

  blocks: {
    y: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: 2020,
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
export { maskOptions, IMask };
