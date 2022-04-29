$(function(){

    //Scroll;
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if (scrolling > 300) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
        if (scrolling > 300) {
            $('.back_top').fadeIn();
        } else {
            $('.back_top').fadeOut();
        }


    });

    $('.back_top').click(function(){
        $('html,body').animate({
            scrollTop: '0'
        },1000);
    });






    $('.slider_main').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    
    $('.banner_main').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
});