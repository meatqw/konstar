$(document).ready((function () { $(".services_slider").owlCarousel({ loop: !0, items: 1, margin: 10, nav: !0, autoHeight: !0 }) })), $(document).ready((function () { $(".clients_carousel").owlCarousel({ loop: !0, margin: 10, responsiveClass: !0, responsive: { 0: { items: 2, nav: !0 }, 600: { items: 3, nav: !1 }, 1e3: { items: 5, nav: !1, loop: !1 } } }) })), $().fancybox({ selector: '[data-fancybox="gallery"]', loop: !0 }), jQuery((function (e) { e(".masked-input").mask("+38 ( 999 ) 999-99-99") })), $((function () { $(".video_in").on("click", (function () { for (var e = $(this), i = e.contents(), n = i.length, t = null, o = 0; o < n; o++)8 == i[o].nodeType && (t = i[o].textContent); e.addClass("player").html(t), e.off("click") })) })), $(document).ready((function () { var e, i, n, t; $(".next").click((function () { e = $(this).parent(), i = $(this).parent().next(), $("#progressbar li").eq($("fieldset").index(i)).addClass("active"), i.show(), e.animate({ opacity: 0 }, { step: function (n) { t = 1 - n, e.css({ display: "none", position: "relative" }), i.css({ opacity: t }) }, duration: 600 }) })), $(".previous").click((function () { e = $(this).parent(), n = $(this).parent().prev(), $("#progressbar li").eq($("fieldset").index(e)).removeClass("active"), n.show(), e.animate({ opacity: 0 }, { step: function (i) { t = 1 - i, e.css({ display: "none", position: "relative" }), n.css({ opacity: t }) }, duration: 600 }) })), $(".radio-group .radio").click((function () { $(this).parent().find(".radio").removeClass("selected"), $(this).addClass("selected") })), $(".submit").click((function () { return !1 })) }));


const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    // loop: true,
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

const swiperMain = new Swiper('.swiper-main', {
    slidesPerView: 'auto',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
        stopOnLastSlide: true,
        disableOnInteraction: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    speed: 500,

    pagination: {
        el: '.swiper-pagination',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        // draggable: true,
    },
});

const swiperPartners = new Swiper('.swiper-partners', {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 20,

    breakpoints: {
        320: {
            slidesPerView: 2,
        },

        520: {
            slidesPerView: 3,
        },

        992: {
            slidesPerView: 5,
        },
    }
});
