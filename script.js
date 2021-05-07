var i = 0;
var txt = ', I hope, to someone.'; /* The text */
var slideIndex = 0;
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

showSlides();
showSlides1();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function showSlides1() {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides1, 4000); // Change image every 4 seconds
}

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    // typeWriter()
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        // this.typeWriter();
        modal.style.display = "none";
    }
}   