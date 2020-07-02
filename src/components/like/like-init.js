import LikeButton from './like';

$(document).ready(() => {
  const $arrLike = $('.like');
  $.each($arrLike, (key, item) => {
    const instance = new LikeButton(item, key);
  });
});
