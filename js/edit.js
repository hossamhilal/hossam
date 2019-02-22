/*global $ */
$(document).ready(function ($) {
    'use strict';
    
    // SELECT PICKER
    $('select').niceSelect();
    
    // BOTTOM HEADER DROP DOWN MENUE SHOW
    if($(window).width() > 720)
    {
        $('.home-bottom-menue .dropdown-menu').addClass('show');
    }
    else
        {
         
        $('.home-bottom-menue .dropdown-menu').addClass('show');   
        }
    
    
    if($(window).width() < 992)
        {
           $('.first-itm').click(function(){
                // $('.first-itm span').toggle(); 
                $(".bottom-header .dropdown-menu").toggle();
            });

            $('.first-itm .dropdown-toggle').click(function(){
                // $('.first-itm span').toggle(); 
                $(".bottom-header .dropdown-menu").toggle();
            });

           
        }
    
//     $('body').click(function(event){
//    $dropdowns.not($dropdowns.has(event.target)).hide();
// });
    
    
    
    
    
   
    // ADD CENTER TO FAVOURITE 
    $('.pro-fav-icon').click(function() {
        $(this).toggleClass('fav');
   });
    
      
    // HOME BEST OFFER BOX SHOW 
        $('.best-offer-btn').click(function(){
            $('.best-offer-btn').addClass('active');
            $('.high-sold-btn').removeClass('active');
            $('.high-sold-box').hide();
            $('.best-offer-box').show();
        });
    
    // HOME HIGHEST SOLD BOX SHOW 
        $('.high-sold-btn').click(function(){
            $('.high-sold-btn').addClass('active');
            $('.best-offer-btn').removeClass('active');
            $('.high-sold-box').show();
            $('.best-offer-box').hide();
        });
    
    
    
     // PRODUCT PAGE DESCRIPTION TABS
    
        // OPEN PROPERITS BOX 
          $('.prod-properits-btn').click(function(){
              $('.prod-properits-btn').addClass('prod-active-tab');
              $('.prod-adv-btn').removeClass('prod-active-tab');
              $('.prod-vald-btn').removeClass('prod-active-tab');
              $('.properits-box').addClass('show-box');
              $('.properits-box').removeClass('hide-box');
              $('.adv-box').removeClass('show-box');
              $('.adv-box').addClass('hide-box');
              $('.valdate-box').removeClass('show-box');
              $('.valdate-box').addClass('hide-box');
          });
    
          // OPEN ADVANTAGES BOX 
          $('.prod-adv-btn').click(function(){
              $('.prod-adv-btn').addClass('prod-active-tab');
              $('.prod-properits-btn').removeClass('prod-active-tab');
              $('.prod-vald-btn').removeClass('prod-active-tab');
              $('.adv-box').addClass('show-box');
              $('.adv-box').removeClass('hide-box');
              $('.properits-box').removeClass('show-box');
              $('.properits-box').addClass('hide-box');
              $('.valdate-box').removeClass('show-box');
              $('.valdate-box').addClass('hide-box');
          });
    
    
        // OPEN VALIDATION BOX    
            $('.prod-vald-btn').click(function(){
              $('.prod-vald-btn').addClass('prod-active-tab');
              $('.prod-adv-btn').removeClass('prod-active-tab');
              $('.prod-properits-btn').removeClass('prod-active-tab');
              $('.valdate-box').addClass('show-box');
              $('.valdate-box').removeClass('hide-box');
              $('.adv-box').removeClass('show-box');
              $('.adv-box').addClass('hide-box');
              $('.properits-box').removeClass('show-box');
              $('.properits-box').addClass('hide-box');
          });
    
    
       // USER VALIDATE PRODUCT USING STARS 
           $('.usr-str-click').click(function(){
                    $(this).addClass('orange');
          });    
          $('.usr-str-click.orange').click(function(){
                    $(this).removeClass('orange');
          });
    
     
        // QUESTIONS PAGE 
              // SHOW ANSWER 1 
            $('.quest-1').click(function()
                {   
                   $('.question-container-1').removeClass('hide-answer');
                   $('.question-container-1').slideDown();
                   $('.question-container-1').toggle();
                });
    
            // SHOW ANSWER 2 
            $('.quest-2').click(function()
                {                 
                   $('.question-box p').addClass('hide-answer');
                   $('.answer-2').slideDown();
                   $('.answer-2').toggle();
                })
    
           // SHOW ANSWER 3 
            $('.quest-3').click(function()
                {                 
                   $('.question-box p').addClass('hide-answer');
                   $('.answer-3').slideDown();
                   $('.answer-3').toggle();
                })
    
           // SHOW ANSWER 4 
            $('.quest-4').click(function()
                {                 
                   $('.question-box p').addClass('hide-answer');
                   $('.answer-4').slideDown();
                   $('.answer-4').toggle();
                })

           // SHOW ANSWER 5
            $('.quest-5').click(function()
                        {                 
                           $('.question-box p').addClass('hide-answer');
                           $('.answer-5').slideDown();
                           $('.answer-5').toggle();
                        })

            // SHOW ANSWER 6
            $('.quest-6').click(function()
                        {                 
                           $('.question-box p').addClass('hide-answer');
                           $('.answer-6').slideDown();
                           $('.answer-6').toggle();
                        })
               
             // SHOW ANSWER 6
            $('.quest-7').click(function()
                        {                 
                           $('.question-box p').addClass('hide-answer');
                           $('.answer-7').slideDown();
                           $('.answer-7').toggle();
                        })

    
            // OPEN QUESTION HELP BOX 
              $('.quest-page-bottom a').click(function()
                        {                 
                           $('.question-help').removeClass('hide-answer');
                        })

              $('.close-ico').click(function()
                        {                 
                           $('.question-help').addClass('hide-answer');
                        })
    
    
    
    
      //PRODUCT PAGE ADD TO CART 
    
          // SHOW ADD TO  CART BOX 
             $('.add-tocart-btn').click(function()
                {                   
                   $('.product-add-to-cart-box').toggle();
               });
    
          // SHOW ADD TO  CART BOX 
             $('.close-ico').click(function()
                {                   
                   $('.product-add-to-cart-box').css("display" , "none");
               });
    
         // SELECT COLOR 
            $('.prod-color li').click(function()
                {                   
                   $('.product-add-to-cart-box').removeClass('active-choose');
                   $(this).addClass('active-choose');
               });
    
         // SELECT SIZE 
            $('.prod-size li').click(function()
                {                   
                   $('.prod-size li').removeClass('active-choose');
                   $(this).addClass('active-choose');
               });
    
         // COUNT INCREASE AND DECREASE 
             $('.add-btn').on('click',function(){
                    var $qty=$(this).closest('div').find('.prod-count-value');
                    var currentVal = parseInt($qty.val());
                    if (!isNaN(currentVal)) {
                        $qty.val(currentVal + 1);
                    }
                });
    
                $('.minuse-btn').on('click',function(){
                    var $qty=$(this).closest('div').find('.prod-count-value');
                    var currentVal = parseInt($qty.val());
                    if (!isNaN(currentVal) && currentVal > 0) {
                        $qty.val(currentVal - 1);
                    }
                });
    
    
    
    
         // SHOP HOME PAGE 
    
           // SHOW RECENT PRODUCTS 
              $('.recent-itms-btn').click(function()
                {   
                   $(this).addClass('shop-home-active-tab');
                   $('.finished-itms-btn').removeClass('shop-home-active-tab');
                   $('.shop-recent-products').removeClass('sh-hide');
                   $('.shop-finished-products').addClass('sh-hide');
                   
               });
    
           // SHOW FINISHED PRODUCTS   
               $('.finished-itms-btn').click(function()
                {   
                   $(this).addClass('shop-home-active-tab');
                   $('.recent-itms-btn').removeClass('shop-home-active-tab');
                   $('.shop-finished-products').removeClass('sh-hide');
                   $('.shop-recent-products').addClass('sh-hide');
                   
               });

    
          // OPEN DISCOUNT BOX TO EDIT OR ADD DISCOUNT 
              $('.disc-btn').click(function()
                {   
                   $('.add-dicount-container').removeClass('sh-hide');                  
               });
           
               $('.disc-close').click(function()
                {   
                   $('.add-dicount-container').addClass('sh-hide');                  
               });
    

    
        // ADD PRODUCT PAGE UPLOAD IMGS 
    
            $(".input-file").change(function(){
               var input = (this);
               var image = $(this).siblings('.input-image');
               if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                      image.attr('src', e.target.result);
                      console.log(this);
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            });
    
      
        // ADD PRODUCT PAGE CHOOSE COLORES OF PRODUCT
             $('.formfield .first-color').click(function(){
                if ($(this).hasClass('prob-choosed')) {
                      $(this).removeClass('prob-choosed') ;
                    }else {
                        $(this).addClass('prob-choosed');
                    }
             });
    
             $('.formfield .second-color').click(function(){
                if ($(this).hasClass('prob-choosed')) {
                      $(this).removeClass('prob-choosed') ;
                    }else {
                        $(this).addClass('prob-choosed');
                    }
             });
    
             $('.formfield .third-color').click(function(){
                if ($(this).hasClass('prob-choosed')) {
                      $(this).removeClass('prob-choosed') ;
                    }else {
                        $(this).addClass('prob-choosed');
                    }
             });
    
             $('.formfield .fourth-color').click(function(){
                if ($(this).hasClass('prob-choosed')) {
                      $(this).removeClass('prob-choosed') ;
                    }else {
                        $(this).addClass('prob-choosed');
                    }
             });
    
             $('.formfield .fifth-color').click(function(){
                if ($(this).hasClass('prob-choosed')) {
                      $(this).removeClass('prob-choosed') ;
                    }else {
                        $(this).addClass('prob-choosed');
                    }
             });
    
             $('.formfield .six-color').click(function(){
                if ($(this).hasClass('prob-choosed')) {
                      $(this).removeClass('prob-choosed') ;
                    }else {
                        $(this).addClass('prob-choosed');
                    }
             });
    
    
    
           // ADD PRODUCT PAGE CHOOSE THE SIZE OF THE PRODUCT 
            $('.formfield .s-size').click(function(){
                if ($(this).hasClass('prob-choosed')) {
                      $(this).removeClass('prob-choosed') ;
                    }else {
                        $(this).addClass('prob-choosed');
                    }
             });
    
             $('.formfield .m-sizer').click(function(){
                if ($(this).hasClass('prob-choosed')) {
                      $(this).removeClass('prob-choosed') ;
                    }else {
                        $(this).addClass('prob-choosed');
                    }
             });
    
             $('.formfield .l-sizer').click(function(){
                if ($(this).hasClass('prob-choosed')) {
                      $(this).removeClass('prob-choosed') ;
                    }else {
                        $(this).addClass('prob-choosed');
                    }
             });
    
             $('.formfield .xl-size').click(function(){
                if ($(this).hasClass('prob-choosed')) {
                      $(this).removeClass('prob-choosed') ;
                    }else {
                        $(this).addClass('prob-choosed');
                    }
             });
    
             $('.formfield .xxxl-size').click(function(){
                if ($(this).hasClass('prob-choosed')) {
                      $(this).removeClass('prob-choosed') ;
                    }else {
                        $(this).addClass('prob-choosed');
                    }
             });
    
    
        // ADD ADVANTAGES FIELD  IN PRODUCT PAGE 
           $('.add-adv-field').click(function(){
                $(this).parent().clone(true).appendTo('.add-adv');
           });
    
        // ADD PROPERITS FIELD  IN PRODUCT PAGE 
           $(".add-prop-field").click(function(){
                $(this).parent().clone(true).appendTo(".add-properits");
           });
     
    
        // START AMART WIZARD STEP BY STEP 
            $('#smartwizard').smartWizard();

    
        
   


});



$(document).ready(function ($) {
     // COLOR PANEL
         

            $('.color_panel .icofont').on('click', function () {
                $(".color_panel").toggleClass("show_color_panel");
            });

            $('.bgcolor1').on('click', function () {
                $("body").addClass("cb-color1").removeClass("cb-color2 cb-color3 cb-color4 cb-color5 cb-color6 cb-color7 cb-color8 cb-color9 cb-color10 cb-color11");
            });

            $('.bgcolor2').on('click', function () {
                $("body").addClass("cb-color2").removeClass("cb-color1 cb-color3 cb-color4 cb-color5 cb-color6 cb-color7 cb-color8 cb-color9 cb-color10 cb-color11");
            });

            $('.bgcolor3').on('click', function () {
                $("body").addClass("cb-color3").removeClass("cb-color1 cb-color2 cb-color4 cb-color5 cb-color6 cb-color7 cb-color8 cb-color9 cb-color10 cb-color11");
            });

            $('.bgcolor4').on('click', function () {
                $("body").addClass("cb-color4").removeClass("cb-color1 cb-color2 cb-color3 cb-color5 cb-color6  cb-color7 cb-color8 cb-color9 cb-color10 cb-color11");
            });

            $('.bgcolor5').on('click', function () {
                $("body").addClass("cb-color5").removeClass("cb-color1 cb-color2 cb-color3 cb-color4 cb-color6 cb-color7 cb-color8 cb-color9 cb-color10 cb-color11");
            });

            $('.bgcolor6').on('click', function () {
                $("body").addClass("cb-color6").removeClass("cb-color1 cb-color2 cb-color3 cb-color4 cb-color5 cb-color7 cb-color8 cb-color9 cb-color10 cb-color11");
            });

            $('.bgcolor7').on('click', function () {
                $("body").addClass("cb-color7").removeClass("cb-color1 cb-color2 cb-color3 cb-color4 cb-color5 cb-color6 cb-color8 cb-color9 cb-color10 cb-color11");
            });

            $('.bgcolor8').on('click', function () {
                $("body").addClass("cb-color8").removeClass("cb-color1 cb-color2 cb-color3 cb-color4 cb-color5 cb-color6 cb-color7 cb-color9 cb-color10 cb-color11");
            });

            $('.bgcolor9').on('click', function () {
                $("body").addClass("cb-color9").removeClass("cb-color1 cb-color2 cb-color3 cb-color4 cb-color5 cb-color6 cb-color7 cb-color8 cb-color10 cb-color11");
            });

            $('.bgcolor10').on('click', function () {
                $("body").addClass("cb-color10").removeClass("cb-color1 cb-color2 cb-color3 cb-color4 cb-color5 cb-color6 cb-color7 cb-color8 cb-color9 cb-color11");
            });

            $('.bgcolor11').on('click', function () {
                $("body").addClass("cb-color11").removeClass("cb-color1 cb-color2 cb-color3 cb-color4 cb-color5 cb-color6 cb-color7 cb-color8 cb-color9 cb-color10");
            });
    
    
});


       // RANGE SLIDER 
    $(function () {
        $("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 10,
            max: 10000,
            from: 3000,
            to: 7000,
            type: 'double',
            step: 1,
//            prefix: "$",
            grid: true
        });

    });

/*global $ */
$(document).ready(function ($) {
    'use strict';

    // HOME CAROUSEL 
    $('.Homecarousel').owlCarousel({
        rtl:true,
        loop: true,
        margin: 10,
        navSpeed:500,
        nav: true,
        animateOut: 'slideOutDown',
        animateIn: 'fadeInUp',
        singleItem: true,
        center: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    // CLOTHES CAROUSEL
        $('.Clothescarousel').owlCarousel({
            rtl:true,
            loop: true,
            margin: 10,
            nav: true,
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            // singleItem: true,
            // center: true,
            autoPlay: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
    
    
    
    
    // BRAND CAROUSEL 
        $('.brandcarousel').owlCarousel({
            rtl:true,
            loop: true,
            margin: 10,
            nav: true,
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            center: true,
            autoPlay: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });
    
      // SINGLE PAGE MAIN  SLIDER 
       $('.singlepage-slider').owlCarousel({
            rtl:true,
            loop:true,
            margin:10,
            nav:true,
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
    
    
    
    


});