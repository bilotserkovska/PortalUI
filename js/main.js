
$(document).ready(function(){
    $('a.scroll').click(function(){
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000);
        return false;
    });
    $('.slider2').bxSlider({
        slideWidth: 300,
        minSlides: 2,
        maxSlides: 2,
        slideMargin: 0,
        pager: false
      });
    $('.proj-link').click(function(){
        if($(this).hasClass('link-active')) {
            $(this).removeClass('link-active');
        }else{
            $('.proj-link').removeClass('link-active');
            $(this).addClass('link-active');
        }
    });
    $('.about-text-wrap, .logo-wrap-block, .projects-team-block').on('inview', function(event, isInView) {
        if (isInView && $(this).hasClass('about-text-wrap')) {
            $('.about-text-left').animate({
                opacity: 1
            },800, function(){
                $('.about-text-right').animate({
                    opacity: 1
                },800);
            });
        }
        if (isInView && $(this).hasClass('logo-wrap-block')) {
            $('.logo-wrap-block-first').animate({
                opacity: 1
            },400, function(){
                $('.logo-wrap-block-second').animate({
                    opacity: 1
                },400, function(){
                    $('.logo-wrap-block-third').animate({
                        opacity: 1
                    },400, function(){
                        $('.logo-wrap-block-fourth').animate({
                            opacity: 1
                        },400, function(){
                            $('.logo-wrap-block-fifth').animate({
                                opacity: 1
                            },400, function(){
                                $('.logo-wrap-block-sixth').animate({
                                    opacity: 1
                                },400, function(){
                                    $('.logo-wrap-block-seven').animate({
                                        opacity: 1
                                    },400, function(){
                                        $('.logo-wrap-block-eight').animate({
                                            opacity: 1
                                        },400);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
        if (isInView && $(this).hasClass('projects-team-block')) {
            $('.team-block_1').animate({
                opacity: 1
            },800, function(){
                $('.team-block_2').animate({
                    opacity: 1
                },800, function(){
                    $('.team-block_3').animate({
                        opacity: 1
                    },800, function(){
                        $('.team-block_4').animate({
                            opacity: 1
                        },800);
                    });
                });
            });
        }
    });
    $('.burger-button').click(function(){        
        if($('.menu-button').hasClass('menu-button-active')) {
            $('.menu-button').removeClass('menu-button-active');
            $('.menu-button').addClass('menu-button-hidden');
            $('.menu-button').slideUp();
        }else{
            $('.menu-button').removeClass('.menu-button-hidden');            
            $('.menu-button').addClass('menu-button-active');
            $('.menu-button').slideDown();
        }
    })
});