import { datepicker } from 'air-datepicker';

const getFormattedDate = function (DateText) {
  let day = DateText.getDate();
  let month = DateText.getMonth();
  const year = DateText.getFullYear();
  day = (day < 10) ? (`0${day}`) : day;
  month = (month < 9) ? (`0${month + 1}`) : (month + 1);
  return (`${day}.${month}.${year}`);
};

function getDatepickerConfig(leftClass, rightClass, getDaysIn) {
  return {
    language: 'ru',
    minDate: new Date(),
    range: true,
    multipleDays: 2,
    multipleDatesSeparator: ' - ',
    inline: false,
    prevHtml: "<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z' fill='#BC9CFF'/></svg>",
    nextHtml: "<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z' fill='#BC9CFF'/></svg>",
    toggleSelected: true,
    dateFormat: 'dd M',
    navTitles: {
      days: 'MM yyyy',
    },

    onSelect(fd, date, inst) {
      const isTwoInputs = (
        inst.$el.hasClass(leftClass)
				|| inst.$el.hasClass(rightClass)
      );

      const isSecondDateSelected = (date.length === 2);

      if (isTwoInputs) {
        $(`.${leftClass}`).val(getFormattedDate(date[0]));
        $(`.${rightClass}`).val('');
        if (isSecondDateSelected) {
          $(`.${rightClass}`).val(getFormattedDate(date[1]));
          if (getDaysIn) {
            const daysIn = Number(date[1] - date[0]) / 1000 / 60 / 60 / 24;
            getDaysIn(daysIn);
          }
        }
      }
    },

    onShow(dp) {
      const isButtonsCreated = dp.$datepicker.find('button').html() === undefined;
      if (isButtonsCreated) {
        const clearButton = '<button type="button" class="button-small button-gray js-date-dropdown--clear-button"><h3>очистить</h3></button>';
        const applyButton = '<button type="button" class="button-small button-purple js-date-dropdown--apply-button" style="float: right;"><h3>применить</h3></button>';
        dp.$datepicker.append(clearButton);
        dp.$datepicker.append(applyButton);
        dp.$datepicker.find('.js-date-dropdown--clear-button').click((event) => {
          $(`.${leftClass}`).val('');
          $(`.${rightClass}`).val('');
          dp.clear();
        });
        dp.$datepicker.find('.js-date-dropdown--apply-button').click((event) => {
          dp.hide();
        });
      }
    },
  };
}

export { getFormattedDate, getDatepickerConfig, datepicker };
