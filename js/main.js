//main

$(".logo-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 4
        },
        600: {
            items: 5,
            margin: 0,
        },
        1024: {
            items: 6,
            margin: 0,
        },
        1025: {
            items: 7,
            margin: 0,
        }
    }
});

/*mbl-nav*/
$(".mbl-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});
$(".mbl-nav .box").click(function (e) {
    e.stopPropagation();
});
$(".mbl-dot-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});
/*mobile nav ropdown*/
$(".mbl-nav-opener").click(function () {
    $('.mbl-nav-opener .mbl-nav-drop').animate({
        height: 'toggle'
    });
});