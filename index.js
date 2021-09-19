$('.nav-content-link').hover(
    function() {

        if ($(this).prop('id') == 'men') {
            $(this).parent().parent().addClass('active-men');
            $('.modal-area').html("<h2 style='color: rgb(237, 76, 76);'>Stuff for men</h2>")
        } else if ($(this).prop('id') == 'women') {
            $(this).parent().parent().addClass('active-women');
            $('.modal-area').html("<h2 style='color: rgb(247, 173, 173);'>stuff for women</h2>")
        } else if ($(this).prop('id') == 'kids') {
            $(this).parent().parent().addClass('active-kids');
            $('.modal-area').html("<h2 style='color: rgb(255, 87, 20);'>stuff for kids</h2>")
        } else if ($(this).prop('id') == 'home') {
            $(this).parent().parent().addClass('active-home');
            $('.modal-area').html("<h2 style='color: rgb(240, 199, 17);'>stuff for daily use</h2>")
        } else if ($(this).prop('id') == 'beauty') {
            $(this).parent().parent().addClass('active-beauty');
            $('.modal-area').html("<h2 style='color: skyblue;'>stuff for beauty</h2>")
        }
        $('.modal-area').css({
            'visibility': 'visible',
        });
        on();
        // $('.modal-area').fadeIn(500);
    },
    function() {
        if ($(this).prop('id') == 'men') {
            $(this).parent().parent().removeClass('active-men');
        } else if ($(this).prop('id') == 'women') {
            $(this).parent().parent().removeClass('active-women');
        } else if ($(this).prop('id') == 'kids') {
            $(this).parent().parent().removeClass('active-kids');
        } else if ($(this).prop('id') == 'home') {
            $(this).parent().parent().removeClass('active-home');
        } else if ($(this).prop('id') == 'beauty') {
            $(this).parent().parent().removeClass('active-beauty');
        }
        off();
        $('.modal-area').css({
            'visibility': 'hidden'
        });
        // $('.modal-area').fadeOut(100);
    });
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load", function() {
    showSlides(slideIndex);
    myTimer = setInterval(function() { plusSlides(1) }, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1) {
        myTimer = setInterval(function() { plusSlides(n + 2) }, 4000);
    } else {
        myTimer = setInterval(function() { plusSlides(n + 1) }, 4000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() { plusSlides(n + 1) }, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function() { plusSlides(slideIndex) }, 4000);
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}