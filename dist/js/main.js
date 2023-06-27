const tEvents ={
    //menu
    menu: function(){
        $(".navbar-toggler").on("click", function () {
            if ($(window).innerWidth() < 992) {
                $(this).toggleClass("active");
                $(".navdiv ").toggleClass("active");
                $(".bsnav-mobile-overlay").toggleClass("active");
                $(".sub-menu").stop().slideUp();
            }
        });
    
        var $dropDown = $(".dropdown > a");
    
        $dropDown.each(function () {
            console.log("lbfdgik");
    
            $(this).on("click", function (e) {
                if ($(window).innerWidth() < 992) {
                    e.preventDefault();
    
                    $(this).parents("li").siblings("li").find(".sub-menu").slideUp();
    
                    $(this).siblings(".sub-menu").stop().slideToggle();
                }
            });
        });
    
        $(".bsnav-mobile-overlay").on("click", function () {
            if ($(window).innerWidth() < 992) {
                console.log("lik");
                $(this).removeClass("active");
                $(".navdiv ").toggleClass("active");
                $(".navbar-toggler").toggleClass("active");
            }
        }); 
    },

    swiperSlider: function(){
        var swiper = new Swiper(".mySwiper", {
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: true,
              },
            loop: true,
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },

            // Responsive breakpoints
            breakpoints: {
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            },
         
        });
    },

    stickyMenu: function(){
        
         // Scroll to top and  sticky menu

        $(window).scroll(function () {
            let headerTopHeight = $('.header__top').height();
            if ($(window).innerWidth() > 769) {
                if ($(this).scrollTop() > headerTopHeight) {
                    $(".header__middle").addClass("shrink");
                    $('.header__top').hide();
                } else {
                    $(".header__middle").removeClass("shrink");
                    $('.header__top').show();
                }
            }
        });

        $("#scrollTop").click(function () {
            $("html").animate({ scrollTop: 0 }, "slow");
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() < 200) {
                $("#scrollTop").fadeOut();
            } else {
                $("#scrollTop").fadeIn();
            }
        });

    },


    init: function () {
        this.menu();
        this.stickyMenu();
        this.swiperSlider();
        this.recommendSwiper();
      },


}

$(document).ready(function(){
    feather.replace()

})


$(document).ready(function(){
    $(".carousel").carousel({
        interval: 6000,
    });

    wow = new WOW({
        animateClass: "animated",
        offset: 100,
    });
    wow.init();

})


document.addEventListener("DOMContentLoaded", tEvents.init());

  