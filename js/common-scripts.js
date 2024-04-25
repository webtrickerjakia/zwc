(function ($) {
    $(function () {



        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
        });


        if ($('header').length) {
            var header = new Headroom(document.querySelector("header"), {
                tolerance: 0,
                offset: 30,
                classes: {
                    initial: "animated",
                    pinned: "slideUp",
                    unpinned: "slideDown"
                }
            });
            header.init();
        }

        if ($('.hero-bg').length) {
            var $slider = $('.hero-bg');
            $slider.slick({
                arrows: false,
                dots: true,
                infinite: true,
                slidesToShow: 1,
                centerMode: false,
                vertical: false,
                fade: true,
            });

            $(window).on('resize', function () {
                $('.product-slider').slick('resize');

            });
        }


        if ($(window).width() < 640) {
            var Hiddentext = $('.hero-content-bottom p').text()
            $('.hero-content-bottom h6').text(Hiddentext)

        }

        if ($('.nav-marque').length) {
            
            if($(window).width() > 640){
               $('.nav-marque').marquee({
                direction: 'left',
                duration: 24000,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
            }
            if($(window).width() < 641){
               $('.nav-marque').marquee({
                direction: 'left',
                duration: 9000,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
            }
            
            
        }


        if ($('.shipping-info-marque').length) {
            
            if($(window).width() > 640){
               $('.shipping-info-marque').marquee({
                direction: 'left',
                duration: 24000,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
            }
            if($(window).width() < 641){
               $('.shipping-info-marque').marquee({
                direction: 'left',
                duration: 9000,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
            }
        }
        
        $('.main-nav ul li a img').parents('li').addClass('userProfile-trigger')
        $('.nav-right ul li a img').parents('li').addClass('search-trigger')
        $('.nav-right ul li a span').parents('li').addClass('cart-trigger')

        $('.product-slider-item').each(function () {
            var $this = $(this);

            $this.on('mouseenter', function (e) {
                e.preventDefault();
                $(function () {
                    var el = $this.find('.color-dot');
                    var index = 0;
                    var timer = window.setInterval(function () {
                        if (index < el.length) {
                            el.eq(index++).addClass('color-dot-show');
                        }
                    }, 100);
                });

            })
            $this.mouseleave(function (e) {
                $('.color-dot').removeClass('color-dot-show')
            })

        })


        if ($('.home-product-slider').length) {
            var $slider = $('.home-product-slider');
            $slider.slick({
                arrows: false,
                dots: false,
                infinite: false,
                slidesToShow: 5,
                centerMode: false,
                vertical: false,
                responsive: [
                    {
                        breakpoint: 1458,
                        settings: {
                            slidesToShow: 4,
                            swipe: true,
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3,
                            swipe: true,
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            variableWidth: false,
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            variableWidth: false,
                            slidesToShow: 1,
                        }
                    },

                ]
            });

            $(window).on('resize', function () {
                $('.home-product-slider').slick('resize');

            });
        }


        $('.product-tab-scroller ul li:first-child').addClass('tab-trigger-active');
        $('.product-slider:first').addClass('tab-active');
        $('.product-tab-scroller ul li a').click(function () {
            $('.product-tab-scroller ul li').removeClass('tab-trigger-active');
            $(this).parent('li').addClass('tab-trigger-active');
            $('.product-slider').removeClass('tab-active');
            var activeTab = $(this).attr('href');
            $(activeTab).addClass('tab-active');
            return false;
        });


        if ($('.reviews-item-wrap').length) {
            $('.reviews-item-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1458,
                        settings: {
                            slidesToShow: 2,
                            swipe: true,
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            swipe: true,
                        }
                    }
                ]
            });
            $(window).on('resize', function () {
                $('.reviews-item-wrap').slick('resize');
            });
        }

        if ($('.featured-card-item-wrap').length) {
            $('.featured-card-item-wrap').slick({
                arrows: true,
                infinite: false,
                autoplay: false,
                navigation: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 1458,
                        settings: {
                            slidesToShow: 2,
                            swipe: true,
                            // variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            swipe: true,
                            arrows: true,
                            variableWidth: false,
                            infinite: false,
                        }
                    }
                ]
            });
            $(window).on('resize', function () {
                $('.featured-card-item-wrap').slick('resize');
            });
        }

        
        $('.cart-trigger').click(function(e){
            e.preventDefault()
            $('body').addClass('cartShown')
        })
                
        $('.cart-close, .cart-wrap').click(function(){
            $('body').removeClass('cartShown')
        })
                
        $('.cart').click(function(e){
            e.stopPropagation();
        })



    // Start Product Detail Js
    $(".product-description-acordion").each(function(){
        var $this = $(this);
        $this.find(" > h6").on("click touch", function(){
            $(".product-description-acordion").removeClass("active")
            $(".product-description-acordion-content").slideUp();
            if($this.find(".product-description-acordion-content:visible").length){
                $(".product-description-acordion").removeClass("active")
                $(".product-description-acordion-content").slideUp();
            }
            else{
                $this.addClass("active")
                $(".product-description-acordion-content").slideUp();
                $this.find(".product-description-acordion-content").slideDown();
            }
        })
    })

    if ($('.product-description-thumb-wrap').length) {
        var $slider = $('.product-description-thumb-wrap');
        $slider.slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            centerMode: false,
            vertical: false,
            fade: true,
        });

        $(window).on('resize', function () {
            $('.product-description-thumb-wrap').slick('resize');

        });
    }

    $(".specialist-acordion-item").each(function(){
        var $this = $(this);
        $this.find(" > h6").on("click touch", function(){
            $(".specialist-acordion-item").removeClass("active")
            $(".specialist-acordion-content").slideUp();
            if($this.find(".specialist-acordion-content:visible").length){
                $(".specialist-acordion-item").removeClass("active")
                $(".specialist-acordion-content").slideUp();
            }
            else{
                $this.addClass("active")
                $(".specialist-acordion-content").slideUp();
                $this.find(".specialist-acordion-content").slideDown();
            }
        })
    })

    if ($('.product-detail-product-slider').length) {
        var $slider = $('.product-detail-product-slider');
        $slider.slick({
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 4,
            centerMode: false,
            vertical: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        swipe: true,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        variableWidth: false,
                        slidesToShow: 1,
                    }
                },

            ]
        });

        $(window).on('resize', function () {
            $('.product-detail-product-slider').slick('resize');

        });
    }
    // End Product Detail js

        
        if($(window).width() < 641){
             if ($('.product-dna-content-thumb').length) {
            $(function () {

                $("#uislider").slider({
                    range: "max",
                    min: 1,
                    max: 31,
                    slide: function (event, ui) {
                        $("#idnumber").val(ui.value); 
                        if (ui.value >= 1 && ui.value <= 100) {
                            $('.product-dna-content-thumb figure').css("transform", `translateX(${-ui.value}%)`);
                        }
                        
                    }
                });
            });

        }
        }

        
        
        if($('.home').length){
            $('body').addClass('home-page')
        }
        
        
        

        if($('.home-page').length){
            
        
            var HeaderHeight = $('.home-page .main-header-section').outerHeight() + 30;
            $(window).on('resize', function(){
                var HeaderHeight = $('.home-page .main-header-section').outerHeight() + 17;
                $('.home-page section.main-content-wrap').css({'padding-top': HeaderHeight})
            })
            $('.home-page section.main-content-wrap').css({'padding-top': HeaderHeight})
    
        }
        

        // Start Transparency 
        $(".people-accordion").each(function(){
            var $this = $(this);
            $this.find(" > .people-accordion-heading").on("click touch", function(){
                $(".people-accordion").removeClass("active")
                $(".people-accordion-content").slideUp();
                if($this.find(".people-accordion-content:visible").length){
                    $(".people-accordion").removeClass("active")
                    $(".people-accordion-content").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".people-accordion-content").slideUp();
                    $this.find(".people-accordion-content").slideDown();
                }
            })
        })

        if ($('.people-thumb-wrap').length) {
            var $slider = $('.people-thumb-wrap');
            $slider.slick({
                arrows: false,
                dots: true,
                infinite: true,
                slidesToShow: 1,
                centerMode: false,
                vertical: false,
                fade: true,
            });
    
            $(window).on('resize', function () {
                $('.people-thumb-wrap').slick('resize');
            });
        }

        if ($('.planet-marque').length) {
            
            if($(window).width() > 640){
                $('.planet-marque').marquee({
                direction: 'left',
                duration: 24000,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
            }
            if($(window).width() < 641){
                $('.planet-marque').marquee({
                direction: 'left',
                duration: 9000,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
            }
        }

        if ($('.planet-content-item-wrap').length) {
            var $slider = $('.planet-content-item-wrap');
            $slider.slick({
                arrows: true,
                dots: false,
                infinite: false,
                slidesToShow: 3,
                centerMode: false,
                vertical: false,
                responsive: [
                    {
                        breakpoint: 860,
                        settings: {
                            variableWidth: false,
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            variableWidth: false,
                            slidesToShow: 1,
                            adaptiveHeight: true,
                        }
                    },
                ]
            });
            $(window).on('resize', function () {
                $('.planet-content-item-wrap').slick('resize');
    
            });
        }

        if ($('.transparency-product-slider-wrap').length) {
            $('.transparency-product-slider-wrap').slick({
                autoplay: false,
                autoplaySpeed: 1500,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots:false,
                centerMode: true,
                responsive: [
                    {
                            breakpoint: 639,
                            settings: 'unslick'
                    }
                ]
            })
        
            $(window).on('resize', function () {
                $('.transparency-product-slider-wrap').slick('resize');
                });
        }

        // End Transparency 
        
        // Start About Js
        if ($('.product-name-item-wrap').length) {
            $('.product-name-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 640,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.product-name-item-wrap').slick('resize');
            });
        }

        $('.about-tab-trigger-wrap a').click(function(e){
            e.preventDefault()
        });


        // End About Js

        // Start Blog Style
        $('.blog-tab-scroller ul li').click(function(){
            $('.blog-tab-scroller ul li').removeClass('active');
            $(this).addClass('active');
            $('.blog-tab-item-wrap .blog-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        // End Blog Style

        // Start Search Js

        $('.search-trigger').click(function(e){
            e.preventDefault()
            $('body').addClass('searchShown')
        })
        $('.search-close, .search-wrap').click(function(){
            $('body').removeClass('searchShown')
        })
                
        $('.search-main').click(function(e){
            e.stopPropagation();
        })

        $('.search-tab-trigger ul li').click(function(){
            $('.search-tab-trigger ul li').removeClass('active');
            $(this).addClass('active');
            $('.search-tab-item-wrap .search-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        // End Search Js

        /* Start Shop all page */
        
        $('.shop-tab-row-item').each(function () {
            var $$this = $(this);
            $$this.find('.shop-tab-select-dropdown em').click(function () {
                $(this).parent('.shop-tab-select-dropdown').addClass('dropdown-active');
                $$this.find('.shop-tab-select-dropdown').find('ul').slideToggle();
            })
            $$this.find('.shop-tab-select-dropdown ul li').click(function () {
                var valText = $(this).text(),
                    showText = $$this.find('.shop-tab-select-dropdown em')
                console.log(valText)
                $('.shop-tab-select-dropdown ul li').removeClass('dropdown-inner-active')
                $(this).parents('.shop-tab-select-dropdown').addClass('dropdown-inner-active')
                $(this).parents('.shop-tab-select-dropdown').addClass('dropdown-inner-active')
                $$this.find('.shop-tab-select-dropdown').removeClass('dropdown-active')
                $$this.find('.shop-tab-select-dropdown').find('ul').slideUp();
                showText.text(valText)
            })
        })
        
        $('.product-slider-item').each(function () {
                var $$this = $(this)
                $$this.find('.quick-view-trigger').click(function (e) {
                    e.preventDefault()
                    console.log($$this)
                    $('body').addClass('quick-product-show')
                })
            })

        $('.shop-quick-close').click(function () {

            $('body').removeClass('quick-product-show')

        })
        /* End Shop all page */

        /* Start hygiene page */
        if($(".hygiene-page").length){
            $('body').addClass("hygiene")
        }
        /* End hygiene page */
        
        /* Start my account page */
        if ($('.account-slider').length) {
            var $slider = $('.account-slider');
            $slider.slick({
                arrows: true,
                dots: false,
                infinite: false,
                slidesToShow: 4,
                centerMode: false,
                vertical: false,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3,
                            swipe: true,
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            variableWidth: false,
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 641,

                            settings: 'unslick',
                    },

                ]
            });

            $(window).on('resize', function () {
                $('.account-slider').slick('resize');
            });
        }

        $('.account-tab-scroller ul li:first-child').addClass('tab-trigger-active');
                $('.account-tab-item:first').addClass('tab-active');
                $('.account-tab-scroller ul li a').click(function () {
                    $('.account-tab-scroller ul li').removeClass('tab-trigger-active');
                    $(this).parent('li').addClass('tab-trigger-active');
                    $('.account-tab-item').removeClass('tab-active');
                    var activeTab = $(this).attr('href');
                    $(activeTab).addClass('tab-active');
                    return false;
            });

        /* End my account page */

        // Start Popup Js
        if($(".popups-top-wrap").length){
            $('body').addClass("top-popup")
        }

        $('.popups-top-close-button').click(function () {
            $("body").removeClass("top-popup");
            $(".popups-top-wrap").fadeOut();
        });
        $('.popups-bottom-close-button').click(function () {
            $(".popups-bottom-wrap").fadeOut();
        });

       /* $('.newletter-popup-close').click(function () {
            $(".newletter-popup-wrap").fadeOut();
        });*/
        // End Popup Js
        
        if($('.newletter-popup-wrap').length){
            setTimeout(function(){
                $('body').addClass('join-club-show');
            },1000)
            
             $('.newletter-popup-close').click(function () {
            $("body").removeClass('join-club-show');
        });
        }
        


        // Start Login Js
        $('.login').click(function () {
            $('.login').removeClass('active-login');
            $(this).addClass('active-login');
        });
        // End Login Js

//         $('.about-tab-item-wrap').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false,
//             fade: true,
//             asNavFor: '.about-tab-trigger-wrap',
//             swipe: false,
//         });
//         $('.about-tab-trigger-wrap').slick({
//             slidesToShow: 7,
//             slidesToScroll: 1,
//             asNavFor: '.about-tab-item-wrap',
//             dots: true,
//             focusOnSelect: true,
//             autoplay: false,
//             /*variableWidth: true*/
//         });
//        
//        

        
  if($(window).width() > 991){
        
$(function(){
   var lis_count = $('a.about-tab-trigger').length;
   var active_li_index = 0;
   
   setInterval(function(){
      if( $('a.about-tab-trigger.current-active').index() == lis_count-1 )
        active_li_index  = 0;
      else
        active_li_index++;
        
      $('a.about-tab-trigger.current-active').removeClass('current-active');
      $('a.about-tab-trigger').eq(active_li_index).addClass('current-active');
   }, 2000);
})        

$(function(){
   var lis_count = $('.about-tab-item').length;
   var active_li_index = 0;
   
   setInterval(function(){
      if( $('.about-tab-item.current-active').index() == lis_count-1 )
        active_li_index  = 0;
      else
        active_li_index++;
        
      $('.about-tab-item.current-active').removeClass('current-active');
      $('.about-tab-item').eq(active_li_index).addClass('current-active');
   }, 2000);
})
  }
  
                
  if($(window).width() < 992){
      
      
      
      $('.current-active').removeClass('current-active')
        
         $('.about-tab-item-wrap').slick({
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
             fade: true,
             asNavFor: '.about-tab-trigger-wrap',
             swipe: false,
             autoplay: true,
             autoplaySpeed: 1200,
         });
         $('.about-tab-trigger-wrap').slick({
             asNavFor: '.about-tab-item-wrap',
             slidesToShow: 3,
             swipe: true,
             variableWidth: false,
             infinite: false,
             centerMode: true,
             centerPadding: '0',
             autoplay: true,
             autoplaySpeed: 1200,
             responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            swipe: true,
                            variableWidth: false,
                            infinite: false,
                            centerMode: true,
                            centerPadding: '0',
                        }
                    },
                    {
                        breakpoint: 641,
                            settings: {
                            slidesToShow: 1,
                            swipe: true,
                            variableWidth: false,
                            infinite: false,
                            centerMode: true,
                        }
                    },

                ]
         });
        
        

  }
  
      

    }) // End ready function.


        $('body').addClass('noTransition')
        setTimeout(function(){
            $('body').removeClass('noTransition')
        }, 1000)
    


})(jQuery)

var mac = 0;
if (navigator.userAgent.indexOf('Mac') > 0) {
    mac = 1;
} else {
    mac = 0;
}
if (1 == mac) {
    $('body').addClass('mac-os');
} else {
    $("body").addClass('win-os');
}

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}