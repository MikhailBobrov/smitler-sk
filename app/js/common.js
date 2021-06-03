$(function() {
    // $('#my-menu').mmenu({
    //     extensions: [
    //         "shadow-page",
    //         "theme-black",
    //         "effect-menu-slide",
    //         "pagedim-black",
    //         "position-right"
    //     ],
    //     navbar: {
    //         title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
    //     },
    //     offCanvas: {
    //         position: 'right'
    //     }
    // });

    // let api = $('#my-menu').data('mmenu');
    // api.bind('open:finish', function () {
    //     $('.hamburger').addClass('is-active')
    // });
    //
    // api.bind('close:finish', function () {
    //     $('.hamburger').removeClass('is-active')
    // });

    // для ровного вычисления высоты нужно инициализировать owl.carousel
    // потом взять функцию carouselService() которая вычисляет высоту
    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService();
        }, 100)
    });

    // карусель
    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        // animateOut: 'fadeOut',
        // animateIn: 'flipInX',
        // items:1,
        // margin:30,
        // stagePadding:30,
        smartSpeed:700,
        navText:['<i class="fa fa-angle-double-left"></i>' , '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                // nav:true
            },
            800:{
                items:2,
                // nav:false
            },
            1100:{
                items:3,
                // nav:true,
                // loop:false
            }
        }
    });

    //функция которая сравнивает высоту carousel-services-content и высоту carousel-services-image
    function carouselService() {
         $('.carousel-services-item').each(function () {
             let ths = $(this);
             thsh = ths.find('.carousel-services-content').outerHeight();
             ths.find('.carousel-services-image').css('min-height', thsh)
         });
    }

    carouselService();

    // функция для вторых слов - (смотри по тегу)
    $('.carousel-services-composition .h3').each(function () {
        let ths = $(this);
        // ниже это регулярное выражение
        ths.html(ths.html().replace(/(\S+)\s*$/,'<span>$1</span>'));
    });

    // функция для первых слов - (для заголовков)
    $('section .h2').each(function () {
        let ths = $(this);
        // ниже это регулярное выражение - выделяет только первое слово из строки
        ths.html(ths.html().replace(/^(\S+)/,'<span>$1</span>'));
    });


    // selectize
    $('select').selectize({
        create: true,
    });

    // карусель - reviews
    $('.reviews').owlCarousel({
        loop: true,
        items:1,
        nav: false,
        dots: true,
        margin:30,
        stagePadding:30,
        smartSpeed:700,
        autoHeight: true
    });

    // карусель - parners
    $('.partners').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin:30,
        stagePadding:30,
        smartSpeed:700,
        navText:['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            }
        }

    });

    // наша кнопка вверх
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    })

    // функция по клику на кнопку - улетает наверх
    $('.top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 'slow', 'swing')
    })
    
    // AJAX script для отправки формы

    //E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
           $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
                // Done Functions
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });


    // функция которая выполнятеся при ресайзе страницы
    function onResize() {
        // equalHeights
        $('.carousel-services-content').equalHeights();
    }onResize();

    window.onresize = function () {
        onResize()
    }
});

// здесь пишем функцию для окна window для Preloadera
$(window).on('load', function () {
    $('.preloader').delay(1000).fadeOut('slow');
})


// mmenu на чистом js

document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu( "#my-menu", {
            extensions: [
            "shadow-page",
            "theme-black",
            "effect-menu-slide",
            "pagedim-black",
            "position-right"
        ],

        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
        },
        // offCanvas: {
        //     position: 'right'
        // }
        });

        let menu = new Mmenu( "#my-menu" );
        let api = menu.API;

        api.bind( "open:finish", function () {
            document.querySelector('.hamburger').classList.add('is-active')
        });
        api.bind( "close:finish", function () {
                document.querySelector('.hamburger').classList.remove('is-active')
            }
        );

        // функция которая сравнивает высоту carousel-services-content и высоту carousel-services-image - читсый js
        // почему то не работает

        // function carouselService() {
        //     let carouselContent = document.querySelectorAll('.carousel-services-content');
        //     let carouselImage = document.querySelectorAll('.carousel-services-image');
        //
        //     let carouselContentArray = Array.from(carouselContent);
        //     carouselContentArray.forEach(item => {
        //         console.log(item.clientHeight)
        //     })
        // }
        //
        // carouselService()

        // наша функция на чистом js для кнопки наверх
        // const top = document.querySelector('.top');
        // const headerFlex = document.querySelector('.header-flex');
        // console.log(headerFlex.offsetHeight);
        //
        // window.addEventListener('scroll', function () {
        //     console.log(window.scrollY);
        //     if (window.scrollY > headerFlex.offsetHeight - 150) {
        //         top.classList.add('active')
        //     } else {
        //         top.classList.remove('active')
        //     }
        // })

        // window.pageYOffset - свойство отвечает за то, сколько мы уже прокрутили страницу (координата)

        // let scrolled;
        // let timer; // таймер будет считать постепенно прокручивая страницу
        //
        // top.addEventListener('click', function () {
        //     scrolled = window.pageYOffset;
        //     scrollToTop();
        // })

        // window.scrollTo(x, y) - данное событие задает автоматическую прокрутку страницы до указанных координат (https://developer.mozilla.org/ru/docs/Web/API/Window/scrollTo)

        // function scrollToTop() {
        //     if (scrolled > 0) {
        //         window.scrollTo(0, scrolled);// тут она ничего не сделает, просто проверит что есть прокрутка
        //         scrolled = scrolled - 200 // 50 - определяет скорость прокрутки - уменьшит текущую координату на 200
        //         timer = setTimeout(scrollToTop, 100); // тут постоянная прокрутка вверх
        //     }
        //     else {
        //         clearTimeout(timer);// останавливаю таймер
        //         window.scrollTo(0, 0);// подтянул страницу до нулевых координат
        //     }
        // }
    })






