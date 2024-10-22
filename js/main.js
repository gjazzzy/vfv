$(document).ready(function () {
   // Hide modal 
   $('.pay, .adress__edit, .user, .card, .reg, .relogin, .adress, .login').css('display', 'none');

   var $button1 = $('.header__btn-login')
   var $button2 = $('.header__btn-reg');
   var $button3 = $('.right__btn-pay');
   var $button4 = $('.relogin__btn');
   var $button5 = $('.main__item,.right__sidebar-item');
   var $button6 = $('.user__item-adress');
   var $button7 = $('.adress__edit-btn, .adress__edit-name ,.right__sidebar-adress');
   var $button8 = $('.header__btn-cart');

   // Modal  show 
   // User modal
   $button1.click(function () {
      $('.user').show();
      $('html').css("overflow", "hidden");
   })
   $('.user__btn-close').click(function () {
      $('.user').hide();
      $('html').css("overflow-y", "scroll");
   })

   // // Login modal
   // $button1.click(function () {
   //    $('.login').show();
   //    $('html').css("overflow", "hidden");
   // })
   // $('.login__btn-close').click(function () {
   //    $('.login').hide();
   //    $('html').css("overflow-y", "scroll");
   // })


   // Relogin modal
   $button4.click(function () {
      $('.relogin').show();
      $('.login').hide();
      $('html').css("overflow", "hidden");
   })
   $('.relogin__btn-close').click(function () {
      $('.relogin').hide();
      $('html').css("overflow-y", "scroll");
   })

   $('.relogin__btn-back').click(function () {
      $('.relogin').hide();
      $('.login').show();

   })

   // Reg modal
   $button2.click(function () {
      $('.reg').show();
      $('html').css("overflow", "hidden");
   })
   $('.reg__btn-close').click(function () {
      $('.reg').hide();
   })


   // Pay modal
   $button3.click(function (event) {
      $('.pay').show();
      $('html').css("overflow", "hidden");

      $('.pay__btn-close').click(function () {
         $('.pay').hide();
         $('html').css("overflow-y", "scroll");
      })
   })

   // Item modal
   $button5.click(function () {
      $('.card').show();
      $('html').css("overflow", "hidden");
   })
   $('.card__btn-close').click(function () {
      $('.card').hide();
      $('html').css("overflow-y", "scroll");
   })

   // Address edit modal
   $button6.click(function () {
      $('.adress__edit').show();
      $('.user').hide();
      $('html').css("overflow", "hidden");

   })
   $('.adress__edit-btn-close').click(function () {
      $('.adress__edit').hide();
      $('html').css("overflow-y", "scroll");


   })
   $('.adress__edit-btn-back').click(function () {
      $('.adress__edit').hide();
      $('.user').show();

   })

   // Address modal
   $button7.click(function () {
      $('.adress').show();
      $('.adress__edit').hide();
      $('html').css("overflow", "hidden");

   })
   $('.adress__btn-close').click(function () {
      $('.adress').hide();
      $('html').css("overflow-y", "scroll");


   })
   $('.adress__btn-back').click(function () {
      $('.adress').hide();
      $('.adress__edit').show();

   })


   // Cart toggle
   $(".header__btn-cart").on("click", function () {
      $(".left__sidebar-item").toggle();
   });

   $(".header__btn-cart").click(function () {
      $('html').css("overflow", "hidden");
      $('.right').show();

      var currentImage = $("#button-image").attr("src");
      if (currentImage === 'images/icons/icon-shopping-cart.svg') {
         $("#button-image").attr("src", 'images/icons/NextArrow.svg');
      } else {
         $("#button-image").attr("src", 'images/icons/icon-shopping-cart.svg');
         $('.right').hide();
         // $('html').css("overflow-y", "scroll");
      }
   });
});
