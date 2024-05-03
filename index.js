$("#b1").on("click", function(){
    location.href = "linnabweru.html";
});
$("#b2").on("click", function(){
    location.href = "linkazo.html";
});
$("#i").on("click",function(){
    $("#i").stop(animation);
});
$(".d1").on("click",function(){
    location.href = "linnabweru.html";
});
$(".d2").on("click",function(){
    location.href = "linkazo.html";
});

// LINNET-NABWERU'S jQUERY STARTS HERE!

// $("#mm").css("height","292px")
// $("#mm").css("width","200px")
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

    $('#scroll-to-top').click(function() {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});


$('.dropdown-toggle').on('click', function() {
    $(this).next('.dropdown-menu').slideToggle();
});

$('.slidecontainer img').click(function() {
    var imgSrc = $(this).attr('src');
    $('.slidecontainer img').removeClass('active');
    $(this).addClass('active');
    $('.slidecontainer img').fadeOut();
    $(this).fadeIn();
});

$('form').submit(function(e) {
    var searchTerm = $(this).find('input[type="search"]').val();
    if (searchTerm.trim() === '') {
        alert('Please enter a search term');
        e.preventDefault();
    }
});

$('.social-links a').hover(function() {
    $(this).addClass('animated bounce');
}, function() {
    $(this).removeClass('animated bounce');
});
