$(document).ready(function(){
    $(".menu-toggler").on("click", function(){
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    })

    AOS.init({
        easing: "ease",
        duration: 1800
    });
});
