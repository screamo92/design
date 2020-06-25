$(function () {


   $('.slider__inner').slick({
      arrows: false,
      autoplay: true,
      fade: true,
      dots: true,
      autoplay: 2000,
   });

   $('.menu__btn').on('click', function(){
      $('.menu__list').slideToggle();
   });

   $('.menu__item-dropdown--one').on('click', function(){
      $('.submenu-one').slideToggle();
   });

   $('.menu__item-dropdown--two').on('click', function(){
      $('.submenu-two').slideToggle();
   });

   new WOW().init();

   
});