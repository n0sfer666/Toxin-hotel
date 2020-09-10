import LikeButton from './like';

$(document).ready(() => {
  const $likes = $('.like');
  $.each($likes, (_, element) => {
    new LikeButton(element);
  });
});
