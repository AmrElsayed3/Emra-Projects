/*global console, $*/
 $(document).ready(function () {

   'use strict';
    if($(window).width() >= 320 && $(window).width() < 650){
      var swiper = new Swiper('.left-box .last-episode .swiper-container ,.left-box .last-reviews .swiper-container,.left-box .newest-trailers .swiper-container,.left-box .trending-this-week .swiper-container,.left-box .shows-starting-this-week .swiper-container,.left-box .shows-ending-this-week .swiper-container,.left-box .today-birthday .swiper-container', {
         slidesPerView: 1,
         spaceBetween: 0,
         slidesPerGroup: 1,
         loop: true,
         loopFillGroupWithBlank: true,
         pagination: {
           el: '.swiper-pagination',
           clickable: true,
         },
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
       });
       var swiper = new Swiper('.slide .swiper-container', {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
    }else if ($(window).width() >= 650 && $(window).width() < 760) {
      var swiper = new Swiper('.left-box .last-episode .swiper-container ,.left-box .last-reviews .swiper-container,.left-box .newest-trailers .swiper-container,.left-box .trending-this-week .swiper-container,.left-box .shows-starting-this-week .swiper-container,.left-box .shows-ending-this-week .swiper-container,.left-box .today-birthday .swiper-container', {
         slidesPerView: 2,
         spaceBetween: 20,
         slidesPerGroup: 2,
         loop: true,
         loopFillGroupWithBlank: true,
         pagination: {
           el: '.swiper-pagination',
           clickable: true,
         },
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
       });
       var swiper = new Swiper('.slide .swiper-container', {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
    }else {
      var swiper = new Swiper('.left-box .last-episode .swiper-container ,.left-box .last-reviews .swiper-container,.left-box .newest-trailers .swiper-container,.left-box .trending-this-week .swiper-container,.left-box .shows-starting-this-week .swiper-container,.left-box .shows-ending-this-week .swiper-container,.left-box .today-birthday .swiper-container', {
         slidesPerView: 4,
         spaceBetween: 10,
         slidesPerGroup: 4,
         loop: true,
         loopFillGroupWithBlank: true,
         pagination: {
           el: '.swiper-pagination',
           clickable: true,
         },
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
       });
       var swiper = new Swiper('.slide .swiper-container', {
          slidesPerView: 2,
          spaceBetween: 3,
          slidesPerGroup: 2,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
    }



    $('.toggle').click(function(e){
      e.preventDefault();
        $('.tiger-collapse').toggleClass("visible");

        if ($('.tiger-collapse').hasClass("visible")){
            $('.tiger-collapse').animate({

              top:"-122px"

            },500);

             $('.toggle span:last-of-type').animate({

                 width:0,

                 height:0
            },1);

            $('.toggle span:nth-of-type(2)').addClass('rotate');

            $('.toggle span:first-of-type').addClass('rotate2');

        }else{
          $('body').removeClass('overflow')

            $('.tiger-collapse').animate({

                top:"-1000px"

            },500);

            $('.toggle span:last-of-type').animate({

                 width:"35px",

                 height:"2px"
             },100);

            $('.toggle span:nth-of-type(2)').removeClass('rotate');

            $('.toggle span:first-of-type').removeClass('rotate2');

        }
    });

    // Articles Page

    $('.filter-select').click(function(){
      $(this).find('.fa-check-square').toggleClass('hidden');
      $(this).find('.fa-square').toggleClass('hidden');

      $(this).find('.fa-check-circle').toggleClass('hidden');
      $(this).find('.fa-circle').toggleClass('hidden');

    });

    $('.filter-header').click(function(){
      $(this).siblings('.filter-box .filter-body').toggleClass('filter-active')
    });
    $('.filter-item .filter-select').click(function(){
      $(this).addClass('active').parent('.filter-item').siblings().find('.filter-select').removeClass('active')
    });

    $('.filter-item .filter-select').click(function(){
      $('#' +  $(this).data('find')).addClass('list-active').siblings('.filter-list').removeClass('list-active').addClass('hidden')
    });
    $('.filter-body .title-search div input').click(function(e){
      e.preventDefault();
      $(this).parent().parent().siblings('.list-search').toggleClass('hidden');
    })

 });
