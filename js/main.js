var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

setInterval(() => {
    currentSlide(++(slideIndex))
}, 3000)
console.log (setInterval)

function scrollTo1() {
    window.scrollTo({
        top: 1100,
        behavior: "smooth"
    });
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1){
        slideIndex=slides.length
    }
    for (i=0;  i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";



}





var slideIndex__2 =1;
showSlides__2(slideIndex__2);

function plusSlides__2(n) {
    showSlides__2(slideIndex__2 += n);
}

function showSlides__2 (n) {
    var i__2;
    var slides__2 = document.getElementsByClassName("mySlides__22");

    if (n > slides__2.length) {
        slideIndex__2 = 1
    }
    if (n < 1){
        slideIndex__2=slides__2.length
    }
    for (i=0;  i < slides__2.length; i++){
        slides__2[i].style.display = "none";
    }

    slides__2[slideIndex__2-1].style.display = "flex";
}

