$(function () {

    /* ANIMACION BARRA PROGRESO */
    $('.componente-progreso').eq(0).find("div").delay(0).animate({
        width: $('.componente-progreso').eq(0).find("div").attr("data-percentage") + '%'
    });
    $('.componente-progreso').eq(1).find("div").delay(500).animate({
        width: $('.componente-progreso').eq(1).find("div").attr("data-percentage") + '%'
    });
    $('.componente-progreso').eq(2).find("div").delay(1000).animate({
        width: $('.componente-progreso').eq(2).find("div").attr("data-percentage") + '%'
    });
    $('.componente-progreso').eq(3).find("div").delay(1500).animate({
        width: $('.componente-progreso').eq(3).find("div").attr("data-percentage") + '%'
    });
    $('.componente-progreso').eq(4).find("div").delay(1500).animate({
        width: $('.componente-progreso').eq(4).find("div").attr("data-percentage") + '%'
    });

});

//MENU 
$(function () {

    "use strict";

    var toggles = document.querySelectorAll(".menu-mobile");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            $(".mask").toggleClass('active');
            $(".menu-option").toggleClass('open');
            $(".top_menu").show();
            $(".menu-option").show();
            $('.menu-option').animate({
                right: '0%'
            }, 200);
            $(".bottom_menu").toggleClass('active');

            if (this.classList.contains("is-active") === true) {
                this.classList.remove("is-active");
                $('.menu-option').animate({
                    right: '-100%'
                }, 200);
                $(".menu-option").hide();
            } else {
                this.classList.add("is-active");


            }
            //(this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
        });
    }

    resizeMenu();

    function resizeMenu() {
        var newwidth = $(window).width();
        var newwidth = $("header").width();
        if (newwidth < 991) {
            if (!$(".content_menu").is(':has(.top_menu)')) {
                $(".content_menu ul:first-child").after($(".top_menu"));
            }
        } else {
            $("header").prepend($(".top_menu"));
            $('.menu-option').animate({
                right: '-100%'
            }, 200);
            $(".menu-option").show();
            $("bottom_menu").removeClass("active");
            $(".menu-option").removeClass("open");
            $(".menu-mobile").removeClass("is-active");
            $(".mask").removeClass("active");

        }
    }

    $(".usuario").click(function (e) {
        e.preventDefault();
        $(".cerrar-sesion").slideToggle();
    });

    $(window).resize(resizeMenu);

});

$(function () {
    $(".table-parent").click(function (e) {
        console.log("ho");
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).toggleClass('open');
        e.stopPropagation();
    });

    $(".table-parent input[type='checkbox']").click(function (e) {
        e.stopPropagation();
        if (this.checked) {
            $(this).parent().parent().parent().parent().next().find("input[type='checkbox']").each(function () {
                this.checked = true;
            })
        } else {
            $(this).parent().parent().parent().parent().next().find("input[type='checkbox']").each(function () {
                this.checked = false;
            })
        }
    });

    $(".table-children").each(function () {
        $(".table-children input[type='checkbox']").each(function () {
            if ($(this).is(':disabled')) {
                $(this).parent().parent().parent().parent().parent().prev().find("input[type='checkbox']").attr("disabled", true);
            }
        });
    });
});
