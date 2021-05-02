// const { active } = require("browser-sync");


var typed = new Typed('.animate', {
    strings: [
        "Front End Web Developer",
        "Front End Web Developer",
        "Wordpress Customization Expert",
        "UI/UX Designer"
    ],
     typeSpeed : 100,
     backSpeed : 50,
     loop: true
})


$(document).ready(function(){
    $(".testimonial-slider").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 2 }, 1024: { items: 2 }, 1200: { items: 3 } },
    });
})

$(document).ready(function(){
    $('.toggle').click(function(){
        $('.side-navigation').toggleClass('active');
        $('.hero .content').toggleClass('active');
        $('.toggle').toggleClass('active');
    });
    $('.nav-items').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.side-navigation').toggleClass('active');
        $('.toggle').toggleClass('active');
    })

    $('.home_btn').click(function(){
        $('#hero').removeClass('active');
        $('#about').removeClass('active');
        $('#resume').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').removeClass('active');
    })

    $('.about_btn').click(function(){
        $('#about').addClass('active');
        $('#hero').addClass('active');
        $('#resume').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').removeClass('active');
    })
    $('.resume_btn').click(function(){
        $('#resume').addClass('active');
        $('#hero').addClass('active');
        $('#about').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').removeClass('active');
    })
    $('.portfolio_btn').click(function(){
        $('#portfolio').addClass('active');
        $('#hero').addClass('active');
        $('#about').removeClass('active');
        $('#resume').removeClass('active');
        $('#contact').removeClass('active');
    })
    $('.contact_btn').click(function(){
        $('#contact').addClass('active');
        $('#hero').addClass('active');
        $('#about').removeClass('active');
        $('#resume').removeClass('active');
        $('#portfolio').removeClass('active');
    })
    $('.buttons').click(function(){
        $('.col-md-6').addClass('active');
    })
});
$(document).ready(function(){
    $('.button').click(function(){
        $('.col-md-6').addClass('active');
        var value =$(this).attr("data-filter");
        if (value === 'all') {
            $('.filter').show("1000")
        }
        else{
            $(".filter").not("." + value).hide("1000");
            $(".filter").filter("." + value).show("1000");
        }
    })
    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
});























































































//# sourceMappingURL=script.js.map
