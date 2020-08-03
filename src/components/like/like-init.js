import LikeButton from './like';

$(document).ready(() => {
  const $likes = $('.like');
  $.each($likes, (key, item) => {
    new LikeButton(item, key);
  });
});
