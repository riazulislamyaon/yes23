$(function () {

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function (index, value) {
        $(this).find($('circle.complete')).removeAttr('style');
    });

    // Activate progress animation on scroll
    $(window).scroll(function () {
        $('svg.radial-progress').each(function (index, value) {
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({
                    'stroke-dashoffset': strokeDashOffset
                }, 1250);
            }
        });
    }).trigger('scroll');

});



/*navbar*/
var navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    navbar.classList.toggle("sticky1", window.scrollY > 0)
});

$(document).ready(function () {
    $('.navbar ul li').click(function () {
        $(this).addClass('activea').siblings().removeClass('activea')
    });
});

$(document).ready(function () {
    $('.nav-link').click(function () {
        $('.nav-link').removeClass('navb');
        $(this).addClass('navb');
    });
});


/*to top fixed*/
/*
var totop=document.querySelector(".totop");
window.addEventListener("scroll",function(){
    if(
        window.pageYOffset>100
    )
totop.classList.add("totop1")
else(
    totop.classList.remove("totop1")  
)
})*/
/*
$(document).ready(function () {
    $('.totop').click(function () {
        $('html, body').animate({scrollTop:0}, 1500);
    
    });
});
*/
$(document).ready(function () {
$('.totop').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500,);

});
});

$(document).ready(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();

        if (top > 100) {
            $(".totop").fadeIn()

        } else {
            $(".totop").fadeOut("500")

        }
    })
});
