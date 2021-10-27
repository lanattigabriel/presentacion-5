
$(".seccionProductos__container").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 2.2,
            nav: false,
        },
        400:{
            items: 2.4,
            nav: false,
        },
        600:{
            items: 3.5,
            nav: false,
        },
        768:{
            items: 4.6,
            nav: false,
        },
        1000:{
            items: 5.8,
            nav: false,
        },
        1200:{
            items: 8.5,
            nav: false,
        }
    }
})