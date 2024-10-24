'use strict'

// アコーディオン
{
  $(function() {
    $('.service__item--title').click(function() {
      if ( $(this).hasClass('open') ) {
        $(this).toggleClass('open');
        $(this).next('.service__item--text').toggleClass('open');
      } else {
        $('.service__item--title').removeClass('open');
        $('.service__item--text').removeClass('open');
        $(this).addClass('open');
        $(this).next('.service__item--text').addClass('open');
      }
    })
  });
}