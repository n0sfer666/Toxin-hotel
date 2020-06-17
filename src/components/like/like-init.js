import { LikeButton } from './like';

$(document).ready(() => {
  const $arrLike = $('.like');
  $.each($arrLike, (key, item) => {
    new LikeButton(item, key);
  });
});
