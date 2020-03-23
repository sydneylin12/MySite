$(document).ready(function(){
    $(".menu-toggler").on("click", function(){
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    })

    $(".nav-list a").on("click", function(){
        $(".top-nav").toggleClass("open");
        $(".menu-toggler").toggleClass("open");
    })

    AOS.init({
        easing: "ease",
        duration: 1800
    });
});
