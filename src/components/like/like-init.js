import { LikeButton } from './like';
$(document).ready(function() {
  const $arrLike = $('.like');
  $.each($arrLike, (key, item) => {
    new LikeButton(item, key);
  })
})