$(document).ready(function () {
    // NavBar Sectiotn 
    $(".bar-icon ").click(function () {
        $(".nav").slideToggle();
        $(this).toggleClass('active-menu');
    });
    // FAQ Accordion Page Script
    if ($(".faq-accordion").length) {
        $.fn.accordion = function () {
            const trigger = $(this).find(".faq-header");
            const collapse = $(this).find(".faq-content");

            $(trigger).first().addClass("is-active");
            $(collapse).first().show();

            $(trigger).each(function () {
                $(this).on("click", function () {
                    $(this).siblings(".faq-content").slideToggle();
                    $(this).toggleClass("is-active");
                    $(this)
                        .parent()
                        .siblings(".faq-item")
                        .find(".faq-header")
                        .removeClass("is-active");
                    $(this)
                        .parent()
                        .siblings(".faq-item")
                        .find(".faq-content")
                        .slideUp();
                });
            });
        };
        $(".faq-accordion").accordion();
    }
})