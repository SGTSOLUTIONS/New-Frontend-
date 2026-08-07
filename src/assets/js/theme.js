/*
 Theme Name: Bepro
 Theme URI: https://themeforest.net/user/themewar/portfolio
 Author: themewar
 Author URI: 
 Description: Bepro - Multi-Purpose Business & Consulting Responsive HTML5 Template
 Version: 1.0
 License:
 License URI:
*/
 
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Init Obj
 2. All Slider
 3. All Skills
 4. Funfact Count
 5. Back To Top
 6. All PopUP
 7. Sticky Header
 8. Mobile Menu
 9. Preloader
 10. Select
 11. Google Maps
 12. Contact Form Submission
 13. Filter & Suffle
 14. Popup Menu
 15. Strech Column
 16. Qty
 17. Sidebar Menu
 18. Accordina Toggler
*/

(function ($) {
    'use strict';
    /*--------------------------------------------------------
    / 1. Init Obj
    /---------------------------------------------------------*/
    var tmSlider                = $('.tmSlider'),
        tmSlider2               = $('.tmSlider02'),
        tmSlider3               = $('.tmSlider03'),
        featuredSlider          = $('.featuredSlider'),
        tmSlider04              = $('.tmSlider04'),
        serviceSlider           = $('.serviceSlider'),
        serviceSlider02         = $('.serviceSlider02'),
        serviceSlider03         = $('.serviceSlider03'),
        serviceSlider04         = $('.serviceSlider04'),
        testi_slider01          = $('.testimonialslider01'),
        testi_slider02          = $('.testimonialslider02'),
        folioSlider01           = $('.folioSlider01'),
        folioSlider02           = $('.folioSlider02'),
        gallerSlider            = $('.gallerSlider'),
        related_carousel        = $(".related_carousel"),
        popup_video             = $('.popup_video'),
        countfact               = $('.countfact'),
        popup_img               = $('.popup_img'),
        select                  = $('.contact_form select, .sorting select, .filterBy select');
    
    /*--------------------------------------------------------
    / 2. All Slider
    /---------------------------------------------------------*/
    /*--- Rev Slider ---*/
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1218, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 700,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 75,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 75,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
    });
    var revapi2 = jQuery('#rev_slider_2').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1218, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                enable: false
            },
            bullets: {
                enable: false
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });
    var revapi3 = jQuery('#rev_slider_3').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1218, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                enable: false
            },
            bullets: {
                enable: false
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });
    var revapi4 = jQuery('#rev_slider_4').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1218, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 700,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 70,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 70,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
    });
    var revapi5 = jQuery('#rev_slider_5').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1218, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: 902,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 700,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 210,
                    v_offset: 35
                },
                right: {
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 125,
                    v_offset: 35
                }
            },
            bullets: {
                enable: false
            }
        },
    });
    var revapi = jQuery('#rev_slider_6').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1218, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 700,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 75,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 75,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
    });
    var revapi = jQuery('#rev_slider_7').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1218, 920, 700, 380],
        jsFileLocation: "js/",
        minHeight: 1050,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                enable: false
            },
            bullets: {
                enable: true,
                hide_onleave: false,
                hide_onmobile: true,
                hide_under: 700,
                style: 'uranus',
                h_align: "left",
                v_align: "center",
                direction: "vertical",
                h_offset: 60,
                space: 53,
                v_offset: 0
            },
        },
    });
    /*--- Team Silder ---*/
    if (tmSlider.length > 0) {
        var tmSlider_obj = tmSlider.owlCarousel({
            margin: 30,
            autoplay: false,
            loop: true,
            nav: true,
            navText: ['<i class="twi-angle-left1"></i>', '<i class="twi-angle-right1"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 3,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }
    if (tmSlider2.length > 0) {
        var tmSlider2_obj = tmSlider2.owlCarousel({
            margin: 0,
            autoplay: false,
            loop: false,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 3,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }
    if (tmSlider3.length > 0) {
        var tmSlider3_obj = tmSlider3.owlCarousel({
            margin: 45,
            autoplay: false,
            loop: false,
            nav: true,
            navText: ['<i class="twi-arrow-left2"></i>', '<i class="twi-arrow-right2"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 3,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }
    if (tmSlider04.length > 0) {
        var tmSlider04_obj = tmSlider04.owlCarousel({
            margin: 12,
            autoplay: false,
            loop: true,
            nav: false,
            navText: ['<i class="twi-arrow-left2"></i>', '<i class="twi-arrow-right2"></i>'],
            smartSpeed: 500,
            dots: true,
            items: 2,
            responsive: {
                0: {
                    items: 1,
                },
                992: {
                    items: 2
                }
            }
        });
    }
    /*--- Service Silder ---*/
    if (serviceSlider.length > 0) {
        var serviceSlider_obj = serviceSlider.owlCarousel({
            margin: 0,
            autoplay: false,
            loop: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 3,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    if (serviceSlider02.length > 0) {
        var serviceSlider02_obj = serviceSlider02.owlCarousel({
            margin: 0,
            autoplay: false,
            loop: true,
            nav: true,
            navText: ['<i class="twi-arrow-left2"></i>', '<i class="twi-arrow-right2"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 3,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    if (serviceSlider03.length > 0) {
        var serviceSlider03_obj = serviceSlider03.owlCarousel({
            margin: 20,
            autoplay: false,
            loop: true,
            nav: true,
            navText: ['<i class="twi-angle-left1"></i>', '<i class="twi-angle-right1"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 4,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        });
    }
    if (serviceSlider04.length > 0) {
        var serviceSlider04_obj = serviceSlider04.owlCarousel({
            margin: 30,
            autoplay: false,
            loop: true,
            nav: true,
            navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 3,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
    }
    /*--- Testimonial Silder ---*/
    if(testi_slider01.length > 0){
        var testi_slider01_obj = testi_slider01.owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 1
        });
    }
    if(testi_slider02.length > 0){
        var testi_slider02_obj = testi_slider02.owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
            dots: true,
            smartSpeed: 600,
            items: 1
        });
    }
    $(document).on('ready', function() {
        $('.testimonialslider03').slick({
            dots: false,
            arrows: true,
            nextArrow: '<div class="navRight"><i class="twi-arrow-right2"></i></div>',
            prevArrow: '<div class="navLeft"><i class="twi-arrow-left2"></i></div>',
            vertical: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            verticalSwiping: true
        });
    });

    $(document).on('ready', function() {
        $('.testimonialslider04').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.testimonialNav',
            autoplay: false
        });
        $('.testimonialNav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.testimonialslider04',
            dots: false,
            arrows: false,
            variableWidth: true,
            autoplay: false,
            infinite: true,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            }, ]
        });
    });
    $(document).on('ready', function() {
        $('.testimonialslider05').slick({
            dots: false,
            arrows: false,
            autoplay: true,
            nextArrow: '<div class="navRight"><i class="twi-arrow-right2"></i></div>',
            prevArrow: '<div class="navLeft"><i class="twi-arrow-left2"></i></div>',
            vertical: true,
            infinite: true,
            //variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '0',
            verticalSwiping: true
        });
    });
    
    /*--- Client Silder ---*/
    if($(".client-slider").length > 0){
       $('.client-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            dots: false,
            smartSpeed: 600,
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                760: {
                    items: 2
                },
                990: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }
    if($(".client-slider02").length > 0){
       $('.client-slider02').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            dots: false,
            smartSpeed: 600,
            items: 6,
            responsive: {
                0: {
                    items: 1
                },
                760: {
                    items: 3
                },
                990: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
    }
    if($(".client-slider07").length > 0){
       $('.client-slider07').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            dots: false,
            smartSpeed: 600,
            items: 5,
            responsive: {
                0: {
                    items: 1
                },
                760: {
                    items: 3
                },
                990: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }
    /*--- Folio Silder ---*/
    if (folioSlider01.length > 0) {
        var folioSlider01_obj = folioSlider01.owlCarousel({
            margin: 6,
            autoplay: false,
            loop: true,
            nav: false,
            navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 4,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1600: {
                    items: 4
                }
            }
        });
    }
    if (folioSlider02.length > 0) {
        var folioSlider02_obj = folioSlider02.owlCarousel({
            margin: 0,
            autoplay: false,
            loop: true,
            nav: true,
            navText: ['<i class="bpro-long-left-arrow"></i>', '<i class="bpro-long-right-arrow"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 5,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1600: {
                    items: 5
                }
            }
        });
    }
    var $featureSlider02 = $('.featureSlider02');
        $featureSlider02.owlCarousel({
            autoplay: true,
            dots: false,
            items: 5,
            loop: true,
            margin: 20,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
    });
    var $workSlider = $('.workSlider');
        $workSlider.owlCarousel({
            autoplay: true,
            dots: false,
            items: 1,
            loop: true,
            animateOut: 'fadeOut',
            margin: 0,
            nav: true,
            navText: ['<i class="bpro-long-left-arrow"></i>', '<i class="bpro-long-right-arrow"></i>'],
    });

    if (featuredSlider.length > 0) {
        var featuredSlider_obj = featuredSlider.owlCarousel({
            margin: 0,
            autoplay: false,
            loop: true,
            nav: true,
            navText: ['<i class="twi-arrow-left2"></i>', '<i class="twi-arrow-right2"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 3,
            center:true,
            onTranslate: dosomthing,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3
                }
            }
        });
    }
    function dosomthing(event){
        $('.owl-item', featuredSlider)                     
        .removeClass('activeOnMiddle')
        .removeClass('activeOnLeft')
        .removeClass('activeOnRight');

        var middle_item = $('.active.center', featuredSlider).index();
        
        $('.owl-item.active.center', featuredSlider).eq(middle_item - 1).addClass('activeOnLeft');
        $('.owl-item.active.center', featuredSlider).addClass('activeOnMiddle');
        $('.owl-item.active.center', featuredSlider).eq(middle_item + 1).addClass('activeOnRight');
    }

    /*--- Blog Slider ---*/
    var $blogSlider = $('.blogSlider');
        $blogSlider.owlCarousel({
            autoplay: true,
            dots: false,
            items: 2,
            loop: true,
            margin: 30,
            nav: true,
            navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
    });
    var $blogSlider02 = $('.blogSlider02');
        $blogSlider02.owlCarousel({
            autoplay: true,
            dots: false,
            items: 3,
            loop: true,
            margin: 40,
            nav: true,
            navText: ['<i class="bpro-long-left-arrow"></i>', '<i class="bpro-long-right-arrow"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    margin: 30
                },
                992: {
                    items: 3,
                    margin: 30
                }
            }
    });
    /*--- Gallery Slider ---*/
    var $gallerySlider = $('.gallerySlider');
        $gallerySlider.owlCarousel({
            autoplay: true,
            dots: false,
            items: 4,
            loop: true,
            margin: 0,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
    });
    if (gallerSlider.length > 0) {
        gallerSlider.lightSlider({
            gallery:true,
            item:1,
            thumbItem:3,
            slideMargin: 0,
            speed:700,
            pause: 5000,
            auto:true,
            vertical: true,
            loop:true,
            galleryMargin: 0,
            vThumbWidth: 195,
            thumbMargin: 30,
            currentPagerPosition: 'left',
            onSliderLoad: function() {
                gallerSlider.removeClass('cS-hidden');
            },
            responsive : [
            {
                breakpoint:1199,
                settings: {
                    vThumbWidth: 140,
                    thumbMargin: 15,
                    verticalHeight:405,
                  }
            },
            {
                breakpoint:990,
                settings: {
                    vThumbWidth: 100,
                    thumbMargin: 10,
                    verticalHeight:300,
                  }
            },
            {
                breakpoint:767,
                settings: {
                    vThumbWidth: 60,
                    thumbMargin: 10,
                    thumbItem:2,
                    verticalHeight:120,
                  }
            }
        ]
        });
    }
    var $imageGallery = $('.imageGallery');
        $imageGallery.owlCarousel({
            autoplay: true,
            dots: true,
            items: 1,
            loop: true,
            animateOut: 'fadeOut',
            margin: 0,
            nav: false,
            navText: ['<i class="twi-long-arrow-left1"></i>', '<i class="twi-long-arrow-right1"></i>'],
    });

    $(document).ready(function() {
        var $offerSlider = $('.offerSlider');
            $offerSlider.owlCarousel({
                autoplay: true,
                dots: true,
                items: 1,
                loop: true,
                margin: 0,
                nav: true
        });
        $('.prev').click(function(e){
            e.preventDefault();
            $offerSlider.trigger('next.owl.carousel');
        });
        $('.next').click(function(e){
            e.preventDefault();
            $offerSlider.trigger('prev.owl.carousel');
        });
    });
    /*-- Product Gallery Slider --*/
    if ($('.productSlide').length > 0) {
        $('.productSlide').slick({
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            centerMode: true,
            asNavFor: '.indicator_slider',
            centerPadding: '0'
        });
        $('.indicator_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.productSlide',
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true
        });
    }
    /*-- Related Product Slider --*/
    if(related_carousel.length > 0){
        var related_carousel_obj = related_carousel.owlCarousel({
            margin: 30,
            loop: false,
            dots: false,
            nav: false,
            items: 4,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1
                },
                768:{
                    items: 2
                },
                991:{
                    items: 3
                },
                1200:{
                    items: 4
                }
            }
        });
    }

    /*--------------------------------------------------------
    / 3. All Skills
    /----------------------------------------------------------*/
    if ($(".single_skill").length > 0){
        $('.single_skill').appear();
        $('.single_skill').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills(){
        $(".single_skill").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".ss_child", this).animate({'width': datacount + '%'}, 2000);
            $(".ss_parent span.runing", this).animate({'left': datacount + '%'}, 2000);
            if (coun){
                $(this).find('.ss_parent span').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            }
        });
        coun = false;
    }
    $(window).on('load', function (event) {
        if ($(".circle-skill").length > 0) {
            var ast1 = true;
            $('.circle-skill').appear();
            $('.circle-skill').on('appear', function () {
                if (ast1 == true) {
                    $(".circle-skill").each(function () {
                        var pint = $(this).attr('data-skills');
                        var decs = pint * 100;
                        var grs = $(this).attr('data-gradientstart');
                        var gre = $(this).attr('data-gradientend');
                        var bg = $(this).attr('data-bg');

                        $(this).circleProgress({
                            value: pint,
                            startAngle: -Math.PI / 3 * 1.7,
                            fill: {gradient: [[grs, 1], [gre, .3]], gradientAngle: Math.PI / 4 * 2},
                            lineCap: 'square',
                            thickness: 8,
                            animation: {duration: 1800},
                            size: 151,
                            emptyFill: bg
                        }).on('circle-animation-progress', function (event, progress) {
                            $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
                        });
                    });
                    ast1 = false;
                }
            });
        }
    });
    $(window).on('load', function (event) {
        if ($(".circle-skill02").length > 0) {
            var ast1 = true;
            $('.circle-skill02').appear();
            $('.circle-skill02').on('appear', function () {
                if (ast1 == true) {
                    $(".circle-skill02").each(function () {
                        var pint = $(this).attr('data-skills');
                        var decs = pint * 100;
                        var grs = $(this).attr('data-gradientstart');
                        var gre = $(this).attr('data-gradientend');
                        var bg = $(this).attr('data-bg');

                        $(this).circleProgress({
                            value: pint,
                            startAngle: -Math.PI / 4 * 0,
                            fill: {gradient: [[grs, 1], [gre, .3]], gradientAngle: Math.PI / 4 * 3},
                            lineCap: 'round',
                            thickness: 6,
                            animation: {duration: 1800},
                            size: 100,
                            emptyFill: bg
                        }).on('circle-animation-progress', function (event, progress) {
                            $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
                        });
                    });
                    ast1 = false;
                }
            });
        }
    });
    
    /*--------------------------------------------------------
    / 4. Funfact Count
    /---------------------------------------------------------*/
    var skl = true;
    countfact.appear();
    countfact.on('appear', function() {
        if (skl) {
            countfact.each(function() {
                var $this = $(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.attr('data-count')
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        var num = Math.ceil(this.Counter).toString();
                        $('.counter', $this).html(num);
                    }
                });
            });
            skl = false;
        }
    });
    
    /*--------------------------------------------------------
    / 5. Back To Top
    /---------------------------------------------------------*/
    var back = $("#backtotop"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            back.css({bottom: '30px', opacity: '1', visibility: 'visible'});
        } else {
            back.css({bottom: '-30px', opacity: '0', visibility: 'hidden'});
        }
    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });
    
    /*--------------------------------------------------------
    / 6. All PopUP
    /--------------------------------------------------------*/
    popup_video.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        showCaption: false,
        controls: true
    });
    popup_img.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: true,
        swipe: true,
        showTitle: false,
        controls: true
    });
    $('.search_btn').on('click', function (e) {
        e.preventDefault();
        $('.popup_search_sec').toggleClass('active');
    });
    $('.popup_search_overlay').on('click', function () {
        $('.popup_search_sec').removeClass('active');
    });
    $('.popup_search_form input').on('focus', function(){
        $('.popup_search_form').addClass('focused');
    });
    $('.popup_search_form input').on('blur', function(){
        $('.popup_search_form').removeClass('focused');
    });

    $('.priceToggle').on('click', function(e){
        var $this = $(this);
        var $price = $('.'+$this.attr('data-toggleclass'));
        $this.siblings('.priceToggle').removeClass('active');
        $this.addClass('active');
        
        $price.siblings('.price_period').removeClass('active');
        $price.addClass('active');
    });
    
    /*--------------------------------------------------------
    / 7. Sticky Header
    /---------------------------------------------------------*/
    if($(".isSticky").length > 0){
        var header_height = $(".isSticky").height();
        $(window).on('scroll', function(){
            if($(window).scrollTop() > 300){
                $(".isSticky").addClass('fixedHeader animated slideInDown');
            }else{
                $(".isSticky").removeClass('fixedHeader animated slideInDown');
            }
        });
    }
    
    /*--------------------------------------------------------
    / 8. Mobile Menu
    /---------------------------------------------------------*/
    $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
    });
    $('.menu_btn').on('click', function(e){
        e.preventDefault();
        $('.mainMenu').slideToggle();
        $(this).toggleClass('active');
    });
    
    /*--------------------------------------------------------
    / 9. Preloader
    /---------------------------------------------------------*/
    $(window).on('load', function () {
        var preload = $('.preloader');
        if (preload.length > 0) {
            preload.delay(800).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
    / 10. Select
    /---------------------------------------------------------*/
    if (select.length > 0) {
        select.niceSelect();
        select.parent().addClass('select-area');
    };
    
    /*--------------------------------------------------------
    / 11. Google Maps
    /----------------------------------------------------------*/
    if ($("#google_map").length > 0){
        var map;
        map = new GMaps({
            el: "#google_map",
            lat: -37.815340,
            lng: 144.963230,
            zoom: 10,
        });
        var image = "";
        map.addMarker({
            lat: -37.815340,
            lng: 144.963230,
            icon: "assets/images/marker.png",
            animation: google.maps.Animation.DROP,
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#9dbb91"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#aacbd9"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#ebf1e9"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#2c2c2c"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#ceddc8"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#2c2c2c"}
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }

    /*--------------------------------------------------------
    / 12. Contact Form Submission
    /---------------------------------------------------------*/
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);
        $('button[type="submit"]', this).attr('disabled', 'disabled').val('Processing...');
        var form_data = $this.serialize();
        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === ''){
                $(this).addClass('reqError');
                required += 1;
            } else{
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'mail/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('button[type="submit"]', $this).removeAttr('disabled').val('Message');

                    $('.con_message', $this).fadeIn().html('<strong>Congratulations!</strong> Your query successfully sent to site admin.').removeClass('alert-warning').addClass('alert-success');
                    setTimeout(function () {
                        $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
                    }, 5000);
                }
            });
        } else {
            $('button[type="submit"]', $this).removeAttr('disabled').val('Message');
            $('.con_message', $this).fadeIn().html('<strong>Opps!</strong> Error found. Please fix those and re submit.').removeClass('alert-success').addClass('alert-warning');
            setTimeout(function () {
                $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
            }, 5000);
        }
    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });

    /*--------------------------------------------------------
    / 13. Filter & Suffle
    /---------------------------------------------------------*/
    $(window).on('load', function () {
        if ($(".shaff_grid").length > 0)
        {
            var $grid = $('.shaff_grid');
            $grid.shuffle({
                itemSelector: '.shaff_item',
                sizer: '.shaff_size'
            });
            $('.shaff_filter li').on('click', function () {
                $('.shaff_filter li').removeClass('active');
                $(this).addClass('active');
                var groupName = $(this).attr('data-group');
                $grid.shuffle('shuffle', groupName);
            });
        }
    });

    /*--------------------------------------------------------
    / 14. Popup Menu
    /---------------------------------------------------------*/
    $('.popup_togggle_menu').on('click', function(e) {
        e.preventDefault();
        $("body").addClass("menu__open");
        $('.popup_menu').addClass('active').fadeIn();
        setTimeout(function() {
            if ($('.popup_menu').hasClass('active')) {
                var tlMenu = new TimelineLite();
                tlMenu.set($(".animated_menu"), {
                    y: 80,
                    opacity: 0
                });
                $(".animated_menu").each(function(index, element) {
                    tlMenu.to(element, 0.5, {
                        y: 0,
                        opacity: 1,
                        delay: 0.4,
                        ease: Power2.easeOut
                    }, index * 0.1)
                });
            } else {
                var tlMenu = new TimelineLite();
                $(".animated_menu").each(function(index, element) {
                    tlMenu.to(element, 0.25, {
                        y: -80,
                        opacity: 0,
                        ease: Power2.easeIn
                    }, index * 0.05)
                });
            }
        }, 20)
    });
    $('#close_menu').on('click', function() {
        $("body").removeClass("menu__open");
        var tlMenu = new TimelineLite();
        $(".animated_menu").each(function(index, element) {
            tlMenu.to(element, 0.25, {
                y: -80,
                opacity: 0,
                ease: Power2.easeIn
            }, index * 0.05)
        });
        setTimeout(function() {
            $('.popup_menu').fadeOut()
        }, 500)
    });
    $(window).on("load resize", function (e) {
        if ($(window).width() < 1199) {
            $('.menu_popup ul li.menu-item-has-children > a').on('click', function(e){
                e.preventDefault();
                $(this).siblings('ul').slideToggle();
                $(this).parent().toggleClass('active');
            });
        };
    });

    /*--------------------------------------------------------
    / 15. Strech Column
    /---------------------------------------------------------*/
    tw_stretch();
    function tw_stretch() {
        var i = $(window).width();
        $(".row .tw-stretch-element-inside-column").each(function() {
            var $this = $(this),
                row = $this.closest(".row"),
                cols = $this.closest('[class^="col-"]'),
                colsheight = $this.closest('[class^="col-"]').height(),
                rect = this.getBoundingClientRect(),
                l = row[0].getBoundingClientRect(),
                s = cols[0].getBoundingClientRect(),
                r = rect.left,
                d = i - rect.right,
                c = l.left + (parseFloat(row.css("padding-left")) || 0),
                u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                p = s.left,
                f = i - s.right,
                styles = {
                    "margin-left": 0,
                    "margin-right": 0
                };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r;
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d;
            }
            $this.css(styles);
        });
    }

    /*--------------------------------------------------------
    / 16. Qty
    /----------------------------------------------------------*/
    if ($(".qtyBtn").length > 0) {
        $(".btnMinus").on('click', function() {
            var vals = parseInt($(this).next(".carqty").val(), 10);
            if (vals > 1) {
                vals -= 1;
                $(this).next(".carqty").val(vals).trigger('change');
            } else {
                $(this).next(".carqty").val(vals).trigger('change');
            }
            return false;
        });
        $(".btnPlus").on('click', function() {
            var vals = parseInt($(this).prev(".carqty").val(), 10);
            vals += 1;
            $(this).prev(".carqty").val(vals).trigger('change');
            return false;
        });
    }

    /*--------------------------------------------------------
    / 17. Sidebar Menu
    /--------------------------------------------------------*/
    var tt = true;
    $(".popup_togggle_menu02").on('click', function(e) {
        e.preventDefault();
        if (tt){
            $(this).addClass('active');
            $('body').addClass('menuOpened');
            tt = false;
        }else{
            $(this).removeClass('active');
            $('body').removeClass('menuOpened');
            tt = true;
        }
    });
    if ($(".sidebar_menu").length > 0){
        $(".sidebar_menu ul li.menu-item-has-children > a").on('click', function (e) {
            e.preventDefault();
            if ($(this).parent('li').hasClass('active')){
                $(this).parent('li').removeClass('active');
                $(this).next('ul').slideToggle();
            } else {
                $(this).siblings('ul').slideToggle();
                $(this).parent('li').addClass('active');
            }
        });
    }
    $(window).on("load",function(){
        $(".sidebar_menu > ul").mCustomScrollbar({
            setHeight:300
        });
    });

    /*--------------------------------------------------------
    / 18. Accordina Toggler
    /--------------------------------------------------------*/
    $('.bepAccordion .card-header').on('click', function () {
        var $this = $(this);
        $('.bepAccordion .card').removeClass('activeBg');
        if ($('button', $this).hasClass('collapsed')) {
            $this.parent('.faqInner').parent('.card').addClass('activeBg');
        } else {
            $this.parent('.faqInner').parent('.card').removeClass('activeBg');
        }
    });

})(jQuery);