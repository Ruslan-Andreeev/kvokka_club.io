window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //tab
    $('.faq-content-block').click(function(){
    $(this).children('.faq-content-block-bot').slideToggle(400);
    $(this).children('.img-no-active').toggleClass('arrow-active');
  });    
 


});